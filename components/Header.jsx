'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { assets } from '@/assets/assets'
import toast from 'react-hot-toast'

const Header = () => {
const handleResumeDownload = async () => {
  try {
    const response = await fetch('/AkshatResume.pdf'); 
    if (!response.ok) throw new Error('Download failed');

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AkshatResume.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    toast.success('Resume downloaded successfully!', {
      duration: 1000,
      position: 'top-right',
    });
  } catch (error) {
    toast.error('Failed to download resume. Please check your network.', {
      duration: 1000,
      position: 'top-right',
    });
  }
};




  return (
    <motion.section
      id="top"
      className="flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 max-w-3xl mx-auto min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
      >
        <Image
          src="/pic2.png"
          alt="Profile Image"
          width={150}
          height={150}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Heading */}
      <motion.h3
        className="flex items-center justify-center gap-2 text-2xl md:text-3xl mt-6 font-semibold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.span
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
        >
          Hi! I'm Akshat Gupta
        </motion.span>
        {assets.hand_icon && (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Image
              src={assets.hand_icon}
              alt="Hand Icon"
              width={24}
              height={24}
              className="h-auto w-auto"
            />
          </motion.div>
        )}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-600 dark:text-gray-400 text-base md:text-lg mt-4 mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        A passionate web developer with a knack for creating dynamic and responsive web applications.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <a
          href="#contact"
          className="text-sm px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:from-blue-700 hover:to-blue-600 transition flex items-center gap-2 shadow-lg"
        >
          Contact
          {assets.arrow_icon && (
            <Image
              src={assets.arrow_icon}
              alt="Arrow Icon"
              width={12}
              height={12}
              className="h-auto w-auto"
            />
          )}
        </a>

        <a
          href="/AkshatResume.pdf"
          download
          onClick={handleResumeDownload}
          className="text-sm px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-full hover:from-purple-700 hover:to-indigo-600 transition flex items-center gap-2 shadow-lg"
        >
          My Resume
          {assets.download_icon && (
            <Image
              src={assets.download_icon}
              alt="Download Icon"
              width={12}
              height={12}
              className="h-auto w-auto"
            />
          )}
        </a>
      </motion.div>

      {/* Decorative Wavy Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="w-full mt-16"
      >
        <svg
          className="w-full h-20"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,32 C480,160 960,-64 1440,64 L1440,320 L0,320 Z"
            className="text-gray-100 dark:text-gray-900"
          />
        </svg>
      </motion.div>
    </motion.section>
  )
}

export default Header
