import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "E-commerce Brand",
    review:
      "Emmanuel completely transformed our product launch. The AI commercial looked cinematic, premium and helped increase engagement across all our platforms.",
  },
  {
    name: "Michael Brown",
    company: "Marketing Agency",
    review:
      "Fast communication, incredible creativity and outstanding quality. The final video exceeded every expectation and impressed our client.",
  },
  {
    name: "Daniel Wilson",
    company: "Startup Founder",
    review:
      "Working with Emmanuel was effortless. He understood our vision immediately and delivered a commercial that looked like a high-budget production.",
  },
];

function Testimonial() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0D0D0D] py-20 md:py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-red-600/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-red-500 text-sm font-semibold">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Trusted By Creative Brands
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Here's what clients have to say about working with me and the
            results we've achieved together.
          </p>

          <div className="w-24 h-[2px] bg-red-500 mx-auto rounded-full mt-8"></div>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              whileTap={{
                scale: .98,
              }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/20"
            >

              {/* Hover Glow */}

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Stars */}

              <div className="relative z-10 flex gap-1 mb-6">

                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="text-red-500 fill-red-500"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="relative z-10 text-gray-300 leading-8 italic">
                "{item.review}"
              </p>

              {/* Divider */}

              <div className="w-full h-px bg-white/10 my-8"></div>

              {/* Client */}

              <div className="relative z-10 flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white text-xl font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {item.company}
                  </p>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl text-white font-semibold max-w-3xl mx-auto leading-relaxed">
            "Great videos don't just look amazing...
            <span className="text-red-500"> they tell stories that convert.</span>"
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonial;