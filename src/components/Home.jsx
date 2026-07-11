
// import profile from "../assets/images/emma.jpeg";
// import { TypeAnimation } from "react-type-animation";
// import { motion, useReducedMotion } from "framer-motion";

// function Home() {
//   const reduceMotion = useReducedMotion();

//   const leftVariants = {
//     initial: { opacity: 0, x: -40 },
//     animate: { opacity: 1, x: 0 },
//   };
//   const rightVariants = {
//     initial: { opacity: 0, x: 40 },
//     animate: { opacity: 1, x: 0 },
//   };

//   return (
//     <section
//       id="home"
//       aria-label="Home"
//       className="relative min-h-screen bg-[#0D0D0D] overflow-hidden"
//     >
//       {/* Background (keeps space for future video) */}
//       <div className="absolute inset-0 bg-[#0D0D0D] -z-10" />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/90 -z-5" />

//       <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 py-16">
//         {/* LEFT */}
//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={leftVariants}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="w-full lg:w-1/2 text-center lg:text-left"
//           aria-hidden={false}
//         >
//           <p className="uppercase tracking-[5px] text-[#EF4444] text-xs sm:text-sm font-semibold mb-3">
//             Creating Cinematic AI Experiences
//           </p>

//           <h2 className="text-lg sm:text-xl text-gray-300 mb-1">Hi, I'm</h2>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
//             Emmanuel
//           </h1>

//           <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-[#EF4444]">
//             AI Video Creator &
//           </h2>

//           <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mt-2 min-h-[3.25rem]">
//             <TypeAnimation
//               sequence={[
//                 "Commercial Director",
//                 2000,
//                 "Visual Storyteller",
//                 2000,
//                 "AI UGC Creator",
//                 2000,
//                 "Creative Director",
//                 2000,
//                 "Brand Filmmaker",
//                 2000,
//               ]}
//               speed={45}
//               repeat={Infinity}
//               cursor={true}
//             />
//           </h3>

//           <p className="text-gray-400 text-base sm:text-lg leading-7 max-w-xl mt-6 mx-auto lg:mx-0">
//             I create cinematic AI videos, AI UGC ads, product commercials and
//             social media content that helps brands capture attention, increase
//             engagement and drive conversions.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
//             <a
//               href="#work"
//               className="inline-block bg-[#EF4444] hover:bg-[#DC2626] transition duration-300 text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-red-500/30 text-center"
//             >
//               View My Work
//             </a>

//             <a
//               href="#contact"
//               className="inline-block border border-white/20 hover:border-[#EF4444] hover:bg-[#EF4444]/10 transition duration-300 text-white px-6 py-3 rounded-full font-semibold backdrop-blur-sm text-center"
//             >
//               Let's Talk
//             </a>
//           </div>
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={rightVariants}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="w-full lg:w-1/2 flex justify-center lg:justify-end"
//         >
//           <div className="relative flex items-center justify-center">
//             {/* Glow */}
//             <div className="absolute rounded-[28px] bg-[#EF4444]/20 blur-3xl w-[340px] h-[220px] sm:w-[420px] sm:h-[260px] lg:w-[520px] lg:h-[320px] -z-0" />

//             {/* Image */}
//             <motion.img
//               animate={
//                 reduceMotion
//                   ? {}
//                   : {
//                       y: [0, -10, 0],
//                     }
//               }
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               src={profile}
//               alt="Portrait of Emmanuel"
//               className="relative w-[260px] sm:w-[340px] md:w-[400px] lg:w-[480px] rounded-[28px] border border-white/10 shadow-2xl object-cover"
//               style={{ objectPosition: "center" }}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Home;

// import heroVideo from "../assets/video/hero.mp4"; // add your video here
// import heroPoster from "../assets/images/hero-poster.jpg"; // poster/fallback
// import profile from "../assets/images/emma.jpeg";
// import { TypeAnimation } from "react-type-animation";
// import { motion, useReducedMotion } from "framer-motion";

// function Home() {
//   const reduceMotion = useReducedMotion();

//   const leftVars = { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } };
//   const rightVars = { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } };

//   return (
//     <section
//       id="home"
//       aria-label="Home"
//       className="relative min-h-screen bg-[#0D0D0D] overflow-hidden"
//     >
//       {/* Background video with poster & accessible fallback */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover -z-20"
//         src={heroVideo}
//         poster={heroPoster}
//         autoPlay
//         muted
//         loop
//         playsInline
//         aria-hidden="true"
//       />
//       {/* Poster fallback for browsers that block autoplay: use an <img> behind overlay */}
//       <img
//         src={heroPoster}
//         alt=""
//         aria-hidden="true"
//         className="absolute inset-0 w-full h-full object-cover -z-30"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/90 -z-10" />

//       <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 py-16">
//         {/* LEFT */}
//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={leftVars}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="w-full lg:w-1/2 text-center lg:text-left"
//         >
//           <p className="uppercase tracking-[5px] text-primary text-xs sm:text-sm font-semibold mb-3">
//             Creating Cinematic AI Experiences
//           </p>

//           <h2 className="text-lg sm:text-xl text-gray-300 mb-1">Hi, I'm</h2>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
//             Emmanuel
//           </h1>

//           <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-primary">
//             AI Video Creator &
//           </h2>

//           <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mt-2 min-h-[3.25rem]">
//             <TypeAnimation
//               sequence={[
//                 "Commercial Director", 1800,
//                 "Visual Storyteller", 1800,
//                 "AI UGC Creator", 1600,
//                 "Creative Director", 1600,
//                 "Brand Filmmaker", 1800,
//                 // add or remove roles here
//               ]}
//               speed={45}
//               repeat={Infinity}
//               cursor={true}
//             />
//           </h3>

//           <p className="text-gray-400 text-base sm:text-lg leading-7 max-w-xl mt-6 mx-auto lg:mx-0">
//             I create cinematic AI videos, AI UGC ads, product commercials and
//             social media content that helps brands capture attention, increase
//             engagement and drive conversions.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
//             <a
//               href="#work"
//               className="inline-block bg-primary hover:bg-primary-dark transition duration-300 text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-primary/30 text-center"
//             >
//               View My Work
//             </a>

//             <a
//               href="#contact"
//               className="inline-block border border-white/20 hover:border-primary hover:bg-primary/10 transition duration-300 text-white px-6 py-3 rounded-full font-semibold backdrop-blur-sm text-center"
//             >
//               Let's Talk
//             </a>
//           </div>
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={rightVars}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="w-full lg:w-1/2 flex justify-center lg:justify-end"
//         >
//           <div className="relative flex items-center justify-center">
//             {/* Glow (uses token-based radii/size) */}
//             <div className="absolute rounded-card bg-primary/20 blur-3xl w-glow-sm h-glow-sm sm:w-glow-md sm:h-glow-md lg:w-glow-lg lg:h-glow-lg -z-0" />

//             <motion.img
//               animate={reduceMotion ? {} : { y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               src={profile}
//               alt="Portrait of Emmanuel"
//               className="relative w-img-xs sm:w-img-sm md:w-img-md lg:w-img-lg rounded-card border border-white/10 shadow-2xl object-cover"
//               style={{ objectPosition: "center" }}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Home;


// import heroVideo from "../assets/video/hero.mp4";
import heroPoster from "../assets/images/poster.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiPlay, FiArrowDown } from "react-icons/fi";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-black"
    >
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

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
                "Commercial Director",
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