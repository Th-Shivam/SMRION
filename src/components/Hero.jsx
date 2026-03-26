export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="z-10 text-center max-w-5xl">
        <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-4 block">Redefining LLM Statefulness</span>
        <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.1] text-on-surface mb-8">
          AI That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Remembers.</span><br/>Like It Should Have.
        </h1>
        <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          SMRION is a persistent memory layer that transforms stateless AI into evolving intelligence. Build models that learn with every interaction.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg hover:shadow-[0_0_30px_rgba(208,188,255,0.4)] transition-all duration-500 group">
            Deploy Memory Layer
            <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button className="glass-panel text-on-surface px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-surface-container-highest transition-all duration-300">
            View Documentation
          </button>
        </div>
      </div>
      {/* Floating UI Demo */}
      <div className="relative mt-24 w-full max-w-4xl mx-auto z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="glass-panel p-6 rounded-2xl relative">
            <div className="absolute -top-3 left-6 bg-surface px-3 py-1 text-[10px] font-label text-primary border border-primary/20 rounded-full">USER QUERY</div>
            <p className="text-sm font-label text-on-surface-variant italic">"Recall the architecture diagram we discussed last Tuesday regarding the vector node sync."</p>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="h-[1px] w-full glow-line relative">
              <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-primary neural-node animate-pulse"></div>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border-primary/30 ring-1 ring-primary/20 relative shadow-[0_0_40px_rgba(160,120,255,0.1)]">
            <div className="absolute -top-3 left-6 bg-primary text-on-primary px-3 py-1 text-[10px] font-label font-bold rounded-full">MEMORY RETRIEVED</div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-primary/20 rounded"></div>
              <div className="h-1.5 w-3/4 bg-primary/20 rounded"></div>
              <div className="flex items-center gap-2 mt-4">
                <span className="material-symbols-outlined text-primary text-sm">database</span>
                <span className="text-[10px] font-label text-primary">Node ID: 8821-X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
