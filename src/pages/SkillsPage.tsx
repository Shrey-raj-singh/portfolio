

const SkillsPage = () => {
    return (
        <div className=" py-12 max-w-6xl mx-auto text-white">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-blue-400">My Skill Set</h1>

      {/* Frontend */}
      <section className="pt-20" id="frontend">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Frontend</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>React.js / Next.js</li>
          <li>TypeScript & JavaScript (ES6+)</li>
          <li>Tailwind CSS, Chakra UI, Material UI</li>
          <li>Figma to HTML/CSS conversion</li>
        </ul>
      </section>

      {/* Backend */}
      <section className="pt-20" id="backend">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Backend</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Node.js (Express, Fastify)</li>
          <li>Python (Flask, FastAPI)</li>
          <li>Authentication, APIs, WebSockets</li>
          <li>REST & GraphQL APIs</li>
        </ul>
      </section>

      {/* Databases */}
      <section className="pt-20" id="databases">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Databases</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>PostgreSQL, MySQL, SQLite</li>
          <li>MongoDB, Redis, Neo4j</li>
          <li>ORMs: Prisma, Mongoose, SQLAlchemy</li>
        </ul>
      </section>

      {/* Cloud & DevOps */}
      <section className="pt-20" id="cloud">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Cloud & DevOps</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Docker, GitHub Actions, Render</li>
          <li>AWS (S3, EC2, Lambda, RDS)</li>
          <li>Firebase, Vercel, Netlify</li>
          <li>CI/CD, Deployment Automation</li>
        </ul>
      </section>

      {/* AI/ML */}
      <section className="pt-20" id="ai-ml">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">AI / Machine Learning</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Python (Pandas, NumPy, Scikit-learn)</li>
          <li>Deep Learning: TensorFlow, PyTorch</li>
          <li>Hugging Face Transformers</li>
          <li>ML Deployment with FastAPI & Streamlit</li>
        </ul>
      </section>

      {/* Mobile */}
      <section className="pt-20" id="mobile">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Mobile Apps</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Flutter (Dart)</li>
          <li>Firebase Auth, Firestore Integration</li>
          <li>Cross-platform iOS + Android</li>
        </ul>
      </section>
    </div>
    );
}

export default SkillsPage;