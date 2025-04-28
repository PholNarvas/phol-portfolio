import { useEffect, useRef } from 'react';

export const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('rs-visible');
        } else {
          ref.current.classList.remove('rs-visible');
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rs-reveal"
      style={{ transitionDelay: `${delay}s` }} // Apply the delay for staggered effect
    >
      {children}
    </div>
  );
};
