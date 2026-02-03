import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FiActivity } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-dark w-full pt-12 pb-8 relative">
      <div className="container mx-auto px-4">
        
        {/* --- NEWSLETTER BANNER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-neon-lime rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden mb-20"
        >
           {/* Background Pattern (Optional subtle texture) */}
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
           
           <div className="relative z-10">
             <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-dark mb-4 tracking-tight">
               Connect Engage Transform
             </h2>
             <p className="text-dark/80 font-medium mb-10 max-w-2xl mx-auto">
               Join A Vibrant Community That Fuels Motivation, Engagement Drives Progress, And Transformation Happens Daily.
             </p>
             
             {/* Input Field */}
             <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
               <input 
                 type="email" 
                 placeholder="Your Email" 
                 className="px-6 py-3 rounded-full bg-white text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dark/20 w-full"
               />
               <button className="px-8 py-3 rounded-full bg-dark text-white font-bold hover:bg-dark-secondary transition-colors shadow-xl">
                 Join Now
               </button>
             </div>
           </div>
        </motion.div>


        {/* --- MAIN FOOTER LINKS --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 lg:gap-0 pb-12 border-b border-white/5">
           
           {/* Left: Brand */}
           <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
              <div className="flex items-center gap-2 font-heading text-2xl font-bold text-neon-lime">
                <FiActivity className="text-3xl" />
                <span>FiTusion</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                Your Go-To For Personalized Workouts, Meal Plans, And Expert Fitness Advice.
              </p>
           </div>

           {/* Center: Social Icons & Nav */}
           <div className="flex flex-col items-center gap-8">
              <h4 className="text-neon-lime font-bold tracking-widest uppercase text-sm">Follow Us On</h4>
              <div className="flex gap-6">
                 {[FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white text-dark flex items-center justify-center hover:bg-neon-lime transition-colors">
                     <Icon />
                   </a>
                 ))}
              </div>
              <div className="flex gap-6 text-gray-400 text-xs font-bold uppercase tracking-wider">
                {['Home', 'About', 'Features', 'Service', 'Exercise'].map(link => (
                  <a key={link} href="#" className="hover:text-neon-lime transition-colors">{link}</a>
                ))}
              </div>
           </div>

           {/* Right: Contact Info */}
           <div className="text-center lg:text-right text-sm text-gray-400 space-y-2">
              <h4 className="text-neon-lime font-bold tracking-widest uppercase mb-4">Contact</h4>
              <p>Monday-Sunday</p>
              <p>8:00 AM - 5:00 PM</p>
              <p>E-mail: fitfusion@gmail.com</p>
           </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-gray-600 text-xs">
          © 2026 FiTusion. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;