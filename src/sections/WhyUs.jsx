import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import WaveDivider from '../components/WaveDivider';
import { Sparkles, Leaf, Wrench, HeartPulse, Layers, CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: "Rare Imported Species",
    description: "We source exotic fish directly from trusted breeders across India and abroad — species you won't find elsewhere.",
    icon: <Sparkles size={32} className="text-ss-gold" />,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
  },
  {
    title: "Expert Aquascaping",
    description: "Our custom planted tank designs turn any space into a living piece of art — from nano tanks to showroom displays.",
    icon: <Leaf size={32} className="text-green-400" />,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-2"
  },
  {
    title: "End-to-End Setup",
    description: "We handle everything — consultation, installation, plumbing, lighting, and stocking. You just enjoy the view.",
    icon: <Wrench size={32} className="text-ss-cyan" />,
    colSpan: "col-span-1 lg:col-span-2"
  },
  {
    title: "Fish Health Support",
    description: "Sathish and Jai personally guide you on fish health, water parameters, and disease prevention — even after purchase.",
    icon: <HeartPulse size={32} className="text-ss-coral" />,
    colSpan: "col-span-1"
  },
  {
    title: "All Types Covered",
    description: "Freshwater, Saltwater, Planted, Biotope, Cichlid tanks — we have the expertise for every aquarium style.",
    icon: <Layers size={32} className="text-ss-aqua" />,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs. Clear quotes, quality products, and honest advice every time.",
    icon: <CheckCircle size={32} className="text-ss-mint" />,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-2"
  }
];

const WhyUs = () => {
  return (
    <section id="whyus" className="relative w-full py-20 bg-ss-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Why SS Aquarium?
          </h2>
          <p className="text-ss-teal font-semibold tracking-wide uppercase text-sm md:text-base max-w-2xl mx-auto">
            What makes us different from every other aquarium store
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            // Alternate slight rotation for asymmetric feel
            const rotateDeg = index % 2 === 0 ? -1 : 1;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: rotateDeg }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className={`${reason.colSpan} glass-effect p-8 flex flex-col justify-center h-full relative group`}
              >
                <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-white/10 transition-colors border border-white/10">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-ss-cyan/30 transition-colors duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <div className="absolute bottom-0 w-full z-20">
        <WaveDivider fillClass="fill-[#05111f]" className="transform translate-y-1" flip={true} />
      </div>
    </section>
  );
};

export default WhyUs;
