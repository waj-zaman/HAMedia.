import React from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";

const WebDesign = () => {
    return (
        <section className="py-16 md:py-24 px-4 text-center">

            {/* Grid of Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
                {/* Card 1 */}
                <motion.div
                    className="group relative bg-[#F8F6F3] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
                            alt="SZR Farms"
                            className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6 md:p-8 text-left">
                        <h3 className="heading text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#FF4C1E] transition-colors duration-300">
                            SZR Farms
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-[#3b5998] font-medium mb-4 hover:scale-105 transition-all duration-200">
                            <FaGlobe className="text-xl" />
                            <a
                                href="https://szrfarms.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 decoration-[#3b5998] hover:text-[#1d3a70]"
                            >
                                www.szrfarms.com
                            </a>
                        </div>
                        <p className="body text-gray-700 text-sm leading-relaxed">
                            SZR Farms is a rental farmhouse located beside Little Star High
                            School in Moinabad, Hyderabad. Guests highlight its excellent
                            accessibility, large and clean rooms, a spacious swimming pool,
                            and group-friendly amenities.
                        </p>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    className="group relative bg-[#F8F6F3] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
                            alt="Zuza Farm House"
                            className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6 md:p-8 text-left">
                        <h3 className="heading text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#FF4C1E] transition-colors duration-300">
                            Zuza Farm House
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-[#3b5998] font-medium mb-4 hover:scale-105 transition-all duration-200">
                            <FaGlobe className="text-xl" />
                            <a
                                href="https://zuzafarmhouse.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 decoration-[#3b5998] hover:text-[#1d3a70]"
                            >
                                zuzafarmhouse.netlify.app
                            </a>
                        </div>
                        <p className="body text-gray-700 text-sm leading-relaxed">
                            Zuza Farm House offers a tranquil countryside escape in Moinabad,
                            Hyderabad, with modern amenities, a private pool, and relaxing
                            green surroundings — ideal for weekend getaways and family
                            celebrations.
                        </p>
                    </div>
                </motion.div>
            </div>

            <motion.h2
                className="heading text-base sm:text-xl md:text-2xl font-bold text-gray-800 leading-snug pt-20 max-w-[800px] mx-auto text-center px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                From concept to code — every website we craft reflects{" "}
                <span className="text-[#FF4C1E]">precision</span>, reliability, and your
                brand’s true character.
            </motion.h2>


        </section>
    );
};

export default WebDesign;
