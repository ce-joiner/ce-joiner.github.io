import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Animation variants for text blocks
  const textBlockVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.3 // Stagger each paragraph
      }
    })
  }

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.6
      }
    }
  }

  return (
    <div className="px-4 pt-4 pb-32">
      <div ref={ref} className="max-w-full">
        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-32 items-start">
          {/* Left Column - Large Typography with Underlines */}
          <div className="col-span-12 md:col-span-4 space-y-4">
            {/* A LITTLE */}
            <div className="relative">
              <motion.div
                className="text-6xl md:text-7xl font-bold leading-none text-gray-900 tracking-wide"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                A LITTLE
              </motion.div>
              <motion.div
                className="h-px bg-gray-900 mt-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 0.4
                }}
                style={{ transformOrigin: "left center" }}
              />
            </div>

            {/* MORE ABOUT - on same line */}
            <div className="relative">
              <motion.div
                className="text-6xl md:text-7xl font-bold leading-none text-gray-900 tracking-wide whitespace-nowrap"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                MORE ABOUT
              </motion.div>
              <motion.div
                className="h-px bg-gray-900 mt-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 0.7
                }}
                style={{ transformOrigin: "left center" }}
              />
            </div>

            {/* MYSELF with Image */}
            <div className="relative flex items-start gap-4">
              <div className="flex-1">
                <motion.div
                  className="text-6xl md:text-7xl font-bold leading-none text-gray-900 tracking-wide"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                  MYSELF
                </motion.div>
                <motion.div
                  className="h-px bg-gray-900 mt-2"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: 1.0
                  }}
                  style={{ transformOrigin: "left center" }}
                />
              </div>

              {/* Photo positioned right after MYSELF - made bigger */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative overflow-hidden bg-gray-100 w-36 h-44 flex-shrink-0"
              >
                <img
                  src="public/images/profilePic.webp"
                  alt="Casey Joiner"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="col-span-12 md:col-span-8 space-y-8">
            {/* First Text Block */}
            <div className="relative">
              <motion.p
                className="text-lg leading-relaxed text-gray-700 font-light mb-2"
                custom={0}
                variants={textBlockVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </motion.p>
            </div>

            {/* Second Text Block */}
            <div className="relative">
              <motion.p
                className="text-lg leading-relaxed text-gray-700 font-light mb-2"
                custom={1}
                variants={textBlockVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
