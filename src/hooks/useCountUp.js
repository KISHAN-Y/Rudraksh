import { useEffect, useState, useRef } from 'react';
import { gsap } from '../components/animations/gsapConfig';

export const useCountUp = (end, duration = 2) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let ctx = gsap.context(() => {
      gsap.to({ val: 0 }, {
        val: end,
        duration: duration,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%'
        },
        onUpdate: function () {
          setCount(Math.round(this.targets()[0].val));
        }
      });
    }, el);

    return () => ctx.revert();
  }, [end, duration]);

  return { count, elementRef };
};
