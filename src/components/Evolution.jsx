export default function Evolution() {
  return (
    <section className="relative py-40 overflow-hidden bg-surface-container-lowest">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-outline-variant/0 via-primary/50 to-outline-variant/0 z-20 hidden md:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface border border-primary px-4 py-2 rounded-full shadow-[0_0_30px_rgba(208,188,255,0.3)] z-30">
          <span className="font-label text-[10px] tracking-widest uppercase text-primary font-bold whitespace-nowrap">SMRION Memory Layer</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-4">The Evolution of Logic</h2>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-lg">From stateless responses to evolving intelligence — powered by memory.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
          {/* LEFT SIDE: Stateless AI */}
          <div className="space-y-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-right md:pr-12">
              <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2 block">Before SMRION</span>
              <h3 className="font-headline text-3xl font-light text-on-surface-variant">Stateless AI</h3>
            </div>
            <div className="relative h-[400px] flex items-center justify-center">
              {/* Visual: Fragmented/Fading Nodes */}
              <div className="absolute inset-0 flex flex-wrap gap-4 items-center justify-center p-8">
                <div className="w-12 h-12 rounded-lg bg-outline-variant/10 border border-outline-variant/20 flex items-center justify-center node-broken animate-pulse">
                  <span className="material-symbols-outlined text-outline-variant/30">blur_on</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-outline-variant/10 border border-outline-variant/20 flex items-center justify-center node-broken translate-y-8">
                  <span className="material-symbols-outlined text-outline-variant/30">cloud_off</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-outline-variant/10 border border-outline-variant/20 flex items-center justify-center node-broken -translate-x-4">
                  <span className="material-symbols-outlined text-outline-variant/30">history</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-outline-variant/10 border border-outline-variant/20 flex items-center justify-center node-broken translate-x-12 -translate-y-4">
                  <span className="material-symbols-outlined text-outline-variant/30">sync_problem</span>
                </div>
              </div>
              {/* Layered Glass Panel */}
              <div className="glass-panel p-8 rounded-3xl w-full max-w-sm absolute -rotate-2 transform transition-transform hover:rotate-0">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-on-surface-variant/70">
                    <span className="material-symbols-outlined mt-1 text-sm">remove_circle_outline</span>
                    <div>
                      <p className="font-bold text-sm uppercase font-label">No memory retention</p>
                      <p className="text-xs">Each request is a fresh start with zero context.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 text-on-surface-variant/70">
                    <span className="material-symbols-outlined mt-1 text-sm">history</span>
                    <div>
                      <p className="font-bold text-sm uppercase font-label">Context resets every session</p>
                      <p className="text-xs">Limited to short-term context window tokens.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 text-on-surface-variant/70">
                    <span className="material-symbols-outlined mt-1 text-sm">fragment_stack</span>
                    <div>
                      <p className="font-bold text-sm uppercase font-label">Fragmented intelligence</p>
                      <p className="text-xs">Identical users receive generic responses.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE: SMRION */}
          <div className="space-y-12 group">
            <div className="md:pl-12">
              <span className="font-label text-xs tracking-widest uppercase text-primary mb-2 block">After SMRION</span>
              <h3 className="font-headline text-3xl font-bold text-on-surface">Evolving Intelligence</h3>
            </div>
            <div className="relative h-[400px] flex items-center justify-center">
              {/* Visual: Glowing Connected Neural Network */}
              <div className="absolute inset-0 z-0">
                <svg className="w-full h-full opacity-30" viewBox="0 0 400 400">
                  <circle className="animate-pulse" cx="150" cy="150" fill="#d0bcff" r="3"></circle>
                  <circle className="animate-pulse" cx="250" cy="180" fill="#d0bcff" r="3" style={{ animationDelay: '1s' }}></circle>
                  <circle className="animate-pulse" cx="180" cy="250" fill="#d0bcff" r="3" style={{ animationDelay: '2s' }}></circle>
                  <path className="animate-flow" d="M150 150 L250 180 L180 250 Z" fill="none" stroke="#d0bcff" strokeWidth="0.5"></path>
                </svg>
              </div>
              {/* Deep Layered Glass Panels */}
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors"></div>
                <div className="glass-panel p-8 rounded-3xl relative z-10 border-primary/30 shadow-[0_20px_50px_rgba(160,120,255,0.2)] rotate-2 transform transition-transform hover:rotate-0">
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm uppercase font-label text-primary">Persistent across sessions</p>
                        <p className="text-xs text-on-surface-variant">Infinite memory span across every interaction.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm uppercase font-label text-primary">Hybrid Retrieval</p>
                        <p className="text-xs text-on-surface-variant">Combined semantic search + structured indexing.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm uppercase font-label text-primary">Evolving Intelligence</p>
                        <p className="text-xs text-on-surface-variant">AI that genuinely grows smarter over time.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Background depth panel */}
                <div className="absolute -top-4 -right-4 w-full h-full glass-panel rounded-3xl -z-10 opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
