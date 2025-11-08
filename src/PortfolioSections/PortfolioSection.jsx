import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";

import WebDesign from "./WebDesign";
import PhotographySection from "./PhotographySection";

// Animation for section header
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PortfolioSection = () => {
  // 🧠 State to track which section is active
  const [activeSection, setActiveSection] = useState("web");

  return (
    <section className="relative px-6 sm:px-10 md:px-20 py-16 text-center md:text-left bg-[#fffaeb]">
      {/* Header */}
      <motion.div
        className="mb-10"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="body text-xs sm:text-sm text-yellow-700 font-semibold">
          What Sets Us Apart
        </p>
        <h2 className="heading text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          Experience the Advantages — Our Company Delivers
        </h2>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-center md:justify-start gap-3 mb-12">
        <button
          onClick={() => setActiveSection("web")}
          className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
            activeSection === "web"
              ? "bg-[#E5C78A] text-gray-900 shadow-md"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          Web Design
        </button>

        <span className="text-gray-400 font-bold select-none">|</span>

        <button
          onClick={() => setActiveSection("photo")}
          className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
            activeSection === "photo"
              ? "bg-[#E5C78A] text-gray-900 shadow-md"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          Photography
        </button>
      </div>

      {/* Conditional Rendering of Portfolio Sections */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {activeSection === "web" ? (
          // 🌐 Web Design Section
         <WebDesign />
        ) : (
          // 📸 Photography Section
          <PhotographySection />
        )}
      </motion.div>

    </section>
  );
};

export default PortfolioSection;
