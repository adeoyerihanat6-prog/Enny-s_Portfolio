import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaDiscord,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

import { FiExternalLink, FiArrowUp } from "react-icons/fi";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}

          <div>

            {/* Replace with logo later */}

            <h2 className="text-3xl font-black text-white">
              Emmanuel
            </h2>

            <p className="text-gray-400 leading-8 mt-5">
              Creating cinematic AI videos, product commercials,
              AI UGC content and visual stories that help brands
              capture attention and grow.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white font-semibold text-xl mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <a href="#home" className="text-gray-400 hover:text-red-500 transition">
                Home
              </a>

              <a href="#work" className="text-gray-400 hover:text-red-500 transition">
                Work
              </a>

              <a href="#services" className="text-gray-400 hover:text-red-500 transition">
                Services
              </a>

              <a href="#about" className="text-gray-400 hover:text-red-500 transition">
                About
              </a>

              <a href="#tools" className="text-gray-400 hover:text-red-500 transition">
                Creative Process
              </a>

              <a href="#testimonials" className="text-gray-400 hover:text-red-500 transition">
                Testimonials
              </a>

              <a href="#contact" className="text-gray-400 hover:text-red-500 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-white font-semibold text-xl mb-6">
              Let's Connect
            </h3>

            <div className="space-y-4">

              <a
                href="https://www.upwork.com/freelancers/~01aba3635630cac128"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-red-500 transition"
              >
                <span className="text-white">Upwork</span>

                <FiExternalLink className="text-red-500" />
              </a>

              <a
                href="https://www.fiverr.com/pe/rEWkBgD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-red-500 transition"
              >
                <span className="text-white">Fiverr</span>

                <FiExternalLink className="text-red-500" />
              </a>

              <div className="flex gap-4 pt-3">

                <a
                  href="https://wa.me/2347048431804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://x.com/YemarenL22903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="https://www.tiktok.com/@ennymarley6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition"
                >
                  <FaTiktok />
                </a>

                <div
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-default"
                  title="Discord: enitan_07_01581"
                >
                  <FaDiscord />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Emmanuel. All rights reserved.
          </p>

          <button
            onClick={scrollTop}
            className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 transition flex items-center justify-center shadow-lg shadow-red-500/30"
          >
            <FiArrowUp className="text-white text-xl" />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default motion(Footer);