import React from 'react';
import { motion } from 'framer-motion';
import { IoIosTimer, IoIosFitness, IoIosFlame, IoIosStats } from 'react-icons/io';
// Import the image directly
import bodybuilder from '../assets/charles-gaudreault-xXofYCc3hqc-unsplash-removebg-preview.png'; 
import StatCard from './StatCard';

const Hero = () => {
  return (
    <section className="bg-hero-gradient relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden pt-24">
      
      {/* 1. BACKGROUND TEXT LAYER */}
      <div className="absolute top-1/2 left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center pointer-events-none">
         <h2 className="font-heading text-[15vw] leading-none font-black text-white/5 uppercase">
            Your Spirit
         </h2>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="container relative z-10 flex h-full flex-col items-center px-4">
        
        {/* Headline */}
        <div className="relative z-20 mb-4 mt-10 text-center">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl font-black uppercase leading-tight md:text-7xl lg:text-8xl"
          >
            Sculpt Your Body,<br /> 
            <span className="text-neon-lime drop-shadow-lg">Elevate</span> Your Spirit
          </motion.h1>
        </div>

        {/* 3. CENTRAL IMAGE & FLOATING CARDS */}
        <div className="relative mt-8 flex h-[500px] w-full max-w-5xl justify-center items-end md:h-[650px]">
            
            {/* Hero Image */}
            <motion.img 
               initial={{ opacity: 0, y: 100 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               /* FIX: Use the variable directly for Vite */
               src={bodybuilder} 
               alt="Bodybuilder"
               className="relative z-20 h-full w-auto object-contain grayscale contrast-125 brightness-110"
               loading="lazy" 
            />

            {/* Floating Cards */}
            <StatCard 
              icon={IoIosTimer} label="Hours" value="1.5" delay={0.5}
              positionClasses="top-20 left-0 hidden md:flex md:-left-4 lg:-left-16"
            />
            <StatCard 
              icon={IoIosFitness} label="Poses" value="20" delay={0.7}
              positionClasses="top-20 right-0 hidden md:flex md:-right-4 lg:-right-16"
            />
            <StatCard 
              icon={IoIosFlame} label="Kcal" value="550" delay={0.9}
              positionClasses="bottom-32 left-4 md:bottom-20 md:left-0"
            />
            <StatCard 
              icon={IoIosStats} label="Sets" value="5" delay={1.1}
              positionClasses="bottom-32 right-4 md:bottom-20 md:right-0"
            />
        </div>

        {/* 4. BOTTOM BAR */}
        <div className="absolute bottom-8 z-40 flex w-full flex-col items-center justify-between gap-6 px-8 md:flex-row md:items-end">
            
            {/* Social Proof */}
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
               className="flex flex-col gap-2"
            >
               <div className="flex -space-x-4">
                  {[1,2,3].map(i => (
                    <div key={i} className={`h-12 w-12 rounded-full border-2 border-dark flex items-center justify-center text-xs text-black font-bold bg-gray-200`}>User</div>
                  ))}
               </div>
               <div>
                  <span className="font-bold text-white text-xl">12k+</span>
                  <span className="ml-2 text-gray-400">Happy Spirits</span>
               </div>
            </motion.div>

             {/* CTA */}
            <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="flex items-center gap-2 rounded-full bg-neon-lime px-10 py-4 text-xl font-bold text-dark shadow-[0_0_20px_rgba(198,241,54,0.3)] hover:bg-neon-lime-hover"
            >
               Let's Start ›››
            </motion.button>
        </div>

        {/* Decorations */}
        <div className="absolute top-1/2 left-8 hidden -translate-y-1/2 flex-col gap-4 font-heading tracking-widest text-gray-600 md:flex">
           <span>P</span><span>R</span><span>E</span><span>V</span>
        </div>
        <div className="absolute top-1/2 right-8 hidden -translate-y-1/2 flex-col gap-4 font-heading tracking-widest text-gray-600 md:flex">
           <span>N</span><span>E</span><span>X</span><span>T</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;