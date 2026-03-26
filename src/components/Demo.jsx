export default function Demo() {
  return (
    <>
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto glass-panel rounded-[2rem] p-1 border-primary/10 shadow-[0_0_100px_rgba(160,120,255,0.05)]">
          <div className="bg-surface rounded-[1.8rem] p-8 md:p-12">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
              <div className="ml-4 font-label text-[10px] tracking-widest text-on-surface-variant">SMRION-O1-PREVIEW</div>
            </div>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-xs font-bold">USER</div>
                <div className="flex-1">
                  <p className="text-on-surface font-body leading-relaxed">"Help me optimize my Postgres queries for the new node architecture."</p>
                  <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10 text-xs font-label text-primary flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm">lightbulb</span>
                    SYSTEM: Accessing memory shard #442 (Session date: Oct 12)
                  </div>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold shadow-[0_0_15px_rgba(160,120,255,0.4)]">AI</div>
                <div className="flex-1">
                  <p className="text-on-surface font-body leading-relaxed">"Based on the node architecture we discussed last session, you should focus on indexing the <span className="text-primary font-semibold">`deployment_id`</span>. I recall you're using a sharded table structure, so here is the optimized SQL:"</p>
                  <div className="mt-4 p-6 bg-surface-container-lowest rounded-xl font-mono text-sm border border-outline-variant/10 text-secondary-fixed-dim">
                    CREATE INDEX idx_node_deploy ON deployments(id) WHERE active = true;
                  </div>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-xs font-bold">USER</div>
                <div className="flex-1">
                  <p className="text-on-surface font-body leading-relaxed">"That worked perfectly. Now apply that logic to the Python worker."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-32 px-6 text-center relative">
        <div className="absolute inset-0 bg-primary/5 blur-[150px] pointer-events-none"></div>
        <h2 className="font-headline text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">Your AI is waiting to learn.</h2>
        <button className="bg-on-surface text-background px-12 py-6 rounded-2xl font-headline font-black text-xl hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(229,226,225,0.2)]">
          GET API ACCESS NOW
        </button>
        <p className="mt-8 font-label text-xs tracking-widest text-on-surface-variant uppercase">Start for free. Pay as you scale.</p>
      </section>
    </>
  );
}
