export default function Footer() {
  return (
    <footer className="w-full border-t border-[#494454]/15 bg-[#0e0e0e]">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full max-w-screen-2xl mx-auto">
        <div className="text-lg font-black text-[#e5e2e1] font-headline mb-4 md:mb-0">SMRION</div>
        <div className="flex flex-wrap justify-center gap-8 mb-4 md:mb-0">
          <a className="font-label text-[10px] tracking-widest uppercase text-[#e5e2e1]/40 hover:text-[#e5e2e1] transition-colors" href="#">Privacy Policy</a>
          <a className="font-label text-[10px] tracking-widest uppercase text-[#e5e2e1]/40 hover:text-[#e5e2e1] transition-colors" href="#">Terms of Service</a>
          <a className="font-label text-[10px] tracking-widest uppercase text-[#e5e2e1]/40 hover:text-[#e5e2e1] transition-colors" href="#">Status</a>
          <a className="font-label text-[10px] tracking-widest uppercase text-[#e5e2e1]/40 hover:text-[#e5e2e1] transition-colors" href="#">Network Nodes</a>
        </div>
        <div className="font-label text-[10px] tracking-widest uppercase text-[#e5e2e1]/40">
          © {new Date().getFullYear()} SMRION INFRASTRUCTURE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
