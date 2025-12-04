import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const ParticleSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    interface Point {
      x: number;
      y: number;
      z: number;
      ox: number;
      oy: number;
      oz: number;
    }

    const points: Point[] = [];
    const numPoints = 300; 
    const globeRadius = Math.min(width, height) * 0.35;
    
    const phi = Math.PI * (3 - Math.sqrt(5)); 
    for (let i = 0; i < numPoints; i++) {
        const y = 1 - (i / (numPoints - 1)) * 2; 
        const radius = Math.sqrt(1 - y * y);
        const theta = phi * i; 

        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;

        points.push({
            x: x * globeRadius,
            y: y * globeRadius,
            z: z * globeRadius,
            ox: x * globeRadius,
            oy: y * globeRadius,
            oz: z * globeRadius
        });
    }

    let rotationX = 0.001;
    let rotationY = 0.001;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
        const targetX = (e.clientX - width / 2) * 0.00005;
        const targetY = (e.clientY - height / 2) * 0.00005;
        mouseX += (targetX - mouseX) * 0.1;
        mouseY += (targetY - mouseY) * 0.1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        rotationY += 0.002;
        
        const rx = mouseY * 2;
        const ry = rotationY + mouseX * 2;

        const cx = width / 2;
        const cy = height / 2;

        const cosRy = Math.cos(ry);
        const sinRy = Math.sin(ry);
        const cosRx = Math.cos(rx);
        const sinRx = Math.sin(rx);

        ctx.fillStyle = '#93c5fd';

        for (let i = 0; i < numPoints; i++) {
             const p = points[i];

             const x1 = p.ox * cosRy - p.oz * sinRy;
             const z1 = p.ox * sinRy + p.oz * cosRy;
             
             const y1 = p.oy * cosRx - z1 * sinRx;
             const z2 = p.oy * sinRx + z1 * cosRx;
             
             p.x = x1;
             p.y = y1;
             p.z = z2;

             const scale = 400 / (400 - p.z); 
             const x2d = cx + p.x * scale;
             const y2d = cy + p.y * scale;

             if (scale > 0) {
                const alpha = (p.z + globeRadius) / (2 * globeRadius);
                ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));
                
                const size = 2 * scale;
                ctx.fillRect(x2d - size / 2, y2d - size / 2, size, size);
             }
        }

        requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />;
};

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5 pt-20">
      
      <ParticleSphere />
      
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 text-center max-w-5xl mx-auto px-6"
      >
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:border-blue-500/30 transition-colors cursor-pointer group will-change-transform"
        >
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors uppercase">
                KALL 2.0 • L'IA Générative Vocale
            </span>
            <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-white" />
        </motion.div>

        {/* Adjusted sizes for better Laptop fit */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-[0.95] text-glow">
            Plus qu'un répondeur. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500">
                Une Intelligence.
            </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Ne perdez plus jamais de chiffre d'affaires. <br className="hidden md:block"/>
            <span className="text-white font-medium">KALL décroche, négocie et qualifie</span> vos prospects 24/7 avec une voix indiscernable de l'humain.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
                onClick={scrollToPricing}
                className="w-full sm:w-auto px-10 py-4 md:py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group will-change-transform"
            >
                Commencer maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
        <p className="mt-6 text-sm text-slate-500 font-medium">
            ✨ 7 jours d'essai gratuit • Annulable à tout moment
        </p>
      </motion.div>
      
    </section>
  );
};

export default Hero;