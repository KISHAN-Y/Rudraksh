import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Activity, Syringe } from 'lucide-react';
import MosaicGrid from '../common/MosaicGrid';

const SERVICES_DATA = [
  {
    title: 'Teeth Whitening',
    description: 'Professional bleaching treatments to safely remove stains and brighten your smile by several shades.',
    icon: Sparkles,
  },
  {
    title: 'Teeth Checkup (RCT)',
    description: 'Painless removal of infected pulp to save your natural tooth, completed using rotary endodontics.',
    icon: Activity,
  },
  {
    title: 'Teeth Implants',
    description: 'Permanent, natural-looking tooth replacements that restore both function and aesthetics to your smile.',
    icon: Syringe,
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Heading & Dark Graphic Placeholder */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-[0.2em]">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-dark leading-tight">
                Dental Services for<br />
                Your Smile
              </h2>
              <p className="text-text-secondary leading-relaxed font-body max-w-md">
                We offer a wide range of specialized oral care treatments to keep your smile healthy, functional, and aesthetically shining.
              </p>
            </div>

            {/* Dark Grid Graphic Box with Mosaic decoration */}
            <div className="relative inline-block mt-4">
              <div className="w-[280px] h-[180px] bg-brand-dark border border-white/5 shadow-lg relative z-10 flex items-center justify-center">
                <div className="text-center p-6 select-none">
                  <div className="w-10 h-1 bg-brand-accent mx-auto mb-4" />
                  <span className="text-[10px] tracking-[0.3em] font-heading font-bold text-white/40 uppercase">
                    Comprehensive Care
                  </span>
                </div>
              </div>

              {/* Mosaic sticking out bottom-left */}
              <div className="absolute -bottom-6 -left-6 z-20">
                <MosaicGrid preset="services-corner" width="w-16" height="h-16" />
              </div>
            </div>
          </div>

          {/* Right Column: Services List & Button */}
          <div className="space-y-10">
            <div className="space-y-8">
              {SERVICES_DATA.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="flex gap-6 items-start group">
                    {/* Circle icon frame */}
                    <div className="w-14 h-14 rounded-full bg-brand-dark text-brand-accent flex items-center justify-center shrink-0 shadow-md group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    {/* Content */}
                    <div className="space-y-1.5 pt-1.5">
                      <h4 className="font-heading font-bold text-brand-dark text-lg group-hover:text-brand-accent-alt transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed font-body">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/services">
                <button className="bg-brand-dark hover:bg-brand-accent hover:text-brand-dark text-white font-heading font-bold text-xs uppercase tracking-wider px-8 py-4 transition-all duration-300 cursor-pointer rounded-sm border border-brand-accent/10">
                  More Services
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
