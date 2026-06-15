import AppShell from "@/components/app-shell";

export default function DashboardRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
