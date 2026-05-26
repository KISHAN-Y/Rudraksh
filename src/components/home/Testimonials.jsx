import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import MosaicGrid from '../common/MosaicGrid';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-24 bg-brand-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Testimonial details & quotes */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-[0.2em] block">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-dark leading-tight">
                What Our Patients<br />
                Say About Us
              </h2>
            </div>

            {/* Quotation icon */}
            <div className="text-brand-accent">
              <Quote size={56} className="opacity-80" fill="currentColor" />
            </div>

            {/* Quote details */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-brand-dark italic font-body leading-relaxed max-w-xl transition-opacity duration-500">
                "{current.text}"
              </p>
              
              {/* Author name & details */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-dark text-brand-accent flex items-center justify-center font-heading font-bold rounded-none shadow-md">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-brand-dark text-base">
                    {current.name}
                  </h4>
                  <p className="text-xs text-text-secondary font-semibold tracking-wider font-heading uppercase">
                    Patient - {current.treatment}
                  </p>
                </div>
              </div>
            </div>

            {/* Simple slider navigation controls */}
            <div className="flex gap-3 pt-4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 border border-brand-accent/25 hover:border-brand-accent bg-[#0e2c2c] hover:bg-brand-accent hover:text-brand-dark text-white flex items-center justify-center transition-all duration-300 rounded-none cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 border border-brand-accent/25 hover:border-brand-accent bg-[#0e2c2c] hover:bg-brand-accent hover:text-brand-dark text-white flex items-center justify-center transition-all duration-300 rounded-none cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Decorative Mosaic Frame */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[340px]">
            <div className="relative">
              {/* Central dark block */}
              <div className="w-[260px] h-[260px] bg-brand-dark border border-white/5 shadow-2xl relative z-10 flex flex-col justify-between p-6">
                <div className="w-6 h-6 border-b border-r border-brand-accent/30 self-end" />
                <span className="text-[10px] tracking-[0.25em] font-heading font-bold text-white/30 uppercase leading-none select-none">
                  Tested Quality Care
                </span>
              </div>

              {/* Mosaic sticking out top-right */}
              <div className="absolute -top-6 -right-6 z-20">
                <MosaicGrid preset="testimonial-corner" width="w-24" height="h-24" />
              </div>

              {/* Mosaic sticking out bottom-left */}
              <div className="absolute -bottom-6 -left-6 z-20">
                <div className="grid grid-cols-2 grid-rows-2 gap-1 w-12 h-12">
                  <div className="bg-brand-accent rounded-sm" />
                  <div className="bg-transparent" />
                  <div className="bg-transparent" />
                  <div className="bg-brand-accent-alt rounded-sm" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
