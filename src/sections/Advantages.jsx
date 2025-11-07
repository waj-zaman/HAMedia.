import React from "react";
import { FaFeatherAlt, FaBolt, FaShieldAlt } from "react-icons/fa";
import { MdAllInclusive } from "react-icons/md";

const Advantages = () => {
  return (
    <section className="bg-[#FAF2E6] py-24 pb-32 px-6 text-center">
      <p className="body text-sm text-yellow-700 font-semibold mb-2">
        What Sets Us Apart
      </p>
      <h2 className="heading text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Experience the Advantages - Our Company Delivers
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto transform">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left transform hover:scale-105 transition-all duration-200">
          <div className="flex items-start mb-3">
            <FaFeatherAlt className="text-yellow-600 text-3xl mr-5 my-auto" />
            <h3 className=" heading text-lg font-semibold text-gray-800">
              We Build Digital experiences <br /> as Unique as your Brand,
            </h3>
          </div>
          <p className="body text-gray-600 text-sm leading-relaxed">
            Innovative web design goes beyond visuals — it’s about flow,
            clarity, and identity. We craft interfaces that guide users
            effortlessly and reflect your brand with purpose.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left  transform hover:scale-105 transition-all duration-200">
          <div className="flex items-start mb-3">
            <MdAllInclusive className="text-yellow-600 text-3xl mr-5 my-auto" />
            <h3 className="heading text-lg font-semibold text-gray-800">
              The One Destination for All Your <br /> Creative & Digital Needs.
            </h3>
          </div>
          <p className="body text-gray-600 text-sm leading-relaxed">
            One team. One vision. We handle both content and design in-house,
            delivering a seamless brand experience from photography to final
            launch.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left  transform hover:scale-105 transition-all duration-200">
          <div className="flex items-start mb-3">
            <FaBolt className="text-yellow-600 text-3xl mr-5 my-auto" />
            <h3 className="heading text-lg font-semibold text-gray-800">
              Next-Gen Tools. <br /> First-Class Execution.
            </h3>
          </div>
          <p className="body text-gray-600 text-sm leading-relaxed">
            We bring the latest in web architecture and high-end visual tech
            together — so your brand gets strategy, design, and content without
            compromise.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left  transform hover:scale-105 transition-all duration-200">
          <div className="flex items-start mb-3">
            <FaShieldAlt className="text-yellow-600 text-3xl mr-5 my-auto" />
            <h3 className="heading text-lg font-semibold text-gray-800">
              Built on Trust. Driven by <br /> Your Satisfaction.
            </h3>
          </div>
          <p className="body text-gray-600 text-sm leading-relaxed">
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
