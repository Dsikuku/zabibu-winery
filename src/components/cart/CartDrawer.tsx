"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, totalItems } = useCart();

  // Calculate subtotal
  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + (price * item.quantity);
  }, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[10001]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#f4f1ee] shadow-2xl z-[10002] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-black/5 flex justify-between items-center bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} />
                <h2 className="font-serif text-xl">Your Collection ({totalItems})</h2>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:rotate-90 transition-transform duration-300">
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <p className="font-serif text-xl text-gray-400">Your cellar is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-[#c5a059] uppercase tracking-widest text-xs font-bold border-b border-[#c5a059] pb-1"
                  >
                    Browse Collection
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm">
                    <div className="relative h-24 w-20 flex-shrink-0 bg-[#f8f8f8] rounded-xl overflow-hidden">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="font-serif text-lg leading-tight">{item.name}</h3>
                        <p className="text-[#c5a059] text-[10px] uppercase tracking-widest mt-1">{item.vintage} • {item.varietal}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-3 border border-black/5 rounded-full px-3 py-1">
                          <button onClick={() => removeFromCart(item.id)}><Minus size={14} /></button>
                          <span className="text-sm font-bold">{item.quantity}</span>
                          <button onClick={() => addToCart(item, 1)}><Plus size={14} /></button>
                        </div>
                        <p className="font-medium text-sm">{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-white border-t border-black/5 space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                  <span className="text-2xl font-serif">${subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-[#1a1415] text-white rounded-full py-5 px-8 uppercase tracking-widest text-xs font-bold hover:bg-[#c5a059] transition-all shadow-xl shadow-black/10">
                  Proceed to Checkout
                </button>
                <p className="text-[9px] text-center text-gray-400 uppercase tracking-widest">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}