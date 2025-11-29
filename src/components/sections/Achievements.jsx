import { RevealOnScroll } from "../RevealOnScroll";

export const Achievements = () => {
  const achievements = [
    {
      title: "7th Rank in DecodeX 2025",
      description: "at B.M.S Institute of Technology",
      icon: "🏆"
    },
    {
      title: "Data Structures and Algorithms in Java",
      description: "Completed on Udemy",
      icon: "📚"
    },
    {
      title: "Full Stack Generative and Agentic AI with Python",
      description: "Completed on Udemy",
      icon: "🤖"
    },
    {
      title: "GirlScript Summer of Code 2025",
      description: "Contributor",
      icon: "💻"
    }
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
