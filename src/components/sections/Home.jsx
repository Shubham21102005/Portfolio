import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    console.clear();
    console.log("👋 Shubham Kumar - Portfolio");
    console.log("💻 AI/ML Student & Full-Stack Developer");
    console.log("🔗 krshubham.vercel.app");
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
              Shubham Kumar
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400">
              AI/ML Engineering Student & Full-Stack Developer
            </p>
          </div>

          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Building intelligent, scalable systems—from real-time apps to RAG-based developer tools.
            Passionate about backend engineering, developer experience, and solving practical problems
            with clean, reliable code.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-zinc-700 rounded-lg hover:border-blue-500 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
