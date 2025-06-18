import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  image: string;
  path: string;
};

const ProjectCard = ({ title, image, path }: ProjectCardProps) => {
  return (
    <Link to={path} className="block w-full">
      <div className="text-white shadow hover:shadow-lg transition cursor-pointer text-left hover:scale-105 transition-transform">
        {/* Maintain aspect ratio without stretching */}
        <div className="relative w-full aspect-[302/169] overflow-hidden rounded-[8px]">
          <img
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[8px]"
          />
        </div>
        <div className="mt-2 px-1">
          <p className="text-[16px] font-bold leading-tight">{title}</p>
          <p className="text-[14px] text-[#9CABBA] mt-1 leading-tight">
            Click to see related projects
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
