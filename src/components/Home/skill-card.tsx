import React from "react";
import { Code2 } from "lucide-react";
import { Link } from "react-router-dom";

type SkillCardProps = {
  title: string;
  icon?: React.ReactNode;
  path: string;
  description?: string;
  col: boolean;
};

const SkillCard = ({ title, icon, path, description, col }: SkillCardProps) => {
  return (
    <Link to={path} className="block w-full h-full">
      <div className={`bg-[#1C2126] text-white rounded-[8px] border border-[#3B4754] shadow hover:shadow-lg transition 
        cursor-pointer flex  ${col?`justify-between py-4 px-4 h-[156px] flex-col text-left` : `space-x-4 flex-row h-[74px] py-6 px-8`}`}>
        <div className="text-white text-xl">{icon || <Code2 size={24} />}</div>
        <div>
          <p className="text-[16px] font-bold leading-tight">{title}</p>
          {description===null?<></>:<p className="text-[14px] text-[#9CABBA] mt-2 leading-tight">
            {description}
          </p>}
        </div>
      </div>
    </Link>
  );
};

export default SkillCard;
