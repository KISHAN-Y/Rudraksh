import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '780+', label: 'Happy Patients' },
    { number: '560+', label: 'Teeth Implanted' },
    { number: '340+', label: 'Perfect Reviews' }
  ];

  return (
    <section className="py-24 bg-brand-medium relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Details */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
              Rudreksh Dental<br />
              Statistics
            </h2>
            <p className="text-white/60 font-body text-sm md:text-base max-w-md leading-relaxed">
              Our record speaks for itself. Over the years, we have achieved a high treatment success rate, bringing confidence back to hundreds of satisfied smiles.
            </p>
          </div>

          {/* Right: Numbers Display */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left sm:text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 border-l-2 sm:border-l-0 sm:border-t border-white/10 pl-6 sm:pl-0 sm:pt-6">
                <div className="text-4xl lg:text-5xl font-black font-heading text-brand-accent">
                  {stat.number}
                </div>
                <div className="text-white/80 font-heading font-medium text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
