import { RevealOnScroll } from "../RevealOnScroll";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiVercel,
  SiLinux,
  SiOpenjdk,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

import { BiData } from "react-icons/bi";
import { TbSql } from "react-icons/tb";

const skills = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "SQL", icon: TbSql, color: "#CC2927" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "RAG/Vector DBs", icon: BiData, color: "#A855F7" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all hover:scale-110">
                  <skill.icon
                    className="w-12 h-12 md:w-14 md:h-14 transition-colors"
                    style={{ color: skill.color }}
                  />
                </div>
                <span className="text-xs md:text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
