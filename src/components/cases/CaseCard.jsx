import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedCard from '../common/AnimatedCard';

const CaseCard = ({ caseData, onClick }) => {
  return (
    <AnimatedCard className="group cursor-pointer hover:border-primary/30 flex flex-col h-full overflow-hidden p-0">
      <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
        <img 
          src={`https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80&seed=${caseData.id}`} 
          alt={caseData.treatmentType}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold font-heading text-primary rounded-full shadow-sm">
          {caseData.treatmentType}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
          {caseData.patientName}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
          {caseData.description.substring(0, 90)}...
        </p>
        
        <div 
          onClick={onClick}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm mt-auto"
        >
          View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </AnimatedCard>
  );
};

export default CaseCard;
