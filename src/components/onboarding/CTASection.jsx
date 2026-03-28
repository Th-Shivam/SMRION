import React from 'react';

export default function CTASection({ onSubmit }) {
  return (
    <section className="text-center py-12 space-y-8">
      <div className="space-y-3">
        <h3 className="font-headline text-3xl font-bold tracking-tight">
          Initialize the Future of AI Memory
        </h3>
        <p className="text-on-surface-variant">
          Help us build the future of AI memory.
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-6">
        <button
          type="button"
          onClick={onSubmit}
          className="pulse-btn group relative px-12 py-4 rounded-lg bg-primary text-on-primary font-headline font-bold text-lg overflow-hidden transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative z-10">Request Beta Access</span>
          <div className="absolute -inset-1 bg-primary/30 blur-xl group-hover:bg-primary/50 -z-10 transition-all"></div>
        </button>
        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/40">
          Estimated response time: 48-72 hours
        </p>
      </div>
    </section>
  );
}
