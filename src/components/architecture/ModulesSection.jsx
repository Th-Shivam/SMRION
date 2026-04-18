import { motion } from 'framer-motion'

export default function ModulesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const modules = [
    { title: "Memory Engine", icon: "storage", color: "primary", desc: "L1-optimized ephemeral storage for high-velocity temporal data sequencing." },
    { title: "Indexing System", icon: "rebase_edit", color: "secondary", desc: "Massively parallelized token-to-node mapping for sub-ms coordinate lookups." },
    { title: "Retrieval Engine", icon: "hub", color: "primary", desc: "Distributed vector clustering utilizing weight-based priority routing." },
    { title: "Context Layer", icon: "layers", color: "secondary", desc: "Semantic heuristic formatting tailored to model-specific context windows." },
    { title: "Relevance Engine", icon: "analytics", color: "primary", desc: "Real-time validation filtering to effectively zero-out LLM hallucinations." },
    { title: "Model Gateway", icon: "router", color: "secondary", desc: "Low-level unified API interface supporting 40+ frontier LLM architectures." },
  ]

  return (
    <section className="px-6 md:px-8 py-32 max-w-7xl mx-auto z-10 relative">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-headline text-4xl md:text-5xl font-bold mb-20 text-center text-on-surface drop-shadow-md"
      >
        Hardware-Accelerated Modules
      </motion.h3>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative"
      >
        <div className="absolute inset-0 border border-primary/5 pointer-events-none rounded-[2rem] hidden lg:block"></div>
        
        {modules.map((mod, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            className="p-8 rounded-[2rem] module-card border border-outline-variant/20 flex gap-6 hover:border-primary/40 focus:border-primary/40 transition-all duration-500 group relative cursor-pointer hover:shadow-[0_0_30px_rgba(208,188,255,0.1)] hover:scale-[1.02]"
          >
            <div className={`w-14 h-14 shrink-0 rounded-2xl bg-${mod.color}/10 flex items-center justify-center group-hover:bg-${mod.color}/20 transition-colors shadow-inner border border-${mod.color}/20`}>
              <span className={`material-symbols-outlined text-${mod.color} text-3xl`}>{mod.icon}</span>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-2 text-on-surface font-headline tracking-tight">{mod.title}</h5>
              <p className="text-sm text-on-surface-variant leading-relaxed dark:opacity-80">{mod.desc}</p>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </section>
  )
}
