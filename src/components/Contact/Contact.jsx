import { motion } from 'framer-motion'
import { useRef } from 'react'

function Contact() {
  const footerRef = useRef(null)

  const handleOpenEmail = () => {
    window.location.href = 'mailto:caseyejoiner@gmail.com'
  }

  return (
    <div id="contact" className="px-4 pt-32 pb-16">
      {/* Want to Work Together? */}
      <div className="text-center mb-8">
        <motion.p
          className="text-sm tracking-wide text-gray-600 mb-4 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          I'd love to meet you, so please
        </motion.p>

        {/* Scrolling SAY HI! Marquee - extends beyond page boundaries */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)'
          }}
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -4000]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
            style={{ width: 'max-content' }}
          >
            {Array.from({ length: 20 }, (_, index) => (
              <span
                key={index}
                className="text-9xl md:text-[12rem] lg:text-[16rem] font-black leading-none tracking-tighter mr-8"
                style={{ color: '#F02F34' }}
              >
                SAY HI! •
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Email Address */}
        <motion.div
          id="email-section"
          className="mt-8 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <motion.button
            onClick={handleOpenEmail}
            className="block text-3xl md:text-4xl font-light text-gray-900 mx-auto"
            whileHover={{
              scale: 1.02,
              color: "#F02F34"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            CASEYEJOINER@GMAIL.COM
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
      <div id="footer" className="mt-16 pt-8">
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
              href="https://www.instagram.com/ce_joiner/"
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
              href="https://www.linkedin.com/in/casey-joiner/"
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
              href="https://github.com/ce-joiner"
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