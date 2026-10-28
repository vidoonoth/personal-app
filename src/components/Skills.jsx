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
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
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
                className="rounded-lg border border-white/10 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-950">
                    {skill.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700"
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
