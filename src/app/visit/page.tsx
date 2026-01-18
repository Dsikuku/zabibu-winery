"use client";
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const EXPERIENCES = [
  {
    id: 'terroir-tour',
    title: "Terroir & Texture Tour",
    duration: "90 Minutes",
    price: "$45 per guest",
    description: "A guided walk through our lakeside vineyards, exploring the limestone soils that define our Chardonnay and Pinot Noir.",
    image: "/images/experiences/terroir-tour.jpg"
  },
  {
    id: 'cellar-tasting',
    title: "Library Cellar Tasting",
    duration: "60 Minutes",
    price: "$65 per guest",
    description: "Go beneath the estate into our private library. Taste vertical flights of our 'Founder’s Reserve' vintages dating back to 2018.",
    image: "/images/experiences/cellar-tasting.jpg"
  },
  {
    id: 'sunset-pairing',
    title: "Sunset & Sparkle",
    duration: "120 Minutes",
    price: "$85 per guest",
    description: "Local Niagara cheeses paired with our traditional method sparkling wines on the terrace as the sun sets over Lake Ontario.",
    image: "/images/experiences/sunset-pairing.jpg"
  }
];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-zabibu-stone/20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-zabibu-gold uppercase tracking-[0.3em] text-xs font-bold">Visit the Estate</span>
            <h1 className="font-serif text-6xl md:text-7xl text-zabibu-dark mt-4 mb-8 leading-tight">
              An Elevated <br /><span className="italic text-zabibu-vine">Sense of Place</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Located on the steep inclines of the Grimsby Bench, we invite you to experience 
              the tension and elegance of our cool-climate viticulture.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/experiences/hero-vineyard.jpg"
              alt="Zabibu Estate Vineyard"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {EXPERIENCES.map((exp, i) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col gap-12 lg:items-center ${
              i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Image Box */}
            <div className="flex-1 relative h-[450px] group overflow-hidden rounded-[2.5rem]">
              <Image 
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>

            {/* Content Box */}
            <div className="flex-1 space-y-6">
              <div className="flex gap-4 items-center text-zabibu-gold text-sm font-bold tracking-widest uppercase">
                <span className="flex items-center gap-1"><Clock size={16}/> {exp.duration}</span>
                <span className="w-1 h-1 bg-zabibu-gold rounded-full" />
                <span>{exp.price}</span>
              </div>
              <h2 className="font-serif text-4xl text-zabibu-dark">{exp.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {exp.description}
              </p>
              
              <div className="pt-4 flex flex-wrap gap-8 border-t border-black/5">
                 <div className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-tighter">
                    <Users size={18} /> Max 6 Guests
                 </div>
                 <div className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-tighter">
                    <MapPin size={18} /> Estate Vineyard
                 </div>
              </div>

              <button className="group flex items-center gap-3 bg-zabibu-dark text-white px-8 py-4 rounded-full hover:bg-zabibu-gold transition-all uppercase text-[10px] font-bold tracking-widest">
                Check Availability <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Booking Help */}
      <section className="max-w-3xl mx-auto px-6 mt-40 text-center bg-white p-16 rounded-[3rem] shadow-sm">
        <h3 className="font-serif text-3xl mb-4">Private Events</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Planning an intimate wedding or corporate retreat? Our terrace and cellar are available 
          for exclusive bookings.
        </p>
        <button className="text-zabibu-dark font-bold border-b-2 border-zabibu-gold pb-1 hover:text-zabibu-gold transition-colors tracking-widest text-xs uppercase">
          Inquire About Private Bookings
        </button>
      </section>
    </main>
  );
}