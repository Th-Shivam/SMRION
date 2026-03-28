import React from 'react';

export default function CardSelector({ options, selectedOptions, onChange }) {
  const toggleOption = (optionValue) => {
    if (selectedOptions.includes(optionValue)) {
      onChange(selectedOptions.filter(o => o !== optionValue));
    } else {
      onChange([...selectedOptions, optionValue]);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {options.map((option) => {
        const isSelected = selectedOptions.includes(option.value);
        return (
          <div
            key={option.value}
            onClick={() => toggleOption(option.value)}
            className={`group relative aspect-square rounded-xl border p-6 flex flex-col justify-end cursor-pointer transition-all duration-200 overflow-hidden use-case-card ${
              isSelected
                ? 'glass-panel border-primary/40' // Simulating the active state we saw in the Stitch UI
                : 'bg-surface-container-low/40 border-outline-variant/10 hover:border-primary/40'
            }`}
          >
            {isSelected && (
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(208,188,255,1)]"></div>
            )}
            
            <span className={`material-symbols-outlined absolute top-12 left-1/2 -translate-x-1/2 scale-[2.5] transition-colors ${
              isSelected ? 'text-primary' : 'text-on-surface-variant/20 group-hover:text-primary'
            }`}>
              {option.icon}
            </span>
            <p className={`font-label text-xs uppercase tracking-widest text-center ${
              isSelected ? 'text-on-surface' : 'text-on-surface-variant/60'
            }`}>
              {option.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
