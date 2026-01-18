"use client";
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const FOOTER_LINKS = {
  shop: [
    { name: 'All Vintages', href: '/shop' },
    { name: 'Red Wines', href: '/shop?cat=Red' },
    { name: 'White Wines', href: '/shop?cat=White' },
    { name: 'Library Collection', href: '/shop' },
  ],
  estate: [
    { name: 'Our Story', href: '/vineyard' },
    { name: 'The Vineyard', href: '/vineyard' },
    { name: 'Experiences', href: '/visit' },
    { name: 'The Society', href: '/club' },
  ],
  support: [
    { name: 'Shipping Policy', href: '#' },
    { name: 'Wholesale', href: '#' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy', href: '#' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1415] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="space-y-8">
            <Link href="/" className="text-3xl font-serif tracking-tighter hover:text-[#c5a059] transition-colors">
              ZABIBU
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Join our mailing list for early access to limited allocations and estate news.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-gray-700 pb-2 text-sm focus:outline-none focus:border-[#c5a059] transition-colors font-light"
              />
              <button className="absolute right-0 bottom-2 text-[#c5a059] uppercase text-[10px] font-bold tracking-widest hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.shop.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#c5a059] text-sm transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The Estate */}
          <div>
            <h4 className="font-serif text-lg mb-6">The Estate</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.estate.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#c5a059] text-sm transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg mb-6">Visit Us</h4>
            <div className="space-y-4 text-sm text-gray-400 font-light">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="text-[#c5a059] shrink-0" />
                <span>4230 Vineyard Way,<br />Grimsby, ON L3M 4E8</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-[#c5a059] shrink-0" />
                <span>+1 (905) 555-0123</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-[#c5a059] shrink-0" />
                <span>concierge@zabibu.com</span>
              </p>
            </div>
            <div className="flex gap-6 pt-4">
              <Instagram size={20} className="hover:text-[#c5a059] cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-[#c5a059] cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-[#c5a059] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            © 2026 Zabibu Estate Winery. Please drink responsibly.
          </p>
          <div className="flex gap-8 items-center opacity-40 grayscale">
            {/* These are placeholder VQA/Sustainable icons */}
            <div className="text-[10px] font-bold border border-white px-2 py-1">VQA</div>
            <div className="text-[10px] font-bold border border-white px-2 py-1">SUSTAINABLE</div>
          </div>
        </div>
      </div>
    </footer>
  );
}