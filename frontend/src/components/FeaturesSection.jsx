import React from 'react';
import { motion } from 'framer-motion';
import { 
  IoIosNutrition, 
  IoIosPeople, 
  IoIosTrendingUp, 
  IoIosTrophy, 
  IoIosChatbubbles, 
  IoIosFitness 
} from 'react-icons/io';
import { 
  SiNike, 
  SiAdidas, 
  SiPuma, 
  SiReebok, 
  SiUnderarmour, 
  SiThenorthface 
} from 'react-icons/si';

// Use the same bodybuilder image or a new one
import bodybuilder from '../assets/charles-gaudreault-xXofYCc3hqc-unsplash-removebg-preview.png'; 

const Features = () => {
  // Brand Logos Data (Using React Icons)
  const brands = [
    { icon: SiUnderarmour, name: "Under Armour" },
    { icon: SiReebok, name: "Reebok" },
    { icon: SiAdidas, name: "Adidas" },
    { icon: SiPuma, name: "Puma" },
    { icon: SiThenorthface, name: "The North Face" },
    { icon: SiNike, name: "Nike" },
  ];

  // Features List Data
  const features = [
    { icon: IoIosNutrition, text: "Nutrition Guidance" },
    { icon: IoIosPeople, text: "Expert Trainers" },
    { icon: IoIosTrendingUp, text: "Progress Tracking" },
    { icon: IoIosTrophy, text: "Premium Membership" },
    { icon: IoIosChatbubbles, text: "Community Support" },
    { icon: IoIosFitness, text: "Next-Level Fitness Spaces" },
  ];

  return (
    <section className="w-full bg-dark py-20">
      <div className="container mx-auto px-4">
        
        {/* 1. BRAND LOGOS STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100"
        >
          {brands.map((brand, idx) => (
             <brand.icon key={idx} className="text-4xl md:text-6xl text-white hover:text-white transition-transform hover:scale-110" title={brand.name} />
          ))}
        </motion.div>

        {/* 2. SECTION HEADLINE */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-4 font-heading text-4xl font-bold uppercase text-white md:text-5xl"
          >
            Inspired to <span className="text-neon-lime">Inspire</span> Your Best Self
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-gray-400"
          >
            We're Your Partner In Achieving A Healthier, Stronger, And More Confident You.
          </motion.p>
        </div>

        {/* 3. FEATURE CARD CONTAINER */}
        <div className="relative overflow-hidden rounded-[3rem] bg-dark-secondary p-8 md:p-16">
          
          {/* Grid for Features */}
          <div className="relative z-10 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 group"
              >
                {/* Icon Circle */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neon-lime/10 text-2xl text-neon-lime transition-colors group-hover:bg-neon-lime group-hover:text-dark">
                  <feature.icon />
                </div>
                {/* Text */}
                <span className="font-heading text-lg font-bold text-white md:text-xl">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Background Image Overlay (Right Side) */}
          <div className="absolute bottom-0 right-0 h-full w-full opacity-40 md:w-2/3 lg:w-1/2">
             <div className="absolute inset-0 bg-gradient-to-r from-dark-secondary via-dark-secondary/80 to-transparent z-10"></div>
             <img 
               src={bodybuilder} 
               alt="Gym Background" 
               className="h-full w-full object-cover object-top mix-blend-overlay grayscale contrast-125"
             />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;