import { useRef, useEffect, useState } from 'react'

function Hero() {
  const creativeRef = useRef(null)
  const visualRef = useRef(null)
  const otherRef = useRef(null)
  const [lines, setLines] = useState([])

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
          x2: visualCenter.x, // Go directly to visual artist center x
          y2: creativeEnd.y
        },
        vertical: {
          x1: visualCenter.x, // Start at visual artist center x
          y1: creativeEnd.y,
          x2: visualCenter.x, // End at visual artist center x (straight down)
          y2: visualCenter.y - 16 // Stop 16px above the text
        },
        arrow: {
          x: visualCenter.x, // Arrow directly over center of "visual artist"
          y: visualCenter.y - 16
        }
      }

      // Second L-shape: visual artist → and plenty other things
      const line2 = {
        horizontal: {
          x1: visualStart.x,
          y1: visualStart.y,
          x2: otherCenter.x, // Go to the center of "and plenty other things"
          y2: visualStart.y
        },
        vertical: {
          x1: otherCenter.x, // Start vertical line at "and plenty other things" center x
          y1: visualStart.y,
          x2: otherCenter.x,
          y2: otherCenter.y - 16 // Stop 16px above the text
        },
        arrow: {
          x: otherCenter.x, // Arrow directly over center of "and plenty other things"
          y: otherCenter.y - 16
        }
      }

      setLines([line1, line2])
    }

    // Add a small delay to ensure DOM elements are fully positioned
    const timer = setTimeout(() => {
      calculateLines()
    }, 100)

    // Also calculate on resize
    window.addEventListener('resize', calculateLines)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', calculateLines)
    }
  }, [])

  return (
    <div className="px-4 pt-4 pb-32">
      <div className="min-h-screen relative">
        {/* Large Name Treatment - Stacked on mobile */}
        <div className="absolute top-2 right-0">
          <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-wide text-gray-900 leading-none text-right">
            <span className="block sm:inline">CASEY</span>
            <span className="block sm:inline sm:ml-4">JOINER</span>
          </h1>
        </div>

        {/* Creative Software Developer - Left side (keep original positioning) */}
        <div className="absolute top-48 sm:top-40 md:top-48 left-0">
          <p ref={creativeRef} className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700">
            creative software developer
          </p>
        </div>

        {/* Visual Artist - Right side (keep original positioning) */}
        <div className="absolute top-72 sm:top-56 md:top-72 right-0">
          <p ref={visualRef} className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700">
            visual artist
          </p>
        </div>

        {/* And plenty other things - Left-center (keep original positioning) */}
        <div className="absolute top-96 sm:top-72 md:top-96 left-12">
          <p ref={otherRef} className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700 italic">
            and plenty other things.
          </p>
        </div>

        {/* Dynamic L-shaped connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {lines.map((line, index) => (
            <g key={index}>
              {/* Horizontal line */}
              <line
                x1={line.horizontal.x1}
                y1={line.horizontal.y1}
                x2={line.horizontal.x2}
                y2={line.horizontal.y2}
                stroke="#9CA3AF"
                strokeWidth="1"
                fill="none"
              />
              {/* Vertical line */}
              <line
                x1={line.vertical.x1}
                y1={line.vertical.y1}
                x2={line.vertical.x2}
                y2={line.vertical.y2}
                stroke="#9CA3AF"
                strokeWidth="1"
                fill="none"
              />
              {/* Arrow pointing down, positioned over text center */}
              <polygon
                points={`${line.arrow.x},${line.arrow.y} ${line.arrow.x - 4},${line.arrow.y - 8} ${line.arrow.x + 4},${line.arrow.y - 8}`}
                fill="#9CA3AF"
              />
            </g>
          ))}
        </svg>

        {/* Large Scroll Circle - Move down from text */}
        <div className="absolute top-[32rem] sm:top-[26rem] md:top-[32rem] lg:bottom-52 left-1/2 transform -translate-x-1/2">
          <div
            className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer hover:border-gray-600 transition-colors duration-300"
            onClick={() => {
              document.getElementById('introduction')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }}
          >
            <div className="text-2xl md:text-4xl text-gray-400">
              ↓
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero