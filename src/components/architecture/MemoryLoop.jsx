import { motion } from 'framer-motion'

const loopNodes = [
  { label: 'Capture', icon: 'capture', detail: 'Signal Intake' },
  { label: 'Store', icon: 'database', detail: 'Persistent Write' },
  { label: 'Retrieve', icon: 'manage_search', detail: 'Context Lookup' },
  { label: 'Inject', icon: 'input_circle', detail: 'Prompt Merge' },
  { label: 'Learn', icon: 'model_training', detail: 'Pattern Tuning' },
  { label: 'Repeat', icon: 'autorenew', detail: 'Cycle Restart' },
]

export default function MemoryLoop() {
  return (
    <section className="px-6 md:px-8 py-32 md:py-48 bg-surface-container-lowest dark:bg-[#050505] border-y border-outline-variant/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="font-headline text-3xl md:text-5xl font-extrabold mb-16 md:mb-24 tracking-tight text-on-surface"
        >
          The Persistent Memory Loop
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full h-[320px] sm:h-[420px] lg:h-[700px] flex items-center justify-center"
        >
          <div className="absolute w-[700px] h-[700px] scale-[0.45] sm:scale-[0.6] lg:scale-100 origin-center flex items-center justify-center">
            
            {/* SVG Orbit layer */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 700 700"
            >
              <defs>
                <linearGradient id="orbitHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(208,188,255,0)" />
                  <stop offset="50%" stopColor="rgba(208,188,255,1)" />
                  <stop offset="100%" stopColor="rgba(208,188,255,0)" />
                </linearGradient>
              </defs>

              {/* Base Orbit (Thin, Subtle) */}
              <circle
                cx="350"
                cy="350"
                r="220"
                fill="none"
                stroke="currentColor"
                className="text-outline-variant/10"
                strokeWidth="1"
              />

              {/* Moving Orbit Arc */}
              <motion.circle
                cx="350"
                cy="350"
                r="220"
                fill="none"
                stroke="url(#orbitHighlight)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="300 1082" 
                animate={{ strokeDashoffset: [1382, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                transform="rotate(-90 350 350)"
              />

              {/* Connectors */}
              {loopNodes.map((_, index) => {
                const angle = (index * 60 - 90) * (Math.PI / 180)
                const innerR = 220
                const outerR = 270 
                
                const x1 = 350 + innerR * Math.cos(angle)
                const y1 = 350 + innerR * Math.sin(angle)
                const x2 = 350 + outerR * Math.cos(angle)
                const y2 = 350 + outerR * Math.sin(angle)

                return (
                  <line
                    key={index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    className="text-outline-variant/20"
                    strokeWidth="1.5"
                  />
                )
              })}
            </svg>

            {/* Nodes */}
            {loopNodes.map((node, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180)
              const radius = 300 
              const x = 350 + radius * Math.cos(angle)
              const y = 350 + radius * Math.sin(angle)

              return (
                <div
                  key={node.label}
                  className="absolute flex flex-col items-center group z-10"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-surface-container-low dark:bg-[#07070a] border border-outline-variant/20 dark:border-white/10 transition-all duration-300 shadow-lg cursor-default group-hover:border-primary/40 group-hover:bg-surface-container-high dark:group-hover:bg-[#0a0a0f] group-hover:-translate-y-1">
                    <span className="material-symbols-outlined text-on-surface-variant text-2xl group-hover:text-primary transition-colors">
                      {node.icon}
                    </span>
                  </div>

                  <span className="font-label text-[10px] mt-4 uppercase tracking-[0.3em] font-bold text-on-surface bg-surface-container-lowest dark:bg-[#050505] px-2 py-0.5">
                    {node.label}
                  </span>
                  <span className="font-label text-[8px] mt-1 uppercase tracking-[0.2em] text-on-surface-variant dark:opacity-70 bg-surface-container-lowest dark:bg-[#050505] px-2">
                    {node.detail}
                  </span>
                </div>
              )
            })}

            {/* DOMINANT CENTER CORE */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-20 w-[260px] h-[260px] rounded-full flex flex-col items-center justify-center border border-outline-variant/10 dark:border-white/5 bg-surface-container-low dark:bg-transparent"
              style={{
                background: 'linear-gradient(135deg, #111116 0%, #050508 100%)',
                boxShadow: '0 0 50px rgba(130,112,255,0.06), inset 0 0 20px rgba(255,255,255,0.02)',
              }}
            >
              {/* Subtle sharp inner ring */}
              <div className="absolute inset-[4px] rounded-full border border-primary/20 bg-surface-container-lowest dark:bg-[#07070a] shadow-inner"></div>
              
              <div className="relative z-10 flex flex-col items-center mt-2">
                <div className="text-on-surface font-headline font-black text-3xl text-center leading-[1.1] tracking-tighter drop-shadow-sm">
                  SMRION
                  <br />
                  FABRIC
                </div>
                <div className="w-8 h-[2px] bg-primary/30 my-4"></div>
                <span className="text-[10px] text-primary/70 font-label uppercase tracking-widest font-bold">
                  Core Engine
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
