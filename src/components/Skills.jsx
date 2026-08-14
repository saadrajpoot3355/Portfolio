import React from 'react';
import { Cpu, Code, Layers, FileSpreadsheet, Bot, Wrench, Shield, Zap } from 'lucide-react';
import Reveal from './Reveal';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Robotics & Hardware Design',
      icon: Bot,
      skills: [
        'Robotics System Design',
        'Arduino Microcontrollers',
        'ESP8266 & ESP32',
        'Sensors & Actuators',
        'Motor Drivers & High-Torque Control',
        'Sumo & Autonomous Robots',
        'Circuit Diagramming & Pinouts'
      ]
    },
    {
      title: 'Embedded Systems & Firmware',
      icon: Cpu,
      skills: [
        'Embedded C / C++',
        'RTOS (Real-Time OS)',
        'UART / SPI / I2C Protocols',
        'ADC Signal Conversion',
        'Power Optimization',
        'MISRA-Compliant Firmware',
        'Microcontroller Debugging'
      ]
    },
    {
      title: 'Web Development & Custom UI',
      icon: Code,
      skills: [
        'HTML5 / CSS3 / JavaScript',
        'Full-Stack Web Architecture',
        'WordPress Custom Themes',
        'WordPress Custom Plugins',
        'Elementor & Page Builders',
        'Parametric E-Commerce Sites',
        'SEO & Page Speed Tuning'
      ]
    },
    {
      title: 'Microsoft Office Specialist',
      icon: FileSpreadsheet,
      skills: [
        'Microsoft Word (Advanced)',
        'Microsoft Excel Data Tools',
        'Microsoft Access Databases',
        'Technical Documentation',
        'Business Report Generation',
        'Integrated Office Tools'
      ]
    },
    {
      title: 'IoT & Smart Automation',
      icon: Zap,
      skills: [
        'Cloud Biometric Integration',
        'Wi-Fi Microcontroller Networks',
        'Real-Time IP Address Tracking',
        'Secure Hardware Data Sync',
        'Remote Sensor Dashboards'
      ]
    },
    {
      title: 'Development & Workflow',
      icon: Wrench,
      skills: [
        'Git & GitHub Version Control',
        'International Client Management',
        'Freelance Business Consulting',
        'Technical Problem Solving',
        'Clean Code Standards'
      ]
    }
  ];

  return (
    <section id="skills" className="border-b border-white/10 bg-[#0a0c14] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div>
            <p className="section-eyebrow">Skills</p>
            <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Tools and Techniques
            </h2>
            <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-400">
              Comprehensive hardware, software, microcontrollers, and web engineering skillsets.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={(idx % 3) * 70} threshold={0.1}>
                <div 
                  className="h-full rounded-2xl border border-white/10 bg-[#0c0e17] p-5 sm:p-6 transition-all duration-300 hover:border-white/25 hover:shadow-xl hover:shadow-blue-600/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-white">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="badge text-[11px] sm:text-xs">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
