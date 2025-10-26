import { useState } from "react";

const certificatesData = [
  {
    id: 1,
    title: "Belajar dasar AI",
    issuer: "Dicoding",
    date: "September 2025",
    imageUrl: "/belajar-dasar-ai.png",
    link: "https://verify.coursera.org/certificate-link-1",
  },
  {
    id: 2,
    title: "HTML dasar",
    issuer: "Always Ngoding",
    date: "Januari 2025",
    imageUrl: "/html-dasar.png",
    link: "https://www.udemy.com/certificate/link-2",
  },
  {
    id: 3,
    title: "Belajar prinsip pemrograman SOLID",
    issuer: "Dicoding",
    date: "Januari 2025",
    imageUrl: "/oop.png",
    link: "https://www.freecodecamp.org/certification/link-3",
  },
];

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="certificates" className="section-padding">
      <div className="container px-16 py-12 bg-primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Certificates
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Here are some of my professional certificates showcasing my skills
            and expertise in web development.
          </p>
        </div>

        {/* Grid Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.03] transition-transform duration-300 ease-in-out group"
            >
              {/* Klik gambar untuk fullscreen */}
              <div
                onClick={() => openImage(cert.imageUrl)}
                className="cursor-pointer"
              >
                <div className="h-56 sm:h-64 lg:h-60 overflow-hidden flex items-center justify-center">
                  <img
                    src={cert.imageUrl}
                    alt={`Certificate: ${cert.title}`}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Detail Sertifikat */}
              <div className="p-6 bg-slate-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Issuer:</span> {cert.issuer}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Date:</span> {cert.date}
                </p>

                {/* Tombol link eksternal */}
                {/* <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
                >
                  View Certificate
                </a> */}
              </div>
            </div>
          ))}
        </div>

        {/* Modal fullscreen */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeImage}
          >
            <img
              src={selectedImage}
              alt="Certificate Fullscreen"
              className="max-w-4xl w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-white text-3xl hover:cursor-pointer font-bold hover:text-red-400 transition"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificate;
