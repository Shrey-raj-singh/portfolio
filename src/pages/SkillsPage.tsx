import { Bot, Cloud, Code2, Database, Server, Smartphone } from "lucide-react";
import SkillCard from "../components/Home/skill-card";


const coreSkillsList = [
    {
        title: "Frontend Development",
        items: [
            {
                skillTitle: "JavaScript",
                description: "",
                icon: <Code2 size={24} />,
            },
            {
                skillTitle: "TypeScript",
                description: "",
                icon: <Code2 size={24} />,
            },
            {
                skillTitle: "HTML5",
                description: "",
                icon: <Code2 size={24} />,
            },
            {
                skillTitle: "CSS3",
                description: "",
                icon: <Code2 size={24} />,
            },
            {
                skillTitle: "React",
                description: "Proficient in building dynamic and responsive user interfaces using React.",
                icon: <Code2 size={24} />,
            },
            {
                skillTitle: "Next",
                description: "",
                icon: <Code2 size={24} />,
            },
            {
                skillTitle: "Tailwind CSS",
                description: "",
                icon: <Code2 size={24} />,
            },
            {
                skillTitle: "Responsive Design",
                description: "",
                icon: <Code2 size={24} />,
            },
            {
                skillTitle: "Redux",
                description: "",
                icon: <Code2 size={24} />,
            },
            {
                skillTitle: "Recoil",
                description: "",
                icon: <Code2 size={24} />,
            },
            {
                skillTitle: "Zustand",
                description: "",
                icon: <Code2 size={24} />,
            },
            {
                skillTitle: "React-Query",
                description: "",
                icon: <Code2 size={24} />,
            },
        ]
    },
    {
        title: "Backend Development",
        items: [
            {
                skillTitle: "Python",
                description: "",
                icon: <Server size={24} />,
            },
        ]
    },
    {
        title: "Databases",
        items: [
            {
                skillTitle: "Python",
                description: "",
                icon: <Database size={24} />,
            },
        ]
    },
    {
        title: "Cloud & DevOps",
        items: [
            {
                skillTitle: "Python",
                description: "",
                icon: <Cloud size={24} />,
            },
        ]
    },
    {
        title: "AI/ML",
        items: [
            {
                skillTitle: "Python",
                description: "",
                icon: <Bot size={24} />,
            },
        ]
    },
    {
        title: "Mobile Development",
        items: [
            {
                skillTitle: "Python",
                description: "",
                icon: <Smartphone size={24} />,
            },
        ]
    },
]


const SkillsPage = () => {
    return (

        <main className="min-h-screen flex flex-col  px-[10%] text-center pb-24">
            <div className="text-left mt-8">
                <p className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white">Skills</p>
                <p className="text-[12px] sm:text-[12px] md:[14px] text-[#9CABBA]">
                    A comprehensive overview of my technical capabilities across various domains.
                </p>


                {coreSkillsList.map((skills) => (<div className="w-full text-left mt-16">

                    <p className="text-[18px] sm:text-[20px] md:[22px] text-white">
                        {skills.title}
                    </p>
                    <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {skills.items.map((item, index) => (
                            <SkillCard
                                key={index}
                                title={item.skillTitle}
                                icon={item.icon}
                                path={""}
                                description={item.description}
                                col={true}
                            />
                        ))}
                    </div>
                </div>))}


            </div>
        </main>
    );
}


export default SkillsPage;