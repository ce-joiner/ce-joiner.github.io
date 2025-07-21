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

  // Render project info (Desktop only)
  const ProjectInfo = () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-light tracking-wide text-gray-900 mb-2">
          {title}
        </h3>
        {client && (
          <p className="text-xs tracking-wide text-gray-500 mb-3 uppercase">
            {client}
          </p>
        )}
      </div>

      <p className="text-base leading-relaxed text-gray-700 font-light">
        {description}
      </p>

      <div className="space-y-1">
        <p className="text-xs tracking-wide text-gray-500 uppercase">
          Tech Stack
        </p>
        <p className="text-sm text-gray-600">
          {techStack}
        </p>
      </div>

      <div className="pt-2">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs tracking-wide text-gray-900 border-b border-gray-900 hover:border-gray-400 transition-colors duration-300 uppercase"
        >
          {liveUrl.includes('github.com') ? 'View the GitHub Repo' : 'View Live Site'}
        </a>
      </div>
    </div>
  )

  // Mobile project info (title first, then content after image)
  const MobileProjectInfo = () => (
    <div className="space-y-4">
      <p className="text-base leading-relaxed text-gray-700 font-light">
        {description}
      </p>
      <div className="space-y-1">
        <p className="text-xs tracking-wide text-gray-500 uppercase">
          Tech Stack
        </p>
        <p className="text-sm text-gray-600">
          {techStack}
        </p>
      </div>
      <div className="pt-2">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs tracking-wide text-gray-900 border-b border-gray-900 hover:border-gray-400 transition-colors duration-300 uppercase"
        >
          {liveUrl.includes('github.com') ? 'View the GitHub Repo' : 'View Live Site'}
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
      className={`relative overflow-hidden bg-gray-100 ${className}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-auto object-cover"
      />
    </motion.div>
  )

  // Render double images - mobile grid, desktop stacked
  const DoubleImages = () => (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-3">
      {images.map((image, imgIndex) => (
        <motion.div
          key={imgIndex}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden bg-gray-100"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      ))}
    </div>
  )

  // LEFT ALIGNED: Image left, text right (Desktop) / Stacked (Mobile)
  if (layout === 'image-left') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 md:mb-32"
      >
        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Title first on mobile */}
          <div>
            <h3 className="text-xl font-light tracking-wide text-gray-900 mb-2">
              {title}
            </h3>
            {client && (
              <p className="text-xs tracking-wide text-gray-500 uppercase">
                {client}
              </p>
            )}
          </div>
          {/* Image */}
          <SingleImage image={images[0]} />
          {/* Description and details */}
          <MobileProjectInfo />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-8 justify-start items-start" style={{ maxWidth: '900px' }}>
          <div className="flex-shrink-0" style={{ maxWidth: '600px' }}>
            <SingleImage image={images[0]} />
          </div>
          <div className="w-80">
            <ProjectInfo />
          </div>
        </div>
      </motion.div>
    )
  }

  // RIGHT ALIGNED: Text left, image right (Desktop) / Stacked (Mobile)
  if (layout === 'image-right') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 md:mb-32"
      >
        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Title first on mobile */}
          <div>
            <h3 className="text-xl font-light tracking-wide text-gray-900 mb-2">
              {title}
            </h3>
            {client && (
              <p className="text-xs tracking-wide text-gray-500 uppercase">
                {client}
              </p>
            )}
          </div>
          {/* Image */}
          <SingleImage image={images[0]} />
          {/* Description and details */}
          <MobileProjectInfo />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-8 justify-end items-start">
          <div className="w-80">
            <ProjectInfo />
          </div>
          <div className="flex-shrink-0" style={{ maxWidth: '600px' }}>
            <SingleImage image={images[0]} />
          </div>
        </div>
      </motion.div>
    )
  }

  // RIGHT ALIGNED DOUBLE: Text left, double images right (Desktop) / Stacked (Mobile)
  if (layout === 'image-right-double') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 md:mb-32"
      >
        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Title first on mobile */}
          <div>
            <h3 className="text-xl font-light tracking-wide text-gray-900 mb-2">
              {title}
            </h3>
            {client && (
              <p className="text-xs tracking-wide text-gray-500 uppercase">
                {client}
              </p>
            )}
          </div>
          {/* Images in 2x2 grid on mobile for more compact display */}
          <DoubleImages />
          {/* Description and details */}
          <MobileProjectInfo />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-8 justify-end items-start">
          <div className="w-80">
            <ProjectInfo />
          </div>
          <div className="flex-shrink-0" style={{ maxWidth: '600px' }}>
            <DoubleImages />
          </div>
        </div>
      </motion.div>
    )
  }

  // Default fallback
  return null
}

export default ProjectCard