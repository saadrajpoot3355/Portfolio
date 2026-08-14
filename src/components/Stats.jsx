import React, { useState, useEffect, useRef } from 'react';
import { Globe, Award, FolderCheck, Clock } from 'lucide-react';
import Reveal from './Reveal';

export default function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    {
      target: 3,
      suffix: '+',
      unit: 'Years Active',
      label: 'Experience',
      description: 'Building robotics and web projects since 2022.',
      icon: Clock
    },
    {
      target: 149,
      suffix: '+',
      unit: 'Completed',
      label: 'Projects',
      description: 'Successful delivery of local & international projects.',
      icon: FolderCheck
    },
    {
      target: 3,
      suffix: '+',
      unit: 'Global',
      label: 'Countries Served',
      description: 'Collaborated with clients across multiple nations.',
      icon: Globe
    },
    {
      target: 100,
      suffix: '%',
      unit: 'Client',
      label: 'Satisfaction',
      description: 'Reliable, high-precision technical delivery.',
      icon: Award
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1000;
    const startTime = performance.now();
    let animationFrameId;

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // easeOutExpo for smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const nextCounts = stats.map((stat) =>
        Math.floor(easeProgress * stat.target)
      );

      setCounts(nextCounts);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((s) => s.target));
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="border-b border-white/10 bg-[#070910] py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const displayValue = hasAnimated
              ? `${counts[idx]}${stat.suffix}`
              : `0${stat.suffix}`;

            return (
              <Reveal key={idx} delay={idx * 60} threshold={0.1}>
                <div 
                  className="rounded-2xl border border-white/10 bg-[#0c0e17] p-4 sm:p-6 text-center transition-all hover:border-white/25 h-full"
                >
                  <div className="mx-auto flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    {displayValue}
                  </div>
                  <p className="mt-1 font-display text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-[11px] sm:text-xs text-slate-400 hidden xs:block">
                    {stat.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
