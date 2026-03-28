import React from 'react';

export default function SectionHeader({ title, description, badge }) {
  return (
    <div className="mb-10 pb-6 border-b border-surface-container-high/50 relative">
      {badge && (
        <span className="font-label text-primary text-xs tracking-[0.2em] uppercase mb-4 block">
          {badge}
        </span>
      )}
      <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
        {title}
      </h1>
      {description && (
        <p className="font-plex text-white/58 text-lg max-w-3xl leading-[1.72] tracking-[0.015em] font-light">
          {description}
        </p>
      )}
    </div>
  );
}
