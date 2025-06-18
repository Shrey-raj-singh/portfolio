import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../utils/constant";

type PrimaryLinkButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const PrimaryLinkButton = ({ to, children, className = "" }: PrimaryLinkButtonProps) => {
  return (
    <Link to={to}>
      <button
        className={`px-4 py-2 mt-6 sm:mt-8 text-white rounded-[20px] cursor-pointer hover:bg-blue-700 transition font-semibold ${className}`}
        style={{ backgroundColor: siteConfig.colors.primary }}
      >
        {children}
      </button>
    </Link>
  );
};

export default PrimaryLinkButton;
