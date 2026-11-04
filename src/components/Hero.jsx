import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-[#030712] px-6 pt-24 pb-12 lg:px-12 lg:pt-28 lg:pb-0 xl:px-16">
      {/* Dynamic Deep Blue & Black Gradient Atmosphere */}
      {/* 1. Base Dark Midnight Tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#040d21] to-[#020617] pointer-events-none" />

      {/* 2. Core Radial Glow directly behind Alfin's silhouette - Matching reference composition */}
      <div
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] lg:w-[850px] lg:h-[850px] rounded-full pointer-events-none blur-3xl opacity-95"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.65) 0%, rgba(14, 116, 144, 0.45) 30%, rgba(30, 58, 138, 0.25) 55%, transparent 75%)",
        }}
      />

      {/* 3. Intense Inner Spotlight behind the head */}
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none blur-2xl opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(37, 99, 235, 0.2) 60%, transparent 100%)",
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
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-4 xl:gap-8">
          
          {/* LEFT COLUMN: Punchy Bold Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center lg:col-span-4 text-left z-20"
          >
            {/* Top Greeting */}
            <p className="text-blue-300 font-medium text-lg sm:text-xl lg:text-2xl tracking-tight mb-2">
              Hey, I'm a
            </p>

            {/* Massive Bold Title - Exactly matching reference weight */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[66px] xl:text-[80px] font-black text-white tracking-tighter leading-[0.9] uppercase">
              Software<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">
                Developer
              </span>
            </h1>

            {/* Name & Title Accent */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-0.5 w-10 bg-gradient-to-r from-blue-500 to-cyan-400" />
              <p className="text-base sm:text-lg font-bold text-slate-100 tracking-wide">
                Muhammad Alfin Tsabit
              </p>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-blue-300/70 font-medium pl-13">
              Informatics Engineering • Full-Stack Web
            </p>
          </motion.div>

          {/* CENTER COLUMN: Portrait Cutout with Blue Backlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:col-span-4 z-10"
          >
            {/* Ambient Backlight Halo directly centered on head/torso */}
            <div className="absolute inset-0 -top-6 mx-auto w-[90%] h-[90%] rounded-full bg-blue-500/25 blur-3xl -z-10 pointer-events-none" />

            <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]">
              <img
                src="/alfin2.png"
                alt="Muhammad Alfin Tsabit - Software Developer"
                className="w-full h-auto object-contain select-none transition-transform duration-500 hover:scale-[1.02]"
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
            className="flex flex-col justify-center lg:col-span-4 z-20 space-y-6 text-left lg:py-12"
          >
            {/* Statement / Philosophy matching reference right side */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[26px] xl:text-[30px] font-bold text-white tracking-tight leading-snug">
                Great software should feel invisible & intuitive.
              </h2>
              <p className="mt-2 text-xs sm:text-sm font-medium text-cyan-300/80 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                From architecture to clean code, built to scale.
              </p>
            </div>

            {/* Description & Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Fresh graduate in Informatics Engineering with practical experience in
              full-stack web development using React JS, Laravel, Python, and PHP.
              Focused on delivering clean architecture, high performance, and seamless user experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
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
                {["React.js", "Laravel", "Python", "PHP", "Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-200 font-medium backdrop-blur-sm"
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
