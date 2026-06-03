import { SetupPlaceholder } from "@/components/template/SetupPlaceholder";
import { TemplatePage } from "@/components/template/TemplatePage";
import { loadTemplatePageBySlug } from "@/lib/load-template-page";
import { TEMPLATE_PAGES } from "@/lib/template-manifest";

export default function NotFound() {
  if (TEMPLATE_PAGES.length === 0) {
    return <SetupPlaceholder />;
  }

  const data = loadTemplatePageBySlug("template-404");
  if (data) {
    return <TemplatePage html={data.html} bodyClass={data.bodyClass} />;
  }

  return <SetupPlaceholder />;
}
