// "use client";

// import { useContext } from "react";
// import { ChevronsLeft, ChevronsRight } from "lucide-react";

// import { Button } from "@/components/ui/button";

import { ModeToggle } from "@/components/ModeToggle.component";
// import { useSidebar } from "@/context/Sidebar.Context";

const DevicePage = () => {
  // const { isCollapsed, toggleSidebarCollapse } = useSidebar();

  return (
    <div className="flex flex-row place-items-center space-x-3">
      <h1>Devices Page</h1>
      <ModeToggle />

      {/* <Button onClick={() => toggleSidebarCollapse()}>
        {isCollapsed ? <ChevronsRight /> : <ChevronsLeft />}
      </Button>
      {isCollapsed ? <p>Sidebar is collapsed</p> : <p>Sidebar is expanded</p>} */}
    </div>
  );
};

export default DevicePage;
