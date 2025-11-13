'use client'

import React from 'react'
import GooeyNav from '@/components/GooeyNav'
import GradientText from '@/components/GradientText'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const website = [
  {
    image: '/wnote.png',
    title: 'Notes Website',
    resource: 'TypeScript, Next.js, MongoDB',
    description:
      'The Notes Website is a modern full-stack note-taking platform built with Next.js, TypeScript, and MongoDB. It offers secure data storage, a responsive design, and smooth UI interactions for an intuitive writing experience. Users can create, edit, and manage notes easily — all within a fast and scalable web app.',
    youtube: 'https://youtu.be/mH4dUVTHbYM?si=wDCQAeVstidKOzL9',
    github: 'https://github.com/wlprojt/nnotes',
  },
  {
    image: '/wweather.png',
    title: 'Weather Website',
    resource: 'HTML, CSS, JavaScript, Weather API',
    description:
      'The Weather Website is a lightweight and responsive web app that fetches live weather data using an external Weather API. Built with pure HTML, CSS, and JavaScript, it provides real-time forecasts, temperature updates, and animated weather icons in a clean, user-friendly interface.',
    youtube: 'https://youtu.be/WM5_TK-nx5I?si=iHrsE7V8YA2gRh2I',
    github: 'https://github.com/wlprojt',
  },
  {
    image: '/wbot.png',
    title: 'Chat Bot Website',
    resource: 'TypeScript, Next.js, Gemini API',
    description:
      'The Chat Bot Website is an AI-powered conversational web app built with Next.js, TypeScript, and Google’s Gemini API. It features real-time chat responses, a minimal UI, and smooth message animations — offering users an interactive and intelligent assistant experience directly in the browser.',
    youtube: 'https://youtu.be/lRv6YGsoucs?si=rxwxmOtSeMAHdda8',
    github: 'https://github.com/wlprojt/aichat',
  },
  {
    image: '/wbackgroun.png',
    title: 'Background Website',
    resource: 'TypeScript, Next.js, React Bits',
    description:
      'The Background Website is a creative project built with Next.js and React Bits, featuring dynamic gradients and animated visuals. Designed for designers and developers, it lets users explore, preview, and generate stunning background effects to enhance modern web interfaces.',
    youtube: 'https://youtu.be/f5LxH1tdxU4?si=S6kSUn3WZjxefYiR',
    github: 'https://github.com/wlprojt/ytone',
  },
];


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
      {/* Project Grid */}
      <div className="mt-10 mb-10 grid grid-cols-1 gap-8 w-100 md:w-150 xl:w-200">
        {website.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image */}
            <div className="relative w-full h-100 md:h-150 xl:h-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title + Description */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-sm mb-2">{project.resource}</p>
              <p className="text-gray-400 text-sm mb-2">{project.description}</p>
              <div className="flex gap-4 mt-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="flex items-center gap-2">
                    <FaGithub /> GitHub
                  </Button>
                </a>
                <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="flex items-center gap-2">
                    <FaYoutube /> YouTube
                  </Button>
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </ div>
  )
}
