import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[75vh] mt-[70px] px-6 bg-black">

      <div className="w-[1300px] px-24">
        <div className="w-full text-center md:text-left">
          <div className="title">
            <motion.h1
              className="gold mb-6 text-6xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              HIGHNESS AVENUE <span className="block">MEDIA</span>
            </motion.h1>
          </div>

          <motion.p
            className="heading text-lg md:text-2xl mb-8  mx-auto md:mx-0 offwhite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Your Complete Creative and Digital Partner
          </motion.p>

          <motion.p
            className="body text-lg md:text-md mb-8  mx-auto md:mx-0 offwhite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            “We craft websites, visuals, and digital <span className="block">stories that help businesses grow.”</span>
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3 bg-[#F42F05] offwhite px-6 py-3 rounded-lg shadow-md heading font-bold text-xl transition duration-200"
          >
            Let's Talk
          </motion.button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
