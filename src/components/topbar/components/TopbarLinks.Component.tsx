import { CircleUserRound, LogOut, MoreVertical, UserRound } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "@/components/ModeToggle.Component";

const TopbarLinks = () => {
  return (
    <div className="flex flex-row items-center sm:w-full md:w-auto">
      <Menubar className="border-none">
        <MenubarMenu>
          {/* <MenubarTrigger className="p-0 relative"> */}
          <div className="ms-0 px-0 me-2 items-center md:flex space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                <CircleUserRound />
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start space-y-1 leading-3">
              <div className="flex flex-row items-center space-x-2">
                <span>Username</span>
                <MenubarTrigger className="p-0">
                  <MoreVertical size={16} />
                </MenubarTrigger>
              </div>
              <span className="text-xs">Admin</span>
            </div>
          </div>

          <MenubarContent
            className="border-none mt-10 space-y-1 py-2"
            align="end"
          >
            <MenubarItem className="space-x-4 p-2 font-medium">
              <UserRound size={20} />
              <span>Profile</span>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="space-x-4 p-2 text-red-600 focus:text-red-600 font-medium">
              <LogOut size={20} />
              <span>Logout</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div className="pe-6 ps-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default TopbarLinks;
