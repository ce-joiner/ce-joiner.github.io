function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-32">
      <div className="min-h-[80vh] flex flex-col justify-center">
        {/* Large Name Treatment */}
        <div className="mb-16">
          <h1 className="text-8xl font-light tracking-tight text-gray-900 leading-none">
            CASEY
          </h1>
          <h1 className="text-8xl font-light tracking-tight text-gray-900 leading-none">
            JOINER
          </h1>
        </div>

        {/* Brief Description */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              Creative software developer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
