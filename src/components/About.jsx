import React from 'react';
import { Cpu, Award, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

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
    <section id="about" className="border-b border-white/10 bg-[#0a0c14] py-12 sm:py-16 lg:py-24 relative">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 px-4 sm:px-6 lg:px-8">

        {/* Left Bio Column */}
        <div>
          <p className="section-eyebrow">About Me</p>
          <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight text-white">
            Building intelligent systems where robotics meets modern web technology
          </h2>

          <div className="mt-4 sm:mt-6 space-y-4 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-300">
            <p>
              <strong>Muhammad Saad Atique (Saad Rajpoot)</strong> is a Robotics Intermediate,
              Embedded Firmware Developer, and Web Developer from Okara, Pakistan, with
              hands-on experience building robotics, embedded, IoT, and web-based solutions.
            </p>

            <p>
              His technical work combines <strong>Arduino, ESP32, C/C++, microcontrollers,
              sensors, IoT protocols, and embedded firmware</strong> with modern web
              development and custom WordPress solutions. He has developed practical
              projects including Sumo Wrestling robots, Robo Soccer, line-following
              systems, and other IoT and embedded applications.
            </p>

            <p>
              Alongside hardware and embedded development, Saad creates responsive,
              user-focused websites and digital solutions, with experience in WordPress,
              themes, plugins, website performance, and SEO. He is currently pursuing a{' '}
              <strong>BS in Artificial Intelligence at the University of Okara</strong>,
              continuously expanding his skills across AI, robotics, and software
              engineering.
            </p>
          </div>

          {/* Badges */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <li key={badge} className="badge">
                {badge}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Graphical Visual Column */}
        <div>
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] p-3 sm:p-6 backdrop-blur-sm">
            <div role="img" aria-label="Cloud Attendance Hardware System" className="relative min-h-[260px] xs:min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#080a11] p-3 sm:p-4 flex flex-col items-center justify-between border border-white/10">

              {/* Circuit Grid Backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>

              <div className="relative z-10 flex flex-col items-center gap-3 text-center h-full w-full justify-between py-1">
                <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-2xl bg-black/40 p-2 flex-1 flex items-center justify-center w-full">
                  <img
                    src="/images/cloud_attendance_robot.png"
                    alt="Cloud Attendance Hardware System"
                    className="max-h-[200px] xs:max-h-[240px] sm:max-h-[280px] w-auto max-w-full object-contain rounded-lg shadow-xl"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="font-display text-sm sm:text-base font-bold text-white tracking-wide">Saad Tech Hardware & Embedded Engine</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 max-w-sm">
                    Cloud Attendance System with fingerprint scanner, microcontroller circuit, & live web sync.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3 sm:mt-4 text-center text-[11px] sm:text-xs text-slate-400 px-2">
              Physical hardware integration — Microcontroller circuit, biometric sensors, & real-time embedded control systems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
