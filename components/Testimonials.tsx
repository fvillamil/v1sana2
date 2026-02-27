
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "En 30 días exactos, no solo junté los $1,000, sino que recuperé el control de mi vida. Ya no pido permiso para gastar mi propio dinero.",
      name: "Maria Elena R.",
      role: "Directora Creativa",
      roi: "+$3,400 en 2 meses",
      color: "brand-fuchsia",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    {
      text: "Dejé de ser la 'caja chica' de mi familia. Este curso me dio el lenguaje y la estructura para decir NO y priorizar mi futuro.",
      name: "Carmen S.",
      role: "Gerente de Proyectos",
      roi: "Deudas liquidadas",
      color: "brand-yellow",
      img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=200"
    },
    {
      text: "Sentía que por ganar bien no podía quejarme de estar estresada. Aquí entendí que la abundancia real incluye paz mental y tiempo.",
      name: "Daniela V.",
      role: "Consultora Senior",
      roi: "Inversiones activas",
      color: "brand-fuchsia",
      img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-fuchsia font-black text-xs tracking-[0.5em] uppercase mb-4 block">HISTORIAS DE ÉXITO</span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-brand-black">Resultados <span className="text-brand-fuchsia font-black underline decoration-brand-yellow decoration-4 underline-offset-8">Reales</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="group bg-brand-dark p-8 md:p-10 rounded-[3rem] relative border border-black/5 shadow-2xl shadow-black/5 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-brand-fuchsia/10">
              {/* Decorative Quote Mark */}
              <span className="material-symbols-outlined text-8xl text-brand-black/5 absolute top-4 left-4 font-black pointer-events-none">format_quote</span>
              
              <div className="relative z-10 flex-1">
                <p className="text-xl italic mb-10 text-brand-black/80 leading-relaxed font-serif pt-4">"{t.text}"</p>
              </div>

              <div className="flex items-center gap-4 relative z-10 pt-8 border-t border-black/5">
                <div className="relative">
                  <div className={`absolute -inset-1 bg-${t.color} rounded-2xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity`}></div>
                  <img 
                    src={t.img} 
                    alt={t.name} 
                    className="w-16 h-16 rounded-2xl object-cover relative z-10 border-2 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <p className="font-black text-lg text-brand-black leading-none mb-1">{t.name}</p>
                  <p className="text-[10px] font-bold text-brand-black/40 uppercase tracking-widest mb-1">{t.role}</p>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-${t.color} animate-pulse`}></span>
                    <p className={`text-[11px] font-black uppercase tracking-wider text-${t.color}`}>{t.roi}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-brand-black/40 text-sm font-bold uppercase tracking-[0.2em] mb-4">MIEMBROS ACTIVOS DEL MÉTODO 3R</p>
          <div className="flex justify-center -space-x-4">
            {[1,2,3,4,5,6].map(n => (
              <div key={n} className="w-12 h-12 rounded-full border-4 border-white bg-brand-dark overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=${n+20}`} alt="User" className="w-full h-full object-cover grayscale opacity-80" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-brand-yellow flex items-center justify-center text-[10px] font-black text-brand-black">+2k</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
