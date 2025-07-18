// src/components/Work/ProjectCard.jsx
import { motion } from 'framer-motion'

function ProjectCard({ project, index }) {
  const { title, description, techStack, liveUrl, images, layout, client } = project

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: (index * 0.2) + 0.3
      }
    }
  }

  // Render project info
  const ProjectInfo = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-light tracking-wide text-gray-900 mb-2">
          {title}
        </h3>
        {client && (
          <p className="text-sm tracking-wide text-gray-500 mb-4">
            {client}
          </p>
        )}
      </div>

      <p className="text-lg leading-relaxed text-gray-700 font-light">
        {description}
      </p>

      <div className="space-y-2">
        <p className="text-sm tracking-wide text-gray-500 uppercase">
          Tech Stack
        </p>
        <p className="text-base text-gray-600">
          {techStack}
        </p>
      </div>

      <div className="pt-4">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm tracking-wide text-gray-900 border-b border-gray-900 hover:border-gray-400 transition-colors duration-300"
        >
          View Live Site
        </a>
      </div>
    </div>
  )

  // Render single image
  const SingleImage = ({ image, className = "" }) => (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`relative overflow-hidden bg-gray-100 min-h-[300px] ${className}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-auto object-cover"
        onLoad={() => console.log('Successfully loaded:', image.src)}
      />
    </motion.div>
  )

  // Render double images (side by side)
  const DoubleImages = () => (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, imgIndex) => (
        <motion.div
          key={imgIndex}
          variants={imageVariants}
          className="relative overflow-hidden"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full h-auto object-cover relative z-10"
          />
        </motion.div>
      ))}
    </div>
  )

  // Layout rendering based on layout type
  if (layout === 'image-left') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-12 gap-8 mb-32"
      >
        {/* Image on left */}
        <div className="col-span-7">
          <SingleImage image={images[0]} />
        </div>
        {/* Text on right */}
        <div className="col-span-5">
          <ProjectInfo />
        </div>
      </motion.div>
    )
  }

  if (layout === 'image-left-double') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-12 gap-8 mb-32"
      >
        {/* Double images on left */}
        <div className="col-span-7">
          <DoubleImages />
        </div>
        {/* Text on right */}
        <div className="col-span-5">
          <ProjectInfo />
        </div>
      </motion.div>
    )
  }

  if (layout === 'image-right-double') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-12 gap-8 mb-32"
      >
        {/* Text on left */}
        <div className="col-span-5">
          <ProjectInfo />
        </div>
        {/* Double images on right */}
        <div className="col-span-7">
          <DoubleImages />
        </div>
      </motion.div>
    )
  }

  // Default: image-right (single image)
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-12 gap-8 mb-32"
    >
      {/* Text on left */}
      <div className="col-span-5">
        <ProjectInfo />
      </div>
      {/* Image on right */}
      <div className="col-span-7">
        <SingleImage image={images[0]} />
      </div>
    </motion.div>
  )
}

export default ProjectCard