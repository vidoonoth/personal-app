import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-7xl px-6 py-6 lg:px-16 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-[32px] font-bold text-white lg:text-4xl">
            About Me
          </p>

          <div className="mt-8 mb-6 flex justify-center lg:hidden">
            <img
              src="/alfin.png"
              alt="Alfin profile"
              className="w-full max-w-xs rounded-4xl border border-white/40 bg-white/20 object-cover shadow-2xl backdrop-blur-2xl md:max-w-sm"
              loading="lazy"
              decoding="async"
            />
          </div>

          <p className="mb-8 text-lg text-white">
            Hi! I'm Muhammad Alfin Tsabit, a fresh graduate of D3 Teknik
            Informatika from Politeknik Negeri Indramayu with a strong interest
            in software development and full-stack web development. I am used to
            working across requirement analysis, system architecture,
            implementation, and maintenance using React JS, Laravel, Python, and
            PHP.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
