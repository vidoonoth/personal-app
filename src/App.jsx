import { useEffect } from "react";
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

function App() {
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);

  return (
    <div className="antialiased min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
