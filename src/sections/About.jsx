import React from "react";
import { Check } from "lucide-react";

const Section = () => {
  return (
    <section className="bg-[#FAF3E0] flex justify-center py-16 px-4 sm:px-6">
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 py-8 md:py-12 gap-12">
        
        {/* LEFT TEXT SECTION */}
        <div className="w-full md:w-3/5 text-center md:text-left">
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
        </div>

        {/* RIGHT GEOMETRIC BOXES */}
        <div className="w-full md:w-2/5 flex justify-center relative">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 scale-90 sm:scale-100">
            <div className="border-2 border-gray-300 rounded-lg w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 shadow-sm" />
            <div className="border-2 border-gray-300 rounded-lg w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 shadow-sm translate-y-10 sm:translate-y-16 md:translate-y-20" />
            <div className="border-2 border-gray-300 rounded-lg w-40 h-28 sm:w-60 sm:h-36 md:w-72 md:h-40 shadow-sm col-span-2 translate-x-6 sm:translate-x-12 md:translate-x-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
