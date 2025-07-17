

type CoreSkillSet = {
    title: string;
    skills: string[]
};

const coreSkillsList: CoreSkillSet[] = [
    {
        title: "Programming Language",
        skills: ["Python", "JavaScript", "C", "Dart"]
    },
    {
        title: "Frameworks",
        skills: ["React", "Node.js", "Flask", "Flutter"]
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j"]
    },
    {
        title: "AI/ML",
        skills: ["TensorFlow", "PyTorch", "scikit-learn"]
    },
    {
        title: "Tools",
        skills: ["Git", "Docker", "AWS", "Vercel"]
    },
]



type Projects = {
    title: string;
    descriptionPoints: string[]
};

const projectsList: Projects[] = [
    {
        title: "Ecommerce Site",
        descriptionPoints: [
            "Developed a full-fledged e-commerce platform using React, Node.js, and PostgreSQL.",
            "Implemented user authentication, product management, and payment gateway integration",
        ]
    },
    {
        title: "AI-Powered Recommendation System",
        descriptionPoints: [
            "Built a recommendation system using machine learning algorithms and deployed it on AWS.",
            "Utilized collaborative filtering and content-based filtering techniques to enhance user experience.",
        ]
    },
]


const certificates: string[] = []

const ResumePage = () => {
    return (
        <main className="min-h-screen flex flex-col  px-[10%] text-center pb-24">
            <div className="text-left mt-8">
                <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white">Resume</h1>
                <p className="text-[12px] sm:text-[12px] md:[14px] text-[#9CABBA]">
                    Explore my professional journey, skills, and accomplishments in a comprehensive format. Download a copy for your records.
                </p>


                <div className="w-full text-left mt-8">
                    <p className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-tight text-white">
                        Professional Summary
                    </p>
                    <p className="mt-3 text-[12px] sm:text-[14px] md:text-[16px] text-white leading-tight">
                        Highly motivated and results-oriented Full Stack Developer and AI/ML Engineer with 5+ years of experience in designing, developing,
                        and deploying scalable web applications and machine learning models. Proven ability to work independently and collaboratively in
                        fast-paced environments, delivering high-quality solutions that meet and exceed client expectations.
                        Passionate about leveraging cutting-edge technologies to solve complex problems and drive business growth.
                    </p>
                </div>

                <div className="w-full text-left mt-8">
                    <p className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-tight text-white">
                        Core Technical Skills
                    </p>

                    {coreSkillsList.map((subSkills) => (
                        <p className="mt-3 text-[12px] sm:text-[14px] md:text-[16px] text-white leading-tight">
                            {subSkills.title}:
                            {subSkills.skills.map((skill) => (
                                <button className={`h-[32px] text-white rounded-[20px] px-4 ml-2 font-medium bg-[#2B3640]`}>
                                    {skill}
                                </button>))
                            }
                        </p>))
                    }

                </div>

                <div className="w-full text-left mt-8">
                    <p className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-tight text-white">
                        Projects
                    </p>

                    {projectsList.map((project, index) => (<>
                        <p className="mt-3 text-[12px] sm:text-[14px] md:text-[16px] text-white leading-tight font-semibold">
                            Project {index + 1}: {project.title}
                        </p>
                        {project.descriptionPoints.map((description) => (
                            <p className={`text-white text-[12px] sm:text-[14px] md:text-[16px] leading-tight`}>
                                - {description}
                            </p>
                        ))}
                    </>
                    ))}

                </div >


                <div className="w-full text-left mt-8">
                    <p className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-tight text-white">
                        Education
                    </p>
                    <p className="mt-3 text-[12px] sm:text-[14px] md:text-[16px] text-white leading-tight">
                        Bachelor of Technology in Computer Science & Engineering | O.P. Jindal University | 2022-2026
                    </p>
                </div>


                {certificates.length == 0 ? <></> : <div className="w-full text-left mt-8">
                    <p className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-tight text-white">
                        Certification
                    </p>
                    {certificates.map((certificate) => (<p className="mt-3 text-[12px] sm:text-[14px] md:text-[16px] text-white leading-tight">
                        {certificate}
                    </p>))}
                </div>}


                <div className="w-full text-left mt-8">
                    <p className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-tight text-white">
                        Career Objective
                    </p>
                    <p className="mt-3 text-[12px] sm:text-[14px] md:text-[16px] text-white leading-tight">
                        To leverage my expertise in Full Stack Development and AI/ML to contribute to challenging projects that drive innovation
                        and create impactful solutions. I aim to work in a dynamic environment where I can continuously learn, grow, and make a
                        significant contribution to the team's success.
                    </p>
                </div>


            </div>
        </main>
    );
}

export default ResumePage;