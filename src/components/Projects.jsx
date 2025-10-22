import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Book Title Proposal',
      description: 'Proposal for a New Book Title at the Indramayu Library',
      image: '/project1.jpg',
      liveUrl: 'https://project1.com',
      githubUrl: 'https://github.com/username/project1',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Wedding Invitation Card',
      description: 'A beautifully designed wedding invitation card used to invite guests to a marriage ceremony.',
      image: '/project2.jpg',
      liveUrl: 'https://project2.com',
      githubUrl: 'https://github.com/username/project2',
     
    },
    {
      title: 'Fashion Store',
      description: 'A modern and stylish online fashion store that offers a wide range of clothing, accessories, and footwear for men and women.',
      image: '/project3.jpg',
      liveUrl: 'https://project3.com',
      githubUrl: 'https://github.com/username/project3',
     
    },
  ];

  return (
    <section id="projects" className="section-paddingbg-linear-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container px-16 py-12 bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-2">{project.description}</p>                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center gap-2"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline flex items-center gap-2"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;