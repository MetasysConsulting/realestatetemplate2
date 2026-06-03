/**
 * Converts HTML files from template-source/ into Next.js static pages.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SOURCE_ROOT = path.join(ROOT, "template-source");
const HTML_DIR = path.join(SOURCE_ROOT, "html");
const ROUTES_CONFIG = path.join(SOURCE_ROOT, "routes.json");
const OUT_DIR = path.join(ROOT, "src", "generated", "pages");
const MANIFEST_OUT = path.join(ROOT, "src", "lib", "template-manifest.ts");
const REGISTRY_OUT = path.join(ROOT, "src", "generated", "page-registry.ts");

const ASSET_DIRS = ["css", "js", "images", "icons"];

function fileToDefaultRoute(filename) {
  const base = filename.replace(/\.html$/i, "");
  if (base === "index") return "/";
  if (base === "404") return "/template-404";
  return `/${base}`;
}

function loadRouteMap() {
  /** @type {Record<string, string>} */
  const map = {};

  if (!fs.existsSync(HTML_DIR)) {
    return map;
  }

  const files = fs
    .readdirSync(HTML_DIR)
    .filter((f) => f.endsWith(".html") && !f.startsWith("."));

  for (const file of files) {
    map[file] = fileToDefaultRoute(file);
  }

  if (fs.existsSync(ROUTES_CONFIG)) {
    const overrides = JSON.parse(fs.readFileSync(ROUTES_CONFIG, "utf8"));
    Object.assign(map, overrides);
  }

  return map;
}

function slugToId(slug) {
  return slug.replace(/[^a-zA-Z0-9]/g, "_").replace(/^(\d)/, "_$1");
}

function routeToSlug(route) {
  if (route === "/") return "index";
  return route.replace(/^\//, "").replace(/\//g, "__");
}

function copyAssets() {
  const publicRoot = path.join(ROOT, "public");
  for (const dir of ASSET_DIRS) {
    const src = path.join(SOURCE_ROOT, dir);
    if (!fs.existsSync(src)) continue;
    const dest = path.join(publicRoot, dir);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.cpSync(src, dest, { recursive: true });
    console.log(`✓ Copied template-source/${dir} → public/${dir}`);
  }
}

function transformHtml(html, hrefReplacements) {
  let out = html;

  for (const { from, to } of hrefReplacements) {
    const escaped = from.replace(/\./g, "\\.");
    out = out.replace(new RegExp(`href="${escaped}"`, "g"), `href="${to}"`);
    out = out.replace(new RegExp(`href='${escaped}'`, "g"), `href='${to}'`);
  }

  out = out.replace(/src="images\//g, 'src="/images/');
  out = out.replace(/src='images\//g, "src='/images/");
  out = out.replace(/data-src="images\//g, 'data-src="/images/');
  out = out.replace(/data-light="images\//g, 'data-light="/images/');
  out = out.replace(/data-dark="images\//g, 'data-dark="/images/');
  out = out.replace(/url\(images\//g, "url(/images/");
  out = out.replace(/src="icons\//g, 'src="/icons/');
  out = out.replace(/href="css\//g, 'href="/css/');
  out = out.replace(/src="js\//g, 'src="/js/');

  return out;
}

function extractPage(html, filename) {
  const bodyMatch = html.match(/<body[^>]*class="([^"]*)"[^>]*>/i);
  const bodyClass = bodyMatch?.[1] ?? "";

  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch?.[1]?.trim() ?? "Site 2";

  const wrapperStart = html.indexOf('<div id="wrapper">');
  const scriptStart = html.indexOf("<!-- Javascript -->");
  const fallbackScript = html.indexOf('<script src="js/');

  let end = scriptStart > -1 ? scriptStart : fallbackScript;
  if (end < 0) end = html.length;

  let chunk =
    wrapperStart > -1
      ? html.slice(wrapperStart, end)
      : html.slice(html.indexOf("<body"), end);

  return { bodyClass, title, html: chunk };
}

// --- main ---
fs.mkdirSync(OUT_DIR, { recursive: true });
copyAssets();

const ROUTE_MAP = loadRouteMap();
const hrefReplacements = Object.entries(ROUTE_MAP)
  .sort((a, b) => b[0].length - a[0].length)
  .map(([file, route]) => ({ from: file, to: route }));

/** @type {Array<{route:string,file:string,slug:string,title:string,bodyClass:string}>} */
const manifest = [];

if (Object.keys(ROUTE_MAP).length === 0) {
  console.log("\nNo HTML files in template-source/html/ yet.");
  console.log("Paste your template, then run: pnpm convert-template\n");
} else {
  for (const [file, route] of Object.entries(ROUTE_MAP)) {
    const filePath = path.join(HTML_DIR, file);
    if (!fs.existsSync(filePath)) {
      console.warn(`Skip missing: ${file}`);
      continue;
    }

    const raw = fs.readFileSync(filePath, "utf8");
    const page = extractPage(raw, file);
    page.html = transformHtml(page.html, hrefReplacements);
    const slug = routeToSlug(route);

    fs.writeFileSync(
      path.join(OUT_DIR, `${slug}.json`),
      JSON.stringify({ route, file, ...page }),
    );

    manifest.push({
      route,
      file,
      slug,
      title: page.title,
      bodyClass: page.bodyClass,
    });

    console.log(`✓ ${file} → ${route}`);
  }
}

// Clean stale generated pages
const validSlugs = new Set(manifest.map((m) => m.slug));
for (const f of fs.readdirSync(OUT_DIR)) {
  if (f.endsWith(".json") && !validSlugs.has(f.replace(".json", ""))) {
    fs.unlinkSync(path.join(OUT_DIR, f));
  }
}

const manifestTs = `/* AUTO-GENERATED by scripts/convert-template.mjs */
export type TemplatePageMeta = {
  route: string;
  file: string;
  slug: string;
  title: string;
  bodyClass: string;
};

export const TEMPLATE_PAGES: TemplatePageMeta[] = ${JSON.stringify(manifest, null, 2)};

export function getTemplateMetaByRoute(route: string): TemplatePageMeta | undefined {
  return TEMPLATE_PAGES.find((p) => p.route === route);
}

export function getTemplateMetaBySlug(slug: string): TemplatePageMeta | undefined {
  return TEMPLATE_PAGES.find((p) => p.slug === slug);
}
`;

fs.writeFileSync(MANIFEST_OUT, manifestTs);

if (manifest.length > 0) {
  const registryImports = manifest
    .map((m) => `import ${slugToId(m.slug)} from "./pages/${m.slug}.json";`)
    .join("\n");
  const registryEntries = manifest
    .map((m) => `  "${m.slug}": ${slugToId(m.slug)},`)
    .join("\n");

  fs.writeFileSync(
    REGISTRY_OUT,
    `/* AUTO-GENERATED */
${registryImports}
import type { TemplatePageData } from "../lib/load-template-page";
export const TEMPLATE_PAGE_REGISTRY: Record<string, TemplatePageData> = {
${registryEntries}
};
`,
  );
} else {
  fs.writeFileSync(
    REGISTRY_OUT,
    `/* AUTO-GENERATED — no pages yet */
import type { TemplatePageData } from "../lib/load-template-page";
export const TEMPLATE_PAGE_REGISTRY: Record<string, TemplatePageData> = {};
`,
  );
}

console.log(`\nGenerated ${manifest.length} page(s).`);
