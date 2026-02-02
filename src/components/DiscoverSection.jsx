import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IoIosHeart, IoIosWater, IoIosFlame, IoIosArrowForward } from 'react-icons/io';
import { GiBiceps } from 'react-icons/gi'; // Bicep icon for Strength

const DiscoverSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      id: 1,
      title: "Cardio Training",
      desc: "Boost endurance and heart health with high-energy cardio sessions designed to keep you moving.",
      icon: IoIosHeart,
    },
    {
      id: 2,
      title: "Strength Build",
      desc: "Develop power and resilience through expert-guided strength training tailored to all fitness levels.",
      icon: GiBiceps,
    },
    {
      id: 3,
      title: "Fat Loss",
      desc: "Shed unwanted fat with dynamic workout routines and fat-burning strategies that deliver lasting results.",
      icon: IoIosWater,
    },
    {
      id: 4,
      title: "HIIT Workouts",
      desc: "Maximize calorie burn and improve fitness with short, intense high-intensity interval training sessions.",
      icon: IoIosFlame,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-dark w-full py-24 relative overflow-hidden">
      
      {/* Background Glow Effect (Optional) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-lime/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4" ref={ref}>
        
        {/* 1. Header Section */}
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl font-black text-white uppercase mb-4"
          >
            Discover <br className="md:hidden" />
            <span className="text-neon-lime">What Sets Us Apart</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            We Deliver A Fitness Experience That's Truly One-Of-A-Kind. Explore How We Help You Achieve Your Goals Faster And Smarter.
          </motion.p>
        </div>

        {/* 2. Scrollable Cards Container */}
        {/* We use 'snap-x' for the carousel feel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible no-scrollbar"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              className="snap-center shrink-0 w-[85vw] md:w-auto flex flex-col justify-between p-8 rounded-[2rem] bg-dark-secondary border border-white/5 hover:border-neon-lime/30 transition-colors group relative overflow-hidden"
            >
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-neon-lime flex items-center justify-center text-dark text-2xl mb-6">
                  <service.icon />
                </div>
                
                {/* Title */}
                <h3 className="text-white font-heading font-bold text-2xl mb-4">
                  {service.title}
                </h3>
                
                {/* Desc */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-end relative z-10">
                <button className="px-6 py-2 rounded-full bg-neon-lime text-dark font-bold text-sm hover:bg-neon-lime-hover transition-transform hover:scale-105 flex items-center gap-2">
                  See Plan
                </button>
              </div>

              {/* Subtle Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neon-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Carousel Indicators (Dots) */}
        {/* Visually centered at bottom */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
            <div className="w-3 h-3 rounded-full bg-neon-lime"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
        </div>

      </div>
    </section>
  );
};

export default DiscoverSection;