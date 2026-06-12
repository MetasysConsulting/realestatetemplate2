import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OkyAI — Admin Dashboard",
  description: "Advanced AI dashboard and chatbot admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
