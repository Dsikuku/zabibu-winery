"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Wine } from '@/lib/data'; // Importing the shared interface

interface WineCardProps {
  wine: Wine;
}

export default function WineCard({ wine }: WineCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative flex flex-col"
    >
      {/* Product Image Container */}
      <Link href={`/shop/${wine.id}`}>
        <div className="relative aspect-[3/4] bg-white rounded-[2rem] overflow-hidden flex items-center justify-center p-8 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
          <Image 
            src={wine.image} 
            alt={wine.name}
            fill
            className="object-contain p-8 transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Quick Add Overlay */}
          <div className="absolute inset-0 bg-zabibu-dark/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
            <button className="w-full bg-white/90 backdrop-blur-md text-zabibu-dark py-3 rounded-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
              <ShoppingBag size={14} /> Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Wine Info */}
      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-zabibu-gold font-bold">
              {wine.varietal} • {wine.vintage}
            </span>
            <Link href={`/shop/${wine.id}`}>
              <h3 className="font-serif text-xl text-zabibu-dark mt-1 group-hover:text-zabibu-gold transition-colors">
                {wine.name}
              </h3>
            </Link>
          </div>
          <p className="font-sans font-bold text-zabibu-dark">{wine.price}</p>
        </div>
        
        {/* Shortened description for grid view */}
        <p className="text-xs text-gray-500 line-clamp-2 font-light leading-relaxed pt-2">
          {wine.description}
        </p>
      </div>
    </motion.div>
  );
}