import React from 'react';
import { Icon } from './Icon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-heft-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
                 <div className="w-8 h-8 bg-heft-red rounded-md flex items-center justify-center mr-2">
                    <Icon name="shield" className="text-white" size={20} />
                 </div>
                 <span className="font-bold text-xl tracking-tight">HEFT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional security solutions for homes and businesses. Protecting what matters most since 2010.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#surveillance" className="hover:text-heft-red">Surveillance Cameras</a></li>
              <li><a href="#fire" className="hover:text-heft-red">Fire Detection</a></li>
              <li><a href="#intrusion" className="hover:text-heft-red">Intrusion Systems</a></li>
              <li><a href="#access" className="hover:text-heft-red">Access Control</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-heft-red">About Us</a></li>
              <li><a href="#" className="hover:text-heft-red">Careers</a></li>
              <li><a href="#" className="hover:text-heft-red">Blog</a></li>
              <li><a href="#" className="hover:text-heft-red">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center"><Icon name="phone" size={14} className="mr-2"/> 0800 123 456</li>
              <li>support@heft-security.com</li>
              <li>123 Security Blvd,<br/>Paris, France</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Heft Security Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};