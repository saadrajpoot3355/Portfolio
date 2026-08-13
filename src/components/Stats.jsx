import React from 'react';
import { Globe, Award, FolderCheck, Clock } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      number: '3+',
      unit: 'Years Active',
      label: 'Experience',
      description: 'Building robotics and web projects since 2022.',
      icon: Clock
    },
    {
      number: '99+',
      unit: 'Completed',
      label: 'Projects',
      description: 'Successful delivery of local & international projects.',
      icon: FolderCheck
    },
    {
      number: '5+',
      unit: 'Global',
      label: 'Countries Served',
      description: 'Collaborated with clients across multiple nations.',
      icon: Globe
    },
    {
      number: '100%',
      unit: 'Client',
      label: 'Satisfaction',
      description: 'Reliable, high-precision technical delivery.',
      icon: Award
    }
  ];

  return (
    <section className="border-b border-white/10 bg-[#070910] py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0c0e17] p-4 sm:p-6 text-center transition-all hover:border-white/25"
              >
                <div className="mx-auto flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  {stat.number}
                </div>
                <p className="mt-1 font-display text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-[11px] sm:text-xs text-slate-400 hidden xs:block">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
