import { motion } from 'framer-motion'

export default function HybridRetrieval() {
  return (
    <section className="px-6 md:px-8 py-32 max-w-7xl mx-auto relative z-10">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-headline text-4xl md:text-5xl font-bold text-center mb-24 drop-shadow-md text-on-surface"
      >
        Hybrid Retrieval Synergy
      </motion.h3>
      
      <div className="relative">
        {/* Glowing central line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block"></div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-12 relative lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 p-10 lg:p-12 rounded-[2rem] module-card border border-outline-variant/20 relative group overflow-hidden shadow-xl"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/10 blur-[60px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <span className="material-symbols-outlined text-[10rem]">table_rows</span>
            </div>
            <h4 className="font-headline text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-4 text-on-surface">
              <span className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shadow-inner border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                <span className="material-symbols-outlined text-secondary text-3xl">reorder</span>
              </span>
              Page Indexing
            </h4>
            <p className="text-on-surface-variant text-base lg:text-lg mb-8 opacity-80 leading-relaxed max-w-sm">
              Nano-second structured lookup for exact documentation coordinates and technical data specs.
            </p>
            <div className="grid grid-cols-1 gap-5 font-label text-xs tracking-widest text-on-surface/80 uppercase font-bold">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse-glow shadow-[0_0_8px_currentColor]"></div>
                <span>1.2ms Latency Baseline</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full border border-secondary/50"></div>
                <span>Exact-match validation</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="self-center z-20 py-8 lg:py-0 hidden lg:flex"
          >
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-[0_0_50px_rgba(208,188,255,0.5)] animate-pulse-glow relative border hover:scale-110 transition-transform cursor-default">
              <div className="absolute inset-0 rounded-full border border-primary/40 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              <span className="material-symbols-outlined text-on-primary text-4xl">merge</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 p-10 lg:p-12 rounded-[2rem] module-card border border-outline-variant/20 relative group overflow-hidden shadow-xl"
          >
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/10 blur-[60px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <span className="material-symbols-outlined text-[10rem]">bubble_chart</span>
            </div>
            <h4 className="font-headline text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-4 text-on-surface">
              <span className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              </span>
              Semantic Retrieval
            </h4>
            <p className="text-on-surface-variant text-base lg:text-lg mb-8 opacity-80 leading-relaxed max-w-sm">
              High-dimensional vector space exploration to decode subtext, intent, and implicit links.
            </p>
            <div className="grid grid-cols-1 gap-5 font-label text-xs tracking-widest text-on-surface/80 uppercase font-bold">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-glow shadow-[0_0_8px_currentColor]"></div>
                <span>Multi-domain context aware</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full border border-primary/50"></div>
                <span>Latent space mapping</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
