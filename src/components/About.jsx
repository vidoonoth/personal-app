import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container px-16 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block p-3 bg-blue-100 rounded-lg mb-6">
            <User size={24} className="text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-white mb-8">
            Hi! I'm Muhammad Alfin Tsabit, a passionate web developer with a keen eye for detail
            and a love for creating seamless user experiences. I specialize in modern web
            technologies and enjoy turning complex problems into simple, beautiful solutions.
          </p>
          <p className="text-lg text-white">
            With a strong foundation in web development and a continuous learning mindset,
            I strive to stay up-to-date with the latest technologies and best practices.
            I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
