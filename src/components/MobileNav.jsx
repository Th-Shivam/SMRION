import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MobileNav({ isOpen, onClose }) {
  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent scrolling when nav is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] h-[100dvh] w-screen bg-[#131313]/60 backdrop-blur-[20px] bg-[radial-gradient(circle_at_bottom_left,_rgba(160,120,255,0.15),_transparent_50%),linear-gradient(to_bottom,_rgba(19,19,19,0.8),_rgba(19,19,19,0.95))] flex flex-col items-center animate-fade-in" onClick={onClose}>
      
      {/* Container to prevent clicks from bubbling to backdrop */}
      <div className="w-full h-full flex flex-col items-center max-w-lg mx-auto" onClick={(e) => e.stopPropagation()}>
        
        {/* Background Decoration Grid */}
        <div className="fixed inset-0 -z-10 pointer-events-none opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #494454 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          ></div>
        </div>

        {/* TopAppBar */}
        <header className="w-full flex justify-between items-center px-6 md:px-8 py-5">
        <div className="flex items-center">
          <span className="text-2xl font-black tracking-widest text-on-surface font-headline drop-shadow-md">SMRION</span>
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center text-[#e5e2e1] active:scale-95 duration-200"
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
      </header>

        {/* Navigation Content */}
      <main className="flex-1 w-full flex flex-col justify-start px-8 md:px-24 overflow-y-auto">
        <div className="flex flex-col space-y-8 md:space-y-10 my-auto py-8">
          {/* Nav Item 1 */}
        <Link to="/" state={{ skipIntro: true }} onClick={onClose} className="group flex flex-col animate-slide-in-stagger-1 hover:pl-4 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-xl">inventory_2</span>
            <span className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-[#e5e2e1]/60 group-hover:text-primary transition-colors">Product</span>
          </div>
          <span className="font-label uppercase tracking-[0.2em] text-[10px] text-primary/40 mt-1 ml-9">Sutra</span>
        </Link>
        
        {/* Nav Item 2 */}
        <Link to="/architecture" onClick={onClose} className="group flex flex-col animate-slide-in-stagger-2 hover:pl-4 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-xl">account_tree</span>
            <span className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-[#e5e2e1]/60 group-hover:text-primary transition-colors">Architecture</span>
          </div>
          <span className="font-label uppercase tracking-[0.2em] text-[10px] text-primary/40 mt-1 ml-9">Tantra</span>
        </Link>
        
        {/* Nav Item 3 */}
        <Link to="/docs" onClick={onClose} className="group flex flex-col animate-slide-in-stagger-3 hover:pl-4 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-xl">description</span>
            <span className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-[#e5e2e1]/60 group-hover:text-primary transition-colors">Docs</span>
          </div>
          <span className="font-label uppercase tracking-[0.2em] text-[10px] text-primary/40 mt-1 ml-9">Veda</span>
        </Link>
        
        {/* Nav Item 4 */}
        <Link to="/onboarding" onClick={onClose} className="group flex flex-col animate-slide-in-stagger-4 hover:pl-4 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-xl">login</span>
            <span className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-[#e5e2e1]/60 group-hover:text-primary transition-colors">Beta Access</span>
          </div>
          <span className="font-label uppercase tracking-[0.2em] text-[10px] text-primary/40 mt-1 ml-9">Diksha</span>
        </Link>
        
        {/* Nav Item 5 */}
        <a href="#" onClick={(e) => { e.preventDefault(); onClose(); }} className="group flex flex-col animate-slide-in-stagger-5 hover:pl-4 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-xl">code</span>
            <span className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-[#e5e2e1]/60 group-hover:text-primary transition-colors">GitHub</span>
          </div>
          <span className="font-label uppercase tracking-[0.2em] text-[10px] text-primary/40 mt-1 ml-9">Mantra</span>
        </a>
        </div>
      </main>

      {/* Footer Area */}
      <footer className="w-full p-8 md:px-24 pb-12 animate-slide-in-stagger-5">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <span className="font-headline font-black text-lg tracking-widest text-[#e5e2e1] opacity-80">SMRION</span>
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-outline">Infrastructure Systems</span>
          </div>
          <Link to="/onboarding" onClick={onClose} className="w-full bg-primary-container text-on-primary-container font-headline font-bold py-5 rounded-xl shadow-[0_0_25px_rgba(160,120,255,0.2)] active:scale-95 transition-all flex items-center justify-center gap-3 hover:bg-primary-fixed duration-300">
            <span>Connect API</span>
            <span class="material-symbols-outlined text-sm">bolt</span>
          </Link>
          <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-outline text-lg hover:text-primary cursor-pointer transition-colors">language</span>
              <span className="material-symbols-outlined text-outline text-lg hover:text-primary cursor-pointer transition-colors">terminal</span>
            </div>
            <span className="font-label text-[9px] text-outline uppercase tracking-widest">Ver 4.0.2-Alpha</span>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
