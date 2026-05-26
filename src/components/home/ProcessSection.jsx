import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarRange, HeartHandshake, Smile } from 'lucide-react';
import MosaicGrid from '../common/MosaicGrid';

const STEPS = [
  {
    title: 'Make Appointment',
    desc: 'Select a convenient slot via our online system or call our clinic directly.',
    icon: CalendarRange
  },
  {
    title: 'Expect Dental Care',
    desc: 'Undergo gentle diagnostics and pain-free, specialized treatment with Dr. Malkesh.',
    icon: HeartHandshake
  },
  {
    title: 'Radiate Confidence',
    desc: 'Walk out with restored aesthetics, full oral function, and a brilliant smile.',
    icon: Smile
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Grid line overlay matching the theme */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Decorative sticking-out mosaic block in the bottom-right corner of the section container */}
      <div className="absolute bottom-0 right-0 z-10">
        <MosaicGrid preset="cta-corner" width="w-24" height="h-24" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-[0.2em] block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-dark leading-tight tracking-tight">
            Your Journey to a Healthy<br />
            Smile Starts Here
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-5 group">
                
                {/* Circle Icon Container */}
                <div className="w-16 h-16 rounded-full bg-brand-dark text-brand-accent flex items-center justify-center shadow-lg group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 transform group-hover:scale-105">
                  <Icon size={26} />
                </div>

                {/* Step Metadata */}
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-brand-dark text-lg group-hover:text-brand-accent-alt transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-body max-w-xs">
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center relative z-20">
          <Link to="/contact">
            <button className="bg-[#0e2c2c] border-2 border-brand-accent text-white font-heading font-black text-xs uppercase tracking-widest px-10 py-5 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 shadow-md cursor-pointer rounded-sm">
              Book Appointment
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
