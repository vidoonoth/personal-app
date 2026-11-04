import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 py-16 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left: Text (All Left-Aligned) */}
          <div className="text-left lg:col-span-7">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              About Me
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              Hi! I'm Muhammad Alfin Tsabit, a fresh graduate of D3 Teknik
              Informatika from Politeknik Negeri Indramayu with a strong interest
              in software development and full-stack web development. I am used to
              working across requirement analysis, system architecture,
              implementation, and maintenance using React JS, Laravel, Python, and
              PHP.
            </p>
          </div>

          {/* Right: Image alfin3.png */}
          <div className="flex justify-center lg:justify-end lg:col-span-5">
            <div className="relative flex justify-center items-center">
              {/* Subtle ambient backlight glow */}
              <div className="absolute inset-0 -m-8 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

              <img
                src="/alfin3.png"
                alt="Muhammad Alfin Tsabit"
                className="relative z-10 w-full max-w-[140px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[200px] object-contain drop-shadow-[0_15px_30px_rgba(2,6,23,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
