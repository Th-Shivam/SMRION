import { motion } from 'framer-motion'

export default function ArchitectureHero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(208,188,255,0.08),transparent_50%)] pointer-events-none animate-pulse-glow"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <span className="font-label text-primary uppercase tracking-[0.4em] mb-6 block animate-flicker text-xs md:text-sm">
          INFRASTRUCTURE V4.0.2 LIVE
        </span>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 bg-gradient-to-b from-on-surface via-on-surface to-on-surface-variant bg-clip-text text-transparent leading-none drop-shadow-2xl">
          The Architecture <br />of Memory
        </h1>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed opacity-80">
          Converting stateless LLMs into sentient, high-performance reasoning engines via a unified, persistent memory fabric.
        </p>
      </motion.div>
    </section>
  )
}
