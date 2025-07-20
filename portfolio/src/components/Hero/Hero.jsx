import React, { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const creativeRef = useRef(null)
  const visualRef = useRef(null)
  const otherRef = useRef(null)
  const [lines, setLines] = useState([])

  useEffect(() => {
    const calculateLines = () => {
      if (!creativeRef.current || !visualRef.current || !otherRef.current) return

      const creative = creativeRef.current.getBoundingClientRect()
      const visual = visualRef.current.getBoundingClientRect()
      const other = otherRef.current.getBoundingClientRect()
      const container = document.querySelector('.relative')?.getBoundingClientRect()

      if (!container) return

      const offsetX = container.left
      const offsetY = container.top

      const newLines = [
        {
          horizontal: {
            x1: creative.right - offsetX,
            y1: creative.top + creative.height / 2 - offsetY,
            x2: creative.right - offsetX + 60,
            y2: creative.top + creative.height / 2 - offsetY
          },
          vertical: {
            x1: creative.right - offsetX + 60,
            y1: creative.top + creative.height / 2 - offsetY,
            x2: creative.right - offsetX + 60,
            y2: creative.bottom - offsetY + 20
          },
          arrow: {
            x: creative.right - offsetX + 60,
            y: creative.bottom - offsetY + 20
          }
        },
        {
          horizontal: {
            x1: visual.left - offsetX - 60,
            y1: visual.top + visual.height / 2 - offsetY,
            x2: visual.left - offsetX,
            y2: visual.top + visual.height / 2 - offsetY
          },
          vertical: {
            x1: visual.left - offsetX - 60,
            y1: visual.top + visual.height / 2 - offsetY,
            x2: visual.left - offsetX - 60,
            y2: visual.bottom - offsetY + 20
          },
          arrow: {
            x: visual.left - offsetX - 60,
            y: visual.bottom - offsetY + 20
          }
        },
        {
          horizontal: {
            x1: other.right - offsetX,
            y1: other.top + other.height / 2 - offsetY,
            x2: other.right - offsetX + 40,
            y2: other.top + other.height / 2 - offsetY
          },
          vertical: {
            x1: other.right - offsetX + 40,
            y1: other.top + other.height / 2 - offsetY,
            x2: other.right - offsetX + 40,
            y2: other.bottom - offsetY + 20
          },
          arrow: {
            x: other.right - offsetX + 40,
            y: other.bottom - offsetY + 20
          }
        }
      ]

      setLines(newLines)
    }

    const timer = setTimeout(calculateLines, 100)
    window.addEventListener('resize', calculateLines)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', calculateLines)
    }
  }, [])

  return (
    <div className="px-4 pt-8 pb-32">
      <div className="min-h-screen relative">
        {/* Large Name Treatment - Moved closer to top, bigger on mobile */}
        <div className="absolute top-4 right-0">
          <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-wide text-gray-900 leading-none text-right">
            <span className="block sm:inline">CASEY</span>
            <span className="block sm:inline sm:ml-4">JOINER</span>
          </h1>
        </div>

        {/* Creative Software Developer - More space from name */}
        <div className="absolute top-48 sm:top-40 md:top-48 left-0">
          <p ref={creativeRef} className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700">
            creative software developer
          </p>
        </div>

        {/* Visual Artist - More space from previous */}
        <div className="absolute top-72 sm:top-56 md:top-72 right-0">
          <p ref={visualRef} className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700">
            visual artist
          </p>
        </div>

        {/* And plenty other things - Moved more left, more space from previous */}
        <div className="absolute top-96 sm:top-72 md:top-96 left-8">
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

        {/* Large Scroll Circle - Positioned to be visible in viewport */}
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