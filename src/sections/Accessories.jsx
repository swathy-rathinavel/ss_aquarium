import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { accessories } from '../data/accessories';
import GlassCard from '../components/GlassCard';
import WaveDivider from '../components/WaveDivider';

const categories = [
  "All", "Filters & Pumps", "LED Lighting", "Substrates", 
  "Decorations", "CO2 Systems", "Heaters", "Air Pumps", "Protein Skimmers"
];

const Accessories = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? accessories 
    : accessories.filter(item => item.category === activeCategory);

  return (
    <section id="accessories" className="relative w-full py-20 bg-deep-ocean min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Tank Accessories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Premium equipment and hardscape materials to build your perfect aquatic ecosystem.</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 interactive ${
                activeCategory === cat 
                  ? 'bg-ss-cyan text-ss-navy shadow-[0_0_15px_rgba(0,229,255,0.6)]' 
                  : 'bg-ss-steel/30 text-gray-300 hover:bg-ss-steel/50 hover:text-white border border-transparent hover:border-ss-cyan/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard noHoverScale className="h-full flex flex-col p-5 group">
                  <div className="flex justify-between items-start mb-4">
                    <motion.div 
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-white/10 text-gray-300 rounded border border-white/20">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">{item.name}</h3>
                  <p className="text-xs text-gray-400 mb-6 flex-grow">{item.description}</p>
                  
                  <a
                    href={`https://wa.me/917418131756?text=Hi!%20Can%20I%20get%20the%20price%20for%20${encodeURIComponent(item.name)}?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-transparent border border-ss-cyan/50 text-ss-cyan text-sm font-bold rounded hover:bg-ss-cyan hover:text-ss-navy transition-colors duration-300 interactive text-center"
                  >
                    Ask for Price
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl">No accessories found in this category.</p>
          </div>
        )}

      </div>

      <div className="absolute bottom-0 w-full z-20">
        <WaveDivider fillClass="fill-ss-navy" className="transform translate-y-1" flip={true} />
      </div>
    </section>
  );
};

export default Accessories;
