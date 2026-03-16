import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 transition-all duration-500 bg-brand-950 text-white border-b border-brand-900 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo/WhatsApp Image 2026-03-13 at 1.00.06 PM.jpeg"
                alt="Biowin Life Science logo"
                className="h-9 md:h-10 w-auto object-contain rounded-md bg-white/95 px-2 py-1 group-hover:scale-105 transition-transform duration-300 shadow-sm"
              />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white leading-none">
                BIOWIN <span className="text-brand-400 font-medium">LIFE SCIENCE</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative group py-3 text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  <span className={`${isActive(link.href) ? 'text-brand-300' : 'text-white/85'} group-hover:text-brand-300 transition-colors`}>
                    {link.name}
                  </span>
                  {isActive(link.href) && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-brand-300 rounded-full"
                    />
                  )}
                </Link>
              ))}
              <div className="flex items-center text-sm font-semibold text-white/80">
                <Phone className="w-4 h-4 mr-2 text-brand-300" />
                +91 7337224447
              </div>
              <Link
                to="/contact"
                className="bg-brand-500 text-white px-7 py-3 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-brand-400 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`${isActive(link.href) ? 'text-brand-600 bg-brand-50' : 'text-brand-900'} block px-3 py-4 text-base font-medium border-b border-brand-50`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-3 pt-4 text-sm font-semibold text-brand-900">
                <Phone className="w-4 h-4 text-brand-600" />
                +91 7337224447
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
