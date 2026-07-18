import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import profile from "../assets/images/emma.jpeg";

const highlights = [
  "AI Commercials & Product Ads",
  "AI UGC Videos",
  "Brand Storytelling",
  "Social Media Campaigns",
  "Creative Direction",
  "Fast & Professional Delivery",
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#111111] py-20 md:py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-red-600/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-[35px]"></div>

            <img
              src={profile}
              alt="Emmanuel"
              className="relative w-[320px] sm:w-[380px] lg:w-[430px] rounded-[35px] border border-white/10 object-cover shadow-2xl"
            />

          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-red-500 text-sm font-semibold">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Turning Ideas Into
            <span className="text-red-500"> Cinematic AI Stories.</span>
          </h2>

          <p className="text-gray-400 leading-8 mt-8">
            Hi, I'm <span className="text-white font-semibold">Emmanuel</span>,
            an AI Video Creator and Commercial Director passionate about
            transforming ideas into visually stunning content. I help brands,
            startups, agencies and businesses create high-converting AI videos
            that capture attention, build trust and inspire action.
          </p>

          <p className="text-gray-400 leading-8 mt-6">
            Every project is crafted with creativity, strategy and premium
            storytelling to ensure your brand stands out in today's competitive
            digital landscape.
          </p>

          {/* Highlights */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">

            {highlights.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md"
              >
                <FiCheckCircle className="text-red-500 text-xl flex-shrink-0" />

                <span className="text-gray-300">
                  {item}
                </span>

              </div>

            ))}

          </div>

          {/* CTA */}

          <a
            href="#contact"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 mt-10 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
          >
            Let's Work Together

            <FiArrowUpRight size={20} />
          </a>

        </motion.div>
      </div>
    </section>
  ); 
}

export default About;