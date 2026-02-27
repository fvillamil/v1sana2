
import React from 'react';

const Mentor: React.FC = () => {
  return (
    <section className="py-28 px-6 bg-brand-dark border-y border-black/5">
      <div className="max-w-xl mx-auto">
        <div className="mb-14 relative group">
          <div className="absolute -inset-2 bg-brand-fuchsia rounded-[3rem] opacity-10 group-hover:opacity-20 blur-xl transition-all"></div>
          <div className="rounded-[2.8rem] overflow-hidden border-8 border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] relative">
            <img 
              alt="Alexandra Cook" 
              className="w-full transition-all duration-1000 scale-105 group-hover:scale-100 object-cover" 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/NVSDoX5EvYW7zEOYpsAI/media/675a4ac85f5b9543b4f03b46.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent opacity-40"></div>
          </div>
        </div>
        
        <div className="relative">
          <span className="text-brand-fuchsia font-black text-[11px] tracking-[0.5em] uppercase mb-4 block">TU MENTORA DE PODER</span>
          <h2 className="text-5xl font-serif italic mb-10 text-brand-black font-black leading-tight">Alexandra Cook</h2>
          
          <div className="space-y-6 text-brand-black/80 text-lg leading-relaxed font-medium">
            <p className="font-serif italic text-2xl text-brand-black mb-6">
              "La mayoría de los cursos en español repiten lo mismo de siempre. Mentalidad sin estrategia. Finanzas sin transformación interna. Inversiones sin preparación previa."
            </p>
            
            <p>
              Mi método es diferente por una razón clara: <span className="text-brand-black font-bold">Yo me formé con metodologías que NO existen en español.</span>
            </p>

            <ul className="space-y-4 my-8">
              {[
                "Me certifiqué en un coaching innovador y disruptivo creado fuera del mercado latino.",
                "Estudié finanzas bajo un sistema estructurado que solo se enseña en Estados Unidos.",
                "Aprendí inversiones desde el estándar del mercado americano, no desde la improvisación."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <span className="material-symbols-outlined text-brand-green font-black mt-1">check_circle</span>
                  <span className="text-brand-black/70 group-hover:text-brand-black transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Y luego hice algo que muy pocas personas hacen… <span className="italic">Lo adapté estratégicamente para la mujer latina en USA, Canadá y Latinoamérica.</span>
            </p>

            <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-xl my-10">
              <p className="font-black text-brand-black uppercase tracking-tighter text-sm mb-4">No es traducción. No es teoría reciclada.</p>
              <p className="text-brand-fuchsia font-serif italic text-2xl">
                Es conocimiento probado, aplicado y simplificado.
              </p>
            </div>

            <p className="text-xl">
              Lo que a mí me tomó años y miles de dólares aprender en inglés, hoy tú lo tienes organizado en un <span className="text-brand-black font-black">paso a paso claro y estratégico.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
