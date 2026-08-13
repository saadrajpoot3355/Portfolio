import React from 'react';
import { Layout, Bot, Cpu, FileSpreadsheet, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Full-Stack & Custom Web Development',
      icon: Layout,
      description: 'Creating high-performance, responsive websites, custom WordPress themes & plugins, and parametric e-commerce sites tuned for maximum speed, SEO, and user conversion.',
      points: ['Custom WordPress Theme & Plugin Dev', 'Responsive Mobile-First Interfaces', 'Page Speed & Technical SEO Tuning', 'E-Commerce & Parametric Filters']
    },
    {
      title: 'Robotics Design & Hardware Prototyping',
      icon: Bot,
      description: 'Designing intelligent robotic systems, autonomous Sumo cars, obstacle avoidance vehicles, and custom biometric IoT hardware with precision circuit wiring.',
      points: ['Arduino & ESP8266/ESP32 Microcontrollers', 'Sensor Fusion (Ultrasonic, IR, Biometric)', 'Autonomous Combat & Navigation Robots', 'Custom PCB & Breadboard Prototypes']
    },
    {
      title: 'Embedded Firmware & Microcontroller Programming',
      icon: Cpu,
      description: 'Writing low-latency, energy-efficient C/C++ and RTOS firmware for microcontroller hardware with protocol integrations (UART, SPI, I2C, ADC).',
      points: ['MISRA-Compliant Production Firmware', 'RTOS Real-Time Event Loops', 'Low Power Sleep State Management', 'Hardware Debugging & Testing']
    },
    {
      title: 'Microsoft Office & Business Automation Tools',
      icon: FileSpreadsheet,
      description: 'Leveraging certified Microsoft Specialist expertise in Word, Excel, and Access to build custom business templates, automated documentation, and integrated tools.',
      points: ['Advanced Excel & Access Databases', 'Professional Technical Documentation', 'Automated Business Templates', 'Workflow Optimization']
    }
  ];

  return (
    <section id="services" className="border-b border-white/10 bg-[#080a11] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div>
          <p className="section-eyebrow">Services</p>
          <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Specialized Services
          </h2>
          <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-400">
            End-to-end solutions spanning hardware engineering, embedded microcontrollers, and full-stack web applications.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c0e17] p-5 sm:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl hover:shadow-blue-600/10"
              >
                <div>
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="mt-4 sm:mt-6 font-display font-bold text-white text-lg sm:text-xl group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-xs text-slate-300">
                    {service.points.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ShieldCheck className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
                  >
                    Request Consultation <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
