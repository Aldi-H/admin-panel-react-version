"use client";

import Sidebar from "@/components/sidebar/Sidebar.Component";
import Topbar from "@/components/topbar/Topbar.Component";
import SidebarProvider from "@/context/Sidebar.Context";
import { GetActiveRoute } from "@/lib/navigation/navigation.Utils";
import { SidebarRoute } from "@/routes";

interface DashboardlayoutProps {
  [x: string]: any;
}

const AdminLayout = (props: DashboardlayoutProps) => {
  const { children } = props;

  return (
    <SidebarProvider>
      <div className="flex w-full bg-cover top-0">
        <header className="z-[999]">
          <Sidebar routes={SidebarRoute} />
        </header>

        <main className="flex-grow space-y-16 px-16">
          <Topbar currentPageRoute={GetActiveRoute(SidebarRoute)} />
          <div className="py-16">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;

{
  /* <div className="bg-background fixed z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border border-secondary rounded-xl leading-6 flex min-h-20 xl:items-center ps-5 top-3 md:top-4 xl:top-5">
</div> */
}

// className={`${isCollapsed ? "me-[138px]" : "me-20"}`}

/* 
  <div className="flex w-full bg-cover top-0">
    <Sidebar routes={SidebarRoute} />

    <div className="float-right overflow-auto min-h-screen relative max-h-full h-full w-full md:py-8 md:px-8 ">
      <div>
          <Topbar currentPageRoute={GetActiveRoute(SidebarRoute)} />
      </div>

      <div className="mx-auto pe-5 min-h-screen pt-20 p-5 md:px-7">
        {children}
      </div>
    </div>
  /div> 
*/
