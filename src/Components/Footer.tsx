import React from "react";
import { motion } from "framer-motion";
import {
  Button,
  Listbox,
  ListboxItem,
  ListboxSection,
} from "@nextui-org/react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// Constants
const copyright = "2023 kubCheck";

const height = "50px";


// CSS Classes
const classDividerCommon = "text-primary-300 border-t-1.5";
const classDividerIsOpen = classDividerCommon + " border-primary-800";
const classDividerIsClosed =
  classDividerCommon + " border-primary-400 duration-1000 -pt-1";

const menuItemClasses = "text-zinc-300 h-12 mb-2";
const iconClasses = "text-xl text-white pointer-events-none flex-shrink-0";

const Footer: React.FC = () => {
  return (
    <footer className="absolute left-0 bottom-0  bg-blue-100">
      Footer
    </footer>
  );
};

export default Footer;
