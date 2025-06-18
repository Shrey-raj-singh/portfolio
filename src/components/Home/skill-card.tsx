import React from "react";
import { Code2 } from "lucide-react";
import { Link } from "react-router-dom";

type SkillCardProps = {
  title: string;
  icon?: React.ReactNode;
  path: string;
};

const SkillCard = ({ title, icon, path }: SkillCardProps) => {
  return (
    <Link to={path} className="block w-full h-full">
      <div className="bg-[#1C2126] text-white py-4 px-4 rounded-[8px] border border-[#3B4754] shadow hover:shadow-lg transition cursor-pointer h-[156px] flex flex-col justify-between text-left">
        <div className="text-white text-xl">{icon || <Code2 size={24} />}</div>
        <div>
          <p className="text-[16px] font-bold leading-tight">{title}</p>
          <p className="text-[14px] text-[#9CABBA] mt-2 leading-tight">
            Click to see related projects
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SkillCard;
