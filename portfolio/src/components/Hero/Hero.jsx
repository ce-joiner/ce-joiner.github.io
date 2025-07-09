function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-8 pb-32">
      <div className="min-h-[80vh] flex flex-col">
        {/* Large Name Treatment - Right Aligned, Single Line */}
        <div className="mb-16 text-right">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-gray-900 leading-none">
            CASEY JOINER
          </h1>
        </div>

        {/* Brief Description */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              creative software developer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
