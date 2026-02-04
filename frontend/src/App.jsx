import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/FeaturesSection';
import DiscoverSection from './components/DiscoverSection';
import TrainSection from './components/TrainSection';
import ExperienceSection from './components/ExperienceSection';
import Testimonials from './components/Testimonials'; // New
import Footer from './components/Footer'; // New

function App() {
  return (
    <main className="bg-dark min-h-screen relative text-white selection:bg-neon-lime selection:text-dark">
      {/* Global Noise Texture */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      // <Navbar />
      // <Hero />
      // <Features />
      // <DiscoverSection />
      // <TrainSection />
      // <ExperienceSection />
      // <Testimonials />
      // <Footer />
    </main>
  );
}

export default App;