import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "../sections/Navbar";
import ContactUs from "../sections/Contact";
import Footer from "../sections/Footer";

const ContactPage = () => {
    const form = useRef();
    const [status, setStatus] = useState("idle");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(
                "service_5bviipq", // Replace with your EmailJS Service ID
                "template_no902s8", // Replace with your Template ID
                form.current,
                "590vcYXyNlyOiqrpX" // Replace with your Public Key
            )
            .then(
                () => {
                    setStatus("success");
                    form.current.reset();
                    setTimeout(() => setStatus("idle"), 4000);
                },
                () => {
                    setStatus("error");
                    setTimeout(() => setStatus("idle"), 4000);
                }
            );
    };

    return (
        <>
            <Navbar />

            {/* 🟡 Hero Section */}
            <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] mt-[60px] px-6 sm:px-10 md:px-20 bg-gradient-to-b from-[#1a1a1a] to-[#000000] overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <div className="title">
                            <motion.h1
                                className="gold mb-6 text-4xl sm:text-5xl md:text-6xl leading-tight"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Contact Us
                            </motion.h1>
                        </div>


                        <motion.p
                            className="heading text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 mx-auto md:mx-0 offwhite max-w-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Witness how vision meets craftsmanship in the brands we’ve brought to life online.
                        </motion.p>
                    </div>

                    <motion.div
                        className="w-full md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        <img
                            src="/imagery/pexels-nietjuhart-796602.jpg"
                            alt="Portfolio showcase"
                            className="rounded-2xl w-full sm:w-4/5 md:w-full max-w-[500px] object-cover shadow-lg"
                        />
                    </motion.div>
                </div>
            </section>

            {/* 🟠 Contact Form Section */}
            <motion.section
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative text-gray-300 py-16 px-6 sm:px-10 md:px-20 bg-gradient-to-b from-[#fdf7e3] to-[#f8f0dc]"
            >
                <div className="max-w-[1200px] mx-auto p-6 sm:p-10 md:p-12 bg-[#f7e9cd] rounded-3xl shadow-2xl overflow-hidden">
                    <motion.div
                        className="flex flex-col items-center text-center pb-8 md:pb-12"
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <p className="body text-sm gold font-semibold">Text your Query</p>
                        <h2 className="heading text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                            Share Your Thoughts — We’re Listening
                        </h2>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        {/* Left Side Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="w-full md:w-1/2 flex justify-center items-center relative"
                        >
                            <motion.div
                                className="w-full h-[320px] sm:h-[380px] md:h-[420px] bg-gradient-to-br from-[#FFF6EE] to-[#FFE8D6] rounded-2xl shadow-lg flex items-center justify-center overflow-hidden relative"
                                initial={{ scale: 0.95 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                {/* SVG Abstract Lines */}
                                <svg
                                    viewBox="0 0 400 400"
                                    className="absolute w-[110%] h-[110%] opacity-70"
                                >
                                    <motion.path
                                        d="M0,200 Q200,100 400,200 T800,200"
                                        fill="transparent"
                                        stroke="#F42F05"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                                    />
                                    <motion.path
                                        d="M0,250 Q200,150 400,250 T800,250"
                                        fill="transparent"
                                        stroke="#FF8A65"
                                        strokeWidth="1.5"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                                    />
                                </svg>

                                {/* Floating Contact Symbol */}
                                <motion.div
                                    initial={{ y: 10 }}
                                    animate={{ y: -10 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                    className="flex flex-col items-center text-center z-10"
                                >
                                    <div className="w-20 h-20 rounded-full bg-[#F42F05]/10 flex items-center justify-center mb-3">
                                        <img src="/gmail (1).png" alt="Message Icon" className="w-10 h-10" />
                                    </div>
                                    <p className="heading text-lg md:text-xl font-semibold text-gray-700">
                                        Let’s build something great
                                    </p>
                                    <p className="body text-sm text-gray-500 mt-1">
                                        Send your ideas, we’ll make them real.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>



                        {/* Right Side Form */}
                        <motion.form
                            ref={form}
                            onSubmit={sendEmail}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="w-full md:w-1/2 flex flex-col gap-5"
                        >
                            <motion.input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                whileFocus={{ scale: 1.02 }}
                                className="w-full px-4 py-3 bg-white text-gray-600 placeholder-gray-500 border border-yellow-400 rounded-lg focus:outline-none focus:border-orange-600 transition-all duration-200"
                            />
                            <motion.input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                required
                                whileFocus={{ scale: 1.02 }}
                                className="w-full px-4 py-3 bg-white text-gray-600 placeholder-gray-500 border border-yellow-400 rounded-lg focus:outline-none focus:border-orange-600 transition-all duration-200"
                            />
                            <motion.textarea
                                name="message"
                                placeholder="Your Message"
                                required
                                rows={5}
                                whileFocus={{ scale: 1.02 }}
                                className="w-full px-4 py-3 bg-white text-gray-600 placeholder-gray-500 border border-yellow-400 rounded-lg focus:outline-none focus:border-orange-600 transition-all duration-200 resize-none"
                            ></motion.textarea>

                            {/* Animated Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={
                                    status === "success"
                                        ? { scale: [1, 1.1, 1], transition: { duration: 0.6 } }
                                        : {}
                                }
                                className={`mt-3 ${status === "error"
                                    ? "bg-red-500"
                                    : status === "success"
                                        ? "bg-green-500"
                                        : "bg-orange-500"
                                    } offwhite px-6 py-3 rounded-lg shadow-md heading font-bold text-lg sm:text-xl transition-transform duration-300`}
                            >
                                {status === "sending"
                                    ? "Sending..."
                                    : status === "success"
                                        ? "Sent Successfully ✅"
                                        : status === "error"
                                            ? "Failed ❌ Try Again"
                                            : "Submit"}
                            </motion.button>
                        </motion.form>
                    </div>
                </div>
            </motion.section>

            <ContactUs />
            <Footer />
        </>
    );
};

export default ContactPage;
