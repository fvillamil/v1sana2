
import React from 'react';

const Method: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Reconocer',
      desc: 'Hackeamos tus sesgos culturales para que dejes de ver el dinero como un enemigo y empieces a verlo como una herramienta de poder.',
      icon: 'psychology',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '02',
      title: 'Reprogramar',
      desc: 'Configuramos tu ingeniería financiera para que el ahorro y la inversión ocurran sin que tengas que pensarlo.',
      icon: 'account_balance_wallet',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '03',
      title: 'Rentabilizar',
      desc: 'Multiplicamos esos primeros $1,000 con estrategias de inversión de bajo riesgo diseñadas para agendas saturadas.',
      icon: 'show_chart',
      img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const HOTMART_LINK = "https://pay.hotmart.com/G104495229H";

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Roadmap Path (Desktop only) */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-fuchsia/10 hidden lg:block -translate-y-12"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-brand-fuchsia font-black text-xs tracking-[0.5em] uppercase mb-4 block">TU HOJA DE RUTA</span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-brand-black leading-tight max-w-4xl mx-auto">
            El Método 3R para lograr <br/>
            <span className="text-brand-yellow font-black drop-shadow-sm">Abundancia financiera</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((s, i) => (
            <div key={i} className="group relative flex flex-col items-center text-center">
              {/* Desktop Connecting Dots */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[120px] left-[calc(100%-20px)] z-20">
                  <span className="material-symbols-outlined text-brand-fuchsia/40 text-4xl animate-pulse">chevron_right</span>
                </div>
              )}
              
              <div className="relative mb-10 w-full">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[120px] font-black text-brand-fuchsia/5 pointer-events-none select-none italic transition-all group-hover:text-brand-fuchsia/10">{s.id}</div>
                
                <div className="relative">
                  <div className="w-24 h-24 bg-brand-black rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl transform transition-transform group-hover:rotate-12 group-hover:bg-brand-fuchsia duration-500">
                    <span className="material-symbols-outlined text-4xl text-white font-bold">{s.icon}</span>
                  </div>
                  
                  <div className="overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-700 group-hover:shadow-brand-fuchsia/20 aspect-video lg:aspect-square">
                    <img alt={s.title} className="w-full h-full object-cover brightness-105 group-hover:scale-110 transition-transform duration-1000" src={s.img}/>
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <h3 className="font-serif text-4xl mb-4 text-brand-black italic font-black">{s.title}</h3>
                <p className="text-brand-black/60 text-lg leading-relaxed font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href={HOTMART_LINK} className="inline-flex items-center gap-4 p-2 pl-6 bg-brand-fuchsia/5 rounded-full border border-brand-fuchsia/10 hover:bg-brand-fuchsia/10 transition-colors group">
            <span className="text-sm font-black text-brand-fuchsia uppercase tracking-widest">Punto de Destino:</span>
            <div className="bg-brand-fuchsia text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-tighter shadow-xl group-hover:scale-105 transition-transform">
              Tus primeros $1,000 USD
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Method;
