import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Rocket, Clock, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 px-6 relative bg-zinc-950 border-t border-white/5 overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none mix-blend-overlay" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: The Manifesto */}
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-bold uppercase tracking-wider mb-6">
                <MapPin className="w-3 h-3 text-blue-500" />
                Liban • Sénégal • France
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              L'entrepreneuriat n'est pas <br/>
              <span className="text-slate-500">une question d'âge.</span>
            </h2>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Je m'appelle <strong className="text-white">Mohamed Saheli</strong>. Mon parcours n'est pas linéaire, mais il est guidé par une seule chose : la détermination.
              </p>
              <p>
                Né au Liban, j'ai vu l'instabilité bousculer le quotidien. J'ai dû partir temporairement au <strong className="text-white">Sénégal</strong> le temps que la situation s'apaise. La vie semblait vouloir m'imposer un détour, m'éloigner de mes objectifs.
              </p>
              <p>
                Mais j'en ai décidé autrement. Je suis retourné au Liban pour passer mon BAC, par principe et par discipline. Une fois le diplôme en poche, je suis arrivé en France à 18 ans avec une vision claire : <strong className="text-white">lancer KALL IA.</strong>
              </p>
              <p>
                Je ne suis pas ici pour vendre un simple logiciel. Je suis ici parce que je crois fermement que les entreprises françaises méritent mieux que de perdre leur temps sur des tâches administratives. L'automatisation n'est pas le futur, c'est le présent.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <Rocket className="w-6 h-6 text-blue-400 mb-3" />
                    <h4 className="text-white font-bold text-sm mb-1">Modernisation</h4>
                    <p className="text-xs text-slate-400">Rejoindre KALL, c'est faire entrer votre entreprise dans une nouvelle ère d'efficacité.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <Clock className="w-6 h-6 text-emerald-400 mb-3" />
                    <h4 className="text-white font-bold text-sm mb-1">Temps Retrouvé</h4>
                    <p className="text-xs text-slate-400">L'IA gère l'accueil, vous vous concentrez sur votre cœur de métier.</p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Founder Card / Visual */}
        <div className="relative z-10 flex justify-center lg:justify-end">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative w-full max-w-md"
            >
                {/* Decorative border gradient */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-30" />
                
                <div className="relative bg-zinc-900 rounded-[2rem] p-8 border border-white/10 overflow-hidden">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                    
                    <div className="mb-8">
                        <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-white/10 flex items-center justify-center mb-4 overflow-hidden relative">
                             {/* Placeholder for Founder Image or Monogram */}
                             <span className="text-2xl font-bold text-white relative z-10">MS</span>
                             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Mohamed Saheli</h3>
                        <p className="text-blue-400 text-sm font-medium">Fondateur de KALL IA</p>
                    </div>

                    <blockquote className="text-xl font-medium text-slate-200 italic leading-relaxed mb-8">
                        "En choisissant KALL IA, vous ne payez pas juste un abonnement. Vous investissez dans la modernisation et la pérennité de votre propre entreprise."
                    </blockquote>

                    <a href="#pricing" className="block w-full py-4 bg-white text-black text-center font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-lg">
                        Rejoindre le mouvement
                    </a>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;