import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tanks } from '../data/tanks';
import WaveDivider from '../components/WaveDivider';
import { ArrowRight, X } from 'lucide-react';

const TankGallery = () => {
  const [selectedTank, setSelectedTank] = useState(null);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedTank) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedTank]);

  return (
    <section id="tanks" className="relative w-full py-20 bg-[#08182b] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Aquariums We've Built
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">From desktop nano tanks to massive custom room dividers, explore our portfolio of living art.</p>
        </motion.div>

        {/* Desktop Masonry / Mobile Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {tanks.map((tank, index) => {
            // Make some items span 2 rows for masonry effect on desktop
            const isLarge = index === 0 || index === 3 || index === 7;
            
            return (
              <motion.div
                key={tank.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedTank(tank)}
                className={`relative group overflow-hidden rounded-2xl border border-white/5 bg-ss-navy/50 cursor-pointer ${
                  isLarge ? 'md:row-span-2' : ''
                }`}
              >
                {/* Image Background */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  {tank.image ? (
                    <img 
                      src={`${import.meta.env.BASE_URL}${tank.image}`} 
                      alt={tank.name} 
                      className="object-cover w-full h-full absolute inset-0"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-ss-teal/40 to-ss-navy/90 flex items-center justify-center">
                      <span className="text-6xl opacity-30">🌿</span>
                    </div>
                  )}
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-bold px-2 py-1 bg-ss-cyan/20 text-ss-cyan rounded backdrop-blur-sm border border-ss-cyan/30">
                      {tank.type}
                    </span>
                    <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm border border-white/20">
                      {tank.size}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-ss-cyan transition-colors duration-300">
                    {tank.name}
                  </h3>

                  {/* Hidden description that slides up on hover */}
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-sm text-gray-300 mt-2 mb-3">
                      {tank.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tank.features.slice(0, 3).map(f => (
                        <span key={f} className="text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-ss-cyan/50 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-ss-cyan text-ss-cyan font-bold rounded-full hover:bg-ss-cyan hover:text-ss-navy hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all duration-300 interactive group"
          >
            Get a Custom Quote
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>

      <div className="absolute bottom-0 w-full z-20">
        <WaveDivider fillClass="fill-ss-navy" className="transform translate-y-1" />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedTank && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTank(null)}
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
                onClick={() => setSelectedTank(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 text-white hover:bg-white/10 hover:text-ss-cyan transition-colors duration-200 cursor-pointer"
                aria-label="Close details"
              >
                <X size={24} />
              </button>

              {/* Image Container */}
              <div className="w-full lg:w-3/5 h-[250px] sm:h-[350px] lg:h-full relative overflow-hidden bg-black/40 flex-shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}${selectedTank.image}`}
                  alt={selectedTank.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30 pointer-events-none"></div>
              </div>

              {/* Details Container */}
              <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0d2d4a]/95 to-[#08182b]/95 lg:h-full lg:overflow-y-auto">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 bg-ss-cyan/20 text-ss-cyan rounded-full border border-ss-cyan/30">
                      {selectedTank.type}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 bg-white/10 text-white rounded-full border border-white/20">
                      {selectedTank.size}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-4 leading-tight border-b border-white/10 pb-4">
                    {selectedTank.name}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-nunito">
                    {selectedTank.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ss-cyan mb-3">
                    Premium Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTank.features.map(f => (
                      <span
                        key={f}
                        className="text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg font-nunito hover:bg-ss-cyan/10 hover:border-ss-cyan/30 transition-all duration-300"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TankGallery;
