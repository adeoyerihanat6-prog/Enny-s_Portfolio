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
    cta: "Launch My Product",
  },
  {
    icon: <FiSmartphone size={34} />,
    title: "AI UGC Videos",
    description:
      "Authentic creator-style videos designed for TikTok, Instagram and Meta Ads.",
    cta: "Create My UGC Ad",
  },
  {
    icon: <FiTrendingUp size={34} />,
    title: "Social Media Ads",
    description:
      "High-performing AI ads built to stop the scroll, increase engagement and drive results.",
    cta: "Boost My Campaign",
  },
  {
    icon: <FiBriefcase size={34} />,
    title: "Brand Promos",
    description:
      "Premium promotional videos that elevate your brand identity with cinematic storytelling.",
    cta: "Promote My Brand",
  },
  {
    icon: <FiPackage size={34} />,
    title: "Product Launch Videos",
    description:
      "Launch your products with stunning AI visuals that create excitement and demand.",
    cta: "Launch My Product",
  },
  {
    icon: <FiCamera size={34} />,
    title: "Cinematic AI Visuals",
    description:
      "Creative AI-generated visuals crafted for campaigns, storytelling and unforgettable experiences.",
    cta: "Let's Create Magic",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0D0D0D] py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/10 blur-[180px] rounded-full pointer-events-none"></div>

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

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            I help brands, startups and agencies transform ideas into
            cinematic AI videos that capture attention, build trust and
            drive conversions.
          </p>

          <div className="w-24 h-[2px] bg-red-500 rounded-full mx-auto mt-8"></div>
        </motion.div>

        {/* Services Grid */}

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
              whileTap={{
                scale: 0.98,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/20"
            >
              {/* Hover Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}

              <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}

              <h3 className="relative z-10 text-2xl font-semibold text-white mt-8">
                {service.title}
              </h3>

              {/* Description */}

              <p className="relative z-10 text-gray-400 leading-7 mt-5">
                {service.description}
              </p>

              {/* CTA */}

              <a
                href="#contact"
                className="relative z-10 mt-8 inline-flex items-center gap-2 text-red-500 font-semibold transition-all duration-300 group-hover:translate-x-2"
              >
                {service.cta}

                <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
              </a>

              {/* Bottom Accent */}

              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-red-500 transition-all duration-500 group-hover:w-full"></div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <div className="w-24 h-[2px] bg-red-500 rounded-full mx-auto mb-12"></div>

          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Bring Your Vision to Life?
          </h3>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-8">
            Whether you're launching a product, promoting your brand or creating
            your next viral campaign, let's turn your ideas into cinematic AI
            videos that leave a lasting impression.
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

export default Services;