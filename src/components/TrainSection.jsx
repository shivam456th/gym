import React from 'react';
import { motion } from 'framer-motion';

const TrainSection = () => {
  // Real Unsplash images to match the design vibes
  const courses = [
    {
      id: 1,
      title: "Barbell Basics",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Kettlebell Masterclass",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Cardio Power Boost",
      image: "https://images.unsplash.com/photo-1552674605-46d539d06c9e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Hypertrophy",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Rope Climbing",
      image: "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "TRX Suspension",
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-dark w-full py-24">
      <div className="container mx-auto px-4">
        
        {/* 1. Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl font-black text-white uppercase mb-4"
          >
            Train Smarter <br />
            <span className="text-neon-lime">Unleash Your Potential</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base uppercase tracking-wider"
          >
            Unlock Your Full Potential With Our Expertly Designed Courses, Tailored To Help You Maximize Results In Less Time.
          </motion.p>
        </div>

        {/* 2. Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center"
            >
              {/* Image Container with Custom "Cut Corner" Shape */}
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl rounded-tr-none">
                
                {/* The Image */}
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                  // Using inline CSS clip-path for the precise angled cut
                  style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)' }}
                />

                {/* The Neon Green Diagonal Accent Bar */}
                {/* We position a rotated div to create the border effect on the cut edge */}
                <div className="absolute top-[8%] right-[-8%] w-24 h-2 bg-neon-lime rotate-45 transform origin-center z-10 shadow-[0_0_10px_#c6f136]"></div>
                
                {/* Optional Overlay gradient for better text visibility (if you add text over image later) */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent pointer-events-none mix-blend-multiply"></div>
              </div>

              {/* Course Title */}
              <h3 className="font-heading text-neon-lime font-bold text-xl uppercase tracking-wide group-hover:text-white transition-colors">
                {course.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrainSection;