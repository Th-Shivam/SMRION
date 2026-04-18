import { motion } from 'framer-motion'

export default function CorePipeline() {
  const nodeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="px-8 py-32 md:py-40 relative">
      <div className="absolute inset-0 bg-background z-[-1] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 relative"
        >
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
            SMRION Core Pipeline
          </h2>
          <p className="font-label text-[11px] md:text-xs text-primary uppercase tracking-[0.4em] font-bold animate-pulse-glow">
            Real-time Data Fabric
          </p>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 blur-[60px] rounded-full point-events-none"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-0 relative">
          
          {/* Flow Line Background (Desktop) */}
          <div className="absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-outline-variant/10 hidden lg:block overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-flow"></div>
          </div>

          {/* Input Node */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} variants={nodeVariants}
            className="flex flex-col items-center group relative z-10 w-full lg:w-48 mb-12 lg:mb-0"
          >
            <div className="w-24 h-24 rounded-[2rem] module-card border border-primary/40 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(208,188,255,0.25)] group-hover:scale-105 transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-1">input</span>
            </div>
            <div className="mt-6 text-center">
              <span className="block font-label text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Inbound</span>
              <span className="block text-sm font-bold text-on-surface mt-1">Context Ingest</span>
            </div>
          </motion.div>

          {/* Connector */}
          <div className="lg:flex-1 h-20 lg:h-[2px] w-[2px] lg:w-auto relative lg:mx-4 hidden lg:block">
            <div className="absolute inset-0 bg-primary/10 lg:h-full lg:w-full w-[1px] h-full left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0"></div>
            <div className="absolute top-0 bottom-0 lg:left-0 lg:right-0 w-[2px] lg:h-[2px] bg-primary animate-flow lg:animate-flow"></div>
          </div>

          {/* Processing Stack */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 md:gap-8 relative z-10">
            
            {/* Node 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} variants={nodeVariants} className="w-40 sm:w-44 p-6 rounded-[1.8rem] module-card border border-outline-variant/20 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-500 group cursor-pointer hover:bg-surface-container-high hover:shadow-[0_0_20px_rgba(208,188,255,0.1)]">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors shadow-inner">
                <span className="material-symbols-outlined text-secondary text-2xl">sensor_window</span>
              </div>
              <h5 className="text-[10px] font-label font-bold text-primary mb-2 uppercase tracking-widest">Capture</h5>
              <p className="text-[10px] text-on-surface-variant leading-tight dark:opacity-70">Intent signal isolation</p>
            </motion.div>

            {/* Node 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} variants={nodeVariants} className="w-40 sm:w-44 p-6 rounded-[1.8rem] module-card border border-outline-variant/20 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-500 group cursor-pointer hover:bg-surface-container-high hover:shadow-[0_0_20px_rgba(208,188,255,0.1)]">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors shadow-inner">
                <span className="material-symbols-outlined text-secondary text-2xl">fact_check</span>
              </div>
              <h5 className="text-[10px] font-label font-bold text-primary mb-2 uppercase tracking-widest">Indexing</h5>
              <p className="text-[10px] text-on-surface-variant leading-tight dark:opacity-70">Parallel token mapping</p>
            </motion.div>

            {/* Node 3 (ACTIVE) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} variants={nodeVariants} className="w-40 sm:w-44 p-6 rounded-[1.8rem] module-card border border-primary/40 flex flex-col items-center text-center scale-105 shadow-[0_0_30px_rgba(208,188,255,0.2)] relative bg-surface-container-high !border-primary/50">
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary rounded-full animate-pulse-glow shadow-[0_0_15px_#d0bcff]"></div>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl drop-shadow-[0_0_5px_currentColor]">psychology</span>
              </div>
              <h5 className="text-[10px] font-label font-bold text-primary mb-2 uppercase tracking-widest">Retrieval</h5>
              <p className="text-[10px] text-on-surface-variant leading-tight dark:opacity-90">Semantic search cycle</p>
            </motion.div>

            {/* Node 4 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} variants={nodeVariants} className="w-40 sm:w-44 p-6 rounded-[1.8rem] module-card border border-outline-variant/20 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-500 group cursor-pointer hover:bg-surface-container-high hover:shadow-[0_0_20px_rgba(208,188,255,0.1)]">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors shadow-inner">
                <span className="material-symbols-outlined text-secondary text-2xl">layers</span>
              </div>
              <h5 className="text-[10px] font-label font-bold text-primary mb-2 uppercase tracking-widest">Injection</h5>
              <p className="text-[10px] text-on-surface-variant leading-tight dark:opacity-70">Prompt assembly</p>
            </motion.div>

          </div>

          {/* Connector */}
          <div className="lg:flex-1 h-20 lg:h-[2px] w-[2px] lg:w-auto relative lg:mx-4 hidden lg:block">
            <div className="absolute inset-0 bg-primary/10 lg:h-full lg:w-full w-[1px] h-full left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0"></div>
            <div className="absolute top-0 bottom-0 lg:left-0 lg:right-0 w-[2px] lg:h-[2px] bg-primary animate-flow lg:animate-flow"></div>
          </div>

          {/* Output Node */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} variants={nodeVariants}
            className="flex flex-col items-center group relative z-10 w-full lg:w-48 mt-12 lg:mt-0"
          >
            <div className="w-24 h-24 rounded-[2rem] bg-primary text-on-primary-container flex flex-col items-center justify-center shadow-[0_0_30px_rgba(208,188,255,0.4)] group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(208,188,255,0.6)] transition-all duration-500">
              <span className="material-symbols-outlined text-4xl mb-1 text-on-primary">smart_toy</span>
            </div>
            <div className="mt-6 text-center">
              <span className="block font-label text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Outbound</span>
              <span className="block text-sm font-bold text-on-surface mt-1">Reasoning Agent</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
