import AppShell from "@/components/app-shell";

export default function DashboardRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="reovana-admin-shell">
      <AppShell>{children}</AppShell>
    </div>
  );
}
