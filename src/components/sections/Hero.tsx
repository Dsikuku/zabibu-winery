"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef(null);
  
  // Parallax effect: background moves slower than foreground
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-zabibu-dark"
    >
      {/* 1. Parallax Background Image */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darkened for better readability */}
        <Image 
          src="/images/hero-vinyard.jpg" 
          alt="Grimsby Bench Vineyards at Dawn"
          fill
          className="w-full h-full object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* 2. Hero Content */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="relative z-20 text-center px-6"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-block font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-zabibu-gold mb-6"
        >
          Established in the heart of Grimsby
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-serif text-6xl md:text-8xl text-white leading-tight mb-8"
        >
          Rooted in the <br /> 
          <span className="italic">Ancient Bench</span>
        </motion.h1>

        {/* Updated Button Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link href="/shop">
            <button className="bg-zabibu-gold hover:bg-white text-white hover:text-zabibu-dark px-10 py-4 transition-all duration-300 font-sans text-[10px] font-bold uppercase tracking-widest rounded-full">
              Shop the Collection
            </button>
          </Link>

          <Link href="/visit">
            <button className="border border-white/40 hover:border-white text-white hover:bg-white/10 backdrop-blur-md px-10 py-4 transition-all duration-300 font-sans text-[10px] font-bold uppercase tracking-widest rounded-full">
              Visit the Estate
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* 3. Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}