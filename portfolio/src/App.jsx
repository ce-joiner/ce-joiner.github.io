import Hero from './components/Hero/Hero'
import Work from './components/Work/Work'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Clock from './components/ui/Clock'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <div className="text-sm tracking-wide">
                <span className="text-gray-600">[ info ]</span>
              </div>
              <div className="text-sm tracking-wide">
                <span className="text-gray-600">[ contact ]</span>
              </div>
              <div className="text-sm tracking-wide">
                <span className="text-gray-600">[ instagram ]</span>
              </div>
            </div>
            <div>
              <Clock />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Continuous Scroll */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen">
          <Hero />
        </section>

        {/* Work Section */}
        <section className="min-h-screen">
          <Work />
        </section>

        {/* About Section */}
        <section className="min-h-screen">
          <About />
        </section>

        {/* Contact Section */}
        <section className="min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App