import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TEAM = [
  {
    name: 'Dr. Malkesh Pankhaniya',
    specialty: 'BDS, Specialist Dentist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Dr. Christopher',
    specialty: 'DDS, Implantologist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Dr. Sophia',
    specialty: 'BDS, Cosmetic Specialist',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=500&q=80'
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Accent blocks in the grid */}
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-brand-accent/5 rounded-none pointer-events-none border-l border-t border-white/5" />
      <div className="absolute left-10 top-20 w-4 h-4 bg-brand-accent/20 rounded-sm" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-[0.2em] block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Meet Our Expert Dental Team
          </h2>
          <p className="text-white/60 font-body text-sm md:text-base leading-relaxed">
            Our highly qualified medical specialists use cutting-edge diagnostic tools and treatments to deliver exceptional results.
          </p>
        </div>

        {/* Grid of Team Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((doctor, idx) => (
            <div key={idx} className="group space-y-0">
              
              {/* Photo Container */}
              <div className="relative aspect-[4/5] bg-brand-medium border border-white/10 overflow-hidden relative flex flex-col justify-end">
                {/* Dentist Image */}
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 pointer-events-none grayscale brightness-90 group-hover:grayscale-0"
                />

                {/* Sticking-out accent block in bottom-left corner */}
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-brand-accent z-20 transition-transform duration-300 group-hover:scale-110" />

                {/* Mock slider navigation arrows inside card corners */}
                <div className="absolute bottom-3 right-3 flex gap-2 z-20">
                  <button className="w-7 h-7 bg-brand-dark/80 hover:bg-brand-accent hover:text-brand-dark text-white border border-white/10 flex items-center justify-center transition-colors rounded-none cursor-pointer">
                    <ChevronLeft size={14} />
                  </button>
                  <button className="w-7 h-7 bg-brand-dark/80 hover:bg-brand-accent hover:text-brand-dark text-white border border-white/10 flex items-center justify-center transition-colors rounded-none cursor-pointer">
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* Name Details Box */}
              <div className="bg-white p-6 shadow-lg border-x border-b border-white/15">
                <h4 className="font-heading font-black text-brand-dark text-lg leading-tight uppercase tracking-tight">
                  {doctor.name}
                </h4>
                <p className="text-xs text-text-secondary font-semibold tracking-wider mt-1.5 font-heading">
                  {doctor.specialty}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
