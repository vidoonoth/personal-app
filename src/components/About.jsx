import { motion } from "framer-motion";
import { OrbitShape, IsometricCube, AmbientGlow } from "./TechShapes";

const About = () => {
  return (
    <section id="about" className="bg-secondary relative overflow-hidden pt-12 lg:pt-16">
      {/* Ambient background lighting */}
      <AmbientGlow color="cyan" position="top-right" />
      <AmbientGlow color="blue" position="bottom-left" />

      {/* Floating 3D Geometric wireframe */}
      <div className="absolute top-12 left-6 lg:left-16 z-0 pointer-events-none opacity-40">
        <IsometricCube size={80} />
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12"
        >
          {/* Left: Text (All Left-Aligned) */}
          <div className="text-left lg:col-span-7 pb-8 lg:pb-30">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-300 mb-3 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              BIOGRAPHY & BACKGROUND
            </span>

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

          {/* Right: Image alfin3.png with Cybernetic Orbit */}
          <div className="flex justify-center lg:justify-end lg:col-span-5 self-end">
            <div className="relative flex justify-center items-end leading-none">
              {/* Cybernetic rotating tech orbit behind Alfin */}
              <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-50">
                <OrbitShape className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]" />
              </div>

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
