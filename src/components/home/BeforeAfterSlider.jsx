import React, { useState, useRef, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import FadeInSection from '../common/FadeInSection';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = (clientX) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-surface">
      <div className="container">
        <SectionHeading 
          title="Transformations" 
          subtitle="Real Results" 
          className="mb-16"
        />
        
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <div 
              ref={containerRef}
              className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none shadow-xl border border-border"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={(e) => handleInteractionStart(e.clientX)}
              onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
            >
              <img 
                src="https://images.unsplash.com/photo-1590625698579-22a9eb786d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="After Treatment" 
                className="absolute inset-0 w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-bold text-primary shadow-sm pointer-events-none">
                After
              </div>

              <div 
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Before Treatment" 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-80"
                  draggable="false"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-bold text-text-secondary shadow-sm pointer-events-none">
                  Before
                </div>
              </div>

              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center touch-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-primary rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-3 bg-primary rounded-full"></div>
                    <div className="w-0.5 h-4 bg-primary rounded-full"></div>
                    <div className="w-0.5 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-text-muted mt-6 text-sm font-medium">
              Drag the slider to see the transformation
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
