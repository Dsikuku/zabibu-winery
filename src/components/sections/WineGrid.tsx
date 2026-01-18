"use client";
import { motion } from 'framer-motion';
import { WINES } from '@/lib/data';
import WineCard from '@/components/ui/WineCard';
import Link from 'next/link';

export default function WineGrid() {
  return (
    <section id="wine-grid" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[#c5a059] uppercase tracking-[0.3em] text-xs font-bold">The Cellar</span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#1a1415] mt-4">Current <span className="italic">Releases</span></h2>
          </div>
          <Link 
            href="/shop" 
            className="text-xs uppercase tracking-widest font-bold border-b-2 border-[#c5a059] pb-1 hover:text-[#c5a059] transition-colors"
          >
            Explore the Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {WINES.slice(0, 3).map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <WineCard wine={wine} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}