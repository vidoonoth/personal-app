import { useState } from "react"; // Import useState
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Initially show 3 projects

  const showMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 3); // Show 3 more projects
  };

  const projects = [
    {
      title: "Book Title Proposal",
      description: "Proposal for a New Book Title at the Indramayu Library",
      image: "/project1.jpg",
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/username/project1",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Wedding Invitation Card",
      description:
        "A beautifully designed wedding invitation card used to invite guests to a marriage ceremony.",
      image: "/project2.jpg",
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/username/project2",
    },
    {
      title: "Votise",
      description:
        "The largest selection of branded footwear. We curate the hottest releases and classic styles from all the major names you trust. Find your next pair here.",
      image: "/votise.png",
      liveUrl: "https://project3.com",
      githubUrl: "https://github.com/vidoonoth/personal-app",
    },
    {
      title: "E-commerce Store",
      description: "An online store built with modern web technologies.",
      image: "/ecommerce.png",
      liveUrl: "https://ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase projects and skills.",
      image: "/portfolio.png",
      liveUrl: "https://portfolio.com",
      githubUrl: "https://github.com/username/portfolio",
    },
    {
      title: "Task Management App",
      description:
        "A simple task management application for daily productivity.",
      image: "/task-app.png",
      liveUrl: "https://task-app.com",
      githubUrl: "https://github.com/username/task-app",
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-secondary"
    >
      <div className="container mx-auto px-4 py-12 max-w-7xl">
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
          {projects.slice(0, visibleProjects).map((project, index) => (
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
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {project.description}
                </p>
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
                    className="btn btn-outline-secondary flex items-center gap-2"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          {visibleProjects < projects.length && (
            <button
              onClick={showMoreProjects}
              className="bg-primary text-white text-lg font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-200 shadow-lg mr-4 hover:bg-slate-50 hover:text-slate-900 hover:cursor-pointer"
            >
              Lihat Lainnya
            </button>
          )}
          {visibleProjects > 3 && (
            <button
              onClick={() => setVisibleProjects(3)}
              className="bg-gray-600 text-white text-lg font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-200 shadow-lg hover:bg-slate-50 hover:text-slate-900 hover:cursor-pointer"
            >
              Sembunyikan
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
