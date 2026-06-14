import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fishShapes = [
  <img key="betta" src={`${import.meta.env.BASE_URL}images/betta.png`} alt="Betta Fish" className="w-48 md:w-64 h-auto drop-shadow-[0_0_15px_rgba(0,229,255,0.4)] mix-blend-screen" />,
  <img key="goldfish" src={`${import.meta.env.BASE_URL}images/goldfish.png`} alt="Goldfish" className="w-48 md:w-64 h-auto drop-shadow-[0_0_15px_rgba(255,107,107,0.4)] mix-blend-screen" />
];

const FishSwimmer = () => {
  const [fishList, setFishList] = useState([]);

  useEffect(() => {
    const spawnFish = () => {
      if (document.hidden) return; // Don't spawn if tab is hidden

      const id = Date.now();
      const direction = Math.random() > 0.5 ? 1 : -1; // 1 = left to right, -1 = right to left
      const top = Math.random() * 80 + 10; // 10% to 90% vertical position
      const shapeIndex = Math.floor(Math.random() * fishShapes.length);
      const duration = Math.random() * 4 + 6; // 6s to 10s

      const newFish = { id, direction, top, shapeIndex, duration };
      
      setFishList(prev => [...prev, newFish]);

      // Remove fish after animation
      setTimeout(() => {
        setFishList(prev => prev.filter(f => f.id !== id));
      }, duration * 1000 + 500);
    };

    // Spawn initial fish after a slight delay
    setTimeout(spawnFish, 2000);

    // Set interval for continuous spawning
    const interval = setInterval(spawnFish, 10000); // Every 10s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence>
        {fishList.map((fish) => (
          <motion.div
            key={fish.id}
            initial={{ 
              x: fish.direction === 1 ? '-10vw' : '110vw',
              y: `${fish.top}vh`,
              scaleX: fish.direction,
              opacity: 0.6
            }}
            animate={{ 
              x: fish.direction === 1 ? '110vw' : '-10vw'
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: fish.duration, 
              ease: "linear"
            }}
            className="absolute will-change-transform"
          >
            {fishShapes[fish.shapeIndex]}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FishSwimmer;
