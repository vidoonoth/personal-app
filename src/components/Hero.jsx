import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center bg-primary px-6 pb-12 pt-24 lg:px-16 lg:pb-16 lg:pt-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col lg:order-1">
              <div className="max-w-xl">
                <p className="mb-2 text-[32px] font-bold text-white lg:mb-8 lg:text-6xl">
                  Muhammad Alfin Tsabit
                  <span className="block text-blue-400 lg:mt-2">
                    Software Developer
                  </span>
                </p>
                <p className="mb-6 text-lg text-gray-300 sm:text-xl lg:mb-8">
                  Fresh graduate in Informatics Engineering with experience in
                  full-stack web development using React JS, Laravel, Python,
                  and PHP.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="btn btn-primary flex items-center gap-2"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-outline border-white text-white hover:bg-white hover:text-black"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 hidden justify-center lg:order-2 lg:mt-0 lg:flex lg:justify-end">
              <img
                src="/alfin.png"
                alt="Alfin profile"
                className="w-full max-w-xs rounded-4xl border border-white/40 bg-white/20 object-cover shadow-2xl backdrop-blur-2xl md:max-w-sm lg:max-w-md"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
