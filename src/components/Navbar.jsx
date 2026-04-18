import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isVisible, setIsVisible] = useState(!isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      // Appear exactly when the intro screen finishes (when main page touches the top bar)
      // We subtract ~70px so it triggers right as the top of main comes into the nav zone
      if (window.scrollY > window.innerHeight - 70) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinkClass = ({ isActive }) =>
    `font-label tracking-[0.2em] text-[10px] uppercase font-bold transition-all duration-300 ${
      isActive
        ? 'text-primary border-b border-primary/50 pb-1'
        : 'text-on-surface-variant hover:text-primary'
    }`

  return (
    <>
    <nav className={`fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-3xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] border-b border-outline-variant/30 transition-transform duration-700 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex justify-between items-center px-6 md:px-8 py-5 max-w-screen-2xl mx-auto">
        <Link to="/" state={{ skipIntro: true }} className="text-2xl font-black tracking-widest text-on-surface font-headline drop-shadow-md cursor-pointer">SMRION</Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          <NavLink to="/" state={{ skipIntro: true }} end className={navLinkClass}>Product</NavLink>
          <NavLink to="/architecture" className={navLinkClass}>Architecture</NavLink>
          <NavLink to="/docs" className={navLinkClass}>Docs</NavLink>
          <NavLink to="/onboarding" className={navLinkClass}>Beta Access</NavLink>
          <a className="font-label tracking-[0.2em] text-[10px] uppercase font-bold text-on-surface-variant hover:text-primary transition-all duration-300" href="#" onClick={(e) => e.preventDefault()}>GitHub</a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link to="/onboarding">
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label text-xs font-black tracking-[0.15em] uppercase hover:scale-[1.05] active:scale-95 transition-transform shadow-[0_0_20px_rgba(208,188,255,0.4)] hover:shadow-[0_0_30px_rgba(208,188,255,0.6)] duration-300">
              Connect API
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex items-center justify-center text-on-surface hover:text-primary active:scale-95 transition-all duration-300"
          onClick={() => setIsMobileNavOpen(true)}
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
    <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </>
  );
}
