import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = {
    "Languages": ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
    "Frameworks": ["Next.js", "React", "Node.js", "Express.js", "FastAPI", "LangChain"],
    "AI/ML": ["RAG Pipelines", "Vector DBs (Qdrant)", "Embeddings", "Semantic Search"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis"],
    "Tools": ["Docker", "Git/GitHub", "Vercel", "Railway", "Supabase", "Linux"],
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12">About</h2>

          <p className="text-lg text-zinc-400 mb-12 leading-relaxed">
            AI/ML engineering student with strong full-stack skills. I enjoy building intelligent,
            scalable systems—from real-time apps to RAG-based developer tools. Passionate about backend
            engineering, developer experience, and solving practical problems with clean, reliable code.
          </p>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-zinc-500 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-zinc-900 border border-zinc-800 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 border border-zinc-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-2">
              <p className="font-medium">Sir M. Visvesvaraya Institute of Technology, Bengaluru</p>
              <p className="text-zinc-400">B.E. in Artificial Intelligence and Machine Learning</p>
              <p className="text-sm text-zinc-500">Aug. 2023 – June 2027 | CGPA: 8.15/10</p>
              <p className="text-sm text-zinc-400 mt-3">
                <strong>Coursework:</strong> DSA, DBMS, Operating Systems, OOPs
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
