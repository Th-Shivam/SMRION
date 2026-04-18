import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Lifecycle from '../components/Lifecycle'
import Evolution from '../components/Evolution'
import MemoryStack from '../components/MemoryStack'
import Demo from '../components/Demo'
import IntroScreen from '../components/IntroScreen'

export default function Landing() {
   return (
      <>
         {/* Intro section acting as top Hero taking full viewport. Made sticky for a push parallax effect */}
         <div className="sticky top-0 z-0 h-[100dvh] w-full">
            <IntroScreen />
         </div>

         {/* Premium overlay transition: Normal line connecting Landing to Main Content */}
         <main className="relative z-20 bg-background border-t border-outline-variant/50 pt-16 pb-16">
            <Hero />
            <Lifecycle />
            <Evolution />
            <MemoryStack />
            <Demo />
         </main>
      </>
   )
}
