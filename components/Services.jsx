'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Paintbrush2, Server } from 'lucide-react'

const services = [
  {
    icon: <Code size={32} />,
    title: 'Frontend Development',
    description:
      'Crafting responsive, accessible, and high-performance web apps using React, Next.js, Tailwind CSS, and modern animation libraries.',
    details:
      'I build user-friendly and SEO-optimized frontend applications with clean code and scalable architecture. Experienced with state management, SSR, and client-side routing.'
  },
  {
    icon: <Paintbrush2 size={32} />,
    title: 'UI/UX Design',
    description:
      'Designing clean, minimal interfaces with a focus on user behavior, interaction feedback, and adaptive user experiences.',
    details:
      'I create wireframes, prototypes, and high-fidelity designs using Figma and Adobe XD, focusing on accessibility and seamless user journeys.'
  },
  {
    icon: <Server size={32} />,
    title: 'Backend Integration',
    description:
      'Connecting frontend with scalable and secure APIs using technologies like MongoDB, PostgreSQL, Node.js, and RESTful services.',
    details:
      'I implement RESTful APIs and GraphQL services, manage databases, and ensure secure authentication & authorization, making backend services robust and scalable.'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const Services = ({ darkMode }) => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section
      id="services"
      className={`relative z-10 py-24 px-6 max-w-7xl mx-auto transition-colors duration-500 ${
        darkMode ? 'text-gray-200' : 'text-gray-800'
      }`}
    >
      {/* Blurred gradient background glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className={`w-[30rem] h-[30rem] blur-[120px] rounded-full absolute top-[-10%] left-[-10%] ${
            darkMode ? 'bg-purple-500/10' : 'bg-indigo-400/20'
          }`}
        />
        <div
          className={`w-[20rem] h-[20rem] blur-[100px] rounded-full absolute bottom-[-10%] right-[-10%] ${
            darkMode ? 'bg-indigo-400/10' : 'bg-pink-400/20'
          }`}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-14">
          <h4
            className={`text-sm uppercase tracking-widest ${
              darkMode ? 'text-indigo-400' : 'text-indigo-500'
            }`}
          >
            What I Offer
          </h4>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${
              darkMode
                ? 'from-indigo-400 to-purple-300'
                : 'from-indigo-600 to-purple-500'
            } mt-3`}
          >
            My Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`group p-6 rounded-3xl shadow-lg transition-all hover:shadow-xl border backdrop-blur-md ${
                darkMode
                  ? 'bg-[#18181b]/60 border-gray-700'
                  : 'bg-white/70 border-gray-200'
              }`}
            >
              <div
                className={`mb-4 group-hover:rotate-6 transition-transform duration-300 ${
                  darkMode ? 'text-indigo-400' : 'text-indigo-600'
                }`}
              >
                {React.cloneElement(service.icon, { size: 36 })}
              </div>
              <h3
                className={`text-xl font-bold mb-2 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {service.description}
              </p>

              {expandedIndex === index && (
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {service.details}
                </p>
              )}

              <button
                onClick={() => toggleDetails(index)}
                className={`font-semibold text-sm hover:underline focus:outline-none ${
                  darkMode ? 'text-indigo-400' : 'text-indigo-600'
                }`}
                aria-expanded={expandedIndex === index}
              >
                {expandedIndex === index ? 'Read Less' : 'Read More'}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Services
