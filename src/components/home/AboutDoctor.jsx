import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../common/FadeInSection';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import ToothIcon from '../common/ToothIcon';

const AboutDoctor = () => {
  return (
    <section className="py-24 bg-page-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <FadeInSection>
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10 border-8 border-white bg-slate-200 aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Malkesh Pankhaniya" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -top-6 -right-6 w-full h-full rounded-[40px] border-2 border-primary/30 -z-10"></div>
              
              <div className="absolute bottom-10 -right-10 bg-primary text-white p-6 rounded-2xl shadow-xl w-48 animate-float hidden md:block">
                <div className="text-4xl font-bold font-heading mb-1">10+</div>
                <div className="text-sm opacity-90 leading-tight">Years of Clinical Excellence</div>
              </div>
            </FadeInSection>
          </div>
          
          <div>
            <SectionHeading 
              title="Meet Your Doctor" 
              subtitle="Expertise You Can Trust" 
              centered={false} 
              className="mb-8"
            />
            
            <FadeInSection delay={0.2} className="space-y-6 text-text-secondary">
              <h3 className="text-2xl font-bold text-primary font-heading">
                Dr. Malkesh Pankhaniya <span className="text-lg font-medium text-text-muted">BDS</span>
              </h3>
              
              <p className="leading-relaxed">
                As the founder of Rudreksh Dental Clinic, Dr. Malkesh brings over a decade of 
                specialized experience in comprehensive dental care. His approach combines 
                advanced clinical techniques with a gentle, patient-first philosophy.
              </p>
              
              <p className="leading-relaxed">
                Specializing in painless single-sitting RCTs, precise implant placements, and 
                complete smile makeovers, he is dedicated to transforming smiles while ensuring 
                absolute patient comfort.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  'Advanced Implantology Certification',
                  'Expert in Rotary Endodontics (Painless RCT)',
                  'Cosmetic Smile Designing Specialist',
                  'Member of Indian Dental Association'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0">
                      <ToothIcon className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span className="font-medium text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8">
                <Link to="/about">
                  <Button variant="secondary">Read Full Profile</Button>
                </Link>
              </div>
            </FadeInSection>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
