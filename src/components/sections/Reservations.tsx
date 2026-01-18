"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, Check } from 'lucide-react';

export default function Reservations() {
  const [step, setStep] = useState(1);
  const [selectedTasting, setSelectedTasting] = useState('');

  const tastings = [
    { id: 'bench', name: 'Bench Flight', price: '$25', desc: '4 signature VQA wines.' },
    { id: 'heritage', name: 'Heritage Tour', price: '$45', desc: 'Cellar tour & library wines.' },
    { id: 'sunset', name: 'Sunset Pairing', price: '$65', desc: 'Charcuterie & lake views.' }
  ];

  return (
    <section className="py-24 bg-zabibu-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left: The Atmosphere (Explicitly light text) */}
        <div className="flex flex-col justify-center">
          <span className="text-zabibu-gold uppercase tracking-widest text-sm mb-4 font-bold">Visit the Estate</span>
          <h2 className="font-serif text-5xl md:text-6xl mb-8 text-white">Taste the <br /> <span className="italic text-white/90">Unspoken Story</span></h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md">
            Our tasting room in Grimsby offers a panoramic view of the Escarpment. Join us for an intimate exploration of Zabibu’s finest vintages.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-2 rounded-lg text-black"><Clock size={20}/></div>
              <div>
                <h4 className="font-bold text-white">Daily Tastings</h4>
                <p className="text-sm text-gray-200">11:00 AM — 7:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-2 rounded-lg text-black"><Users size={20}/></div>
              <div>
                <h4 className="font-bold text-white">Group Sizes</h4>
                <p className="text-sm text-gray-200">Intimate groups up to 8 guests.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The Booking UI (Explicitly DARK text for visibility on white) */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-zinc-900 shadow-2xl">
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className={`h-1 w-full mx-1 rounded-full ${step >= num ? 'bg-white' : 'bg-gray-200'}`} />
            ))}
          </div>

          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h3 className="font-serif text-2xl mb-6 text-zinc-900">Select your experience</h3>
              <div className="space-y-4">
                {tastings.map((t) => (
                  <button 
                    key={t.id}
                    onClick={() => { setSelectedTasting(t.name); setStep(2); }}
                    className="w-full text-left p-4 border border-gray-200 rounded-xl hover:border-zabibu-gold hover:bg-gray-50 transition-all group flex justify-between items-center"
                  >
                    <div>
                      <p className="font-bold text-lg text-zinc-900">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.desc}</p>
                    </div>
                    <span className="text-zabibu-gold font-serif font-bold">{t.price}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <button onClick={() => setStep(1)} className="text-xs uppercase tracking-widest text-gray-400 mb-4 hover:text-zinc-900 transition-colors">← Back</button>
              <h3 className="font-serif text-2xl mb-6 text-zinc-900">Pick a Date & Time</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg text-center cursor-pointer border border-transparent hover:border-zabibu-gold transition-all">
                  <p className="text-xs uppercase text-gray-500">Sat</p>
                  <p className="text-xl font-bold text-zinc-900">Jan 24</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center cursor-pointer border border-transparent hover:border-zabibu-gold transition-all">
                  <p className="text-xs uppercase text-gray-500">Sun</p>
                  <p className="text-xl font-bold text-zinc-900">Jan 25</p>
                </div>
              </div>
              <button onClick={() => setStep(3)} className="w-full bg-zinc-900 text-white py-4 rounded-xl hover:bg-zabibu-gold transition-all uppercase tracking-widest text-sm font-bold">
                Confirm Selection
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} />
              </div>
              <h3 className="font-serif text-2xl mb-2 text-zinc-900">Request Received</h3>
              <p className="text-gray-500 mb-8">We've held a spot for the {selectedTasting}. Expect a confirmation email shortly.</p>
              <button onClick={() => setStep(1)} className="text-zabibu-gold underline underline-offset-4 font-bold">Start Over</button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}