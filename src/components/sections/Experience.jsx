import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Experience
          </h2>

          <div className="space-y-6">
            {/* BugOwlAI */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Software Developer Intern</h3>
                  <p className="text-blue-400">BugOwlAI</p>
                </div>
                <span className="text-gray-400 text-sm">Sept. 2025 – Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Built core features for an AI testing automation platform used by engineering teams.
                </li>
                <li>
                  Developed responsive UI components with Next.js and Tailwind.
                </li>
                <li>
                  Designed REST APIs and optimized backend queries to improve system responsiveness.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
