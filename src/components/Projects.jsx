import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Cpu, Layout, Bot, Check, Layers } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: '01',
      type: 'robotics',
      color: 'from-purple-600 to-indigo-600',
      details: [
        'Custom 6-wheel drive layout with high-friction all-terrain rubber tires.',
        'Reinforced steel front wedge scoop blade designed for wrestling opponent robots.',
        'ESP32 microcontroller motor control loop with rapid direction inversion.'
      ],
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: '02',
      type: 'robotics',
      title: 'Simba 2.0 Autonomous Combat & Telemetry Robot',
      category: 'Robotics & Microcontrollers',
      image: '/images/robot_simba_2_grid.jpg',
      description: 'A dual-motor combat robot hardware build featuring customized chassis, heavy-duty lead-acid power pack, motor driver bridges, custom front scoop shield, and telemetry modules.',
      highlights: 'Custom Dual-Motor Bridge & Heavy Power Circuit',
      tags: ['Robotics Hardware', 'Motor Drivers', 'Chassis Design', 'Embedded Circuits', 'Power Electronics'],
      icon: Cpu,
      color: 'from-red-600 to-amber-600',
      details: [
        'Custom high-capacity power distribution wiring with heavy-duty rechargeable battery.',
        'Integrated multi-layer motor driver board for precise speed and torque steering.',
        'Custom painted front scoop armor shield and top-mounted microcontroller bay.'
      ],
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    // ── Web Development ────────────────────────────────────────────────────
    {
      id: '03',
      type: 'web',
      title: 'Expert Painting Services Web Application',
      category: 'Web Development & UI/UX',
      image: '/images/project_expert_painting.png',
      description: 'A responsive digital platform tailored for home painting services with booking integration, service catalogs (interior & exterior), price estimation features, and multi-device preview UI.',
      highlights: 'Multi-Device Responsive Design & Quick Booking',
      tags: ['Web', 'Responsive UI', 'Service Booking', 'SEO Optimized', 'UX Design'],
      icon: Code,
      color: 'from-blue-600 to-indigo-600',
      details: [
        'Responsive layout optimized across desktop, tablet, and smartphone display standards.',
        'Interactive booking form enabling instant consultation requests.',
        'High-converting landing page showcasing specialized interior and exterior painting services.'
      ],
      liveUrl: 'https://dubaiwallpaint.com'
    },
    {
      id: '04',
      type: 'web',
      title: 'E-Bazzar Electronics & Hardware E-Commerce',
      category: 'E-Commerce & Web Development',
      image: '/images/project_ebazzar.png',
      description: 'A full-featured electronic components storefront built for hardware enthusiasts, engineers, and DIY creators featuring product categories, instant search, component specs, and secure checkout.',
      highlights: 'Electronics Catalog & Fast Component Search',
      tags: ['E-Commerce', 'Electronics Store', 'Parametric Search', 'Product Spec Cards'],
      icon: ShoppingCart,
      color: 'from-cyan-600 to-blue-600',
      details: [
        'Dynamic component search filtering switches, modules, microcontrollers, and sensors.',
        'Detailed product view cards complete with voltage ratings and pinout references.',
        'Optimized cart and checkout workflow for fast hardware procurement.'
      ],
      liveUrl: 'https://electrobazzar.store'
    },
    {
      id: '05',
      type: 'web',
      title: 'PochetRide Vehicle Rental & Fleet Management',
      category: 'Web Development & Booking Systems',
      image: '/images/project_pochet_ride.png',
      description: 'A car rental booking portal designed for eco-friendly vehicle fleets in NYC & Scarsdale, featuring vehicle filters, location pickup/dropoff selector, rates, and instant reservation processing.',
      highlights: 'Eco-Friendly Fleet Booking & Location Selector',
      tags: ['Car Rental System', 'Online Booking', 'Fleet Management', 'Responsive Portal', 'Web UI'],
      icon: Code,
      color: 'from-rose-600 to-red-600',
      details: [
        'Interactive vehicle reservation wizard with location, drop-off date, and model selection.',
        'Clean eco-vehicle showcase highlighting hybrid/electric rentals.',
        'Mobile-friendly responsive UI for seamless roadside rental booking.'
      ],
      liveUrl: 'https://pochetride.com'
    },
    // ── SaaS & Software Products ───────────────────────────────────────────
    {
      id: '06',
      type: 'saas',
      title: 'Zameen Experts Executive PA Management System',
      category: 'Enterprise SaaS & Web Dashboard',
      image: '/images/project_zameen_experts.png',
      description: 'An executive management dashboard system developed for Zameen Experts featuring CEO schedule tracking, meeting outcomes, expense approvals, daily briefs, analytics, and role previews.',
      highlights: 'Executive Dashboard & Role-Based Access Control',
      tags: ['Dashboard Web App', 'Executive System', 'Expense Approval', 'Schedule Tracker', 'Analytics'],
      icon: Layers,
      color: 'from-amber-500 to-orange-600',
      details: [
        'Role preview selector (CEO, PA, HR, Admin) with granular permission management.',
        'Central overview widgets for meetings, pending tasks, expense logs, and notifications.',
        'Automated daily brief generation and CEO availability status tracking.'
      ],
      githubUrl: 'https://github.com/saadrajpoot3355/-PA-Management-System'
    },
    {
      id: '07',
      type: 'saas',
      title: 'Mtech Pro Stock Inventory & Stock Management',
      category: 'Software & SaaS Platform',
      image: '/images/project_mtech_pro_stock.png',
      description: 'An all-in-one SaaS inventory and stock tracking platform created for businesses featuring sales overview dashboards, stock alerts, profit/loss reporting, multi-user admin access, and export tools.',
      highlights: 'Smart Analytics Dashboard & Stock Tracking',
      tags: ['SaaS Dashboard', 'Inventory Management', 'Profit Reports', 'PDF/Excel Export', 'Multi-User'],
      icon: Layers,
      color: 'from-blue-500 to-teal-500',
      details: [
        'Dashboard overview with real-time stock levels, total sales, and profit margin graphs.',
        'Low-stock warning system and detailed activity transaction history.',
        'PDF and Excel data export features for financial and inventory auditing.'
      ],
      githubUrl: 'https://github.com/saadrajpoot3355/Mtech-Pro-Stock'
    }
  ];

  return (
    <section id="projects" className="border-b border-white/10 bg-[#080a11] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div>
          <p className="section-eyebrow">Projects</p>
          <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-400">
            Featured robotics engineering, custom web applications, e-commerce platforms, and inventory SaaS management systems.
          </p>
        </div>

        {/* Featured Big Projects Stack (01, 02, 03) */}
        <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
          {projects.slice(0, 3).map((project, idx) => {
            const Icon = project.icon;
            return (
              <ScrollReveal key={project.id} delay={idx * 60}>
                <article
                  className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c0e17] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_24px_60px_-30px_rgba(59,130,246,0.3)] lg:flex-row"
                >
                  {/* Visual Cover Container */}
                  <div className="relative flex items-center justify-center overflow-hidden bg-[#070910] p-4 sm:p-6 lg:w-2/5 min-h-[200px] xs:min-h-[240px] sm:min-h-[280px] lg:min-h-[340px]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_55%)]"></div>

                    {/* Visual Project Image / Graphic */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 w-full h-auto max-h-[220px] xs:max-h-[260px] sm:max-h-[280px] object-contain rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative z-10 flex flex-col items-center gap-3 text-center transition-transform duration-700 group-hover:scale-105">
                        <div className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-tr ${project.color} shadow-2xl shadow-blue-500/20`}>
                          <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                        </div>
                        <span className="font-display text-xs sm:text-sm font-bold tracking-wider text-slate-300 uppercase">
                          {project.category}
                        </span>
                      </div>
                    )}

                    {/* Counter Badge Number */}
                    <span className="absolute left-3 top-3 sm:left-4 sm:top-4 z-20 rounded-full bg-white/10 border border-white/15 px-2.5 sm:px-3 py-0.5 sm:py-1 font-display text-[11px] sm:text-xs font-bold tracking-[0.14em] text-white backdrop-blur">
                      {project.id}
                    </span>
                  </div>

                  {/* Content Details */}
                  <div className="flex flex-1 flex-col p-5 sm:p-8 lg:p-10">
                    <h3 className="font-display font-bold tracking-tight text-white text-xl sm:text-2xl lg:text-3xl group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    <p className="mt-3.5 sm:mt-4 inline-flex w-fit rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[11px] sm:text-xs font-semibold text-blue-400">
                      ✨ {project.highlights}
                    </p>

                    {/* Tags */}
                    <ul className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="badge">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                      <button
                        onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-600 px-4 py-2.5 text-xs sm:text-[13px] font-semibold text-white transition-opacity hover:opacity-90 shadow-md shadow-blue-600/30 active:scale-[0.98]"
                      >
                        {selectedProject === project.id ? 'Hide Details' : 'View Specifications'}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                      {project.type === 'web' ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 px-4 py-2.5 text-xs sm:text-[13px] font-semibold text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Link
                        </a>
                      ) : (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 px-4 py-2.5 text-xs sm:text-[13px] font-semibold text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
                        >
                          <Github className="h-3.5 w-3.5" />
                          GitHub
                        </a>
                      )}
                    </div>

                    {/* Expanded Specifications Drawer */}
                    {selectedProject === project.id && (
                      <div className="mt-5 pt-5 border-t border-white/10 text-xs text-slate-300 space-y-2 animate-fadeIn">
                        <p className="font-display font-bold uppercase tracking-wider text-blue-400 text-[11px]">Technical Details & Architecture:</p>
                        <ul className="space-y-1.5">
                          {project.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Secondary Project Cards Grid (04, 05, 06, 07) */}
        <div className="mt-6 sm:mt-8 grid gap-5 sm:gap-6 md:grid-cols-2">
          {projects.slice(3).map((project, idx) => {
            const Icon = project.icon;
            return (
              <ScrollReveal key={project.id} delay={idx * 60}>
                <article
                  className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c0e17] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 p-5 sm:p-7"
                >
                  {project.image && (
                    <div className="relative mb-4 flex justify-center overflow-hidden rounded-xl bg-[#070910] p-3 sm:p-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="h-36 sm:h-44 w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/10 border border-white/15 px-2.5 py-0.5 font-display text-[11px] sm:text-xs font-bold tracking-[0.14em] text-white">
                      {project.id}
                    </span>
                    <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${project.color}`}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-display font-bold tracking-tight text-white text-lg sm:text-xl group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li key={tag} className="badge text-[10px] sm:text-[11px]">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    {project.type === 'web' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Link <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:underline"
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
