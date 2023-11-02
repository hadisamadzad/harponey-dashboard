import React from "react";
import { motion } from "framer-motion";
import {
  Button,
  Listbox,
  ListboxItem,
  ListboxSection,
} from "@nextui-org/react";
import {
  HiMiniBeaker,
  HiMiniWrench,
  HiOutlineChartBarSquare,
  HiOutlineStop,
} from "react-icons/hi2";
import { RiInstanceLine } from "react-icons/ri";
import { RxComponentInstance } from "react-icons/rx";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Props
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// Constants
const logoName = "kubCheck";
const shortLogoName = "k";

// Variants
const sidebarVariants = {
  open: { width: 270 },
  closed: { width: 78 },
};

// CSS Classes
const classDividerCommon = "text-primary-400 border-t-2";
const classDividerIsOpen = classDividerCommon + " border-primary-800";
const classDividerIsClosed =
  classDividerCommon + " border-primary-400 duration-1000 -pt-1";

const menuItemClasses = "text-zinc-300 h-12 mb-2";
const menuItemIconClasses =
  "text-2xl text-primary-200 pointer-events-none flex-shrink-0";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <motion.div
      className="h-full flex flex-col bg-primary-800 p-4"
      initial={isOpen ? "open" : "closed"}
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <div aria-label="kubCheck Logo">
        <h2 className="text-3xl text-neutral-100 font-extrabold mx-auto mb-6">
          <span className="text-primary-400 text-4xl">.</span>
          {isOpen ? logoName : shortLogoName}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <Listbox
          variant="flat"
          title="Menu"
          aria-label="Listbox menu with descriptions"
        >
          <ListboxSection
            title={isOpen ? "Monitor" : " "}
            showDivider
            className={isOpen ? classDividerIsOpen : classDividerIsClosed}
          >
            <ListboxItem
              key="dashboard"
              startContent={
                <HiOutlineChartBarSquare className={menuItemIconClasses} />
              }
              className={menuItemClasses}
              title="Dashboard"
              aria-label="Dashboard"
            >
              <span className="text-zinc-200 ">Dashboard</span>
            </ListboxItem>
            <ListboxItem
              key="environments"
              startContent={<HiMiniBeaker className={menuItemIconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Environments</span>
            </ListboxItem>
            <ListboxItem
              key="instances"
              showDivider
              startContent={<RiInstanceLine className={menuItemIconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Instances</span>
            </ListboxItem>
            <ListboxItem
              key="pods"
              showDivider
              startContent={
                <RxComponentInstance className={menuItemIconClasses} />
              }
              className={menuItemClasses}
            >
              <span className="text-white">Pods</span>
            </ListboxItem>
          </ListboxSection>
          <ListboxSection
            title={isOpen ? "Management" : " "}
            className={isOpen ? classDividerIsOpen : classDividerIsClosed}
          >
            <ListboxItem
              key="item1"
              startContent={<HiOutlineStop className={menuItemIconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Item 1</span>
            </ListboxItem>

            <ListboxItem
              key="item2"
              startContent={<HiOutlineStop className={menuItemIconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Item 2</span>
            </ListboxItem>
            <ListboxItem
              key="item3"
              startContent={<HiOutlineStop className={menuItemIconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Item 3</span>
            </ListboxItem>
            <ListboxItem
              key="item4"
              startContent={<HiOutlineStop className={menuItemIconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Item 4</span>
            </ListboxItem>
            <ListboxItem
              key="item5"
              startContent={<HiOutlineStop className={menuItemIconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Item 5</span>
            </ListboxItem>
            <ListboxItem
              key="item6"
              startContent={<HiOutlineStop className={menuItemIconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Item 6</span>
            </ListboxItem>
            <ListboxItem
              key="item7"
              startContent={<HiOutlineStop className={menuItemIconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Item 7</span>
            </ListboxItem>
            <ListboxItem
              key="item8"
              startContent={<HiOutlineStop className={menuItemIconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Item 8</span>
            </ListboxItem>
            <ListboxItem
              key="settings"
              startContent={<HiMiniWrench className={menuItemIconClasses} />}
              className={menuItemClasses}
            >
              <span className="text-white">Settings</span>
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </div>

      <div className="text-right mt-4">
        <Button
          isIconOnly
          color="default"
          variant="light"
          aria-label="Open Sidebar"
          onClick={toggleSidebar}
          className="border-2 border-primary-400 text-primary-400 text-3xl"
        >
          {isOpen ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
        </Button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
