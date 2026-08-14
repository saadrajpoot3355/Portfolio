import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 500,
  distance = '24px',
  direction = 'up',
  threshold = 0.1,
  once = true
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [once, threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0,0,0)';
    switch (direction) {
      case 'up': return `translate3d(0, ${distance}, 0)`;
      case 'down': return `translate3d(0, -${distance}, 0)`;
      case 'left': return `translate3d(${distance}, 0, 0)`;
      case 'right': return `translate3d(-${distance}, 0, 0)`;
      default: return `translate3d(0, ${distance}, 0)`;
    }
  };

  return (
    <div
      ref={domRef}
      className={`scroll-reveal-item ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
