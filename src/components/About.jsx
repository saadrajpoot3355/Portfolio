import React from 'react';
import { Cpu, GraduationCap, Award, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  const badges = [
    'Robotics Design',
    'Arduino & ESP32',
    'Embedded C / RTOS',
    'Full-Stack Web Dev',
    'WordPress Themes & Plugins',
    'Microsoft Office Specialist',
  ];

  return (
    <section id="about" className="border-b border-white/10 bg-[#0a0c14] py-24 lg:py-32 relative">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        
        {/* Left Bio Column */}
        <div>
          <p className="section-eyebrow">About</p>
          <h2 className="mt-4 font-display text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Blending physical robotics with modern web engineering
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-300">
            <p>
              <strong>Muhammad Saad Atique (Saad Rajpoot)</strong> is an experienced Robotics Specialist, Embedded Developer, and Web Developer based in Pakistan, collaborating with clients internationally since 2022.
            </p>
            <p>
              His core focus spans designing intelligent machines, microcontrollers (Arduino, ESP8266/ESP32), sensors, and firmware design alongside creating modern, responsive full-stack websites and custom WordPress solutions.
            </p>
            <p>
              As a certified Microsoft Office Specialist, Saad leverages advanced workflow automation and documentation tools to deliver complete hardware-to-software solutions for businesses and international clients.
            </p>
          </div>

          {/* Badges */}
          <ul className="mt-7 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <li key={badge} className="badge">
                {badge}
              </li>
            ))}
          </ul>

          {/* Featured Highlights Card */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#0f121d] p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="section-eyebrow">Education</p>
                <h3 className="font-display text-lg font-bold text-white">FSc in Computer Science (ICS)</h3>
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-400">Punjab Group of Colleges (Feb 2022 - Jun 2024)</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-blue-400">Completed with Distinction</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Intermediate studies in computer science, establishing deep foundational expertise in programming, data structures, and computer organization.
            </p>
          </div>
        </div>

        {/* Right Graphical Visual Column */}
        <div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4 sm:p-8 backdrop-blur-sm">
            <div role="img" aria-label="Cloud Attendance Hardware System" className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-[#080a11] p-4 sm:h-[380px] lg:h-[420px] flex flex-col items-center justify-center border border-white/10">
              
              {/* Circuit Grid Backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-3 text-center h-full w-full justify-between py-2">
                <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-2xl bg-black/40 p-2 flex-1 flex items-center justify-center">
                  <img 
                    src="/images/cloud_attendance_robot.png" 
                    alt="Cloud Attendance Hardware System" 
                    className="max-h-[260px] w-auto object-contain rounded-lg shadow-xl"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="font-display text-base font-bold text-white tracking-wide">Saad Tech Hardware & Embedded Engine</h4>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Cloud Attendance System with fingerprint scanner, microcontroller circuit, & live web sync.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Physical hardware integration — Microcontroller circuit, biometric sensors, & real-time embedded control systems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
