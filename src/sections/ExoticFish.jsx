import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fish } from '../data/fish';
import GlassCard from '../components/GlassCard';
import WaveDivider from '../components/WaveDivider';
import { Activity, Droplet, Send, X } from 'lucide-react';

const categories = ["All", "Freshwater", "Saltwater", "Planted Tank", "Cichlids", "Bettas", "Discus", "Arowana", "Schooling Fish"];

const ExoticFish = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedFish, setSelectedFish] = useState(null);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedFish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedFish]);

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
                <GlassCard className="h-full flex flex-col cursor-pointer" onClick={() => setSelectedFish(item)}>
                  {/* Image Container */}
                  <div className="w-full h-48 relative overflow-hidden rounded-t-xl border-b border-white/10 bg-gradient-to-br from-ss-steel/40 to-ss-navy/80">
                    {item.image ? (
                      <img 
                        src={`${import.meta.env.BASE_URL}${item.image}`} 
                        alt={item.name} 
                        className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl drop-shadow-xl">{item.name.includes('Betta') ? '🪸' : '🐠'}</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 text-white z-10">
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
                      href={`https://wa.me/917418131756?text=Hi%20SS%20Aquarium!%20I'm%20interested%20in%20the%20${encodeURIComponent(item.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedFish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFish(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] lg:max-h-[85vh] bg-[#08182b] rounded-3xl border border-white/10 overflow-y-auto lg:overflow-hidden shadow-2xl flex flex-col lg:flex-row cursor-default lg:h-[550px]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFish(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 text-white hover:bg-white/10 hover:text-ss-cyan transition-colors duration-200 cursor-pointer"
                aria-label="Close details"
              >
                <X size={24} />
              </button>

              {/* Image Container */}
              <div className="w-full lg:w-3/5 h-[250px] sm:h-[350px] lg:h-full relative overflow-hidden bg-black/40 flex-shrink-0">
                {selectedFish.image ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${selectedFish.image}`}
                    alt={selectedFish.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-ss-steel/40 to-ss-navy/80 flex items-center justify-center">
                    <span className="text-8xl drop-shadow-xl">{selectedFish.name.includes('Betta') ? '🪸' : '🐠'}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30 pointer-events-none"></div>
              </div>

              {/* Details Container */}
              <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0d2d4a]/95 to-[#08182b]/95 lg:h-full lg:overflow-y-auto">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 bg-ss-cyan/20 text-ss-cyan rounded-full border border-ss-cyan/30">
                      {selectedFish.category}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${careLevelColor[selectedFish.careLevel]}`}>
                      {selectedFish.careLevel === "Easy" ? "🟢" : selectedFish.careLevel === "Moderate" ? "🟡" : "🔴"} {selectedFish.careLevel}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">
                    {selectedFish.name}
                  </h3>
                  <p className="text-sm text-ss-aqua italic mb-4 border-b border-white/10 pb-4">{selectedFish.scientificName}</p>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-nunito">
                    {selectedFish.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ss-cyan mb-3">
                    Fish Information
                  </h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-300">
                      <Activity size={16} className="mr-3 text-ss-coral" />
                      <span className="font-semibold text-gray-200 mr-2">Temperament:</span> {selectedFish.temperament}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Droplet size={16} className="mr-3 text-ss-teal" />
                      <span className="font-semibold text-gray-200 mr-2">Tank Size:</span> {selectedFish.tankSize}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/917418131756?text=Hi%20SS%20Aquarium!%20I'm%20interested%20in%20the%20${encodeURIComponent(selectedFish.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-lg bg-ss-cyan hover:shadow-[0_0_15px_rgba(0,229,255,0.6)] text-ss-navy font-bold flex items-center justify-center transition-all duration-300 interactive group/btn"
                  >
                    <Send size={16} className="mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full z-20">
        <WaveDivider fillClass="fill-[#08182b]" className="transform translate-y-1" flip={true} />
      </div>
    </section>
  );
};

export default ExoticFish;
