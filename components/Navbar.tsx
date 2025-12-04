import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onEnterDashboard?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onEnterDashboard }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Explicitly find element
    const element = document.querySelector(id);
    if (element) {
        const offset = 80; // Navbar height approx
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    } else {
        console.warn(`Section with id ${id} not found`);
    }
  };

  const links = [
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'Démo', href: '#demo' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Notre Histoire', href: '#about' },
  ];

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      {/* Container - removed pointer-events-none to ensure all clicks register naturally */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
            className="flex items-center gap-4 cursor-pointer relative z-[1001] group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow duration-300">
             {/* Professional Geometric K Logo */}
             <svg viewBox="0 0 100 100" fill="currentColor" className="w-[60%] h-[60%] text-black">
                <path d="M24 16h16v28l26-28h18L54 46l32 38H66L40 54v30H24V16z" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white hidden md:block group-hover:text-slate-200 transition-colors">
            KALL
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md relative z-[1001]">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="px-5 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-full cursor-pointer select-none"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4 relative z-[1001]">
            <button 
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    if (onEnterDashboard) onEnterDashboard();
                }}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/5 cursor-pointer z-50"
            >
                Espace Client
            </button>
            <a 
                href="#pricing" 
                onClick={(e) => handleScrollToSection(e, '#pricing')}
                className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 text-white text-sm font-bold overflow-hidden transition-all shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:shadow-[0_0_50px_rgba(139,92,246,0.8)] hover:scale-105 border border-white/20 cursor-pointer z-50"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10">Essai Gratuit 7j</span>
            </a>
        </div>

        {/* Mobile Toggle */}
        <button 
            type="button"
            className="md:hidden text-white z-[1001] p-2 bg-white/10 rounded-full relative cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-black z-[1000] flex flex-col pt-32 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-8">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="text-3xl font-bold text-white tracking-tight cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <button 
                type="button"
                onClick={() => { setMobileMenuOpen(false); if (onEnterDashboard) onEnterDashboard(); }} 
                className="text-3xl font-bold text-slate-400 tracking-tight text-left cursor-pointer"
              >
                Espace Client
              </button>
              <a 
                href="#pricing" 
                onClick={(e) => handleScrollToSection(e, '#pricing')} 
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 text-white font-bold text-lg shadow-[0_0_25px_rgba(139,92,246,0.5)] text-center cursor-pointer"
              >
                  Essai Gratuit 7j
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
};

export default Navbar;