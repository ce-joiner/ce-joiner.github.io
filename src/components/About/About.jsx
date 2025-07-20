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
      <div ref={ref} className="max-w-7xl mx-auto">
        
        {/* Unified Responsive Layout - Stack until very large screens */}
        <div className="flex flex-col min-[1400px]:flex-row gap-8 min-[1400px]:gap-32 items-start">
          {/* Left Column - Large Typography with Underlines */}
          <div className="w-full min-[1400px]:w-auto min-[1400px]:flex-shrink-0 min-[1400px]:max-w-md space-y-4">
            {/* A LITTLE */}
            <div className="relative">
              <motion.div
                className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl min-[1400px]:text-7xl font-bold leading-none text-gray-900 tracking-wide"
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

            {/* MORE ABOUT */}
            <div className="relative">
              <motion.div
                className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl min-[1400px]:text-7xl font-bold leading-none text-gray-900 tracking-wide min-[1400px]:whitespace-nowrap"
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
              <div className="flex-1 min-w-0">
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl min-[1400px]:text-7xl font-bold leading-none text-gray-900 tracking-wide"
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

              {/* Photo positioned right after MYSELF */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative overflow-hidden bg-gray-100 w-28 h-36 md:w-32 md:h-40 lg:w-36 lg:h-44 flex-shrink-0"
              >
                <img
                  src="/images/profilePic.webp"
                  alt="Casey Joiner"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full min-[1400px]:flex-1 min-[1400px]:max-w-2xl space-y-6 min-[1400px]:space-y-8">
            {/* First Text Block */}
            <div className="relative">
              <motion.p
                className="text-base md:text-lg lg:text-lg xl:text-lg min-[1400px]:text-lg leading-relaxed text-gray-700 font-light mb-2"
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
                className="text-base md:text-lg lg:text-lg xl:text-lg min-[1400px]:text-lg leading-relaxed text-gray-700 font-light mb-2"
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