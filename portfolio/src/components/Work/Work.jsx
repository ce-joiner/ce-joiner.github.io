import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../../data/projects'

function Work() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="px-4 pt-4 pb-32">
      <div ref={ref} className="max-w-full">
        {/* Portfolio Header - Left Aligned */}
        <div className="text-left mb-8">
          <h2 className="text-4xl md:text-3xl font-light tracking-wide text-gray-900">
            PORTFOLIO
          </h2>
        </div>

        {/* Animated Dividing Line */}
        <div className="relative mb-16">
          <motion.div
            className="h-px bg-gray-900"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: 0.2
            }}
            style={{
              transformOrigin: "left center"
            }}
          />
        </div>

        {/* Projects */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work