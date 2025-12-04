import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Differentiators from '../components/Differentiators';
import Features from '../components/Features';
import LiveDemo from '../components/LiveDemo';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Problem from '../components/Problem';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import LegalDoc from '../components/LegalDoc';

const App: React.FC = () => {
  const { scrollY } = useScroll();
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'login' | 'mentions' | 'privacy' | 'cgv' | 'support'>('landing');
  
  // Parallax effects for background blobs
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]); 
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

  if (currentView === 'dashboard') {
    return <Dashboard onLogout={() => setCurrentView('landing')} />;
  }

  if (currentView === 'login') {
      return (
        <Login 
            onBack={() => setCurrentView('landing')} 
            onLoginSuccess={() => setCurrentView('dashboard')} 
        />
      );
  }

  if (['mentions', 'privacy', 'cgv', 'support'].includes(currentView)) {
      return (
          <LegalDoc type={currentView} onBack={() => setCurrentView('landing')} />
      );
  }

  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-blue-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Deep Space Ambient Glows with Parallax & Hardware Acceleration */}
        <motion.div style={{ y: y1 }} className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[100px] will-change-transform" />
        <motion.div style={{ y: y2 }} className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px] will-change-transform" />
        <motion.div style={{ y: y3 }} className="absolute bottom-[-10%] left-[20%] w-[60%] h-[30%] bg-emerald-600/5 rounded-full blur-[80px] will-change-transform" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <main className="w-full max-w-[1600px] flex flex-col gap-0">
          <Hero />
          <TrustedBy />
          <Differentiators />
          <Problem />
          <Pricing />
          <Testimonials />
          <LiveDemo />
          <Features />
          <About />
          <FAQ />
        </main>
        <Footer onLegalClick={(page) => setCurrentView(page as any)} />
      </div>

      {/* Navbar moved to the end of the DOM to ensure highest stacking order naturally */}
      <Navbar onEnterDashboard={() => setCurrentView('login')} />
    </div>
  );
};

export default App;