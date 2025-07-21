import Hero from './components/Hero/Hero'
import Introduction from './components/ui/Introduction'
import Work from './components/Work/Work'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Navigation from './components/ui/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-custom-white font-sans">
      {/* Navigation */}
      <Navigation />

      {/* Main Content - Continuous Scroll */}
      <main className="pt-16">
        {/* Hero Section */}
        <section>
          <Hero />
        </section>

        {/* Introduction Section */}
        <section>
          <Introduction />
        </section>

        {/* Work Section */}
        <section>
          <Work />
        </section>

        {/* About Section */}
        <section>
          <About />
        </section>

        {/* Contact Section */}
        <section>
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App