import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Contact() {
  const ref = useRef(null)
  const footerRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const isFooterInView = useInView(footerRef, { once: true, amount: 0.8 })

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('caseyejoiner@gmail.com')
      // Optional: Add visual feedback here
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const handleOpenEmail = () => {
    window.location.href = 'mailto:caseyejoiner@gmail.com'
  }

  return (
    <div className="px-4 pt-32 pb-16">
      {/* Want to Work Together? */}
      <div ref={ref} className="text-center mb-8">
        <motion.p
          className="text-sm tracking-wide text-gray-600 mb-4 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          I'd love to meet you, so please
        </motion.p>

        {/* Massive SAY HI! */}
        <motion.div
          className="text-9xl md:text-[12rem] lg:text-[16rem] font-black text-gray-900 leading-none tracking-tighter"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          SAY HI!
        </motion.div>

        {/* Email Address */}
        <motion.div
          className="mt-8 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <button
            onClick={handleOpenEmail}
            className="block text-3xl md:text-4xl font-light text-gray-900 hover:text-gray-600 transition-colors duration-300 mx-auto"
          >
            CASEYEJOINER@GMAIL.COM
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <div ref={footerRef} className="mt-16 pt-8">
        <div className="flex items-center justify-between">
          {/* Left - Copyright */}
          <motion.div
            className="text-sm text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Casey Joiner 2025
          </motion.div>

          {/* Center - Animated Line */}
          <motion.div
            className="flex-1 mx-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.div
              className="h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              style={{ transformOrigin: "left center" }}
            />
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            className="flex space-x-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <motion.a
              href="https://instagram.com/yourusername" // Replace with actual Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Instagram
              <span className="text-xs">↗</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/yourusername" // Replace with actual LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              LinkedIn
              <span className="text-xs">↗</span>
            </motion.a>

            <motion.a
              href="https://github.com/ce-joiner" // Using your actual GitHub from projects
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Github
              <span className="text-xs">↗</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact