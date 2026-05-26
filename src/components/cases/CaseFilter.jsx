import React from 'react';
import { treatmentCategories } from '../../data/cases';

const CaseFilter = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {treatmentCategories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus-ring ${
            activeFilter === category 
              ? 'bg-primary text-white shadow-md' 
              : 'bg-white text-text-secondary border border-border hover:border-primary/50 hover:text-primary'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CaseFilter;
