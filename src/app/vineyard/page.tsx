"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const STORY_SECTIONS = [
  {
    title: "The Grimsby Bench",
    subtitle: "A Geologic Legacy",
    content: "Our vines are rooted in the ancient limestone of the Niagara Escarpment. This unique benchland sits at an elevation that catches the constant breeze from Lake Ontario, providing a natural cooling effect that preserves the delicate acidity in our grapes.",
    image: "/images/vineyard/soil.jpg", 
    side: "left"
  },
  {
    title: "The Lake Influence",
    subtitle: "Thermal Tension",
    content: "The proximity to the water creates a 'thermal blanket.' In the spring, the lake delays bud burst until the risk of frost has passed. In the autumn, it holds the summer heat, allowing our fruit to ripen slowly and develop complex, concentrated flavors.",
    image: "/images/vineyard/lake.jpg",
    side: "right"
  },
  {
    title: "Viticulture",
    subtitle: "Minimal Intervention",
    content: "We believe great wine is made in the vineyard, not the lab. By practicing sustainable viticulture and hand-harvesting every cluster, we ensure that the bottle you open is a pure reflection of this specific piece of earth.",
    image: "/images/vineyard/viticulture.jpg",
    side: "left"
  }
];

export default function VineyardPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ee]">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/vineyard/hero-landscape.jpg" 
          alt="Zabibu Estate Panorama"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            Rooted in Limestone
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl"
          >
            The <span className="italic">Vineyard</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-serif text-3xl md:text-4xl text-[#1a1415] leading-snug italic"
        >
          "We don't just grow grapes; we listen to the tension between the limestone cliffs and the lake breezes."
        </motion.p>
        <div className="w-12 h-[1px] bg-[#c5a059] mx-auto mt-8" />
      </section>

      {/* Story Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="space-y-40">
          {STORY_SECTIONS.map((section, i) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col gap-12 items-center ${
                section.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Image Column */}
              <div className="flex-1 w-full">
                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image 
                    src={section.image} 
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 space-y-6 px-4">
                <span className="text-[#c5a059] uppercase tracking-widest text-xs font-bold">
                  {section.subtitle}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1a1415]">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Terroir Stats */}
      <section className="bg-[#1a1415] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Elevation", val: "145m" },
            { label: "Soil Type", val: "Limestone" },
            { label: "Vines Per Acre", val: "2,200" },
            { label: "Lake Distance", val: "1.2km" }
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[#c5a059] font-serif text-4xl mb-2">{stat.val}</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}