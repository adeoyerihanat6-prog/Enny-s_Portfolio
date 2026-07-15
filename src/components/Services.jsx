import { motion } from "framer-motion";
import {
  FiFilm,
  FiSmartphone,
  FiTrendingUp,
  FiBriefcase,
  FiPackage,
  FiCamera,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    icon: <FiFilm size={34} />,
    title: "AI Commercials",
    description:
      "Cinematic AI commercials crafted to showcase your products and increase conversions.",
  },
  {
    icon: <FiSmartphone size={34} />,
    title: "AI UGC Videos",
    description:
      "Authentic user-generated style videos built for TikTok, Instagram and Meta Ads.",
  },
  {
    icon: <FiTrendingUp size={34} />,
    title: "Social Media Ads",
    description:
      "High-performing ad creatives designed to stop the scroll and drive engagement.",
  },
  {
    icon: <FiBriefcase size={34} />,
    title: "Brand Promos",
    description:
      "Premium promotional videos that elevate your brand identity and storytelling.",
  },
  {
    icon: <FiPackage size={34} />,
    title: "Product Launch Videos",
    description:
      "Launch your products with stunning AI visuals that create excitement and buzz.",
  },
  {
    icon: <FiCamera size={34} />,
    title: "Cinematic AI Visuals",
    description:
      "Creative AI-generated visuals for brands, campaigns and unforgettable stories.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0D0D0D] py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-red-500 text-sm font-semibold">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            What I Can Create For Your Brand
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            I help brands, startups and agencies transform ideas into cinematic
            AI videos that capture attention, build trust and drive results.
          </p>

          <div className="w-24 h-[2px] bg-red-500 rounded-full mx-auto mt-8"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icon */}
              <div className="relative z-10 text-red-500 transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-semibold text-white mt-8">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-400 mt-5 leading-7">
                {service.description}
              </p>

              {/* Learn More */}
              <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-red-500 font-medium transition-all duration-300 group-hover:translate-x-2">
                Learn More
                <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;