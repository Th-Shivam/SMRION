import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typedLength, setTypedLength] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [heroPhase, setHeroPhase] = useState('typing')

  const userQuery =
    "Wait, didn’t we discuss a new vector indexing strategy last Tuesday? Remind me what we decided on the latency thresholds."

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let cursorInterval
    let actionTimeout
    let resetTimeout

    cursorInterval = window.setInterval(() => {
      setShowCursor((current) => !current)
    }, 530)

    const runTypingLoop = () => {
      setTypedLength(0)
      setHeroPhase('typing')

      actionTimeout = window.setTimeout(() => {
        let index = 0

        const typeNext = () => {
          index += 1
          setTypedLength(index)

          if (index < userQuery.length) {
            const char = userQuery[index]
            const delay = char === ' ' ? 28 : char === ',' || char === '?' || char === '.' ? 110 : 44
            actionTimeout = window.setTimeout(typeNext, delay)
            return
          }

          actionTimeout = window.setTimeout(() => {
            setHeroPhase('processing')

            actionTimeout = window.setTimeout(() => {
              setHeroPhase('response')
              resetTimeout = window.setTimeout(runTypingLoop, 3200)
            }, 950)
          }, 950)
        }

        typeNext()
      }, 500)
    }

    runTypingLoop()

    return () => {
      window.clearInterval(cursorInterval)
      window.clearTimeout(actionTimeout)
      window.clearTimeout(resetTimeout)
    }
  }, [userQuery.length])

  return (
    <section className="relative min-h-[921px] flex flex-col items-center justify-center px-6 overflow-hidden pt-32 pb-32">
      {/* 1. Background Grid Layer */}
      <div className="absolute inset-0 grid-pattern opacity-30 -z-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(208,188,255,0.03),transparent_70%)] rounded-full pointer-events-none -z-20"></div>
      
      {/* Hero Content */}
      <div className="z-10 text-center max-w-5xl relative animate-float-delayed">
        <span className="font-label text-primary/80 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 block drop-shadow-sm">
          Redefining LLM Statefulness
        </span>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.05] text-on-surface mb-8 drop-shadow-2xl">
          AI That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0bcff] via-[#b69df8] to-[#9a7ff0] drop-shadow-[0_0_20px_rgba(208,188,255,0.15)] italic py-2 pr-2">Remembers.</span><br/>Like It Should Have.
        </h1>
        <p className="font-plex text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-[1.72] tracking-[0.015em] text-white/58 font-light">
          SMRION is a persistent memory layer that transforms stateless AI into evolving intelligence. Build models that learn with every interaction.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-primary text-on-primary px-10 py-4 rounded-2xl font-headline font-black text-lg shadow-[0_0_30px_rgba(208,188,255,0.3)] hover:shadow-[0_0_50px_rgba(208,188,255,0.6)] hover:-translate-y-1 transition-all duration-300 group flex items-center justify-center">
            Deploy Memory Layer
            <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button className="bg-[#07070a] border border-white/10 text-on-surface px-10 py-4 rounded-2xl font-headline font-bold text-lg hover:border-white/20 hover:bg-[#0a0a0f] transition-all duration-300 shadow-xl">
            View Documentation
          </button>
        </div>
      </div>
      
      {/* 2. Flow System + 3. Floating UI Cards */}
      <div className="relative w-full max-w-7xl mx-auto z-10 mt-32 md:mt-48">
        
        {/* Parallax Container for entire system */}
        <motion.div 
          animate={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="relative w-full"
        >
          {/* Flow Indicator absolute label */}
          <div className="absolute -top-16 left-12 font-label text-[10px] text-on-surface-variant uppercase tracking-[0.3em] font-bold opacity-60 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow"></span>
            Live Graph Execution
          </div>

          {/* SVG Segmented Flow Line Layer */}
          <div className="absolute top-[45%] left-[10%] right-[10%] -translate-y-1/2 h-40 -z-10 hidden lg:block opacity-80 pointer-events-none">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 100" preserveAspectRatio="none">
              {/* Base segmented path */}
              <path 
                d="M 50,50 L 300,50 C 350,50 380,20 450,20 C 500,20 500,50 500,50 C 500,50 500,80 550,80 C 620,80 650,50 700,50 L 950,50" 
                fill="none" 
                stroke="rgba(255,255,255,0.06)" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Moving Pulse Highlight */}
              <motion.path 
                d="M 50,50 L 300,50 C 350,50 380,20 450,20 C 500,20 500,50 500,50 C 500,50 500,80 550,80 C 620,80 650,50 700,50 L 950,50" 
                fill="none" 
                stroke="url(#flowGradient)" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="150 2500" 
                animate={{
                  strokeDashoffset: heroPhase === 'response' ? [2650, 0] : [2650, 900],
                  opacity: heroPhase === 'typing' ? 0.35 : heroPhase === 'processing' ? 0.85 : 1,
                }}
                transition={{
                  strokeDashoffset: {
                    duration: heroPhase === 'response' ? 3.2 : 4.5,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  opacity: { duration: 0.35, ease: 'easeOut' },
                }}
                style={{ filter: "drop-shadow(0 0 12px rgba(208,188,255,0.7))" }}
              />
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(208,188,255,0)" />
                  <stop offset="50%" stopColor="rgba(208,188,255,1)" />
                  <stop offset="100%" stopColor="rgba(208,188,255,0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-20">
            
            {/* LEFT CARD (User Input) */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full lg:w-[26rem] relative z-30 group"
            >
              <div className="p-7 rounded-3xl rounded-bl-sm border border-white/10 bg-[#07070a]/90 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 rounded-[0.7rem] bg-secondary/15 flex items-center justify-center border border-secondary/20">
                    <span className="material-symbols-outlined text-secondary text-sm">person</span>
                  </div>
                  <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Inbound Query</div>
                </div>
                <p
                  className={`text-sm md:text-base font-body text-on-surface leading-relaxed font-light transition-shadow duration-300 ${
                    typedLength < userQuery.length ? 'drop-shadow-[0_0_8px_rgba(208,188,255,0.08)]' : ''
                  }`}
                >
                  "
                  {userQuery.slice(0, typedLength)}
                  <span
                    className={`inline-block ml-0.5 text-primary/80 transition-opacity duration-150 ${
                      heroPhase !== 'response' && showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    |
                  </span>
                  "
                </p>
              </div>
            </motion.div>
            
            {/* CORE ENGINE DOMINANT CENTER */}
            <div className="relative flex flex-col items-center justify-center p-8 group z-20 xl:mx-8">
              <motion.div 
                animate={{ scale: [1, 1.03, 1], boxShadow: ["0 0 20px rgba(130,112,255,0.08)", "0 0 34px rgba(130,112,255,0.14)", "0 0 20px rgba(130,112,255,0.08)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-40 h-40 md:w-44 md:h-44 rounded-[2rem] border border-white/10 bg-[#050508] flex items-center justify-center relative z-10 shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #111116 0%, #050508 100%)' }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-5xl mb-2 drop-shadow-[0_0_12px_rgba(208,188,255,0.6)]">hub</span>
                  <span className="font-label text-[8px] tracking-[0.4em] font-bold text-primary/80 uppercase">
                    Core Engine
                  </span>
                </div>
              </motion.div>
            </div>
            
            {/* RIGHT CARD (AI Output) */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full lg:w-[28rem] relative z-30 group"
            >
              <AnimatePresence mode="wait">
                {heroPhase === 'response' ? (
                  <motion.div
                    key="response"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="p-7 rounded-3xl rounded-br-sm border border-primary/20 bg-[#07070a]/90 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_30px_rgba(208,188,255,0.03)] group-hover:border-primary/40 group-hover:shadow-[0_20px_50px_rgba(130,112,255,0.1)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-5 border-b border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-[0.7rem] bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(208,188,255,0.4)]">
                          <span className="material-symbols-outlined text-on-primary text-sm">smart_toy</span>
                        </div>
                        <div className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">SMRION Agent</div>
                      </div>
                      <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-md">
                        <span className="material-symbols-outlined text-xs text-primary">history</span>
                        <span className="text-[8px] font-bold text-primary tracking-widest uppercase">Memory Injected</span>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-on-surface leading-relaxed font-light">
                      Yes, last Tuesday we decided on a <span className="bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded font-bold mx-0.5 shadow-sm inline-block">Hybrid HNSW Vector</span> strategy to keep <span className="text-secondary font-bold inline-block border-b border-secondary/40 pb-0.5 mx-0.5">p99 latency under 15ms</span>, bypassing the standard disk sync bottleneck.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="waiting"
                    initial={{ opacity: 0.12 }}
                    animate={{ opacity: heroPhase === 'processing' ? 0.5 : 0.12 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="min-h-[170px] p-7 rounded-3xl rounded-br-sm border border-white/8 bg-[#07070a]/55 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
                  >
                    <div className="flex items-center justify-between mb-5 border-b border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-[0.7rem] bg-white/5 flex items-center justify-center border border-white/8">
                          <span className="material-symbols-outlined text-on-surface-variant text-sm">smart_toy</span>
                        </div>
                        <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">SMRION Agent</div>
                      </div>
                    </div>

                    <div className="h-[72px] flex items-center">
                      {heroPhase === 'processing' ? (
                        <div className="flex items-center gap-3 text-on-surface-variant">
                          <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span>
                          <span className="font-label text-[10px] uppercase tracking-[0.28em] font-bold text-primary/85">
                            Retrieving memory...
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
