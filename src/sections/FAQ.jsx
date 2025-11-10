import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is our End-to-End Process of Operation?",
      answer:
        "Our process includes discovery, design, development, testing, and deployment — ensuring each stage aligns with your goals and delivers a high-quality result.",
    },
    {
      question: "Will the design be optimized for mobile, tablet, and desktop?",
      answer:
        "Absolutely! Every design is fully responsive, ensuring seamless performance and visuals across all devices and screen sizes.",
    },
    {
      question: "Do you provide all assets once the project is done?",
      answer:
        "Yes, upon completion, we deliver all source files, assets, and credentials — giving you complete ownership of your project.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "Typical timelines range from 2 to 6 weeks depending on complexity, number of pages, and client feedback cycles.",
    },
    {
      question: "Do you provide updates and support after launch?",
      answer:
        "Yes, we offer post-launch maintenance and support plans to keep your website updated, secure, and optimized.",
    },
    {
      question: "What’s the pricing for a complete website?",
      answer:
        "Pricing depends on the project scope, design complexity, and required features. Contact us for a personalized quote.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FBF4E3] py-16 md:py-24 px-4 md:px-6 overflow-hidden ">
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
          className="space-y-3 body"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
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
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span
                  className={`body font-medium transition-colors duration-300 ${
                    activeIndex === index ? "text-orange-600" : "text-gray-600"
                  }`}
                >
                  {index + 1}. {faq.question}
                </span>

                {/* Plus / Minus Animation */}
                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`text-xl font-semibold ${
                    activeIndex === index ? "text-orange-600" : "text-gray-600"
                  }`}
                >
                  +
                </motion.span>
              </button>

              {/* Animated Answer */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.4, ease: "easeInOut" },
                      opacity: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className="overflow-hidden"
                  >
                    <p className="body text-gray-600 mt-3 pl-5">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
