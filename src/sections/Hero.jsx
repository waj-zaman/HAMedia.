import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [videoSrc, setVideoSrc] = useState(
    "/videos/Untitled Design.mp4"
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Define both video versions
    const mobileVideo = "/videos/Untitled Design (1).mp4";   // 👈 replace with your mobile-optimized video
    const desktopVideo = "/videos/Untitled Design.mp4";

    const mq = window.matchMedia("(max-width: 768px)");

    const updateVideoSrc = () => {
      setVideoSrc(mq.matches ? mobileVideo : desktopVideo);
    };

    updateVideoSrc(); // Run once on mount
    mq.addEventListener("change", updateVideoSrc);

    return () => mq.removeEventListener("change", updateVideoSrc);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[75vh] mt-[50px] px-6 bg-black overflow-hidden">

      {/* 🎬 Background Video (auto selects mobile/desktop) */}
      <video
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌓 Overlay for text clarity */}
      <div className="absolute inset-0 bg-black/50"></div>

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
              HIGHNESS AVENUE <span className="block">MEDIA</span>
            </motion.h1>
          </div>

          <motion.p
            className="heading text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 mx-auto md:mx-0 offwhite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Your Complete Creative and Digital Partner
          </motion.p>

          <motion.p
            className="body text-sm sm:text-base md:text-md mb-6 sm:mb-8 mx-auto md:mx-0 offwhite"
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
            className="mt-3 bg-[#F42F05] offwhite px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md heading font-bold text-lg sm:text-xl transform hover:scale-105 transition duration-200"
            onClick={() => navigate("/contact")}
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
