import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/FeaturesSection';
import DiscoverSection from './components/DiscoverSection';
import TrainSection from './components/TrainSection'; // Import New Section

function App() {
  return (
    <main className="bg-dark min-h-screen relative text-white selection:bg-neon-lime selection:text-dark">
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <Navbar />
      <Hero />
      <Features />
      <DiscoverSection />
      <TrainSection /> {/* Added here */}
    </main>
  );
}

export default App;