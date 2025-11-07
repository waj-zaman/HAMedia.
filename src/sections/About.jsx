import React from "react";
import { Check } from "lucide-react";

const Section = () => {
  return (
    <section className="bg-[#FAF3E0] flex justify-center py-16">

      <div className=" w-[1300px] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-12">
        {/* LEFT TEXT SECTION */}
        <div className="md:w-3/5 text-left">
          <p className="body text-sm text-amber-600 font-medium">
            Know us better
          </p>

          <h2 className="text-1xl heading md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
            Designing Presence, Performance, <br />
            and Possibility for all Businesses.
          </h2>

          <p className="body text-gray-700 text-base mb-6">
            I started this business to give small teams the tools they need to
            grow — visually and operationally. Whether it's a clean website, sharp
            product photography, or a system that just works, I focus on clarity,
            speed, and long-term value. I care about how things look, but I care
            even more about how they work for you and your customers.
          </p>

          <p className="body text-gray-900 font-semibold mb-6">
            What we prioritize for every client
          </p>

          <ul className="space-y-1 mb-8 ">
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Real Results –</strong> We focus on what moves the needle,
                not just what looks good.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Trust And Clarity –</strong> We keep communication honest,
                simple and fast.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Smart Systems –</strong> We build solutions that scale with
                your business.
              </span>
            </li>
          </ul>

          <button className="heading bg-[#F42F05] offwhite px-4 py-2 rounded-lg shadow-md heading font-bold text-md transition duration-200">
            Contact Us <span className="text-xl">➜</span>
          </button>
        </div>

        {/* RIGHT GEOMETRIC BOXES */}
        <div className="md:w-2/5 flex justify-center relative">
          <div className="grid grid-cols-2 gap-8">
            <div className="border-2 border-gray-300 rounded-lg w-40 h-40 shadow-sm" />
            <div className="border-2 border-gray-300 rounded-lg w-40 h-40 shadow-sm translate-y-20" />
            <div className="border-2 border-gray-300 rounded-lg w-40 h-40 shadow-sm col-span-2 translate-x-20" />
          </div>
        </div>


      </div>
    </section>
  );
};

export default Section;
