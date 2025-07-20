import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'

function Introduction() {
    const ref = useRef(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollProgress(latest)
    })

    const text = "An endlessly curious software developer exploring all possibilities of technology through the lens of functional beauty. I make things that are nice to look at and a delight to use."
    const words = text.split(' ')

    return (
        <div id="introduction" className="px-6 -mt-64 sm:-mt-64 md:-mt-64 pb-4 md:pb-32">
            <div className="min-h-[30vh] sm:min-h-[50vh] md:min-h-[80vh] flex items-center justify-center">
                <div className="max-w-4xl mx-auto w-full">
                    <div ref={ref} className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-relaxed text-center px-2">
                        {words.map((word, index) => {
                            // Calculate opacity based on scroll progress and word position
                            const wordProgress = index / (words.length - 1)
                            const scrollOffset = scrollProgress - wordProgress

                            // Create a slower fade range where words gradually become visible
                            let opacity = 0
                            if (scrollOffset >= -0.5) {
                                opacity = Math.min(1, (scrollOffset + 0.5) / 0.7)
                            }

                            return (
                                <motion.span
                                    key={index}
                                    animate={{
                                        opacity: opacity
                                    }}
                                    transition={{ duration: 0.1, ease: "easeOut" }}
                                    className="inline-block mr-1 sm:mr-2 md:mr-3"
                                >
                                    {word}
                                </motion.span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction