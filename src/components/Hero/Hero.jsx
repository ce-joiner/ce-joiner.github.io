import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CircularText from './CircularText'

function Hero() {
  const creativeRef = useRef(null)
  const visualRef = useRef(null)
  const otherRef = useRef(null)
  const [lines, setLines] = useState([])
  const [isScattered, setIsScattered] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true) // Start as true to prevent flash

  // Detect if we're on desktop (has hover capability)
  useEffect(() => {
    setIsDesktop(window.matchMedia('(hover: hover)').matches)
  }, [])

  // Combine both names into single array for cleaner processing
  const fullName = "CASEY JOINER"
  const nameChars = Array.from(fullName)
  
  // Generate scatter positions once on mount to avoid recalculation on each render
  const [scatterPositions] = useState(() => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 400
    
    return nameChars.map(() => {
      // Keep scatter relative to name position but ensure bounds
      // Since name is right-aligned, bias scatter more to the left
      const maxLeftDistance = Math.min(screenWidth * 0.6, 300) // Can go far left
      const maxRightDistance = Math.min(screenWidth * 0.15, 80) // Limited right distance
      
      return {
        x: -maxLeftDistance + Math.random() * (maxLeftDistance + maxRightDistance),
        y: -20 + Math.random() * 120, // Vertical stays the same
        rotate: (Math.random() - 0.5) * 360,
        scale: 0.8 + (Math.random() * 0.4)
      }
    })
  })

  const toggleScatter = () => setIsScattered(prev => !prev)

  // Unified variants - same animation for both hover and tap (no color here)
  const letterVariants = {
    // Initial entrance animation - MUCH MORE DRAMATIC
    hidden: {
      y: -250, // Fall from much higher (was -100)
      opacity: 0,
      scale: 0.3, // Start smaller (was 0.5)
      rotate: Math.random() * 40 - 20, // More random rotation (was 20-10)
    },
    // Normal resting state
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 8, // Less damping = more bounce (was 12)
        stiffness: 120, // Slightly more responsive (was 100)
        bounce: 0.8, // Much more bounce (was 0.6)
        duration: 1.0, // Longer for more dramatic (was 0.8)
      }
    },
    // Scattered state (positions only, color handled by h1)
    scattered: (index) => ({
      x: scatterPositions[index].x,
      y: scatterPositions[index].y,
      rotate: scatterPositions[index].rotate,
      scale: scatterPositions[index].scale,
      opacity: 1, // Force letters to stay visible when scattered
      transition: {
        type: "spring",
        damping: 6, // Even less damping for slower settle
        stiffness: 80, // Much less stiff for slower movement
        duration: 1.2, // Even longer duration
      }
    })
  }

  // Helper to calculate stagger delay based on character index
  const getStaggerDelay = (index) => {
    // More dramatic stagger timing for bigger impact
    // "CASEY" (indices 0-4) starts at 0.4s with bigger gaps
    // "JOINER" (indices 6-11) starts at 1.0s
    if (index <= 4) return 0.4 + (index * 0.15) // Increased stagger (was 0.1)
    if (index === 5) return 0 // Space has no animation
    return 1.0 + ((index - 6) * 0.15) // Later start, bigger stagger
  }

  useEffect(() => {
    const calculateLines = () => {
      if (!creativeRef.current || !visualRef.current || !otherRef.current) return

      const container = creativeRef.current.closest('.relative')
      const containerRect = container.getBoundingClientRect()

      // Get positions relative to container
      const creativeRect = creativeRef.current.getBoundingClientRect()
      const visualRect = visualRef.current.getBoundingClientRect()
      const otherRect = otherRef.current.getBoundingClientRect()

      // Calculate relative positions
      const creativeEnd = {
        x: creativeRect.right - containerRect.left,
        y: creativeRect.top + creativeRect.height / 2 - containerRect.top
      }

      const visualCenter = {
        x: visualRect.left + visualRect.width / 2 - containerRect.left,
        y: visualRect.top + visualRect.height / 2 - containerRect.top
      }

      const visualStart = {
        x: visualRect.left - containerRect.left,
        y: visualRect.top + visualRect.height / 2 - containerRect.top
      }

      const otherCenter = {
        x: otherRect.left + otherRect.width / 2 - containerRect.left,
        y: otherRect.top + otherRect.height / 2 - containerRect.top
      }

      // First L-shape: creative developer → visual artist (straight down)
      const line1 = {
        horizontal: {
          x1: creativeEnd.x,
          y1: creativeEnd.y,
          x2: visualCenter.x,
          y2: creativeEnd.y
        },
        vertical: {
          x1: visualCenter.x,
          y1: creativeEnd.y,
          x2: visualCenter.x,
          y2: visualCenter.y - 16
        },
        arrow: {
          x: visualCenter.x,
          y: visualCenter.y - 16
        }
      }

      // Second L-shape: visual artist → and plenty other things
      const line2 = {
        horizontal: {
          x1: visualStart.x,
          y1: visualStart.y,
          x2: otherCenter.x,
          y2: visualStart.y
        },
        vertical: {
          x1: otherCenter.x,
          y1: visualStart.y,
          x2: otherCenter.x,
          y2: otherCenter.y - 16
        },
        arrow: {
          x: otherCenter.x,
          y: otherCenter.y - 16
        }
      }

      setLines([line1, line2])
    }

    const timer = setTimeout(() => {
      calculateLines()
    }, 100)

    window.addEventListener('resize', calculateLines)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', calculateLines)
    }
  }, [])

  return (
    <div className="px-4 pt-4 pb-32 overflow-hidden"> {/* Added overflow-hidden to prevent horizontal scroll */}
      <div className="min-h-screen relative">
        {/* Name with entrance animation + interactive scatter effect */}
        <motion.div 
          className="absolute top-4 right-0 select-none" // Back to right alignment
          style={{ pointerEvents: isScattered && isDesktop ? 'none' : 'auto' }}
        >
          <motion.h1 
            className="cursor-pointer text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-wide leading-none text-right" // Back to right alignment
            onClick={toggleScatter}
            animate={{ 
              color: isScattered ? "#F02F34" : "#111827",
              opacity: (isScattered && isDesktop) ? 0 : 1 // Only hide on desktop
            }}
            whileHover={{ 
              color: "#F02F34"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Split name at space for proper mobile stacking */}
            <div className="block sm:inline">
              {nameChars.slice(0, 5).map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate={isScattered ? "scattered" : "visible"}
                  whileHover="scattered"
                  transition={{ delay: getStaggerDelay(index) }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <span className="sm:ml-4"></span>
            <div className="block sm:inline sm:ml-4">
              {nameChars.slice(6).map((char, index) => (
                <motion.span
                  key={index + 6}
                  custom={index + 6}
                  variants={letterVariants}
                  initial="hidden"
                  animate={isScattered ? "scattered" : "visible"}
                  whileHover="scattered"
                  transition={{ delay: getStaggerDelay(index + 6) }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          {/* Easter egg text when name disappears - DESKTOP ONLY */}
          {isDesktop && isScattered && (
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              onClick={toggleScatter}
              animate={{
                opacity: 1,
                scale: 1
              }}
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              transition={{ 
                duration: 0.4,
                delay: 0.2 // Small delay when appearing
              }}
              style={{ pointerEvents: 'auto' }} // Make sure it's clickable
            >
              <span className="text-sm md:text-base font-light italic" style={{ color: '#F02F34' }}>
                oh no!
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Creative Software Developer */}
        <div className="absolute top-48 sm:top-40 md:top-48 left-0">
          <p ref={creativeRef} className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700">
            creative software developer
          </p>
        </div>

        {/* Visual Artist */}
        <div className="absolute top-72 sm:top-56 md:top-72 right-0">
          <p ref={visualRef} className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700">
            visual artist
          </p>
        </div>

        {/* And plenty other things */}
        <div className="absolute top-96 sm:top-72 md:top-96 left-12 md:left-24">
          <p ref={otherRef} className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700 italic">
            and plenty other things.
          </p>
        </div>

        {/* Dynamic L-shaped connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {lines.map((line, index) => (
            <g key={index}>
              <line
                x1={line.horizontal.x1}
                y1={line.horizontal.y1}
                x2={line.horizontal.x2}
                y2={line.horizontal.y2}
                stroke="#F02F34"
                strokeWidth="1"
                fill="none"
              />
              <line
                x1={line.vertical.x1}
                y1={line.vertical.y1}
                x2={line.vertical.x2}
                y2={line.vertical.y2}
                stroke="#F02F34"
                strokeWidth="1"
                fill="none"
              />
              <polygon
                points={`${line.arrow.x},${line.arrow.y} ${line.arrow.x - 4},${line.arrow.y - 8} ${line.arrow.x + 4},${line.arrow.y - 8}`}
                fill="#F02F34"
              />
            </g>
          ))}
        </svg>

        {/* Large Scroll Circle with Circular Text */}
        <div className="absolute top-[30rem] sm:top-[28rem] md:top-[34rem] lg:bottom-52 left-1/2 transform -translate-x-1/2">
          <div
            className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center cursor-pointer relative group"
            onClick={() => {
              document.getElementById('introduction')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }}
          >
            {/* Circular Text */}
            <CircularText 
              text="GO • THIS • WAY • "
              className="group-hover:duration-[3s]"
            />
            
            {/* Arrow in center */}
            <div className="text-2xl md:text-4xl text-gray-400 relative z-10">
              ↓
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero