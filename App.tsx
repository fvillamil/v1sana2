
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import GeminiCoach from './components/GeminiCoach';
import Method from './components/Method';
import Deliverables from './components/Deliverables';
import Testimonials from './components/Testimonials';
import Mentor from './components/Mentor';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-fuchsia selection:text-white">
      <Header />
      <main className="pb-24">
        <Hero />
        <Problems />
        <GeminiCoach />
        <Method />
        <Deliverables />
        <Testimonials />
        <Mentor />
        <Pricing />
        <Footer />
      </main>
      <StickyCTA />
    </div>
  );
}

export default App;
