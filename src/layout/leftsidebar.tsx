"use client";


import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { LayoutDashboard, Wand2, Bot, CreditCard, Settings2, Activity, Gem } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import UpdateImg from "@/assets/update1.svg";
import logo from "../assets/Okyai-logo.png";
import logo_light from "../assets/logo_light.png";
import { assetSrc } from "@/lib/utils";

const SIDEBAR_WIDTH_ICON = "6rem"

const menuItems = [
  { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { title: "Content Tools", path: "/content-tools", icon: Wand2 },
  { title: "Chatbot", path: "/chatbot", icon: Bot },
  { title: "Analytics", path: "/analytics", icon: Activity },
  { title: "Subscription", path: "/subscription", icon: CreditCard },
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
        <div className="hidden xl:flex items-center gap-2 px-2 py-3">
          <img src={assetSrc(logo)} width={60} alt="OkyAI" />
        </div>
        <div className="xl:hidden flex items-center justify-center gap-2 px-2 py-3">
          <img src={assetSrc(logo_light)} width={200} alt="OkyAI" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title} isActive={pathname === item.path}>
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
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              {/* Upgrade Pro Card */}
              <div className="p-3">
                <div className="bg-linear-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-lg p-4 text-center">
                  <img src={assetSrc(UpdateImg)} alt="Update" className="h-24 mx-auto mb-3 animate-float block" />
                  <h5 className="font-semibold text-sm mb-1">Update Pro Plan</h5>
                  <p className="text-xs text-muted-foreground mb-3">Enhance your experience with the Pro version.</p>
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
              <h5 className="font-semibold text-sm mb-1">Update Pro Plan</h5>
              <p className="text-xs text-muted-foreground mb-3">Enhance your experience with the Pro version.</p>
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
