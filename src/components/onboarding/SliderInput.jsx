import React from 'react';

export default function SliderInput({ min = 0, max = 100, step = 1, value, onChange, leftLabel, rightLabel, description }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
          {leftLabel}
        </label>
        <label className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">
          {rightLabel}
        </label>
      </div>
      <input 
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full accent-primary transition-all duration-200" 
      />
      {description && (
        <p className="text-[11px] text-on-surface-variant/40 italic">
          {description}
        </p>
      )}
    </div>
  );
}
