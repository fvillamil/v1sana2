
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const GeminiCoach: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: 'Hola, mujer poderosa. ❤️\nSoy tu coach de abundancia.\n¿Cuál es el bloqueo financiero que hoy no te deja dormir?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Invisible Security States
  const [honeypot, setHoneypot] = useState('');
  const loadTime = useRef(Date.now());
  const interactionCount = useRef(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const logMessage = async (role: string, message: string) => {
    try {
      await fetch('/api/log-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role,
          message,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Failed to log message:', error);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // 1. Honeypot check: if a bot filled this hidden field, silently reject
    if (honeypot) {
      console.warn("Bot detected via honeypot");
      setInput('');
      return;
    }

    // 2. Time-to-fill check: Humans take at least a couple of seconds to read and type
    const timeElapsed = Date.now() - loadTime.current;
    if (timeElapsed < 2000) {
      console.warn("Bot detected via speed check");
      setInput('');
      return;
    }

    // 3. Interaction check: Ensure the user actually typed something
    if (interactionCount.current === 0 && input.length > 0) {
      console.warn("Bot detected via lack of interaction events");
      setInput('');
      return;
    }

    setIsLoading(true);

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Log user message
    logMessage('user', userMsg.text);

    const response = await getGeminiResponse(input, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    setIsLoading(false);

    // Log model message
    logMessage('model', response.text);
  };

  return (
    <section className="py-24 px-6 bg-[#0a0a0f] relative overflow-hidden">
      {/* Glow effect behind the chat to make it pop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-brand-fuchsia/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        {/* Header Text */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 bg-brand-fuchsia/10 px-4 py-1.5 rounded-full border border-brand-fuchsia/20">
            <span className="material-symbols-outlined text-brand-fuchsia text-sm">face_3</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-fuchsia">Tu espacio de transformación personal</span>
          </div>
          
          <h2 className="text-white font-sans font-medium text-2xl md:text-3xl mb-1 tracking-tight opacity-80">
            Escucha a tu
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-widest mb-8 drop-shadow-[0_10px_30px_rgba(255,0,255,0.3)]">
            CONCIENCIA MILLONARIA<span className="text-2xl align-top">™</span>
          </h1>
        </div>

        {/* Light Chat Container - HIGHLIGHTED against dark background */}
        <div className="w-full max-w-4xl relative">
          <div className="bg-slate-50 border border-white rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-15px_rgba(255,0,255,0.15),0_20px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col h-[700px]">
            
            {/* Chat Header Area - Light & Elegant */}
            <div className="bg-white px-8 py-6 border-b border-brand-fuchsia/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-3.5 h-3.5 bg-brand-green rounded-full absolute bottom-0 right-0 border-2 border-white z-10"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-fuchsia to-brand-yellow p-[2px] shadow-lg">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-brand-fuchsia text-2xl">face_3</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[13px] font-black uppercase tracking-[0.1em] text-brand-black">Coach de Abundancia</p>
                  <p className="text-[10px] font-bold text-brand-fuchsia flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-fuchsia animate-pulse"></span>
                    Sesión Privada Exclusiva
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <span className="material-symbols-outlined text-brand-black/20 hover:text-brand-fuchsia cursor-pointer transition-colors">history</span>
                <span className="material-symbols-outlined text-brand-black/20 hover:text-brand-fuchsia cursor-pointer transition-colors">more_horiz</span>
              </div>
            </div>

            {/* Messages Area - Light theme */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10 scroll-smooth bg-[#fdfbff]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start items-start gap-4 md:gap-6'}`}>
                  {msg.role === 'model' && (
                    <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-brand-fuchsia/20 p-1 shadow-md bg-white overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" 
                        alt="Coach"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className={`relative max-w-[85%] md:max-w-[75%] p-6 md:p-8 rounded-[2.5rem] transition-all duration-300 ${
                    msg.role === 'user' 
                      ? 'bg-brand-fuchsia text-white rounded-tr-none shadow-xl shadow-brand-fuchsia/20 text-right' 
                      : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-lg whitespace-pre-wrap leading-relaxed'
                  }`}>
                    {msg.role === 'model' && (
                       <div className="flex items-center gap-2 mb-3">
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-fuchsia">Conciencia Millonaria</span>
                         <span className="w-1 h-1 rounded-full bg-brand-fuchsia/30"></span>
                         <span className="text-[10px] font-medium text-slate-400">Ahora</span>
                       </div>
                    )}
                    <p className="text-lg md:text-xl font-medium tracking-tight leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start items-start gap-4 animate-in fade-in slide-in-from-bottom-2">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-brand-fuchsia animate-spin">sync</span>
                  </div>
                  <div className="bg-white border border-slate-100 p-6 rounded-[2rem] rounded-tl-none shadow-md">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-brand-fuchsia/40 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-brand-fuchsia/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 bg-brand-fuchsia/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area - Clean White */}
            <div className="p-8 md:p-10 bg-white border-t border-slate-100">
              {/* Honeypot field - hidden from humans, bots will fill it */}
              <input 
                type="text" 
                name="contact_me_by_fax_only" 
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }} 
                tabIndex={-1} 
                autoComplete="off" 
              />
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    interactionCount.current += 1;
                  }}
                  onKeyDown={(e) => {
                    interactionCount.current += 1;
                    e.key === 'Enter' && handleSend();
                  }}
                  placeholder="Háblame de tu relación con el dinero..."
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-full px-10 py-6 text-slate-800 focus:outline-none focus:border-brand-fuchsia/30 focus:bg-white transition-all placeholder:text-slate-300 pr-32 text-lg md:text-xl shadow-inner"
                />
                <div className="absolute right-4 flex items-center gap-3">
                  <button 
                    onClick={handleSend}
                    disabled={isLoading}
                    className="bg-brand-fuchsia text-white p-5 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-brand-fuchsia/30 active:scale-95 transition-all flex items-center justify-center disabled:opacity-50 disabled:scale-100"
                  >
                    <span className="material-symbols-outlined text-2xl font-bold">send</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center gap-8 mt-6">
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.1em] flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-green text-sm">verified_user</span>
                  Conexión Encriptada
                </p>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.1em] flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-fuchsia text-sm">favorite</span>
                  De Mujer a Mujer
                </p>
              </div>
            </div>
          </div>
          
          {/* Badge under chat window */}
          <div className="mt-10 flex justify-center opacity-30">
             <div className="flex items-center gap-3 border border-white/20 px-6 py-2 rounded-full">
               <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Protocolo Abundancia v2.5</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiCoach;
