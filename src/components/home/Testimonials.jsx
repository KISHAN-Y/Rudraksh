import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import FadeInSection from '../common/FadeInSection';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-24 bg-page-bg overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <SectionHeading 
            title="What Our Patients Say" 
            subtitle="Real Stories" 
            centered={false}
            className="mb-0"
          />
          
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors focus-ring"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors focus-ring"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <FadeInSection>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex backface-hidden -ml-6">
              {testimonials.map((review) => (
                <div key={review.id} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                  <div className="bg-white p-8 rounded-2xl border border-border card-shadow h-full flex flex-col">
                    <div className="flex gap-1 mb-6 text-accent">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    
                    <p className="text-text-secondary leading-relaxed italic flex-grow mb-8">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-divider">
                      <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary text-sm">{review.name}</h4>
                        <span className="text-text-muted text-xs bg-page-bg px-2 py-1 rounded inline-block mt-1">
                          {review.treatment}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Testimonials;
