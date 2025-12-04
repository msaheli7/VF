import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Mail, Loader2 } from 'lucide-react';

interface LoginProps {
    onBack: () => void;
    onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack, onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating API call - in reality, this is where you'd connect to auth
    setTimeout(() => {
        setLoading(false);
        // For now, we don't redirect to dashboard as per instruction, 
        // just keep them on this screen or show an error/success
        // alert("Le portail client est en cours de configuration.");
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden px-6">
        
        {/* Background Ambient */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
            <button 
                onClick={onBack}
                className="mb-8 flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-medium"
            >
                <ArrowLeft className="w-4 h-4" />
                Retour au site
            </button>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-900/40 border border-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl"
            >
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        <svg viewBox="0 0 100 100" fill="currentColor" className="w-[60%] h-[60%] text-black">
                            <path d="M24 16h16v28l26-28h18L54 46l32 38H66L40 54v30H24V16z" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-white text-center mb-2">Espace Client</h1>
                <p className="text-slate-400 text-center text-sm mb-8">
                    Accédez à votre tableau de bord KALL
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wide ml-1">Email professionnel</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                placeholder="nom@entreprise.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Mot de passe</label>
                            <a href="#" className="text-xs text-blue-400 hover:text-blue-300">Oublié ?</a>
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all mt-4 shadow-lg flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Se connecter'}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-xs text-slate-500">
                        Vous n'avez pas encore de compte ? <a href="#" className="text-white hover:underline">Contacter le support</a>
                    </p>
                </div>
            </motion.div>
            
            <p className="text-center text-slate-600 text-xs mt-8">
                Sécurisé par KALL Identity • Lille, France
            </p>
        </div>
    </div>
  );
};

export default Login;