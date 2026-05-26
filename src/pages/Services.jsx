import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedCard from '../components/common/AnimatedCard';
import { services } from '../data/services';

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="bg-page-bg pb-24 font-body">
      <div className="bg-primary/5 py-20 px-4 border-b border-border">
        <div className="container max-w-4xl text-center">
          <SectionHeading 
            title="Our Treatments" 
            subtitle="Comprehensive Care"
            className="mb-8"
          />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            We provide a wide range of specialized dental treatments using state-of-the-art 
            technology to ensure painless procedures and stunning results. See the impact of our work.
          </p>
        </div>
      </div>

      <div className="container mt-16 space-y-12 max-w-6xl">
        {services.map((service, idx) => {
          const Icon = service.icon;
          // Alternate image left/right
          const isEven = idx % 2 === 0;
          
          return (
            <AnimatedCard 
              key={service.id} 
              delay={0}
              className="!p-0 overflow-hidden group scroll-mt-32"
            >
              <div id={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-2/5 aspect-[4/3] lg:aspect-auto relative overflow-hidden shrink-0">
                  <img 
                    src={service.patientImage} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur text-primary flex items-center justify-center shadow-lg">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium opacity-90 drop-shadow-md">
                    Clinical Case Representative
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex-grow p-6 lg:p-10 flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="bg-surface-alt rounded-2xl p-6 border border-divider">
                    <h4 className="font-bold text-sm text-text-primary uppercase tracking-wide mb-4 flex items-center gap-2">
                      <span className="w-6 h-[2px] bg-accent inline-block"></span>
                      Treatment Details
                    </h4>
                    
                    <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6 mb-6">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm font-medium text-text-secondary">
                          <span className="text-primary mt-0.5 shrink-0">✔</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Bar */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-border mt-auto">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full shrink-0 w-full sm:w-auto justify-center">
                      <Clock size={16} />
                      <span className="text-sm font-bold">Est. Duration: {service.duration}</span>
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="text-sm font-bold text-white bg-primary hover:bg-primary-dark transition-colors px-6 py-2.5 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto sm:ml-auto shadow-md"
                    >
                      Consult Now
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

              </div>
            </AnimatedCard>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
