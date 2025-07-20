// import { Link } from "react-router-dom";

// type Project = {
//   id: string;
//   title: string;
//   shortDesc: string;
// };

// const databasesProjectData: Project[] = [
//   {
//     id: "portfolio",
//     title: "Developer Portfolio",
//     shortDesc: "A personal portfolio site built with React, TypeScript, and Tailwind CSS.",
//   },
//   {
//     id: "landing-page",
//     title: "Startup Landing Page",
//     shortDesc: "A modern landing page for a startup built using responsive Tailwind design.",
//   },
//   {
//     id: "dashboard-ui",
//     title: "Admin Dashboard UI",
//     shortDesc: "Interactive admin panel with charts, tables, and filters.",
//   },
// ];


// const DatabasesProject = ()=>{
//     return (
//         <div className="max-w-5xl mx-auto p-6">
//           <h1 className="text-3xl font-bold mb-6">Databases Projects</h1>
//           <div className="grid gap-6 md:grid-cols-2">
//             {databasesProjectData.map((project) => (
//               <Link to={`/projects/databases/${project.id}`} key={project.id}>
//                 <div className="border p-4 rounded-lg hover:shadow-md transition">
//                   <h2 className="text-xl font-semibold">{project.title}</h2>
//                   <p className="text-gray-600 mt-1">{project.shortDesc}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       );
// }

// export default DatabasesProject;





const projects = [
  {
    type: "SQL Projects",
    data: [
      {
        tech: "PostgreSQL",
        title: "E-commerce Data Analysis",
        description:
          "Analyzed customer behavior and sales trends using SQL queries on a PostgreSQL database. Implemented complex joins and aggregations to derive insights.",
        image: "/projects/ai-ml-cover.svg",
      },
      {
        tech: "MySQL",
        title: "Inventory Management System",
        description:
          "Developed a database schema and implemented SQL queries for an inventory management system using MySQL. Focused on optimizing query performance.",
        image: "/projects/ai-ml-cover.svg",
      },
    ],
  },
  {
    type: "NoSQL Projects",
    data: [
      {
        tech: "MongoDB",
        title: "Social Media Analytics",
        description:
          "Designed a MongoDB database to store and analyze social media data. Implemented aggregation pipelines to extract key metrics and trends.",
        image: "/projects/ai-ml-cover.svg",
      },
      {
        tech: "Redis",
        title: "Real-time Caching System",
        description:
          "Implemented a caching layer using Redis to improve the performance of a web application. Focused on optimizing cache hit rates and minimizing latency.",
        image: "/projects/ai-ml-cover.svg",
      },
      {
        tech: "Cassandra",
        title: "Distributed Data Storage",
        description:
          "Designed a distributed database system using Cassandra to handle large volumes of data with high availability and fault tolerance.",
        image: "/projects/ai-ml-cover.svg",
      },
    ],
  },
];

const DatabasesProject = () => {
  return (
    <main className="max-h-screen flex flex-col px-[10%] text-left text-white">
      <h2 className="text-3xl font-bold mb-10 mt-8">Database Projects</h2>

      {projects.map((section) => (
        <div key={section.type} className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">{section.type}</h3>

          {section.data.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8"
            >
              {/* Text */}
              <div className="flex-1">
                <h4 className="text-sm text-gray-400">{project.tech}</h4>
                <h3 className="text-lg md:text-xl font-semibold mt-1">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2 line-clamp-3 max-w-2xl">
                  {project.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition">
                  View Project
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3 h-40 overflow-hidden rounded-lg shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
};

export default DatabasesProject;
