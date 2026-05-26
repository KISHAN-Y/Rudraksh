import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';

const StatItem = ({ end, label, suffix = '' }) => {
  const { count, elementRef } = useCountUp(end, 2.5);
  
  return (
    <div className="text-center" ref={elementRef}>
      <div className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-text-secondary font-medium tracking-wide">
        {label}
      </div>
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="py-12 bg-white border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x border-border">
          <StatItem end={2000} suffix="+" label="Happy Patients" />
          <StatItem end={10} suffix="+" label="Years Experience" />
          <StatItem end={98} suffix="%" label="Success Rate" />
          <StatItem end={15} suffix="+" label="Treatments Offered" />
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
