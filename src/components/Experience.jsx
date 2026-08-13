import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Robotics Specialist',
      company: 'Saad Tech',
      period: 'February 2023 - Present',
      location: 'Remote & On-Site',
      status: 'Active Role',
      bullets: [
        'Leading robotics projects for international and local clients across multiple industries.',
        'Specializing in Arduino, ESP8266, and ESP32 microcontroller system design and circuit integration.',
        'Developing autonomous robots, obstacle avoidance vehicles, and custom biometric IoT hardware.',
        'Delivering end-to-end hardware documentation, user manuals, and technical support.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Saad Tech',
      period: 'August 2024 - Present',
      location: 'Remote',
      status: 'Active Role',
      bullets: [
        'Designing and custom-coding responsive, attractive, and user-friendly WordPress websites.',
        'Developing custom PHP themes, plugins, and page builder components (Elementor / custom code).',
        'Implementing SEO optimization, caching strategies, and page load speed acceleration.',
        'Building parametric product catalogues for electronics e-commerce businesses.'
      ]
    },
    {
      title: 'Embedded Systems Developer',
      company: 'Pluttox Software House',
      period: '2024 - 2025',
      location: 'Software House',
      status: 'Completed',
      bullets: [
        'Designed firmware for microcontrollers used in industrial robotics and IoT projects.',
        'Proficient in C/C++, RTOS, UART/SPI/I2C protocols, and ADC signal processing.',
        'Optimized code for real-time performance, low latency, power efficiency, and hardware reliability.',
        'Developed from breadboard prototypes to production MISRA-compliant firmware code.'
      ]
    }
  ];

  return (
    <section id="experience" className="border-b border-white/10 bg-[#080a11] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div>
          <p className="section-eyebrow">Experience</p>
          <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-400">
            Track record in robotics design, embedded firmware, and full-stack web development.
          </p>
        </div>

        {/* Timeline */}
        <ol className="mt-8 sm:mt-12 border-l border-white/10 pl-5 sm:pl-8 lg:pl-10 space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <li key={index} className="relative group">
              {/* Dot indicator */}
              <span 
                aria-hidden="true" 
                className="absolute -left-[27px] sm:-left-[39px] lg:-left-[47px] top-2 h-3.5 w-3.5 rounded-full border-2 border-[#080a11] bg-blue-500 group-hover:scale-125 group-hover:bg-white transition-all duration-300 shadow-md shadow-blue-500/50"
              ></span>

              <div className="rounded-2xl border border-white/10 bg-[#0c0e17] p-5 sm:p-7 lg:p-8 transition-colors hover:border-white/25">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold uppercase tracking-tight text-white flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span>{exp.title}</span> 
                    <span className="text-blue-400">—</span> 
                    <span>{exp.company}</span>
                  </h3>
                  <span className="w-fit rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[11px] sm:text-xs font-semibold text-blue-400">
                    {exp.status}
                  </span>
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    {exp.location}
                  </span>
                </div>

                <ul className="mt-4 sm:mt-5 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span aria-hidden="true" className="text-blue-400 shrink-0 font-bold">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
