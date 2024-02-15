import {
  MessageSquareWarning,
  Network,
  Newspaper,
  Router,
  Users,
} from "lucide-react";

import { IRoute } from "./types/navigation";

const SidebarRoute: IRoute[] = [
  {
    name: "Devices",
    layout: "/admin",
    path: "/devices",
    icon: <Router size={20} />,
  },
  {
    name: "Masters",
    layout: "/admin",
    path: "/masters",
    icon: <Network size={20} />,
  },
  {
    name: "Articles",
    layout: "/admin",
    path: "#",
    icon: <Newspaper size={20} />,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "#",
    icon: <Users size={20} />,
  },
  {
    name: "Log",
    layout: "/admin",
    path: "#",
    icon: <MessageSquareWarning size={20} />,
  },
];

export { SidebarRoute };
