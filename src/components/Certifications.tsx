import { useState } from "react";
import { AnimateOnScroll } from "@/components/ui/animation";

const Certifications = () => {
  const [modalImage, setModalImage] = useState(null);

  const certifications = [
    {
      title: "Cloud Computing With AWS",
      issuer: "Gokboru Tech",
      date: "2024",
      image: "/certification/certi1.png"
    },
    {
      title: "Devops",
      issuer: "ED Vedha",
      date: "2024",
      image: "/certification/certi2.png"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2024",
      image: "/certification/certi3.png"
    },
    {
      title: "Microsoft Azure Security Engineer Associate",
      issuer: "Coursera",
      date: "2025",
      image: "/certification/certi4.png"
    },
    {
      title: "Introduction to Android Mobile Application Development",

      issuer: "Meta",
      date: "2024",
      image: "/certification/certi5.png"
    },
    {
      title: "Programming in C++",
      issuer: "Coursera",
      date: "2024",
      image: "/certification/certi6.png"
    },
  ];

  const openCertificate = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="certifications" className="section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-bl-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <AnimateOnScroll type="fade-in" className="text-center mb-16">
          <h2 className="section-title">
            My <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            I believe in continuous learning. Here are some of the certifications I've earned.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <AnimateOnScroll
              key={index}
              type="zoom-in"
              delay={index + 2}
              className="h-full"
            >
              <div className="group h-full bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 bg-cyan-500/80 text-white px-3 py-1 text-sm rounded-bl-lg">
                    {cert.date}
                  </div>
                  <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex justify-between items-center">
                      <div className="bg-cyan-500/20 border border-cyan-400/30 px-2 py-1 rounded text-xs text-cyan-400">
                        {cert.issuer}
                      </div>
                      <div
                        onClick={() => openCertificate(cert.image)}
                        className="bg-cyan-500/20 border border-cyan-400/30 px-2 py-1 rounded text-xs text-cyan-400 cursor-pointer"
                      >
                        View
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-white/70">
                    A professional certification validating expertise and knowledge in {cert.title.toLowerCase()}.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Modal for Viewing Certificate */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-20"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImage} alt="Certificate" className="max-w-lg max-h-[80vh] object-contain" />
            <button
              className="absolute top-0 right-0 text-white text-lg p-2"
              onClick={closeModal}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
