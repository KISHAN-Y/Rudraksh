import React, { useEffect, useState } from 'react';
import ToothIcon from './ToothIcon';

const PageLoader = ({ duration = 1200 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-surface flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="relative flex flex-col items-center">
        <ToothIcon className="w-16 h-16 text-primary animate-draw-tooth" strokeWidth={1.5} />
        <h1 className="mt-4 text-2xl font-bold font-heading text-primary tracking-wide">
          Rudreksh Dental
        </h1>
        <div className="w-32 h-1 bg-border rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-[pulse_1s_ease-in-out_infinite]" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
