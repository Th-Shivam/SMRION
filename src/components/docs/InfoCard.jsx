import React from 'react';

export default function InfoCard({ title, children, type = 'info' }) {
  const isTip = type === 'tip';
  
  return (
    <div className={`my-6 relative rounded-2xl p-6 glass-panel border ${isTip ? 'border-secondary/30' : 'border-primary/30'} group hover:shadow-[0_0_30px_rgba(208,188,255,0.05)] transition-all duration-300`}>
      <div className={`absolute -top-3 left-6 px-3 py-1 text-[10px] font-label font-bold rounded-full ${isTip ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary'}`}>
        {isTip ? 'PRO TIP' : 'NOTE'}
      </div>
      
      {title && (
        <h4 className="font-headline text-lg font-bold mb-2 text-on-surface flex items-center gap-2">
          <span className={`material-symbols-outlined ${isTip ? 'text-secondary' : 'text-primary'}`}>
            {isTip ? 'lightbulb' : 'info'}
          </span>
          {title}
        </h4>
      )}
      
      <div className="font-body text-sm text-on-surface-variant leading-relaxed">
        {children}
      </div>
    </div>
  );
}
