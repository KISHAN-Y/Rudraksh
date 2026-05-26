import React from 'react';
import { X } from 'lucide-react';
import BeforeAfterSlider from '../home/BeforeAfterSlider';

const BeforeAfterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10 focus-ring"
      >
        <X size={24} />
      </button>
      
      <div className="w-full max-w-5xl w-full animate-slide-up-fade">
        <BeforeAfterSlider />
      </div>
    </div>
  );
};

export default BeforeAfterModal;
