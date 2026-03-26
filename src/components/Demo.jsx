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
                  <div className="mt-6 p-6 bg-surface-container-highest rounded-xl font-mono text-sm border border-outline-variant/20 text-secondary-fixed shadow-inner relative overflow-hidden group">
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
      <section className="py-40 px-6 text-center relative overflow-hidden vignette grid-pattern">
        <div className="absolute inset-0 bg-primary/10 blur-[200px] pointer-events-none rounded-[100%] scale-[2]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-headline text-6xl md:text-8xl font-black mb-10 tracking-tighter drop-shadow-2xl text-on-surface">Your AI is waiting <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">to learn.</span></h2>
          <button className="bg-primary text-on-primary px-14 py-6 rounded-2xl font-headline font-black text-xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(208,188,255,0.6)] hover:shadow-[0_0_80px_rgba(208,188,255,0.9)] duration-300">
            GET API ACCESS NOW
          </button>
          <p className="mt-10 font-label text-sm font-bold tracking-[0.3em] text-on-surface-variant uppercase drop-shadow">Start for free. Pay as you scale.</p>
        </div>
      </section>
    </>
  );
}
