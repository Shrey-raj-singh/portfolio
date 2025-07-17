import { Brain, Cloud, Code2, Database, Server, Smartphone } from "lucide-react";
import SkillCard from "./skill-card";


const skillsList = [
    {
      title: "Frontend",
      path: "/skills",
      icon: <Code2 size={24}/>,
    },
    {
      title: "Backend",
      path: "/skills#backend",
      icon: <Server size={24}/>,
    },
    {
      title: "Databases",
      path: "/skills#databases",
      icon: <Database size={24}/>,
    },
    {
      title: "Cloud & DevOps",
      path: "/skills#cloud",
      icon: <Cloud size={24}/>,
    },
    {
      title: "AI / ML",
      path: "/skills#ai-ml",
      icon: <Brain size={24}/>,
    },
    {
      title: "Mobile Apps",
      path: "/skills#mobile",
      icon: <Smartphone size={24}/>,
    },
  ];
  

const SkillsSection = () => {
    return (
        <>
            <div className="w-full text-left mt-16">
                <p className="text-[22px] sm:text-[26px] font-bold leading-tight text-white">
                    Skills
                </p>

                <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
                    {skillsList.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            icon={skill.icon}
                            path={skill.path}
                            description="Click to see related projects"
                            col={true}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default SkillsSection;