import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import { CornerCrosshairs, AmbientGlow, IsometricCube } from "./TechShapes";

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
    <section id="education" className="section-padding bg-primary relative overflow-hidden py-16">
      {/* Ambient background lighting */}
      <AmbientGlow color="blue" position="top-left" />

      {/* Floating 3D Geometric wireframe */}
      <div className="absolute top-10 right-8 lg:right-20 z-0 pointer-events-none opacity-40">
        <IsometricCube size={90} />
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
            ACADEMIC FOUNDATION
          </span>

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
                className="relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] hover:-translate-y-1 group"
              >
                {/* Tech corner crosshairs */}
                <CornerCrosshairs />

                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 transition-colors duration-300 group-hover:border-cyan-400/40 group-hover:text-cyan-300 group-hover:bg-cyan-500/10">
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
