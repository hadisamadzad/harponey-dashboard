import Sidebar from "@/Components/Sidebar/Sidebar";
import { semanticColors } from "@nextui-org/react";
import { useState } from "react";

const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(semanticColors.light.primary[500]);
  };

  return (
    <>
      <div className="flex flex-row h-full">
        <aside className="overflow-x-hidden h-full">
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          ></Sidebar>
        </aside>
        <div className="header"></div>
        <div className="main"></div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default MainLayout;
