import React, { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { gsap } from '../animations/gsapConfig';

const WhatsAppFloat = () => {
  const floatRef = useRef(null);
  const phoneNumber = '919725041336';
  const message = 'Hi, I would like to book an appointment.';

  useEffect(() => {
    const el = floatRef.current;
    if (!el) return;

    gsap.fromTo(el,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)', delay: 1 }
    );
  }, []);

  return (
    <a
      ref={floatRef}
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow animate-pulse-subtle focus-ring"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppFloat;
