import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ContactPage from "./Pages/ContactPage";

// Mobile floating buttons component
const MobileContactButtons = () => {
  const phoneNumber = "+919640026851"; 

  return (
    <div className="fixed bottom-15 right-5 flex flex-col gap-4 md:hidden z-50">
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 text-white"
      >
        <FaPhoneAlt size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 text-white"
      >
        <FaWhatsapp size={36} />
      </a>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* 🏠 Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* 📖 Portfolio Page */}
        <Route path="/portfolio" element={<PortfolioPage />} />

        {/* ❌ 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />

        {/* 📞 Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Mobile Floating Buttons */}
      <MobileContactButtons />
    </Router>
  );
}

export default App;
