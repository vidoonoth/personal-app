import { motion } from "framer-motion";

/**
 * 1. Cybernetic Orbit Shape
 * A sophisticated tech orbit with dashed rings and a glowing satellite orb
 */
export const OrbitShape = ({ className = "w-72 h-72" }) => {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      {/* Outer rotating dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-blue-500/20 border-dashed"
      />

      {/* Middle reverse-rotating ring with glowing node */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-cyan-500/25"
      >
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
      </motion.div>

      {/* Inner pulsing ring */}
      <motion.div
        animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute inset-10 rounded-full border border-indigo-500/30 bg-blue-600/5 blur-[1px]"
      />

      {/* Center glowing core */}
      <div className="absolute inset-16 rounded-full bg-blue-500/10 blur-xl" />
    </div>
  );
};

/**
 * 2. Isometric 3D Wireframe Tech Cube
 * Elegant geometric illustration that gently floats in 3D space
 */
export const IsometricCube = ({ size = 120, className = "" }) => {
  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
        rotate: [0, 6, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut",
      }}
      className={`pointer-events-none select-none opacity-40 hover:opacity-75 transition-opacity duration-300 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.35)]"
      >
        <defs>
          <linearGradient id="cubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>

        {/* Top Face */}
        <polygon
          points="50,15 85,32 50,50 15,32"
          fill="rgba(56, 189, 248, 0.08)"
          stroke="url(#cubeGrad)"
          strokeWidth="1.2"
        />
        {/* Left Face */}
        <polygon
          points="15,32 50,50 50,85 15,68"
          fill="rgba(30, 58, 138, 0.12)"
          stroke="url(#cubeGrad)"
          strokeWidth="1.2"
        />
        {/* Right Face */}
        <polygon
          points="50,50 85,32 85,68 50,85"
          fill="rgba(15, 23, 42, 0.25)"
          stroke="url(#cubeGrad)"
          strokeWidth="1.2"
        />

        {/* Inner wireframe geometry lines */}
        <line x1="50" y1="50" x2="50" y2="15" stroke="rgba(147, 197, 253, 0.4)" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="15" y1="32" x2="85" y2="68" stroke="rgba(147, 197, 253, 0.25)" strokeWidth="0.8" strokeDasharray="2 2" />
        
        {/* Vertex glow points */}
        <circle cx="50" cy="15" r="2" fill="#38bdf8" />
        <circle cx="85" cy="32" r="2" fill="#3b82f6" />
        <circle cx="15" cy="32" r="2" fill="#3b82f6" />
        <circle cx="50" cy="50" r="2.5" fill="#67e8f9" />
        <circle cx="50" cy="85" r="2" fill="#818cf8" />
      </svg>
    </motion.div>
  );
};

/**
 * 3. Technical Crosshair Corner Markers
 * Signature Linear / Raycast style corner accents for cards and sections
 */
export const CornerCrosshairs = () => {
  return (
    <>
      <span className="absolute -top-1.5 -left-1.5 text-blue-400/40 font-mono text-[10px] leading-none select-none pointer-events-none">
        +
      </span>
      <span className="absolute -top-1.5 -right-1.5 text-blue-400/40 font-mono text-[10px] leading-none select-none pointer-events-none">
        +
      </span>
      <span className="absolute -bottom-1.5 -left-1.5 text-blue-400/40 font-mono text-[10px] leading-none select-none pointer-events-none">
        +
      </span>
      <span className="absolute -bottom-1.5 -right-1.5 text-blue-400/40 font-mono text-[10px] leading-none select-none pointer-events-none">
        +
      </span>
    </>
  );
};

/**
 * 4. Ambient Glowing Mesh Orbs
 * Multi-layer gradient blurs that give depth and luxury atmosphere
 */
export const AmbientGlow = ({ color = "blue", position = "top-right" }) => {
  const posClasses = {
    "top-right": "top-0 right-0 -translate-y-1/3 translate-x-1/3",
    "top-left": "top-0 left-0 -translate-y-1/3 -translate-x-1/3",
    "bottom-right": "bottom-0 right-0 translate-y-1/3 translate-x-1/3",
    "bottom-left": "bottom-0 left-0 translate-y-1/3 -translate-x-1/3",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const colorClasses = {
    blue: "bg-blue-600/12 from-blue-500/20 via-blue-600/10 to-transparent",
    cyan: "bg-cyan-500/10 from-cyan-400/20 via-blue-500/10 to-transparent",
    indigo: "bg-indigo-600/12 from-indigo-500/20 via-purple-600/10 to-transparent",
  };

  return (
    <div
      className={`absolute w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full pointer-events-none blur-[120px] bg-gradient-radial ${
        colorClasses[color] || colorClasses.blue
      } ${posClasses[position] || posClasses["center"]}`}
    />
  );
};

