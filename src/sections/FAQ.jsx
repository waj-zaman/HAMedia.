import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    "What is our End-to-End Process of Operation?",
    "Will the design be optimized for mobile, tablet, and desktop?",
    "Do you provide all assets once the project is done?",
    "How long does a project usually take?",
    "Do you provide updates and support after launch?",
    "What’s the pricing for a complete website?",
  ];

  return (
    <section className="bg-[#FBF4E3] py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-2xl md:text-3xl text-gray-900 mb-4 leading-snug">
            Frequently Asked <br />
            <span className="text-black font-extrabold">Questions</span>
          </h2>
          <p className="body text-gray-700 text-sm md:text-base leading-relaxed max-w-md">
            We’ve answered the most important questions upfront — so you can
            move forward with confidence, clarity, and a full understanding of
            how we work, what we deliver, and what sets us apart.
          </p>
        </motion.div>

        {/* Right Section (FAQs) */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {faqs.map((question, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md border border-gray-100 rounded-md py-3 px-4 text-left text-gray-800 text-sm md:text-base hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15 * index,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <span className="body font-medium">{index + 1}. </span>
              {question}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
