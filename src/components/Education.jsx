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
      <div className="container mx-auto max-w-7xl px-4 py-12">
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
          <p className="text-lg text-gray-200">
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
                className="rounded-lg border border-white/15 bg-white p-6 shadow-lg"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-blue-700">
                      {item.period}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-950">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-blue-900">
                      {item.school}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </motion.article>
            );
          })}
        </div>       
      </div>
    </section>
  );
};

export default Education;
