import React, { useState } from "react";
import { motion } from "framer-motion";
import WebDesign from "./WebDesign";
import PhotographySection from "./PhotographySection";

// Safe fade animation (no Y-translation → prevents layout shift on mobile)
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const PortfolioSection = () => {
    const [activeSection, setActiveSection] = useState("web");

    return (
        <section className="relative px-6 sm:px-10 md:px-20 py-16 text-center md:text-left bg-[#fffaeb] overflow-x-hidden">

            {/* Header */}
            <motion.div
                className="mb-10 text-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <p className="body text-xs sm:text-sm gold font-semibold">
                    Every detail crafted by us — except the client’s touch
                </p>

                <h2 className="heading text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                    Websites that turned visions into distinctive brand identities.
                </h2>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-start gap-3 my-8 overflow-x-hidden">
                <button
                    onClick={() => setActiveSection("web")}
                    className={`px-5 py-2.5 transition-all heading text-xl duration-200 
                    ${activeSection === "web" ? "font-bold text-[#F42F05]" : "text-gray-600"}`}
                >
                    Web Design
                </button>

                <div className="bg-black w-1 h-10 rounded-2xl"></div>

                <button
                    onClick={() => setActiveSection("photo")}
                    className={`px-5 py-2.5 transition-all heading text-xl duration-200 
                    ${activeSection === "photo" ? "font-bold text-[#F42F05]" : "text-gray-600"}`}
                >
                    Photography
                </button>
            </div>

            {/* Section Content — No vertical animation (no whitespace bug) */}
            <motion.div
                key={activeSection}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="overflow-x-hidden"
            >
                {activeSection === "web" ? <WebDesign /> : <PhotographySection />}
            </motion.div>

        </section>
    );
};

export default PortfolioSection;
