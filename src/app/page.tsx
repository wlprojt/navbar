'use client'

import AutoSlider from '@/components/AutoSlider'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-32 pb-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Building <span className="text-blue-500">Web</span>,{' '}
          <span className="text-purple-500">Android</span> &{' '}
          <span className="text-green-500">iOS</span> Experiences That Shine ✨
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-8">
          I design and develop high-performance apps and websites that help
          businesses grow and users fall in love with your brand.
        </p>

        <div className="flex justify-center lg:justify-start gap-4">
          <Link
            href="#contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Let’s Work Together 🚀
          </Link>
          <Link
            href="#projects"
            className="px-6 py-3 border border-gray-400 hover:border-white text-gray-200 hover:text-white rounded-full transition-all duration-300"
          >
            View My Work
          </Link>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex-1 mb-10 lg:mb-0 flex justify-center"
      >
        <div className="relative">
          <AutoSlider />
        </div>
      </motion.div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-950 to-black opacity-90" />
    </section>
  )
}
