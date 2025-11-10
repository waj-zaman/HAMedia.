import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* 📖 Portfolio Page */}
        <Route path="/portfolio" element={<PortfolioPage />} />

        {/* ❌ 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
