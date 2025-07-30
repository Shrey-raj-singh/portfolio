const devopsProjects = [
  {
    title: 'Cloud-Native Application on AWS',
    description:
      'Developed a scalable web application using AWS services, including EC2, S3, and RDS. Implemented CI/CD pipelines with Jenkins for automated deployments.',
    image: '/images/aws.png',
    link: '#'
  },
  {
    title: 'Containerized Microservices with Docker and Kubernetes',
    description:
      'Orchestrated a microservices architecture using Docker and Kubernetes, ensuring high availability and scalability. Integrated with Prometheus and Grafana for monitoring and logging.',
    image: '/images/docker-kubernetes.png',
    link: '#'
  },
  {
    title: 'Automated Infrastructure with Terraform on Google Cloud',
    description:
      'Managed infrastructure as code using Terraform on Google Cloud, automating the provisioning and management of resources. Integrated with Cloud Build for CI/CD.',
    image: '/images/gcp-terraform.png',
    link: '#'
  },
  {
    title: 'CI/CD Pipeline for Machine Learning Models',
    description:
      'Built a CI/CD pipeline for deploying machine learning models using GitHub Actions, automating model training, testing, and deployment to a serverless platform.',
    image: '/images/cicd-pipeline.png',
    link: '#'
  }
];

export default function CloudProject() {
  return (
    <section className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Cloud & DevOps Projects</h2>

        <div className="space-y-10">
          {devopsProjects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  View Project
                </a>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
