
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiPlay, FiArrowDown } from "react-icons/fi";
import backgroundVideo from "../assets/videos/Background.mp4";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-black"
    >
      {/* Background Video */}
     <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover">

  <source src={backgroundVideo} type="video/mp4" />
</video>

      {/* Overlay */}
     <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/90" />

      {/* Red Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[180px]" />

      {/* Hero */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 pt-28 pb-20 lg:pt-0 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-center"
        >

          <p className="mb-5 uppercase tracking-[7px] text-red-500 text-sm font-semibold">
            Creating Cinematic AI Experiences
          </p>

          <h1 className="text-white font-black leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Emmanuel
          </h1>

          <h2 className="mt-6 text-red-500 font-semibold text-2xl md:text-3xl">
            AI Video Creator &
          </h2>

          <div className="mt-3 h-12">

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
              className="text-white text-xl md:text-2xl font-semibold"
            />

          </div>

          <p className="mx-auto mt-8 max-w-2xl text-gray-300 leading-8 text-lg">
            I create cinematic AI commercials, product ads and
            social content that help brands capture attention,
            build trust and drive conversions.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">

            <motion.a

              whileHover={{ scale: 1.05 }}

              whileTap={{ scale: .95 }}

              href="#work"

              className="rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600"

            >

              View My Work

            </motion.a>

            <motion.button

              whileHover={{ scale: 1.05 }}

              whileTap={{ scale: .95 }}

              className="flex items-center justify-center gap-2 rounded-full border border-red-500 bg-red-500/10 px-8 py-4 font-semibold text-white backdrop-blur-md hover:bg-red-500/20"

            >

              <FiPlay />

              Watch Showreel

            </motion.button>

            <motion.a

              whileHover={{ scale: 1.05 }}

              whileTap={{ scale: .95 }}

              href="#contact"

              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white backdrop-blur-md hover:border-red-500"

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

        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white"

      >

        <FiArrowDown size={28} />

      </motion.div>

    </section>
  );
}

export default Home;