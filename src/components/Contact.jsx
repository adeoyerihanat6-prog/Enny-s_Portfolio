import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiExternalLink,
} from "react-icons/fi";

import {
  FaWhatsapp,
  FaDiscord,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const services = [
  "AI Commercial",
  "AI UGC Video",
  "Product Ad",
  "Brand Storytelling",
  "Social Media Content",
];

function Contact() {
  const [selected, setSelected] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_7tci6o9",
        "template_hpajmc8",
        {
          from_name: form.name,
          from_email: form.email,
          service: selected,
          message: form.message,
        },
         "ftrvy5-rxatM1-C1H"
      )
      .then(() => {
        alert("🎉 Thanks! Your message has been sent successfully.");

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setSelected("");
      })
      .catch((error) => {
       console.error(error);
});
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0D0D0D] py-20 md:py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-red-500 text-sm font-semibold">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Let's Create Something Amazing.
          </h2>

          <p className="text-gray-400 leading-8 mt-6">
            Have a project in mind? Whether it's an AI commercial,
            product advertisement or cinematic brand story,
            let's bring your vision to life.
          </p>

       

          <div className="space-y-6 mt-10">

            <div className="flex items-center gap-4">
              <FiMail className="text-red-500 text-2xl" />

              <div>
                <h4 className="text-white font-semibold">
                  Email
                </h4>

               <a href="mailto:yemaren.007@gmail.com" className="text-gray-400 hover:text-red-500 transition">
                  yemaren.007@gmail.com
              </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiMapPin className="text-red-500 text-2xl" />

              <div>
                <h4 className="text-white font-semibold">
                  Location
                </h4>

                <p className="text-gray-400">
                  Available Worldwide
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiClock className="text-red-500 text-2xl" />

              <div>
                <h4 className="text-white font-semibold">
                  Response Time
                </h4>

                <p className="text-gray-400">
                  Usually within 24 Hours
                </p>
              </div>
            </div>

          </div>


<div className="mt-12">

  <h3 className="text-white text-xl font-semibold mb-6">
    Find Me Online
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

    <a
      href="https://www.upwork.com/freelancers/~01aba3635630cac128"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
    >
      <div>
        <h4 className="text-white font-semibold">
          Upwork
        </h4>

        <p className="text-gray-400 text-sm">
          Hire me on Upwork
        </p>
      </div>

      <FiExternalLink className="text-red-500 group-hover:translate-x-1 transition" />
    </a>

    <a
      href="https://www.fiverr.com/pe/rEWkBgD"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
    >
      <div>
        <h4 className="text-white font-semibold">
          Fiverr
        </h4>

        <p className="text-gray-400 text-sm">
          View my Fiverr profile
        </p>
      </div>

      <FiExternalLink className="text-red-500 group-hover:translate-x-1 transition" />
    </a>

    <a
      href="https://wa.me/2347048431804"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
    >
      <div className="flex items-center gap-3">

        <FaWhatsapp className="text-green-500 text-2xl" />

        <div>

          <h4 className="text-white font-semibold">
            WhatsApp
          </h4>

          <p className="text-gray-400 text-sm">
            Quick response
          </p>

        </div>

      </div>

      <FiExternalLink className="text-red-500 group-hover:translate-x-1 transition" />
    </a>

   <div
  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
>
  <div className="flex items-center gap-3">
    <FaDiscord className="text-indigo-400 text-2xl" />

    <div>
      <h4 className="text-white font-semibold">
        Discord
      </h4>

      <p className="text-gray-400 text-sm">
        Username: enitan_07_01581
      </p>
    </div>
  </div>
</div>

    <a
      href="https://x.com/YemarenL22903"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
    >
      <div className="flex items-center gap-3">

        <FaXTwitter className="text-white text-xl" />

        <div>

          <h4 className="text-white font-semibold">
            X (Twitter)
          </h4>

          <p className="text-gray-400 text-sm">
            Latest updates
          </p>

        </div>

      </div>

      <FiExternalLink className="text-red-500 group-hover:translate-x-1 transition" />
    </a>

    <a
      href="https://www.tiktok.com/@ennymarley6"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
    >
      <div className="flex items-center gap-3">

        <FaTiktok className="text-white text-xl" />

        <div>

          <h4 className="text-white font-semibold">
            TikTok
          </h4>

          <p className="text-gray-400 text-sm">
            Watch my latest videos
          </p>

        </div>

      </div>

      <FiExternalLink className="text-red-500 group-hover:translate-x-1 transition" />
    </a>

  </div>

</div>
        </motion.div>

        {/* RIGHT */}

        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-4 text-white mb-5 outline-none focus:border-red-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-4 text-white mb-8 outline-none focus:border-red-500"
          />

          <h3 className="text-white mb-4 font-semibold">
            What do you need?
          </h3>

          <div className="flex flex-wrap gap-3 mb-8">

            {services.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => setSelected(service)}
                className={`px-4 py-3 rounded-full transition ${
                  selected === service
                    ? "bg-red-500 text-white"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:border-red-500"
                }`}
              >
                {service}
              </button>
            ))}

          </div>

          <textarea
            rows="6"
            name="message"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-4 text-white resize-none outline-none focus:border-red-500"
          />

          <button
            type="submit"
            className="w-full mt-8 bg-red-500 hover:bg-red-600 transition py-4 rounded-full text-white font-semibold flex justify-center items-center gap-3"
          >
            Send Message

            <FiSend />
          </button>

        </motion.form>

      </div>
    </section>
  );
}

export default Contact;