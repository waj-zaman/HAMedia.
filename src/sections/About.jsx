import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const navigate = useNavigate();

  // Subtle, safe animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="bg-[#FAF3E0] flex justify-center py-16 px-4 sm:px-6 overflow-x-hidden"
    >
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 py-8 md:py-12 gap-12">

        {/* LEFT TEXT SECTION */}
        <motion.div
          className="w-full md:w-3/5 text-center md:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="body text-sm text-amber-600 font-medium">Know us better</p>

          <h2 className="text-xl sm:text-2xl md:text-3xl heading font-bold text-gray-900 mb-6 leading-snug">
            Designing Presence, Performance, <br className="hidden sm:block" />
            and Possibility for all Businesses.
          </h2>

          <p className="body text-gray-700 text-base sm:text-lg mb-6">
            I started this business to give small teams the tools they need to grow —
            visually and operationally. Whether it's a clean website, sharp product
            photography, or a system that just works, I focus on clarity, speed, and
            long-term value. I care about how things look, but I care even more about
            how they work for you and your customers.
          </p>

          <p className="body text-gray-900 font-semibold mb-6">
            What we prioritize for every client
          </p>

          <ul className="space-y-2 mb-8 text-left">
            <li className="flex items-center gap-3">
              <Check className="text-orange-600 mt-1 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Real Results –</strong> We focus on what moves the needle.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-orange-600 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Trust And Clarity –</strong> We keep communication simple.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-orange-600 mt-1 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Smart Systems –</strong> We build things that scale.
              </span>
            </li>
          </ul>

          <button
            className="heading bg-[#F42F05] offwhite px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md heading font-bold text-md sm:text-lg transform hover:scale-105 transition duration-200"
            onClick={() => navigate("/contact")}
          >
            Contact Us <span className="text-xl">➜</span>
          </button>
        </motion.div>

        {/* RIGHT IMAGE GRID */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">

            {/* IMAGE 1 */}
            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-2xl shadow-md border border-gray-200 h-32 sm:h-40 md:h-44"
            >
              <img
                src="/imagery/pexels-vladbagacian-3987066.jpg"
                alt="Web Developer at Work"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* IMAGE 2 */}
            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-2xl shadow-md border border-gray-200 h-32 sm:h-40 md:h-44 translate-y-4"
            >
              <img
                src="/imagery/pexels-olia-danilevich-4974922.jpg"
                alt="Photographer Editing"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* IMAGE 3 — WIDE */}
            <motion.div
              variants={fadeUp}
              className="col-span-2 overflow-hidden rounded-2xl shadow-md border border-gray-200 h-40 sm:h-52 md:h-56 mt-4"
            >
              <img
                src="/imagery/pexels-fauxels-3183197.jpg"
                alt="Creative Team Collaboration"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section;
