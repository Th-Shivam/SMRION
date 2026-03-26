export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-screen-2xl mx-auto">
        <div className="text-xl font-black text-on-surface font-headline mb-6 md:mb-0 tracking-widest">SMRION</div>
        <div className="flex flex-wrap justify-center gap-10 mb-6 md:mb-0">
          <a className="font-label text-xs tracking-[0.15em] font-bold uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Privacy Policy</a>
          <a className="font-label text-xs tracking-[0.15em] font-bold uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Terms of Service</a>
          <a className="font-label text-xs tracking-[0.15em] font-bold uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Status</a>
          <a className="font-label text-xs tracking-[0.15em] font-bold uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Network Nodes</a>
        </div>
        <div className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-outline-variant">
          © {new Date().getFullYear()} SMRION INFRASTRUCTURE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
