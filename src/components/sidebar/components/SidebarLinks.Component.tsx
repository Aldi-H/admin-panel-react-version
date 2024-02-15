import { useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IRoute } from "@/types/navigation";
import { useSidebar } from "@/context/Sidebar.Context";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarLinksProps {
  routes: IRoute[];
}

const SidebarLinks = (props: SidebarLinksProps) => {
  const { routes } = props;
  const pathName = usePathname();

  const { isCollapsed } = useSidebar();

  const activeRoute = useCallback(
    (routeName: string) => {
      return pathName?.includes(routeName);
    },
    [pathName],
  );

  const createLinks = (routes: IRoute[]) => {
    return routes.map((route, index: number) => {
      if (route.layout === "/admin" || route.layout === "/account") {
        return (
          <Link key={index} href={route.layout + route.path}>
            {activeRoute(route.layout + route.path) ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex flex-col">
                    <div className="flex flex-row xl:mb-2 xl:mx-auto py-3 px-3 rounded-md items-center align-middle space-x-4 hover:bg-secondary">
                      <span>{route.icon}</span>
                      {isCollapsed && (
                        <span className="font-bold text-sm my-auto">
                          {route.name}
                        </span>
                      )}
                    </div>
                  </TooltipTrigger>
                  {isCollapsed === false && (
                    <TooltipContent side="right" className="ml-3">
                      <span className="font-bold text-sm my-auto">
                        {route.name}
                      </span>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex flex-col">
                    <div className="flex flex-row xl:mb-2 xl:mx-auto py-3 px-3 rounded-md items-center align-middle space-x-4 text-gray-500 hover:bg-secondary ">
                      <span className="">{route.icon}</span>
                      {isCollapsed && (
                        <span className="font-bold text-sm my-auto line-clamp-2">
                          {route.name}
                        </span>
                      )}
                    </div>
                  </TooltipTrigger>
                  {isCollapsed === false && (
                    <TooltipContent side="right" className="ml-3">
                      <span className="font-bold text-sm my-auto line-clamp-2">
                        {route.name}
                      </span>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            )}
          </Link>
        );
      }
    });
  };

  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
