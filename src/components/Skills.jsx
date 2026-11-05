import { motion } from "framer-motion";
import { Code2, Database, Layers, MonitorSmartphone, Wrench } from "lucide-react";
import { CornerCrosshairs, AmbientGlow, IsometricCube } from "./TechShapes";

const Skills = () => {
  const skillGroups = [
    {
      category: "Programming Languages",
      icon: Code2,
      items: ["PHP", "Python", "JavaScript", "TypeScript", "Dart"],
    },
    {
      category: "Frameworks & Libraries",
      icon: Layers,
      items: ["Laravel", "React JS", "Node JS", "Express JS", "Flutter"],
    },
    {
      category: "Database",
      icon: Database,
      items: ["MySQL", "PostgreSQL", "Firebase"],
    },
    {
      category: "Frontend",
      icon: MonitorSmartphone,
      items: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Tools & Others",
      icon: Wrench,
      items: ["Git", "Docker", "Postman", "Trello", "Microsoft Office"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-primary relative overflow-hidden py-16">
      {/* Ambient background lighting */}
      <AmbientGlow color="cyan" position="top-right" />

      {/* Floating 3D Geometric wireframe */}
      <div className="absolute top-12 right-12 z-0 pointer-events-none opacity-40">
        <IsometricCube size={95} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl text-left"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-300 mb-3 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            CORE CAPABILITIES
          </span>

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Technical Skills
          </h2>
          <p className="max-w-2xl text-lg text-slate-300">
            A practical stack for building, maintaining, and improving
            full-stack web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)] group"
              >
                {/* Tech corner crosshairs */}
                <CornerCrosshairs />

                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 transition-colors duration-300 group-hover:border-cyan-400/40 group-hover:text-cyan-300 group-hover:bg-cyan-500/10">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {skill.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-blue-800/40 bg-blue-950/60 px-3 py-1.5 text-xs font-medium text-blue-200 backdrop-blur-sm transition-colors duration-200 hover:border-cyan-400/50 hover:text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
