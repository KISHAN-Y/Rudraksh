import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../common/FadeInSection';

const AboutDoctor = () => {
  return (
    <section className="py-24 bg-page-bg relative overflow-hidden">
      
      {/* ── Responsive SVG Tooth-Shaped ClipPath ── */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <clipPath id="tooth-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0.12 C 0.38,0.12 0.28,0.05 0.18,0.05 C 0.08,0.05 0,0.15 0,0.35 C 0,0.65 0.15,0.80 0.18,0.95 C 0.19,0.99 0.22,0.99 0.24,0.95 C 0.28,0.80 0.38,0.65 0.5,0.65 C 0.62,0.65 0.72,0.80 0.76,0.95 C 0.78,0.99 0.81,0.99 0.82,0.95 C 0.85,0.80 1,0.65 1,0.35 C 1,0.15 0.92,0.05 0.82,0.05 C 0.72,0.05 0.62,0.12 0.5,0.12 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* ── Left Column: Graphics & Custom Tooth Frames ── */}
          <div className="lg:col-span-6 relative flex justify-center">
            <FadeInSection className="relative w-full max-w-[440px] aspect-[1/1.05]">
              
              {/* Sparkles (Stars) - Top Left */}
              <div className="absolute top-2 left-[-10px] z-20 flex flex-col gap-3">
                {/* Large Sparkle */}
                <svg className="w-10 h-10 text-primary fill-current drop-shadow-[0_4px_6px_rgba(90,172,224,0.3)] animate-pulse-subtle" viewBox="0 0 24 24">
                  <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2Z" />
                </svg>
                {/* Small Sparkle */}
                <svg className="w-5 h-5 text-[#2F87C8] fill-current ml-6 drop-shadow-sm animate-pulse-subtle" style={{ animationDelay: '0.4s' }} viewBox="0 0 24 24">
                  <path d="M10 0L12.3 7.7L20 10L12.3 12.3L10 20L7.7 12.3L0 10L7.7 7.7Z" />
                </svg>
              </div>

              {/* Main Image in Tooth Shape ClipPath */}
              <div 
                className="w-[85%] aspect-[1/1.1] ml-auto overflow-hidden bg-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl"
                style={{ clipPath: 'url(#tooth-clip)' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Malkesh Pankhaniya" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Secondary Patient Image Overlay in Tooth Shape ClipPath */}
              <div className="absolute bottom-[-15px] left-0 w-[42%] aspect-[1/1.1] rounded-2xl bg-white p-2 shadow-2xl border border-border z-10">
                <div 
                  className="w-full h-full overflow-hidden bg-slate-200"
                  style={{ clipPath: 'url(#tooth-clip)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1598256989800-fea5ea23d248?auto=format&fit=crop&w=500&q=80" 
                    alt="Patient Treatment" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Rotating Contact Badge - Bottom Right */}
              <div className="absolute bottom-4 right-[-15px] bg-white rounded-full p-1.5 shadow-2xl border border-divider z-20 hover:scale-105 transition-transform duration-300">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  
                  {/* Rotating text Path */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
                    <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                    <text className="fill-primary-dark text-[8.5px] font-heading font-black uppercase tracking-[0.16em]">
                      <textPath href="#badgePath">
                        • CONTACT • CONSULT • BOOK NOW
                      </textPath>
                    </text>
                  </svg>
                  
                  {/* Center arrow link button */}
                  <Link 
                    to="/contact" 
                    className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all duration-300 shadow-md hover:scale-105 z-10"
                    aria-label="Book a consultation"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </Link>
                </div>
              </div>

            </FadeInSection>
          </div>

          {/* ── Right Column: Text & Features ── */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs md:text-sm font-heading font-bold uppercase tracking-[0.2em] text-primary-mid block">
              About The Doctor
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-text-primary leading-[1.15] tracking-tight">
              10+ Years of Expertise<br />
              in <span className="text-primary-dark">Dental Care</span>
            </h2>
            
            <p className="text-text-secondary leading-relaxed text-base md:text-lg">
              Dr. Malkesh Pankhaniya BDS is the dedicated founder of Rudreksh Dental Clinic, 
              where personalized care meets state-of-the-art diagnostics. He is committed 
              to providing comfortable, painless treatments—specializing in rotary root canals, 
              implants, and smile designing—making dentist visits stress-free for everyone.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "Premium Care Tailored to Your Smile",
                "Painless Single-Sitting RCTs & Modern Implants",
                "Strict International Sterilization Protocols"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="font-semibold text-text-primary text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link to="/about">
                <button className="bg-primary hover:bg-primary-dark text-white font-heading font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
