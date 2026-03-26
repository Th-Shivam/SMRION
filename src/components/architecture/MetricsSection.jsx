import { motion } from 'framer-motion'

export default function MetricsSection() {
  return (
    <section className="px-6 md:px-8 py-32 max-w-7xl mx-auto z-10 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="module-card p-10 md:p-14 rounded-[2.5rem] border border-outline-variant/20 relative overflow-hidden group shadow-[0_0_80px_rgba(208,188,255,0.05)]"
      >
        <div className="absolute inset-0 grid-pattern opacity-30 group-hover:opacity-50 transition-opacity duration-1000"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16 relative z-10">
          <div>
            <h3 className="font-headline text-3xl md:text-4xl font-extrabold mb-3 text-on-surface drop-shadow-sm">
              Infrastructure Health
            </h3>
            <p className="font-label text-[10px] md:text-xs text-on-surface-variant uppercase tracking-[0.4em] font-bold">
              Real-time Global Node Telemetry
            </p>
          </div>
          <div className="px-6 py-3.5 bg-primary/10 border border-primary/30 rounded-full flex items-center gap-3 shadow-lg shadow-primary/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-glow shadow-[0_0_8px_currentColor]"></span>
            <span className="font-label text-xs tracking-widest text-primary font-bold uppercase">System Operational: 99.999%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-4">
            <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Cycle Latency</span>
            <div className="text-5xl font-headline font-black text-primary tracking-tighter drop-shadow-sm">38<span className="text-xl ml-1 opacity-60">ms</span></div>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden border border-outline-variant/10">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-primary shadow-[0_0_15px_#d0bcff]"></motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-4">
            <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Accuracy Index</span>
            <div className="text-5xl font-headline font-black text-secondary tracking-tighter drop-shadow-sm">99.4<span className="text-xl ml-1 opacity-60">%</span></div>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden border border-outline-variant/10">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '98%' }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-secondary shadow-[0_0_15px_#adc6ff]"></motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="space-y-4">
            <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Memory Fabric</span>
            <div className="text-5xl font-headline font-black text-on-surface tracking-tighter drop-shadow-sm">1.2<span className="text-xl ml-1 opacity-60">PB</span></div>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden border border-outline-variant/10">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-on-surface/40"></motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="space-y-4">
            <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Compute Load</span>
            <div className="text-5xl font-headline font-black text-on-surface-variant tracking-tighter drop-shadow-sm">12<span className="text-xl ml-1 opacity-60">%</span></div>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden border border-outline-variant/10">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '12%' }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-on-surface-variant/40"></motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
