import { RevealOnScroll } from "../RevealOnScroll";

const achievements = [
  {
    title: "7th Rank in DecodeX 2025",
    org: "B.M.S Institute of Technology",
  },
  {
    title: "Data Structures and Algorithms in Java",
    org: "Udemy",
  },
  {
    title: "Full Stack Generative and Agentic AI with Python",
    org: "Udemy",
  },
  {
    title: "GirlScript Summer of Code 2025",
    org: "Contributor",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12">Achievements</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="border border-zinc-800 rounded-lg p-6">
                <h3 className="font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-zinc-500">{achievement.org}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
