import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

import { Insights } from './components/Insights';
import { useVisitorTracker } from './hooks/useVisitorTracker';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Insights', href: '#insights' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  useVisitorTracker();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-white/60 backdrop-blur-sm'
      }`}>
        <div className="section-container flex justify-between items-center py-3 sm:py-4">
          <a href="#" className="text-base sm:text-lg font-semibold text-[#202124] tracking-tight hover:text-[#1a73e8] transition-colors">
            Umer Karachiwala
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 text-sm font-medium text-[#5f6368]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#1a73e8] transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a73e8] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-[#5f6368] hover:text-[#1a73e8] hover:bg-gray-50 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-72 xs:w-80 z-50 bg-white shadow-2xl md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <span className="text-base font-semibold text-[#202124]">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-[#5f6368] hover:text-[#1a73e8] hover:bg-gray-50 rounded-xl transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col py-4 px-3 gap-1 flex-grow">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-[#5f6368] hover:text-[#1a73e8] hover:bg-[#e8f0fe] font-medium py-3 px-4 rounded-xl transition-all text-[15px]"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="p-5 border-t border-gray-100">
                <a
                  href="mailto:karachiwalaumer2612@gmail.com"
                  className="block w-full text-center bg-[#1a73e8] text-white font-medium py-3 rounded-xl hover:bg-[#1557b0] transition-colors text-sm"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-14 sm:pt-16">
        <Hero />
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="insights"><Insights /></div>
        <div id="skills"><Skills /></div>
        <div id="education"><Education /></div>
        <div id="certifications"><Certifications /></div>
        <div id="achievements"><Achievements /></div>
        <div id="contact"><Contact /></div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6 sm:py-8">
        <div className="section-container text-center text-xs sm:text-sm text-[#9aa0a6]">
          © {new Date().getFullYear()} Umer Karachiwala. Built with React & Tailwind.
        </div>
      </footer>
    </div>
  );
}

export default App;
