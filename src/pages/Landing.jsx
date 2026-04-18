import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Lifecycle from '../components/Lifecycle'
import Evolution from '../components/Evolution'
import MemoryStack from '../components/MemoryStack'
import Demo from '../components/Demo'
import IntroScreen from '../components/IntroScreen'

export default function Landing() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.skipIntro) {
      // Instantly scroll past the intro screen to the main content
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight, behavior: 'instant' });
      }, 10);
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.key]);

  return (
    <>
      {/* Intro section acting as top Hero taking full viewport. Made sticky for a push parallax effect */}
      <div className="sticky top-0 z-0 h-[100dvh] w-full snap-always snap-start">
        <IntroScreen />
      </div>

      {/* Premium overlay transition: Normal line connecting Landing to Main Content */}
      <main className="relative z-20 bg-background border-t border-outline-variant/50 pt-16 pb-16 snap-always snap-start min-h-screen">
        <Hero />
        <Lifecycle />
        <Evolution />
        <MemoryStack />
        <Demo />
      </main>
    </>
  )
}
