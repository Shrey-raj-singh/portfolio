import { useParams, Link } from "react-router-dom";

type Project = {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    github?: string;
    demo?: string;
};

const projectData: Project[] = [
    {
        id: "portfolio",
        title: "Developer Portfolio",
        description: "A personal website to showcase skills, projects, resume, and contact info.",
        techStack: ["React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/yourname/portfolio",
        demo: "https://yourname.dev",
    },
    {
        id: "landing-page",
        title: "Startup Landing Page",
        description: "A responsive landing page clone with animations and dark mode toggle.",
        techStack: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
        id: "dashboard-ui",
        title: "Admin Dashboard UI",
        description: "An admin panel featuring tables, charts, and filters with state management.",
        techStack: ["React", "Recharts", "Tailwind CSS", "Zustand"],
    },
];

const CloudProjectDeatil = () => {
    const { id } = useParams<{ id: string }>();
    const project = projectData.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="text-center mt-20 text-red-600 text-xl">
                Project not found. <Link to="/projects/cloud" className="underline text-blue-500">Go back</Link>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-gray-700 mb-4">{project.description}</p>

            <div className="mb-4">
                <h2 className="font-semibold">Tech Stack:</h2>
                <ul className="list-disc list-inside text-gray-800">
                    {project.techStack.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
            </div>

            <div className="flex gap-4 mt-4">
                {project.github && (
                    <a href={project.github} target="_blank" className="text-blue-600 underline">
                        GitHub
                    </a>
                )}
                {project.demo && (
                    <a href={project.demo} target="_blank" className="text-blue-600 underline">
                        Live Demo
                    </a>
                )}
            </div>
        </div>);
}

export default CloudProjectDeatil;