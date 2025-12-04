import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Fingerprint, Network } from 'lucide-react';

const Differentiators: React.FC = () => {
  const cards = [
    {
      icon: Fingerprint,
      title: "Hyper-Personnalisation",
      description: "KALL ne récite pas. Elle apprend votre vocabulaire métier et adapte son ton à chaque interlocuteur, créant une expérience unique."
    },
    {
      icon: Brain,
      title: "Mémoire Contextuelle",
      description: "Elle se souvient des appels précédents. Si M. Dupont rappelle, elle connaît déjà son dossier et ne repose pas les mêmes questions."
    },
    {
      icon: Network,
      title: "Actions Autonomes",
      description: "Au-delà de la parole, KALL agit. Elle envoie des SMS, gère votre agenda et notifie vos équipes sur Slack ou WhatsApp en temps réel."
    }
  ];

  return (
    <section className="w-full py-20 px-6 relative z-10 bg-black/40 border-b border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            L'IA conventionnelle est <span className="text-red-500 line-through decoration-red-500/50 decoration-4">dépassée</span>.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            La plupart des assistants virtuels sont de simples arbres de décision. KALL est un réseau neuronal dynamique qui comprend l'intention réelle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-transform duration-300">
                <card.icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;