import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const addRipple = (e) => {
      // Don't add ripple if clicking on a link or button directly (optional, but good for UX)
      // Actually, standard material design adds ripple everywhere. We will add it globally.
      
      let x, y;
      if (e.type === 'touchstart') {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }

      const id = Date.now();
      const newRipple = { x, y, id };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
      }, 800); // match animation duration
    };

    document.addEventListener('mousedown', addRipple);
    document.addEventListener('touchstart', addRipple, { passive: true });

    return () => {
      document.removeEventListener('mousedown', addRipple);
      document.removeEventListener('touchstart', addRipple);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ 
              scale: 0, 
              opacity: 0.8,
              x: ripple.x - 40, // center the 80px div
              y: ripple.y - 40 
            }}
            animate={{ 
              scale: 2.5, 
              opacity: 0 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-20 h-20 rounded-full pointer-events-none will-change-transform flex items-center justify-center"
          >
            {/* Inner Ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border-[2px] border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.4)_inset,0_0_10px_rgba(0,229,255,0.3)] backdrop-blur-[2px]"
              initial={{ scale: 0.2 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            {/* Outer Ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border-[1px] border-white/30 shadow-[0_0_20px_rgba(0,229,255,0.2)] backdrop-blur-[1px]"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1.8 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleEffect;
