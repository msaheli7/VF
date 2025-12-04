import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldAlert, Calendar, Mic } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, className, delay, gradient }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay }}
    className={`group relative overflow-hidden rounded-3xl p-8 md:p-10 border border-white/5 bg-zinc-900/40 backdrop-blur-md hover:bg-zinc-800/60 transition-colors ${className}`}
  >
    {/* Hover Gradient Blob */}
    <div className={`absolute -right-20 -top-20 w-60 h-60 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700 pointer-events-none`} />
    
    <div className="relative z-10 h-full flex flex-col justify-between min-h-[180px]">
        <div>
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Icon className="w-7 h-7 text-slate-200" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>
        </div>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="w-full px-6 max-w-7xl mx-auto py-20">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Une technologie <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">indiscernable de la magie.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Nous avons gardé l'essentiel. KALL est conçu pour faire une seule chose parfaitement : gérer vos appels clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Intelligence / NLP */}
        <FeatureCard 
            title="Intelligence Conversationnelle"
            description="KALL comprend le contexte, l'urgence et les nuances. Elle ne suit pas un script rigide mais s'adapte à chaque client comme une secrétaire expérimentée."
            icon={Zap}
            delay={0.1}
            gradient="from-blue-500 to-cyan-500"
        />
        
        {/* Calendar */}
        <FeatureCard 
            title="Agenda Connecté & Autonome"
            description="L'IA voit vos disponibilités en temps réel (Google/Outlook). Elle propose vos créneaux libres, négocie l'horaire et envoie les invitations automatiquement."
            icon={Calendar}
            delay={0.2}
            gradient="from-green-500 to-emerald-500"
        />

        {/* Spam */}
        <FeatureCard 
            title="Filtrage Anti-Spam Radical"
            description="Finis les appels CPF ou Rénov. KALL détecte les robots et les démarchages commerciaux en moins de 3 secondes et raccroche poliment."
            icon={ShieldAlert}
            delay={0.3}
            gradient="from-red-500 to-pink-500"
        />

        {/* Voice Quality */}
         <FeatureCard 
            title="Voix Haute Fidélité"
            description="Une synthèse vocale ultra-réaliste avec intonations humaines, respirations et hésitations naturelles. Vos clients ne sauront pas que c'est une IA."
            icon={Mic}
            delay={0.4}
            gradient="from-purple-500 to-indigo-500"
        />

      </div>
    </section>
  );
};

export default Features;