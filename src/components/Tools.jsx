import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiCamera,
  FiFilm,
  FiCpu,
  FiEdit,
} from "react-icons/fi";
import { LuLightbulb, LuRocket } from "react-icons/lu";

const process = [
  {
    icon: <LuLightbulb size={36} />,
    title: "Imagine",
    description:
      "Every project starts with understanding your vision, goals and audience to create a clear creative direction.",
    tools: ["Midjourney", "Higgsfield"],
  },
  {
    icon: <FiCamera size={36} />,
    title: "Generate",
    description:
      "Using advanced AI platforms, I transform ideas into cinematic visuals and high-quality video concepts.",
    tools: ["Veo 3", "Runway", "Kling AI"],
  },
  {
    icon: <FiEdit size={36} />,
    title: "Refine",
    description:
      "Every scene is professionally polished with color grading, sound design and seamless editing.",
    tools: ["Premiere Pro", "After Effects", "CapCut"],
  },
  {
    icon: <LuRocket size={36} />,
    title: "Deliver",
    description:
      "Optimized, high-quality videos ready for social media, advertising campaigns and brand growth.",
    tools: ["ElevenLabs", "4K Export", "Social Formats"],
  },
];

function Tools() {
  return (
    <section
      id="tools"
      className="relative overflow-hidden bg-[#111111] py-20 md:py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-red-600/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-red-500 text-sm font-semibold">
            My Creative Process
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            From Vision to Cinematic Reality
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Every project follows a refined workflow that combines creativity,
            artificial intelligence and professional editing to deliver premium
            visual experiences.
          </p>

          <div className="w-24 h-[2px] bg-red-500 rounded-full mx-auto mt-8"></div>
        </motion.div>

        {/* Process */}

        <div className="flex flex-col gap-8">

          {process.map((step, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
            >

              <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/20">

                {/* Glow */}

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10 grid lg:grid-cols-[90px_1fr] gap-8 items-center">

                  {/* Icon */}

                  <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:rotate-6 transition duration-500">

                    {step.icon}

                  </div>

                  {/* Content */}

                  <div>

                    <h3 className="text-3xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 mt-4 leading-8">
                      {step.description}
                    </p>

                    {/* Tools */}

                    <div className="flex flex-wrap gap-3 mt-6">

                      {step.tools.map((tool, i) => (

                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                        >
                          {tool}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

              {/* Arrow */}

              {index !== process.length - 1 && (

                <div className="flex justify-center my-6">

                  <FiArrowDown
                    className="text-red-500 animate-bounce"
                    size={28}
                  />

                </div>

              )}

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <FiFilm
            className="mx-auto text-red-500 mb-5"
            size={40}
          />

          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Creativity Meets Artificial Intelligence
          </h3>

          <p className="text-gray-400 leading-8 max-w-3xl mx-auto mt-6">
            Every frame is carefully planned, generated and refined using
            industry-leading AI tools and professional editing software to
            produce videos that inspire, engage and convert.
          </p>

          <a
            href="#contact"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 mt-10 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
          >
            Start Your Project

            <LuRocket size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Tools;