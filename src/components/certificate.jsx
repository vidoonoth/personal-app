import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Images,
  X,
} from "lucide-react";

const certificatesData = [
  {
    id: "ai-praktis-untuk-produktivitas",
    title: "AI Praktis untuk Produktivitas",
    issuer: "Dicoding x AVPN",
    date: "24 Mei 2025",
    validUntil: "24 Mei 2028",
    credentialId: "53XED6NEVPRN",
    verificationUrl: "https://www.dicoding.com/certificates/53XED6NEVPRN",
    images: [
      "/certificates/ai-praktis-untuk-produktivitas/1.jpg",
      "/certificates/ai-praktis-untuk-produktivitas/2.jpg",
    ],
  },
  {
    id: "belajar-dasar-ai",
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    date: "13 Oktober 2025",
    validUntil: "13 Oktober 2028",
    credentialId: "6RPNGYYR8Z2M",
    verificationUrl: "https://www.dicoding.com/certificates/6RPNGYYR8Z2M",
    images: [
      "/certificates/belajar-dasar-ai/1.png",
      "/certificates/belajar-dasar-ai/2.png",
    ],
  },
  {
    id: "belajar-dasar-data-science",
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding",
    date: "29 Oktober 2025",
    validUntil: "29 Oktober 2028",
    credentialId: "MRZM662NKPYQ",
    verificationUrl: "https://www.dicoding.com/certificates/MRZM662NKPYQ",
    images: [
      "/certificates/belajar-dasar-data-science/1.png",
      "/certificates/belajar-dasar-data-science/2.png",
      "/certificates/belajar-dasar-data-science/3.png",
    ],
  },
  {
    id: "belajar-dasar-pemrograman-web",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    date: "23 Maret 2026",
    validUntil: "23 Maret 2029",
    credentialId: "EYX4O1Q7WXDL",
    verificationUrl: "https://www.dicoding.com/certificates/EYX4O1Q7WXDL",
    images: [
      "/certificates/belajar-dasar-pemrograman-web/1.png",
      "/certificates/belajar-dasar-pemrograman-web/2.png",
      "/certificates/belajar-dasar-pemrograman-web/3.png",
    ],
  },
  {
    id: "belajar-dasar-structured-query-language-sql",
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding",
    date: "30 Oktober 2025",
    validUntil: "30 Oktober 2028",
    credentialId: "N9ZO2NE1RPG5",
    verificationUrl: "https://www.dicoding.com/certificates/N9ZO2NE1RPG5",
    images: [
      "/certificates/belajar-dasar-structured-query-language-(sql)/1.png",
      "/certificates/belajar-dasar-structured-query-language-(sql)/2.png",
    ],
  },
  {
    id: "belajar-dasar-visualisasi-data",
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding",
    date: "04 November 2025",
    validUntil: "04 November 2028",
    credentialId: "53XEK198VXRN",
    verificationUrl: "https://www.dicoding.com/certificates/53XEK198VXRN",
    images: [
      "/certificates/belajar-dasar-visualisasi-data/1.png",
      "/certificates/belajar-dasar-visualisasi-data/2.png",
    ],
  },
  {
    id: "belajar-html",
    title: "Belajar HTML",
    issuer: "Always Ngoding",
    date: "05 Januari 2025",
    validUntil: "05 Januari 2028",
    images: ["/certificates/belajar-html/1.png"],
  },
  {
    id: "belajar-prinsip-pemrograman-solid",
    title: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding",
    date: "04 Januari 2025",
    validUntil: "04 Januari 2028",
    credentialId: "NVP75YM8GXRO",
    verificationUrl: "https://www.dicoding.com/certificates/NVP75YM8GXRO",
    images: [
      "/certificates/belajar-prinsip-pemrograman-solid/1.png",
      "/certificates/belajar-prinsip-pemrograman-solid/2.png",
    ],
  },
  {
    id: "memulai-pemrograman-dengan-dart",
    title: "Memulai Pemrograman dengan Dart",
    issuer: "Dicoding",
    date: "16 Mei 2025",
    validUntil: "16 Mei 2028",
    credentialId: "NVP7524NVXRO",
    verificationUrl: "https://www.dicoding.com/certificates/NVP7524NVXRO",
    images: [
      "/certificates/memulai-pemrograman-dengan-dart/1.png",
      "/certificates/memulai-pemrograman-dengan-dart/2.png",
    ],
  },
  {
    id: "memulai-pemrograman-dengan-python",
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding",
    date: "30 Oktober 2025",
    validUntil: "30 Oktober 2028",
    credentialId: "NVP7JN13VXRO",
    verificationUrl: "https://www.dicoding.com/certificates/NVP7JN13VXRO",
    images: [
      "/certificates/memulai-pemrograman-dengan-python/1.png",
      "/certificates/memulai-pemrograman-dengan-python/2.png",
    ],
  },
];

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [visibleCertificates, setVisibleCertificates] = useState(3);

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setActiveImageIndex(0);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setActiveImageIndex(0);
  };

  const showMoreCertificates = () => {
    setVisibleCertificates((prevCount) => prevCount + 3);
  };

  const showPreviousImage = () => {
    if (!selectedCertificate) return;

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0
        ? selectedCertificate.images.length - 1
        : currentIndex - 1
    );
  };

  const showNextImage = () => {
    if (!selectedCertificate) return;

    setActiveImageIndex((currentIndex) =>
      currentIndex === selectedCertificate.images.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeCertificate();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <section id="certificates" className="section-padding bg-primary">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Certificates
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white">
            A collection of certificates that documents my learning journey in
            programming, data, and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificatesData.slice(0, visibleCertificates).map((cert) => (
            <article
              key={cert.id}
              className="group overflow-hidden rounded-lg bg-slate-50 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-[1.03]"
            >
              <button
                type="button"
                onClick={() => openCertificate(cert)}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-white p-3 hover:cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label={`View certificate ${cert.title}`}
              >
                <img
                  src={cert.images[0]}
                  alt={`Certificate ${cert.title}`}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-950/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-950 shadow-lg">
                    <Images size={18} />
                    View Certificate
                  </span>
                </div>
              </button>

              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="line-clamp-2 text-xl font-semibold text-gray-900">
                    {cert.title}
                  </h3>
                  <span className="shrink-0 rounded-md bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                    {cert.images.length} pages
                  </span>
                </div>

                <p className="mb-2 flex items-center gap-2 text-sm text-gray-600">
                  <Award size={16} className="text-blue-700" />
                  <span className="font-medium">{cert.issuer}</span>
                </p>
                <p className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} className="text-blue-700" />
                  {cert.date}
                </p>
                {cert.credentialId && (
                  <p className="text-sm text-gray-500">
                    ID: <span className="font-medium">{cert.credentialId}</span>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          {visibleCertificates < certificatesData.length && (
            <button
              type="button"
              onClick={showMoreCertificates}
              className="mr-4 rounded-lg bg-secondary px-8 py-3 text-lg font-medium text-white shadow-lg transition-colors duration-200 hover:bg-slate-50 hover:text-slate-900 hover:cursor-pointer"
            >
              Show More
            </button>
          )}
          {visibleCertificates > 3 && (
            <button
              type="button"
              onClick={() => setVisibleCertificates(3)}
              className="rounded-lg bg-gray-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition-colors duration-200 hover:bg-slate-50 hover:text-slate-900 hover:cursor-pointer"
            >
              Hide
            </button>
          )}
        </div>

        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-6 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCertificate}
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
            >
              <motion.div
                className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-lg bg-white shadow-2xl"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeCertificate}
                  className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950/80 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  aria-label="Close certificate"
                >
                  <X size={20} />
                </button>

                <div className="grid lg:grid-cols-[1.45fr_0.75fr]">
                  <div className="bg-slate-950 p-4 sm:p-6">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white">
                      <img
                        src={selectedCertificate.images[activeImageIndex]}
                        alt={`${selectedCertificate.title} page ${
                          activeImageIndex + 1
                        }`}
                        className="h-full w-full object-contain"
                      />

                      {selectedCertificate.images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={showPreviousImage}
                            className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-white/90 text-blue-950 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                            aria-label="Previous page"
                          >
                            <ChevronLeft size={22} />
                          </button>
                          <button
                            type="button"
                            onClick={showNextImage}
                            className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-white/90 text-blue-950 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                            aria-label="Next page"
                          >
                            <ChevronRight size={22} />
                          </button>
                        </>
                      )}
                    </div>

                    {selectedCertificate.images.length > 1 && (
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {selectedCertificate.images.map((image, index) => (
                          <button
                            type="button"
                            key={image}
                            onClick={() => setActiveImageIndex(index)}
                            className={`aspect-[4/3] overflow-hidden rounded-lg border-2 bg-white p-1 transition ${
                              activeImageIndex === index
                                ? "border-blue-400"
                                : "border-transparent opacity-70 hover:opacity-100"
                            }`}
                            aria-label={`View page ${index + 1}`}
                          >
                            <img
                              src={image}
                              alt={`${selectedCertificate.title} thumbnail ${
                                index + 1
                              }`}
                              className="h-full w-full object-contain"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="mb-3 text-sm font-semibold uppercase text-blue-700">
                      Certificate Detail
                    </p>
                    <h3
                      id="certificate-modal-title"
                      className="mb-5 text-2xl font-bold text-gray-950 sm:text-3xl"
                    >
                      {selectedCertificate.title}
                    </h3>

                    <dl className="space-y-4 text-sm text-gray-700">
                      <div>
                        <dt className="font-semibold text-gray-950">Issuer</dt>
                        <dd>{selectedCertificate.issuer}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-gray-950">Date</dt>
                        <dd>{selectedCertificate.date}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-gray-950">
                          Valid Until
                        </dt>
                        <dd>{selectedCertificate.validUntil}</dd>
                      </div>
                      {selectedCertificate.credentialId && (
                        <div>
                          <dt className="font-semibold text-gray-950">
                            Credential ID
                          </dt>
                          <dd>{selectedCertificate.credentialId}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="font-semibold text-gray-950">Page</dt>
                        <dd>
                          {activeImageIndex + 1} of{" "}
                          {selectedCertificate.images.length}
                        </dd>
                      </div>
                    </dl>

                    {selectedCertificate.verificationUrl && (
                      <a
                        href={selectedCertificate.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white transition hover:bg-blue-900"
                      >
                        Verify Certificate
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificate;
