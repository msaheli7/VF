import React from 'react';

interface FooterProps {
    onLegalClick: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  return (
    <footer className="w-full border-t border-white/10 bg-black pt-20 pb-12 px-6 relative overflow-hidden">
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 mb-16">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                        <svg viewBox="0 0 100 100" fill="currentColor" className="w-[60%] h-[60%] text-black">
                            <path d="M24 16h16v28l26-28h18L54 46l32 38H66L40 54v30H24V16z" />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold text-white tracking-tighter">KALL IA</span>
                </div>
                <p className="text-slate-500 text-sm max-w-sm mb-8 leading-relaxed">
                    La première intelligence artificielle vocale conçue spécifiquement pour les artisans, les professions libérales et les PME françaises.
                </p>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Navigation</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                    <li className="hover:text-blue-400 cursor-pointer transition-colors"><a href="#features">Fonctionnalités</a></li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors"><a href="#pricing">Tarifs</a></li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors"><a href="#about">Notre Histoire</a></li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors"><a href="#demo">Démo</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Légal</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                    <li onClick={() => onLegalClick('mentions')} className="hover:text-blue-400 cursor-pointer transition-colors">Mentions Légales</li>
                    <li onClick={() => onLegalClick('privacy')} className="hover:text-blue-400 cursor-pointer transition-colors">Politique de Confidentialité</li>
                    <li onClick={() => onLegalClick('cgv')} className="hover:text-blue-400 cursor-pointer transition-colors">CGV</li>
                    <li onClick={() => onLegalClick('support')} className="hover:text-blue-400 cursor-pointer transition-colors">Contact Support</li>
                </ul>
            </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-slate-600 text-xs">
                © {new Date().getFullYear()} KALL IA SAS. Tous droits réservés.
            </span>
            <div className="flex items-center gap-2 text-slate-600 text-xs">
                <span>Fait avec</span>
                <span className="text-red-500">❤️</span>
                <span>à Lille, France.</span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;