import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";

const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        ></Sidebar>

        <div className="flex flex-col h-screen w-full justify-between">
          <header>
            <Header />
          </header>

          <div>
            main
            <p>mainmainmainmain</p>
            <p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p>
            <p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p>
            <p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p>
            <p>mainmainmainmain</p>
            <p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p>
            <p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p>
            <p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p>
            <p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p>
            <p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p>
            <p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p><p>mainmainmainmain</p>
            <p>mainmainmainmain</p>
          </div>

          <Footer />
        </div>

      </div>
    </>
  );
};

export default MainLayout;
