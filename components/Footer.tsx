
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 text-center border-t border-white/5 bg-brand-black">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-1.5 h-6 bg-brand-fuchsia"></div>
          <span className="font-black text-xs uppercase tracking-tighter text-left leading-none text-white">Sana Tu <br/><span className="text-brand-fuchsia">Abundancia</span></span>
        </div>
        <p className="text-sm font-serif italic text-white mb-10 leading-relaxed px-4">
          "P.D. Esto no es solo por ti. Es por el legado que estás construyendo. Muéstrales que una mujer decidida no solo gana dinero, sino que domina su destino y sana su abundancia."
        </p>
        <div className="space-y-8 opacity-40">
          <p className="text-[9px] text-white uppercase tracking-[0.3em] leading-relaxed">
            © 2026 Sana Tu Abundancia.<br/>Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-6 text-[9px] font-black uppercase text-white">
            <a className="hover:text-brand-fuchsia" href="#">Privacidad</a>
            <a className="hover:text-brand-fuchsia" href="#">Términos</a>
            <a className="hover:text-brand-fuchsia" href="#">Soporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
