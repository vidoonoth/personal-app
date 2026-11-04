import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-secondary relative overflow-hidden pt-12 lg:pt-16">
      <div className="container mx-auto max-w-7xl px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12"
        >
          {/* Left: Text (All Left-Aligned) */}
          <div className="text-left lg:col-span-7 pb-8 lg:pb-30">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              About Me
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Hi! I'm Muhammad Alfin Tsabit, a fresh graduate of D3 Teknik
              Informatika from Politeknik Negeri Indramayu with a strong interest
              in software development and full-stack web development. I am used to
              working across requirement analysis, system architecture,
              implementation, and maintenance using JavaScript, Python, and
              PHP.
            </p>
          </div>

          {/* Right: Image alfin3.png (compact, proportional, sitting flush at the bottom edge) */}
          <div className="flex justify-center lg:justify-end lg:col-span-5 self-end">
            <div className="relative flex justify-center items-end leading-none">
              {/* Subtle ambient backlight glow */}
              <div className="absolute inset-x-0 bottom-6 h-3/4 rounded-full bg-blue-600/15 blur-2xl pointer-events-none" />

              <img
                src="/alfin3.png"
                alt="Muhammad Alfin Tsabit"
                className="relative z-10 block h-[260px] sm:h-[300px] md:h-[330px] lg:h-[460px] w-auto max-w-full object-contain object-bottom align-bottom drop-shadow-[0_10px_25px_rgba(2,6,23,0.7)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
