import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Cog, Wrench, ChevronRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Turnkey Products',
      description: 'Custom engineered animatronics and show action equipment, from blank page to installation.',
      icon: Bot,
      image: '/images/services/turnkey.jpg'
    },
    {
      title: 'Engineering Support',
      description: 'Engineering expertise in design, analysis, prototyping, and testing.',
      icon: Cog,
      image: '/images/services/engineering.jpg'
    },
    {
      title: 'Redesign & Rebuilds',
      description: 'Innovative redesigns and rebuilds to enhance existing systems.',
      icon: Wrench,
      image: '/images/services/redesign.jpg'
    }
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bringing imagination to life through cutting-edge animatronics and engineering solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="opacity-0"
              style={{ animation: `fadeInUp 0.8s ease-out forwards ${index * 0.2}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.6s' }}>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all hover:scale-105"
          >
            Request a Quote
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
