import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Differentiators from '../components/Differentiators';
import Features from '../components/Features';
import LiveDemo from '../components/LiveDemo';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Problem from '../components/Problem';
import FAQ from '../components/FAQ';

const App: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects for background blobs
  // As user scrolls down, these elements will move at different speeds relative to the scroll
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]); 
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Deep Space Ambient Glows with Parallax & Hardware Acceleration */}
         {/* Reduced blur radius for better performance */}
        <motion.div style={{ y: y1 }} className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[100px] will-change-transform" />
        <motion.div style={{ y: y2 }} className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px] will-change-transform" />
        <motion.div style={{ y: y3 }} className="absolute bottom-[-10%] left-[20%] w-[60%] h-[30%] bg-emerald-600/5 rounded-full blur-[80px] will-change-transform" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <main className="w-full max-w-[1600px] flex flex-col gap-0">
          <Hero />
          <Differentiators />
          <Problem />
          <Pricing />
          <Testimonials />
          <LiveDemo />
          <Features />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;