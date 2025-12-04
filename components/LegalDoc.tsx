import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface LegalDocProps {
    type: string;
    onBack: () => void;
}

const LegalDoc: React.FC<LegalDocProps> = ({ type, onBack }) => {
  const getContent = () => {
    switch(type) {
        case 'mentions':
            return {
                title: "Mentions Légales",
                content: (
                    <>
                        <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site KALL IA l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
                        
                        <h3>Édition du site</h3>
                        <p>Le présent site, accessible à l’URL www.kall-ia.com (le « Site »), est édité par :</p>
                        <p><strong>KALL IA SAS</strong>, société au capital de 1000 euros, inscrite au R.C.S. de LILLE METROPOLE, dont le siège social est situé à Lille, France.</p>
                        
                        <h3>Hébergement</h3>
                        <p>Le Site est hébergé par Vercel Inc., situé 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis.</p>
                        
                        <h3>Directeur de publication</h3>
                        <p>Le Directeur de la publication du Site est Mohamed Saheli.</p>
                        
                        <h3>Nous contacter</h3>
                        <p>Par email : contact@kall-ia.com</p>
                    </>
                )
            };
        case 'privacy':
            return {
                title: "Politique de Confidentialité",
                content: (
                    <>
                        <p>Chez KALL IA, la confidentialité de vos données et de celles de vos clients est notre priorité absolue.</p>
                        
                        <h3>Collecte des données</h3>
                        <p>Nous collectons les informations que vous nous fournissez directement (création de compte, connexion agenda) et les données issues des appels traités par notre IA (transcriptions, numéros, horaires).</p>
                        
                        <h3>Utilisation des données</h3>
                        <p>Les données sont utilisées exclusivement pour :</p>
                        <ul>
                            <li>Fournir le service de secrétariat intelligent.</li>
                            <li>Améliorer la précision de notre modèle de langage.</li>
                            <li>Vous notifier des rendez-vous et appels.</li>
                        </ul>
                        <p>Nous ne vendons aucune donnée à des tiers publicitaires.</p>
                        
                        <h3>Sécurité</h3>
                        <p>Toutes les communications sont chiffrées (TLS/SSL). Les données sont stockées sur des serveurs sécurisés en Europe, conformes au RGPD.</p>
                    </>
                )
            };
        case 'cgv':
            return {
                title: "Conditions Générales de Vente",
                content: (
                    <>
                        <h3>Préambule</h3>
                        <p>Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des relations entre la société KALL IA et ses clients professionnels.</p>
                        
                        <h3>Services</h3>
                        <p>KALL IA fournit un service de réception d'appels automatisé par intelligence artificielle.</p>
                        
                        <h3>Abonnement et Paiement</h3>
                        <p>Les services sont facturés sous forme d'abonnement mensuel ou annuel, tacitement reconductible. Le paiement est exigible à la date anniversaire de la souscription.</p>
                        
                        <h3>Rétractation</h3>
                        <p>S'agissant d'un service entre professionnels, le droit de rétractation ne s'applique pas, sauf disposition légale contraire. Toutefois, KALL IA offre une période d'essai gratuite de 7 jours.</p>
                        
                        <h3>Responsabilité</h3>
                        <p>KALL IA s'engage à une obligation de moyens. La société ne saurait être tenue responsable des pertes d'exploitation liées à une défaillance du réseau téléphonique ou d'internet.</p>
                    </>
                )
            };
        case 'support':
            return {
                title: "Contact Support",
                content: (
                    <>
                        <p>Notre équipe est basée à Lille et disponible pour vous aider.</p>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-8">
                            <p className="mb-2"><strong>Email :</strong> support@kall-ia.com</p>
                            <p className="mb-2"><strong>Horaires :</strong> Lundi - Vendredi, 9h - 18h</p>
                            <p>Temps de réponse moyen : Moins de 2 heures.</p>
                        </div>
                    </>
                )
            };
        default:
            return { title: "Document", content: <p>Contenu non disponible.</p> };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="min-h-screen bg-black text-slate-300 pt-20 px-6 pb-20">
        <div className="max-w-3xl mx-auto">
            <button 
                onClick={onBack}
                className="mb-8 flex items-center gap-2 text-blue-400 hover:text-white transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Retour
            </button>
            
            <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
                {content}
            </div>
        </div>
    </div>
  );
};

export default LegalDoc;