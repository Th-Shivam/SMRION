import React, { useState, useEffect } from 'react';
import StatusPanel from './StatusPanel';
import InfoCard from './InfoCard';

const tocHeadings = [
  { id: 'statefulness-problem', label: 'The Statefulness Problem' },
  { id: 'quickstart-integration', label: 'Quickstart Integration' },
  { id: 'best-practices', label: 'Best Practices' },
];

export default function RightSidebar() {
  const [activeId, setActiveId] = useState('');

  // Optional: Add scroll observer logic here if headings had IDs in DocContent
  
  return (
    <aside className="w-72 flex-shrink-0 hidden xl:block h-[calc(100vh-80px)] sticky top-24 overflow-y-auto pl-6 custom-scrollbar pb-12">
      <StatusPanel />
      
      <div className="mb-8">
        <h4 className="font-label text-xs tracking-[0.2em] text-on-surface-variant uppercase mb-4">
          On this page
        </h4>
        <ul className="space-y-3">
          {tocHeadings.map((heading) => (
            <li key={heading.id}>
              <a 
                href={`#${heading.id}`}
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors block"
              >
                {heading.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="glass-panel p-5 rounded-2xl border border-outline-variant/20 bg-surface-container-low/50">
        <h4 className="font-headline font-bold text-on-surface mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-secondary">forum</span>
          Need Help?
        </h4>
        <p className="font-body text-xs text-on-surface-variant mb-4 leading-relaxed">
          Join our developer community on Discord to discuss architecture and get support.
        </p>
        <button className="w-full text-xs font-label uppercase tracking-widest bg-surface-container-high py-2 rounded-lg text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-all">
          Join Server
        </button>
      </div>
    </aside>
  );
}
