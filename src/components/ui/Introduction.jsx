import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Introduction() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const text = "An endlessly curious software developer exploring all possibilities of technology through the lens of functional beauty. I make things that are nice to look at and a delight to use."
    const words = text.split(' ')

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

    return (
        <div id="introduction" className="px-4 -mt-64 sm:-mt-64 md:-mt-48 pb-4 md:pb-4">
            <div className="min-h-[30vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center">
                <div className="max-w-5xl mx-auto w-full">
                    <motion.div 
                        ref={ref}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-relaxed text-left px-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={wordVariants}
                                className="inline-block mr-1 sm:mr-2 md:mr-3"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Introduction