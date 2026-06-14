import React from 'react';
import { motion } from 'framer-motion';
import { tanks } from '../data/tanks';
import WaveDivider from '../components/WaveDivider';
import { ArrowRight } from 'lucide-react';

const TankGallery = () => {
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
                className={`relative group overflow-hidden rounded-2xl border border-white/5 bg-ss-navy/50 ${
                  isLarge ? 'md:row-span-2' : ''
                }`}
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-ss-teal/40 to-ss-navy/90 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <span className="text-6xl opacity-30">🌿</span>
                  {/* Actual image would go here with object-cover w-full h-full absolute inset-0 */}
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
    </section>
  );
};

export default TankGallery;
