import React from "react";
import { motion } from "framer-motion";
import { FaFeatherAlt, FaBolt, FaShieldAlt } from "react-icons/fa";
import { MdAllInclusive } from "react-icons/md";

const Advantages = () => {
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#FAF2E6] py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-center overflow-hidden">
      {/* Header */}
      <motion.div
        className="mb-10"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="body text-xs sm:text-sm text-yellow-700 font-semibold mb-2">
          What Sets Us Apart
        </p>
        <h2 className="heading text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          Experience the Advantages — Our Company Delivers
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* CARD 1 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-5 sm:p-6 text-left transform hover:scale-[1.03] md:hover:scale-105 transition-all duration-300"
          variants={cardVariants}
        >
          <div className="flex items-start mb-3">
            <motion.div variants={iconVariants}>
              <FaFeatherAlt className="text-yellow-600 text-2xl sm:text-3xl mr-4 sm:mr-5 my-auto flex-shrink-0" />
            </motion.div>
            <h3 className="heading text-base sm:text-lg font-semibold text-gray-800 leading-snug">
              We Build Digital Experiences <br className="hidden sm:block" /> as
              Unique as Your Brand
            </h3>
          </div>
          <p className="body text-gray-600 text-sm sm:text-base leading-relaxed">
            Innovative web design goes beyond visuals — it’s about flow,
            clarity, and identity. We craft interfaces that guide users
            effortlessly and reflect your brand with purpose.
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-5 sm:p-6 text-left transform hover:scale-[1.03] md:hover:scale-105 transition-all duration-300"
          variants={cardVariants}
        >
          <div className="flex items-start mb-3">
            <motion.div variants={iconVariants}>
              <MdAllInclusive className="text-yellow-600 text-2xl sm:text-3xl mr-4 sm:mr-5 my-auto flex-shrink-0" />
            </motion.div>
            <h3 className="heading text-base sm:text-lg font-semibold text-gray-800 leading-snug">
              The One Destination for All Your <br className="hidden sm:block" /> Creative & Digital Needs
            </h3>
          </div>
          <p className="body text-gray-600 text-sm sm:text-base leading-relaxed">
            One team. One vision. We handle both content and design in-house,
            delivering a seamless brand experience from photography to final
            launch.
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-5 sm:p-6 text-left transform hover:scale-[1.03] md:hover:scale-105 transition-all duration-300"
          variants={cardVariants}
        >
          <div className="flex items-start mb-3">
            <motion.div variants={iconVariants}>
              <FaBolt className="text-yellow-600 text-2xl sm:text-3xl mr-4 sm:mr-5 my-auto flex-shrink-0" />
            </motion.div>
            <h3 className="heading text-base sm:text-lg font-semibold text-gray-800 leading-snug">
              Next-Gen Tools. <br className="hidden sm:block" /> First-Class Execution.
            </h3>
          </div>
          <p className="body text-gray-600 text-sm sm:text-base leading-relaxed">
            We bring the latest in web architecture and high-end visual tech
            together — so your brand gets strategy, design, and content without
            compromise.
          </p>
        </motion.div>

        {/* CARD 4 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-5 sm:p-6 text-left transform hover:scale-[1.03] md:hover:scale-105 transition-all duration-300"
          variants={cardVariants}
        >
          <div className="flex items-start mb-3">
            <motion.div variants={iconVariants}>
              <FaShieldAlt className="text-yellow-600 text-2xl sm:text-3xl mr-4 sm:mr-5 my-auto flex-shrink-0" />
            </motion.div>
            <h3 className="heading text-base sm:text-lg font-semibold text-gray-800 leading-snug">
              Built on Trust. <br className="hidden sm:block" /> Driven by Your Satisfaction.
            </h3>
          </div>
          <p className="body text-gray-600 text-sm sm:text-base leading-relaxed">
            Your satisfaction drives everything we do. We refine every detail
            until your vision is fully realized — no compromises, no early
            handoffs.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Advantages;
  