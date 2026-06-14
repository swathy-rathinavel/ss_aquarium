import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import GlassCard from '../components/GlassCard';
import WaveDivider from '../components/WaveDivider';

const categories = [
  "All", "Fish Food", "Medicines", "Water Conditioners", 
  "Test Kits", "Live Plants", "Fertilizers", "Bacteria Cultures"
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? products 
    : products.filter(item => item.category === activeCategory);

  return (
    <section id="products" className="relative w-full py-20 bg-ss-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Fish & Aquarium Products
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Top-tier nutrition, health care, and maintenance supplies from trusted brands.</p>
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
                  <div className="flex justify-between items-start mb-3">
                    <motion.div 
                      className="text-4xl drop-shadow-lg"
                      whileHover={{ scale: 1.2, rotate: [0, 5, -5, 5, 0] }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-white/10 text-gray-300 rounded border border-white/20">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-[10px] text-ss-aqua font-bold tracking-widest uppercase mb-1">{item.brand}</p>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">{item.name}</h3>
                  <p className="text-xs text-gray-400 mb-6 flex-grow">{item.description}</p>
                  
                  <a
                    href={`https://wa.me/918946057561?text=Hi!%20Is%20${encodeURIComponent(item.name)}%20(${encodeURIComponent(item.brand)})%20available?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-ss-steel/30 border border-ss-cyan/30 text-white text-sm font-bold rounded hover:bg-ss-cyan hover:text-ss-navy transition-colors duration-300 interactive text-center"
                  >
                    Check Availability
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl">No products found in this category.</p>
          </div>
        )}

      </div>

      <div className="absolute bottom-0 w-full z-20">
        <WaveDivider fillClass="fill-[#020812]" className="transform translate-y-1" />
      </div>
    </section>
  );
};

export default Products;
