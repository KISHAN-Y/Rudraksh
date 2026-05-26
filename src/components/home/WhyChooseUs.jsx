import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FadeInSection from '../common/FadeInSection';
import { Shield, Clock, Heart, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Advanced Technology",
      desc: "Equipped with latest dental lasers, digital X-rays, and rotary endodontics for precise, painless treatments.",
      icon: Shield
    },
    {
      title: "Flexible Timings",
      desc: "Open on weekends and late evenings to accommodate your busy schedule without compromising on health.",
      icon: Clock
    },
    {
      title: "Patient-First Approach",
      desc: "We prioritize your comfort and anxiety levels, ensuring a relaxing environment throughout your visit.",
      icon: Heart
    },
    {
      title: "Affordable Care",
      desc: "Transparent pricing with no hidden costs. High-quality treatments that are accessible to everyone.",
      icon: Award
    }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container">
        <SectionHeading 
          title="Why Patients Choose Us" 
          subtitle="The Rudreksh Difference" 
          theme="dark"
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <FadeInSection key={idx} delay={idx * 0.15}>
                <div className="bg-white/10 p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors h-full">
                  <div className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-4">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
