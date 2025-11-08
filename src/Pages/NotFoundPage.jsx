import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />

      {/* Not Found Section */}
      <section className="bg-[#FBF4E3] min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">

        {/* 🌿 Animated SVG Illustration */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 300"
            className="w-56 md:w-72 drop-shadow-md"
          >
            {/* Soft Background Circle */}
            <circle cx="200" cy="150" r="90" fill="#E5C78A" opacity="0.3" />

            {/* Main 404 Text */}
            <text
              x="50%"
              y="52%"
              textAnchor="middle"
              fontSize="70"
              fontWeight="800"
              fill="#3b2f2f"
              fontFamily="'BBH Sans Hegarty', sans-serif"
            >
              404
            </text>

            {/* Decorative Line */}
            <line
              x1="100"
              y1="200"
              x2="300"
              y2="200"
              stroke="#C6AA76"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Floating Dot Accent */}
            <circle cx="320" cy="130" r="10" fill="#D1B272" />
            <circle cx="80" cy="120" r="6" fill="#C6AA76" />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="heading text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Oops! Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="body text-gray-700 max-w-md leading-relaxed mb-8"
        >
          The page you’re looking for might have been moved, deleted, or doesn’t
          exist. But don’t worry — you can always find your way back home.
        </motion.p>

        {/* Back Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="/"
            className="bg-[#E5C78A] text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#d9b873] transition-all duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default NotFound;
