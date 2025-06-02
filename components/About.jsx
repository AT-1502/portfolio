'use client'
import React from 'react'
import Image from 'next/image'
import { infoList, toolsData } from '@/assets/assets'
import { motion, useScroll, useTransform } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
}

const About = () => {
  const { scrollY } = useScroll()
  const planeX = useTransform(scrollY, [0, 1000], ['-10%', '110%'])

  return (
    <div id="about" className="relative overflow-hidden -mt-16 transition-colors duration-500">
      <motion.div
        className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-gray-700 dark:text-gray-300 transition-colors duration-500"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Header Section */}
        <motion.div variants={fadeUp} className="text-center mb-14">
          <h4 className="text-sm uppercase tracking-widest text-indigo-500 dark:text-indigo-400 transition-colors duration-500">
            Introduction
          </h4>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-300 mt-3 transition-colors duration-500">
            About Me
          </h1>
        </motion.div>

        {/* Main Section */}
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="shrink-0"
          >
            <Image
              src="/pic1.png"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full border-4 border-indigo-300 dark:border-indigo-600 shadow-xl"
            />
          </motion.div>

          <div className="flex-1 space-y-10">
            <motion.p
              variants={fadeUp}
              className="text-base leading-8 text-gray-600 dark:text-gray-400 max-w-2xl transition-colors duration-500"
            >
              Hello! I'm a <span className="font-semibold text-indigo-600 dark:text-indigo-400">passionate web developer</span> who loves crafting engaging, modern, and interactive websites. My goal is to make
              beautiful web applications using HTML, CSS, JavaScript, frameworks like React ,Next.js and backend with nodejs.
            </motion.p>

            {/* Info List */}
            <motion.ul variants={container} className="space-y-6">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                  key={index}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/70 dark:bg-[#1f1f1f] shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition duration-300"
                >
                  <Image
                    src={icon}
                    alt={title}
                    width={36}
                    height={36}
                    className="dark:hidden"
                  />
                  <Image
                    src={iconDark}
                    alt={title}
                    width={36}
                    height={36}
                    className="hidden dark:block"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-500">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600  dark:text-gray-400 transition-colors duration-500">
                      {description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Tools Section */}
            <div className="pt-4">
              <motion.h4
                variants={fadeUp}
                className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400 transition-colors duration-500"
              >
                Tools I Use
              </motion.h4>
              <motion.ul
                variants={container}
                className="flex flex-wrap gap-4"
              >
                {toolsData.map((tool, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:scale-110 transition-transform duration-300"
                  >
                    <Image src={tool} alt="tool" width={28} height={28} />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
