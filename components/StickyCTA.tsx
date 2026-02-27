
import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
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

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0a0a0f] border-t border-white/20 p-4 md:p-6 z-[200] flex items-center justify-between gap-4 md:gap-8 shadow-[0_-30px_60px_rgba(0,0,0,0.9)] transition-all">
      <a href={HOTMART_LINK} className="flex flex-col justify-center pl-1 md:pl-4 group cursor-pointer">
        {/* Timer resaltado con mayor contraste */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
          <p className="text-[12px] md:text-[14px] uppercase font-black text-red-500 tracking-[0.2em] leading-none group-hover:scale-105 transition-transform origin-left">
            EXPIRA EN {formatTime(timeLeft)}
          </p>
        </div>
        
        {/* Precios resaltados con fondo sólido para máxima legibilidad */}
        <div className="flex items-baseline gap-3">
           <div className="flex items-baseline">
             <span className="text-brand-yellow font-black text-4xl md:text-5xl italic leading-none drop-shadow-md">$17</span>
             <span className="text-white text-[10px] md:text-xs font-black ml-1 uppercase">USD</span>
           </div>
           <p className="text-sm md:text-lg text-white/30 line-through font-bold decoration-red-500/60">$197</p>
        </div>
      </a>

      {/* Botón Fucsia de alto impacto */}
      <a 
        className="flex-grow md:flex-none btn-fuchsia-gradient text-white font-black py-4 md:py-6 px-6 md:px-14 rounded-2xl md:rounded-[1.5rem] text-[15px] md:text-[18px] text-center uppercase tracking-tight shadow-2xl cta-pulse-fuchsia max-w-[280px] md:max-w-md active:scale-95 transition-all hover:scale-[1.02] hover:brightness-110" 
        href={HOTMART_LINK}
      >
        <span className="flex items-center justify-center gap-2">
          SÍ, QUIERO ACCESO YA
          <span className="material-symbols-outlined text-sm md:text-xl font-black">arrow_forward</span>
        </span>
      </a>
    </div>
  );
};

export default StickyCTA;
