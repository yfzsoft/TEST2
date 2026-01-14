import React from 'react';
import { Icon } from './Icon';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <div className="relative bg-heft-dark pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920" 
          alt="Secure home background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-heft-dark via-heft-dark/90 to-transparent z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-3/5">
          <div className="inline-flex items-center space-x-2 bg-heft-blue/10 border border-heft-blue/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-heft-blue animate-pulse"></span>
             <span className="text-heft-blue font-semibold text-sm tracking-wide uppercase">24/7 Professional Monitoring</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Complete Security for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Peace of Mind.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            From advanced AI surveillance to rapid-response fire detection, Heft delivers custom security ecosystems for homes and businesses. 
            Protect what matters most today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onOpenQuote}
              className="flex items-center justify-center bg-heft-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Calculate Your Quote
              <Icon name="arrowRight" className="ml-2" size={20} />
            </button>
            <button className="flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-heft-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              View Our Services
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-gray-400 text-sm font-medium">
             <div className="flex items-center gap-2">
                <Icon name="check" className="text-green-500" size={16} />
                <span>Certified Installers</span>
             </div>
             <div className="flex items-center gap-2">
                <Icon name="check" className="text-green-500" size={16} />
                <span>Modern Technology</span>
             </div>
             <div className="flex items-center gap-2">
                <Icon name="check" className="text-green-500" size={16} />
                <span>Lifetime Warranty</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};