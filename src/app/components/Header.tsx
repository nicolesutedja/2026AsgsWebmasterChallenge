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

      {/* Mobile Menu Dropdown with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            // overflow-hidden is critical here so the text doesn't spill out while the height is animating
            className="md:hidden overflow-hidden"
          >
            {/* Inner container: We put the padding and margins here instead of the motion.nav.
              If you animate height: 0 on an element with vertical padding, it causes visual jumping.
            */}
            <div className="mt-6 flex flex-col gap-6 font-['Poppins'] text-base uppercase tracking-tight border-t border-white/20 pt-6 pb-2">
              <a href="#home" className="hover:opacity-80 transition-opacity" onClick={toggleMenu}>Home</a>
              <a href="#about" className="hover:opacity-80 transition-opacity" onClick={toggleMenu}>About</a>
              <a href="#contact" className="hover:opacity-80 transition-opacity" onClick={toggleMenu}>Contact</a>
              <a href="#work" className="hover:opacity-80 transition-opacity" onClick={toggleMenu}>Work</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}