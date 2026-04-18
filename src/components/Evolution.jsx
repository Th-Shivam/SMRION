export default function Evolution() {
  return (
    <section className="relative py-40 overflow-hidden bg-surface-container-lowest grid-pattern vignette">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-32">
          <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-6">The Evolution of Logic</h2>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-xl font-light">From stateless responses to evolving intelligence — powered by memory.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 relative">
          
          {/* Vertical Divider Line - Positioned below the heading */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-outline-variant/0 via-primary/80 to-outline-variant/0 z-20 hidden md:block glow-line">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-container-lowest border border-primary/50 px-6 py-2.5 rounded-full shadow-[0_0_40px_rgba(208,188,255,0.4)] z-30">
              <span className="font-label text-xs tracking-widest uppercase text-primary font-bold whitespace-nowrap drop-shadow-[0_0_10px_rgba(208,188,255,0.8)]">SMRION Memory Layer</span>
            </div>
          </div>

          {/* LEFT SIDE: Stateless AI */}
          <div className="space-y-12 dark:grayscale dark:hover:grayscale-0 transition-all duration-700 relative">
            <div className="text-right md:pr-12">
              <span className="font-label text-sm tracking-[0.2em] font-bold uppercase text-on-surface-variant mb-2 block">Before SMRION</span>
              <h3 className="font-headline text-4xl font-light text-on-surface-variant tracking-tight">Stateless AI</h3>
            </div>
            <div className="relative h-[450px] flex items-center justify-center">
              {/* Visual: Fragmented/Fading Nodes */}
              <div className="absolute inset-0 flex flex-wrap gap-6 items-center justify-center p-8">
                <div className="w-14 h-14 rounded-xl bg-outline-variant border border-outline-variant/10 flex items-center justify-center node-broken animate-pulse-glow">
                  <span className="material-symbols-outlined text-surface-container-lowest text-2xl">blur_on</span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-outline-variant border border-outline-variant/10 flex items-center justify-center node-broken translate-y-8 animate-float">
                  <span className="material-symbols-outlined text-surface-container-lowest text-2xl">cloud_off</span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-outline-variant border border-outline-variant/10 flex items-center justify-center node-broken -translate-x-6 animate-pulse">
                  <span className="material-symbols-outlined text-surface-container-lowest text-2xl">history</span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-outline-variant border border-outline-variant/10 flex items-center justify-center node-broken translate-x-16 -translate-y-4 animate-float-delayed">
                  <span className="material-symbols-outlined text-surface-container-lowest text-2xl">sync_problem</span>
                </div>
              </div>
              
              {/* Layered Glass Panel with proper background structure */}
              <div className="relative w-full max-w-md absolute -rotate-2 transform transition-transform hover:rotate-0 hover:scale-105 z-10">
                {/* Backdrop blur layer to prevent grid from showing through vividly */}
                <div className="absolute inset-0 bg-surface-container-highest/20 dark:bg-surface-container-lowest/40 blur-[80px] rounded-[2rem]"></div>
                
                <div className="module-card bg-surface-container-lowest border border-outline-variant p-10 rounded-[2rem] relative shadow-2xl">
                  <ul className="space-y-8">
                    <li className="flex items-start gap-5 text-on-surface-variant">
                      <span className="material-symbols-outlined mt-1 text-lg">remove_circle_outline</span>
                      <div>
                        <p className="font-bold text-sm uppercase font-label">No memory retention</p>
                        <p className="text-sm mt-1 opacity-80">Each request is a fresh start with zero context.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-5 text-on-surface-variant">
                      <span className="material-symbols-outlined mt-1 text-lg">history</span>
                      <div>
                        <p className="font-bold text-sm uppercase font-label">Context resets every session</p>
                        <p className="text-sm mt-1 opacity-80">Limited to short-term context window tokens.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-5 text-on-surface-variant">
                      <span className="material-symbols-outlined mt-1 text-lg">fragment_stack</span>
                      <div>
                        <p className="font-bold text-sm uppercase font-label">Fragmented intelligence</p>
                        <p className="text-sm mt-1 opacity-80">Identical users receive generic responses.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE: SMRION */}
          <div className="space-y-12 group">
            <div className="md:pl-12">
              <span className="font-label text-sm font-bold tracking-[0.2em] uppercase text-primary mb-2 block drop-shadow-[0_0_10px_rgba(208,188,255,0.5)]">After SMRION</span>
              <h3 className="font-headline text-4xl font-black tracking-tight text-on-surface drop-shadow-lg">Evolving Intelligence</h3>
            </div>
            <div className="relative h-[450px] flex items-center justify-center">
              {/* Visual: Glowing Connected Neural Network */}
              <div className="absolute inset-0 z-0">
                <svg className="w-full h-full opacity-40 transition-opacity duration-500 group-hover:opacity-80" viewBox="0 0 400 400" filter="drop-shadow(0 0 10px rgba(208,188,255,0.5))">
                  <circle className="animate-pulse" cx="150" cy="150" fill="#d0bcff" r="4"></circle>
                  <circle className="animate-pulse" cx="250" cy="180" fill="#d0bcff" r="4" style={{ animationDelay: '1s' }}></circle>
                  <circle className="animate-pulse" cx="180" cy="250" fill="#d0bcff" r="4" style={{ animationDelay: '2s' }}></circle>
                  <path className="animate-flow" d="M150 150 L250 180 L180 250 Z" fill="none" stroke="#d0bcff" strokeWidth="1.5"></path>
                </svg>
              </div>
              {/* Deep Layered Glass Panels */}
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/40 transition-colors duration-700"></div>
                <div className="module-card p-10 rounded-[2rem] relative z-10 border-primary/40 shadow-[0_30px_60px_rgba(160,120,255,0.3)] rotate-2 transform transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">
                  <ul className="space-y-8">
                    <li className="flex items-start gap-5">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 border border-primary/30 shadow-[0_0_15px_rgba(208,188,255,0.3)]">
                        <span className="material-symbols-outlined text-lg animate-pulse-glow" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                      </div>
                      <div>
                        <p className="font-black text-sm uppercase font-label text-primary tracking-wide">Persistent across sessions</p>
                        <p className="text-sm text-on-surface-variant mt-1">Infinite memory span across every single interaction.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-5">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 border border-primary/30 shadow-[0_0_15px_rgba(208,188,255,0.3)]">
                        <span className="material-symbols-outlined text-lg animate-pulse-glow" style={{ fontVariationSettings: "'FILL' 1", animationDelay: '1s' }}>auto_awesome</span>
                      </div>
                      <div>
                        <p className="font-black text-sm uppercase font-label text-primary tracking-wide">Hybrid Retrieval</p>
                        <p className="text-sm text-on-surface-variant mt-1">Combined semantic search + structured indexing.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-5">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 border border-primary/30 shadow-[0_0_15px_rgba(208,188,255,0.3)]">
                        <span className="material-symbols-outlined text-lg animate-pulse-glow" style={{ fontVariationSettings: "'FILL' 1", animationDelay: '2s' }}>trending_up</span>
                      </div>
                      <div>
                        <p className="font-black text-sm uppercase font-label text-primary tracking-wide">Evolving Intelligence</p>
                        <p className="text-sm text-on-surface-variant mt-1">AI that genuinely grows smarter over time.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
