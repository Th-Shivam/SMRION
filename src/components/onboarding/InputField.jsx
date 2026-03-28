import React from 'react';

export default function InputField({ label, placeholder, type = 'text', value, onChange, fullWidth }) {
  return (
    <div className={`space-y-2 ${fullWidth ? 'md:col-span-2' : ''}`}>
      <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 px-1">
        {label}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-surface-container-lowest border-none text-on-surface focus:ring-1 focus:ring-primary py-3 px-4 rounded-lg transition-all duration-200 placeholder:text-on-surface-variant/30"
      />
    </div>
  );
}
