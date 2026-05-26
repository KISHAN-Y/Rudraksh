import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import AnimatedCard from '../common/AnimatedCard';
import Button from '../common/Button';
import { services } from '../../data/services';

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container overflow-hidden">
        <SectionHeading 
          title="Comprehensive Care" 
          subtitle="Our Treatments" 
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service, idx) => {
            const Icon = service.icon;
            return (
              <AnimatedCard key={service.id} delay={idx * 0.1} className="group flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {service.description.substring(0, 80)}...
                </p>
                
                <Link 
                  to={`/services#${service.id}`} 
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-primary-dark transition-colors mt-auto"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </AnimatedCard>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="secondary">View All Treatments</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
