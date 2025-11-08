import React from 'react'

import Navbar from '../sections/Navbar'
import HeroSection from '../PortfolioSections/Hero'
import PortfolioSection from '../PortfolioSections/PortfolioSection'
import ContactUs from '../sections/Contact'
import Footer from "../sections/Footer"

const PortfolioPage = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <PortfolioSection />
    <ContactUs />
    <Footer />
    </>
  )
}

export default PortfolioPage