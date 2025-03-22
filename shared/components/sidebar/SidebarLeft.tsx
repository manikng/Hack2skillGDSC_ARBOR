import React from "react";


import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

function SidebarLeft({ children}:{children: React.ReactNode}) {
  return (
    <>
        <div>sidebar</div>
      <div>
        <SidebarProvider className="h-1/6">
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </div>
    </>
  );
}

export default SidebarLeft;
