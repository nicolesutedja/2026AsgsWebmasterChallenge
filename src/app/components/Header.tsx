export default function Header() {
  return (
    <header className="bg-[#00588c] text-white py-6 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="text-xl uppercase font-['Poppins'] tracking-tight">
          Lorem Ipsum
        </div>
        
        <nav className="hidden md:flex gap-8 lg:gap-12 font-['Poppins'] text-base uppercase tracking-tight">
          <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
          <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
          <a href="#work" className="hover:opacity-80 transition-opacity">Work</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
