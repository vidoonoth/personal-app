import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificate from "./components/certificate";
import SectionDivider from "./components/SectionDivider";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);

  return (
    <div className="antialiased min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Top scroll-linked progress beam */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 origin-left z-50 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
      />

      <Navbar />
      <Hero />
      <SectionDivider label="ABOUT ME" />
      <About />
      <SectionDivider label="EDUCATION & ACADEMICS" />
      <Education />
      <SectionDivider label="CAREER & EXPERIENCE" />
      <Experience />
      <SectionDivider label="TECHNICAL EXPERTISE" />
      <Skills />
      <SectionDivider label="FEATURED PROJECTS" />
      <Projects />
      <SectionDivider label="CERTIFICATES & AWARDS" />
      <Certificate />
      <SectionDivider label="GET IN TOUCH" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
