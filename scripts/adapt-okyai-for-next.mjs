#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src");

const CLIENT_DIRS = ["components", "hooks", "layout", "pages"];

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts)$/.test(entry.name)) files.push(full);
  }
  return files;
}

function adaptContent(content, filePath) {
  let next = content;

  next = next.replace(
    /import\s+\{\s*useNavigate,\s*Link\s*\}\s+from\s+["']react-router-dom["'];?/g,
    'import Link from "next/link";\nimport { useRouter } from "next/navigation";'
  );
  next = next.replace(
    /import\s+\{\s*Link,\s*useNavigate\s*\}\s+from\s+["']react-router-dom["'];?/g,
    'import Link from "next/link";\nimport { useRouter } from "next/navigation";'
  );
  next = next.replace(
    /import\s+\{\s*Link,\s*useLocation\s*\}\s+from\s+["']react-router-dom["'];?/g,
    'import Link from "next/link";\nimport { usePathname } from "next/navigation";'
  );
  next = next.replace(
    /import\s+\{\s*useNavigate\s*\}\s+from\s+["']react-router-dom["'];?/g,
    'import { useRouter } from "next/navigation";'
  );
  next = next.replace(
    /import\s+\{\s*useLocation\s*\}\s+from\s+["']react-router-dom["'];?/g,
    'import { usePathname } from "next/navigation";'
  );
  next = next.replace(
    /import\s+\{\s*Outlet,\s*useLocation\s*\}\s+from\s+["']react-router-dom["'];?/g,
    'import { usePathname } from "next/navigation";'
  );

  next = next.replace(/\bconst navigate = useNavigate\(\)/g, "const router = useRouter()");
  next = next.replace(/\bnavigate\(/g, "router.push(");

  if (filePath.includes(`${path.sep}layout${path.sep}leftsidebar`)) {
    next = next.replace(/\bconst location = useLocation\(\)/g, "const pathname = usePathname()");
    next = next.replace(/location\.pathname/g, "pathname");
  }

  if (filePath.includes(`${path.sep}layout${path.sep}layout.tsx`)) {
    next = next.replace(/\bconst location = useLocation\(\)/g, "const pathname = usePathname()");
    next = next.replace(/location\.pathname/g, "pathname");
    next = next.replace(/<Outlet\s*\/>/g, "{children}");
    next = next.replace(
      /const Layout = \(\) => \{/,
      'const Layout = ({ children }: { children: React.ReactNode }) => {'
    );
  }

  if (filePath.includes(`${path.sep}hooks${path.sep}useScrollToTop`)) {
    next = next.replace(/\bconst location = useLocation\(\)/g, "const pathname = usePathname()");
    next = next.replace(/\[location,/g, "[pathname,");
  }

  next = next.replace(/<Link to=/g, "<Link href=");
  next = next.replace(/asChild>\s*\n\s*<Link to=/g, "asChild>\n                    <Link href=");

  return next;
}

function needsUseClient(filePath, content) {
  if (content.startsWith('"use client"') || content.startsWith("'use client'")) return content;
  const rel = path.relative(root, filePath).replace(/\\/g, "/");
  const inClientDir = CLIENT_DIRS.some((d) => rel.startsWith(`${d}/`));
  if (!inClientDir) return content;
  return `"use client";\n\n${content}`;
}

for (const file of walk(root)) {
  const rel = path.relative(root, file).replace(/\\/g, "/");
  if (!CLIENT_DIRS.some((d) => rel.startsWith(`${d}/`))) continue;

  const original = fs.readFileSync(file, "utf8");
  const adapted = needsUseClient(file, adaptContent(original, file));
  if (adapted !== original) fs.writeFileSync(file, adapted);
}

console.log("Okyai source adapted for Next.js");
