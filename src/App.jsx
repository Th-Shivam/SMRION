import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Architecture from './pages/Architecture'
import Documentation from './pages/Documentation'
import Onboarding from './pages/Onboarding'

function App() {
  const location = useLocation()
  const isDocsRoute = location.pathname.startsWith('/docs')

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden relative">
      <div className="fixed inset-0 micro-noise z-[100] pointer-events-none"></div>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/docs/*" element={<Documentation />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>

      {!isDocsRoute && <Footer />}
    </div>
  )
}

export default App
