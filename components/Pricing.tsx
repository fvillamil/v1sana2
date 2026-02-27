
import React from 'react';

const Pricing: React.FC = () => {
  const HOTMART_LINK = "https://pay.hotmart.com/G104495229H";
  
  return (
    <section id="pricing" className="py-32 px-6 bg-[#0f0f15] text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-yellow/20 to-transparent"></div>
      
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-[#1a1a24] border-[6px] border-brand-yellow rounded-[4rem] p-12 pt-24 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-brand-yellow"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-black text-[13px] font-black py-3 px-14 rounded-b-3xl uppercase tracking-[0.3em] shadow-xl">
            OFERTA POR TIEMPO LIMITADO
          </div>
          
          <h2 className="text-white font-serif italic text-4xl md:text-5xl mb-10 leading-tight">Tu Libertad Financiera <br/>Empieza Aquí:</h2>
          
          <div className="flex flex-col items-center justify-center gap-6 mb-14">
            <div className="flex items-center gap-4 opacity-40">
              <span className="w-12 h-px bg-white/50"></span>
              <span className="text-white line-through text-4xl font-bold tracking-widest">$197.00 USD</span>
              <span className="w-12 h-px bg-white/50"></span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[10rem] font-black text-brand-yellow italic leading-none drop-shadow-[0_0_50px_rgba(250,204,21,0.3)]">$17</span>
              <span className="text-3xl font-black text-white italic">USD</span>
            </div>
          </div>
          
          <p className="text-xl text-white/60 mb-14 font-medium leading-relaxed max-w-sm mx-auto">
            Acceso instantáneo a todo el material. <br/>
            <span className="text-brand-yellow font-black italic">No es un gasto, es tu primera inversión.</span>
          </p>
          
          <a className="flex items-center justify-center gap-4 w-full btn-green-gradient text-white font-black py-8 rounded-[2.5rem] shadow-2xl cta-pulse text-2xl uppercase tracking-tight mb-12 active:scale-95 transition-all hover:scale-[1.02]" href={HOTMART_LINK}>
            SÍ, QUIERO MI LIBERTAD YA
          </a>
          
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale contrast-125 hover:grayscale-0 hover:opacity-100 transition-all">
               <img alt="Visa" className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" />
               <img alt="Mastercard" className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" />
               <img alt="Stripe" className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" />
            </div>
            
            <div className="flex items-center justify-center gap-3 text-[12px] text-white/40 font-black uppercase tracking-[0.2em]">
              <span className="material-symbols-outlined text-brand-yellow text-2xl">verified_user</span>
              Transacción 100% Segura & Encriptada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
