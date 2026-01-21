"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force solid background on subpages or when scrolled
  const shouldBeSolid = !isHome || isScrolled;

  return (
    <nav 
      style={{
        backgroundColor: shouldBeSolid ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        color: shouldBeSolid ? '#1a1415' : '#ffffff',
        borderBottom: shouldBeSolid ? '1px solid rgba(0,0,0,0.1)' : 'none',
      }}
      className="fixed w-full z-[9999] transition-all duration-300 py-4 lg:py-6"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Desktop Links Left */}
        <div className="hidden lg:flex gap-8 items-center text-[10px] uppercase tracking-[0.3em] font-bold">
          <Link href="/vineyard" className="hover:text-[#c5a059] transition-colors">The Vineyard</Link>
          <Link href="/shop" className="hover:text-[#c5a059] transition-colors">Shop Wines</Link>
        </div>

        {/* Center: Logo */}
        <Link 
          href="/" 
          className="text-3xl font-serif tracking-tighter transition-transform hover:scale-105"
          style={{ color: shouldBeSolid ? '#1a1415' : '#ffffff' }}
        >
            ZABIBU
        </Link>

        {/* Right Group */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex gap-8 items-center text-[10px] uppercase tracking-[0.3em] font-bold">
            <Link href="/visit" className="hover:text-[#c5a059] transition-colors">Experiences</Link>
            <Link href="/club" className="hover:text-[#c5a059] transition-colors">Society</Link>
          </div>
          
          <div className="flex items-center gap-4 border-l border-current/20 pl-6">
            <div className="relative cursor-pointer">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-[#c5a059] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </div>
            
            {/* Hamburger Button - Forced Visibility */}
            <button 
              className="lg:hidden p-2" 
              onClick={() => setMobileMenu(true)}
              style={{ color: shouldBeSolid ? '#1a1415' : '#ffffff' }}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#f4f1ee] z-[10000] flex flex-col p-8 text-[#1a1415]"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl uppercase tracking-tighter">Zabibu</span>
              <button onClick={() => setMobileMenu(false)} className="p-2"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 text-4xl font-serif">
              <Link href="/vineyard" onClick={() => setMobileMenu(false)}>The Vineyard</Link>
              <Link href="/shop" onClick={() => setMobileMenu(false)}>Shop Wines</Link>
              <Link href="/visit" onClick={() => setMobileMenu(false)}>Experiences</Link>
              <Link href="/club" onClick={() => setMobileMenu(false)}>Society</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}