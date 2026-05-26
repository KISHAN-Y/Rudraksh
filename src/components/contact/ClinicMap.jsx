import React from 'react';
import { MapPin } from 'lucide-react';
import FadeInSection from '../common/FadeInSection';

const ClinicMap = () => {
  return (
    <FadeInSection className="h-full w-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg border border-border relative group">
      <div className="absolute inset-0 bg-slate-200 z-0">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117498.42878956899!2d72.4849!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMjknMDUuNiJF!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700"
          title="Clinic Location"
        ></iframe>
      </div>
      
      <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 z-10 flex items-start gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0">
          <MapPin size={20} />
        </div>
        <div>
          <h4 className="font-bold text-text-primary mb-1">Rudreksh Dental Clinic</h4>
          <p className="text-sm text-text-secondary">Opposite City Center, Main Road, Gujarat, India</p>
        </div>
      </div>
    </FadeInSection>
  );
};

export default ClinicMap;
