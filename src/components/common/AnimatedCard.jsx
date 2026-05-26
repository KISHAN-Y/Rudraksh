import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AnimatedCard = ({ children, className = '', delay = 0 }) => {
  const ref = useScrollAnimation({
    to: { duration: 0.6, delay: delay }
  });

  return (
    <div 
      ref={ref}
      className={`bg-surface rounded-2xl p-6 border border-border card-shadow ${className}`}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
