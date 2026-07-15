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
      className="relative overflow-hidden bg-[#111111] py-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div onClick={() => openProject(project)}
         whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16 group cursor-pointer"
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
      <div className="w-24 h-[2px] bg-red-500 mx-auto mt-8 rounded-full"></div>

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
              className=" group relative overflow-hidden rounded-3xl bg-[#181818] border border-white/10 transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/20">

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[320px] object-cover transition duration-1000 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className=" absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                  <div className="w-16 h-16 rounded-full backdrop-blur-md bg-white/20 border border-white/20 flex items-center justify-center">

                    <FiPlay
                      size={28}
                      className="text-white ml-1"
                    />

                  </div>

                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <span className="inline-block text-sm backdrop-blur-xl border border-red-500/20 text-red-500 px-4 py-2 rounded-full mb-5">
                  {project.category}
                </span>

                <h3 className="text-2xl text-white font-semibold">
                  {project.title}
                </h3>

                <button className=" opacity-100 md:opacity-0 md:group-hover:opacity-100 mt-6 flex items-center gap-2 text-red-500 font-medium group-hover:gap-4 transition-all">
                  View Project

                  <FiArrowUpRight />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="w-24 h-[2px] bg-red-500 rounded-full mx-auto mt-20 mb-16"></div>

        {/* CTA */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-24 text-center"
>
  <h3 className="text-3xl md:text-4xl font-bold text-white">
    Have a project in mind?
  </h3>

  <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-8">
    Whether it's a product commercial, AI UGC campaign, or a cinematic brand
    story, let's create visuals that leave a lasting impression.
  </p>

  <a
    href="#contact"
    className="inline-flex items-center gap-3 mt-10 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
  >
    Start Your Project
    <FiArrowUpRight size={20} />
  </a>
</motion.div>

      </div>
    </section>
  );
}

export default Work;