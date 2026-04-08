import React from 'react';
import { Link } from 'react-router-dom';

const sitemapData = [
  {
    category: 'Main Pages',
    icon: 'home',
    description: 'Core website pages and product information',
    pages: [
      { name: 'Home', path: '/', description: 'Product overview and key features' },
      { name: 'Architecture', path: '/architecture', description: 'System design and technical deep-dive' },
      { name: 'Documentation', path: '/docs', description: 'API guides and integration resources' },
      { name: 'Beta Access', path: '/onboarding', description: 'Join the early access program' }
    ]
  },
  {
    category: 'Getting Started',
    icon: 'rocket_launch',
    description: 'Begin your journey with SMRION',
    pages: [
      { name: 'Introduction', path: '/docs', description: 'What is SMRION and why it matters' },
      { name: 'Quickstart', path: '/docs/quickstart', description: 'Get up and running in 5 minutes' },
      { name: 'Core Concepts', path: '/docs/concepts', description: 'Fundamental principles and terminology' }
    ]
  },
  {
    category: 'Architecture',
    icon: 'account_tree',
    description: 'Technical architecture and system design',
    pages: [
      { name: 'Memory Loop', path: '/docs/memory', description: 'Continuous learning and context retention' },
      { name: 'Vector Sync', path: '/docs/vector-sync', description: 'Semantic embedding synchronization' },
      { name: 'Neural Nodes', path: '/docs/nodes', description: 'Distributed memory node architecture' }
    ]
  },
  {
    category: 'API Reference',
    icon: 'code',
    description: 'Complete API documentation and integration guides',
    pages: [
      { name: 'Authentication', path: '/docs/auth', description: 'API keys, OAuth, and security' },
      { name: 'Endpoints', path: '/docs/api-endpoints', description: 'REST API endpoint reference' },
      { name: 'Webhooks', path: '/docs/webhooks', description: 'Event-driven integrations' }
    ]
  },
  {
    category: 'Resources',
    icon: 'library_books',
    description: 'Additional resources and community',
    pages: [
      { name: 'GitHub Repository', path: '#', description: 'Source code and contributions', external: true },
      { name: 'Sitemap', path: '/docs/sitemap', description: 'Complete site navigation overview' }
    ]
  }
];

export default function Sitemap() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-primary/15 bg-surface/80 font-label text-[10px] font-bold uppercase tracking-[0.28em] text-on-surface-variant">
          <span className="material-symbols-outlined text-sm text-primary">map</span>
          Site Navigation
        </div>
        <h1 className="font-headline text-5xl md:text-6xl font-black text-on-surface mb-6">
          Site <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">Map</span>
        </h1>
        <p className="font-plex text-lg text-white/58 max-w-2xl mx-auto leading-relaxed">
          Complete overview of all pages and resources available on the SMRION platform. Navigate through our documentation, architecture guides, and API references.
        </p>
      </div>

      {/* Sitemap Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {sitemapData.map((section, idx) => (
          <div 
            key={idx}
            className="group relative rounded-2xl border border-outline-variant/30 bg-gradient-to-br from-surface-container-high/50 to-surface-container/30 p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(208,188,255,0.08)]"
          >
            {/* Section Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-2xl">{section.icon}</span>
              </div>
              <div className="flex-1">
                <h2 className="font-headline text-2xl font-bold text-on-surface mb-2">
                  {section.category}
                </h2>
                <p className="font-plex text-sm text-white/50 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>

            {/* Pages List */}
            <ul className="space-y-3">
              {section.pages.map((page, pIdx) => (
                <li key={pIdx}>
                  {page.external ? (
                    <a
                      href={page.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-high/50 transition-all duration-200"
                    >
                      <span className="material-symbols-outlined text-primary/60 text-lg mt-0.5 group-hover/link:text-primary transition-colors">
                        open_in_new
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-plex text-sm font-medium text-on-surface group-hover/link:text-primary transition-colors">
                            {page.name}
                          </span>
                        </div>
                        <p className="font-plex text-xs text-white/40 leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <Link
                      to={page.path}
                      className="group/link flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-high/50 transition-all duration-200"
                    >
                      <span className="material-symbols-outlined text-primary/60 text-lg mt-0.5 group-hover/link:text-primary transition-colors">
                        arrow_forward
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-plex text-sm font-medium text-on-surface group-hover/link:text-primary transition-colors">
                            {page.name}
                          </span>
                          <span className="font-plex text-xs text-white/30 font-mono">
                            {page.path}
                          </span>
                        </div>
                        <p className="font-plex text-xs text-white/40 leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 text-center p-8 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-xl">
        <span className="material-symbols-outlined text-primary text-4xl mb-4 inline-block">
          explore
        </span>
        <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
          Can't find what you're looking for?
        </h3>
        <p className="font-plex text-white/58 mb-6 max-w-xl mx-auto">
          Our documentation is continuously evolving. Check back soon for more guides and resources.
        </p>
        <Link
          to="/onboarding"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-label text-xs font-bold uppercase tracking-[0.15em] hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(208,188,255,0.3)]"
        >
          <span>Get Beta Access</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
