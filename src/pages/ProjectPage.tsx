import { Link } from "react-router-dom";
import { siteConfig } from "../utils/constant";

type ProjectCategory = {
  name: string;
  path: string;
  description: string;
};

const categories: ProjectCategory[] = [
  {
    name: "Frontend",
    path: "/projects/frontend",
    description: "Frontend projects focusing on user interface and experience, built with modern frameworks like React and Next.js.",
  },
  {
    name: "Backend",
    path: "/projects/backend",
    description: "Backend projects involving server-side logic, API development, and data management using Node.js, Python, and other technologies.",
  },
  {
    name: "Database",
    path: "/projects/databases",
    description: "Database projects demonstrating skills in database design, optimization, and management with SQL and NoSQL databases.",
  },
  {
    name: "Cloud & DevOps",
    path: "/projects/cloud",
    description: "Cloud and DevOps projects showcasing experience with cloud platforms like AWS and Azure, and DevOps practices for deployment and scaling.",
  },
  {
    name: "AI/ML",
    path: "/projects/ai_ml",
    description: "AI/ML projects involving machine learning models, data analysis, and AI applications, using tools like TensorFlow and PyTorch.",
  },
  {
    name: "Mobile",
    path: "/projects/mobile",
    description: "Mobile development projects for iOS and Android platforms, built with frameworks like React Native and Flutter.",
  },
];

export default function ProjectsIndex() {
  return (
    <main className="min-h-screen flex flex-col  px-[10%] text-center pb-24">
      <div className="text-left mt-8">
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white">Project Categories</h1>
        <p className="text-[12px] sm:text-[12px] md:[14px] text-[#9CABBA]">
          Explore projects across various categories, showcasing my expertise in full-stack development and AI/ML.
          </p>
        <div className="mt-8 space-y-8">
          {categories.map((cat) => (
            <div className="transition text-white ">
              <p className="text-[14px] sm:text-[16px] md:[18px] font-bold ">{cat.name}</p>
              <p className="text-[12px] sm:text-[14px] md:[16px] mt-2 ">{cat.description}</p>
              <Link to={cat.path} key={cat.name}>
                <button
                  className={`px-4 py-2 mt-4 text-white rounded-[20px] cursor-pointer hover:bg-blue-700 transition font-semibold`}
                  style={{ backgroundColor: siteConfig.colors.primary }}
                >
                  {`View ${cat.name} Projects`}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
