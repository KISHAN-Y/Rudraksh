import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import CaseCard from '../components/cases/CaseCard';
import CaseFilter from '../components/cases/CaseFilter';
import CaseModal from '../components/cases/CaseModal';
import { cases } from '../data/cases';
import { useModal } from '../hooks/useModal';

const CaseHistory = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { isOpen, openModal, closeModal, data } = useModal();

  const filteredCases = activeFilter === 'All' 
    ? cases 
    : cases.filter(c => c.treatmentType.includes(activeFilter) || c.tags.includes(activeFilter));

  return (
    <div className="bg-page-bg pb-24 min-h-screen">
      <div className="bg-primary/5 py-20 px-4 border-b border-border mb-16">
        <div className="container max-w-4xl text-center">
          <SectionHeading 
            title="Clinical Case Gallery" 
            subtitle="Transformations"
            className="mb-8"
          />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our successfully completed cases. These real-life transformations 
            demonstrate our commitment to clinical excellence and aesthetic perfection.
          </p>
        </div>
      </div>

      <div className="container">
        <CaseFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        
        {filteredCases.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map(caseItem => (
              <CaseCard 
                key={caseItem.id} 
                caseData={caseItem} 
                onClick={() => openModal(caseItem)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-border flex flex-col items-center">
            <h3 className="text-xl font-bold font-heading text-text-primary mb-2">No cases found</h3>
            <p className="text-text-secondary">Try selecting a different category.</p>
          </div>
        )}
      </div>

      <CaseModal isOpen={isOpen} onClose={closeModal} data={data} />
    </div>
  );
};

export default CaseHistory;
