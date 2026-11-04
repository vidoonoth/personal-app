import { motion } from "framer-motion";
import { Code2, Database, Layers, MonitorSmartphone, Wrench } from "lucide-react";

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
    <section id="skills" className="section-padding bg-primary">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto ml-12 mb-12 max-w-3xl text-left"
        >
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
                className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
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
                      className="rounded-lg border border-blue-800/40 bg-blue-950/60 px-3 py-1.5 text-xs font-medium text-blue-200 backdrop-blur-sm"
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
