import { motion } from 'framer-motion'

export default function ProblemSection() {
  return (
    <section className="px-6 md:px-8 py-32 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-error/10 border border-error/20 text-error text-[10px] font-label tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(255,180,171,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span> SYSTEM DEGRADATION DETECTED
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface drop-shadow-md">
            The Problem of Statelessness
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
            Traditional AI models exist in an amnesic loop. Every request is a hard reset, destroying high-value context and forced reasoning continuity.
          </p>
          <div className="space-y-4">
            <div className="group flex items-start gap-4 p-6 rounded-2xl bg-surface-container-low border border-error/10 hover:border-error/30 transition-all module-card shadow-lg hover:shadow-[0_0_30px_rgba(255,180,171,0.05)]">
              <span className="material-symbols-outlined text-error p-3 bg-error/10 rounded-xl group-hover:scale-110 transition-transform">link_off</span>
              <div>
                <h4 className="font-bold text-on-surface text-lg font-headline">Context Volatility</h4>
                <p className="text-sm text-on-surface-variant mt-1 opacity-100 dark:opacity-70 leading-relaxed">Interaction states are wiped every 2048 tokens, forcing expensive re-processing.</p>
              </div>
            </div>
            <div className="group flex items-start gap-4 p-6 rounded-2xl bg-surface-container-low border border-error/10 hover:border-error/30 transition-all module-card shadow-lg hover:shadow-[0_0_30px_rgba(255,180,171,0.05)]">
              <span className="material-symbols-outlined text-error p-3 bg-error/10 rounded-xl group-hover:scale-110 transition-transform">history</span>
              <div>
                <h4 className="font-bold text-on-surface text-lg font-headline">Zero Continuity</h4>
                <p className="text-sm text-on-surface-variant mt-1 opacity-100 dark:opacity-70 leading-relaxed">Cross-session intelligence is impossible without manual, high-latency storage.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] w-full module-card rounded-[2rem] overflow-hidden group shadow-[0_0_50px_rgba(255,180,171,0.08)]"
        >
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 p-8 gap-4 opacity-40">
            <div className="border border-error/20 rounded-xl flex items-center justify-center animate-flicker">
              <span className="material-symbols-outlined text-error/40 text-3xl">block</span>
            </div>
            <div className="col-span-2 relative h-[2px] self-center">
              <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #ffb4ab 0px, #ffb4ab 4px, transparent 4px, transparent 8px)', opacity: 0.2 }}></div>
            </div>
            <div className="border border-error/20 rounded-xl flex items-center justify-center animate-flicker" style={{ animationDelay: '0.5s' }}>
              <span className="material-symbols-outlined text-error/40 text-3xl">cloud_off</span>
            </div>
            <div className="col-start-4 border border-error/20 rounded-xl flex items-center justify-center animate-flicker">
              <span className="material-symbols-outlined text-error/40 text-3xl">signal_disconnected</span>
            </div>
            <div className="row-start-2 col-start-2 border border-error/20 rounded-xl flex items-center justify-center animate-flicker" style={{ animationDelay: '1.2s' }}>
              <span className="material-symbols-outlined text-error/40 text-3xl">hourglass_empty</span>
            </div>
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-low/60 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-error text-4xl md:text-5xl font-headline font-black tracking-tighter mb-3 animate-pulse drop-shadow-[0_0_15px_rgba(255,180,171,0.5)]">RE-LEARNING...</div>
              <div className="font-label text-xs text-error uppercase tracking-[0.3em] font-bold">State Loss: 100% | Latency Overflow</div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end border-t border-error/10 pt-4">
            <div className="space-y-2">
              <div className="h-1.5 w-32 bg-error/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-error animate-flow"></div>
              </div>
              <span className="text-[10px] font-label text-error/80 font-bold uppercase tracking-widest">FRAG_BUFFER_OVERFLOW</span>
            </div>
            <span className="text-error/60 material-symbols-outlined text-3xl drop-shadow-[0_0_10px_rgba(255,180,171,0.5)]">warning</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
