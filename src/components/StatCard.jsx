import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, label, value, positionClasses, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      // Infinite floating animation
      whileInView={{
        y: [0, -15, 0],
        transition: {
          duration: 3 + Math.random(),
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay 
        }
      }}
      viewport={{ once: true }}
      className={`absolute z-30 flex flex-col items-center rounded-3xl border border-white/10 bg-dark-secondary/80 p-6 shadow-xl backdrop-blur-md ${positionClasses}`}
    >
      <Icon className="mb-2 text-4xl text-neon-lime" />
      <span className="text-sm tracking-wider text-gray-400 uppercase">{label}</span>
      <span className="font-heading text-3xl font-bold text-white">{value}</span>
    </motion.div>
  );
};

export default StatCard;