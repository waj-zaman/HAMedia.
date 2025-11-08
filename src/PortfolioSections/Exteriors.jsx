import React from "react";
import { motion } from "framer-motion";

const MajesticExteriors = () => {
  const images = [
    // First 2 images (hero row)
    "https://images.unsplash.com/photo-1600585154206-3e3b3b18c1c4?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1600585153930-7e8a79cded17?auto=format&fit=crop&w=900&q=60",

    // Remaining images (3x grid)
    "https://images.unsplash.com/photo-1600607689624-93a8ab80923d?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1600585153907-f1c91e7f3a42?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1600585154380-6f53f5f8b6aa?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1600585154275-2a8c88b79f79?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1600585154171-8cbb2c9a0c61?auto=format&fit=crop&w=900&q=60",
  ];

  return (
    <section className="px-6 sm:px-10 md:px-20 py-16">
      {/* Title */}
      <motion.h2
        className="heading text-2xl sm:text-3xl font-semibold text-gray-900 mb-10 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Majestic Exteriors
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
              alt={`Exterior ${i + 1}`}
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
              alt={`Exterior ${i + 3}`}
              className="w-full h-64 sm:h-72 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MajesticExteriors;
