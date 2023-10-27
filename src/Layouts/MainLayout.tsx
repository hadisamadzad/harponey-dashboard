import Sidebar from "@/Components/Sidebar/Sidebar";
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, semanticColors } from "@nextui-org/react";
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
        <div className="header w-full">
        <Navbar position="static" isBordered maxWidth="full">
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
        </div>
        <div className="main"></div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default MainLayout;
