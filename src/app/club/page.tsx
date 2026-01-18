"use client";
import { motion } from 'framer-motion';
import { Crown, Star, GlassWater, CalendarDays, Check } from 'lucide-react';

const TIERS = [
  {
    name: "Enthusiast",
    price: "$150 / qtr",
    bottles: "3 Bottles per shipment",
    perks: ["10% off all purchases", "Complimentary tastings for 2", "Early access to new releases"],
  },
  {
    name: "Collector",
    price: "$280 / qtr",
    bottles: "6 Bottles per shipment",
    perks: ["15% off all purchases", "Complimentary tastings for 4", "Invitation to Harvest Dinner", "Free shipping on 6+ bottles"],
  },
  {
    name: "Ambassador",
    price: "$500 / qtr",
    bottles: "12 Bottles per shipment",
    perks: ["20% off all purchases", "Unlimited tastings", "Private cellar booking once/year", "Direct Winemaker access"],
  }
];

export default function SocietyPage() {
  return (
    // bg-[#f4f1ee] is the "zabibu-stone" color
    <main className="min-h-screen pt-40 pb-20 bg-[#f4f1ee]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-[#c5a059] uppercase tracking-[0.3em] text-xs font-bold"
        >
          Exclusive Allocation
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-6xl md:text-8xl text-[#1a1415] mt-4 mb-8"
        >
          The Zabibu <span className="italic text-[#4a0e0e] font-light">Society</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed font-light">
          Join a community of connoisseurs with direct access to our most limited vintages 
          and the evolving story of the Grimsby Bench.
        </p>
      </section>

      {/* Benefits Icons */}
      <section className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-32 border-y border-black/10 py-16">
        {[
          { icon: <Star size={24} />, label: "Curated Selections" },
          { icon: <CalendarDays size={24} />, label: "Member Events" },
          { icon: <GlassWater size={24} />, label: "Private Tastings" },
          { icon: <Crown size={24} />, label: "Library Access" }
        ].map((item, i) => (
          <div key={i} className="text-center space-y-4">
            <div className="flex justify-center text-[#c5a059]">{item.icon}</div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1a1415]">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Tier Selection Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 items-stretch">
        {TIERS.map((tier) => {
          const isAmbassador = tier.name === 'Ambassador';
          const isCollector = tier.name === 'Collector';

          return (
            <motion.div 
              key={tier.name}
              whileHover={{ y: -10 }}
              className={`relative p-10 rounded-3xl border-2 flex flex-col transition-all duration-500 ${
                isAmbassador 
                  ? 'bg-[#1a1415] border-[#1a1415] text-white shadow-2xl' 
                  : 'bg-white border-gray-100 text-[#1a1415]'
              } ${isCollector ? 'border-[#c5a059] shadow-xl md:scale-105 z-10' : ''}`}
            >
              {isCollector && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c5a059] text-white text-[10px] px-4 py-1 rounded-full font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              <h3 className="font-serif text-3xl mb-2">{tier.name}</h3>
              <p className="text-[#c5a059] font-bold text-xl mb-6">{tier.price}</p>
              <p className={`text-sm mb-8 font-medium ${isAmbassador ? 'text-gray-400' : 'text-gray-500'}`}>
                {tier.bottles}
              </p>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {tier.perks.map(perk => (
                  <li key={perk} className="flex items-start gap-3 text-sm leading-tight">
                    <Check size={16} className="mt-0.5 text-[#c5a059] shrink-0" />
                    <span className={isAmbassador ? 'text-gray-300' : 'text-gray-600'}>
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-full uppercase tracking-widest text-[10px] font-bold transition-all duration-300 ${
                isAmbassador 
                ? 'bg-white text-black hover:bg-[#c5a059] hover:text-white' 
                : 'bg-[#1a1415] text-white hover:bg-[#c5a059]'
              }`}>
                Apply for Membership
              </button>
            </motion.div>
          );
        })}
      </section>

      {/* Philosophy Section */}
      <section className="max-w-5xl mx-auto px-6 text-center pb-20">
        <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-black/40 z-10" />
           <div 
             className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80')] bg-cover bg-center" 
           />
           <div className="relative z-20 h-full flex flex-col items-center justify-center p-12">
              <span className="text-[#c5a059] uppercase tracking-[0.4em] text-xs font-bold mb-6">Our Philosophy</span>
              <p className="font-serif text-3xl md:text-5xl text-white italic max-w-3xl leading-tight">
                "Our members aren't just customers; they are the guardians of the Grimsby Bench."
              </p>
           </div>
        </div>
      </section>
    </main>
  );
}