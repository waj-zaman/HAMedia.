import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Section = () => {
  return (
    <section className="bg-[#FAF3E0] flex justify-center py-16 px-4 sm:px-6">
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 py-8 md:py-12 gap-12">

        {/* LEFT TEXT SECTION */}
        <motion.div
          className="w-full md:w-3/5 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="body text-sm text-amber-600 font-medium">
            Know us better
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl heading font-bold text-gray-900 mb-6 leading-snug">
            Designing Presence, Performance, <br className="hidden sm:block" />
            and Possibility for all Businesses.
          </h2>

          <p className="body text-gray-700 text-base sm:text-lg mb-6">
            I started this business to give small teams the tools they need to
            grow — visually and operationally. Whether it's a clean website,
            sharp product photography, or a system that just works, I focus on
            clarity, speed, and long-term value. I care about how things look,
            but I care even more about how they work for you and your customers.
          </p>

          <p className="body text-gray-900 font-semibold mb-6">
            What we prioritize for every client
          </p>

          <ul className="space-y-2 mb-8 text-left">
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Real Results –</strong> We focus on what moves the
                needle, not just what looks good.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Trust And Clarity –</strong> We keep communication
                honest, simple and fast.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Smart Systems –</strong> We build solutions that scale
                with your business.
              </span>
            </li>
          </ul>

          <button className="heading bg-[#F42F05] offwhite px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md heading font-bold text-md sm:text-lg transform hover:scale-105 transition duration-200">
            Contact Us <span className="text-xl">➜</span>
          </button>
        </motion.div>

        {/* RIGHT GEOMETRIC BOXES */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center relative"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="grid grid-cols-2 gap-6 sm:gap-8 scale-90 sm:scale-100"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`border-2 border-gray-300 rounded-lg shadow-sm ${
                  i === 0
                    ? "w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40"
                    : i === 1
                    ? "w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 translate-y-10 sm:translate-y-16 md:translate-y-20"
                    : "w-40 h-28 sm:w-60 sm:h-36 md:w-72 md:h-40 col-span-2 translate-x-6 sm:translate-x-12 md:translate-x-20"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
