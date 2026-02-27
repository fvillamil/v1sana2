
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const HOTMART_LINK = "https://pay.hotmart.com/G104495229H";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Elementos de billetes flotantes para el fondo
  const floatingBills = [
    { left: '10%', top: '20%', delay: '0s', size: 'text-4xl', anim: 'animate-float-slow' },
    { left: '85%', top: '15%', delay: '2s', size: 'text-6xl', anim: 'animate-float-reverse' },
    { left: '5%', top: '60%', delay: '5s', size: 'text-5xl', anim: 'animate-float-slow' },
    { left: '80%', top: '70%', delay: '1s', size: 'text-7xl', anim: 'animate-float-reverse' },
    { left: '15%', top: '85%', delay: '4s', size: 'text-3xl', anim: 'animate-float-slow' },
    { left: '90%', top: '40%', delay: '3s', size: 'text-5xl', anim: 'animate-float-reverse' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-10 pb-20 px-6 overflow-hidden bg-[#12121a]">
      {/* Background Texture/Gradient con toques Fucsia y Oro */}
      <div className="absolute inset-0 hero-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-fuchsia/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-yellow/5 blur-[150px] rounded-full"></div>
      
      {/* Billetes Animados en el Fondo */}
      {floatingBills.map((bill, i) => (
        <span 
          key={i} 
          className={`money-bill ${bill.size} ${bill.anim}`}
          style={{ left: bill.left, top: bill.top, animationDelay: bill.delay }}
        >
          $
        </span>
      ))}
      
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Top Info Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-12 gap-6 px-4">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-brand-fuchsia/20 px-3 py-1 rounded-full border border-brand-fuchsia/30 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-fuchsia animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-fuchsia">Acceso Exclusivo</span>
            </div>
            <h3 className="font-bold text-xl tracking-tight text-white/90">
              Método <span className="text-brand-fuchsia">3R®</span> <span className="font-light text-white/50">— Mentalidad, Finanzas e Inversiones</span>
            </h3>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium">
              El paso a paso para convertirte en inversionista consciente.
            </p>
          </div>
          
          <a href={HOTMART_LINK} className="flex flex-col items-end self-end md:self-center hover:scale-105 transition-transform active:scale-95">
             <span className="text-[10px] uppercase font-black text-white/40 mb-1 tracking-widest">Oferta expira en:</span>
             <div className="bg-red-950/40 border border-red-500/30 px-4 py-1.5 rounded-lg shadow-inner">
               <span className="font-mono text-2xl font-black text-red-500 tracking-wider">
                 00:{formatTime(timeLeft)}
               </span>
             </div>
          </a>
        </div>

        {/* Headline - Dorado Brillante */}
        <h1 className="text-5xl md:text-[5.5rem] font-serif italic text-brand-yellow text-glow-gold mb-6 leading-tight tracking-tight uppercase">
          TUS PRIMEROS $1,000
        </h1>
        <p className="text-lg md:text-2xl font-medium text-white/60 mb-12 max-w-2xl">
          Empieza a construir tu libertad financiera aunque no tengas experiencia.
        </p>

        {/* Central Strategic Image Area con Glow Fucsia */}
        <div className="relative w-full max-w-2xl mb-14 group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-fuchsia/15 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] border border-white/10 group-hover:border-brand-fuchsia/40 transition-colors duration-500 bg-black">
              <img 
                src="https://i.pinimg.com/736x/c1/83/b8/c183b88afb13f2d6e28121d9e8a7405a.jpg" 
                alt="Mujer empoderada con dinero"
                className="w-full h-[320px] md:h-[450px] object-cover brightness-90 grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Strategic Script Messages - Estilo Manuscrito (Dancing Script) */}
            <div className="absolute inset-x-0 bottom-8 md:bottom-12 flex flex-col items-center pointer-events-none">
              <span className="font-script text-4xl md:text-7xl text-white drop-shadow-[0_4px_15px_rgba(0,0,0,1)] -rotate-1 translate-x-[-15px]">
                Riqueza sin culpa.
              </span>
              <span className="font-script text-4xl md:text-7xl text-white drop-shadow-[0_4px_15px_rgba(0,0,0,1)] -rotate-1 translate-x-[15px] md:translate-x-[40px] -mt-1">
                Inversión sin miedo.
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Box and CTA */}
        <div className="w-full max-w-md space-y-8">
          <a href={HOTMART_LINK} className="flex items-center justify-center gap-4 py-3.5 px-8 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl shadow-lg hover:bg-white/10 transition-colors group">
            <span className="material-symbols-outlined text-brand-fuchsia text-lg">lock</span>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors">Ebook + Bonus (Valor: $197)</span>
              <div className="flex items-center gap-3">
                <span className="line-through text-white/20 font-bold text-sm">$197</span>
                <span className="text-white font-black text-sm uppercase">Hoy <span className="text-brand-yellow text-2xl font-black tracking-tighter">$17</span> USD</span>
              </div>
            </div>
          </a>

          <a 
            href={HOTMART_LINK}
            className="block w-full btn-green-gradient py-7 rounded-[2rem] text-xl md:text-2xl font-black text-white uppercase tracking-tight hover:scale-[1.03] active:scale-95 transition-all shadow-2xl relative overflow-hidden group cta-pulse"
          >
            <span className="relative z-10 flex items-center justify-center gap-4">
              Sí, quiero acceso por solo $17
            </span>
          </a>

          {/* Social Proof / Security Badges */}
          <div className="flex flex-col items-center gap-4 pt-2">
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.15em] text-white/40">
              <span className="material-symbols-outlined text-sm text-brand-green">file_download</span>
              Descarga inmediata + 3 bonos de regalo
            </div>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.15em] text-brand-fuchsia/80 hover:text-brand-fuchsia transition-colors cursor-default">
              <span className="material-symbols-outlined text-sm">verified</span>
              Garantía de satisfacción de 7 días — Compra sin riesgo
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
