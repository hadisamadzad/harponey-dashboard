import React from "react";
import { motion } from "framer-motion";
import {
  Button,
  Listbox,
  ListboxItem,
  ListboxSection,
} from "@nextui-org/react";
import "./Sidebar.css";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// Constants
const logoName = "harponey";
const shortLogoName = "h";

// Variants
const sidebarVariants = {
  open: {
    width: 250, // Expand the sidebar width when open
  },
  closed: {
    width: 70, // Collapse the sidebar when closed
  },
};

// CSS Classes
const classDividerCommon = "text-primary-300 border-t-1.5";
const classDividerIsOpen = classDividerCommon + " border-primary-800";
const classDividerIsClosed =
  classDividerCommon + " border-primary-400 duration-1000 -pt-1";

const menuItemClasses = "text-zinc-300 h-12 mb-2";
const iconClasses = "text-xl text-white pointer-events-none flex-shrink-0";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="sidebar-container h-full relative">
      <motion.div
        className="sidebar h-full bg-primary-800 p-3"
        initial={isOpen ? "open" : "closed"}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="sidebar-header">
          <h2 className="text-white text-3xl font-extrabold mx-auto mt-2 mb-6">
            <span className="text-primary-400 text-4xl">.</span>
            {isOpen ? logoName : shortLogoName}
          </h2>
        </div>

        <Listbox
          variant="flat"
          title="Menu"
          aria-label="Listbox menu with descriptions"
        >
          <ListboxSection
            title={isOpen ? "Actions" : " "}
            showDivider
            className={isOpen ? classDividerIsOpen : classDividerIsClosed}
          >
            <ListboxItem
              key="dashboard"
              startContent={<MdOutlineSpaceDashboard className={iconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-zinc-200 ">Dashboard</span>
            </ListboxItem>
            <ListboxItem
              key="copy"
              startContent={<GoSidebarExpand className={iconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Environments</span>
            </ListboxItem>
            <ListboxItem
              key="edit"
              showDivider
              startContent={<GoSidebarExpand className={iconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Instances</span>
            </ListboxItem>
          </ListboxSection>
          <ListboxSection
            title={isOpen ? "Actions" : " "}
            className={isOpen ? classDividerIsOpen : classDividerIsClosed}
          >
            <ListboxItem
              key="delete"
              startContent={<GoSidebarExpand className={iconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Users</span>
            </ListboxItem>
          </ListboxSection>
        </Listbox>
        <Button
          isIconOnly
          color="default"
          variant="light"
          aria-label="Open Sidebar"
          onClick={toggleSidebar}
          className="text-white text-2xl absolute right-4 bottom-4"
        >
          {isOpen ? <GoSidebarExpand /> : <GoSidebarCollapse />}
        </Button>
      </motion.div>
    </div>
  );
};

export default Sidebar;
