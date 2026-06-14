import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fish } from '../data/fish';
import GlassCard from '../components/GlassCard';
import WaveDivider from '../components/WaveDivider';
import { Activity, Droplet, Send } from 'lucide-react';

const categories = ["All", "Freshwater", "Saltwater", "Planted Tank", "Cichlids", "Bettas", "Discus", "Arowana", "Schooling Fish"];

const ExoticFish = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFish = activeCategory === "All" 
    ? fish 
    : fish.filter(f => f.category === activeCategory);

  const careLevelColor = {
    Easy: "text-green-400 border-green-400/30 bg-green-400/10",
    Moderate: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    Expert: "text-red-400 border-red-400/30 bg-red-400/10"
  };

  return (
    <section id="fish" className="relative w-full py-20 bg-ss-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center justify-center gap-3">
            Our Exotic Fish Collection <span className="text-ss-cyan animate-pulse">🐠</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Discover our carefully curated selection of healthy, vibrant aquatic life.</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 interactive ${
                activeCategory === cat 
                  ? 'bg-ss-cyan text-ss-navy shadow-[0_0_15px_rgba(0,229,255,0.6)]' 
                  : 'bg-ss-steel/30 text-gray-300 hover:bg-ss-steel/50 hover:text-white border border-transparent hover:border-ss-cyan/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Fish Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFish.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-ss-steel/40 to-ss-navy/80 flex items-center justify-center rounded-t-xl border-b border-white/10 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <span className="text-6xl drop-shadow-xl">{item.name.includes('Betta') ? '🪸' : '🐠'}</span>
                    <div className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 text-white">
                      {item.category}
                    </div>
                  </div>
                  
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-xs text-ss-aqua italic mb-3">{item.scientificName}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full border ${careLevelColor[item.careLevel]}`}>
                        {item.careLevel === "Easy" ? "🟢" : item.careLevel === "Moderate" ? "🟡" : "🔴"} {item.careLevel}
                      </span>
                    </div>

                    <p className="text-sm text-gray-300 mb-4 line-clamp-2 flex-grow">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-5">
                      <div className="flex items-center text-xs text-gray-400">
                        <Activity size={14} className="mr-2 text-ss-coral" />
                        <span className="font-semibold text-gray-300 mr-1">Temperament:</span> {item.temperament}
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Droplet size={14} className="mr-2 text-ss-teal" />
                        <span className="font-semibold text-gray-300 mr-1">Tank Size:</span> {item.tankSize}
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/918946057561?text=Hi%20SS%20Aquarium!%20I'm%20interested%20in%20the%20${encodeURIComponent(item.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full py-2.5 rounded-lg bg-ss-steel/50 hover:bg-ss-cyan hover:text-ss-navy border border-ss-cyan/30 text-ss-cyan font-bold flex items-center justify-center transition-all duration-300 interactive group/btn"
                    >
                      <Send size={16} className="mr-2 group-hover/btn:translate-x-1 transition-transform" />
                      Enquire Now
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredFish.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl">No fish found in this category right now.</p>
          </div>
        )}

      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full z-20">
        <WaveDivider fillClass="fill-[#08182b]" className="transform translate-y-1" flip={true} />
      </div>
    </section>
  );
};

export default ExoticFish;
