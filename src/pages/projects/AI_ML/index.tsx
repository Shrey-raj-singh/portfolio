
const projects = [
  {
    title: "Predictive Maintenance System",
    description:
      "Developed a system to predict equipment failures using sensor data and machine learning models, reducing downtime and maintenance costs.",
    image: "/images/predictive-maintenance.png",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Built a model to predict customer churn for a subscription-based service, enabling proactive retention strategies.",
    image: "/images/churn.png",
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "Created a chatbot using natural language processing (NLP) to provide automated customer support and answer frequently asked questions.",
    image: "/images/chatbot.png",
  },
  {
    title: "Image Recognition System",
    description:
      "Developed an image recognition system for object detection and classification using convolutional neural networks (CNNs).",
    image: "/images/image-recognition.png",
  },
  {
    title: "Sentiment Analysis Tool",
    description:
      "Built a tool to analyze sentiment in text data, such as social media posts and customer reviews, to understand public opinion.",
    image: "/images/sentiment.png",
  },
];

export default function AI_MLProject() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-2">AI/ML Projects</h2>
      <p className="mb-8 text-gray-300">
        Explore my projects that leverage machine learning models, data analysis, and AI-powered applications.
      </p>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1E293B] rounded-xl border border-gray-700 p-6 flex items-center justify-between gap-4 flex-col md:flex-row"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                View Project
              </button>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-40 h-28 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
