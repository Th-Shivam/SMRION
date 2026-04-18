import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="px-6 md:px-8 py-48 text-center max-w-5xl mx-auto relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 blur-[120px] -z-10 rounded-full"></div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10 italic text-transparent bg-clip-text bg-gradient-to-r from-on-surface to-on-surface-variant drop-shadow-2xl"
      >
        Memory is the Missing Layer.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-on-surface-variant text-xl md:text-2xl mb-16 leading-relaxed dark:opacity-80 max-w-3xl mx-auto"
      >
        Join the infrastructure revolution. Bridge the gap between intelligence and statelessness with SMRION.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8"
      >
        <button className="group px-8 py-5 md:px-10 bg-primary text-on-primary font-headline font-bold text-lg rounded-2xl hover:scale-[1.03] active:scale-95 transition-all shadow-[0_0_40px_rgba(208,188,255,0.4)] hover:shadow-[0_0_60px_rgba(208,188,255,0.7)] flex items-center justify-center gap-3">
          Deploy Infrastructure 
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        <button className="px-8 py-5 md:px-10 bg-surface-container-low border border-outline-variant/30 text-on-surface font-headline font-bold text-lg rounded-2xl hover:bg-surface-container-high hover:border-outline-variant transition-all backdrop-blur-3xl shadow-lg">
          View Architecture Docs
        </button>
      </motion.div>
    </section>
  )
}
