import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Phone, MessageSquare, CheckCircle, Smartphone } from 'lucide-react';

const ChatBubble: React.FC<{ sender: 'ai' | 'user'; text: string; delay: number }> = ({ sender, text, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: delay, duration: 0.4 }}
        className={`flex w-full mb-4 ${sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
        <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
            sender === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-sm' 
                : 'bg-zinc-800 text-slate-200 rounded-tl-sm border border-white/5'
        }`}>
            {text}
        </div>
    </motion.div>
);

const LiveDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulation timeline
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
        if (progress < 100) {
            timer = setInterval(() => {
                setProgress(prev => prev + 1);
            }, 100); // 10 seconds total duration approx
        } else {
            setIsPlaying(false);
            setTimeout(() => setProgress(0), 3000);
        }
    } else {
        setProgress(0);
    }
    return () => clearInterval(timer);
  }, [isPlaying, progress]);

  // Determine current stage based on progress (0-100)
  const getStage = (p: number) => {
      if (p < 10) return 'ring';
      if (p < 85) return 'chat';
      return 'end';
  };

  const stage = getStage(progress);

  return (
    <section id="demo" className="w-full py-20 px-6 relative overflow-hidden border-y border-white/5 bg-black/50 backdrop-blur-3xl">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left: Content */}
        <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Démo Visuelle
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Regardez l'IA travailler.<br />
                <span className="text-slate-500">Qualification en temps réel.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
                Pas besoin d'écouter. KALL transforme les conversations en actions.
                Regardez comment elle gère une urgence de plomberie et fixe un rendez-vous automatiquement.
            </p>

            <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-slate-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
                {isPlaying ? <Pause className="fill-black w-5 h-5" /> : <Play className="fill-black w-5 h-5" />}
                <span className="text-lg">{isPlaying ? "Arrêter la simulation" : "Lancer la simulation"}</span>
            </button>
        </div>

        {/* Right: Phone Visual */}
        <div className="flex-1 relative flex justify-center perspective-1000">
            {/* Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-[60px]" />

            <div className="relative w-[320px] h-[650px] bg-black border-4 border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden z-20">
                
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-30 flex items-center justify-center gap-2">
                    {stage !== 'ring' && progress > 0 && <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />}
                    <div className="w-16 h-4 bg-zinc-900 rounded-full" />
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-zinc-950 flex flex-col relative overflow-hidden font-sans">
                    
                    {/* Header */}
                    <div className="h-24 bg-zinc-900/50 backdrop-blur-md flex items-end pb-4 px-6 border-b border-white/5 z-20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                K
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm">KALL Assistant</h3>
                                <p className="text-xs text-green-400 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    En ligne
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-end pb-24">
                        <AnimatePresence mode="popLayout">
                            {!isPlaying && progress === 0 && (
                                <motion.div 
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-slate-500 gap-4"
                                >
                                    <Smartphone className="w-12 h-12 opacity-20" />
                                    <p className="text-sm">En attente d'appel...</p>
                                </motion.div>
                            )}

                            {isPlaying && progress > 10 && (
                                <>
                                    <ChatBubble key="1" sender="ai" text="Bonjour, Secrétariat de M. Martin, plomberie. Je vous écoute ?" delay={0} />
                                </>
                            )}
                            {isPlaying && progress > 25 && (
                                <ChatBubble key="2" sender="user" text="Bonjour, c'est urgent ! J'ai une fuite sous l'évier, ça coule partout." delay={0} />
                            )}
                            {isPlaying && progress > 45 && (
                                <ChatBubble key="3" sender="ai" text="Je comprends l'urgence. Pouvez-vous couper l'arrivée d'eau en attendant ?" delay={0} />
                            )}
                            {isPlaying && progress > 60 && (
                                <ChatBubble key="4" sender="user" text="Oui c'est fait. Vous pouvez venir quand ?" delay={0} />
                            )}
                            {isPlaying && progress > 75 && (
                                <ChatBubble key="5" sender="ai" text="M. Martin a un créneau demain à 14h. Cela vous convient-il ?" delay={0} />
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Overlay: Incoming Call */}
                    <AnimatePresence>
                        {isPlaying && stage === 'ring' && (
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                className="absolute inset-0 bg-black/90 backdrop-blur-xl z-50 flex flex-col items-center pt-32"
                            >
                                <div className="w-24 h-24 rounded-full bg-slate-800 mb-6 flex items-center justify-center">
                                    <span className="text-3xl">👤</span>
                                </div>
                                <h3 className="text-2xl text-white font-light mb-2">M. Dupont</h3>
                                <p className="text-slate-400">Portable...</p>
                                
                                <div className="mt-auto pb-20 w-full px-12 flex justify-between items-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center animate-pulse">
                                            <Phone className="fill-white w-6 h-6 rotate-[135deg]" />
                                        </div>
                                        <span className="text-xs text-white">Refuser</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                                            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20" />
                                            <Phone className="fill-white w-6 h-6" />
                                        </div>
                                        <span className="text-xs text-white">KALL décroche...</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Overlay: Success */}
                    <AnimatePresence>
                        {stage === 'end' && (
                             <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute bottom-8 left-4 right-4 bg-zinc-800 border border-green-500/30 p-4 rounded-2xl shadow-2xl z-40"
                             >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">RDV Confirmé</h4>
                                        <p className="text-slate-400 text-xs mt-1">
                                            Client: M. Dupont<br/>
                                            Date: Demain 14h00<br/>
                                            Motif: Urgence Fuite
                                        </p>
                                        <div className="mt-3 flex gap-2">
                                            <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-slate-300">Google Calendar</span>
                                            <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-slate-300">SMS Envoyé</span>
                                        </div>
                                    </div>
                                </div>
                             </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default LiveDemo;