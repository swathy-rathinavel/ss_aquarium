import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import GlassCard from '../components/GlassCard';
import WaveDivider from '../components/WaveDivider';
import { Hammer, Leaf, Droplets, Stethoscope, Truck, AlertTriangle, TestTube, Flower2 } from 'lucide-react';

const iconMap = {
  "hammer": <Hammer size={24} />,
  "leaf": <Leaf size={24} />,
  "droplets": <Droplets size={24} />,
  "stethoscope": <Stethoscope size={24} />,
  "truck": <Truck size={24} />,
  "alert-triangle": <AlertTriangle size={24} />,
  "test-tube": <TestTube size={24} />,
  "flower-2": <Flower2 size={24} />
};

const Services = () => {
  return (
    <section id="services" className="relative w-full py-20 bg-[#05111f] min-h-screen overflow-hidden">
      
      {/* Marquee Banner */}
      <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-ss-teal via-ss-cyan to-ss-teal py-3 z-20 shadow-[0_0_20px_rgba(0,229,255,0.3)] whitespace-nowrap overflow-hidden">
        <div className="inline-block animate-marquee">
          <span className="text-black font-bold text-lg tracking-wide mx-4">
            🎉 New Stock Arriving Weekly • Free Consultation for Orders Above ₹5000 • Custom Tanks Available • Call Now: 7418131756
          </span>
          <span className="text-black font-bold text-lg tracking-wide mx-4">
            🎉 New Stock Arriving Weekly • Free Consultation for Orders Above ₹5000 • Custom Tanks Available • Call Now: 7418131756
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Expert care and professional installation for every aspect of the aquarium hobby.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <GlassCard key={service.id} delay={index * 0.1} className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1 p-3 bg-ss-teal/20 text-ss-cyan rounded-xl border border-ss-cyan/30">
                  {iconMap[service.icon]}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white pr-2">{service.title}</h3>
                    {service.isOffer && (
                      <span className="shrink-0 text-[10px] font-bold px-2 py-1 bg-ss-coral/20 text-ss-coral border border-ss-coral/40 rounded uppercase animate-pulse">
                        Offer
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-ss-gold font-bold">{service.price}</span>
                      {service.isOffer && (
                        <span className="text-xs text-ss-coral mt-1">{service.offerText}</span>
                      )}
                    </div>
                    
                    <a
                      href={`https://wa.me/917418131756?text=Hi!%20I%20want%20to%20book%20a%20service:%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/5 hover:bg-ss-cyan text-ss-cyan hover:text-ss-navy border border-ss-cyan/50 rounded-lg text-sm font-bold transition-all duration-300 interactive"
                    >
                      Book Service
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 w-full z-20">
        <WaveDivider fillClass="fill-[#0a0e27]" className="transform translate-y-1" />
      </div>
    </section>
  );
};

export default Services;
