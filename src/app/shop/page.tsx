"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WINES } from '@/lib/data';
import WineCard from '@/components/ui/WineCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

const CATEGORIES = ["All", "Red", "White", "Rosé", "Sparkling"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWines = activeCategory === "All" 
    ? WINES 
    : WINES.filter(wine => wine.varietal.toLowerCase().includes(activeCategory.toLowerCase()) || 
                          (activeCategory === "Red" && ["Pinot Noir", "Cabernet"].includes(wine.name)));

  return (
    <main className="min-h-screen pt-40 pb-20 bg-zabibu-stone/20">
      {/* Header & Filter Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-zabibu-gold uppercase tracking-[0.3em] text-xs font-bold">The Collection</span>
            <h1 className="font-serif text-5xl md:text-6xl text-zabibu-dark mt-4">Shop <span className="italic">Vintages</span></h1>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all border ${
                  activeCategory === cat
                    ? "bg-zabibu-dark text-white border-zabibu-dark"
                    : "bg-transparent text-gray-400 border-gray-200 hover:border-zabibu-gold hover:text-zabibu-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex items-center justify-between border-b border-black/5 pb-6">
          <p className="text-sm text-gray-500 font-light">
            Showing <span className="font-bold text-zabibu-dark">{filteredWines.length}</span> limited release wines
          </p>
          <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-zabibu-gold transition-colors">
            <SlidersHorizontal size={14} /> Sort By
          </button>
        </div>
      </section>

      {/* Wine Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode='popLayout'>
            {filteredWines.map((wine) => (
              <motion.div
                key={wine.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <WineCard wine={wine} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredWines.length === 0 && (
          <div className="py-40 text-center">
            <p className="font-serif text-2xl text-gray-400">No vintages found in this category.</p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-zabibu-gold underline uppercase tracking-widest text-xs font-bold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Shipping Note */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-zabibu-dark p-12 rounded-[3rem] text-center text-white">
          <h3 className="font-serif text-3xl mb-4">Direct from the Bench to your Door</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 font-light">
            We offer temperature-controlled shipping across Ontario. 
            Complimentary shipping on orders of 6 bottles or more.
          </p>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <p className="text-2xl font-serif text-zabibu-gold">2-3 Days</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Delivery Time</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif text-zabibu-gold">VQA</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Certified Quality</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}