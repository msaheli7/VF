import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Marc D.",
    role: "Artisan Plombier",
    content: "Avant je perdais 3 appels sur 5 quand j'étais sous un évier. Aujourd'hui KALL prend tout, filtre les pubs et me note juste les chantiers urgents.",
    initial: "M",
    color: "bg-orange-500"
  },
  {
    name: "Dr. Sophie L.",
    role: "Chirurgien Dentiste",
    content: "Mes patients sont bluffés. Ils pensent parler à une nouvelle secrétaire très calme et polie. Ça a transformé l'ambiance au cabinet et réduit les no-shows.",
    initial: "S",
    color: "bg-blue-500"
  },
  {
    name: "Julien V.",
    role: "Avocat Droit des Affaires",
    content: "La confidentialité et le ton professionnel étaient cruciaux. KALL est la seule IA qui a réussi à adopter le vouvoiement et le sérieux requis pour mon cabinet.",
    initial: "J",
    color: "bg-purple-500"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ils ont adopté KALL</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>
          <p className="text-slate-400">Note moyenne de 4.9/5 par plus de 500 professionnels.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col hover:bg-white/10 transition-colors group"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5 group-hover:text-white/10 transition-colors" />
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10 italic">
                "{review.content}"
              </p>
              
              <div className="mt-auto flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center font-bold text-white text-lg shadow-lg shrink-0`}>
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <span className="text-sm text-slate-500">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;