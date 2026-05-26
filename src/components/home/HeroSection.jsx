import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, ChevronDown, Syringe, Activity, Smile, Sparkles, ShieldCheck, Heart, Stethoscope, Zap } from 'lucide-react';
import Button from '../common/Button';

const EXPERTISE = [
  { icon: Syringe, label: 'Dental Implants', tag: 'Permanent Solutions' },
  { icon: Activity, label: 'Root Canal (RCT)', tag: 'Painless' },
  { icon: Smile, label: 'Orthodontics', tag: 'Braces & Aligners' },
  { icon: Sparkles, label: 'Teeth Whitening', tag: 'Instant Results' },
  { icon: ShieldCheck, label: 'Crowns & Bridges', tag: 'Zirconia & PFM' },
  { icon: Heart, label: 'Smile Makeover', tag: 'Cosmetic' },
  { icon: Stethoscope, label: 'General Checkup', tag: 'Preventive' },
  { icon: Zap, label: 'Extractions', tag: 'Painless' },
];

const HeroSection = () => {

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
      
      {/* ── Background Video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
      >
        <source 
          src="https://videos.pexels.com/video-files/5722138/5722138-hd_1920_1080_25fps.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* ── Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2e]/75 via-[#0a1a2e]/60 to-[#0a1a2e]/85 z-[1]" />

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 pt-28 pb-8">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-8">
              
              {/* Badge */}
              <div className="animate-slide-up-fade" style={{ animationDelay: '0.1s', opacity: 0 }}>
                <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-white/70 border border-white/15 rounded-full px-5 py-2 backdrop-blur-sm bg-white/5">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse-subtle"></span>
                  Now Accepting Patients
                </span>
              </div>

              {/* Headline */}
              <h1 className="animate-slide-up-fade" style={{ animationDelay: '0.2s', opacity: 0 }}>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-bold font-heading text-white leading-[1.1] tracking-tight">
                  Where Smiles Are
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7EC8E3] to-[#4ABFAA]">
                    Crafted with Care
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/60 text-base md:text-lg max-w-lg leading-relaxed animate-slide-up-fade" style={{ animationDelay: '0.35s', opacity: 0 }}>
                Advanced dental care by <span className="text-white/90 font-medium">Dr. Malkesh Pankhaniya</span>. 
                Gentle hands, modern technology, and a commitment to your comfort — every single visit.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-fade" style={{ animationDelay: '0.5s', opacity: 0 }}>
                <Link to="/contact">
                  <button className="flex items-center justify-center gap-2.5 bg-white text-[#0a1a2e] font-heading font-bold text-sm tracking-wide rounded-full px-8 py-4 shadow-lg hover:shadow-xl hover:bg-primary-light transition-all duration-300 transform hover:-translate-y-0.5">
                    <Calendar size={18} />
                    Book Appointment
                  </button>
                </Link>
                <a href="tel:+919725041336">
                  <button className="flex items-center justify-center gap-2.5 text-white/90 font-heading font-medium text-sm tracking-wide rounded-full px-8 py-4 border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                    <Phone size={16} />
                    +91 97250 41336
                  </button>
                </a>
              </div>
            </div>

            {/* Right — Stats Cards */}
            <div className="lg:col-span-5 xl:col-span-6 hidden lg:flex flex-col items-end gap-5 pr-4">
              
              <div className="animate-slide-up-fade" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl px-7 py-5 w-[280px]">
                  <p className="text-3xl font-bold font-heading text-white mb-1">10+</p>
                  <p className="text-white/50 text-sm font-medium">Years of Clinical Excellence</p>
                </div>
              </div>
              
              <div className="animate-slide-up-fade mr-12" style={{ animationDelay: '0.55s', opacity: 0 }}>
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl px-7 py-5 w-[280px]">
                  <p className="text-3xl font-bold font-heading text-white mb-1">2,000+</p>
                  <p className="text-white/50 text-sm font-medium">Happy & Healthy Smiles</p>
                </div>
              </div>
              
              <div className="animate-slide-up-fade" style={{ animationDelay: '0.7s', opacity: 0 }}>
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl px-7 py-5 w-[280px]">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-3xl font-bold font-heading text-white">5.0</p>
                    <span className="text-accent text-sm">★★★★★</span>
                  </div>
                  <p className="text-white/50 text-sm font-medium">Google Patient Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Expertise Slider ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-md">
        <div className="overflow-hidden py-5" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' }}>
          <div className="flex animate-marquee w-max">
            {[...EXPERTISE, ...EXPERTISE].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to="/services"
                  className="flex items-center gap-3 px-6 lg:px-8 shrink-0 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300 shrink-0">
                    <Icon size={18} className="text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <div className="pr-6 border-r border-white/10">
                    <p className="text-white/90 text-sm font-semibold whitespace-nowrap group-hover:text-white transition-colors">{item.label}</p>
                    <p className="text-white/40 text-[11px] font-medium whitespace-nowrap">{item.tag}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 text-white/30 hover:text-white/70 transition-colors animate-float cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
