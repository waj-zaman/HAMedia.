import React from 'react'

import { motion } from 'framer-motion'

import MajesticInteriors from './Interiors'
import DistinctiveExteriors from './Exteriors'

const PhotographySection = () => {
  return (
    <>
    <MajesticInteriors /> 
    <DistinctiveExteriors />

    <motion.h2
                className="heading text-base sm:text-xl md:text-2xl font-bold text-gray-800 leading-snug max-w-[800px] mx-auto text-center px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                What you see is what we truly deliver — every single time.{" "}
                <span className="text-[#FF4C1E] block">Best Quality.</span>
            </motion.h2>
    </>
  )
}

export default PhotographySection