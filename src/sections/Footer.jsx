import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-3 px-6 sm:px-10 offwhite">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 text-center md:text-left">
        {/* Left Section */}
        <div className="w-full md:w-1/3">
          <h2
            className="font-bold text-2xl mt-5"
            style={{ fontFamily: "'BBH Sans Hegarty', sans-serif" }}
          >
            HAMedia.
          </h2>
          <p className="text-sm heading mt-2">
            Your Complete Creative and Digital Partner.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="w-full md:w-1/3">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="transform hover:scale-110 transition-all duration-200">
              <a href="#" className="hover:text-white">Home</a>
            </li>
            <li className="transform hover:scale-110 transition-all duration-200">
              <a href="#" className="hover:text-white">About</a>
            </li>
            <li className="transform hover:scale-110 transition-all duration-200">
              <a href="#" className="hover:text-white">Portfolio</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Services */}
        <div className="w-full md:w-1/3">
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li className="transform hover:scale-110 transition-all duration-200">
              <a href="#" className="hover:text-white">Websites</a>
            </li>
            <li className="transform hover:scale-110 transition-all duration-200">
              <a href="#" className="hover:text-white">Photography</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mt-8 mb-3" />

      {/* Bottom Text */}
      <div className="text-center text-xs sm:text-sm text-gray-400">
        © 2025 Highness Avenue. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
