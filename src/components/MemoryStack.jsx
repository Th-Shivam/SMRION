export default function MemoryStack() {
  return (
    <section className="py-40 px-8 max-w-7xl mx-auto relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
        <div className="max-w-xl">
          <h2 className="font-headline text-5xl md:text-6xl font-black mb-6 tracking-tighter drop-shadow-lg text-on-surface">The Memory Stack</h2>
          <p className="font-body text-xl font-light text-on-surface-variant leading-relaxed">Built for engineers scaling personalized LLM agents at production levels.</p>
        </div>
        <div className="font-label text-xs tracking-[0.2em] text-primary font-black uppercase px-4 py-2 bg-primary/10 rounded-full border border-primary/30 shadow-[0_0_20px_rgba(208,188,255,0.2)]">CORE MODULES v1.0.4</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
        {/* Module 01 */}
        <div className="md:col-span-8 module-card rounded-[2rem] p-12 flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="absolute top-0 right-0 p-12">
            <span className="material-symbols-outlined text-8xl text-primary/10 group-hover:text-primary/30 transition-colors duration-700 drop-shadow-[0_0_20px_rgba(208,188,255,0.4)]">hub</span>
          </div>
          <div className="relative z-10">
            <span className="font-label text-sm uppercase font-bold tracking-widest text-primary mb-6 block">Engine 01</span>
            <h4 className="font-headline text-4xl font-black mb-6 text-on-surface">Hybrid Retrieval Engine</h4>
            <p className="font-body text-on-surface-variant text-lg max-w-xl leading-relaxed">Combines vector similarity with graph-based relational memory for 99.9% accuracy in context retrieval.</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-12 relative z-10">
            <div className="px-5 py-2.5 module-card !bg-surface-container-highest rounded-xl text-xs font-label font-bold tracking-wide text-on-surface border-outline-variant/30 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Sub-50ms Latency</div>
            <div className="px-5 py-2.5 module-card !bg-surface-container-highest rounded-xl text-xs font-label font-bold tracking-wide text-on-surface border-outline-variant/30 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Auto-Sharding</div>
          </div>
        </div>
        
        {/* Module 02 */}
        <div className="md:col-span-4 module-card rounded-[2rem] p-12 flex flex-col group relative overflow-hidden">
          <div className="mb-auto relative z-10">
            <span className="font-label text-sm uppercase font-bold tracking-widest text-secondary mb-6 block">Engine 02</span>
            <h4 className="font-headline text-3xl font-black mb-6 text-on-surface">Memory Indexing</h4>
            <p className="font-body text-on-surface-variant text-base leading-relaxed">Automated summarization and embedding of every interaction into a hierarchical graph.</p>
          </div>
          <img alt="Tech Detail" className="w-full h-48 object-cover rounded-2xl mt-12 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 shadow-2xl relative z-10 border border-outline-variant/30" data-alt="Extreme close-up of a high-tech processor chip with microscopic circuits and glowing traces of blue light reflecting on metal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3qwM1L7LMx6O2nwADE-czu2l6lACvDqz10HS0e4cK0iTmOfDmQeFmOE_3yc0vcNktvWLtS_7pdhzPjKzufROlX79203wuLKq2Ewi02Ew--3O5aw80L78oIQygaqM_iUr6fvnRa0orENnobkjp6eTM2V8loA8V4qlfINjJ134p3tHgESacAm-59UCnyv6Qap9AV7Bn0YC2HYmY1s0ODaigEz5UOGkEeGDq1mMjPota_ReR5gz2KkzZpC3zJSUiDAvIfOpCKHLZNGE"/>
        </div>
        
        {/* Module 03 */}
        <div className="md:col-span-4 module-card rounded-[2rem] p-12 flex flex-col group relative overflow-hidden">
          <div className="relative z-10">
            <span className="font-label text-sm uppercase font-bold tracking-widest text-tertiary-fixed mb-6 block">Engine 03</span>
            <h4 className="font-headline text-3xl font-black mb-6 text-on-surface">Context Injection Layer</h4>
            <p className="font-body text-on-surface-variant text-base leading-relaxed">Dynamically re-writes system prompts on-the-fly to include historical context without token overflow.</p>
          </div>
          <div className="mt-auto pt-10 relative z-10">
            <div className="w-full h-2 bg-outline-variant/20 rounded-full overflow-hidden">
              <div className="h-full bg-tertiary-fixed w-2/3 animate-pulse rounded-full shadow-[0_0_10px_rgba(229,226,225,0.6)]"></div>
            </div>
          </div>
        </div>
        
        {/* Module 04 */}
        <div className="md:col-span-8 module-card rounded-[2rem] p-12 bg-gradient-to-r from-surface-container-highest to-primary/10 flex items-center justify-between group overflow-hidden relative">
          <div className="absolute inset-0 micro-noise"></div>
          <div className="max-w-md relative z-10">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(208,188,255,0.4)]">
                    <span className="material-symbols-outlined text-2xl animate-spin" style={{animationDuration: '4s'}}>sync</span>
                </div>
                <h4 className="font-headline text-3xl font-black text-on-surface">Global Node Sync</h4>
            </div>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed">Sync memory across 14 global regions in real-time, ensuring zero-latency for mobile-first agents.</p>
          </div>
          <div className="hidden md:block w-48 h-48 rounded-full border border-dashed border-primary/30 flex items-center justify-center group-hover:rotate-180 transition-transform duration-[3000ms] shadow-[inset_0_0_30px_rgba(208,188,255,0.1)] relative z-10">
            <div className="w-32 h-32 rounded-full border border-primary/20 flex items-center justify-center bg-surface-container/50 backdrop-blur-md shadow-[0_0_40px_rgba(208,188,255,0.2)] group-hover:shadow-[0_0_60px_rgba(208,188,255,0.4)] transition-all duration-700">
              <span className="material-symbols-outlined text-6xl text-primary animate-pulse-glow">language</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
