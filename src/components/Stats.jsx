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
    <section className="border-b border-white/10 bg-[#070910] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0c0e17] p-6 text-center transition-all hover:border-white/25"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {stat.number}
                </div>
                <p className="mt-1 font-display text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs text-slate-400">
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
