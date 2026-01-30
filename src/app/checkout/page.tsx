"use client";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, CreditCard, Truck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, totalItems } = useCart();
  const router = useRouter();

  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return acc + price * item.quantity;
  }, 0);

  const shipping = subtotal > 150 ? 0 : 25;
  const tax = subtotal * 0.13; // 13% HST for Ontario
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f1ee] px-6 text-center">
        <h2 className="font-serif text-3xl mb-6 text-[#1a1415]">Your collection is empty.</h2>
        <p className="text-gray-500 mb-8 max-w-sm">Add some artisanal vintages to your cellar before checking out.</p>
        <Link href="/shop" className="bg-[#1a1415] text-white px-10 py-4 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-[#c5a059] transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f1ee] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Checkout Forms */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <button 
              onClick={() => router.back()} 
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-black mb-8 transition-colors"
            >
              <ArrowLeft size={14} /> Back
            </button>
            <h1 className="font-serif text-5xl mb-4 text-[#1a1415]">Checkout</h1>
            <p className="text-gray-500 font-light text-lg">Secure processing for Zabibu Estate members.</p>
          </motion.div>

          {/* Shipping Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-black/5 pb-4">
              <Truck size={20} className="text-[#c5a059]" />
              <h2 className="uppercase tracking-[0.2em] text-sm font-bold">Shipping Destination</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="checkout-input" />
              <input type="text" placeholder="Last Name" className="checkout-input" />
              <input type="email" placeholder="Email Address" className="checkout-input md:col-span-2" />
              <input type="text" placeholder="Street Address" className="checkout-input md:col-span-2" />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" className="checkout-input md:col-span-2" />
              <input type="text" placeholder="City" className="checkout-input" />
              <input type="text" placeholder="Postal Code" className="checkout-input" />
            </div>
          </section>

          {/* Payment Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-black/5 pb-4">
              <CreditCard size={20} className="text-[#c5a059]" />
              <h2 className="uppercase tracking-[0.2em] text-sm font-bold">Payment Details</h2>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Lock size={14} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Secure SSL Encryption</span>
                </div>
                <div className="flex gap-2">
                   {/* Placeholder for card icons */}
                   <div className="w-8 h-5 bg-gray-100 rounded" />
                   <div className="w-8 h-5 bg-gray-100 rounded" />
                </div>
              </div>
              <input type="text" placeholder="Card Number" className="checkout-input w-full mb-4" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Expiry (MM/YY)" className="checkout-input" />
                <input type="text" placeholder="CVC" className="checkout-input" />
              </div>
            </div>
          </section>
          
          <button className="w-full bg-[#1a1415] text-white py-6 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-[#c5a059] transition-all transform active:scale-[0.99] shadow-xl shadow-black/10">
            Authorize Payment — ${total.toFixed(2)}
          </button>
        </div>

        {/* Right Column: Order Summary Sidebar */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-[2.5rem] p-10 sticky top-32 shadow-sm border border-black/5">
            <h3 className="font-serif text-2xl mb-8 border-b border-black/5 pb-4">Order Summary</h3>
            
            <div className="space-y-6 mb-10 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="relative h-20 w-16 bg-[#f8f8f8] rounded-xl overflow-hidden flex-shrink-0 border border-black/5">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <div className="flex flex-col justify-center flex-grow">
                    <h4 className="text-sm font-bold text-[#1a1415] leading-tight">{item.name}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{item.quantity} Bottle{item.quantity > 1 ? 's' : ''}</p>
                  </div>
                  <div className="text-sm font-medium text-[#1a1415]">
                    ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-light">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-light">Shipping (Grimsby Bench)</span>
                <span className={shipping === 0 ? "text-green-600 font-bold" : "font-medium"}>
                  {shipping === 0 ? "Complimentary" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-light">Taxes (HST)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-6 mt-4 border-t border-black/10 text-2xl font-serif text-[#1a1415]">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-[10px] uppercase tracking-widest font-bold">
              <ShieldCheck size={14} className="text-[#c5a059]" />
              Zabibu Quality Guarantee
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}