import React from 'react';
import ToothIcon from './ToothIcon';

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  theme = 'light',
  className = ''
}) => {
  const alignment = centered ? 'text-center mx-auto items-center' : 'text-left items-start';
  
  return (
    <div className={`flex flex-col space-y-3 max-w-2xl ${alignment} ${className}`}>
      {subtitle && (
        <div className="flex items-center gap-2 text-primary font-medium tracking-wider uppercase text-sm">
          <ToothIcon className="w-4 h-4" />
          <span>{subtitle}</span>
          {!centered && <div className="h-px bg-primary/30 w-12 ml-2"></div>}
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-text-primary'}`}>
        {title}
      </h2>
      {centered && (
        <div className="w-24 h-1 bg-gradient-to-r from-primary-light via-primary to-primary-light rounded-full mt-4"></div>
      )}
    </div>
  );
};

export default SectionHeading;
