import React from 'react';
import { motion } from 'framer-motion';
import { IoIosStar } from 'react-icons/io';

const Testimonials = () => {
  return (
    <section className="bg-dark w-full py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* --- LEFT SIDE: Image & Testimonial --- */}
          <div className="relative w-full lg:w-2/3 flex items-center">
             
             {/* Large Bodybuilder Image */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="w-full md:w-4/5 h-[500px] relative z-0"
             >
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" 
                  alt="Athlete" 
                  className="w-full h-full object-cover rounded-3xl grayscale mask-linear-to-r"
                />
                {/* Gradient overlay to fade image into background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark"></div>
             </motion.div>

             {/* Floating Glass Testimonial Card */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:left-1/3 md:top-1/2 lg:left-[40%] w-[90%] md:w-[450px] bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl z-10"
             >
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "I Love The Variety Of Workouts On Fit Fusion. Whether It's HIIT, Yoga, Or Strength Training, There's Always Something New To Try. The Progress Tracking Tools Keep Me Motivated!"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-neon-lime font-bold text-lg">James T.</h4>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">LA, USA</span>
                  </div>
                  <div className="flex gap-1 text-neon-lime">
                    {[...Array(5)].map((_, i) => <IoIosStar key={i} />)}
                  </div>
                </div>
             </motion.div>
          </div>

          {/* --- RIGHT SIDE: Vertical Trainers --- */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end gap-6 h-[400px]">
             
             {/* Trainer 1 */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="relative w-24 md:w-32 h-full rounded-[2rem] overflow-hidden group cursor-pointer"
             >
                <img 
                  src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop" 
                  alt="Ryan Blaze" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                {/* Vertical Text */}
                <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon-lime font-bold tracking-widest uppercase whitespace-nowrap rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  Ryan Blaze
                </h3>
             </motion.div>

             {/* Trainer 2 */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="relative w-24 md:w-32 h-full rounded-[2rem] overflow-hidden group cursor-pointer mt-12 lg:mt-0 lg:mb-12" // Staggered height
             >
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop" 
                  alt="Ethan Maxx" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon-lime font-bold tracking-widest uppercase whitespace-nowrap rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  Ethan Maxx
                </h3>
             </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;