import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CodePulse */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">CodePulse — AI Code Intelligence Platform</h3>
              <p className="text-gray-400 mb-4">
                Built an AI-powered tool that lets developers explore and understand GitHub repositories using natural language. Designed a full ingestion pipeline using Tree-sitter to parse multiple languages and generate high-quality embeddings stored in Qdrant. Created a smooth, real-time search experience with a clean UI and a structured retrieval flow for accurate code comprehension.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Qdrant", "TailwindCSS", "Monaco Editor"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Real-Time Chat App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-400 mb-4">
                Built a real-time messaging app with typing indicators, image sharing, and instant updates using Socket.IO. Implemented efficient session handling and smooth UI interactions for a reliable chat experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Express.js", "Socket.IO", "MongoDB", "Zustand", "DaisyUI"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Shubham21102005/Chat_App"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* AI Mock Interview Platform */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">AI Mock Interview Platform</h3>
              <p className="text-gray-400 mb-4">
                Developed an adaptive AI interview system that asks role-specific technical questions based on resumes and job descriptions. Added JWT authentication, conversation tracking, and a feedback engine that scores technical clarity and communication. Integrated Web Speech API to enable real-time speech-to-text (STT) and text-to-speech (TTS) for a natural interview experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Express.js", "MongoDB", "Next.js", "TypeScript", "Web Speech API", "TailwindCSS"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://ai-interview-prep-app-zgox.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* AI Trip Planner */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">AI Trip Planner</h3>
              <p className="text-gray-400 mb-4">
                Smart travel assistant that uses AI to plan personalized trips based on user preferences, budget, and interests. Integrates Google Maps and Gemini for real-time suggestions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "MongoDB", "TailwindCSS", "Google Gemini"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Shubham21102005/AI_Trip_Planner"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Finance Management App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Finance Management App</h3>
              <p className="text-gray-400 mb-4">
                Budget tracking app with smart insights, charts, and reminders. Helps users set savings goals and monitor expenses via a clean dashboard.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Chart.js", "Express", "MongoDB", "TailwindCSS"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Shubham21102005/SavvyScholar"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
