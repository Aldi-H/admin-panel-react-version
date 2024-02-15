"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebarCollapse: () => void;
}

interface SidebarContextProps {
  children: ReactNode;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = (): SidebarContextType =>
  useContext(SidebarContext) ??
  (() => {
    throw new Error("useSidebar must be used within a SidebarProvider");
  })();

const SidebarProvider = ({ children }: SidebarContextProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const toggleSidebarCollapse = () => setIsCollapsed((prevState) => !prevState);

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarCollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
