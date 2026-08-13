import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'FSc in Computer Science (ICS)',
      institution: 'Punjab Group of Colleges',
      period: 'February 2022 - June 2024',
      status: 'Completed',
      description: 'Intermediate computer science education establishing core technical competencies, programming fundamentals, mathematics, and logic building.',
      skills: ['Programming Logic', 'Data Structures', 'Computer Networks', 'Physics & Math']
    },
    {
      degree: 'Matriculation in Computer Science',
      institution: 'D.P.S & College Okara, Pakistan',
      period: 'March 2010 - February 2022',
      status: 'Completed',
      description: 'Comprehensive secondary school computer science education laying foundational problem-solving and IT skills.',
      skills: ['Computer Fundamentals', 'Algorithms', 'Basic Electronics', 'General Science']
    }
  ];

  const certifications = [
    'Microsoft Office Specialist Certification (Word, Excel, Access)',
    'Full-Stack WordPress Custom Theme & Plugin Architecture',
    'Robotics & Microcontrollers Hardware Certification (Arduino & ESP32)',
    'Embedded C/C++ Firmware Design & MISRA Standards'
  ];

  return (
    <section id="education" className="border-b border-white/10 bg-[#0a0c14] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div>
          <p className="section-eyebrow">Education & Certifications</p>
          <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Academic & Training Credentials
          </h2>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">
          
          {/* Academic Background */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-blue-400 shrink-0" /> Academic Qualifications
            </h3>

            {educationList.map((edu, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-[#0c0e17] p-5 sm:p-6 transition-all hover:border-white/25">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                  <h4 className="font-display font-bold text-white text-base sm:text-lg">{edu.degree}</h4>
                  <span className="w-fit rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold text-blue-400">
                    {edu.status}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-300">{edu.institution}</p>
                <p className="text-xs text-blue-400 font-mono mt-1">{edu.period}</p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-400">{edu.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {edu.skills.map((s) => (
                    <span key={s} className="badge text-[10px] sm:text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specializations & Certifications */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-400 shrink-0" /> Certifications & Specializations
            </h3>

            <div className="rounded-2xl border border-white/10 bg-[#0c0e17] p-5 sm:p-7 lg:p-8 space-y-4">
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                Formal training and industry-recognized specialist credentials earned in Microsoft productivity, robotics microcontrollers, and modern web frameworks:
              </p>

              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-white">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Verified Credentials</span>
                <span className="font-mono text-blue-400">Active & Up-to-Date</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
