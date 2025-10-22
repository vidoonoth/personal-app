import { motion } from "framer-motion";
import { Code2, Layout, Database, Palette } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Layout,
      items: ["HTML", "CSS", "Javascript", "React.js", "blade", "Alpine.js"],
      color: "blue",
    },
    {
      category: "Backend Development",
      icon: Code2,
      items: ["Node.js", "Express.js", "REST API", "PHP", "Laravel"],
      color: "green",
    },
    {
      category: "Database",
      icon: Database,
      items: ["MongoDB", "MySQL", "Firebase Firestore"],
      color: "purple",
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      items: ["Figma"],
      color: "pink",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    pink: "bg-pink-100 text-pink-600",
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container px-16 py-12 bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto ${
                    colorClasses[skill.color].split(" ")[0]
                  }`}
                >
                  <Icon
                    className={colorClasses[skill.color].split(" ")[1]}
                    size={24}
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
