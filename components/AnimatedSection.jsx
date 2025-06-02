'use client'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% visible
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
        hidden: { opacity: 0, y: 50 },
      }}
      className="mb-12"
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
