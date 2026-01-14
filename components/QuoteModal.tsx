import React, { useState } from 'react';
import { Icon } from './Icon';
import { SecurityType, LeadForm } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<LeadForm>({
    name: '',
    phone: '',
    email: '',
    type: SecurityType.HOME,
    interest: 'General Inquiry'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      alert("Request sent! An expert will call you shortly.");
      onClose();
      setStep(1);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-fade-in-up">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <Icon name="close" size={24} />
        </button>

        <div className="bg-heft-blue p-6 text-white text-center">
          <h2 className="text-2xl font-bold">Get Your Free Quote</h2>
          <p className="text-blue-100 text-sm mt-1">Takes less than 1 minute</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <p className="text-gray-700 font-medium text-lg text-center mb-6">What are you looking to protect?</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                        setFormData({...formData, type: SecurityType.HOME});
                        setStep(2);
                    }}
                    className="p-6 border-2 border-gray-100 hover:border-heft-blue rounded-xl flex flex-col items-center gap-3 transition-all hover:bg-blue-50 group"
                  >
                    <div className="w-12 h-12 bg-gray-100 group-hover:bg-white rounded-full flex items-center justify-center">
                        <Icon name="lock" className="text-gray-600 group-hover:text-heft-blue" />
                    </div>
                    <span className="font-bold text-gray-700 group-hover:text-heft-blue">Home</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                        setFormData({...formData, type: SecurityType.BUSINESS});
                        setStep(2);
                    }}
                    className="p-6 border-2 border-gray-100 hover:border-heft-blue rounded-xl flex flex-col items-center gap-3 transition-all hover:bg-blue-50 group"
                  >
                     <div className="w-12 h-12 bg-gray-100 group-hover:bg-white rounded-full flex items-center justify-center">
                        <Icon name="shield" className="text-gray-600 group-hover:text-heft-blue" />
                    </div>
                    <span className="font-bold text-gray-700 group-hover:text-heft-blue">Business</span>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                 <p className="text-gray-700 font-medium text-center mb-4">How can we reach you?</p>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heft-blue focus:border-transparent outline-none"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heft-blue focus:border-transparent outline-none"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heft-blue focus:border-transparent outline-none"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div className="pt-4 flex gap-3">
                    <button 
                        type="button" 
                        onClick={() => setStep(1)}
                        className="w-1/3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-bold hover:bg-gray-200"
                    >
                        Back
                    </button>
                    <button 
                        type="submit" 
                        className="w-2/3 px-4 py-3 bg-heft-blue text-white rounded-lg font-bold hover:bg-blue-700 shadow-lg"
                    >
                        See My Quote
                    </button>
                </div>
                <p className="text-xs text-gray-400 text-center mt-2">
                    By clicking above, you agree to be contacted by Heft security experts.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};