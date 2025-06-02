// pages/index.tsx or wherever your Home component is
'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768 // Tailwind 'md' breakpoint
    setDarkMode(isMobile)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        darkMode
          ? 'text-white [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'
          : 'text-gray-800 bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]'
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header />
      <About darkMode={darkMode}/>
      <Services  darkMode={darkMode}/>
      <Work darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  )
}
