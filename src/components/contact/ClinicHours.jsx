import React from 'react';
import { Clock } from 'lucide-react';
import FadeInSection from '../common/FadeInSection';

const ClinicHours = () => {
  const currentDay = new Date().getDay(); // 0 is Sunday
  
  const schedule = [
    { day: 'Mon - Fri', hours: '9:00 AM - 8:00 PM', active: currentDay >= 1 && currentDay <= 5 },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM', active: currentDay === 6 },
    { day: 'Sunday', hours: '10:00 AM - 2:00 PM', active: currentDay === 0 }
  ];

  const isOpenNow = () => {
    const hour = new Date().getHours();
    if (currentDay === 0) return hour >= 10 && hour < 14;
    if (currentDay === 6) return hour >= 9 && hour < 18;
    return hour >= 9 && hour < 20;
  };

  const openStatus = isOpenNow() ? 'Open Now' : 'Closed Now';
  const statusColor = isOpenNow() ? 'text-[#25D366]' : 'text-red-500';
  const statusBg = isOpenNow() ? 'bg-[#25D366]/10' : 'bg-red-500/10';

  return (
    <FadeInSection className="bg-surface rounded-3xl shadow-xl border border-border p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold font-heading text-text-primary flex items-center gap-3">
          <Clock className="text-primary" size={28} />
          Clinic Hours
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${statusColor} ${statusBg}`}>
          {openStatus}
        </span>
      </div>
      
      <div className="space-y-4 flex-grow">
        {schedule.map((slot, idx) => (
          <div 
            key={idx} 
            className={`flex justify-between items-center p-4 rounded-xl transition-colors ${
              slot.active ? 'bg-primary border border-primary text-white' : 'bg-page-bg text-text-secondary border border-border'
            }`}
          >
            <span className="font-medium">{slot.day}</span>
            <span className={slot.active ? 'font-bold' : 'font-medium'}>{slot.hours}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-divider">
        <p className="text-sm text-text-muted text-center leading-relaxed">
          In case of dental emergencies during off-hours, please contact Dr. Malkesh on WhatsApp directly.
        </p>
      </div>
    </FadeInSection>
  );
};

export default ClinicHours;
