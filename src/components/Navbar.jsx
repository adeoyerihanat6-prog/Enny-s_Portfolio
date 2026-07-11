import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/images/enny.jpeg"; 

const navLinks = [
  
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Tools", href: "#tools"},
  { name: "Testimonials", href: "#testimonials"},
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/10 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          {/* Logo */}
          <a href="#">
            <img
              src={logo}
              alt="Enny Production"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#EF4444] transition duration-300"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-[#EF4444] text-white px-6 py-2 rounded-full hover:bg-[#DC2626] transition duration-300 shadow-lg hover:shadow-red-500/40"
            >
              Hire Me
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            <HiOutlineMenuAlt3 />
          </button>

        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#0D0D0D] border-l border-white/10 z-50 transform transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >

        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">

          <img
            src={logo}
            alt="Enny Production"
            className="h-10 w-auto"
          />

          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl"
          >
            <IoClose />
          </button>

        </div>

        {/* Links */}
        <div className="flex flex-col mt-10 px-8 gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-lg hover:text-[#EF4444] transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 bg-[#EF4444] text-white text-center py-3 rounded-full hover:bg-[#DC2626] transition duration-300"
          >
            Hire Me
          </a>

        </div>

      </div>
    </>
  );
};

export default Navbar;