import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = ['home', 'cars', 'booking', 'contact'];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);

    let current = 'home'; // default
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section;
          break;
        }
      }
    }
    setActiveSection(current);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // call initially on load
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-white">RentalEase</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {sections.map(section => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`transition hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === section
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-200'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            <motion.nav
              className="fixed top-16 left-4 right-4 z-50 bg-white dark:bg-gray-900 rounded-lg shadow-lg md:hidden px-4 py-6 space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              {sections.map(section => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`block py-2 px-4 rounded transition ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
