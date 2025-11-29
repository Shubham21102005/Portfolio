import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  useEffect(() => {
    console.clear(); // optional, clears previous logs
    console.log("👋 Welcome to my portfolio!");
    console.log("🧑‍💻 Name: Shubham Kumar");
    console.log("💻 Role: AI/ML Engineering Student & Full-Stack Developer");
    console.log("⚡ Skills: TypeScript | Python | React | Next.js | Node.js | FastAPI | PostgreSQL | MongoDB");
    console.log("🤖 AI/ML: RAG Pipelines | Vector Databases | LangChain | Embeddings");
    console.log("🎯 Mission: Building intelligent, scalable systems with clean, reliable code.");
    console.log("%cThanks for visiting! 🚀", "color: cyan; font-weight: bold; font-size: 16px;");
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Shubham Kumar
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            AI/ML engineering student with strong full-stack skills. I enjoy building
            intelligent, scalable systems—from real-time apps to RAG-based developer tools.
            Passionate about backend engineering, developer experience, and solving practical
            problems with clean, reliable code.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
