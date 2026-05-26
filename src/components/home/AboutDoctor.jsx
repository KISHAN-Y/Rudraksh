import React from 'react';
import { UserCheck, ShieldCheck } from 'lucide-react';
import MosaicGrid from '../common/MosaicGrid';

const AboutDoctor = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image Block with Mosaic corner decoration */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Photo Box container */}
              <div className="w-[300px] h-[360px] md:w-[340px] md:h-[400px] bg-brand-dark relative z-10 overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Malkesh Pankhaniya" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Sticking-out mosaic pattern in the bottom-left corner of the image */}
              <div className="absolute -bottom-8 -left-8 z-20">
                <MosaicGrid preset="about-corner" width="w-24" height="h-24" />
              </div>
              
              {/* Subtle background wireframe box */}
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-brand-accent/20 -z-0 rounded-sm"></div>
            </div>
          </div>
          
          {/* Right Column: Text & Features */}
          <div className="space-y-8">
            
            {/* Subheader */}
            <div className="space-y-2">
              <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-[0.2em]">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-dark leading-tight">
                Your Trusted Partner<br />
                For Dental Health
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-text-secondary leading-relaxed font-body text-base md:text-lg">
              At Rudreksh Dental Clinic, founded by <span className="font-semibold text-brand-dark">Dr. Malkesh Pankhaniya BDS</span>, we combine global clinical standards with a gentle, patient-first approach. We understand dental anxiety, which is why we focus on advanced, pain-free techniques to ensure you remain completely relaxed.
            </p>
            
            {/* Two Features (Experienced Dentist & Affordable Pricing) */}
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-sm bg-brand-dark text-brand-accent flex items-center justify-center shrink-0 shadow-md">
                  <UserCheck size={22} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-brand-dark text-base">Experienced Dentist</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Over a decade of clinical mastery in advanced rotary endodontics and smile design.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-sm bg-brand-dark text-brand-accent flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck size={22} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-brand-dark text-base">Affordable Pricing</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Transparent rates and structured treatment options with no hidden overhead costs.
                  </p>
                </div>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
