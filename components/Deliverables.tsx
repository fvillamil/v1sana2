
import React from 'react';

const Deliverables: React.FC = () => {
  const HOTMART_LINK = "https://pay.hotmart.com/G104495229H";

  const items = [
    { icon: 'menu_book', text: '1. El ebook principal: Tus primeros $1.000 - Guia paso a paso' },
    { icon: 'calendar_today', text: '2. Organiza tus finanzas sin estrés' },
    { icon: 'potted_plant', text: '3. Libérate de tus deudas y recupera tu estabilidad financiera' },
    { icon: 'show_chart', text: '4. Crea tu plan de inversión con la guia de brokers autorizados internacionalmente' }
  ];

  const bonuses = [
    { title: 'BONO 1: Plan de inversión personalizado', price: '$60 USD' },
    { title: 'BONO 2: Ritual Financiero de 7 días para Sanar tu Abundancia', price: '$35 USD' },
    { title: 'BONO 3: Check list de abundancia diaria', price: '$65 USD' }
  ];

  return (
    <section className="py-24 px-6 bg-brand-dark border-y border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-10 text-brand-black leading-tight">
              Tu Arsenal de <br/>
              <span className="text-brand-fuchsia font-black drop-shadow-sm">Abundancia Radical</span>
            </h2>
            
            <p className="text-brand-black/70 text-lg md:text-xl font-medium mb-12 leading-relaxed max-w-lg">
              No es solo un PDF. Es el ecosistema técnico y mental que las ejecutivas usan para <span className="text-brand-black font-black">blindar su patrimonio</span> y dejar de ser el "banco" de la familia.
            </p>
            
            {/* Tarjetas con Iconos Visibles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {items.map((item, i) => (
                <div key={i} className="bg-white p-7 rounded-[2.5rem] border border-black/5 shadow-xl flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="w-14 h-14 bg-brand-black rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-black/10">
                    <span className="material-symbols-outlined text-brand-yellow text-4xl font-bold">{item.icon}</span>
                  </div>
                  <p className="text-[14px] font-black uppercase tracking-tighter leading-tight text-brand-black pr-4">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Banner de Precio con Alto Contraste - Clicable */}
            <a 
              href={HOTMART_LINK}
              className="mt-16 p-10 bg-brand-black text-white rounded-[3rem] border-4 border-brand-yellow flex flex-col sm:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-all block"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-fuchsia/10 rounded-full translate-x-20 -translate-y-20 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="text-center sm:text-left relative z-10">
                <p className="text-[11px] font-black text-brand-yellow uppercase tracking-[0.3em] mb-2 opacity-80">INVERSIÓN TOTAL:</p>
                <p className="text-white/20 text-4xl font-black line-through leading-none">$197.00</p>
              </div>
              <div className="hidden sm:block w-px h-20 bg-white/10"></div>
              <div className="text-center sm:text-right relative z-10">
                <p className="text-[11px] font-black text-brand-fuchsia uppercase tracking-[0.3em] mb-2">PROMOCIÓN EXCLUSIVA:</p>
                <div className="flex items-baseline justify-center sm:justify-end">
                  <span className="text-7xl md:text-8xl font-black text-brand-yellow leading-none tracking-tighter">$17</span>
                  <span className="text-2xl italic font-black text-white ml-2">USD</span>
                </div>
              </div>
            </a>
          </div>

          {/* Imagen Mockup y Bonus Column */}
          <div className="lg:w-1/2 relative group order-1 lg:order-2 flex flex-col items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-brand-fuchsia opacity-10 blur-[150px] rounded-full animate-pulse pointer-events-none"></div>
            
            <div className="relative mb-12">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/NVSDoX5EvYW7zEOYpsAI/media/67634863f64c126f97544ef4.png" 
                alt="Ecosistema Radical 3R"
                className="relative z-10 w-full drop-shadow-[0_60px_100px_rgba(255,0,255,0.15)] transform group-hover:scale-[1.05] transition-transform duration-1000"
              />
              
              {/* Acceso Total Badge - Clicable */}
              <a 
                href={HOTMART_LINK}
                className="absolute -bottom-12 -left-4 md:-left-12 bg-brand-yellow text-brand-black rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] z-20 flex flex-col items-center justify-center animate-bounce border-4 border-brand-black overflow-hidden hover:scale-110 hover:brightness-110 transition-all"
              >
                <div className="px-8 pt-8 pb-4 flex flex-col items-center">
                  <p className="text-[10px] md:text-[12px] font-black uppercase tracking-tighter leading-none mb-1">ACCESO</p>
                  <p className="text-4xl md:text-5xl font-black leading-none italic">TOTAL</p>
                </div>
                
                {/* Parte inferior del recuadro con el nombre del ecosistema */}
                <div className="w-full bg-brand-black py-3 px-6">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-brand-yellow text-center whitespace-nowrap">
                    Ecosistema Radical 3R
                  </p>
                </div>
              </a>
            </div>

            {/* BONUS SECTION UNDER MOCKUP */}
            <div className="w-full max-w-md bg-white p-8 rounded-[3rem] shadow-2xl border border-black/5 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-brand-fuchsia font-black">stars</span>
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-black">Bonos de Regalo Incluidos:</h4>
              </div>
              
              <div className="space-y-4">
                {bonuses.map((bonus, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-black/5 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
                      <p className="text-[10px] font-bold text-brand-black/80">{bonus.title}</p>
                    </div>
                    <span className="text-[10px] font-black text-brand-fuchsia/40 line-through tracking-tighter">{bonus.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-brand-yellow/30 flex justify-between items-center">
                <p className="text-[10px] font-black text-brand-black/40 uppercase">Ahorro en Bonos:</p>
                <p className="text-sm font-black text-brand-fuchsia">GRATIS HOY</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Deliverables;
