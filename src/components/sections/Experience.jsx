import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12">Experience</h2>

          <div className="border border-zinc-800 rounded-lg p-6">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold">Software Developer Intern</h3>
                <p className="text-blue-500">BugOwlAI</p>
              </div>
              <span className="text-sm text-zinc-500">Sept. 2025 – Present</span>
            </div>

            <ul className="space-y-2 text-zinc-400">
              <li>• Built core features for an AI testing automation platform used by engineering teams.</li>
              <li>• Developed responsive UI components with Next.js and Tailwind.</li>
              <li>• Designed REST APIs and optimized backend queries to improve system responsiveness.</li>
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
