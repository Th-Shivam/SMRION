import React from 'react';
import { Link } from 'react-router-dom';

export default function Documentation() {
  return (
    <section className="relative min-h-screen overflow-hidden px-0 pt-24">
      <div className="docs-placeholder-orb docs-placeholder-orb-left" />
      <div className="docs-placeholder-orb docs-placeholder-orb-right" />
      <div className="docs-placeholder-grid absolute inset-0 opacity-30" />

      <div className="relative z-10 flex min-h-[calc(100vh-6rem)] w-full items-center justify-center">
        <div className="docs-placeholder-panel flex min-h-[calc(100vh-6rem)] w-full items-center justify-center px-6 py-14 text-center sm:px-10 sm:py-20">
          <div className="mx-auto w-full max-w-5xl">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-surface/80 px-4 py-2 font-label text-[10px] font-bold uppercase tracking-[0.28em] text-on-surface-variant shadow-[0_0_30px_rgba(0,0,0,0.35)]">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(208,188,255,0.8)]" />
            Docs v1 in progress
          </div>

          <p className="mb-6 font-label text-[11px] font-bold uppercase tracking-[0.38em] text-primary/70">
            Launching soon
          </p>

          <h1 className="mx-auto max-w-4xl font-headline text-5xl font-black leading-[0.92] text-on-surface sm:text-6xl lg:text-[6.5rem]">
            Documentation is{' '}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Evolving.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-on-surface-variant sm:text-xl">
            Our backend is still under construction, so detailed documentation and API guides
            are on hold for now. Once the core services are stable, full setup and integration
            docs will be available here.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-primary-container px-8 py-4 font-label text-sm font-bold uppercase tracking-[0.14em] text-on-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(160,120,255,0.35)]"
            >
              Explore Product
            </Link>
            <Link
              to="/architecture"
              className="inline-flex min-w-[220px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-8 py-4 font-label text-sm font-bold uppercase tracking-[0.14em] text-on-surface transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07]"
            >
              View Architecture
            </Link>
          </div>

          <div className="mx-auto mt-14 flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-primary/15 bg-surface-container-low/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.55)]">
            <div className="relative h-8 w-8">
              <span className="absolute left-0 top-1/2 h-6 w-3 -translate-y-1/2 rounded-full bg-primary-fixed shadow-[0_0_18px_rgba(208,188,255,0.6)]" />
              <span className="absolute right-0 top-1/2 h-6 w-3 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_rgba(160,120,255,0.7)]" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
