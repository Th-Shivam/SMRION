import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Lifecycle from './components/Lifecycle'
import Evolution from './components/Evolution'
import MemoryStack from './components/MemoryStack'
import Demo from './components/Demo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      <div className="fixed inset-0 micro-noise z-[100]"></div>
      
      <Navbar />
      
      <main className="relative pt-24">
        {/* Grid Background Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(#494454 1px, transparent 1px), linear-gradient(90deg, #494454 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }}
        ></div>
        
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
