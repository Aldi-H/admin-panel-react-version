import Link from "next/link";

import { useSidebar } from "@/context/Sidebar.Context";

import TopbarLinks from "./components/TopbarLinks.Component";
import { Separator } from "../ui/separator";

interface NavbarProps {
  currentPageRoute?: string;
}

const Topbar = (props: NavbarProps) => {
  const { currentPageRoute } = props;

  const { isCollapsed } = useSidebar();

  return (
    <div
      className={`bg-background fixed z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b-[1.5px] border-secondary rounded-xl leading-6 flex min-h-20 xl:justify-center xl:items-center mx-auto mt-0 pb-2 right-3 md:right-7 lg:right-7 xl:right-10 ps-5 pt-2 top-3 md:top-4 xl:top-5 
      ${
        isCollapsed
          ? "md:w-[calc(100vw-21.5%)] lg:w-[calc(100vw-17%)] xl:w-[calc(100vw-240px)]"
          : "md:w-[calc(100vw-13.5%)] lg:w-[calc(100vw-6%)] xl:w-[calc(100vw-160px)]"
      } 
      `}
    >
      <div className="w-full flex sm:flex-col md:flex-row items-center mb-0 justify-between">
        <div className="sm:mb-2 md:mb-0">
          <Link href={`${currentPageRoute}`} className="font-bold text-lg ">
            {currentPageRoute?.charAt(0).toUpperCase() +
              (currentPageRoute?.slice(1) ?? "")}
          </Link>

          <div className="flex flex-row items-center text-sm">
            <div>
              <Link href="#">
                <span>Pages</span>
              </Link>
            </div>
            <Separator
              orientation="horizontal"
              className="-rotate-[90deg] w-4 h-[1px] bg-foreground"
            />
            <div>
              <Link href="#">
                <span>
                  {currentPageRoute?.charAt(0).toUpperCase() +
                    (currentPageRoute?.slice(1) ?? "")}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <TopbarLinks />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

// z-10 backdrop-filter bg-background backdrop-blur-lg bg-opacity-30 border-b border-secondary
// w-[calc(100vw-6%)] md:w-[calc(100vw-8%)] lg:w-[calc(100vw-6%)] xl:w-[calc(100vw-240px)]
// xl:w-[calc(100vw-240px)]
