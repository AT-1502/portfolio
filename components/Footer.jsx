'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-10 px-6 transition-colors duration-500
        border-t shadow-md rounded-t-xl
        ${darkMode
          ? 'bg-[#121827] border-gray-700 text-gray-200 shadow-indigo-900/50'
          : 'bg-white border-gray-200 text-gray-800 shadow-gray-300/50'}
      `}
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Animated intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-lg font-medium"
        >
          Crafted with care by{' '}
          <motion.span
            className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-semibold"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Akshat
          </motion.span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-sm text-gray-600 dark:text-gray-400"
        >
          Full-stack Developer • Clean Code • Seamless UI • Modern Web
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex justify-center space-x-6"
        >
          <motion.a
            href="https://github.com/AT-1502"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-transform"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <Github size={22} strokeWidth={1.8} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/akshat-gupta458"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-transform"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <Linkedin size={22} strokeWidth={1.8} />
          </motion.a>

          <motion.a
            href="mailto:akshat1361a@gmail.com"
            className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-transform"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Email"
          >
            <Mail size={22} strokeWidth={1.8} />
          </motion.a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-xs text-gray-400 dark:text-gray-500"
        >
          © {new Date().getFullYear()} Akshat. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
