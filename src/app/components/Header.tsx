import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#00588c] text-white py-6 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="text-xl uppercase font-['Poppins'] tracking-tight">
          Lorem Ipsum
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 lg:gap-12 font-['Poppins'] text-base uppercase tracking-tight">
          <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
          <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
          <a href="#work" className="hover:opacity-80 transition-opacity">Work</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }} // Custom smooth ease
            className="md:hidden absolute left-0 right-0 top-full bg-[#00588c] shadow-2xl z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-8 font-['Poppins'] text-base uppercase tracking-widest px-8 py-10 border-t border-white/10">
              <a href="#home" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Contact</a>
              <a href="#work" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Work</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}