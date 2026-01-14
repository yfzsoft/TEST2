import React, { useState } from 'react';
import { Icon } from './Icon';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Surveillance', href: '#surveillance' },
    { name: 'Fire Safety', href: '#fire' },
    { name: 'Intrusion', href: '#intrusion' },
    { name: 'Access Control', href: '#access' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <div className="w-10 h-10 bg-heft-red rounded-lg flex items-center justify-center mr-2">
                <Icon name="shield" className="text-white" size={24} />
             </div>
             <span className="font-bold text-2xl tracking-tight text-heft-dark">HEFT</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-heft-red font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+123456789" 
              className="flex items-center text-heft-dark font-bold hover:text-heft-red"
            >
              <Icon name="phone" className="mr-2" size={18} />
              0800 123 456
            </a>
            <button
              onClick={onOpenQuote}
              className="bg-heft-red text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition shadow-lg transform hover:scale-105"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-heft-red focus:outline-none"
            >
              <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-heft-red hover:bg-red-50"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3">
              <button
                onClick={() => {
                  onOpenQuote();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-heft-red text-white px-4 py-3 rounded-lg font-bold shadow"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};