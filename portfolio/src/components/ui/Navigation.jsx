import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Clock from './Clock'

function Navigation() {
    const [isHovered, setIsHovered] = useState(false)

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('casey@example.com') // Replace with actual email
            // Optional: Add a brief visual feedback here
        } catch (err) {
            console.error('Failed to copy email:', err)
        }
    }

    const handleOpenEmail = () => {
        window.location.href = 'mailto:casey@example.com' // Replace with actual email
    }

    const handleInstagram = () => {
        window.open('https://instagram.com/yourusername', '_blank') // Replace with actual Instagram
    }

    const handleLinkedIn = () => {
        window.open('https://linkedin.com/in/yourusername', '_blank') // Replace with actual LinkedIn
    }

    const slideVariants = {
        hidden: {
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                staggerChildren: 0.05,
                delayChildren: 0.05
            }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
                duration: 0.25,
                ease: "easeIn"
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -15
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="px-4 py-4">
                <div className="flex justify-between items-start">
                    {/* Contact Section */}
                    <div
                        className="relative"
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

                        {/* Sliding Contact Options */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    className="mt-4 space-y-2"
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

                    {/* Clock */}
                    <div>
                        <Clock />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation 