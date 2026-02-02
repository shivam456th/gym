import React from 'react';
import { motion } from 'framer-motion';
import { FiActivity } from 'react-icons/fi';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 z-50 flex w-full items-center justify-between bg-transparent px-8 py-6 backdrop-blur-sm"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 font-heading text-2xl font-bold text-neon-lime">
        <FiActivity className="text-3xl" />
        <span>FiTusion</span>
      </div>

      {/* Nav Links - Hidden on mobile */}
      <ul className="hidden gap-8 font-medium text-gray-300 md:flex">
        {['Home', 'About', 'Features', 'Service', 'Exercise'].map((item) => (
          <li key={item} className="cursor-pointer transition-colors hover:text-neon-lime">
            {item}
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="hidden rounded-full border-2 border-gray-600 px-6 py-2 font-bold text-white transition-colors hover:border-neon-lime hover:text-neon-lime sm:block">
          Get Started
        </button>
        <button className="rounded-full bg-neon-lime px-6 py-2 font-bold text-dark transition-transform hover:scale-105 hover:bg-neon-lime-hover">
          Contact Us
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;