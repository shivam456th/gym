import React from 'react';
import { motion } from 'framer-motion';
import { IoIosHeart, IoIosWalk } from 'react-icons/io';
import { FiActivity } from 'react-icons/fi';

const ExperienceSection = () => {
  return (
    <section className="bg-dark w-full py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* 1. Main Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Experience <br />
            <span className="text-neon-lime">Fitness Like Never Before</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            Transform The Way You Train With Innovative Workouts, Expert Guidance, And State-Of-The-Art Facilities.
          </motion.p>
        </div>

        {/* 2. Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32">
          
          {/* --- CARD 1: Endurance Evolution (Left) --- */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-dark-secondary rounded-[3rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8 group"
          >
            {/* Image (Left Side) */}
            <div className="w-full md:w-1/2 relative h-64 md:h-80">
               {/* Replace src with a transparent PNG of a bodybuilder for best effect */}
               <img 
                 src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop" 
                 alt="Endurance"
                 className="w-full h-full object-cover rounded-2xl grayscale contrast-125 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
               />
            </div>

            {/* Text Content (Right Side) */}
            <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right relative z-10">
              <h3 className="text-neon-lime font-heading font-bold text-2xl mb-4">Endurance Evolution</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Boost Your Stamina And Resilience With Tailored Cardio And Endurance Workouts Designed To Keep You Moving Stronger For Longer.
              </p>
              <button className="px-6 py-2 bg-neon-lime text-dark font-bold rounded-full text-sm hover:bg-neon-lime-hover transition-colors">
                Read More
              </button>
            </div>

            {/* Floating Glass Widget (Heart Rate) */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-8 right-8 md:right-auto md:left-1/2 md:-translate-x-1/2 w-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col items-center gap-2 shadow-2xl z-20"
            >
              <IoIosHeart className="text-neon-lime text-3xl drop-shadow-[0_0_10px_rgba(198,241,54,0.5)]" />
              {/* Fake ECG Line */}
              <FiActivity className="text-gray-400 text-2xl my-1" />
              <div className="text-center">
                <span className="block text-white font-bold text-xl">95</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">BPM</span>
              </div>
            </motion.div>
          </motion.div>


          {/* --- CARD 2: Speed Surge (Right) --- */}
          <motion.div 
             initial={{ x: 50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative bg-dark-secondary rounded-[3rem] p-8 md:p-12 overflow-hidden flex flex-col-reverse md:flex-row items-center gap-8 group"
          >
             {/* Text Content (Left Side) */}
            <div className="w-full md:w-1/2 flex flex-col items-start relative z-10">
              <h3 className="text-neon-lime font-heading font-bold text-2xl mb-4">Speed Surge</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Boost Your Agility And Explosiveness With High-Intensity Sprint And Movement Drills. Speed Surge Is Designed To Take Your Performance To The Next Level!
              </p>
              <button className="px-6 py-2 bg-neon-lime text-dark font-bold rounded-full text-sm hover:bg-neon-lime-hover transition-colors">
                Read More
              </button>
            </div>

            {/* Image (Right Side) */}
            <div className="w-full md:w-1/2 relative h-64 md:h-80">
               <img 
                 src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop" 
                 alt="Speed"
                 className="w-full h-full object-cover rounded-2xl grayscale contrast-125 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
               />
            </div>

            {/* Floating Glass Widget (Steps) */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-8 left-8 md:left-auto md:right-1/2 md:translate-x-1/2 w-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col items-center gap-2 shadow-2xl z-20"
            >
              <IoIosWalk className="text-neon-lime text-3xl drop-shadow-[0_0_10px_rgba(198,241,54,0.5)]" />
              {/* Circular Progress (CSS Ring) */}
              <div className="w-10 h-10 rounded-full border-4 border-gray-600 border-t-neon-lime flex items-center justify-center my-1 rotate-45"></div>
              <div className="text-center">
                <span className="block text-white font-bold text-xl">1024</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">STEPS</span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* 3. Bottom Text Section */}
        <div className="text-center pb-12">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-heading text-3xl md:text-5xl font-bold text-white mb-2"
           >
             Your Fitness
           </motion.h2>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="font-heading text-3xl md:text-5xl font-bold text-neon-lime mb-6"
           >
             Goals, Their Expertise
           </motion.h2>
           <p className="text-gray-500 text-sm uppercase tracking-wider">
             Our Team Of Certified Trainers Brings Unparalleled Expertise To Help You Achieve Your Fitness Goals.
           </p>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;