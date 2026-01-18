"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Vineyard', href: '/vineyard' }, // Updated to anchor links for the homepage
    { name: 'Shop Wines', href: '/shop' },
    { name: 'Experiences', href: '/visit' },
    { name: 'Society', href: '/club' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm text-zabibu-dark' 
        : 'py-8 bg-transparent text-zabibu-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Left: Desktop Links */}
        <div className="hidden md:flex gap-8 items-center text-xs uppercase tracking-[0.2em] font-sans font-bold">
          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-zabibu-gold transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center: Logo */}
        <Link href="/" className="text-3xl font-serif tracking-tighter text-zabibu-dark bg-white/40 backdrop-blur-sm px-4 py-1 rounded-sm transition-transform hover:scale-105">
            ZABIBU
        </Link>

        {/* Right: Links & Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 items-center text-xs uppercase tracking-[0.2em] font-sans font-bold">
            {navLinks.slice(2).map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-zabibu-gold transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-current/10 pl-6">
            <User size={18} className="cursor-pointer hover:text-zabibu-gold transition-colors" />
            
            {/* Shopping Bag with Animation */}
            <div className="relative cursor-pointer group">
              <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-zabibu-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenu(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8 text-zabibu-dark"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif text-2xl uppercase tracking-tighter">Zabibu</span>
              <button onClick={() => setMobileMenu(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenu(false)}
                  className="text-4xl font-serif hover:text-zabibu-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}