export default function Lifecycle() {
  return (
    <section className="py-32 px-8 bg-surface-container-low/30 relative">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="font-headline text-4xl font-bold mb-4">The Neural Lifecycle</h2>
        <p className="font-body text-on-surface-variant max-w-xl mx-auto">Continuous context injection through high-velocity retrieval paths.</p>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4 group">
          <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-primary group-hover:shadow-[0_0_20px_rgba(208,188,255,0.3)] transition-all duration-500">
            <span className="material-symbols-outlined text-3xl">input</span>
          </div>
          <span className="font-label text-xs tracking-widest uppercase">User Input</span>
        </div>
        <div className="flex-1 h-px bg-outline-variant/30 relative hidden md:block">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-primary glow-line animate-[move_3s_infinite_linear]"></div>
        </div>
        <div className="flex flex-col items-center gap-4 group">
          <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-secondary group-hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-500">
            <span className="material-symbols-outlined text-3xl">psychology</span>
          </div>
          <span className="font-label text-xs tracking-widest uppercase">Memory Layer</span>
        </div>
        <div className="flex-1 h-px bg-outline-variant/30 relative hidden md:block">
          <div className="absolute top-0 left-1/3 h-full w-1/3 bg-secondary glow-line"></div>
        </div>
        <div className="flex flex-col items-center gap-4 group">
          <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-tertiary group-hover:shadow-[0_0_20px_rgba(229,226,225,0.3)] transition-all duration-500">
            <span className="material-symbols-outlined text-3xl">memory</span>
          </div>
          <span className="font-label text-xs tracking-widest uppercase">Context Injection</span>
        </div>
        <div className="flex-1 h-px bg-outline-variant/30 relative hidden md:block">
          <div className="absolute top-0 left-2/3 h-full w-1/3 bg-primary glow-line"></div>
        </div>
        <div className="flex flex-col items-center gap-4 group">
          <div className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center text-primary border-primary/40 shadow-[0_0_30px_rgba(160,120,255,0.2)]">
            <span className="material-symbols-outlined text-4xl">rocket_launch</span>
          </div>
          <span className="font-label text-xs font-bold tracking-widest uppercase text-primary">Smarter Output</span>
        </div>
      </div>
    </section>
  );
}
