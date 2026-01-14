import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { QuoteModal } from './components/QuoteModal';
import { Icon } from './components/Icon';

const TrustSection: React.FC = () => (
  <section className="bg-white py-12 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-gray-400 font-semibold uppercase tracking-widest text-xs mb-8">Trusted by industry leaders</p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
         {/* Placeholder logos */}
         <div className="font-bold text-2xl text-gray-600 flex items-center gap-2"><Icon name="shield" size={24}/> SecureCorp</div>
         <div className="font-bold text-2xl text-gray-600 flex items-center gap-2"><Icon name="lock" size={24}/> HomeSafe</div>
         <div className="font-bold text-2xl text-gray-600 flex items-center gap-2"><Icon name="camera" size={24}/> VisionTech</div>
         <div className="font-bold text-2xl text-gray-600 flex items-center gap-2"><Icon name="fire" size={24}/> PyroGuard</div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <main>
        <Hero onOpenQuote={() => setIsQuoteModalOpen(true)} />
        <TrustSection />
        <Services />
        
        {/* CTA Banner */}
        <section className="bg-heft-red py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to secure your property?
             </h2>
             <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                Get a customized security plan designed by experts. Installation in as little as 24 hours.
             </p>
             <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-heft-red hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-transform hover:scale-105"
             >
                Get Started Now
             </button>
          </div>
        </section>
      </main>

      <Footer />
      
      <ChatAssistant />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default App;