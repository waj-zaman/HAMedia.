import React from "react";
import { Check, Globe, Brain } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#F5EBD1] to-[#f8f5ec] flex justify-center">
      <div className="w-[1300px] py-20 px-6 md:px-16 text-gray-900">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="body text-sm text-amber-600 font-medium tracking-wide uppercase">
            Our Services
          </p>
          <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Explore Our Services — Designed to Work and Scale
          </h2>
        </div>

        {/* CARDS CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto w-4/5">
          {/* DIGITAL PRESENCE CARD */}
          <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200 hover:border-amber-500/30 hover:shadow-[0_8px_30px_rgb(255,193,7,0.15)] transform hover:scale-[1.05] transition-all duration-500 ease-out">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-amber-100 rounded-full">
                <Globe className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="heading text-2xl font-semibold text-gray-900">
                Digital Presence
              </h3>
            </div>

            <p className="body text-gray-700 mb-6 text-md leading-relaxed">
              We engineer high-performance websites that elevate your brand and
              drive measurable growth.
            </p>

            <ul className="heading space-y-3 text-gray-700 text-md">
              {[
                "Performance Tuning for Fast Loading",
                "Innovative Website Design",
                "Scalable Architecture",
                "Custom Development",
                "Responsive Design",
                "SEO Optimization",
              ].map((item, index) => (
                <li key={index} className="body flex items-start gap-3 group">
                  <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:text-gray-900 transition-colors duration-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTENT STRATEGY CARD */}
          <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200 hover:border-amber-500/30 hover:shadow-[0_8px_30px_rgb(255,193,7,0.15)] transform hover:scale-[1.05] transition-all duration-500 ease-out">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-amber-100 rounded-full">
                <Brain className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="heading text-2xl font-semibold text-gray-900">
                Content Strategy
              </h3>
            </div>

            <p className="body text-gray-700 mb-6 text-md leading-relaxed">
              We produce brand-focused imagery that enhances credibility and
              connects with your audience.
            </p>

            <ul className="heading space-y-3 text-gray-700 text-md">
              {[
                "Day-to-Night Photography Coverage",
                "Custom Edits for Brand Consistency",
                "Premium Execution Standards",
                "Extended Session Coverage",
                "On-Location Photography",
                "Brand-Aligned Visuals",
              ].map((item, index) => (
                <li key={index} className="body flex items-start gap-3 group">
                  <Check className="text-green-600 mt-1 w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:text-gray-900 transition-colors duration-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
