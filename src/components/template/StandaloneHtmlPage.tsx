"use client";

type StandaloneHtmlPageProps = {
  html: string;
  title: string;
};

/**
 * Renders self-contained HTML prototypes (inline CSS + JS) via iframe so scripts run.
 */
export function StandaloneHtmlPage({ html, title }: StandaloneHtmlPageProps) {
  return (
    <iframe
      title={title}
      srcDoc={html}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  );
}
