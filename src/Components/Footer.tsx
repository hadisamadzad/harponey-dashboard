import React from "react";

// Constants
const copyright: string = `Copyright \u00A9 ${new Date().getUTCFullYear()} kubCheck.`;

const Footer: React.FC = () => {
  return (
    <div className="px-4 pb-2 text-right text-sm text-zinc-400">
      {copyright}
    </div>
  );
};

export default Footer;
