import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Animation variants for word-by-word reveal (matching Introduction)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
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

  // Combine all text into one continuous flow but track paragraph breaks
  const paragraph1 = "I'm a photographer turned full stack software engineer based in New Orleans, LA. I'm currently working as a freelance developer on various projects, bringing a keen sense of form and function to building web applications."
  const paragraph2 = "The transition from making photographs to creating digital experiences felt natural - I think both are about composition, timing, and storytelling. I've worked primarily with React, Node.js, Python, and Django, staying adaptable in solving problems and focused on delivery. For me, execution and aesthetics are inseparable - if it doesn't work beautifully, it doesn't work."
  const paragraph3 = "When I'm not building applications, you can probably find me behind a camera, teaching myself something new, tinkering with AI, or thinking about how to build better connections and digital spaces."
  
  const p1Words = paragraph1.split(' ')
  const p2Words = paragraph2.split(' ')
  const p3Words = paragraph3.split(' ')
  
  const totalWords = [...p1Words, ...p2Words, ...p3Words]

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
            {/* First Paragraph */}
            <motion.div
              ref={ref}
              className="text-base md:text-lg lg:text-lg xl:text-lg min-[1400px]:text-lg leading-relaxed text-gray-700 font-light"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {p1Words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-1 sm:mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Second Paragraph */}
            <motion.div
              className="text-base md:text-lg lg:text-lg xl:text-lg min-[1400px]:text-lg leading-relaxed text-gray-700 font-light"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {p2Words.map((word, index) => (
                <motion.span
                  key={p1Words.length + index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.8
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: (p1Words.length + index) * 0.05
                      }
                    }
                  }}
                  className="inline-block mr-1 sm:mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Third Paragraph */}
            <motion.div
              className="text-base md:text-lg lg:text-lg xl:text-lg min-[1400px]:text-lg leading-relaxed text-gray-700 font-light"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {p3Words.map((word, index) => (
                <motion.span
                  key={p1Words.length + p2Words.length + index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.8
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: (p1Words.length + p2Words.length + index) * 0.05
                      }
                    }
                  }}
                  className="inline-block mr-1 sm:mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Photography Link */}
            <motion.div
              className="text-base md:text-lg lg:text-lg xl:text-lg min-[1400px]:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: totalWords.length * 0.05 + 0.5 }}
            >
              <motion.a
                href="https://www.caseyejoiner.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-700 hover:text-gray-900 transition-colors duration-300 inline-flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                style={{ transformOrigin: "left center" }}
              >
                I share my photographs here
                <span className="text-xs">↗</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About