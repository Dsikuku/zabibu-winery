"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Story() {
  return (
    <section className="py-24 bg-zabibu-stone/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Meaning */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl text-zabibu-dark mb-8 leading-tight">
              A Name with Roots. <br />
              <span className="italic text-zabibu-gold">A Place with Soul.</span>
            </h2>
            
            <div className="space-y-6 font-sans text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Zabibu</strong> the Swahili word for grapes reflects our belief 
                that wine is a universal language. It is a tribute to heritage, 
                journey, and the vibrant life found within the vine.
              </p>
              <p>
                Nestled on the <strong>Grimsby</strong>, our vineyards sit on 
                450-million-year-old glacial silt and limestone. This unique terroir 
                stresses the vines just enough to produce grapes with unmatched 
                character and minerality.
              </p>
              <div className="pt-4">
                <div className="h-[1px] w-20 bg-zabibu-gold mb-4" />
                <p className="text-sm uppercase tracking-widest text-zabibu-dark font-bold">
                  Sustainable. Local. Global.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Visuals (Overlapping Images) */}
          <div className="relative h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-4/5 h-4/5 z-10 rounded-sm overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/story-vineyard.jpg" 
                alt="Close up of Grimsby grapes"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 w-3/5 h-3/5 z-20 border-8 border-white rounded-sm overflow-hidden shadow-xl"
            >
              <Image 
                src="/images/story-cellar.jpg" 
                alt="Zabibu aging cellar"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}