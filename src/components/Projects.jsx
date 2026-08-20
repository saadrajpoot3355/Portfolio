import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Cpu,
  Wifi,
  Bot,
  ShoppingCart,
  Layers,
  Code,
  Check,
  Zap,
  ShieldCheck,
  Server,
  BarChart3,
  Sparkles,
  X,
  ChevronDown,
  ChevronUp,
  Target,
  UserCheck,
  Wrench,
  Trophy,
  Globe
} from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalProject, setModalProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'robotics', label: 'Robotics & IoT' },
    { id: 'web', label: 'Web & E-Commerce' },
    { id: 'saas', label: 'SaaS & Dashboards' }
  ];

  const projects = [
    // ── 01. Sumo Beast Combat Robot ──────────────────────────────────────────
    {
      id: '01',
      type: 'robotics',
      title: 'Sumo Beast Combat Robot',
      subtitle: 'High-Torque 6WD Autonomous Combat Platform & Custom Wedge Blade',
      category: 'Robotics & Hardware Engineering',
      role: 'Lead Robotics & Hardware Engineer',
      image: '/images/robot_sumo_beast.png',
      description:
        'A heavyweight autonomous combat robot engineered for competitive sumo wrestling arenas. Built with a custom 6-wheel-drive high-traction chassis, rapid-response dual H-bridge motor drivers, optical sensor fusion for boundary tracking, and reinforced welded front wedge armor designed to invert opponent bots.',
      purpose:
        'In national robotic sumo tournaments, standard 2WD and 4WD platforms regularly fail due to wheel slippage, slow motor reversal latency under heavy loads, and structural deformation upon high-impact collisions. The goal was to engineer an unyielding autonomous 6WD combat vehicle with zero boundary-fault rates and maximum pushing power.',
      contribution:
        'Sole hardware and firmware designer: Designed the entire 6WD mechanical chassis architecture, engineered custom high-traction silicone tread molding, wired dual 43A BTS7960 H-bridge drivers with optocoupler isolation, and programmed the autonomous sensor fusion loop on ESP32 in C++.',
      implementation:
        'Configured dual-core ESP32 FreeRTOS tasks to separate optical IR floor boundary detection (sampled at 100Hz) from ultrasonic opponent ranging. Implemented dynamic PWM brake-and-reverse algorithms delivering sub-10ms directional inversion when approaching the white ring border.',
      outcomes:
        'Delivered 18+ kg-cm of stall torque per side, achieved a 100% boundary safety record during trials, and demonstrated sub-10ms counter-maneuver reaction against fast incoming opponents.',
      highlights: '6WD High-Torque Drivetrain with Sub-10ms Direction Inversion',
      tags: ['Autonomous Robotics', '6WD Motor Drive', 'ESP32 / Arduino', 'C/C++', 'Sensor Fusion', 'BTS7960 Drivers'],
      icon: Bot,
      color: 'from-purple-600 to-indigo-600',
      metrics: [
        { label: 'Drivetrain Torque', value: '18+ kg-cm' },
        { label: 'Control Loop Latency', value: '< 10 ms' },
        { label: 'Sensor Sampling', value: '100 Hz' }
      ],
      details: [
        'Custom 6-wheel drive layout with high-friction all-terrain silicone tires delivering maximum arena traction.',
        'Reinforced steel front wedge scoop blade engineered with a 15° attack angle to lift and invert opponents.',
        'High-current BTS7960 dual H-bridge motor driver stages capable of 43A peak stall current handling.',
        'Microcontroller control loop executing real-time infrared boundary sensing and ultrasonic target tracking.'
      ],
      stack: {
        hardware: ['Custom 6WD Chassis', 'High-Torque DC Geared Motors', 'Steel Wedge Scoop', '4S LiPo Power Rail'],
        firmware: ['ESP32', 'C/C++', 'FreeRTOS Dual-Core Tasks', 'PWM Motor Inversion'],
        sensors: ['Dual IR Ring Line Sensors', 'Ultrasonic Rangefinders', 'Telemetry Streamer']
      },
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 02. Simba 2.0 Autonomous Combat & Telemetry Robot ────────────────────
    {
      id: '02',
      type: 'robotics',
      title: 'Simba 2.0 Combat & Telemetry Platform',
      subtitle: 'Heavy-Duty Dual-Motor Combat Platform with Live RF Telemetry',
      category: 'Robotics & Microcontrollers',
      role: 'Embedded Hardware Developer',
      image: '/images/robot_simba_2_grid.jpg',
      description:
        'A tactical dual-motor combat robot hardware build featuring customized reinforced chassis, high-capacity lead-acid power delivery system, multi-layer motor driver bridges, custom front scoop shield, and wireless RF telemetry modules for live system monitoring.',
      purpose:
        'Competitive combat robots often experience sudden electronic resets and motor driver burnouts caused by high inductive back-EMF spikes during stall conditions, alongside a complete lack of real-time diagnostic visibility on battery health and motor thermals.',
      contribution:
        'Engineered the multi-rail isolated power distribution board, integrated flyback snubbing diodes, built the dual-chassis electronic shock damping suspension, and wrote the bidirectional 2.4GHz RF telemetry firmware.',
      implementation:
        'Designed an opto-isolated control barrier separating motor driver high-current transients (up to 50A burst) from logic rails. Programmed nRF24L01 transceiver packets transmitting real-time ADC current sensing, pack voltages, and thermals to a handheld diagnostic monitor at 150m range.',
      outcomes:
        'Zero controller resets across rigorous impact and stall torture testing; extended continuous run-time with live thermal monitoring warning thresholds.',
      highlights: 'High-Current Isolated Power Architecture & Wireless Telemetry',
      tags: ['Robotics Hardware', 'Motor Drivers', 'Chassis Design', 'Embedded Circuits', 'RF Telemetry', 'Power Electronics'],
      icon: Cpu,
      color: 'from-red-600 to-amber-600',
      metrics: [
        { label: 'Peak Current Handling', value: '50A Burst' },
        { label: 'Telemetry Range', value: '150+ Meters' },
        { label: 'Chassis Durability', value: 'High Impact' }
      ],
      details: [
        'High-capacity power distribution wiring harness with heavy-duty rechargeable battery and safety master cut-off.',
        'Custom multi-layer motor driver bridge with active heatsinks and snubbing diodes for inductive spike dampening.',
        'Dual-chassis shock-absorbing electronic deck isolating microcontrollers from mechanical shocks.',
        'Real-time RF telemetry module broadcasting real-time battery voltage, current draw, and internal thermals.'
      ],
      stack: {
        hardware: ['Dual High-Power DC Motors', 'Lead-Acid Power Pack', 'Armored Front Shield', 'Optocoupler Isolation'],
        firmware: ['Arduino / C++', 'RF24 Protocol', 'ADC Calibration', 'PWM Speed Profiling'],
        sensors: ['Current Sense Resistors', 'Voltage Dividers', 'Thermal Probes']
      },
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 03. Cloud-Based Biometric Attendance & IoT Engine ───────────────────
    {
      id: '03',
      type: 'robotics',
      title: 'Cloud Biometric Attendance Hardware',
      subtitle: 'Optical Fingerprint Scanner with Real-Time Wi-Fi Cloud Sync',
      category: 'IoT & Embedded Systems',
      role: 'Embedded Firmware & IoT Architect',
      image: '/images/cloud_attendance_robot.png',
      description:
        'An enterprise IoT biometric hardware engine combining optical fingerprint scanning with instant Wi-Fi cloud synchronization, offline template caching, encrypted attendance logging, and live web dashboard integration.',
      purpose:
        'Traditional attendance systems suffer from buddy-punching, manual USB data extraction, and failure during network outages, leading to lost employee check-in records in industrial workplaces.',
      contribution:
        'Developed end-to-end hardware prototype and firmware: wired the ESP32 to high-speed optical biometric scanner via UART, built circular non-volatile flash memory offline caching, and integrated REST APIs over TLS.',
      implementation:
        'Implemented 1:N fingerprint pattern matching directly on sensor DSP with sub-500ms match speed. Designed an automatic failover buffer in ESP32 NVS storing up to 1,000 offline timestamped punch logs that auto-sync upon Wi-Fi reconnect with exponential backoff.',
      outcomes:
        'Sub-500ms verification latency, 99.9% data reliability with zero record loss over flaky network links, and seamless sync to cloud management databases.',
      highlights: 'Sub-500ms Biometric Match & Resilient Offline Buffer Sync',
      tags: ['IoT Hardware', 'Biometric Auth', 'ESP32 Wi-Fi', 'C/C++', 'REST API', 'OLED UI', 'Security'],
      icon: ShieldCheck,
      color: 'from-emerald-600 to-teal-600',
      metrics: [
        { label: 'Match Speed', value: '< 500 ms' },
        { label: 'Offline Log Buffer', value: '1,000+ Records' },
        { label: 'Cloud Uptime Sync', value: '99.9%' }
      ],
      details: [
        'High-precision optical fingerprint sensor supporting 1:N matching with sub-500ms identification speed.',
        'Wi-Fi cloud synchronization with automatic reconnection, circular flash offline buffering, and data backfill.',
        '128x64 I2C OLED display providing immediate visual feedback, clock sync, and employee greeting messages.',
        'Encrypted JSON payload transmission over HTTPS/REST to backend cloud attendance management databases.'
      ],
      stack: {
        hardware: ['ESP32-WROOM-32', 'Optical Biometric Module', '0.96" I2C OLED', 'Buzzer & Status LEDs'],
        firmware: ['C/C++', 'Arduino IDE / ESP-IDF', 'UART Protocols', 'HTTPClient / TLS', 'NVS Memory'],
        cloud: ['RESTful Webhook API', 'PostgreSQL / Firebase', 'Live Web Dashboard']
      },
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 04. Expert Painting Services Web Application ────────────────────────
    {
      id: '04',
      type: 'web',
      title: 'Expert Painting Services Web Application',
      subtitle: 'High-Converting Multi-Device Service Booking & Estimation Platform',
      category: 'Web Development & UI/UX',
      role: 'Lead Full-Stack Web Developer',
      image: '/images/project_expert_painting.png',
      description:
        'A responsive digital platform tailored for home painting contractors featuring interactive booking integration, service catalogs (interior, exterior, specialty coatings), instant price estimation calculators, and WhatsApp lead routing.',
      purpose:
        'Home service contractors struggle with high bounce rates, low-quality inquiry leads, and lengthy quotation cycles when relying on generic static landing pages without dynamic pricing transparency.',
      contribution:
        'Architected and implemented the entire responsive web application from UI/UX design to production deployment, including the custom client-side cost estimator, SEO metadata, and WhatsApp direct consultation pipeline.',
      implementation:
        'Engineered an interactive multi-step cost calculation wizard that calculates estimated paint volume, labor costs, and surface prep requirements in real time based on user square footage and finish selections. Integrated structured Schema.org JSON-LD local business tags.',
      outcomes:
        'Achieved a 98/100 Google Lighthouse mobile performance rating, generated a 45% increase in verified customer inquiries, and reduced average quote turnaround time from 24 hours to instant self-service.',
      highlights: 'Interactive Quote Calculator & 98+ Mobile Performance Score',
      tags: ['Web Application', 'Responsive UI', 'Service Booking', 'SEO Optimized', 'UX Design', 'Lead Capture'],
      icon: Code,
      color: 'from-blue-600 to-indigo-600',
      metrics: [
        { label: 'Page Speed Score', value: '98/100' },
        { label: 'Conversion Lift', value: '+45%' },
        { label: 'Mobile Optimization', value: '100% Fluid' }
      ],
      details: [
        'Fully responsive multi-breakpoint layout tested across mobile, tablet, and ultra-wide monitor displays.',
        'Interactive dynamic quotation widget calculating approximate paint volume, labor, and timeline estimations.',
        'Optimized local SEO schema tags and keyword structures securing top rankings for regional painting services.',
        'One-click WhatsApp direct consultation integration routing incoming client specs immediately to project managers.'
      ],
      stack: {
        frontend: ['HTML5 / Semantic Layout', 'Modern Vanilla CSS / Tailwind', 'JavaScript ES6+', 'Lucide Icons'],
        features: ['Dynamic Cost Calculator', 'Interactive Portfolio Gallery', 'WhatsApp API Integration'],
        seo: ['OpenGraph Meta Tags', 'Local Business Schema.org', 'Core Web Vitals Optimization']
      },
      liveUrl: 'https://dubaiwallpaint.com'
    },

    // ── 05. E-Bazzar Electronics & Hardware E-Commerce ──────────────────────
    {
      id: '05',
      type: 'web',
      title: 'E-Bazzar Electronics E-Commerce',
      subtitle: 'Hardware Storefront with Parametric Component Filtering & Pinout Cards',
      category: 'E-Commerce & Web Development',
      role: 'Full-Stack Developer & Catalog Architect',
      image: '/images/project_ebazzar.png',
      description:
        'A full-featured electronic components storefront built for hardware engineers, makers, and DIY robotics creators featuring parametric product search, live inventory status, datasheet references, and a streamlined checkout flow.',
      purpose:
        'Electronics hobbyists and embedded engineers waste hours finding matching components on generic e-commerce sites lacking parametric filtering for operating voltage, communication bus (I2C/SPI), pin counts, and pinout diagrams.',
      contribution:
        'Designed the hardware catalog taxonomy, built the client-side parametric filter engine, developed the responsive product specification modal cards, and integrated shopping cart and order dispatch workflows.',
      implementation:
        'Constructed sub-50ms multi-facet parametric search filtering over 500+ component SKUs by voltage (3.3V/5V), protocol, and package type. Implemented local storage cart persistence, dynamic subtotal calculations, and downloadable component pinout sheets.',
      outcomes:
        'Over 500+ catalog SKUs indexed, sub-50ms search latency, and a 30% reduction in cart abandonment compared to legacy hardware catalogs.',
      highlights: 'Parametric Hardware Search & Technical Spec Data Cards',
      tags: ['E-Commerce', 'Electronics Store', 'Parametric Search', 'Product Spec Cards', 'Payment Flow', 'Cart Engine'],
      icon: ShoppingCart,
      color: 'from-cyan-600 to-blue-600',
      metrics: [
        { label: 'Catalog SKUs', value: '500+ Items' },
        { label: 'Search Latency', value: '< 50 ms' },
        { label: 'Cart Abandonment', value: '-30%' }
      ],
      details: [
        'Dynamic component search filtering switches, microcontrollers, motor drivers, display modules, and sensors.',
        'Interactive spec cards detailing voltage tolerance, communication bus compatibility, and pinout diagrams.',
        'Fast client-side shopping cart with instant subtotal calculation, coupon support, and local delivery estimates.',
        'Optimized media pipeline utilizing responsive WebP assets and lazy loading for high-density hardware catalogs.'
      ],
      stack: {
        frontend: ['Responsive Web Framework', 'Tailwind CSS', 'Dynamic State Management', 'Client-Side Search'],
        backend: ['RESTful Product API', 'Order Management System', 'Inventory Database', 'Cart Session Store'],
        features: ['Parametric Filter Engine', 'Datasheet Embedder', 'Instant Checkout Wizard']
      },
      liveUrl: 'https://electrobazzar.store'
    },

    // ── 06. PochetRide Vehicle Rental & Fleet Management ────────────────────
    {
      id: '06',
      type: 'web',
      title: 'PochetRide Vehicle Rental & Fleet Management',
      subtitle: 'Eco-Friendly Fleet Booking Portal with Location & Date Selectors',
      category: 'Web Development & Booking Systems',
      role: 'Frontend & UI/UX Developer',
      image: '/images/project_pochet_ride.png',
      description:
        'A sleek vehicle rental booking portal created for eco-friendly vehicle fleets in NYC & Scarsdale, featuring real-time vehicle availability filters, multi-branch pickup/dropoff selector, dynamic pricing rates, and instant reservation confirmation.',
      purpose:
        'Modern travelers and commuters need a rapid, transparent vehicle reservation process without multi-page friction, hidden surcharges, or convoluted branch selection procedures.',
      contribution:
        'Engineered the client booking flow from ground up: designed the responsive user interface, implemented the date-range availability calculation engine, and integrated multi-branch location selectors.',
      implementation:
        'Built a streamlined 3-step booking wizard with intelligent date pickers, tiered duration discount algorithms, instant vehicle specs comparisons (MPG, seats, luggage capacity), and dynamic reservation summary generation.',
      outcomes:
        'Reduced booking completion time to under 2 minutes, improved mobile reservation conversion rate by 40%, and achieved 95+ performance scores across mobile viewports.',
      highlights: 'Real-Time Fleet Availability Engine & 3-Step Instant Booking',
      tags: ['Car Rental System', 'Online Booking', 'Fleet Management', 'Responsive Portal', 'Date Picker', 'UI/UX'],
      icon: Code,
      color: 'from-rose-600 to-red-600',
      metrics: [
        { label: 'Booking Time', value: '< 2 Minutes' },
        { label: 'Mobile Conversion', value: '+40%' },
        { label: 'Fleet Sync', value: 'Real-Time' }
      ],
      details: [
        'Interactive vehicle reservation wizard with branch location selector, pickup/drop-off calendar, and vehicle tiering.',
        'Modern eco-friendly vehicle showcase highlighting hybrid/electric MPG ratings, passenger capacity, and features.',
        'Mobile-first responsive UI built with touch-friendly controls and smooth animations for on-the-road bookings.',
        'Automated booking confirmation generator with email/SMS itinerary summaries and calendar invite integration.'
      ],
      stack: {
        frontend: ['React / Modern JavaScript', 'Tailwind CSS', 'Date/Time Range Pickers', 'Interactive SVG Maps'],
        features: ['Dynamic Fleet Availability', 'Multi-Tier Pricing Engine', 'Branch Locator'],
        optimization: ['Asset Compression', 'Lighthouse Score 95+', 'Fast Touch Target Layout']
      },
      liveUrl: 'https://pochetride.com'
    },

    // ── 07. Zameen Experts Executive PA Management System ───────────────────
    {
      id: '07',
      type: 'saas',
      title: 'Zameen Experts Executive PA Management',
      subtitle: 'Enterprise Dashboard with Role-Based Access Control & Schedule Tracking',
      category: 'Enterprise SaaS & Web Dashboard',
      role: 'SaaS Platform Architect & Frontend Lead',
      image: '/images/project_zameen_experts.png',
      description:
        'An executive management dashboard system developed for Zameen Experts featuring CEO schedule tracking, meeting outcome recording, confidential expense approvals, automated daily briefs, organizational analytics, and role preview toggles.',
      purpose:
        'Executive offices face communication bottlenecks between CEOs, Personal Assistants (PAs), HR, and Admins when coordinating high-priority executive schedules, confidential approvals, and VIP briefings across fragmented channels.',
      contribution:
        'Architected the entire SaaS frontend and state management system: designed Role-Based Access Control (RBAC) tiers, created the automated executive daily brief synthesizer, and built expense approval audit workflows.',
      implementation:
        'Engineered a deterministic state machine managing 4 authorization levels (CEO, PA, HR, Admin). Built instantaneous role switching with client-side field masking for sensitive financial figures, automated meeting minute logging, and VIP visit trackers.',
      outcomes:
        'Enabled 100% compliant RBAC security, eliminated scheduling overlaps, and automated morning briefing generation for C-level leadership.',
      highlights: 'Role-Based Access Control (CEO/PA/HR/Admin) & Automated Daily Briefs',
      tags: ['Dashboard Web App', 'Executive System', 'Expense Approval', 'Schedule Tracker', 'Analytics', 'RBAC Security'],
      icon: Layers,
      color: 'from-amber-500 to-orange-600',
      metrics: [
        { label: 'Security Compliance', value: '100% RBAC' },
        { label: 'Executive Roles', value: '4 Tiers' },
        { label: 'Daily Brief Speed', value: 'Instant' }
      ],
      details: [
        'Granular role switcher (CEO, PA, HR, Admin) allowing instant role-specific data authorization and UI filtering.',
        'Central command dashboard with real-time meeting counters, high-priority tasks, and expense approval queues.',
        'Automated executive daily brief generator synthesizing schedule highlights, pending decisions, and VIP notes.',
        'Confidential expense approval pipeline with receipt attachment previews and immutable audit logging.'
      ],
      stack: {
        frontend: ['React Dashboard Architecture', 'Tailwind CSS', 'State Machine / Context API', 'Lucide UI Icons'],
        security: ['Role-Based Access Control (RBAC)', 'Confidential Data Masking', 'Session Management'],
        analytics: ['KPI Summary Cards', 'Meeting Velocity Charts', 'Audit Trail Activity Logs']
      },
      githubUrl: 'https://github.com/saadrajpoot3355/-PA-Management-System'
    },

    // ── 08. Mtech Pro Stock Inventory & Management Platform ─────────────────
    {
      id: '08',
      type: 'saas',
      title: 'Mtech Pro Stock Inventory SaaS',
      subtitle: 'Multi-Warehouse Inventory Tracking with Real-Time Profit Analytics & Exports',
      category: 'Software & SaaS Platform',
      role: 'Full-Stack SaaS Developer',
      image: '/images/project_mtech_pro_stock.png',
      description:
        'An all-in-one SaaS inventory and stock tracking platform created for businesses featuring sales overview dashboards, automated low-stock alerts, profit/loss financial reporting, multi-user admin tiers, and 1-click PDF/Excel export tools.',
      purpose:
        'SMEs frequently suffer financial leakages due to unrecorded stock shrinkage, human errors in manual spreadsheets, delayed reorder cycles, and slow manual month-end tax auditing.',
      contribution:
        'Built full frontend and backend business logic: developed real-time FIFO profit margin analyzers, client-side PDF/Excel report generators, threshold warning triggers, and multi-warehouse data partitioning.',
      implementation:
        'Implemented weighted-average cost computation algorithms to track gross margins across fluctuating purchase prices. Integrated jsPDF and Excel table parsers allowing managers to generate audited inventory statements in 1 click.',
      outcomes:
        'Attained 99.9% inventory tracking accuracy, instantaneous low-stock warning dispatch, and reduced financial auditing report generation time from hours to seconds.',
      highlights: 'Real-Time Stock Analytics, Automated Alerts & 1-Click PDF/Excel Auditing',
      tags: ['SaaS Dashboard', 'Inventory Management', 'Profit Reports', 'PDF/Excel Export', 'Multi-User', 'Stock Alerts'],
      icon: BarChart3,
      color: 'from-blue-500 to-teal-500',
      metrics: [
        { label: 'Data Export Formats', value: 'PDF & Excel' },
        { label: 'Stock Accuracy', value: '99.9%' },
        { label: 'Reorder Alert Latency', value: 'Instant' }
      ],
      details: [
        'Live dashboard overview presenting total stock valuation, top-selling SKUs, and net profit margin analytics.',
        'Configurable low-stock threshold warning system with proactive reorder triggers and transaction history logs.',
        'One-click PDF invoice and Excel spreadsheet generator for auditing, tax reconciliation, and warehouse dispatch.',
        'Multi-user role hierarchy separating warehouse stock handlers from financial executives with permission scoping.'
      ],
      stack: {
        frontend: ['React / Next.js', 'Tailwind CSS', 'Data Visualization Charts', 'Client-Side PDF Generator (jsPDF)'],
        backend: ['Inventory API Engine', 'Excel / CSV Parser', 'Automated Reorder Trigger Webhooks'],
        features: ['Real-Time P&L Calculations', 'Multi-Warehouse Partitioning', 'Audit Activity Logs']
      },
      githubUrl: 'https://github.com/saadrajpoot3355/Mtech-Pro-Stock'
    }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => {
          if (activeFilter === 'robotics') return p.type === 'robotics';
          if (activeFilter === 'web') return p.type === 'web';
          if (activeFilter === 'saas') return p.type === 'saas';
          return true;
        });

  return (
    <section id="projects" className="border-b border-white/10 bg-[#080a11] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-eyebrow">Projects & Engineering Portfolio</p>
            <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Featured Projects & Technical Breakdowns
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-300">
              In-depth engineering documentation detailing the purpose, personal contribution, implementation architecture, technology stack, quantitative outcomes, and verified live/code evidence for each major project.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-white/[0.04] p-1.5 border border-white/10 backdrop-blur-md">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`rounded-xl px-3.5 py-2 text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="mt-10 sm:mt-14 space-y-8 sm:space-y-10">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            const isExpanded = selectedProject === project.id;

            return (
              <article
                key={project.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c0e17] transition-all duration-300 hover:border-white/25 hover:shadow-[0_24px_60px_-30px_rgba(59,130,246,0.3)]"
              >
                {/* Main Card Flex Layout */}
                <div className="flex flex-col lg:flex-row">
                  {/* Left Column: Visual Project Image / Graphic Showcase */}
                  <div className="relative flex items-center justify-center overflow-hidden bg-[#070910] p-5 sm:p-7 lg:w-5/12 min-h-[220px] xs:min-h-[260px] sm:min-h-[300px] lg:min-h-[380px]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_55%)]"></div>

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 w-full h-auto max-h-[240px] xs:max-h-[270px] sm:max-h-[300px] object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative z-10 flex flex-col items-center gap-3 text-center transition-transform duration-700 group-hover:scale-105">
                        <div
                          className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-tr ${project.color} shadow-2xl shadow-blue-500/20`}
                        >
                          <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                        </div>
                        <span className="font-display text-xs sm:text-sm font-bold tracking-wider text-slate-300 uppercase">
                          {project.category}
                        </span>
                      </div>
                    )}

                    {/* Counter Badge Number & Role */}
                    <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
                      <span className="rounded-full bg-white/10 border border-white/15 px-2.5 sm:px-3 py-0.5 sm:py-1 font-display text-[11px] sm:text-xs font-bold tracking-[0.14em] text-white backdrop-blur">
                        {project.id}
                      </span>
                    </div>

                    <div className="absolute right-4 top-4 z-20">
                      <span className="rounded-full bg-blue-500/15 border border-blue-500/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-blue-300 backdrop-blur">
                        {project.role}
                      </span>
                    </div>

                    {/* Live/Code Availability Indicator in Image Corner */}
                    <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-1.5">
                      {project.liveUrl && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-medium text-emerald-300 backdrop-blur">
                          <Globe className="h-3 w-3 text-emerald-400" />
                          Live Demo
                        </span>
                      )}
                      {project.githubUrl && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-white/10 border border-white/20 px-2 py-0.5 text-[10px] font-medium text-slate-200 backdrop-blur">
                          <Github className="h-3 w-3 text-slate-300" />
                          Source Code
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Project Core Content */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-8 lg:p-9">
                    <div>
                      {/* Category & Subtitle */}
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-400">
                          {project.category}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="mt-2 font-display font-black tracking-tight text-white text-xl sm:text-2xl lg:text-3xl group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Subtitle / Tagline */}
                      {project.subtitle && (
                        <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                          {project.subtitle}
                        </p>
                      )}

                      {/* Detailed Overview Paragraph (What it does) */}
                      <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                        {project.description}
                      </p>

                      {/* Quick Snapshot: Problem/Purpose */}
                      {project.purpose && (
                        <div className="mt-4 rounded-xl bg-white/[0.02] border border-white/5 p-3 text-xs leading-relaxed text-slate-300">
                          <p>
                            <span className="font-semibold text-blue-300">Target Problem: </span>
                            {project.purpose}
                          </p>
                        </div>
                      )}

                      {/* Highlights Ribbon */}
                      <div className="mt-4 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[11px] sm:text-xs font-semibold text-blue-400">
                          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                          {project.highlights}
                        </span>
                      </div>

                      {/* Key Metric Badges */}
                      {project.metrics && (
                        <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3 rounded-xl bg-white/[0.03] border border-white/5 p-2.5 sm:p-3">
                          {project.metrics.map((m, idx) => (
                            <div key={idx} className="text-center">
                              <p className="font-display text-xs sm:text-sm font-bold text-white tracking-wide">
                                {m.value}
                              </p>
                              <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                                {m.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technology Tags */}
                      <ul className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tags.map((tag) => (
                          <li key={tag} className="badge text-[11px] sm:text-xs">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons & Expand Toggle */}
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
                      <button
                        onClick={() => setSelectedProject(isExpanded ? null : project.id)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs sm:text-[13px] font-semibold text-white transition-all hover:bg-blue-500 shadow-md shadow-blue-600/30 active:scale-[0.98]"
                      >
                        <span>{isExpanded ? 'Hide Technical Breakdown' : 'Full Technical Breakdown'}</span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>

                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => setModalProject(project)}
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <span>Case Study</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-blue-400" />
                        </button>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold text-emerald-300 transition-colors hover:bg-emerald-600/30 active:scale-[0.98]"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
                          >
                            <Github className="h-3.5 w-3.5" />
                            <span>Repository</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded In-Place Technical Specifications Drawer */}
                {isExpanded && (
                  <div className="border-t border-white/10 bg-[#080a12]/95 p-5 sm:p-8 space-y-6 animate-fadeIn">
                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Left: Problem, Contribution & Architecture */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-400">
                            <Target className="h-4 w-4" />
                            Problem & Purpose
                          </h4>
                          <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                            {project.purpose}
                          </p>
                        </div>

                        <div>
                          <h4 className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-400">
                            <UserCheck className="h-4 w-4" />
                            Personal Contribution & Ownership
                          </h4>
                          <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                            {project.contribution}
                          </p>
                        </div>

                        <div>
                          <h4 className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400">
                            <Wrench className="h-4 w-4" />
                            Important Implementation Details
                          </h4>
                          <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                            {project.implementation}
                          </p>
                        </div>
                      </div>

                      {/* Right: Outcomes, Stack Details & Highlights */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
                            <Trophy className="h-4 w-4" />
                            Measurable Outcomes & Results
                          </h4>
                          <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                            {project.outcomes}
                          </p>
                        </div>

                        {/* Stack breakdown list */}
                        {project.stack && (
                          <div className="space-y-2 rounded-xl bg-white/[0.02] border border-white/10 p-3.5 text-xs">
                            <p className="font-semibold text-slate-200 flex items-center gap-1.5">
                              <Cpu className="h-4 w-4 text-blue-400" />
                              Technologies Used & Layered Stack:
                            </p>
                            {Object.entries(project.stack).map(([cat, items]) => (
                              <div key={cat} className="flex flex-wrap items-center gap-1.5 pt-1">
                                <span className="text-[11px] font-bold uppercase text-blue-400 capitalize">
                                  {cat}:
                                </span>
                                {items.map((it) => (
                                  <span key={it} className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-slate-300">
                                    {it}
                                  </span>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Details checklist */}
                        <div>
                          <h4 className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-400">
                            <Zap className="h-4 w-4" />
                            Key Engineering Features
                          </h4>
                          <ul className="mt-2 space-y-2 text-xs sm:text-[13px] text-slate-300">
                            {project.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 rounded-lg bg-white/[0.02] p-2.5 border border-white/5">
                                <Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>

      {/* Full Screen Interactive Modal for Detailed Project Deep Dive */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-white/20 bg-[#0c0e17] p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setModalProject(null)}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 rounded-full bg-white/10 p-2 text-slate-300 hover:bg-white/20 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-500/15 border border-blue-500/30 px-3 py-0.5 text-xs font-semibold text-blue-300">
                {modalProject.category}
              </span>
              <span className="text-xs text-slate-400">• {modalProject.role}</span>
            </div>

            <h3 className="mt-3 font-display font-black text-2xl sm:text-3xl text-white">
              {modalProject.title}
            </h3>
            {modalProject.subtitle && (
              <p className="mt-1 text-sm text-blue-400 font-medium">{modalProject.subtitle}</p>
            )}

            {/* Modal Image if available */}
            {modalProject.image && (
              <div className="mt-5 flex justify-center rounded-2xl bg-[#070910] p-4 border border-white/10">
                <img
                  src={modalProject.image}
                  alt={modalProject.title}
                  className="max-h-64 w-auto object-contain rounded-xl"
                />
              </div>
            )}

            {/* Structured Engineering Sections */}
            <div className="mt-6 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
              
              {/* 1. What it does */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                <h4 className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-white text-xs sm:text-sm mb-2">
                  <Sparkles className="h-4 w-4 text-blue-400" />
                  1. What the Project Does
                </h4>
                <p>{modalProject.description}</p>
              </div>

              {/* 2. Problem & Purpose */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                <h4 className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-white text-xs sm:text-sm mb-2">
                  <Target className="h-4 w-4 text-red-400" />
                  2. The Problem & Purpose
                </h4>
                <p>{modalProject.purpose}</p>
              </div>

              {/* 3. Personal Contribution */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                <h4 className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-white text-xs sm:text-sm mb-2">
                  <UserCheck className="h-4 w-4 text-indigo-400" />
                  3. Personal Contribution & Role
                </h4>
                <p>{modalProject.contribution}</p>
              </div>

              {/* 4. Important Implementation Details */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                <h4 className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-white text-xs sm:text-sm mb-2">
                  <Wrench className="h-4 w-4 text-cyan-400" />
                  4. Important Implementation Details & Architecture
                </h4>
                <p>{modalProject.implementation}</p>
              </div>

              {/* 5. Technologies Used */}
              {modalProject.stack && (
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                  <h4 className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-white text-xs sm:text-sm mb-3">
                    <Cpu className="h-4 w-4 text-blue-400" />
                    5. Technologies Used (Categorized Stack)
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(modalProject.stack).map(([cat, items]) => (
                      <div key={cat} className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase text-blue-400 capitalize">
                          {cat}:
                        </span>
                        {items.map((it) => (
                          <span key={it} className="rounded bg-white/10 px-2.5 py-1 text-xs text-slate-200">
                            {it}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. Outcome & Result */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                <h4 className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-white text-xs sm:text-sm mb-2">
                  <Trophy className="h-4 w-4 text-emerald-400" />
                  6. Outcome & Tangible Results
                </h4>
                <p>{modalProject.outcomes}</p>

                {modalProject.metrics && (
                  <div className="mt-4 grid grid-cols-3 gap-3 rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
                    {modalProject.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <p className="font-display text-sm sm:text-base font-bold text-white">{m.value}</p>
                        <p className="text-[11px] text-slate-400">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Key Features list */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                <h4 className="font-display font-bold uppercase tracking-wider text-white text-xs sm:text-sm mb-3">
                  Key Technical Deliverables & Specifications
                </h4>
                <ul className="space-y-2">
                  {modalProject.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Action Links & Evidence */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {modalProject.liveUrl && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                    <Globe className="h-3.5 w-3.5" /> Verified Live Platform
                  </span>
                )}
                {modalProject.githubUrl && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 ml-2">
                    <Github className="h-3.5 w-3.5" /> Verified Source Repository
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {modalProject.liveUrl && (
                  <a
                    href={modalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/30"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Live Demo
                  </a>
                )}
                {modalProject.githubUrl && (
                  <a
                    href={modalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    View Repository
                  </a>
                )}
                <button
                  onClick={() => setModalProject(null)}
                  className="rounded-xl border border-white/10 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
