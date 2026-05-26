import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import FadeInSection from '../common/FadeInSection';
import { faqs } from '../../data/faqs';

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border border-border rounded-2xl bg-white overflow-hidden transition-all duration-300">
      <button 
        className="w-full px-6 py-5 flex items-center justify-between text-left focus-ring bg-white hover:bg-surface-alt transition-colors"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`font-heading font-bold pr-4 ${isOpen ? 'text-primary' : 'text-text-primary'}`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-surface text-text-muted'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      
      <div 
        className="transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="px-6 pb-6 pt-2 text-text-secondary leading-relaxed border-t border-divider mt-2">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="py-24 bg-page-bg">
      <div className="container max-w-4xl">
        <SectionHeading 
          title="Got Questions?" 
          subtitle="Frequently Asked" 
          className="mb-16"
        />
        
        <FadeInSection>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FAQAccordion;
