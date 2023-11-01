import React from "react";

// Constants
const copyright = "2023 kubCheck";

//const height = "50px";

// CSS Classes
//const classDividerCommon = "text-primary-300 border-t-1.5";

const Footer: React.FC = () => {
  return (
    <footer className="absolute left-0 bottom-0  bg-blue-100">
      {copyright}
    </footer>
  );
};

export default Footer;
