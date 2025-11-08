import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md border-b border-[#1b1b1b]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          style={{ fontFamily: "'BBH Sans Hegarty', sans-serif" }}
          className="offwhite text-lg sm:text-xl"
        >
          HAMedia.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#FAF3E0] heading transition-all duration-200 hover:text-[#D4AF37] text-sm lg:text-base"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            className="ml-4 px-4 py-2 bg-[#D4AF37] text-black font-medium rounded-lg hover:bg-[#E0C35A] transition-all duration-200 text-sm lg:text-base"
          >
            Let’s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 hover:text-[#D4AF37]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0E0E0E] border-t border-[#1b1b1b] w-full"
          >
            <div className="flex flex-col items-center gap-4 py-6 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-[#D4AF37] transition-colors duration-200 text-lg w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/contact"
                className="mt-2 px-6 py-2 bg-[#D4AF37] text-black font-medium rounded-lg hover:bg-[#E0C35A] transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Let’s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
