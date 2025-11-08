import React from "react";
import { motion } from "framer-motion";
import { Check, Globe, Brain } from "lucide-react";

const ServicesSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="bg-gradient-to-b from-[#F5EBD1] to-[#f8f5ec] flex justify-center py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="w-full max-w-[1300px] text-gray-900">
        
        {/* HEADER */}
        <motion.div
          className="text-center mb-12 sm:mb-16 px-2 sm:px-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="body text-xs sm:text-sm text-amber-600 font-medium tracking-wide uppercase">
            Our Services
          </p>
          <h2 className="heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
            Explore Our Services — Designed to Work and Scale
          </h2>
        </motion.div>

        {/* CARDS CONTAINER */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto w-full sm:w-11/12 md:w-4/5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* DIGITAL PRESENCE CARD */}
          <motion.div
            className="relative bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200 hover:border-amber-500/30 hover:shadow-[0_8px_30px_rgb(255,193,7,0.15)] transform hover:scale-[1.03] md:hover:scale-[1.05] transition-all duration-500 ease-out"
            variants={cardVariants}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center md:justify-start gap-3 mb-6 text-center sm:text-left">
              <div className="p-3 bg-amber-100 rounded-full flex justify-center items-center">
                <Globe className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="heading text-xl sm:text-2xl font-semibold text-gray-900">
                Digital Presence
              </h3>
            </div>

            <p className="body text-gray-700 mb-6 text-sm sm:text-base leading-relaxed text-center sm:text-left">
              We engineer high-performance websites that elevate your brand and
              drive measurable growth.
            </p>

            <motion.ul
              className="heading space-y-3 text-gray-700 text-sm sm:text-md"
              variants={containerVariants}
            >
              {[
                "Performance Tuning for Fast Loading",
                "Innovative Website Design",
                "Scalable Architecture",
                "Custom Development",
                "Responsive Design",
                "SEO Optimization",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="body flex items-start gap-3 group transition-all duration-200"
                  variants={listItemVariants}
                >
                  <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:text-gray-900 transition-colors duration-200">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* CONTENT STRATEGY CARD */}
          <motion.div
            className="relative bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200 hover:border-amber-500/30 hover:shadow-[0_8px_30px_rgb(255,193,7,0.15)] transform hover:scale-[1.03] md:hover:scale-[1.05] transition-all duration-500 ease-out"
            variants={cardVariants}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center md:justify-start gap-3 mb-6 text-center sm:text-left">
              <div className="p-3 bg-amber-100 rounded-full flex justify-center items-center">
                <Brain className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="heading text-xl sm:text-2xl font-semibold text-gray-900">
                Content Strategy
              </h3>
            </div>

            <p className="body text-gray-700 mb-6 text-sm sm:text-base leading-relaxed text-center sm:text-left">
              We produce brand-focused imagery that enhances credibility and
              connects with your audience.
            </p>

            <motion.ul
              className="heading space-y-3 text-gray-700 text-sm sm:text-md"
              variants={containerVariants}
            >
              {[
                "Day-to-Night Photography Coverage",
                "Custom Edits for Brand Consistency",
                "Premium Execution Standards",
                "Extended Session Coverage",
                "On-Location Photography",
                "Brand-Aligned Visuals",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="body flex items-start gap-3 group transition-all duration-200"
                  variants={listItemVariants}
                >
                  <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:text-gray-900 transition-colors duration-200">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
