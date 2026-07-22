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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <section id="work" className="bg-[#111111] py-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[6px] text-red-500 text-sm font-semibold">
              Featured Work
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Selected Projects
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
              Explore a collection of AI-generated commercials, UGC campaigns,
              cinematic storytelling and brand advertisements crafted for modern
              businesses.
            </p>

          </motion.div>

          {/* Projects */}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl overflow-hidden bg-[#181818] border border-white/10 shadow-xl"
              >

                {/* Video Preview */}

                <div
                  onClick={() => openProject(project)}
                  className="relative cursor-pointer"
                >

                  <video
                    src={project.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center transition group-hover:bg-black/30">

                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-xl">

                      <FiPlay
                        className="text-white ml-1"
                        size={28}
                      />

                    </div>

                  </div>

                </div>

                {/* Card Content */}

                <div className="p-7">

                  <span className="inline-block bg-red-500/10 text-red-500 px-4 py-2 rounded-full text-sm mb-5">

                    {project.category}

                  </span>

                  <h3 className="text-2xl text-white font-semibold">

                    {project.title}

                  </h3>

                  <button
                    onClick={() => openProject(project)}
                    className="mt-6 flex items-center gap-2 text-red-500 font-medium hover:gap-4 transition-all"
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-[#151515] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Close Button */}

              <button
                onClick={closeProject}
                className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-red-500 transition flex items-center justify-center"
              >
                <FiX size={22} className="text-white" />
              </button>

              <div className="grid lg:grid-cols-2">

                {/* Video */}

                <div className="bg-black flex items-center justify-center p-6">

                  <video
                    src={selectedProject.video}
                    controls
                    autoPlay
                    playsInline
                    className={
                      selectedProject.portrait
                        ? "h-[70vh] rounded-2xl object-contain"
                        : "w-full rounded-2xl object-cover"
                    }
                  />

                </div>

                {/* Project Details */}

                <div className="p-8 lg:p-12 flex flex-col justify-center">

                  <span className="inline-block w-fit bg-red-500/10 text-red-500 px-4 py-2 rounded-full text-sm mb-6">

                    {selectedProject.category}

                  </span>

                  <h2 className="text-4xl font-bold text-white mb-6">

                    {selectedProject.title}

                  </h2>

                  <p className="text-gray-400 leading-8 mb-8">

                    This project showcases Emmanuel's expertise in AI-powered
                    video production, cinematic storytelling, commercial
                    advertising, and high-converting content designed for brands,
                    businesses, and social media campaigns.

                  </p>

                  <div className="grid grid-cols-2 gap-5">

                    <div className="bg-[#1D1D1D] rounded-2xl p-5">

                      <h4 className="text-red-500 font-semibold mb-2">
                        Category
                      </h4>

                      <p className="text-gray-300">
                        {selectedProject.category}
                      </p>

                    </div>

                    <div className="bg-[#1D1D1D] rounded-2xl p-5">

                      <h4 className="text-red-500 font-semibold mb-2">
                        Created With
                      </h4>

                      <p className="text-gray-300">
                        AI Tools
                      </p>

                    </div>

                  </div>

                  <button
                    onClick={closeProject}
                    className="mt-10 px-8 py-4 rounded-full bg-red-500 hover:bg-red-600 transition text-white font-semibold"
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