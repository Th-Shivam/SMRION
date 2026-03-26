export default function MemoryStack() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-xl">
          <h2 className="font-headline text-5xl font-extrabold mb-4 tracking-tighter">The Memory Stack</h2>
          <p className="font-body text-on-surface-variant">Built for engineers scaling personalized LLM agents at production levels.</p>
        </div>
        <div className="font-label text-xs tracking-widest text-primary font-bold">CORE MODULES v1.0.4</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        <div className="md:col-span-8 glass-panel rounded-3xl p-10 flex flex-col justify-between group hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <span className="material-symbols-outlined text-6xl text-primary/10 group-hover:text-primary/20 transition-colors">hub</span>
          </div>
          <div>
            <span className="font-label text-xs uppercase text-primary mb-4 block">Engine 01</span>
            <h4 className="font-headline text-3xl font-bold mb-4">Hybrid Retrieval Engine</h4>
            <p className="font-body text-on-surface-variant max-w-md">Combines vector similarity with graph-based relational memory for 99.9% accuracy in context retrieval.</p>
          </div>
          <div className="flex gap-4 mt-8">
            <div className="px-4 py-2 bg-surface-container-highest rounded-lg text-xs font-label text-on-surface">Sub-50ms Latency</div>
            <div className="px-4 py-2 bg-surface-container-highest rounded-lg text-xs font-label text-on-surface">Auto-Sharding</div>
          </div>
        </div>
        <div className="md:col-span-4 glass-panel rounded-3xl p-10 flex flex-col group hover:border-secondary/40 transition-all duration-500">
          <div className="mb-auto">
            <span className="font-label text-xs uppercase text-secondary mb-4 block">Engine 02</span>
            <h4 className="font-headline text-2xl font-bold mb-4">Memory Indexing</h4>
            <p className="font-body text-on-surface-variant text-sm">Automated summarization and embedding of every interaction into a hierarchical graph.</p>
          </div>
          <img alt="Tech Detail" className="w-full h-32 object-cover rounded-xl mt-8 grayscale hover:grayscale-0 transition-all duration-500" data-alt="Extreme close-up of a high-tech processor chip with microscopic circuits and glowing traces of blue light reflecting on metal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3qwM1L7LMx6O2nwADE-czu2l6lACvDqz10HS0e4cK0iTmOfDmQeFmOE_3yc0vcNktvWLtS_7pdhzPjKzufROlX79203wuLKq2Ewi02Ew--3O5aw80L78oIQygaqM_iUr6fvnRa0orENnobkjp6eTM2V8loA8V4qlfINjJ134p3tHgESacAm-59UCnyv6Qap9AV7Bn0YC2HYmY1s0ODaigEz5UOGkEeGDq1mMjPota_ReR5gz2KkzZpC3zJSUiDAvIfOpCKHLZNGE"/>
        </div>
        <div className="md:col-span-4 glass-panel rounded-3xl p-10 flex flex-col group hover:border-tertiary/40 transition-all duration-500">
          <span className="font-label text-xs uppercase text-tertiary mb-4 block">Engine 03</span>
          <h4 className="font-headline text-2xl font-bold mb-4">Context Injection Layer</h4>
          <p className="font-body text-on-surface-variant text-sm">Dynamically re-writes system prompts on-the-fly to include historical context without token overflow.</p>
        </div>
        <div className="md:col-span-8 glass-panel rounded-3xl p-10 bg-gradient-to-r from-surface-container-high to-primary/5 flex items-center justify-between group">
          <div className="max-w-sm">
            <h4 className="font-headline text-2xl font-bold mb-2">Global Node Sync</h4>
            <p className="font-body text-on-surface-variant text-sm">Sync memory across 14 global regions in real-time, ensuring zero-latency for mobile-first agents.</p>
          </div>
          <div className="hidden md:block w-32 h-32 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center group-hover:rotate-180 transition-transform duration-[2000ms]">
            <span className="material-symbols-outlined text-4xl text-primary">language</span>
          </div>
        </div>
      </div>
    </section>
  );
}
