import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import BubbleCanvas from './components/BubbleCanvas';
import FishSwimmer from './components/FishSwimmer';
import RippleEffect from './components/RippleEffect';
import Hero from './sections/Hero';
import ExoticFish from './sections/ExoticFish';
import TankGallery from './sections/TankGallery';
import WhyUs from './sections/WhyUs';
import Services from './sections/Services';
import Accessories from './sections/Accessories';
import Products from './sections/Products';
import Contact from './sections/Contact';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth custom cursor
  const cursorX = useSpring(0, { stiffness: 300, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 8); // center the 16px cursor
      cursorY.set(e.clientY - 8);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'button' || 
          e.target.tagName.toLowerCase() === 'a' ||
          e.target.closest('button') || 
          e.target.closest('a') ||
          e.target.classList.contains('interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="relative w-full min-h-screen bg-deep-ocean font-nunito overflow-hidden selection:bg-ss-cyan selection:text-black">
      
      {/* Global Background Elements */}
      <BubbleCanvas />
      <FishSwimmer />
      <RippleEffect />

      {/* Custom Cursor (Desktop only, hidden on touch via CSS if needed, but we handle it generally here) */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-ss-cyan rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_10px_rgba(0,229,255,0.8)] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2 : 1,
          opacity: 0.8
        }}
        transition={{ scale: { duration: 0.2 } }}
      />

      <Navbar />

      <main className="relative z-10 w-full">
        <Hero />
        <ExoticFish />
        <TankGallery />
        <WhyUs />
        <Services />
        <Accessories />
        <Products />
        <Contact />
      </main>
    </div>
  );
}

export default App;
