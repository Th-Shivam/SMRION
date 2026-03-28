import React, { useState } from 'react';

export default function CodeBlock({ language, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden glass-panel border border-outline-variant/30 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-4 py-2 bg-surface-container-lowest border-b border-outline-variant/20">
        <span className="font-label text-xs tracking-widest text-primary uppercase">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 text-xs font-label"
        >
          <span className="material-symbols-outlined text-[16px]">
            {copied ? 'check' : 'content_copy'}
          </span>
          {copied ? 'COPIED' : 'COPY'}
        </button>
      </div>
      <div className="p-4 bg-[#0a0a0a] overflow-x-auto">
        <pre className="font-label text-sm text-on-surface-variant leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
