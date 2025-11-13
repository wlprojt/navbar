'use client'

import React from 'react'
import GooeyNav from '@/components/GooeyNav'
import GradientText from '@/components/GradientText'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Page() {

  return (
    <div
      className="mt-20 flex flex-col items-center"
    >
      {/* Title Animation */}
      <motion.h1
        className="text-center mx-2 font-bold text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      >
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={8}
          showBorder={false}
          className="custom-class"
        >
          Website Projects
        </GradientText>
      </motion.h1>

      {/* Subtitle Animation */}
      <motion.p
        className="text-center text-gray-400 mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
      >
        Discover the projects that showcase my passion for innovation
      </motion.p>
    </ div>
  )
}
