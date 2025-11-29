import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const programmingLanguages = ["Python", "TypeScript", "JavaScript", "Java", "SQL"];

  const frameworksLibraries = [
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "FastAPI",
    "LangChain/LangGraph",
    "TailwindCSS"
  ];

  const aiMLSkills = [
    "RAG Pipelines",
    "Vector Databases (Qdrant)",
    "Embeddings",
    "Semantic/Hybrid Search"
  ];

  const databases = ["PostgreSQL", "MongoDB", "Redis"];

  const devOpsTools = [
    "Git/GitHub",
    "Docker",
    "Vercel",
    "Railway",
    "Supabase",
    "Postman",
    "Linux"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              AI/ML engineering student with strong full-stack skills. I enjoy building
              intelligent, scalable systems—from real-time apps to RAG-based developer tools.
              Passionate about backend engineering, developer experience, and solving practical
              problems with clean, reliable code.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworksLibraries.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">AI/ML & LLM Engineering</h3>
                <div className="flex flex-wrap gap-2">
                  {aiMLSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Databases & Storage</h3>
                <div className="flex flex-wrap gap-2">
                  {databases.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all md:col-span-2">
                <h3 className="text-xl font-bold mb-4">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {devOpsTools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full-width education section */}
          <div className="mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <div className="text-gray-300 space-y-2">
                <div>
                  <strong>Sir M. Visvesvaraya Institute of Technology, Bengaluru</strong>
                </div>
                <div className="text-gray-400">
                  B.E. in Artificial Intelligence and Machine Learning
                </div>
                <div className="text-gray-400">
                  Aug. 2023 – June 2027 | CGPA: 8.15/10
                </div>
                <div className="mt-3">
                  <strong>Relevant Coursework:</strong> DSA, DBMS, Operating Systems, OOPs
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
