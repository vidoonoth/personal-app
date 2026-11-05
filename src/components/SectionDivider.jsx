import { motion } from "framer-motion";

const SectionDivider = ({ label, id }) => {
  return (
    <div id={id} className="relative w-full py-6 sm:py-8 flex items-center justify-center overflow-hidden pointer-events-none select-none">
      {/* Background line with gradient fade */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      {/* Glowing beam that animates across the divider */}
      <motion.div
        className="absolute h-px w-48 sm:w-72 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
          duration: 4.5,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
      />

      {/* Center technical badge / node */}
      <div className="relative z-10 flex items-center gap-2.5 px-4 py-1 rounded-full bg-slate-950/90 border border-slate-800/80 backdrop-blur-md shadow-[0_0_20px_rgba(2,6,23,0.9)]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
        </span>
        {label && (
          <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            {label}
          </span>
        )}
      </div>

      {/* Decorative side crosshair markers */}
      <span className="absolute left-8 lg:left-24 text-slate-700/60 font-mono text-xs select-none">
        +
      </span>
      <span className="absolute right-8 lg:right-24 text-slate-700/60 font-mono text-xs select-none">
        +
      </span>
    </div>
  );
};

export default SectionDivider;

