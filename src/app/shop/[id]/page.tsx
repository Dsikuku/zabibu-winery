"use client";
import { useParams, useRouter } from 'next/navigation';
import { WINES } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Plus, ShoppingBag, Globe, Wine, Thermometer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import WineCard from '@/components/ui/WineCard';
import { useCart } from '@/context/CartContext'; // Ensure this path matches your folder structure

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Accessing the cart context logic

  const wine = WINES.find((w) => w.id === params.id);

  if (!wine) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#f4f1ee]">
        <h2 className="font-serif text-3xl mb-4 text-[#1a1415]">Vintage not found.</h2>
        <Link href="/shop" className="text-[#c5a059] underline uppercase tracking-widest text-xs font-bold">
          Return to Collection
        </Link>
      </div>
    );
  }

  const relatedWines = WINES.filter(w => w.id !== wine.id).slice(0, 3);

  // Handler for adding to cart
  const handleAddToCart = () => {
    addToCart(wine, quantity);
    // You could also trigger a toast notification here if desired
  };

  return (
    <main className="min-h-screen bg-[#f4f1ee]/50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-[#1a1415] transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-[600px] lg:h-[800px] bg-white rounded-[3rem] overflow-hidden shadow-sm flex items-center justify-center"
          >
            <Image 
              src={wine.image} 
              alt={wine.name}
              fill
              className="object-contain p-12 hover:scale-105 transition-transform duration-700"
              priority
            />
          </motion.div>

          <div className="flex flex-col">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-[#c5a059] uppercase tracking-[0.3em] text-xs font-bold">
                {wine.varietal} • {wine.vintage}
              </span>
              <h1 className="font-serif text-5xl md:text-6xl text-[#1a1415] mt-4 mb-6 leading-tight">
                {wine.name}
              </h1>
              <p className="text-2xl font-light text-gray-500 mb-8">{wine.price}</p>
              
              <div className="space-y-6 mb-12">
                <p className="text-gray-600 leading-relaxed text-lg font-light">{wine.description}</p>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/50">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#c5a059] mb-3">Tasting Notes</h4>
                  <p className="italic text-[#1a1415] font-serif text-lg">
                    "Reveals layers of crushed limestone and tension that defines the Bench."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-12 border-y border-black/5 py-8">
                <div className="text-center">
                  <Globe size={20} className="mx-auto text-[#c5a059] mb-2" />
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Terroir</p>
                  <p className="text-xs text-[#1a1415]">Grimsby Bench</p>
                </div>
                <div className="text-center">
                  <Wine size={20} className="mx-auto text-[#c5a059] mb-2" />
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Aging</p>
                  <p className="text-xs text-[#1a1415]">French Oak</p>
                </div>
                <div className="text-center">
                  <Thermometer size={20} className="mx-auto text-[#c5a059] mb-2" />
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Serve</p>
                  <p className="text-xs text-[#1a1415]">10-12°C</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center justify-between border border-black/10 rounded-full px-6 py-4 sm:w-40 bg-white">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="hover:text-[#c5a059] transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-bold w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="hover:text-[#c5a059] transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                
                {/* Add to Cart Button linked to Context */}
                <button 
                  onClick={handleAddToCart}
                  className="flex-grow bg-[#1a1415] text-white rounded-full py-4 px-8 uppercase tracking-widest text-xs font-bold hover:bg-[#c5a059] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/5"
                >
                  <ShoppingBag size={18} /> Add to Collection
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Wines Section */}
        <section className="mt-32 border-t border-black/5 pt-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#c5a059] uppercase tracking-[0.3em] text-[10px] font-bold">Discover More</span>
              <h2 className="font-serif text-4xl text-[#1a1415] mt-2">From the same Terroir</h2>
            </div>
            <Link 
              href="/shop" 
              className="text-[10px] uppercase tracking-widest font-bold border-b border-[#c5a059] pb-1 hover:text-[#c5a059] transition-colors mb-2"
            >
              View Full Collection
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedWines.map((relatedWine) => (
              <WineCard key={relatedWine.id} wine={relatedWine} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}