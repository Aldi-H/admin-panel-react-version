import Sidebar from "@/components/sidebar/Sidebar.Component";
import SidebarProvider from "@/context/Sidebar.Context";

interface DashboardlayoutProps {
  [x: string]: any;
}

const AdminLayout = (props: DashboardlayoutProps) => {
  const { children } = props;

  return (
    <SidebarProvider>
      <div className="flex w-full bg-cover top-0">
        <Sidebar />

        <div className="float-right min-h-screen overflow-auto relative max-h-full h-full w-full max-w-full xl:w-[calc(100%-250px)] xl:max-w-[calc(100%-250px)]">
          <div className="mx-auto pe-5 min-h-screen pt-12 md:p-[30px]">
            {children}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
