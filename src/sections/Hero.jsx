import React from "react";
import { motion } from "framer-motion";

import video from "../../public/videos/Screen Recording 2025-11-07 124148.mp4"

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[75vh] mt-[70px] px-6 bg-black overflow-hidden">
      
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌓 Overlay for text clarity */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🌟 Hero Content */}
      <div className="relative z-10 w-[1300px] px-24">
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
            className="heading text-lg md:text-2xl mb-8 mx-auto md:mx-0 offwhite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Your Complete Creative and Digital Partner
          </motion.p>

          <motion.p
            className="body text-lg md:text-md mb-8 mx-auto md:mx-0 offwhite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            “We craft websites, visuals, and digital{" "}
            <span className="block">stories that help businesses grow.”</span>
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 bg-[#F42F05] offwhite px-6 py-3 rounded-lg shadow-md heading font-bold text-xl transform hover:scale-105 transition duration-200"
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
