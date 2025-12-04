import React from 'react';

// --- LOGOS CLIENTS (Redessinés Pro) ---

const SmilyLogo = () => (
  <svg viewBox="0 0 140 40" className="h-8 md:h-9 w-auto fill-current">
    {/* Text: smily (Custom geometric sans) */}
    <path d="M15.5 24.5C15.8 26.8 17.5 28.2 20.2 28.2C22.6 28.2 24.1 27.1 24.1 25.4C24.1 23.9 23 23.1 20.4 22.5L18.8 22.1C15 21.2 13.1 19.3 13.1 16.2C13.1 12.3 16.3 9.8 20.6 9.8C24.5 9.8 27.2 11.9 27.6 15.2H24.3C24 13.5 22.7 12.4 20.5 12.4C18.4 12.4 16.8 13.6 16.8 15.1C16.8 16.5 17.9 17.2 20.5 17.8L22.1 18.2C26.1 19.1 27.8 21.1 27.8 24.2C27.8 28.5 24.8 30.9 20.1 30.9C15.8 30.9 12.8 28.8 12.2 24.5H15.5Z" />
    <path d="M32 10.2H35.6V13.8C36.8 11.5 38.9 10.2 41.8 10.2C44.2 10.2 46.1 11.2 47.2 13.1C48.6 11.1 50.8 10.2 53.6 10.2C58.1 10.2 60.5 13.1 60.5 18V30.5H56.9V18.6C56.9 15.6 55.6 14.1 53.1 14.1C50.8 14.1 49.3 15.6 49.3 18.5V30.5H45.7V18.6C45.7 15.6 44.4 14.1 41.9 14.1C39.5 14.1 38.1 15.6 38.1 18.5V30.5H34.5V10.2H32Z" />
    <path d="M66 6.5C66 5.3 66.9 4.4 68.1 4.4C69.3 4.4 70.2 5.3 70.2 6.5C70.2 7.7 69.3 8.6 68.1 8.6C66.9 8.6 66 7.7 66 6.5ZM66.3 10.2H69.9V30.5H66.3V10.2Z" />
    <path d="M75.5 6.5V30.5H79.1V6.5H75.5Z" />
    <path d="M84.5 10.2H88.4L93.1 22.8L97.7 10.2H101.6L94.8 27.5L93.5 30.8C92.1 34.5 90.1 36.2 86.8 36.2C86.1 36.2 85.2 36.1 84.8 35.9V32.8C85.2 32.9 85.7 33 86.2 33C87.8 33 88.8 32.2 89.4 30.3L89.8 29.2L84.5 10.2Z" />
    {/* The Smile Curve Accent */}
    <path d="M35 36 C 50 44, 80 44, 95 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-blue-500" />
  </svg>
);

const ALogo = () => (
  <svg viewBox="0 0 50 50" className="h-9 md:h-10 w-auto fill-current">
    {/* Stylized Drop/A Shape */}
    <path d="M25 2 C25 2 42 22 42 32.5 C42 42 34.5 49 25 49 C15.5 49 8 42 8 32.5 C8 22 25 2 25 2 Z M25 44 C31 44 36 39 36 32.5 C36 28 30 18 25 10 C20 18 14 28 14 32.5 C14 39 19 44 25 44 Z" />
    {/* Interior detail */}
    <path d="M25 18 C25 18 29 26 29 31 C29 34 27 36 25 36 C23 36 21 34 21 31 C21 26 25 18 25 18 Z" className="opacity-50"/>
  </svg>
);

const Day1Logo = () => (
  <svg viewBox="0 0 100 35" className="h-7 md:h-8 w-auto fill-current">
    <path d="M0 0 H14 C22 0 28 6 28 17.5 C28 29 22 35 14 35 H0 V0 Z M8 7 V28 H13 C18 28 20 25 20 17.5 C20 10 18 7 13 7 H8 Z" />
    <path d="M38 0 L49 35 H41 L39 28 H33 L31 35 H23 L34 0 H38 Z M36 21 L35 16 L34 12 L33 16 L32 21 H36 Z" />
    <path d="M52 0 L60 21 L67 0 H76 L64 35 H56 L44 0 H52 Z" />
    {/* The "1" */}
    <rect x="80" y="0" width="16" height="35" className="fill-emerald-500" />
    <path d="M80 0 L72 8 H80 V0 Z" className="fill-emerald-600" />
  </svg>
);

// --- LOGOS INVENTÉS (Abstraits & Modernes) ---

const LogoIpsum1 = () => (
  <svg viewBox="0 0 140 40" className="h-7 md:h-8 w-auto fill-current opacity-80 group-hover:opacity-100 transition-opacity">
    <path d="M20 20 L10 35 L0 20 L10 5 Z" fill="currentColor" />
    <circle cx="10" cy="20" r="3" className="fill-black" />
    <text x="30" y="28" fontFamily="sans-serif" fontWeight="bold" fontSize="22" letterSpacing="1">KRONOS</text>
  </svg>
);

const LogoIpsum2 = () => (
  <svg viewBox="0 0 140 40" className="h-8 md:h-9 w-auto fill-current opacity-80 group-hover:opacity-100 transition-opacity">
    <rect x="0" y="5" width="10" height="30" rx="5" />
    <rect x="14" y="15" width="10" height="20" rx="5" className="opacity-50" />
    <text x="36" y="28" fontFamily="sans-serif" fontWeight="600" fontSize="22" letterSpacing="0">ventra</text>
  </svg>
);

const LogoIpsum3 = () => (
  <svg viewBox="0 0 150 40" className="h-7 md:h-8 w-auto fill-current opacity-80 group-hover:opacity-100 transition-opacity">
    <circle cx="15" cy="20" r="12" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M15 20 L25 10" stroke="currentColor" strokeWidth="3" />
    <text x="38" y="27" fontFamily="sans-serif" fontWeight="800" fontSize="20" letterSpacing="2" style={{textTransform: 'uppercase'}}>Orbital</text>
  </svg>
);

const LogoIpsum4 = () => (
  <svg viewBox="0 0 140 40" className="h-6 md:h-7 w-auto fill-current opacity-80 group-hover:opacity-100 transition-opacity">
    <path d="M0 20 L10 0 L20 20 L30 0 L40 20 L30 40 L20 20 L10 40 Z" />
    <text x="50" y="28" fontFamily="monospace" fontWeight="bold" fontSize="24">Z-CORE</text>
  </svg>
);

const TrustedBy: React.FC = () => {
  const logos = [
    { component: SmilyLogo, name: "Smily" },
    { component: ALogo, name: "A Brand" },
    { component: Day1Logo, name: "Day1" },
    { component: LogoIpsum1, name: "Kronos" },
    { component: LogoIpsum2, name: "Ventra" },
    { component: LogoIpsum3, name: "Orbital" },
    { component: LogoIpsum4, name: "Z-Core" },
  ];

  return (
    <section className="w-full bg-black border-b border-white/5 py-12 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-[0.2em] opacity-80">
          Ils font confiance à l'intelligence active
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Masks for Seamless Effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track - Slow & Smooth */}
        <div className="flex animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-20 md:gap-32 mx-10 md:mx-16">
              {logos.map((Logo, index) => (
                <div 
                  key={`${setIndex}-${index}`} 
                  className="text-slate-500 hover:text-white transition-all duration-500 cursor-pointer grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transform hover:scale-105"
                >
                  <Logo.component />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;