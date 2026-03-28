import React from 'react';

export default function FormSection({ icon, title, children }) {
  return (
    <section className="glass-panel p-8 rounded-xl border border-outline-variant/10 shadow-sm space-y-8 transition-all duration-200">
      <div className="flex items-center gap-3 px-1">
        <span className="material-symbols-outlined text-primary text-xl" data-icon={icon}>
          {icon}
        </span>
        <h2 className="font-headline text-xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}
