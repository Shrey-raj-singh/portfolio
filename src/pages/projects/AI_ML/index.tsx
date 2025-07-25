import { Link } from "react-router-dom";

type Project = {
  id: string;
  title: string;
  shortDesc: string;
};

const ai_mlProjectData: Project[] = [
  {
    id: "portfolio",
    title: "Developer Portfolio",
    shortDesc: "A personal portfolio site built with React, TypeScript, and Tailwind CSS.",
  },
  {
    id: "landing-page",
    title: "Startup Landing Page",
    shortDesc: "A modern landing page for a startup built using responsive Tailwind design.",
  },
  {
    id: "dashboard-ui",
    title: "Admin Dashboard UI",
    shortDesc: "Interactive admin panel with charts, tables, and filters.",
  },
];


const AI_MLProject = ()=>{
    return (
        <div className="max-w-5xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">AI ML Projects</h1>
          <div className="grid gap-6 md:grid-cols-2">
            {ai_mlProjectData.map((project) => (
              <Link to={`/projects/ai_ml/${project.id}`} key={project.id}>
                <div className="border p-4 rounded-lg hover:shadow-md transition">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-gray-600 mt-1">{project.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
}

export default AI_MLProject;