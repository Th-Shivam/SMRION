import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  {
    title: 'Getting Started',
    links: [
      { name: 'Introduction', href: '/docs' },
      { name: 'Quickstart', href: '/docs/quickstart' },
      { name: 'Core Concepts', href: '/docs/concepts' }
    ]
  },
  {
    title: 'Architecture',
    links: [
      { name: 'Memory Loop', href: '/docs/memory' },
      { name: 'Vector Sync', href: '/docs/vector-sync' },
      { name: 'Neural Nodes', href: '/docs/nodes' }
    ]
  },
  {
    title: 'API Reference',
    links: [
      { name: 'Authentication', href: '/docs/auth' },
      { name: 'Endpoints', href: '/docs/api-endpoints' },
      { name: 'Webhooks', href: '/docs/webhooks' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Sitemap', href: '/docs/sitemap', icon: 'map' }
    ]
  }
];

export default function SidebarNav() {
  const location = useLocation();

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block h-[calc(100vh-80px)] sticky top-24 overflow-y-auto pr-6 custom-scrollbar">
      <div className="space-y-8 pb-12">
        {navItems.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-label text-xs tracking-[0.2em] text-primary uppercase mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link, lIdx) => {
                const isActive = location.pathname === link.href || (location.pathname === '/docs' && link.href === '/docs');
                return (
                  <li key={lIdx}>
                    <Link
                      to={link.href}
                      className={`flex items-center gap-2 font-plex text-sm px-3 py-2 rounded-lg transition-all duration-200 tracking-[0.012em] ${
                        isActive 
                          ? 'bg-primary/10 text-primary font-semibold border border-primary/20 shadow-[0_0_15px_rgba(208,188,255,0.05)]' 
                          : 'text-white/58 hover:text-on-surface hover:bg-surface-container-high font-light'
                      }`}
                    >
                      {link.icon && (
                        <span className="material-symbols-outlined text-base">
                          {link.icon}
                        </span>
                      )}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
