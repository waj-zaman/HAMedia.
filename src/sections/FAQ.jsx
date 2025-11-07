import React from "react";

const FAQ = () => {
  const faqs = [
    "What is our End-to-End Process of Operation?",
    "Will the design be optimized for mobile, tablet, and desktop?",
    "Do you provide all assets once the project is done?",
    "How long does a project usually take?",
    "Do you provide updates and support after launch?",
    "What’s the pricing for a complete website?",
  ];

  return (
    <section className="bg-[#FBF4E3] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
        {/* Left Section */}
        <div className="text-left">
          <h2 className="heading text-2xl md:text-3xl text-gray-900 mb-4">
            Frequently Asked <br /> 
            <span className="text-black font-extrabold">Questions</span>
          </h2> 
          <p className="body text-gray-700 text-sm leading-relaxed max-w-md">
            We’ve answered the most important questions upfront — so you can
            move forward with confidence, clarity, and a full understanding of
            how we work, what we deliver, and what sets us apart.
          </p>
        </div>

        {/* Right Section (FAQs) */}
        <div className="space-y-2">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-100 rounded-md py-3 px-4 text-left text-gray-800 text-sm hover:shadow-xl hover:scale-110 transition-all duration-200"
            >
              <span className="body font-medium">{index + 1}. </span>
              {question}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
