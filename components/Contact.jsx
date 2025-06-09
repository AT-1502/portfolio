'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-4xl mx-auto transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2
          className={`text-4xl font-bold mb-2 ${
            darkMode
              ? 'bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          }`}
        >
          Let’s Connect
        </h2>
        <p
          className={`mt-2 text-lg font-medium ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Get in touch to discuss ideas or just say hi.
        </p>
      </motion.div>

      <motion.form
        action="https://api.web3forms.com/submit"
        method="POST"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`rounded-xl p-8 md:p-10 space-y-6 border shadow-md transition-colors duration-300
          ${
            darkMode
              ? 'bg-[#121827] border-gray-700 text-gray-100 shadow-indigo-900/50'
              : 'bg-white border-gray-200 text-gray-900 shadow-gray-300/50 backdrop-blur-sm'
          }
        `}
      >
        <input
          type="hidden"
          name="access_key"
          value="67405533-9a7c-4455-ade6-3ba770e68556"
        />

        {/* Name */}
        <div>
          <label
            className={`block text-sm font-medium mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition
              ${
                darkMode
                  ? 'bg-[#0f172a] border-gray-700 text-white focus:ring-purple-600'
                  : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
              }
            `}
          />
        </div>

        {/* Email */}
        <div>
          <label
            className={`block text-sm font-medium mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition
              ${
                darkMode
                  ? 'bg-[#0f172a] border-gray-700 text-white focus:ring-purple-600'
                  : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500'
              }
            `}
          />
        </div>

        {/* Message */}
        <div>
          <label
            className={`block text-sm font-medium mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your message..."
            className={`w-full px-4 py-3 rounded-xl border resize-none focus:outline-none focus:ring-2 transition
              ${
                darkMode
                  ? 'bg-[#0f172a] border-gray-700 text-white focus:ring-purple-600'
                  : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
              }
            `}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-medium rounded-xl hover:opacity-90 transition shadow-lg hover:shadow-pink-500/40"
        >
          <Send size={18} /> Send Message
        </button>
      </motion.form>
    </section>
  )
}

export default Contact
