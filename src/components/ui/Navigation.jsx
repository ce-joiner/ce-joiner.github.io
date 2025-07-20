import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Clock from './Clock'

function Navigation() {
    const [isHovered, setIsHovered] = useState(false)

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('caseyejoiner@gmail.com')
        } catch (err) {
            console.error('Failed to copy email:', err)
        }
    }

    const handleOpenEmail = () => {
        window.location.href = 'mailto:caseyejoiner@gmail.com'
    }

    const handleInstagram = () => {
        window.open('https://instagram.com/yourusername', '_blank')
    }

    const handleLinkedIn = () => {
        window.open('https://linkedin.com/in/yourusername', '_blank')
    }

    const slideVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1, x: 0,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.05, delayChildren: 0.05 }
        },
        exit: { opacity: 0, x: -50, transition: { duration: 0.25, ease: "easeIn" } }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -15 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }
    }

    return (
        <nav className="fixed top-0 left-0 z-50 w-full">
            <div className="px-4 py-4 relative">
                {/* Contact Section */}
                <div
                    className="absolute top-4 left-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.span
                        className="text-sm tracking-wide text-gray-800 hover:text-gray-600 transition-colors duration-300 cursor-pointer block"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        [contact]
                    </motion.span>

                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                className="mt-4 space-y-2 whitespace-nowrap"
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.button
                                    onClick={handleCopyEmail}
                                    className="block text-sm text-gray-700 hover:text-gray-500 hover:underline transition-all duration-200"
                                    variants={itemVariants}
                                >
                                    Copy my email address
                                </motion.button>

                                <motion.span
                                    className="block text-xs text-gray-400 text-left py-1"
                                    variants={itemVariants}
                                >
                                    or
                                </motion.span>

                                <motion.button
                                    onClick={handleOpenEmail}
                                    className="block text-sm text-gray-700 hover:text-gray-500 hover:underline transition-all duration-200"
                                    variants={itemVariants}
                                >
                                    Open your email default app
                                </motion.button>

                                <motion.button
                                    onClick={handleInstagram}
                                    className="block text-sm text-gray-700 hover:text-gray-500 hover:underline transition-all duration-200 mt-3"
                                    variants={itemVariants}
                                >
                                    Check out my Instagram
                                </motion.button>

                                <motion.button
                                    onClick={handleLinkedIn}
                                    className="block text-sm text-gray-700 hover:text-gray-500 hover:underline transition-all duration-200"
                                    variants={itemVariants}
                                >
                                    Find me on LinkedIn
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Clock - Mobile optimized positioning */}
                <div className="absolute top-4 right-4">
                    <Clock />
                </div>
            </div>
        </nav>
    )
}

export default Navigation
