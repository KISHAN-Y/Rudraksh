import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import MosaicGrid from '../common/MosaicGrid';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] w-full bg-brand-dark overflow-hidden flex flex-col justify-center pt-36 pb-20">
      
      {/* ── Grid/Accent Lines Overlay ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* ── Soft Glow Backdrop ── */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-brand-accent-alt/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Subheader */}
            <div className="inline-block">
              <span className="text-brand-accent font-heading font-bold text-xs md:text-sm tracking-[0.25em] uppercase">
                Rudreksh Dental
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white leading-[1.1] tracking-tight">
              Your Smile,<br />
              Our Priority.
            </h1>

            {/* Description */}
            <p className="text-white/60 text-base md:text-lg max-w-lg leading-relaxed font-body">
              We provide high-quality treatment that is safe, gentle, and effective for our patients' oral health. Advanced dental care tailored to your comfort.
            </p>

            {/* Button */}
            <div className="pt-4">
              <Link to="/contact">
                <button className="flex items-center gap-3 bg-[#0e2c2c] border-2 border-brand-accent text-white font-heading font-black text-sm uppercase tracking-widest px-10 py-5 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 shadow-[0_0_20px_rgba(74,191,170,0.15)] cursor-pointer rounded-sm">
                  <Calendar size={18} />
                  Book Appointment
                </button>
              </Link>
            </div>

          </div>

          {/* Right Column (Mosaic Graphics Decoration) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center h-[300px] lg:h-[400px]">
            {/* Interactive Mosaic blocks as in mockup */}
            <div className="relative">
              {/* Outer Decorative square boundary */}
              <div className="w-[280px] h-[280px] border border-white/5 relative flex items-center justify-center bg-brand-medium/20 backdrop-blur-sm">
                
                {/* Floating graphic elements inside */}
                <div className="w-[180px] h-[180px] bg-brand-dark border border-white/10 flex flex-col justify-between p-6">
                  <div className="w-8 h-8 rounded-sm bg-brand-accent/20 border border-brand-accent/40" />
                  <div className="font-heading font-bold text-lg text-white leading-tight">
                    Premium Dental<br />
                    Aesthetics
                  </div>
                </div>

                {/* Sticking-out Mosaic grid block on bottom right corner */}
                <div className="absolute -bottom-8 -right-8">
                  <MosaicGrid preset="hero-corner" width="w-28" height="h-28" />
                </div>

                {/* Sticking-out mini mosaic block on top left corner */}
                <div className="absolute -top-4 -left-4">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 w-12 h-12">
                    <div className="bg-brand-accent-alt rounded-sm" />
                    <div className="bg-transparent" />
                    <div className="bg-transparent" />
                    <div className="bg-brand-medium rounded-sm" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
