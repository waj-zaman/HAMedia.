import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-[#f8f0dc] py-16 md:py-24 px-4 md:px-10 flex justify-center">
      <div className="w-full max-w-[1200px]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center pb-8 md:pb-12">
          <p className="body text-sm text-yellow-700 font-semibold">
            Get in Touch
          </p>
          <h2 className="heading text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            We’re Here to Connect With You
          </h2>
        </div>

        {/* Main Flex Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16">
          {/* 🗺️ Map Section */}
          <div className="w-full md:w-1/2">
            <img
              src="/capture_20251108005313521.bmp"
              alt="Map location"
              className="w-full h-56 sm:h-64 md:h-[400px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* 📞 Contact Details Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-8 pt-6 md:pt-10">
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
                <p className="body text-gray-700 leading-relaxed">+91 98765 43210</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
