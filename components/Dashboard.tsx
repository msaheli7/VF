import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  Home, 
  Phone, 
  LogOut, 
  Power,
  Clock,
  TrendingUp,
  User,
  AlertCircle,
  ChevronRight,
  Search
} from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

// Mock Data matching the tone
const CALLS = [
  { id: 1, name: "Marc Dupont", time: "14:02", summary: "Urgence fuite d'eau. A confirmé le RDV pour demain 14h.", status: "RDV Fixé", urgent: true },
  { id: 2, name: "Sophie Martin", time: "11:30", summary: "Voulait un devis. J'ai envoyé le lien du formulaire par SMS.", status: "Qualifié", urgent: false },
  { id: 3, name: "06 12 34 56 78", time: "Hier", summary: "Message vocal laissé. Rappel programmé.", status: "À rappeler", urgent: false },
  { id: 4, name: "Agence Immo", time: "Hier", summary: "Démarchage commercial détecté. Appel bloqué.", status: "Bloqué", urgent: false },
];

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [isActive, setIsActive] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-blue-500/30 pb-24 relative overflow-hidden">
      
      {/* Background Ambient Glows (Cloned from App.tsx for consistency) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* 1. HEADER (Glass) */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-[60%] h-[60%] text-white">
                 <path d="M24 16h16v28l26-28h18L54 46l32 38H66L40 54v30H24V16z" />
              </svg>
           </div>
           <div>
               <h1 className="text-sm font-bold text-white leading-tight">Espace Client</h1>
               <div className="flex items-center gap-1.5">
                   <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`} />
                   <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{isActive ? 'Système Actif' : 'Système En Pause'}</span>
               </div>
           </div>
        </div>
        <button 
            onClick={onLogout}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
            <LogOut className="w-4 h-4" />
        </button>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-28 space-y-8">

        {/* 2. MAIN CONTROL (The "Hero" of the dashboard) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`relative overflow-hidden rounded-3xl p-8 border transition-all duration-500 ${
                isActive 
                ? 'bg-zinc-900/40 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)]' 
                : 'bg-zinc-900/40 border-white/5'
            }`}
        >
            {/* Active Glow Gradient */}
            {isActive && <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />}

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        {isActive ? 'KALL surveille votre ligne' : 'KALL est désactivée'}
                    </h2>
                    <p className="text-slate-400 text-sm max-w-sm">
                        {isActive 
                            ? 'L\'IA décroche, filtre et qualifie vos appels en temps réel.' 
                            : 'Vos appels sont redirigés vers votre répondeur classique.'}
                    </p>
                </div>

                <button 
                    onClick={() => setIsActive(!isActive)}
                    className={`group relative flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                        isActive 
                        ? 'bg-emerald-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)]' 
                        : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
                    }`}
                >
                    <Power className={`w-5 h-5 ${isActive ? 'fill-black' : ''}`} />
                    <span>{isActive ? 'DÉSACTIVER' : 'ACTIVER L\'IA'}</span>
                </button>
            </div>
        </motion.div>

        {/* 3. STATS (Glass Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-1">
                    <Phone className="w-5 h-5" />
                </div>
                <span className="text-3xl font-bold text-white tracking-tight">42</span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Appels</span>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-1">
                    <Clock className="w-5 h-5" />
                </div>
                <span className="text-3xl font-bold text-white tracking-tight">3h15</span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Gagnées</span>
            </motion.div>

             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="col-span-2 md:col-span-1 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-1">
                    <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-3xl font-bold text-white tracking-tight">12</span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Clients Sauvés</span>
            </motion.div>
        </div>

        {/* 4. CALL LIST (Inbox Style) */}
        <div>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Derniers Appels</h3>
                <div className="p-2 rounded-full bg-white/5 border border-white/5 text-slate-400">
                    <Search className="w-4 h-4" />
                </div>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md overflow-hidden">
                {CALLS.map((call, index) => (
                    <motion.div 
                        key={call.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-5 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${call.urgent ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`} />
                                <h4 className="font-bold text-white text-sm md:text-base">{call.name}</h4>
                                {call.urgent && (
                                    <span className="px-2 py-0.5 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" /> Urgent
                                    </span>
                                )}
                            </div>
                            <span className="text-xs text-slate-500 font-mono">{call.time}</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 pl-5">
                            {call.summary}
                        </p>
                        <div className="mt-3 pl-5 flex items-center gap-2">
                             <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-slate-500 font-medium">
                                {call.status}
                             </span>
                        </div>
                    </motion.div>
                ))}
                <div className="p-4 text-center border-t border-white/5">
                    <button className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">
                        Voir tout l'historique
                    </button>
                </div>
            </div>
        </div>

      </main>

      {/* 5. BOTTOM NAVIGATION (Mobile First, Glass) */}
      <nav className="fixed bottom-6 left-6 right-6 z-50">
          <div className="max-w-md mx-auto h-16 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/10 flex items-center justify-around shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
              <button 
                onClick={() => setActiveTab('home')}
                className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${activeTab === 'home' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
              >
                  <Home className="w-5 h-5" />
                  {activeTab === 'home' && <motion.div layoutId="nav-dot" className="absolute bottom-1 w-1 h-1 bg-blue-500 rounded-full" />}
              </button>
              
              <button 
                onClick={() => setActiveTab('calls')}
                className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${activeTab === 'calls' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
              >
                  <Phone className="w-5 h-5" />
                  {activeTab === 'calls' && <motion.div layoutId="nav-dot" className="absolute bottom-1 w-1 h-1 bg-blue-500 rounded-full" />}
              </button>

              <button 
                onClick={() => setActiveTab('settings')}
                className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
              >
                  <Settings className="w-5 h-5" />
                  {activeTab === 'settings' && <motion.div layoutId="nav-dot" className="absolute bottom-1 w-1 h-1 bg-blue-500 rounded-full" />}
              </button>
          </div>
      </nav>

    </div>
  );
};

export default Dashboard;