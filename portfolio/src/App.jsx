import Hero from './components/Hero/Hero'
import Work from './components/Work/Work'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Navigation from './components/ui/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <Navigation />

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