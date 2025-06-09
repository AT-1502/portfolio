'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const projects = [
{
  title: 'Task Management App',
  description:
    'A full-stack task management application with features like authentication, task categorization, and seamless user experience. Includes intuitive task creation, editing, and filtering options. Built with responsive design and smooth animations using Tailwind CSS for enhanced usability across devices.',
  tech: ['React', 'Tailwind', 'Express', 'MongoDB'],
  github: 'https://github.com/AT-1502/Task-management',
  image: '/work01.png',
}
,
  {
    "title": "Chat Application",
    "description": "A dynamic real-time chat application with instant messaging, a sleek UI, theme toggle, and live message delivery powered by Socket.IO. Features include real-time notifications using React Hot Toast, ensuring users receive instant alerts for new messages and updates.",
    "tech": ["React", "Express", "MongoDB", "Socket.IO", "React Hot Toast"],
    "github": "https://github.com/AT-1502/Chat_application",
    "image": "/work02.jpg"
},

  {
    title: 'AI Chatbot',
    description:
      'An AI-powered chatbot using Groq API and NLP to provide intelligent responses to user queries in real time.',
    tech: ['Next.js', 'Groq API', 'Tailwind CSS'],
    github: 'https://github.com/AT-1502/Ai-chatbot',
    image: '/work03.png',
  },
  {
    title: 'Password Manager',
    description:
      'A secure app to manage passwords with encrypted storage, bcrypt hashing, and an intuitive UI.',
    tech: ['React', 'MongoDB', 'bcrypt'],
    github: 'https://github.com/AT-1502/passManager',
    image: '/work04.png',
  },
]

const MyWork = ({ darkMode }) => {
  return (
    <section id="work" className="py-16 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
        style={{
          background:
            'linear-gradient(90deg, #4f46e5, #9333ea, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        My Work
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
            viewport={{ once: true }}
            className={`rounded-xl overflow-hidden border
              transition-shadow duration-300 ${
                darkMode
                  ? 'bg-gray-900 border-gray-700 shadow-md hover:shadow-lg text-gray-100'
                  : 'bg-white border-gray-200 shadow-sm hover:shadow-md text-gray-900'
              }
            `}
          >
            <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0} // prioritize first image load
                />
              </motion.div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2" style={{
                background:
                  'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {project.title}
              </h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.25 }}
                className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm leading-relaxed`}
              >
                {project.description}
              </motion.p>

      <ul className="flex flex-wrap gap-2 mt-4">
  {project.tech.map((tech, i) => (
    <motion.li
      key={i}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`text-xs px-3 py-1 rounded-full cursor-default select-none
        ${
          darkMode
            ? 'bg-gray-800 border border-indigo-600' // dark background + border
            : 'bg-gray-100 border border-indigo-400' // light background + border
        }
        bg-clip-text text-transparent
        bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
      `}
      style={{ WebkitBackgroundClip: 'text' }} // for better browser support
    >
      {tech}
    </motion.li>
  ))}
</ul>

              <div className="flex mt-6">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, color: '#7c3aed' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    darkMode
                      ? 'text-gray-100 hover:text-indigo-400'
                      : 'text-indigo-700 hover:text-indigo-600'
                  }`}
                >
                  <Github size={18} /> Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default MyWork
