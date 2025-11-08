import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[50vh] mt-[50px] px-6 bg-gradient-to-b from-[#1a1a1a] to-[#000000] overflow-hidden">
      
      {/* 🌓 Optional soft overlay for depth */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🌟 Hero Content */}
      <div className="relative z-10 w-full max-w-[1300px] px-6 sm:px-10 md:px-24 text-center md:text-left">
        <div className="w-full">
          <div className="title">
            <motion.h1
              className="gold mb-6 text-4xl sm:text-5xl md:text-6xl leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Portfolio
            </motion.h1>
          </div>

          <motion.p
            className="heading text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 mx-auto md:mx-0 offwhite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Witness how vision meets craftsmanship in the brands we’ve brought to life online.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-3 bg-[#F42F05] offwhite px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md heading font-bold text-lg sm:text-xl transform hover:scale-105 transition duration-200"
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
