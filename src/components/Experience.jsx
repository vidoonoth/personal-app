import { motion } from "framer-motion";
import { BriefcaseBusiness, Calendar, CheckCircle2, MapPin } from "lucide-react";

const Experience = () => {
  const internshipTasks = [
    "Designed system architecture based on client requirements.",
    "Analyzed user needs and translated them into system flows and feature scope.",
    "Implemented and built client websites with PHP and Laravel.",
    "Investigated bugs, fixed issues, and maintained client websites.",
  ];

  const projectExperience = [
    {
      role: "Full-stack Developer",
      title: "Book Title Proposal System for Perpustakaan Indramayu",
      period: "2023 - 2024",
      summary:
        "Built a web-based system that allows library visitors to propose book titles that are not yet available in the library collection.",
      stack: "Laravel",
    },
    {
      role: "Full-stack Developer",
      title: "Malware Detection System with Self-Supervised Contrastive Learning",
      period: "2026",
      summary:
        "Developed a malware detection system with a dashboard for visualizing normal and malware traffic data.",
      stack: "Python, Laravel",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Experience
          </h2>
          <p className="text-lg text-slate-300">
            Internship and project experience in full-stack web development,
            system design, implementation, and maintenance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40"
          >
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <BriefcaseBusiness size={24} />
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-blue-400">
                  Internship
                </p>
                <h3 className="text-2xl font-bold text-white">
                  Full-stack Web Developer
                </h3>
                <p className="mt-1 font-semibold text-slate-300">
                  CV. Creative Gama Studio
                </p>
              </div>
            </div>

            <div className="mb-5 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                Yogyakarta
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} className="text-blue-400" />
                2025
              </span>
            </div>

            <ul className="space-y-3">
              {internshipTasks.map((task) => (
                <li key={task} className="flex gap-3 text-slate-300">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-blue-400"
                  />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-xl border border-blue-800/30 bg-blue-950/40 px-4 py-3 text-sm font-medium text-blue-200">
              Tech stack: PHP, Laravel
            </p>
          </motion.article>

          <div className="grid grid-cols-1 gap-4">
            {projectExperience.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-blue-400">
                    {project.role}
                  </p>
                  <span className="rounded-lg bg-blue-500/15 border border-blue-400/25 px-3 py-1 text-xs font-semibold text-blue-300 backdrop-blur-sm">
                    {project.period}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="mb-4 text-sm leading-6 text-slate-300">
                  {project.summary}
                </p>
                <p className="text-sm font-medium text-blue-200">
                  Tech stack: {project.stack}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
