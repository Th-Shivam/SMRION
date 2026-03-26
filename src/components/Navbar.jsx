export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/40 backdrop-blur-xl shadow-[0_0_15px_rgba(160,120,255,0.1)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-[#e5e2e1] font-headline">SMRION</div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-headline tracking-tight text-sm uppercase font-semibold text-[#d0bcff] border-b border-[#d0bcff]/50 pb-1 hover:text-[#d0bcff] transition-all duration-300 ease-in-out" href="#">Product</a>
          <a className="font-headline tracking-tight text-sm uppercase font-semibold text-[#e5e2e1]/60 hover:text-[#d0bcff] transition-all duration-300 ease-in-out" href="#">Infrastructure</a>
          <a className="font-headline tracking-tight text-sm uppercase font-semibold text-[#e5e2e1]/60 hover:text-[#d0bcff] transition-all duration-300 ease-in-out" href="#">Docs</a>
          <a className="font-headline tracking-tight text-sm uppercase font-semibold text-[#e5e2e1]/60 hover:text-[#d0bcff] transition-all duration-300 ease-in-out" href="#">GitHub</a>
        </div>
        <button className="bg-primary-container text-on-primary-container px-5 py-2 rounded-lg font-label text-xs font-bold tracking-widest uppercase scale-95 active:scale-90 transition-transform shadow-[0_0_15px_rgba(160,120,255,0.3)] hover:shadow-[0_0_25px_rgba(160,120,255,0.5)] duration-300">
          Connect API
        </button>
      </div>
    </nav>
  );
}
