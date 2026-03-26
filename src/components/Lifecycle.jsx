export default function Lifecycle() {
  return (
    <section className="py-40 px-8 bg-surface-container-lowest relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[150px] pointer-events-none rounded-[100%] scale-[2] origin-top"></div>
      <div className="max-w-7xl mx-auto text-center mb-32 relative z-10">
        <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-6 text-on-surface">The Neural Lifecycle</h2>
        <p className="font-body text-on-surface-variant text-xl max-w-2xl mx-auto font-light leading-relaxed">Continuous context injection through high-velocity retrieval paths.</p>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto z-10">
        <div className="flex flex-col items-center gap-6 group z-20">
          <div className="w-20 h-20 rounded-full module-card flex items-center justify-center text-primary shadow-[0_0_30px_rgba(208,188,255,0.1)] group-hover:shadow-[0_0_40px_rgba(208,188,255,0.4)] transition-all duration-500 group-hover:scale-110">
            <span className="material-symbols-outlined text-4xl">input</span>
          </div>
          <span className="font-label text-sm tracking-widest uppercase font-bold text-on-surface-variant group-hover:text-primary transition-colors">User Input</span>
        </div>
        <div className="flex-1 h-1 bg-outline-variant/20 relative hidden md:block rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-primary glow-line animate-flow"></div>
        </div>
        <div className="flex flex-col items-center gap-6 group z-20">
          <div className="w-20 h-20 rounded-full module-card flex items-center justify-center text-secondary shadow-[0_0_30px_rgba(173,198,255,0.1)] group-hover:shadow-[0_0_40px_rgba(173,198,255,0.4)] transition-all duration-500 group-hover:scale-110">
            <span className="material-symbols-outlined text-4xl">psychology</span>
          </div>
          <span className="font-label text-sm tracking-widest uppercase font-bold text-on-surface-variant group-hover:text-secondary transition-colors">Memory Layer</span>
        </div>
        <div className="flex-1 h-1 bg-outline-variant/20 relative hidden md:block rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-secondary glow-line animate-flow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="flex flex-col items-center gap-6 group z-20">
          <div className="w-20 h-20 rounded-full module-card flex items-center justify-center text-tertiary-fixed shadow-[0_0_30px_rgba(229,226,225,0.1)] group-hover:shadow-[0_0_40px_rgba(229,226,225,0.4)] transition-all duration-500 group-hover:scale-110">
            <span className="material-symbols-outlined text-4xl">memory</span>
          </div>
          <span className="font-label text-sm tracking-widest uppercase font-bold text-on-surface-variant group-hover:text-tertiary-fixed transition-colors">Context Injection</span>
        </div>
        <div className="flex-1 h-1 bg-outline-variant/20 relative hidden md:block rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-primary glow-line animate-flow" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="flex flex-col items-center gap-6 group z-20">
          <div className="w-24 h-24 rounded-2xl module-card flex items-center justify-center text-primary border-primary/50 shadow-[0_0_50px_rgba(208,188,255,0.3)] group-hover:shadow-[0_0_70px_rgba(208,188,255,0.6)] transition-all duration-500 group-hover:-translate-y-2">
            <span className="material-symbols-outlined text-5xl animate-pulse-glow">rocket_launch</span>
          </div>
          <span className="font-label text-sm font-black tracking-widest uppercase text-primary drop-shadow-[0_0_10px_rgba(208,188,255,0.5)]">Smarter Output</span>
        </div>
      </div>
    </section>
  );
}
