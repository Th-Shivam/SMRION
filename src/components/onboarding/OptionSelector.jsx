import React from 'react';

export default function OptionSelector({ options, selected, onChange, styleType = 'segmented' }) {
  if (styleType === 'segmented') {
    return (
      <div className="flex bg-surface-container-lowest p-1 rounded-lg gap-1">
        {options.map((option) => {
          const isActive = option === selected;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`flex-1 py-2 text-xs font-label uppercase tracking-widest rounded transition-all duration-200 ${
                isActive 
                  ? 'bg-primary/10 text-primary border border-primary/20' 
                  : 'text-on-surface-variant hover:bg-surface-container-high border border-transparent'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }

  // Boxed grid style (for Hallucination Frequency)
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {options.map((option) => {
        const isActive = option === selected;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`py-3 px-2 rounded-lg text-xs font-label uppercase tracking-tight transition-all duration-200 ${
              isActive 
                ? 'border border-primary text-primary bg-primary/10' 
                : 'border border-outline-variant/20 text-on-surface-variant hover:border-primary/50 hover:bg-primary/5'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
