import React from 'react';

export default function StatusPanel() {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-outline-variant/20 mb-6">
      <h3 className="font-label text-xs tracking-[0.2em] text-on-surface-variant uppercase mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-secondary neural-node animate-pulse"></span>
        Engine Status
      </h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10">
          <span className="font-body text-sm text-on-surface-variant">Cluster Health</span>
          <span className="font-label text-sm text-primary">Optimal</span>
        </div>
        
        <div className="flex justify-between items-center bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10">
          <span className="font-body text-sm text-on-surface-variant">Global Latency</span>
          <span className="font-label text-sm text-secondary">24ms</span>
        </div>
        
        <div className="flex justify-between items-center bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10">
          <span className="font-body text-sm text-on-surface-variant">Active Nodes</span>
          <span className="font-label text-sm text-on-surface">1,492</span>
        </div>
      </div>
      
      <div className="mt-5 pt-5 border-t border-outline-variant/20">
        <div className="text-xs text-on-surface-variant/60 font-body text-center">
          Last synced: Just now
        </div>
      </div>
    </div>
  );
}
