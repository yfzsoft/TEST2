import React from 'react';
import { Service } from '../types';
import { Icon } from './Icon';

const servicesData: Service[] = [
  {
    id: 'surveillance',
    title: 'Surveillance Cameras',
    description: 'High-definition IP cameras with night vision and AI analytics to detect people and vehicles.',
    iconName: 'camera',
    imageUrl: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: 'fire',
    title: 'Fire Detection',
    description: 'Smart smoke and heat detectors connected directly to emergency services for rapid response.',
    iconName: 'fire',
    imageUrl: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: 'intrusion',
    title: 'Intrusion Systems',
    description: 'Perimeter protection with shock sensors, motion detectors, and glass-break technology.',
    iconName: 'shield',
    imageUrl: 'https://picsum.photos/600/400?random=3'
  },
  {
    id: 'access',
    title: 'Access Control',
    description: 'Keyless entry, biometrics, and intercom systems to manage who enters your property.',
    iconName: 'lock',
    imageUrl: 'https://picsum.photos/600/400?random=4'
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heft-red font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-heft-dark">Comprehensive Security Ecosystem</h3>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            We don't just sell products; we design integrated systems that communicate with each other to keep you safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100"
            >
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-heft-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                 <img 
                   src={service.imageUrl} 
                   alt={service.title} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                 />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl z-20 shadow-sm">
                    <Icon name={service.iconName} className="text-heft-red" size={24} />
                 </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-heft-dark mb-2 group-hover:text-heft-red transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                   <span className="text-heft-red font-medium text-sm flex items-center cursor-pointer hover:underline">
                      Learn more <Icon name="arrowRight" className="ml-1" size={14} />
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};