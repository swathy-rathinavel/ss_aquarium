import React from 'react';
import { motion } from 'framer-motion';
import WaveDivider from '../components/WaveDivider';
import FishParticles from '../components/FishParticles';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section 
      id="hero" 
      className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/bg.png')` }}
    >
      {/* Caustic light overlay */}
      <div className="caustic-overlay"></div>

      {/* Fish Particles */}
      <FishParticles />

      {/* Background silhouettes & elements */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-0"></div>
      
      {/* Swaying Kelp SVG Left */}
      <motion.svg
        viewBox="0 0 100 200"
        className="absolute bottom-[-10px] left-[-20px] w-32 md:w-48 h-auto opacity-40 z-0 fill-ss-steel pointer-events-none origin-bottom"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      >
        <path d="M50 200 Q60 150 40 100 T50 0 T30 50 T40 100 T50 200" strokeWidth="15" strokeLinecap="round" />
        <path d="M70 200 Q80 160 60 120 T70 40 T50 80 T60 120 T70 200" strokeWidth="10" strokeLinecap="round" opacity="0.7"/>
      </motion.svg>

      {/* Swaying Kelp SVG Right */}
      <motion.svg
        viewBox="0 0 100 200"
        className="absolute bottom-[-10px] right-[-20px] w-24 md:w-40 h-auto opacity-30 z-0 fill-ss-steel pointer-events-none origin-bottom scale-x-[-1]"
        animate={{ rotate: [-2, 4, -2] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      >
        <path d="M50 200 Q60 150 40 100 T50 0 T30 50 T40 100 T50 200" strokeWidth="15" strokeLinecap="round" />
      </motion.svg>

      {/* Sandy substrate strip */}
      <div className="absolute bottom-0 w-full h-4 bg-yellow-900/40 blur-sm z-0"></div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center space-x-2 bg-ss-navy/60 border border-ss-cyan/30 rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg">
          <span className="text-xl">🐟</span>
          <span className="text-sm font-semibold text-ss-aqua tracking-wide">Premium Aquarium Store • Coimbatore</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-cinzel text-6xl md:text-8xl font-extrabold text-white mb-4 text-glow leading-tight">
          SS AQUARIUM
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-bold text-ss-teal tracking-[0.2em] uppercase mb-6">
          Exotic Fish | Aquascaping | Accessories
        </motion.h2>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Dive into a world of rare exotic fish, custom aquascapes, and premium accessories — crafted with passion by Sathish & Jai in Coimbatore.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <a
            href="#fish"
            className="w-full sm:w-auto px-8 py-3.5 bg-ss-cyan text-ss-navy font-bold rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,255,0.8)] transition-all duration-300 interactive text-center"
          >
            Explore Our World
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-ss-cyan text-white font-bold rounded-full hover:bg-ss-cyan/10 hover:border-glow transition-all duration-300 interactive text-center"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full z-20">
        <WaveDivider fillClass="fill-ss-navy" className="transform translate-y-1" />
      </div>
    </section>
  );
};

export default Hero;
