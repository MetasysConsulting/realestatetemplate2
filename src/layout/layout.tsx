"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import LeftSidebar from "./leftsidebar";
import Footer from "./footer";
import Header from "./header";
import { usePathname } from "next/navigation";
import useScrollToTop from "@/hooks/useScrollToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
    useScrollToTop()
    const pathname = usePathname()
    const isChatbotPage = pathname === "/chatbot" || pathname.startsWith("/chatbot/")

    return (
        <SidebarProvider>
            <LeftSidebar />
            <SidebarInset>
                <Header />
                <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full">
                    <div className="p-5">
                        {children}
                    </div>
                    {!isChatbotPage && <Footer />}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default Layout;
