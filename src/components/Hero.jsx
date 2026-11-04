import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-end overflow-hidden bg-[#030712] px-6 pt-16 lg:px-12 lg:pt-20 xl:px-16 pb-0">
      {/* Dynamic Deep Blue & Black Gradient Atmosphere */}
      {/* 1. Base Dark Midnight Tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#040d21] to-[#020617] pointer-events-none" />

      {/* 2. Core Radial Glow directly behind Alfin's silhouette - Darker, richer midnight navy glow */}
      <div
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] lg:w-[950px] lg:h-[950px] rounded-full pointer-events-none blur-3xl opacity-90"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.38) 0%, rgba(30, 58, 138, 0.28) 35%, rgba(15, 23, 42, 0.45) 60%, transparent 80%)",
        }}
      />

      {/* 3. Subtle Inner Spotlight behind the head - Softened & darker */}
      <div
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full pointer-events-none blur-2xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(30, 58, 138, 0.15) 60%, transparent 100%)",
        }}
      />

      {/* 4. Ambient Vignette Lighting */}
      <div className="absolute -top-24 -left-20 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      {/* 5. Subtle Technical Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #93c5fd 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 6. Deep bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-0" />

      {/* Content Grid */}
      <div className="container relative z-10 mx-auto max-w-7xl h-full flex flex-col justify-end">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-4 xl:gap-8">

          {/* LEFT COLUMN: Punchy Bold Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center lg:self-center lg:col-span-4 text-left z-20 pb-8 lg:pb-16"
          >
            {/* Top Greeting */}
            <p className="text-blue-300 font-medium text-lg sm:text-xl lg:text-2xl tracking-tight mb-2">
              Hey, I'm a
            </p>

            {/* Massive Bold Title - Exactly matching reference weight */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[66px] xl:text-[80px] font-black text-white tracking-tighter leading-[0.9] uppercase">
              Software<br />
              <span className="text-white bg-clip-text">
                Developer
              </span>
            </h1>
          </motion.div>

          {/* CENTER COLUMN: Portrait Cutout sitting flush at the bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-end justify-center lg:col-span-4 z-10 self-end leading-none"
          >
            {/* Ambient Backlight Halo directly centered on head/torso */}
            <div className="absolute inset-0 -top-6 mx-auto w-[90%] h-[90%] rounded-full bg-blue-600/15 blur-3xl -z-10 pointer-events-none" />

            <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] leading-none">
              <img
                src="/alfin2.png"
                alt="Muhammad Alfin Tsabit - Software Developer"
                className="w-full h-auto object-contain object-bottom block align-bottom select-none transition-transform duration-500 hover:scale-[1.02]"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Statement, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col justify-center lg:self-center lg:col-span-4 z-20 space-y-6 text-left pb-10 lg:pb-16"
          >
            {/* Name */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[28px] xl:text-[34px] font-bold text-white tracking-tight leading-snug">
                Muhammad Alfin Tsabit
              </h2>
            </div>

            {/* Description & Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Fresh graduate in Informatics Engineering with practical experience in
              full-stack web development using JavaScript, Python, and PHP.
              Focused on delivering clean architecture, high performance, and seamless user experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-blue-900 hover:text-white bg-white hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["JavaScript", "Python", "PHP"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg font-medium text-blue-200 bg-blue-950/60 border border-blue-800/40 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
