import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-3 px-6 offwhite">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="block">
          <div className="">
            <h2 className="font-bold text-2xl mt-5" style={{ fontFamily: "'BBH Sans Hegarty', sans-serif" }}>HAMedia.</h2>
            <p className="text-sm heading">Your Complete Creative and Digital Partner.</p>
          </div>
        </div>


        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="=font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li className=" transform hover:scale-110 transistion-all duration-200"><a href="#" className="hover:text-white">Home</a></li>
            <li className=" transform hover:scale-110 transistion-all duration-200"><a href="#" className="hover:text-white">About</a></li>
            <li className=" transform hover:scale-110 transistion-all duration-200"><a href="#" className="hover:text-white">Portfolio</a></li>
          </ul>
        </div>

        {/* Right Section - Services */}
        <div className="">
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="space-y-1">
            <li className=" transform hover:scale-110 transistion-all duration-200"><a href="#" className="hover:text-white">Websites</a></li>
            <li className=" transform hover:scale-110 transistion-all duration-200"><a href="#" className="hover:text-white">Photography</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mt-6 mb-3" />

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-400">
        © 2025 Highness Avenue. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
