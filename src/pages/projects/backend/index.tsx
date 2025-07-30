
const projects = [
  {
    title: 'Project 1: E-commerce API',
    description:
      'Developed a robust e-commerce API using Node.js and Express.js, featuring user authentication, product management, shopping cart functionality, and order processing. Integrated with a PostgreSQL database for data persistence.',
    features: ['User authentication', 'Product management', 'Shopping cart', 'Order processing'],
    tech: ['Node.js', 'Express.js', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project 2: Real-time Chat Application',
    description:
      'Built a real-time chat application using Go and WebSockets, enabling instant messaging between users. Implemented user presence tracking and message history storage using Redis.',
    features: ['Real-time messaging', 'User presence tracking', 'Message history'],
    tech: ['Go', 'WebSockets', 'Redis'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project 3: Machine Learning Model Deployment',
    description:
      'Deployed a machine learning model for image classification using Python and FastAPI. Created a RESTful API to serve predictions, with Docker for containerization and deployment on a cloud platform.',
    features: ['Image classification', 'RESTful API', 'Containerization', 'Cloud deployment'],
    tech: ['Python', 'FastAPI', 'Docker'],
    github: '#',
    live: '#',
  },
];

export default function BackendProjects() {
  return (
    <section className="bg-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Backend Development Projects</h2>
        <p className="text-gray-400 mb-10">
          Explore a collection of backend projects showcasing expertise in Node.js, Go, Python, Express.js, FastAPI, and other backend technologies.
        </p>

        {projects.map((project, index) => (
          <div key={index} className="mb-12 border-t border-gray-700 pt-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400 mb-4">
              <div>
                <p className="font-medium text-white mb-1">Key Features</p>
                <ul className="list-disc list-inside">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Technologies Used</p>
                <ul className="list-disc list-inside">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={project.live}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                View Project
              </a>
              <a
                href={project.github}
                className="text-blue-400 underline"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
