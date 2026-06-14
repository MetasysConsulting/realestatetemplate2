"use client";


import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { LayoutDashboard, Wand2, Bot, CreditCard, Settings2, Activity, Gem, Home, Database, Building2, Users, Mail } from "lucide-react";
import { REOVANA_BRAND } from "@/lib/reovana-admin-data";
import { ReovanaLogo } from "@/components/reovana-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import UpdateImg from "@/assets/update1.svg";
import { assetSrc } from "@/lib/utils";

const SIDEBAR_WIDTH_ICON = "6rem"

const menuItems = [
  { title: "Home", path: "/home", icon: Home },
  { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { title: "Listings", path: "/listings", icon: Building2 },
  { title: "Data Sources", path: "/data-sources", icon: Database },
  { title: "Manage Members", path: "/members", icon: Users },
  { title: "Email Management", path: "/emails", icon: Mail },
  { title: "Listing Tools", path: "/content-tools", icon: Wand2 },
  { title: "Admin AI", path: "/chatbot", icon: Bot },
  { title: "Analytics", path: "/analytics", icon: Activity },
  { title: "Plans & Billing", path: "/subscription", icon: CreditCard },
  { title: "Settings", path: "/settings", icon: Settings2 },
];

const LeftSidebar = () => {
  const pathname = usePathname()
  const { setOpenMobile, isMobile } = useSidebar()

  const handleMenuClick = () => {
    if (isMobile) {
      setOpenMobile(false)
    }
  }

  return (
    <Sidebar collapsible="icon" style={
      {
        "--sidebar-width": SIDEBAR_WIDTH_ICON,
      } as React.CSSProperties
    }>
      <SidebarHeader>
        <div className="hidden xl:flex flex-col items-center px-2 py-3">
          <ReovanaLogo size="sm" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-2">Admin</span>
        </div>
        <div className="xl:hidden flex flex-col items-center justify-center px-2 py-3">
          <ReovanaLogo size="md" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Admin</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title} isActive={pathname === item.path || pathname.startsWith(`${item.path}/`)}>
                    <Link href={item.path} onClick={handleMenuClick}>
                      <item.icon />
                      <span className="xl:hidden">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {/* Desktop: Dropdown with user button */}
        <div className="hidden xl:block px-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-10 rounded-full hover:bg-sidebar-accent">
                <div className="flex items-center justify-center size-10 rounded-full bg-sidebar-foreground">
                  <Gem className="size-5 text-white" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="end" className="w-72">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{REOVANA_BRAND.adminUser.name}</p>
                  <p className="text-xs text-muted-foreground">{REOVANA_BRAND.adminUser.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              {/* Upgrade Pro Card */}
              <div className="p-3">
                <div className="bg-linear-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-lg p-4 text-center">
                  <img src={assetSrc(UpdateImg)} alt="Update" className="h-24 mx-auto mb-3 animate-float block" />
                  <h5 className="font-semibold text-sm mb-1">Pro Subscriber Tools</h5>
                  <p className="text-xs text-muted-foreground mb-3">Manage unlock pricing and member plans.</p>
                  <Button className="w-full bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0" size="sm" asChild>
                    <Link href="/subscription">Upgrade Now</Link>
                  </Button>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile: Direct upgrade card */}
        <div className="xl:hidden px-3 pb-3">
          <Card className="p-4 text-center">
            <img src={assetSrc(UpdateImg)} alt="Update" className="h-20 mx-auto mb-3 animate-float block"/>
            <div>
              <h5 className="font-semibold text-sm mb-1">Pro Subscriber Tools</h5>
              <p className="text-xs text-muted-foreground mb-3">Manage unlock pricing and member plans.</p>
            </div>
            <Button className="w-full bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0" size="sm" asChild>
              <Link href="/subscription" onClick={handleMenuClick}>Upgrade Now</Link>
            </Button>
          </Card>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default LeftSidebar;
