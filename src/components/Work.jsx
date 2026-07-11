import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";

import work1 from "../assets/images/work1.png";
import work2 from "../assets/images/work2.png";
import work3 from "../assets/images/work3.png";
import work4 from "../assets/images/work4.png";

const projects = [
  {
    title: "Luxury Perfume Campaign",
    category: "Product Commercial",
    image: work1,
  },
  {
    title: "Fashion Brand Commercial",
    category: "Fashion",
    image: work2,
  },
  {
    title: "AI UGC Advertisement",
    category: "UGC",
    image: work3,
  },
  {
    title: "Tech Product Launch",
    category: "Commercial",
    image: work4,
  },
];

function Work() {
  return (
    <section
      id="work"
      className="bg-[#111111] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
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

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            A collection of AI-powered commercials, product advertisements and
            cinematic storytelling crafted to help brands stand out.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl bg-[#181818] border border-white/10"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">

                    <FiPlay
                      size={28}
                      className="text-white ml-1"
                    />

                  </div>

                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <span className="inline-block text-sm bg-red-500/10 text-red-500 px-4 py-2 rounded-full mb-5">
                  {project.category}
                </span>

                <h3 className="text-2xl text-white font-semibold">
                  {project.title}
                </h3>

                <button className="mt-6 flex items-center gap-2 text-red-500 font-medium group-hover:gap-4 transition-all">
                  View Project

                  <FiArrowUpRight />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Button */}

        <div className="flex justify-center mt-20">

          <button className="px-8 py-4 rounded-full border border-red-500 text-white hover:bg-red-500 transition">
            Explore More
          </button>

        </div>

      </div>
    </section>
  );
}

export default Work;