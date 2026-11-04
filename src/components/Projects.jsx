import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const showMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 3);
  };

  const projects = [
    {
      title: "Malware Detection Dashboard",
      description:
        "A monitoring dashboard for network traffic classification and suspicious IP analysis.",
      details:
        "A web-based dashboard for visualizing normal and malware traffic, tracking suspicious IP addresses, reviewing activity logs, and mapping IP locations. The project supports operational monitoring with summary metrics, charts, detailed tables, and geolocation views.",
      thumbnail:
        "/projects/deteksi-malware-menggunakan-self-supervised-contrastive-learning/thumbnail.png",
      images: [
        "/projects/deteksi-malware-menggunakan-self-supervised-contrastive-learning/1.png",
        "/projects/deteksi-malware-menggunakan-self-supervised-contrastive-learning/2.png",
        "/projects/deteksi-malware-menggunakan-self-supervised-contrastive-learning/3.png",
      ],
      tags: ["Laravel", "Machine Learning", "Network Security", "Dashboard"],
    },
    {
      title: "Book Title Proposal System",
      description:
        "A library website for submitting book title recommendations to Perpustakaan Indramayu.",
      details:
        "A public-facing library website that introduces Perpustakaan Indramayu, highlights recommended books, provides a proposal flow for new book titles, and presents location and contact information in a clean landing-page structure.",
      thumbnail: "/projects/pengusulan-judul-buku/thumbnail.png",
      images: [
        "/projects/pengusulan-judul-buku/web.png",
        "/projects/pengusulan-judul-buku/mobile.png",
        "/projects/pengusulan-judul-buku/mobile2.png",
        "/projects/pengusulan-judul-buku/mobile3.png",
      ],
      tags: ["Laravel", "Blade", "Bootstrap", "Library System"],
    },
    {
      title: "Votise",
      description:
        "A footwear storefront interface for browsing products, categories, and customer testimonials.",
      details:
        "A clean e-commerce homepage concept for shoes, featuring product discovery, popular categories, service highlights, testimonials, and a straightforward shopping interface.",
      thumbnail: "/projects/votise/thumbnail.png",
      images: ["/projects/votise/1.png"],
      tags: ["React", "Tailwind CSS", "E-commerce", "UI Design"],
    },
  ];

  const closeModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const showPreviousImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? selectedProject.images.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((currentIndex) =>
      currentIndex === selectedProject.images.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const renderProjectImage = (project, image, className = "") => (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-950 via-slate-800 to-sky-700 px-6 text-center text-white">
        <span className="text-sm font-semibold uppercase text-blue-200">
          Project Preview
        </span>
        <span className="text-2xl font-bold">{project.title}</span>
      </div>
      <img
        src={image}
        alt={`${project.title} preview`}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        onError={(event) => {
          event.currentTarget.classList.add("hidden");
        }}
      />
    </div>
  );

  const renderScrollableProjectImage = (project, image) => (
    <div className="max-h-[62vh] overflow-auto rounded-lg bg-slate-950 lg:max-h-[72vh]">
      <img
        src={image}
        alt={`${project.title} full preview`}
        className="h-auto w-full"
      />
    </div>
  );

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
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Selected projects from my full-stack development work
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
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
            >
              <button
                type="button"
                onClick={() => openProject(project)}
                className="group relative block h-48 w-full overflow-hidden bg-slate-950 text-left hover:cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/40"
                aria-label={`View details for ${project.title}`}
              >
                {renderProjectImage(project, project.thumbnail, "h-full w-full")}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/40">
                    <Eye size={18} />
                    View Details
                  </span>
                </div>
              </button>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-blue-800/40 bg-blue-950/60 px-2.5 py-1 text-xs font-medium text-blue-200 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          {visibleProjects < projects.length && (
            <button
              onClick={showMoreProjects}
              className="bg-blue-600 hover:bg-blue-500 text-white text-base font-semibold px-8 py-3 rounded-xl transition duration-200 shadow-lg shadow-blue-600/30 mr-4 hover:cursor-pointer"
            >
              Show More
            </button>
          )}
          {visibleProjects > 3 && (
            <button
              onClick={() => setVisibleProjects(3)}
              className="bg-white/10 hover:bg-white/20 border border-white/15 text-white text-base font-semibold px-8 py-3 rounded-xl transition duration-200 shadow-lg hover:cursor-pointer"
            >
              Hide
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 border border-white/10 text-white transition hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Close project details"
              >
                <X size={20} />
              </button>

              <div className="grid gap-0 lg:grid-cols-[1.4fr_1fr]">
                <div className="bg-slate-950 p-4 sm:p-6">
                  <div className="relative">
                    {renderScrollableProjectImage(
                      selectedProject,
                      selectedProject.images[activeImageIndex]
                    )}

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={showPreviousImage}
                          className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-blue-950 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft size={22} />
                        </button>
                        <button
                          type="button"
                          onClick={showNextImage}
                          className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-blue-950 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                          aria-label="Next photo"
                        >
                          <ChevronRight size={22} />
                        </button>
                      </>
                    )}
                  </div>

                  {selectedProject.images.length > 1 && (
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {selectedProject.images.map((image, index) => (
                        <button
                          type="button"
                          key={image}
                          onClick={() => setActiveImageIndex(index)}
                          className={`relative aspect-video overflow-hidden rounded-lg border-2 transition ${
                            activeImageIndex === index
                              ? "border-blue-400"
                              : "border-transparent opacity-70 hover:opacity-100"
                          }`}
                          aria-label={`View photo ${index + 1}`}
                        >
                          {renderProjectImage(selectedProject, image, "h-full w-full")}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8">
                  <p className="mb-3 text-sm font-semibold uppercase text-blue-400">
                    Project Detail
                  </p>
                  <h3
                    id="project-modal-title"
                    className="mb-4 text-2xl font-bold text-white sm:text-3xl"
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="mb-5 text-base leading-7 text-slate-300">
                    {selectedProject.details}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-blue-800/40 bg-blue-950/60 px-2.5 py-1 text-xs font-medium text-blue-200 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-6 text-slate-400">
                    Tall screenshots can be scrolled inside the preview panel.
                    Select a thumbnail or use the arrow buttons to browse more
                    project photos.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
