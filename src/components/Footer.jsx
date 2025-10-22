import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: Twitter,
    },
  ];

  return (
    <footer className="bg-secondary text-white py-4">
      <div className="container">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-4"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-300">
              © {currentYear} Muhammad Alfin Tsabit. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;