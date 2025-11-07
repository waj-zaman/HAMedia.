import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import map from "../../public/capture_20251108005313521.bmp"

const ContactUs = () => {
  return (
    <section className="bg-[#f8f0dc] py-16 px-6 flex justify-center pb-32">
      <div className="w-full max-w-[1200px]">
        <div className="flex flex-col items-center pb-10">
          <p className="body text-sm text-yellow-700 font-semibold">
            Get in Touch
          </p>
          <h2 className="heading text-2xl md:text-3xl font-bold text-gray-800 mb-10">
            We’re Here to Connect With You
          </h2>
        </div>


        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* 🗺️ Map Section (Left) */}
          <div className="w-full md:w-1/2">
            <img
              src={map}
              alt="Map location"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>


          {/* 📞 Contact Details Section (Right) */}
          <div className="w-full md:w-1/2 text-left space-y-8 pt-10">
            <div className="flex items-start gap-5">
              <FaMapMarkerAlt className="text-4xl gold my-auto" />
              <div>
                <h4 className="heading font-semibold text-gray-800 text-xl">Location</h4>
                <p className="body text-gray-700 leading-relaxed">
                  Akberbagh, New Malakpet, <br />
                  Hyderabad, Telangana.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <FaPhoneAlt className="text-3xl gold my-auto" />
              <div>
                <h4 className="heading font-semibold text-gray-800 text-xl">Phone</h4>
                <p className="body text-gray-700 leading-relaxed">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <FaEnvelope className="text-3xl gold my-auto" />
              <div>
                <h4 className="heading font-semibold text-gray-800 text-xl">Email</h4>
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
