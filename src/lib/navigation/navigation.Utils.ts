import { IRoute } from "@/types/navigation";
import { usePathname } from "next/navigation";

export const isWindowAvailable = () => typeof window !== "undefined";

export const useFindCurrentRoute = (routes: IRoute[]): IRoute | undefined => {
  const currentRoute = usePathname();

  const foundRoute = routes.find(
    (route) => currentRoute === route.layout + route.path,
  );

  return foundRoute;
};

export const GetActiveRoute = (routes: IRoute[]): string => {
  const route = useFindCurrentRoute(routes);
  return route?.name.toLowerCase() || "Default";
};

export const useGetActiveNavbar = (routes: IRoute[]): boolean => {
  const route = useFindCurrentRoute(routes);
  return !!route?.secondary;
};

export const getActiveNavbarText = (routes: IRoute[]): string | boolean => {
  return GetActiveRoute(routes);
};
