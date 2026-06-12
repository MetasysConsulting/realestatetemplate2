import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
