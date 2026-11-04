import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, School } from "lucide-react";

const Education = () => {
  const educationHistory = [
    {
      degree: "D3 Teknik Informatika",
      school: "Politeknik Negeri Indramayu (Polindra)",
      period: "2023 - 2026",
      icon: GraduationCap,
      description:
        "Vocational informatics program with a focus on software development, databases, computer networks, and applied web systems.",
    },
    {
      degree: "SMA - MIPA",
      school: "SMA Negeri 1 Krangkeng",
      period: "2020 - 2023",
      icon: School,
      description:
        "Science major that strengthened analytical thinking, problem solving, and a structured learning foundation.",
    },
  ];

  return (
    <section id="education" className="section-padding bg-primary">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Education
          </h2>
          <p className="text-lg text-slate-300">
            My academic background is rooted in informatics, software
            engineering, and practical technology implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {educationHistory.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-blue-400">
                      {item.period}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-slate-300">
                      {item.school}
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </motion.article>
            );
          })}
        </div>       
      </div>
    </section>
  );
};

export default Education;
