import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiX, FiArrowUpRight } from "react-icons/fi";

// Videos
import techVideo from "../assets/videos/tech-product-launch.mp4";
import realEstateVideo from "../assets/videos/luxury-real-estate-campaign.mp4";
import sciFiVideo from "../assets/videos/sci-fi-animation-video.mp4";
import brandVideo from "../assets/videos/brand-promotion-ads.mp4";
import ugcVideo from "../assets/videos/ugc-skincare.mp4";
import marketingVideo from "../assets/videos/promotion-marketing.mp4";
import cinematicVideo from "../assets/videos/cinematic-ai-video.mp4";

const projects = [
  {
    title: "Tech Product Launch",
    category: "Commercial",
    video: techVideo,
    portrait: false,
  },
  {
    title: "Luxury Real Estate Campaign",
    category: "Real Estate",
    video: realEstateVideo,
    portrait: false,
  },
  {
    title: "Sci-fi Animation Video",
    category: "AI Animation",
    video: sciFiVideo,
    portrait: false,
  },
  {
    title: "Brand Promotion Ads",
    category: "Marketing",
    video: brandVideo,
    portrait: false,
  },
  {
    title: "UGC Skincare",
    category: "AI UGC",
    video: ugcVideo,
    portrait: true,
  },
  {
    title: "Promotion Marketing",
    category: "Advertisement",
    video: marketingVideo,
    portrait: true,
  },
  {
    title: "Cinematic AI Video",
    category: "Cinematic",
    video: cinematicVideo,
    portrait: false,
  },
];

function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  // Prevent background scrolling when modal is open & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeProject();
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <>
      <section id="work" className="bg-[#111111] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="uppercase tracking-[4px] md:tracking-[6px] text-red-500 text-xs md:text-sm font-semibold">
              Featured Work
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 md:mt-4">
              Selected Projects
            </h2>

            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4 md:mt-6 leading-relaxed md:leading-8">
              Explore a collection of AI-generated commercials, UGC campaigns,
              cinematic storytelling and brand advertisements crafted for modern
              businesses.
            </p>
          </motion.div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl overflow-hidden bg-[#181818] border border-white/10 shadow-xl flex flex-col justify-between"
              >
                {/* Video Preview */}
                <div
                  onClick={() => openProject(project)}
                  className="relative cursor-pointer overflow-hidden"
                >
                  <video
                    src={project.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-[240px] sm:h-[300px] object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center transition group-hover:bg-black/30">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300">
                      <FiPlay className="text-white ml-1" size={24} />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col items-start flex-grow justify-between">
                  <div>
                    <span className="inline-block bg-red-500/10 text-red-500 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                      {project.category}
                    </span>

                    <h3 className="text-xl sm:text-2xl text-white font-semibold">
                      {project.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => openProject(project)}
                    className="mt-6 flex items-center gap-2 text-red-500 font-medium hover:gap-4 transition-all text-sm sm:text-base"
                  >
                    View Project
                    <FiArrowUpRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#151515] rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeProject}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-red-500 transition flex items-center justify-center text-white border border-white/10"
              >
                <FiX size={20} />
              </button>

              <div className="grid lg:grid-cols-2">
                {/* Video Area */}
                <div className="bg-black flex items-center justify-center p-4 sm:p-6 min-h-[250px] max-h-[50vh] lg:max-h-none">
                  <video
                    src={selectedProject.video}
                    controls
                    autoPlay
                    playsInline
                    className={
                      selectedProject.portrait
                        ? "h-[45vh] lg:h-[65vh] w-auto max-w-full rounded-xl object-contain"
                        : "w-full max-h-[45vh] lg:max-h-[65vh] rounded-xl object-contain"
                    }
                  />
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-red-500/10 text-red-500 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                      {selectedProject.category}
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                      {selectedProject.title}
                    </h2>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed sm:leading-7 mb-6">
                      This project showcases Emmanuel's expertise in AI-powered
                      video production, cinematic storytelling, commercial
                      advertising, and high-converting content designed for brands,
                      businesses, and social media campaigns.
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-6 sm:mb-8">
                      <div className="bg-[#1D1D1D] rounded-xl sm:rounded-2xl p-4 sm:p-5">
                        <h4 className="text-red-500 text-xs sm:text-sm font-semibold mb-1">
                          Category
                        </h4>
                        <p className="text-gray-300 text-sm sm:text-base">
                          {selectedProject.category}
                        </p>
                      </div>

                      <div className="bg-[#1D1D1D] rounded-xl sm:rounded-2xl p-4 sm:p-5">
                        <h4 className="text-red-500 text-xs sm:text-sm font-semibold mb-1">
                          Created With
                        </h4>
                        <p className="text-gray-300 text-sm sm:text-base">
                          AI Tools
                        </p>  
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={closeProject}
                    className="w-full sm:w-auto self-start px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-red-500 hover:bg-red-600 transition text-white font-semibold text-sm sm:text-base text-center"
                  >
                    Close Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Work;