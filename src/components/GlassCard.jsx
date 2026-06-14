import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", delay = 0, noHoverScale = false, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={noHoverScale ? {} : { scale: 1.03 }}
      className={`relative group overflow-hidden glass-effect ${className}`}
      {...props}
    >
      {/* Hover border glow highlight */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-ss-cyan/50 shadow-[0_0_20px_rgba(0,229,255,0.2)]"></div>
      
      {/* Animated bubbles on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, x: Math.random() * 100 - 50, opacity: 0 }}
            whileHover={{ 
              y: -150, 
              opacity: [0, 0.5, 0],
              transition: { 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3 
              } 
            }}
            className="absolute bottom-0 left-1/2 w-2 h-2 bg-white/40 rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
