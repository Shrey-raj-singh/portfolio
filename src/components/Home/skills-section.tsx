import { Brain, Cloud, Code2, Database, Server, Smartphone } from "lucide-react";
import SkillCard from "./skill-card";


const skillsList = [
    {
      title: "Frontend",
      path: "/skills",
      icon: <Code2 />,
    },
    {
      title: "Backend",
      path: "/skills#backend",
      icon: <Server />,
    },
    {
      title: "Databases",
      path: "/skills#databases",
      icon: <Database />,
    },
    {
      title: "Cloud & DevOps",
      path: "/skills#cloud",
      icon: <Cloud />,
    },
    {
      title: "AI / ML",
      path: "/skills#ai-ml",
      icon: <Brain />,
    },
    {
      title: "Mobile Apps",
      path: "/skills#mobile",
      icon: <Smartphone />,
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
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default SkillsSection;