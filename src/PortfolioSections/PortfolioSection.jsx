import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";

import WebDesign from "./WebDesign";
import PhotographySection from "./PhotographySection";

// Animation for section header
const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const PortfolioSection = () => {
    // 🧠 State to track which section is active
    const [activeSection, setActiveSection] = useState("web");

    return (
        <section className="relative px-6 sm:px-10 md:px-20 py-16 text-center md:text-left bg-[#fffaeb]">
            <div className="flex flex-col items-center">

                {/* Header */}
                <motion.div
                    className="mb-10 text-center"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <p className="body text-xs sm:text-sm text-yellow-700 font-semibold">
                        Every detail crafted by us — except the client’s touch
                    </p>
                    <h2 className="heading text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                        Websites that turned visions into distinctive brand identities.
                    </h2>
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex justify-center md:justify-start gap-3 my-8">
                    <div>
                        <button
                            onClick={() => setActiveSection("web")}
                            className={`px-5 py-2.5 rounded-full= transition-all heading text-xl duration-300 ${activeSection === "web"
                                ? "font-bold text-[#F42F05]"
                                : "text-gray-600"
                                }`}
                        >
                            Web Design
                        </button>
                    </div>


                    <div className="bg-black w-1 h-10 rounded-2xl"></div>

                    <div>
                        <button
                            onClick={() => setActiveSection("photo")}
                            className={`px-5 py-2.5 rounded-full transition-all heading text-xl duration-300 ${activeSection === "photo"
                                ? "font-bold text-[#F42F05]"
                                : "text-gray-600"
                                }`}
                        >
                            Photography
                        </button>
                    </div>
                </div>

            </div>

            {/* Conditional Rendering of Portfolio Sections */}
            <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {activeSection === "web" ? (
                    // 🌐 Web Design Section
                    <WebDesign />
                ) : (
                    // 📸 Photography Section
                    <PhotographySection />
                )}
            </motion.div>

        </section>
    );
};

export default PortfolioSection;
