import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initGSAP = () => {
  // Global configuration
  gsap.config({
    nullTargetWarn: false,
  });
  
  // Default scroll trigger settings
  ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
    start: 'top 85%',
  });
};

export { gsap, ScrollTrigger };
