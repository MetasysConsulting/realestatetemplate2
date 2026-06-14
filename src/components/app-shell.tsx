"use client";

import Layout from "@/layout/layout";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
