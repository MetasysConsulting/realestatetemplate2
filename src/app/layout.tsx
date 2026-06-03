import type { Metadata } from "next";
import { Lexend, Manrope } from "next/font/google";
import { TemplateScripts } from "@/components/template/TemplateScripts";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Site 2", template: "%s" },
  description: "Second website — paste HTML template and convert.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lexend.variable} ${manrope.variable}`}>
      <head>
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/icons/icomoon/style.css" />
      </head>
      <body>
        {children}
        <TemplateScripts />
      </body>
    </html>
  );
}
