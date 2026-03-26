import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Lifecycle from './components/Lifecycle'
import Evolution from './components/Evolution'
import MemoryStack from './components/MemoryStack'
import Demo from './components/Demo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden relative">
      <div className="fixed inset-0 micro-noise z-[100] pointer-events-none"></div>
      
      <Navbar />
      
      <main className="relative pt-24">
        <Hero />
        <Lifecycle />
        <Evolution />
        <MemoryStack />
        <Demo />
      </main>

      <Footer />
    </div>
  )
}

export default App
