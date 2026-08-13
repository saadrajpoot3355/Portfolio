import React from 'react';
import { Cpu, Code, Layers, FileSpreadsheet, Bot, Wrench, Shield, Zap } from 'lucide-react';

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
      title: 'Development & Professional Workflow',
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
    <section id="skills" className="border-b border-white/10 bg-[#0a0c14] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        <div>
          <p className="section-eyebrow">Skills</p>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tools and Techniques
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400">
            Comprehensive hardware, software, microcontrollers, and web engineering skillsets.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="h-full rounded-2xl border border-white/10 bg-[#0c0e17] p-6 transition-all duration-300 hover:border-white/25 hover:shadow-xl hover:shadow-blue-600/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="badge">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
