import React from "react";
import { motion } from "framer-motion";

const MajesticInteriors = () => {
  const images = [
    // First 2 images (hero row)
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=60",

    // Remaining images (3x grid)
    "https://images.unsplash.com/photo-1600585154154-1c469b272d5d?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1600585154511-8e8d3b5c2a4e?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1600585154309-1e4b3b2a6b94?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1600585154353-f2a3fdf3bc7a?auto=format&fit=crop&w=900&q=60",
  ];

  return (
    <section className="=px-6 sm:px-10 md:px-20 py-16">
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
            className="rounded-xl overflow-hidden shadow-lg bg-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`Interior ${i + 1}`}
              className="w-full h-72 sm:h-80 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Remaining Rows (3-column grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.slice(2).map((src, i) => (
          <motion.div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg bg-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`Interior ${i + 3}`}
              className="w-full h-64 sm:h-72 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MajesticInteriors;
