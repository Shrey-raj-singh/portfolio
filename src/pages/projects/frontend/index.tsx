import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
};

const frontendProjectData: Project[] = [
  {
    id: "portfolio",
    title: "Developer Portfolio",
    shortDesc: "A personal portfolio site built with React, TypeScript, and Tailwind CSS.",
    image: "/profile-pic.jpg"
  },
  {
    id: "landing-page",
    title: "Startup Landing Page",
    shortDesc: "A modern landing page for a startup built using responsive Tailwind design.",
    image: "/profile-pic.jpg"
  },
  {
    id: "dashboard-ui",
    title: "Admin Dashboard UI",
    shortDesc: "Interactive admin panel with charts, tables, and filters.",
    image: "/profile-pic.jpg"
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    shortDesc: "A personal portfolio site built with React, TypeScript, and Tailwind CSS.",
    image: "/profile-pic.jpg"
  },
  {
    id: "landing-page",
    title: "Startup Landing Page",
    shortDesc: "A modern landing page for a startup built using responsive Tailwind design.",
    image: "/profile-pic.jpg"
  },
  {
    id: "dashboard-ui",
    title: "Admin Dashboard UI",
    shortDesc: "Interactive admin panel with charts, tables, and filters.",
    image: "/profile-pic.jpg"
  },
  {
    id: "landing-page",
    title: "Startup Landing Page",
    shortDesc: "A modern landing page for a startup built using responsive Tailwind design.",
    image: "/profile-pic.jpg"
  },
  {
    id: "dashboard-ui",
    title: "Admin Dashboard UI",
    shortDesc: "Interactive admin panel with charts, tables, and filters.",
    image: "/profile-pic.jpg"
  },
];


const FrontendProject = () => {
  return (
    <main className="max-h-screen flex flex-col px-[10%] text-center ">
      <div className="text-left flex flex-col flex-1">
        <div className="max-h-[78vh] mt-8 overflow-y-scroll hide-scrollbar">
          <p className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white">Frontend Development Projects</p>
          <p className="text-[12px] sm:text-[14px] md:[16px] text-white mt-3">
            Explore a selection of frontend projects showcasing expertise in JavaScript, TypeScript, React.js, Next.js, and
            other cutting-edge technologies.
            Each project includes a brief overview, key features, technologies employed, and a link to the live application or repository.
          </p>

          <div className="hidden sm:flex flex-row mt-8 overflow-x-scroll hide-scrollbar">
            {frontendProjectData.map((project) => (
              <div className="mr-4 hover:shadow-md transition min-w-[224px] min-h-[258px] flex-shrink-0  max-w-[224px] max-h-[258px]">
                <Link to={`/projects/frontend/${project.id}`} key={project.id}>
                  <img src={project.image} alt="" className="rounded-[12px] object-cover w-[224px] h-[126px]" />
                <p className="text-[12px] sm:text-[14px] md:[16px] font-semibold text-white mt-2">{project.title}</p>
                <p className="text-[10px] sm:text-[12px] md:[14px] mt-1 text-[#9CABBA]">{project.shortDesc}</p>
                </Link>
              </div>
            ))}
          </div>


          <div className="grid grid-cols-2 gap-4 sm:hidden mt-8">
            {frontendProjectData.map((project) => (
              <div
                key={project.id}
                className="hover:shadow-md transition rounded-xl"
              >
                <Link to={`/projects/frontend/${project.id}`}>
                  <img
                    src="/profile-pic.jpg"
                    alt={project.title}
                    className="rounded-[12px] object-cover w-full h-[120px]"
                  />
                  <p className="text-[12px] font-semibold text-white mt-2 line-clamp-1">
                    {project.title}
                  </p>
                  <p className="text-[10px] mt-1 text-[#9CABBA] line-clamp-2">
                    {project.shortDesc}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>


        <p className="text-[10px] sm:text-[12px] md:text-[14px] mt-4 text-[#9CABBA] text-center">
          For more projects, visit my{" "}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CABBA] hover:text-white"
          >
            <FaGithub className="text-2xl inline-flex items-center" />
            {" "}GitHub
          </a>{" "}
          profile.
        </p>





      </div>
    </main>
  );
}

export default FrontendProject;


<div className="grid gap-6 md:grid-cols-2">
  {frontendProjectData.map((project) => (
    <Link to={`/projects/frontend/${project.id}`} key={project.id}>
      <div className="border p-4 rounded-lg hover:shadow-md transition">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-gray-600 mt-1">{project.shortDesc}</p>
      </div>
    </Link>
  ))}
</div>