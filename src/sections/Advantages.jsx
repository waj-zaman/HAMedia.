import React from "react";
import { FaFeatherAlt, FaBolt, FaShieldAlt } from "react-icons/fa";
import { MdAllInclusive } from "react-icons/md";

const Advantages = () => {
  return (
    <section className="bg-[#FAF2E6] py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-center">
      {/* Header */}
      <p className="body text-xs sm:text-sm text-yellow-700 font-semibold mb-2">
        What Sets Us Apart
      </p>
      <h2 className="heading text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-10 leading-snug">
        Experience the Advantages — Our Company Delivers
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-5 sm:p-6 text-left transform hover:scale-[1.03] md:hover:scale-105 transition-all duration-300">
          <div className="flex items-start mb-3">
            <FaFeatherAlt className="text-yellow-600 text-2xl sm:text-3xl mr-4 sm:mr-5 my-auto flex-shrink-0" />
            <h3 className="heading text-base sm:text-lg font-semibold text-gray-800 leading-snug">
              We Build Digital Experiences <br className="hidden sm:block" /> as
              Unique as Your Brand
            </h3>
          </div>
          <p className="body text-gray-600 text-sm sm:text-base leading-relaxed">
            Innovative web design goes beyond visuals — it’s about flow,
            clarity, and identity. We craft interfaces that guide users
            effortlessly and reflect your brand with purpose.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-5 sm:p-6 text-left transform hover:scale-[1.03] md:hover:scale-105 transition-all duration-300">
          <div className="flex items-start mb-3">
            <MdAllInclusive className="text-yellow-600 text-2xl sm:text-3xl mr-4 sm:mr-5 my-auto flex-shrink-0" />
            <h3 className="heading text-base sm:text-lg font-semibold text-gray-800 leading-snug">
              The One Destination for All Your <br className="hidden sm:block" /> Creative & Digital Needs
            </h3>
          </div>
          <p className="body text-gray-600 text-sm sm:text-base leading-relaxed">
            One team. One vision. We handle both content and design in-house,
            delivering a seamless brand experience from photography to final
            launch.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-5 sm:p-6 text-left transform hover:scale-[1.03] md:hover:scale-105 transition-all duration-300">
          <div className="flex items-start mb-3">
            <FaBolt className="text-yellow-600 text-2xl sm:text-3xl mr-4 sm:mr-5 my-auto flex-shrink-0" />
            <h3 className="heading text-base sm:text-lg font-semibold text-gray-800 leading-snug">
              Next-Gen Tools. <br className="hidden sm:block" /> First-Class Execution.
            </h3>
          </div>
          <p className="body text-gray-600 text-sm sm:text-base leading-relaxed">
            We bring the latest in web architecture and high-end visual tech
            together — so your brand gets strategy, design, and content without
            compromise.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-5 sm:p-6 text-left transform hover:scale-[1.03] md:hover:scale-105 transition-all duration-300">
          <div className="flex items-start mb-3">
            <FaShieldAlt className="text-yellow-600 text-2xl sm:text-3xl mr-4 sm:mr-5 my-auto flex-shrink-0" />
            <h3 className="heading text-base sm:text-lg font-semibold text-gray-800 leading-snug">
              Built on Trust. <br className="hidden sm:block" /> Driven by Your Satisfaction.
            </h3>
          </div>
          <p className="body text-gray-600 text-sm sm:text-base leading-relaxed">
            Your satisfaction drives everything we do. We refine every detail
            until your vision is fully realized — no compromises, no early
            handoffs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
