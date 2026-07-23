import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiPlay, FiArrowDown, FiX } from "react-icons/fi";

import backgroundVideo from "../assets/videos/Background.mp4";

function Home() {
  const [showShowreel, setShowShowreel] = useState(false);

  // Prevent scrolling when modal is open & listen for keydown events
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setShowShowreel(false);
      }
    };

    if (showShowreel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "unset";
    };
  }, [showShowreel]);

  return (
    <>
      <section
        id="home"
        className="relative min-h-[100svh] overflow-hidden bg-black flex items-center justify-center"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/90" />

        {/* Red Glow */}
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] sm:h-[700px] sm:w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px] sm:blur-[180px] pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center justify-center px-4 sm:px-6 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center"
          >
            <p className="mb-4 sm:mb-5 uppercase tracking-[4px] sm:tracking-[7px] text-red-500 text-xs sm:text-sm font-semibold">
              Creating Cinematic AI Experiences
            </p>

            <h1 className="text-white font-black leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              Emmanuel
            </h1>

            <h2 className="mt-4 sm:mt-6 text-red-500 font-semibold text-xl sm:text-2xl md:text-3xl">
              AI Video Creator &
            </h2>

            {/* TypeAnimation Container with fixed responsive height to prevent layout shift */}
            <div className="mt-2 sm:mt-3 h-10 sm:h-12 flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  "Video Marketing Specialist",
                  2000,
                  "AI UGC Creator",
                  2000,
                  "Visual Storyteller",
                  2000,
                  "Creative Director",
                  2000,
                  "Brand Filmmaker",
                  2000,
                ]}
                speed={45}
                repeat={Infinity}
                className="text-white text-lg sm:text-xl md:text-2xl font-semibold"
              />
            </div>

            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-gray-300 leading-relaxed sm:leading-8 text-base sm:text-lg">
              I create cinematic AI commercials, product ads and social
              content that help brands capture attention, build trust and drive
              conversions.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#work"
                className="w-full sm:w-auto text-center rounded-full bg-red-500 px-8 py-3.5 sm:py-4 font-semibold text-white hover:bg-red-600 transition shadow-lg shadow-red-500/20"
              >
                View My Work
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowShowreel(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-red-500/50 bg-red-500/10 px-8 py-3.5 sm:py-4 font-semibold text-white backdrop-blur-md hover:bg-red-500/20 transition"
              >
                <FiPlay size={18} />
                Watch Showreel
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="w-full sm:w-auto text-center rounded-full border border-white/20 px-8 py-3.5 sm:py-4 font-semibold text-white backdrop-blur-md hover:border-red-500 transition"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition"
        >
          <a href="#work" aria-label="Scroll down">
            <FiArrowDown size={26} />
          </a>
        </motion.div>
      </section>

      {/* SHOWREEL MODAL */}
      <AnimatePresence>
        {showShowreel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowShowreel(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#111111] shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowShowreel(false)}
                aria-label="Close showreel modal"
                className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-red-500 transition flex items-center justify-center border border-white/10 text-white"
              >
                <FiX size={20} />
              </button>

              {/* Video */}
              <div className="bg-black flex items-center justify-center">
                <video
                  src={backgroundVideo}
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[80vh] sm:max-h-[85vh] object-contain bg-black"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;