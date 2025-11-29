import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "CodePulse",
    description:
      "AI-powered tool that lets developers explore and understand GitHub repositories using natural language. Built a full ingestion pipeline using Tree-sitter to parse multiple languages and generate embeddings stored in Qdrant.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Qdrant"],
    link: null,
  },
  {
    title: "Real-Time Chat App",
    description:
      "Real-time messaging app with typing indicators, image sharing, and instant updates using Socket.IO. Implemented efficient session handling and smooth UI interactions.",
    tech: ["React", "Express.js", "Socket.IO", "MongoDB", "Zustand"],
    link: "https://github.com/Shubham21102005/Chat_App",
  },
  {
    title: "AI Mock Interview Platform",
    description:
      "Adaptive AI interview system that asks role-specific questions based on resumes and job descriptions. Features JWT authentication, conversation tracking, and feedback scoring with Web Speech API for STT/TTS.",
    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    link: "https://ai-interview-prep-app-zgox.vercel.app/",
  },
  {
    title: "AI Trip Planner",
    description:
      "Smart travel assistant that uses AI to plan personalized trips based on user preferences, budget, and interests. Integrates Google Maps and Gemini for real-time suggestions.",
    tech: ["React", "Node.js", "MongoDB", "Google Gemini"],
    link: "https://github.com/Shubham21102005/AI_Trip_Planner",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-zinc-800 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-zinc-900 border border-zinc-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
