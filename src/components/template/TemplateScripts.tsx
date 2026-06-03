"use client";

import Script from "next/script";

const SCRIPTS = [
  "/js/jquery.min.js",
  "/js/bootstrap.min.js",
  "/js/lazysize.min.js",
  "/js/swiper-bundle.min.js",
  "/js/swiper.js",
  "/js/main.js",
] as const;

export function TemplateScripts() {
  return (
    <>
      {SCRIPTS.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" />
      ))}
    </>
  );
}
