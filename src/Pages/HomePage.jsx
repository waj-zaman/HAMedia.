import React from 'react'

// Sections
import Navbar from "../sections/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Services from "../sections/Services.jsx";
import Advantages from "../sections/Advantages.jsx";
import Portfolio from "../sections/Portolio.jsx";
import FAQ from "../sections/FAQ.jsx";
import Reviews from "../sections/Reviews.jsx";
import Contact from "../sections/Contact.jsx";
import Footer from "../sections/Footer.jsx";


const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Portfolio />
        <FAQ />
        <Reviews />
        <Contact />
        <Footer />
    </div>
  )
}

export default HomePage