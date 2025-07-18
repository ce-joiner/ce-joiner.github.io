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

    const text = "An endlessly curious software developer exploring all possibilities of technology through the lens of functional beauty. I make things that are nice to look at and a delight to use. Keep scrolling to see a few of them."
    const words = text.split(' ')

    return (
        <div id="introduction" className="px-4 -mt-80 pb-32">
            <div className="min-h-[80vh] flex items-center justify-center">
                <div className="max-w-6xl mx-auto">
                    <div ref={ref} className="text-5xl md:text-6xl font-light text-gray-900 leading-relaxed text-center">
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
                                    className="inline-block mr-3"
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