import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate()
  
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] mt-[60px] px-6 sm:px-10 md:px-20 bg-gradient-to-b from-[#1a1a1a] to-[#000000] overflow-hidden">
      {/* Soft Overlay for Depth */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="title">
            <motion.h1
              className="gold mb-6 text-4xl sm:text-5xl md:text-6xl leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              OUR PORTFOLIO
            </motion.h1>

          </div>


          <motion.p
            className="heading text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 mx-auto md:mx-0 offwhite max-w-xl"
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
            onClick={() => navigate("/contact")}
            className="mt-3 bg-[#F42F05] offwhite px-6 py-3 rounded-lg shadow-md heading font-bold text-lg sm:text-xl transition-transform duration-300 hover:scale-105"
          >
            Let's Talk
          </motion.button>
        </div>

        {/* Right: Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <img
            src="/imagery/pexels-fauxels-3184454.jpg"
            alt="Portfolio showcase"
            className="rounded-2xl w-full sm:w-4/5 md:w-full max-w-[500px] object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
