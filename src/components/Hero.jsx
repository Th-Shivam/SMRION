export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex flex-col items-center justify-center px-6 overflow-hidden grid-pattern vignette">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 micro-noise"></div>
      
      <div className="z-10 text-center max-w-5xl mt-12 animate-float-delayed">
        <span className="font-label text-primary text-sm font-bold tracking-[0.3em] uppercase mb-6 block drop-shadow-[0_0_10px_rgba(208,188,255,0.5)]">Redefining LLM Statefulness</span>
        <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[1] text-on-surface mb-8 drop-shadow-2xl">
          AI That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary drop-shadow-[0_0_30px_rgba(208,188,255,0.4)]">Remembers.</span><br/>Like It Should Have.
        </h1>
        <p className="font-body text-on-surface-variant text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          SMRION is a persistent memory layer that transforms stateless AI into evolving intelligence. Build models that learn with every interaction.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="bg-primary text-on-primary px-10 py-5 rounded-xl font-headline font-black text-lg shadow-[0_0_40px_rgba(208,188,255,0.5)] hover:shadow-[0_0_60px_rgba(208,188,255,0.8)] hover:-translate-y-1 transition-all duration-300 group">
            Deploy Memory Layer
            <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button className="module-card text-on-surface px-10 py-5 rounded-xl font-headline font-bold text-lg hover:border-primary/40 transition-all duration-300">
            View Documentation
          </button>
        </div>
      </div>
      
      {/* Floating UI Demo */}
      <div className="relative mt-32 w-full max-w-5xl mx-auto z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="module-card p-8 rounded-2xl relative animate-float">
            <div className="absolute -top-4 left-6 bg-surface-container-highest px-4 py-1.5 text-xs font-label text-primary border border-primary/30 rounded-full shadow-[0_0_15px_rgba(208,188,255,0.2)]">USER QUERY</div>
            <p className="text-base font-label text-on-surface-variant italic mt-2">"Recall the architecture diagram we discussed last Tuesday regarding the vector node sync."</p>
          </div>
          
          <div className="hidden md:flex justify-center relative">
            <div className="h-1 w-full bg-outline-variant/30 rounded-full relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full w-full bg-primary glow-line animate-flow"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary neural-node animate-pulse-glow z-10"></div>
          </div>
          
          <div className="module-card p-8 rounded-2xl border-primary/50 relative shadow-[0_0_60px_rgba(160,120,255,0.2)] animate-float-delayed">
            <div className="absolute -top-4 left-6 bg-primary text-on-primary px-4 py-1.5 text-xs font-label font-bold rounded-full shadow-[0_0_20px_rgba(208,188,255,0.5)]">MEMORY RETRIEVED</div>
            <div className="space-y-3 mt-2">
              <div className="h-2 w-full bg-primary/30 rounded-full animate-pulse"></div>
              <div className="h-2 w-3/4 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-base">database</span>
                <span className="text-xs font-label text-primary font-bold tracking-wider">NODE_ID: 8821-X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
