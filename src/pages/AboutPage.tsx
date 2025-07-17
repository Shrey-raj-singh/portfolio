import { Bot, Cloud, Code2, Database, Server, Smartphone } from "lucide-react";
import SkillCard from "../components/Home/skill-card";


const skillsList = [
    {
        title: "Frontend",
        path: "/skills",
        icon: <Code2 size={24} />,
    },
    {
        title: "Backend",
        path: "/skills#backend",
        icon: <Server size={24} />,
    },
    {
        title: "Databases",
        path: "/skills#databases",
        icon: <Database size={24} />,
    },
    {
        title: "Cloud & DevOps",
        path: "/skills#cloud",
        icon: <Cloud size={24} />,
    },
    {
        title: "AI / ML",
        path: "/skills#ai-ml",
        icon: <Bot size={24} />,
    },
    {
        title: "Mobile Apps",
        path: "/skills#mobile",
        icon: <Smartphone size={24} />,
    },
];


const AboutPage = () => {
    return (
        <main className="min-h-screen flex flex-col  px-[10%] text-center pb-24">

            <div className="w-full text-center justify-center items-center mt-16">
                <img src="/profile-pic.jpg" alt="" className="rounded-full mx-auto w-[128px] h-[128px] object-cover" />
                <p className="mt-4 text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-tight text-white">
                    Shrey Raj Singh
                </p>

                <p className="text-[12px] sm:text-[14px] md:text-[16px] text-[#9CABBA] leading-tight">
                    Full Stack Developer & AI/ML Engineer
                </p>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] text-[#9CABBA] leading-tight">
                    Raigarh, (C.G.)
                </p>
            </div>

            <div className="w-full text-left mt-16">
                <p className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-tight text-white">
                    About Me
                </p>

                <p className="mt-4 text-[12px] sm:text-[14px] md:text-[16px] text-white leading-relaxed">
                    I am a highly motivated and skilled Full Stack Developer with a passion for creating innovative solutions.
                    With a strong background in both front-end and back-end development, I excel at building robust and scalable applications.
                    My expertise extends to AI and Machine Learning, where I leverage cutting-edge technologies to develop intelligent systems.
                    I am dedicated to continuous learning and staying abreast of the latest industry trends to deliver exceptional results.
                </p>
            </div>

            <div className="w-full text-left mt-16">
                <p className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-tight text-white">
                    Skills
                </p>

                <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
                    {skillsList.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            icon={skill.icon}
                            path={skill.path}
                            description=""
                            col={false}
                        />
                    ))}
                </div>
            </div>


            <div className="w-full text-left mt-16">
                <p className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-tight text-white">
                    Education & Certifications
                </p>

                <p className="mt-4 text-[12px] sm:text-[14px] md:text-[16px] text-white leading-relaxed">
                    Bachelor of Technology in Computer Science & Engineering
                </p>
                <p className="text-[10px] sm:text-[12px] md:text-[14px] text-[#9CABBA] leading-tight">
                    O.P. Jindal University, Raigarh (C.G.)
                </p>

            </div>


            <div className="w-full text-left mt-16">
                <p className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-tight text-white">
                    Career Objective
                </p>

                <p className="mt-4 text-[12px] sm:text-[14px] md:text-[16px] text-white leading-relaxed">
                    To leverage my expertise in Full Stack Development and AI/ML to contribute to challenging projects that drive innovation
                    and create impactful solutions. I aim to work in a dynamic environment where I can continuously learn, grow, and make a
                    significant contribution to the team's success.
                </p>

            </div>

        </main>
    );
}

export default AboutPage;