export function SetupPlaceholder() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        fontFamily: "system-ui, sans-serif",
        background: "#f4f6fb",
      }}
    >
      <div style={{ maxWidth: 560, background: "#fff", padding: 40, borderRadius: 12 }}>
        <h1 style={{ marginTop: 0 }}>Site 2 — Ready for your HTML</h1>
        <p>
          Paste your HTML template into <code>template-source/</code>, then convert
          it into Next.js pages.
        </p>
        <ol style={{ lineHeight: 1.8 }}>
          <li>
            Copy <strong>.html</strong> files into{" "}
            <code>template-source/html/</code>
          </li>
          <li>
            Copy <code>css/</code>, <code>js/</code>, <code>images/</code>,{" "}
            <code>icons/</code> into <code>template-source/</code> (same layout as
            the zip)
          </li>
          <li>
            Run: <code>pnpm convert-template</code>
          </li>
          <li>
            Run: <code>pnpm dev</code> (port <strong>3001</strong>)
          </li>
        </ol>
        <p>
          Full instructions: <code>site-2-web/template-source/README.md</code>
        </p>
        <p style={{ marginBottom: 0, color: "#666" }}>
          Site 1 (Proty) runs separately in <code>../proty-web</code> on port 3000.
        </p>
      </div>
    </main>
  );
}
