import { Link } from "react-router-dom";

type ProjectCategory = {
  name: string;
  path: string;
  description: string;
};

const categories: ProjectCategory[] = [
  {
    name: "Frontend Projects",
    path: "/projects/frontend",
    description: "UI/UX focused projects built with React, TypeScript, and Tailwind CSS.",
  },
  {
    name: "Backend Projects",
    path: "/projects/backend",
    description: "APIs and services built using Node.js, Express, Flask, etc.",
  },
  {
    name: "Database Projects",
    path: "/projects/databases",
    description: "Projects involving MySQL, MongoDB, Firebase, and complex data models.",
  },
  {
    name: "Cloud Projects",
    path: "/projects/cloud",
    description: "Cloud deployments, CI/CD, Docker, AWS, and scalable infrastructure projects.",
  },
  {
    name: "AI/ML Projects",
    path: "/projects/ai_ml",
    description: "Machine learning models, NLP, computer vision, and predictive systems.",
  },
  {
    name: "Mobile App Projects",
    path: "/projects/mobile",
    description: "Cross-platform apps built using Flutter, React Native, and Firebase.",
  },
];

export default function ProjectsIndex() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <Link to={cat.path} key={cat.name}>
            <div className="p-6 border rounded-xl hover:shadow-md transition bg-white">
              <h2 className="text-xl font-semibold text-blue-600">{cat.name}</h2>
              <p className="text-gray-600 mt-2">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
