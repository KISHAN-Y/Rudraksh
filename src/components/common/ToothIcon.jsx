import React from 'react';

const ToothIcon = ({ className = "w-6 h-6", strokeWidth = 2, color = "currentColor" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M10 21c-2.4-.4-4.8-.8-6.1-2.9-1.3-2.1-1.3-5-1.3-7.1 0-3.9 3.1-7 7-7s7 3.1 7 7c0 2.1 0 5-1.3 7.1-1.3 2.1-3.7 2.5-6.1 2.9" />
    <path d="M12 21v-7" />
    <path d="M7 14h10" />
  </svg>
);

export default ToothIcon;
