
import React from 'react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: 'money_off',
      title: 'Ganas $80K+ pero...',
      description: 'Tu cuenta bancaria no refleja tus 60 horas de trabajo semanales.',
      accent: 'brand-fuchsia'
    },
    {
      icon: 'shopping_cart_checkout',
      title: 'Cada compra viene con culpa',
      description: 'Te castigas por disfrutar de lo que tú misma has ganado.',
      accent: 'brand-yellow'
    },
    {
      icon: 'family_restroom',
      title: 'El "Fondo de Rescate" Familiar',
      description: 'Eres el cajero automático de todos, menos el tuyo.',
      accent: 'brand-fuchsia'
    }
  ];

  return (
    <section className="bg-brand-dark py-28 px-6 border-y border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-serif italic text-brand-black text-center mb-20 leading-tight">
          ¿Te Reconoces? <br/>
          <span className="text-brand-fuchsia drop-shadow-sm font-black not-italic block mt-4">Ganas como experta</span> <br/>
          pero te sientes en quiebra
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div 
              key={i} 
              className="card-dynamic bg-white p-10 rounded-[3rem] border border-black/5 shadow-2xl shadow-black/5 flex flex-col items-center text-center group"
            >
              <div className={`p-5 rounded-[2rem] mb-8 bg-${p.accent}/10 text-${p.accent} group-hover:bg-brand-black group-hover:text-white transition-all duration-500 transform group-hover:scale-110`}>
                <span className="material-symbols-outlined text-5xl font-bold">{p.icon}</span>
              </div>
              <div>
                <h3 className="font-black text-2xl mb-4 italic text-brand-black">{p.title}</h3>
                <p className="text-lg text-brand-black/60 leading-relaxed font-medium">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
