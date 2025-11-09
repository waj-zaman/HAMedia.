import React from "react";
import { motion } from "framer-motion";

const MajesticInteriors = () => {
  const images = [
    // First 2 images (hero row)
    "/assets/interiors/_GGN6196.avif",
    "/assets/interiors/_GGN6171.avif",

    // Remaining images (3x grid)
    "/assets/interiors/_GGN6176.avif",
    "/assets/interiors/_GGN6533.avif",
    "/assets/interiors/_GGN6185.avif",
    "/assets/interiors/_GGN6516.avif",
    "/assets/interiors/_GGN6241.avif",
    "/assets/interiors/_GGN6501.avif",
  ];

  return (
    <section className="px-6 sm:px-10 md:px-20 py-8">
      {/* Title */}
      <motion.h2
        className="heading text-2xl sm:text-3xl font-semibold text-gray-900 mb-10 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Majestic Interiors
      </motion.h2>

      {/* First Row (2 big images) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {images.slice(0, 2).map((src, i) => (
          <motion.div
            key={i}
            className="rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-out"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`Interior ${i + 1}`}
              className="w-full h-72 sm:h-80 object-cover transform hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </motion.div>
        ))}
      </div>

      {/* Remaining Rows (3-column grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.slice(2).map((src, i) => (
          <motion.div
            key={i}
            className="rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-out"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`Interior ${i + 3}`}
              className="w-full h-64 sm:h-72 object-cover transform hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MajesticInteriors;
