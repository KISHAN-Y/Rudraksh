import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FadeInSection = ({ children, delay = 0, className = '' }) => {
  const ref = useScrollAnimation({
    to: { duration: 0.8, delay: delay }
  });

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default FadeInSection;
