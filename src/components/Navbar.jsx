import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <BrainCircuit className="w-8 h-8 text-cyan-400 group-hover:text-blue-500 transition-colors" />
          <span className="font-bold text-xl tracking-tight text-slate-100">Saqib<span className="text-cyan-400">.AI</span></span>
        </a>
        
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500 hover:text-navy-900 transition-all font-medium text-sm shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.6)]">
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-panel py-4 flex flex-col items-center gap-4 md:hidden border-t border-slate-700/50"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 text-lg">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/50">
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
