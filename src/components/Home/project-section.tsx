import ProjectCard from "./project-card";


const projectsList = [
    {
      title: "Frontend",
      path: "/projects/frontend",
      image: "/projects/frontend-cover.svg",
    },
    {
      title: "Backend",
      path: "/projects/backend",
      image: "/projects/backend-cover.svg",
    },
    {
      title: "Databases",
      path: "/projects/databases",
      image: "/projects/databases-cover.svg",
    },
    {
      title: "Cloud & DevOps",
      path: "/projects/cloud",
      image: "/projects/cloud-cover.svg",
    },
    {
      title: "AI / ML",
      path: "/projects/ai_ml",
      image: "/projects/ai-ml-cover.svg",
    },
    {
      title: "Mobile Apps",
      path: "/projects/mobile",
      image: "/projects/mobile-cover.svg",
    },
  ];

const ProjectSection = () => {
    return (
        <>
            <div className="w-full text-left mt-16">
                <p className="text-[22px] sm:text-[26px] font-bold leading-tight text-white">
                    Projects
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {projectsList.map((project) => (
                        <ProjectCard
                            key={project.path}
                            title={project.title}
                            image={project.image}
                            path={project.path}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectSection;