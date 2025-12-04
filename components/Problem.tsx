import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMissed, PhoneCall, CalendarCheck, AlertCircle, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
  }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" }
    }
};

const Problem: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
                Chaque appel manqué est <br/>un client qui part à la concurrence.
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center relative">
            
            {/* Connecting Line (Desktop) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 z-20"
            >
                <ArrowRight className="w-full h-full text-slate-700 opacity-20" />
            </motion.div>

            {/* The Problem (Dark/Red) */}
            <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative group h-full"
            >
                <div className="absolute inset-0 bg-red-500/5 rounded-[2.5rem] blur-2xl group-hover:bg-red-900/10 transition-colors duration-500" />
                <div className="relative glass-card rounded-[2.5rem] p-8 md:p-10 border border-red-900/30 overflow-hidden h-full flex flex-col hover:border-red-900/50 transition-colors">
                    {/* Background noise texture */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                    <div className="flex items-center justify-between mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                            <PhoneMissed className="w-8 h-8" />
                        </div>
                        <div className="text-right">
                            <span className="block text-xs font-bold uppercase tracking-widest text-red-500">Avant KALL</span>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">Le scénario classique</h3>
                    
                    <motion.ul 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4 mb-8 flex-1"
                    >
                        <motion.li variants={itemVariants} className="flex items-start gap-3 text-slate-400">
                            <AlertCircle className="w-5 h-5 text-red-900 shrink-0 mt-0.5" />
                            <span>Vous êtes sur un chantier ou en réunion.</span>
                        </motion.li>
                        <motion.li variants={itemVariants} className="flex items-start gap-3 text-slate-400">
                            <AlertCircle className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
                            <span>Le client tombe sur le répondeur.</span>
                        </motion.li>
                        <motion.li variants={itemVariants} className="flex items-start gap-3 text-slate-400">
                            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                            <span><strong className="text-red-400">76% des gens ne laissent pas de message</strong> et appellent le concurrent suivant.</span>
                        </motion.li>
                    </motion.ul>
                    
                    <div className="mt-8 pt-8 border-t border-red-900/30 flex items-center justify-between">
                        <span className="text-slate-500 text-sm">Perte estimée</span>
                        <span className="text-xl font-bold text-red-500">-2 500€ / mois</span>
                    </div>
                </div>
            </motion.div>

            {/* The Solution (Bright/Green) */}
            <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative group h-full"
            >
                 <div className="absolute inset-0 bg-emerald-500/10 rounded-[2.5rem] blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-500" />
                <div className="relative glass-card rounded-[2.5rem] p-8 md:p-10 border border-emerald-500/30 overflow-hidden bg-gradient-to-br from-emerald-950/30 to-black h-full flex flex-col hover:border-emerald-500/50 transition-colors">
                    
                    <div className="flex items-center justify-between mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                            <PhoneCall className="w-8 h-8" />
                        </div>
                        <div className="text-right">
                             <span className="block text-xs font-bold uppercase tracking-widest text-emerald-400">Avec KALL</span>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">L'avantage injuste</h3>
                    
                    <motion.ul 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4 mb-8 flex-1"
                    >
                         <motion.li variants={itemVariants} className="flex items-start gap-3 text-slate-300">
                            <CalendarCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>KALL décroche en <strong className="text-white">2 secondes</strong>, 24/7.</span>
                        </motion.li>
                        <motion.li variants={itemVariants} className="flex items-start gap-3 text-slate-300">
                            <CalendarCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>Qualifie l'urgence et prend les coordonnées.</span>
                        </motion.li>
                         <motion.li variants={itemVariants} className="flex items-start gap-3 text-slate-300">
                            <CalendarCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span><strong className="text-emerald-400">Insère le RDV directement</strong> dans votre agenda Google/Outlook.</span>
                        </motion.li>
                    </motion.ul>
                    
                    <div className="mt-8 pt-8 border-t border-emerald-500/20 flex items-center justify-between">
                        <span className="text-slate-500 text-sm">Gain estimé</span>
                        <span className="text-xl font-bold text-emerald-400">+30% CA / mois</span>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Problem;