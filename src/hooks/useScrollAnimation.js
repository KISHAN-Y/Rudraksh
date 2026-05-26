import { useEffect, useRef } from 'react';
import { gsap } from '../components/animations/gsapConfig';

export const useScrollAnimation = (animationProps = {}, deps = []) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let ctx = gsap.context(() => {
      gsap.fromTo(el,
        {
          opacity: 0,
          y: 30,
          ...animationProps.from
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
            ...animationProps.scrollTrigger
          },
          ...animationProps.to
        }
      );
    }, el);

    return () => ctx.revert();
  }, deps);

  return elementRef;
};
