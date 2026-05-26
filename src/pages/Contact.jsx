import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import ContactForm from '../components/contact/ContactForm';
import ClinicMap from '../components/contact/ClinicMap';
import ClinicHours from '../components/contact/ClinicHours';
import FadeInSection from '../components/common/FadeInSection';

const Contact = () => {
  return (
    <div className="bg-page-bg pb-24 min-h-screen">
      <div className="bg-primary/5 py-20 px-4 border-b border-border mb-16">
        <div className="container max-w-4xl text-center">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Here for You"
            className="mb-8"
          />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule your consultation today. Dr. Malkesh Pankhaniya is ready to personalize 
            your care, answer your questions, and welcome you to his state-of-the-art facility.
          </p>
        </div>
      </div>

      <div className="container mt-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-5 space-y-8 h-full flex flex-col">
            <div className="flex-1">
              <ClinicHours />
            </div>
            <div className="flex-1 min-h-[300px]">
              <ClinicMap />
            </div>
          </div>
          
          <FadeInSection className="lg:col-span-7 h-full">
            <ContactForm />
          </FadeInSection>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
