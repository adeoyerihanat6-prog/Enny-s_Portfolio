import profile from "../assets/images/emma.jpeg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-[#0D0D0D]"></div>

      {/* <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
  <source src={heroVideo} type="video/mp4" />
</video> */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-center gap-16">

        {/* LEFT */}
        <motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 2.0 }}
  className="flex-1 text-center lg:text-left"
>

          <p className="uppercase tracking-[6px] text-[#EF4444] text-sm font-semibold mb-4">
            Creating Cinematic AI Experiences
          </p>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-3">
             Hi, I'm
          </h2>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Emmanuel
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mt-5 text-[#EF4444]">
            AI Video Creator &
          </h2>

          
         <h2 className="text-2xl md:text-4xl font-semibold text-white mt-2">
  <TypeAnimation sequence={[ "Commercial Director", 2000, "Visual Storyteller", 2000,
      "AI UGC Creator", 2000, "Creative Director", 2000, "Brand Filmmaker", 2000,]} speed={45} repeat={Infinity}/>
</h2>

          <p className="text-gray-400 text-lg leading-8 max-w-xl mt-8">
            I create cinematic AI videos, AI UGC ads, product commercials and
            social media content that helps brands capture attention, increase
            engagement and drive conversions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">

            <a
              href="#work"
              className="bg-[#EF4444] hover:bg-[#DC2626] transition duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-red-500/30"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-white/20 hover:border-[#EF4444] hover:bg-[#EF4444]/10 transition duration-300 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm"
            >
              Let's Talk
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.0 }}
  className="flex-1 flex justify-center"
>

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-[35px] bg-[#EF4444]/20 blur-3xl"></div>

            {/* Image */}
            <motion.img
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  src={profile}
  alt="Emmanuel"
  className="relative w-[320px] sm:w-[380px] lg:w-[450px] rounded-[35px] border border-white/10 shadow-2xl object-cover"
/>

          </div>

        </motion.div>

          <button
  onClick={() => {
    document.getElementById("work")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
>
  <FiChevronDown className="text-4xl text-[#EF4444] scroll-indicator" />

  <p className="text-xs uppercase tracking-[5px] text-gray-300 mt-2">
    Scroll to explore
  </p>
</button>

      </div>

    


    </section>
  );
}

export default Home;