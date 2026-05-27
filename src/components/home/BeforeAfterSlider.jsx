import React, { useState, useRef, useEffect, useCallback } from 'react';
import SectionHeading from '../common/SectionHeading';
import FadeInSection from '../common/FadeInSection';

const base = import.meta.env.BASE_URL;

const transformationCases = [
  {
    id: 1,
    title: 'Dental Implant',
    subtitle: 'Missing Tooth → Perfect Smile',
    description: 'Patient presented with a missing upper incisor. A titanium implant screw was placed into the jawbone, followed by a custom zirconia crown for a natural-looking restoration.',
    beforeImg: `${base}images/cases/implant-before.png`,
    afterImg: `${base}images/cases/implant-after.png`,
    xrayImg: `${base}images/cases/implant-xray.png`,
    beforeLabel: 'Missing Tooth',
    afterLabel: 'Implant Crown',
    duration: '3 months',
    tags: ['Implant', 'Screw', 'Crown'],
  },
  {
    id: 2,
    title: 'Smile Makeover',
    subtitle: 'Stained Teeth → Hollywood Smile',
    description: 'Severe discoloration and uneven alignment corrected with 8 ultra-thin porcelain veneers on the upper and lower anteriors, delivering a flawless Hollywood smile.',
    beforeImg: `${base}images/cases/veneers-before.png`,
    afterImg: `${base}images/cases/veneers-after.png`,
    xrayImg: null,
    beforeLabel: 'Stained & Uneven',
    afterLabel: 'Porcelain Veneers',
    duration: '2 weeks',
    tags: ['Veneers', 'Cosmetic', 'Whitening'],
  },
];

const SliderHandle = ({ position }) => (
  <div
    className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
    style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
  >
    {/* Vertical line */}
    <div className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]" />

    {/* Handle knob */}
    <div className="relative w-11 h-11 md:w-14 md:h-14 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center justify-center border-[3px] border-primary">
      <div className="flex items-center gap-[3px]">
        <svg width="6" height="16" viewBox="0 0 6 16" fill="none">
          <path d="M3 0L0.5 3V13L3 16" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
        </svg>
        <svg width="6" height="16" viewBox="0 0 6 16" fill="none">
          <path d="M3 16L5.5 13V3L3 0" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
        </svg>
      </div>
    </div>
  </div>
);

const XRayToggle = ({ showXray, onToggle }) => (
  <button
    onClick={onToggle}
    className={`
      flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
      transition-all duration-300 border-2 cursor-pointer
      ${showXray
        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
        : 'bg-white/90 text-text-secondary border-border hover:border-primary hover:text-primary'
      }
    `}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
    X-Ray View
  </button>
);

const CaseNavigator = ({ cases, activeIndex, onSelect }) => (
  <div className="flex items-center justify-center gap-3 mt-8">
    {cases.map((c, i) => (
      <button
        key={c.id}
        onClick={() => onSelect(i)}
        className={`
          px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer
          ${activeIndex === i
            ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
            : 'bg-white text-text-secondary border border-border hover:border-primary/50 hover:text-primary'
          }
        `}
      >
        {c.title}
      </button>
    ))}
  </div>
);

const BeforeAfterSlider = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showXray, setShowXray] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  const currentCase = transformationCases[activeCase];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(2, Math.min((x / rect.width) * 100, 98));
    setSliderPosition(percent);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleInteractionStart = useCallback((clientX) => {
    setIsDragging(true);
    handleMove(clientX);
  }, [handleMove]);

  const switchCase = useCallback((index) => {
    if (index === activeCase) return;
    setIsTransitioning(true);
    setShowXray(false);
    setTimeout(() => {
      setActiveCase(index);
      setSliderPosition(50);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [activeCase]);

  useEffect(() => {
    const handleEnd = () => setIsDragging(false);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
    };
  }, []);

  return (
    <section className="py-24 bg-surface" id="transformations">
      <div className="container">
        <SectionHeading
          title="Transformations"
          subtitle="Real Results"
          className="mb-16"
        />

        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            {/* Case Info Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                  {currentCase.title}
                </h3>
                <p className="text-sm text-text-muted mt-1">
                  {currentCase.subtitle} &middot; {currentCase.duration}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {currentCase.xrayImg && (
                  <XRayToggle
                    showXray={showXray}
                    onToggle={() => setShowXray(!showXray)}
                  />
                )}
              </div>
            </div>

            {/* Main Slider Area */}
            <div
              ref={containerRef}
              className={`
                relative w-full aspect-[16/9] rounded-2xl overflow-hidden
                cursor-ew-resize select-none touch-none
                shadow-[0_8px_40px_rgba(90,172,224,0.12)] border-2 border-border
                transition-opacity duration-300
                ${isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}
              `}
              style={{ transition: 'opacity 0.3s ease, transform 0.3s ease' }}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={(e) => handleInteractionStart(e.clientX)}
              onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
            >
              {/* === AFTER image (base layer) === */}
              <img
                src={currentCase.afterImg}
                alt={`After: ${currentCase.afterLabel}`}
                className="absolute inset-0 w-full h-full object-cover"
                draggable="false"
              />

              {/* === X-Ray overlay (fades in/out) === */}
              {currentCase.xrayImg && (
                <div
                  className="absolute inset-0 z-10 transition-opacity duration-500"
                  style={{ opacity: showXray ? 1 : 0, pointerEvents: showXray ? 'auto' : 'none' }}
                >
                  <img
                    src={currentCase.xrayImg}
                    alt="Implant X-Ray"
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                  {/* X-ray label */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide uppercase">
                      X-Ray: Implant Screw
                    </span>
                  </div>
                </div>
              )}

              {/* === BEFORE image (clipped layer) === */}
              <div
                className="absolute inset-0 w-full h-full z-20"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  opacity: showXray ? 0 : 1,
                  transition: 'opacity 0.4s ease',
                }}
              >
                <img
                  src={currentCase.beforeImg}
                  alt={`Before: ${currentCase.beforeLabel}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable="false"
                />
                {/* Before badge */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md pointer-events-none border border-border">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider block">Before</span>
                  <span className="text-sm font-semibold text-text-primary">{currentCase.beforeLabel}</span>
                </div>
              </div>

              {/* After badge */}
              <div
                className="absolute bottom-5 right-5 z-20 bg-primary/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md pointer-events-none"
                style={{
                  opacity: showXray ? 0 : 1,
                  transition: 'opacity 0.4s ease',
                }}
              >
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider block">After</span>
                <span className="text-sm font-semibold text-white">{currentCase.afterLabel}</span>
              </div>

              {/* === Slider handle === */}
              {!showXray && <SliderHandle position={sliderPosition} />}
            </div>

            {/* Description + tags */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-text-muted max-w-xl leading-relaxed">
                {currentCase.description}
              </p>
              <div className="flex flex-wrap gap-2 shrink-0">
                {currentCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary-dark border border-primary/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Instruction text */}
            <p className="text-center text-text-muted mt-6 text-sm font-medium flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary opacity-60">
                <path d="M5 9l4 4 4-4M15 9l4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {showXray
                ? 'Viewing implant screw X-Ray — toggle off to compare'
                : 'Drag the slider to see the transformation'
              }
            </p>

            {/* Case navigation */}
            <CaseNavigator
              cases={transformationCases}
              activeIndex={activeCase}
              onSelect={switchCase}
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
