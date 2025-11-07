import React from "react";
import { Check } from "lucide-react";
import { Globe, Brain } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="bg-[#F5EBD1] flex justify-center">
      <div className="w-[1300px] py-20 px-6 md:px-16 text-gray-900">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="body text-sm text-amber-600 font-medium">
            Our Services
          </p>
          <h2 className="heading text-lg md:text-2xl font-bold">
            Explore Our Services — Designed to Work and Scale
          </h2>
        </div>
        

        {/* CARDS CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto w-4/5">
          {/* DIGITAL PRESENCE CARD */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition duration-300">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-black" />
              <h3 className="heading text-xl md:text-xl font-semibold">Digital Presence</h3>
            </div>
            <p className="body text-gray-700 mb-5 text-md">
              We engineer high-performance websites that elevate your brand and
              drive measurable growth.
            </p>

            <ul className="heading space-y-1 text-gray-700 text-md">
              <li className="body flex items-start gap-2">
                <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                Performance Tuning for Fast Loading
              </li>
              <li className="body flex items-start gap-2">
                <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                Innovative Website Design
              </li>
              <li className="body flex items-start gap-2">
                <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                Scalable Architecture
              </li>
              <li className="body flex items-start gap-2">
                <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                Custom Development
              </li>
              <li className="body flex items-start gap-2">
                <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                Responsive Design
              </li>
              <li className="body flex items-start gap-2">
                <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                SEO Optimization
              </li>
            </ul>
          </div>

          {/* CONTENT STRATEGY CARD */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition duration-300">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-black" />
              <h3 className="heading text-xl md:text-xl font-semibold">Content Strategy</h3>
            </div>
            <p className="body text-gray-700 mb-5 text-md">
              We produce brand-focused imagery that enhances credibility and
              connects with your audience.
            </p>

            <ul className="space-y-1 text-gray-700 text-md">
              <li className="flex items-start gap-2">
                <Check className="body text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                Day-to-Night Photography Coverage
              </li>
              <li className="flex items-start gap-2">
                <Check className="body text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                Custom Edits for Brand Consistency
              </li>
              <li className="flex items-start gap-2">
                <Check className="body text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                Premium Execution Standards
              </li>
              <li className="flex items-start gap-2">
                <Check className="body text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                Extended Session Coverage
              </li>
              <li className="flex items-start gap-2">
                <Check className="body text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                On-Location Photography
              </li>
              <li className="flex items-start gap-2">
                <Check className="body text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                Brand-Aligned Visuals
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
