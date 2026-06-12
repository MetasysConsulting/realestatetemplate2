import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "REOVANA Admin",
  description: "Admin dashboard for REOVANA distressed property marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${lexend.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
