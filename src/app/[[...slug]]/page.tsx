import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SetupPlaceholder } from "@/components/template/SetupPlaceholder";
import { StandaloneHtmlPage } from "@/components/template/StandaloneHtmlPage";
import { TemplatePage } from "@/components/template/TemplatePage";
import { loadTemplatePageBySlug } from "@/lib/load-template-page";
import {
  TEMPLATE_PAGES,
  getTemplateMetaByRoute,
} from "@/lib/template-manifest";

export const dynamic = "force-static";
export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

function resolveRoute(slug?: string[]): string {
  if (!slug?.length) return "/";
  return `/${slug.join("/")}`;
}

export async function generateStaticParams() {
  if (TEMPLATE_PAGES.length === 0) {
    return [{ slug: [] }];
  }
  return TEMPLATE_PAGES.map((page) => {
    if (page.route === "/") return { slug: [] };
    return { slug: page.route.replace(/^\//, "").split("/") };
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const route = resolveRoute((await params).slug);
  const meta = getTemplateMetaByRoute(route);
  return {
    title: meta?.title ?? "ForeclosureIQ",
    description: "Distressed property intelligence — foreclosure listings prototype.",
  };
}

export default async function TemplateRoutePage({ params }: PageProps) {
  if (TEMPLATE_PAGES.length === 0) {
    return <SetupPlaceholder />;
  }

  const route = resolveRoute((await params).slug);
  const pageMeta = getTemplateMetaByRoute(route);

  if (!pageMeta) notFound();

  const data = loadTemplatePageBySlug(pageMeta.slug);
  if (!data) notFound();

  if (data.standalone || pageMeta.standalone) {
    return <StandaloneHtmlPage html={data.html} title={data.title} />;
  }

  return <TemplatePage html={data.html} bodyClass={data.bodyClass} />;
}
