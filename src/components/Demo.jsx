export default function Demo() {
  return (
    <>
      <section className="py-40 px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10 scale-[1.5]"></div>
        <div className="max-w-4xl mx-auto module-card rounded-[2.5rem] p-1.5 shadow-[0_0_80px_rgba(160,120,255,0.15)] relative transform transition-transform hover:scale-[1.01] duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-[2.5rem] opacity-50 pointer-events-none"></div>
          <div className="bg-surface-container-lowest rounded-[2.2rem] p-8 md:p-14 relative z-10 border border-outline-variant/30 backdrop-blur-3xl">
            <div className="flex items-center justify-between mb-16 border-b border-outline-variant/20 pb-6">
               <div className="flex items-center gap-3">
                 <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                 <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                 <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
               </div>
               <div className="font-label text-xs tracking-[0.2em] font-bold text-primary flex items-center gap-3">
                 <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></span>
                 SMRION-O1-PREVIEW
               </div>
            </div>
            
            <div className="space-y-12">
              {/* User Message */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-xs font-black text-on-surface-variant shadow-inner border border-outline-variant/30">USR</div>
                <div className="flex-1 pt-2">
                  <p className="text-on-surface font-body text-lg leading-relaxed">"Help me optimize my Postgres queries for the new node architecture."</p>
                  <div className="mt-5 p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs font-label font-bold text-primary flex items-center gap-3 shadow-[0_0_15px_rgba(208,188,255,0.1)]">
                    <span className="material-symbols-outlined text-base animate-pulse">memory</span>
                    SYSTEM: Accessing memory shard #442 (Session date: Oct 12)
                  </div>
                </div>
              </div>

              {/* AI Message */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary text-xs font-black shadow-[0_0_20px_rgba(208,188,255,0.6)]">SYS</div>
                <div className="flex-1 border-l-2 border-primary/30 pl-6 pb-2">
                  <p className="text-on-surface font-body text-lg leading-relaxed">"Based on the node architecture we discussed last session, you should focus on indexing the <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">`deployment_id`</span>. I recall you're using a sharded table structure, so here is the optimized SQL:"</p>
                  <div className="mt-6 p-6 bg-surface-container-highest rounded-xl font-mono text-sm border border-outline-variant/20 text-secondary dark:text-secondary-fixed shadow-inner relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    CREATE INDEX idx_node_deploy ON deployments(id) WHERE active = true;
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-xs font-black text-on-surface-variant shadow-inner border border-outline-variant/30">USR</div>
                <div className="flex-1 pt-2">
                  <p className="text-on-surface font-body text-lg leading-relaxed">"That worked perfectly. Now apply that logic to the Python worker."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(208,188,255,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(173,198,255,0.12),transparent_35%)] pointer-events-none"></div>
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="rounded-[2rem] border border-outline-variant/20 bg-surface-container-lowest/90 shadow-[0_0_90px_rgba(160,120,255,0.12)] overflow-hidden">
            <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
              <div className="p-8 md:p-12 lg:p-16 relative">
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 mb-8">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(208,188,255,0.8)]"></span>
                    <span className="font-label text-[11px] tracking-[0.28em] uppercase font-bold text-primary">Persistent Memory Infrastructure</span>
                  </div>

                  <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.98] text-on-surface max-w-3xl">
                    Stop resetting your model.
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary-fixed to-secondary">
                      Start building recall.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-2xl text-base md:text-xl leading-relaxed text-on-surface-variant">
                    Turn every interaction into durable context. SMRION gives your agents memory that survives sessions, scales with users, and stays ready for the next request.
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <button className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-headline font-bold text-lg shadow-[0_0_40px_rgba(208,188,255,0.35)] hover:shadow-[0_0_60px_rgba(208,188,255,0.55)] transition-all duration-300">
                      Request API Access
                    </button>
                    <button className="glass-panel text-on-surface px-8 py-4 rounded-2xl font-headline font-bold text-lg hover:border-secondary/40 hover:bg-surface-container-high transition-all duration-300">
                      Explore Architecture
                    </button>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-base">bolt</span>
                      Start free and scale usage as traffic grows
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-base">hub</span>
                      Plug into existing agent and retrieval pipelines
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t lg:border-t-0 lg:border-l border-outline-variant/20 bg-gradient-to-b from-surface-container-low to-surface-container-lowest p-8 md:p-10 flex flex-col justify-between gap-6">
                <div>
                  <div className="font-label text-[11px] tracking-[0.28em] uppercase text-on-surface-variant mb-4">
                    Launch Snapshot
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                      <div className="text-3xl font-headline font-extrabold text-primary">Sessionless</div>
                      <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                        Memory persists beyond chat windows, tabs, and user revisits.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-outline-variant/20 bg-surface/70 p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-label text-[11px] tracking-[0.24em] uppercase text-on-surface-variant">Retrieval Stack</span>
                        <span className="text-primary font-bold text-sm">Live</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-on-surface-variant">Semantic vectors</span>
                          <span className="text-on-surface">Online</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-on-surface-variant">Graph recall</span>
                          <span className="text-on-surface">Online</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-on-surface-variant">Prompt injection</span>
                          <span className="text-on-surface">Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-outline-variant/20 bg-surface/60 p-5">
                  <div className="font-label text-[11px] tracking-[0.24em] uppercase text-on-surface-variant mb-2">
                    Build With Continuity
                  </div>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Replace stateless responses with infrastructure that remembers user intent, technical context, and historical decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
