import React from 'react';
import { X, Clock, Tag } from 'lucide-react';

const CaseModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6">
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90svh] flex flex-col shadow-2xl animate-slide-up-fade overflow-hidden">
        
        {/* Dedicated Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-divider bg-white z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="inline-block bg-primary-light text-primary px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase">
              {data.treatmentType}
            </div>
            <span className="font-heading font-bold text-text-primary hidden sm:block">
              Case Details
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 bg-surface border border-border shadow-sm rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary-light transition-all focus-ring shrink-0"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          <div className="grid md:grid-cols-2 h-full">
            {/* Image Section */}
            <div className="bg-slate-100 relative h-56 sm:h-72 md:h-full md:min-h-[400px]">
              <img 
                src={`https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80&seed=${data.id}`} 
                alt={data.treatmentType}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Text Content Section */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-text-primary mb-3">
                {data.patientName}'s Journey
              </h2>
              
              <div className="flex items-center gap-2 text-text-muted text-sm mb-6">
                <Clock size={16} />
                <span>Duration: {data.duration}</span>
              </div>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-text-primary mb-2 text-xs sm:text-sm uppercase tracking-wide">The Challenge</h4>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed bg-surface p-4 rounded-xl border border-divider">
                    {data.beforeDesc}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-text-primary mb-2 text-xs sm:text-sm uppercase tracking-wide">The Solution</h4>
                  <p className="text-primary text-sm sm:text-base leading-relaxed bg-primary-light/50 p-4 rounded-xl border border-primary/10">
                    {data.afterDesc}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-text-primary mb-2 text-xs sm:text-sm uppercase tracking-wide">Procedure Details</h4>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-divider">
                <Tag size={16} className="text-text-muted mt-1" />
                {data.tags.map((tag, idx) => (
                  <span key={idx} className="bg-surface border border-border text-text-secondary font-medium text-xs px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseModal;
