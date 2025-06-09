'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'My Work' },
]

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center
        ${
          scrolled
            ? darkMode
              ? 'bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-md shadow-lg border border-gray-700 translate-y-2'
              : 'bg-gradient-to-r from-white/90 via-blue-50/80 to-white/90 backdrop-blur-md shadow-lg border border-blue-200 translate-y-2'
            : darkMode
            ? 'bg-transparent border-none translate-y-0'
            : 'bg-transparent border-none translate-y-0'
        }
      `}
      style={{ minHeight: '56px' }}
    >
      <div className="max-w-7xl mx-auto flex items-center w-full px-6 relative">
        {/* Logo Left */}
        <Link
          href="#top"
          className={`text-2xl font-extrabold z-50 transition-colors duration-300 ${
            darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
          }`}
        >
          Portfolio
        </Link>

        {/* Centered Nav Links */}
        <ul className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-10 z-50">
          {navLinks.map(({ href, label }) => (
            <motion.li
              key={href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="list-none"
            >
              <Link
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300
                  ${
                    darkMode
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/60'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-100'
                  }`}
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right side - Dark Mode Toggle & Contact Button */}
        <div className="hidden md:flex items-center space-x-5 ml-auto z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode
                ? 'bg-blue-600 text-yellow-300 hover:bg-blue-500'
                : 'bg-slate-700 text-blue-600 hover:slate-800'
            } shadow-md`}
          >
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link
            href="#contact"
            className="text-sm px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:from-blue-700 hover:to-blue-600 transition flex items-center gap-2 shadow-lg"
          >
            Contact <Image src={assets.arrow_icon} alt="arrow" width={12} height={12} />
          </Link>
        </div>

        {/* Mobile: Dark Mode Toggle & Menu Button */}
        <div className="flex md:hidden items-center space-x-3 ml-auto z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode
                ? 'bg-blue-600 text-yellow-300 hover:bg-blue-500'
                : 'bg-yellow-300 text-blue-600 hover:bg-yellow-400'
            } shadow-md`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className={`p-2 rounded-md transition-colors duration-300 ${
              darkMode
                ? 'text-gray-300 hover:bg-gray-800/70'
                : 'text-gray-700 hover:bg-blue-100'
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden fixed top-14 left-0 right-0 px-4 pb-4 pt-2 space-y-3 border-t backdrop-blur-lg z-40 transition-colors duration-300
              ${
                darkMode
                  ? 'bg-gray-900/95 border-gray-700 text-gray-100'
                  : 'bg-white/95 border-blue-200 text-gray-900'
              }
            `}
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block px-4 py-2 rounded-lg transition-colors duration-300
                    ${
                      darkMode
                        ? 'hover:bg-blue-800/70'
                        : 'hover:bg-blue-100 text-gray-900'
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className={`block font-semibold px-4 py-2 rounded-lg transition-colors duration-300
                  ${
                    darkMode
                      ? 'text-blue-400 hover:bg-blue-700/80'
                      : 'text-blue-600 hover:bg-blue-200'
                  }
                `}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
