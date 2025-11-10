import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-[#f8f0dc] py-16 md:py-24 px-4 md:px-10 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1200px]">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center pb-8 md:pb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="body text-sm gold font-semibold">
            Get in Touch
          </p>
          <h2 className="heading text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            We’re Here to Connect With You
          </h2>
        </motion.div>

        {/* Main Flex Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16">
          {/* 🗺️ Map Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/capture_20251108005313521.bmp"
              alt="Map location"
              className="w-full h-56 sm:h-64 md:h-[400px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </motion.div>

          {/* 📞 Contact Details Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left space-y-8 pt-6 md:pt-10"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Location */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 justify-center md:justify-start">
              <FaMapMarkerAlt className="text-3xl md:text-4xl gold mx-auto sm:mx-0 my-auto" />
              <div>
                <h4 className="heading font-semibold text-gray-800 text-lg md:text-xl">
                  Location
                </h4>
                <p className="body text-gray-700 leading-relaxed">
                  Akberbagh, New Malakpet, <br />
                  Hyderabad, Telangana.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 justify-center md:justify-start">
              <FaPhoneAlt className="text-2xl md:text-3xl gold mx-auto sm:mx-0 my-auto" />
              <div>
                <h4 className="heading font-semibold text-gray-800 text-lg md:text-xl">
                  Phone
                </h4>
                <p className="body text-gray-700 leading-relaxed">
                  +91 96400 26851
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 justify-center md:justify-start">
              <FaEnvelope className="text-2xl md:text-3xl gold mx-auto sm:mx-0 my-auto" />
              <div>
                <h4 className="heading font-semibold text-gray-800 text-lg md:text-xl">
                  Email
                </h4>
                <p className="body text-gray-700 leading-relaxed">
                  highnessavenue@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
