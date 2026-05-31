import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const PageLoader = ({ duration = 1500 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [waveOffset, setWaveOffset] = useState(0);

  useEffect(() => {
    // Leave 400ms at the end for the fade/scale exit animation
    const animDuration = Math.max(duration - 400, 500);
    const startTime = performance.now();
    let animationFrameId;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progressPercent = Math.min((elapsed / animDuration) * 100, 100);

      setProgress(progressPercent);
      
      // Animate wave offset based on current time (complete cycle every 1000ms)
      const phase = (currentTime / 1000) * 2 * Math.PI;
      setWaveOffset(phase);

      if (elapsed < animDuration) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Add a micro-delay once 100% is reached before triggering fade out
        const fadeTimer = setTimeout(() => {
          setIsFadingOut(true);
          const hideTimer = setTimeout(() => {
            setIsVisible(false);
          }, 400); // matches the duration-400 exit transition
          return () => clearTimeout(hideTimer);
        }, 150);
        return () => clearTimeout(fadeTimer);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [duration]);

  if (!isVisible) return null;

  // Calculate wave path coordinates normalized (0 to 1) for objectBoundingBox clipPath
  const y = 1 - progress / 100;
  // Amplitude peaks in the middle of progress and goes to 0 at 0% and 100%
  const amp = progress === 0 || progress === 100 ? 0 : 0.04 * Math.sin((progress / 100) * Math.PI);

  const wavePath = `M 0 ${y} 
    C 0.25 ${y + amp * Math.sin(waveOffset)}, 
      0.25 ${y + amp * Math.sin(waveOffset + Math.PI)}, 
      0.5 ${y} 
    C 0.75 ${y + amp * Math.sin(waveOffset + Math.PI * 0.5)}, 
      0.75 ${y + amp * Math.sin(waveOffset + Math.PI * 1.5)}, 
      1 ${y} 
    L 1 1 L 0 1 Z`;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Hidden SVG defining the liquid wave clip mask */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="liquid-wave-clip" clipPathUnits="objectBoundingBox">
            <path d={wavePath} />
          </clipPath>
        </defs>
      </svg>

      <div className="relative flex flex-col items-center">
        {/* Glow effect behind the logo */}
        <div className="absolute w-32 h-32 bg-primary/15 rounded-full blur-3xl -top-4 animate-[pulse_3s_ease-in-out_infinite]" />

        {/* Logo container with liquid progress fill */}
        <div className="relative w-28 h-28 animate-float flex items-center justify-center">
          {/* Muted background logo */}
          <Logo className="absolute inset-0 w-full h-full text-primary/15" />

          {/* Active filling logo with animated wave clipping path */}
          <div 
            className="absolute inset-0 overflow-hidden select-none pointer-events-none"
            style={{ 
              clipPath: 'url(#liquid-wave-clip)' 
            }}
          >
            <Logo className="w-full h-full text-primary-mid drop-shadow-[0_4px_12px_rgba(47,135,200,0.2)]" />
          </div>
        </div>

        {/* Brand Text */}
        <h1 className="mt-8 text-2xl font-bold font-heading text-text-primary tracking-wide">
          Rudreksh<span className="text-primary font-black">.</span>
        </h1>
        <p className="text-[10px] font-bold font-heading tracking-widest text-text-muted uppercase mt-1">
          Dental Clinic
        </p>

        {/* Progress bar and numeric percentage indicator */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="w-32 h-1 bg-border rounded-full overflow-hidden relative">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-mid rounded-full transition-all duration-75 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-[10px] font-bold text-text-muted font-heading mt-1">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;


