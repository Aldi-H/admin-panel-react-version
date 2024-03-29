"use client";

import { ListCollapse } from "lucide-react";

import { useSidebar } from "@/context/Sidebar.Context";

import { IRoute } from "@/types/navigation";

import { Button } from "../ui/button";
import SidebarLinks from "./components/SidebarLinks.Component";

interface SidebarProps {
  routes: IRoute[];
}

const Sidebar = (props: SidebarProps) => {
  const { routes } = props;

  const { isCollapsed, toggleSidebarCollapse } = useSidebar();

  return (
    <aside
      className={`flex relative ${isCollapsed ? "me-[140px]" : "me-16"}`}
      data-collapse
    >
      <div
        className={`flex flex-col h-screen fixed p-3 px-0 bg-background shadow transition-all duration-300 max-w-36 min-w-16 border-r-[1.5px] border-secondary ${
          isCollapsed ? "w-36" : "w-16"
        }`}
      >
        <div className="px-2.5 pt-4 pb-2 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleSidebarCollapse()}
            className={`rounded-full h-8 w-8 absolute right-0 top-9 bg-background border-2 border-secondary hover:bg-background flex justify-center align-middle translate-x-2/4`}
          >
            {isCollapsed ? (
              <ListCollapse
                size={16}
                className="rotate-180"
                absoluteStrokeWidth
              />
            ) : (
              <ListCollapse size={16} absoluteStrokeWidth />
            )}
          </Button>

          {/* Sidebar Items */}
          <div className="xl:mb-1.5 pt-12">
            <SidebarLinks routes={routes} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
