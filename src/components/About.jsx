import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container px-16 py-12 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* <div className="inline-block p-3 bg-blue-100 rounded-lg mb-6">
            <User size={24} className="text-blue-600" />
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-white mb-8">
            Hi! I'm Muhammad Alfin Tsabit, a Polytechnic student majoring in
            Informatics Engineering, pursuing a Diploma in Informatics
            Engineering. I have a strong interest in web development,
            particularly in building Laravel-based applications as a Fullstack
            Developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
