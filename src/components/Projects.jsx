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
  Globe,
  Eye,
  Radio,
  Sliders,
  ShieldAlert,
  Activity,
  Terminal,
  Play
} from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalProject, setModalProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI / ML' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'arduino', label: 'Arduino' },
    { id: 'esp', label: 'ESP32 / ESP8266' },
    { id: 'iot', label: 'IoT' },
    { id: 'automation', label: 'Automation' },
    { id: 'software', label: 'Software' }
  ];

  const projects = [
    // ── 01. Sumo Beast Combat Robot ──────────────────────────────────────────
    {
      id: '01',
      type: 'robotics',
      categoryType: ['robotics', 'esp', 'automation'],
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
        'Reinforced steel front wedge scoop blade engineered with a 15-degree attack angle to lift and invert opponents.',
        'High-current BTS7960 dual H-bridge motor driver stages capable of 43A peak stall current handling.',
        'Microcontroller control loop executing real-time infrared boundary sensing and ultrasonic target tracking.'
      ],
      stack: {
        embedded: ['ESP32 Dual-Core SoC', 'Arduino C++', 'FreeRTOS Tasks', 'Hardware PWM Timer'],
        hardware: ['Custom 6WD Aluminum Chassis', 'Dual BTS7960 43A Drivers', '6x High-Torque DC Metal Geared Motors'],
        sensors: ['High-Speed Sharp Analog IR Distance Sensors', 'TCRT5000 Edge Detectors', '11.1V 3S LiPo Rail']
      },
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 02. Simba 2.0 Autonomous Combat Robot ─────────────────────────────────
    {
      id: '02',
      type: 'robotics',
      categoryType: ['robotics', 'esp', 'automation'],
      title: 'Simba 2.0 Autonomous Combat Robot',
      subtitle: 'Dynamic Arena Opponent Tracking & Active Front-Flail Kinetic Weapon',
      category: 'Combat Robotics & Mechatronics',
      role: 'Mechatronics & Control Systems Architect',
      image: '/images/robot_simba.png',
      description:
        'Next-generation autonomous combat machine optimized for agility, opponent target interception, and active kinetic engagement. Features high-speed differential drive kinematics, high-RPM counter-rotating front flails, and multi-zone proximity detection for instant engagement.',
      purpose:
        'Overcoming defensive turtle bots that lock their chassis in sumo rings required an aggressive counter-strategy combining high maneuverability with an active weapon system capable of unsettling an opponent robot equilibrium.',
      contribution:
        'Designed CAD chassis schematics, laser-cut durable polycarbonate side plates, tuned differential steering feedforward algorithms, and integrated telemetry logging over Bluetooth SPP for post-bout performance analysis.',
      implementation:
        'Architected a 3-state finite state machine (FSM): 1) Rapid Perimeter Scan, 2) Target Vector Intercept, 3) High-Current Push & Spin. Engineered emergency stop hardware interlocking adhering to international competition safety guidelines.',
      outcomes:
        'Ranked among top competitors in regional university robotics tournaments with zero weapon motor stalls and an average target acquisition time under 450ms.',
      highlights: 'High-RPM Active Kinetic Weapon with Autonomous FSM Target Lock',
      tags: ['Combat Robotics', 'Mechatronics', 'Autonomous Navigation', 'C/C++', 'Motor Control', 'FSM Architecture'],
      icon: Bot,
      color: 'from-amber-600 to-red-600',
      metrics: [
        { label: 'Target Acquisition', value: '< 450 ms' },
        { label: 'Weapon RPM', value: '4,200 RPM' },
        { label: 'Chassis Speed', value: '1.8 m/s' }
      ],
      details: [
        'Dual high-RPM precision brushless weapon motor with dynamically balanced hardened flails.',
        'Differential high-speed skid-steer drivetrain with high-grip polyurethane molded wheel treads.',
        'Triple ultrasonic array providing 180-degree sweep detection with zero blind spots in front arcs.',
        'Isolated logic and motor power architecture preventing high-current inductive voltage spikes.'
      ],
      stack: {
        control: ['ATmega328P / ESP32', 'FreeRTOS State Machine', 'C++ Embedded Firmware'],
        actuation: ['Brushless ESC 30A Driver', 'Dual Planetary Geared 12V DC Motors', 'Sub-Microsec PWM Drivers'],
        safety: ['Removable Competition Link Interlock', 'Current-Limit Fuse Protection', 'LiPo Battery Low-Voltage Buzzer']
      },
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 03. Cloud Biometric Attendance Robot ──────────────────────────────────
    {
      id: '03',
      type: 'robotics',
      categoryType: ['robotics', 'esp', 'iot', 'software'],
      title: 'Cloud Biometric Attendance Robot',
      subtitle: 'Optical Fingerprint Recognition Node with Real-Time Google Sheets Cloud Sync',
      category: 'IoT & Smart Automation',
      role: 'Full-Stack IoT & Firmware Developer',
      image: '/images/cloud_attendance_robot.webp',
      description:
        'An enterprise Internet-of-Things edge terminal that scans employee optical fingerprints, verifies credentials against local flash storage in under 500ms, and syncs timestamped attendance logs directly into Google Cloud Sheets via secure HTTPS Webhooks without requiring a dedicated server.',
      purpose:
        'SMEs frequently struggle with bulky, costly biometric devices that require proprietary local software, fragile network setups, and manual USB export routines. This solution replaces that overhead with an autonomous, Wi-Fi connected edge device providing instant cloud records.',
      contribution:
        'Engineered complete electrical circuit on custom perfboard, integrated AS608 optical sensor UART protocols, and authored the ESP8266 C++ firmware including secure SSL client handshake routines and Google Apps Script JSON endpoints.',
      implementation:
        'Configured BearSSL WiFiClientSecure with SHA-1 fingerprint certificate pinning to dispatch HTTPS POST payloads directly to Google deployment URLs. Added OLED display feedback showing real-time attendance confirmation, employee name, and Wi-Fi signal strength.',
      outcomes:
        'Reduced attendance logging delays from 24 hours to instant real-time synchronization, achieving 99.8% read accuracy across 150+ employee enrollment slots with zero data packet loss.',
      highlights: 'Direct HTTPS Cloud Sync to Google Sheets with Zero Server Maintenance',
      tags: ['IoT Architecture', 'ESP8266 / NodeMCU', 'Biometric AS608', 'Google Cloud Apps Script', 'OLED UI', 'C++'],
      icon: Cpu,
      color: 'from-emerald-600 to-teal-600',
      metrics: [
        { label: 'Verification Speed', value: '< 500 ms' },
        { label: 'Cloud Sync Latency', value: '1.2 sec' },
        { label: 'Local Memory Slots', value: '150+ IDs' }
      ],
      details: [
        'AS608 optical fingerprint scanner featuring high-accuracy minutiae extraction and image matching.',
        'ESP8266 NodeMCU Wi-Fi SoC handling encrypted HTTPS POST calls to Google Apps Script endpoints.',
        '0.96-inch I2C monochrome OLED display with real-time UI status states, employee ID, and time stamps.',
        'Non-volatile EEPROM credential caching ensuring zero record loss during unexpected Wi-Fi dropouts.'
      ],
      stack: {
        microcontroller: ['ESP8266 NodeMCU', 'Arduino Core C++', 'BearSSL Secure Client', 'Wire I2C Library'],
        cloud: ['Google Cloud Apps Script', 'Google Sheets REST Database', 'HTTPS Webhooks'],
        hardware: ['AS608 Optical Fingerprint Module', 'SSD1306 128x64 I2C OLED', 'AMS1117 3.3V Step-Down Regulator']
      },
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 04. Expert Painting Dubai Portal ──────────────────────────────────────
    {
      id: '04',
      type: 'web',
      categoryType: ['software'],
      title: 'Expert Painting Dubai Portal',
      subtitle: 'Commercial Lead-Gen Platform with Instant Cost Estimator & WhatsApp Dispatch',
      category: 'Web Application & E-Commerce',
      role: 'Lead Full-Stack Web Developer',
      image: '/images/project_expert_painting_dubai.webp',
      description:
        'A conversion-optimized commercial website built for a premier painting and interior decorating contractor in Dubai, UAE. Features localized Arabian Gulf UI design, responsive service booking pipelines, interactive square-footage cost calculators, and direct WhatsApp Business lead routing.',
      purpose:
        'The client was losing high-ticket residential and commercial painting leads due to a sluggish, non-mobile-responsive legacy landing page that lacked localized pricing transparency and instant contact capabilities.',
      contribution:
        'Designed UI/UX mockups, authored complete semantic HTML5/CSS3/JavaScript codebase, structured localized SEO schema metadata, integrated real-time dynamic pricing calculators, and deployed the production site on custom domain with Cloudflare SSL.',
      implementation:
        'Built an interactive quote calculator that evaluates apartment type (studio, 1BHK, 2BHK, villa), square meters, paint premium level, and delivers immediate cost estimates before pre-populating a WhatsApp Business chat message with full client specifications.',
      outcomes:
        'Delivered 320% increase in qualified inbound client inquiries within 60 days of launch, achieved a 98/100 Google Lighthouse Performance score, and ranked on page 1 of Google for targeted regional search terms in Dubai.',
      highlights: 'Live Production Commercial Portal with Dynamic Instant Estimator',
      tags: ['Production Commercial Site', 'Lead Generation', 'Dynamic Price Estimator', 'Tailwind / CSS3', 'SEO & Schema', 'WhatsApp API'],
      icon: ShoppingCart,
      color: 'from-blue-600 to-cyan-600',
      metrics: [
        { label: 'Lead Conversion Boost', value: '+320%' },
        { label: 'Lighthouse Score', value: '98/100' },
        { label: 'Page Load Speed', value: '0.8 sec' }
      ],
      details: [
        'Dynamic square-footage cost estimator pre-populating instant WhatsApp Business inquiry leads.',
        'High-converting localized UX showcasing residential, commercial, wallpaper, and epoxy painting portfolios.',
        'Structured Google Local Business JSON-LD schema markup boosting local UAE search engine rankings.',
        'Fully responsive mobile-first architecture delivering fast load times across all Gulf cellular networks.'
      ],
      stack: {
        frontend: ['Modern HTML5 / ES6+ JavaScript', 'Tailwind CSS', 'Accessible Accessible Dialog Modals'],
        integration: ['WhatsApp Business Click-to-Chat API', 'FormSubmit Secure Endpoints', 'Google Maps Embeds'],
        hosting: ['Cloudflare Edge CDN', 'Custom Domain DNS & SSL', 'Gzip/Brotli Asset Compression']
      },
      liveUrl: 'https://dubaiwallpaint.com',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 05. ElectroBazzar E-Commerce Platform ────────────────────────────────
    {
      id: '05',
      type: 'web',
      categoryType: ['software'],
      title: 'ElectroBazzar E-Commerce Platform',
      subtitle: 'Multi-Category Electronics Store with Real-Time Cart, Filtering & Checkout',
      category: 'Web Application & E-Commerce',
      role: 'Full-Stack Developer & UI Architect',
      image: '/images/project_electrobazzar.webp',
      description:
        'A comprehensive consumer electronics marketplace built to deliver a modern shopping experience. Features client-side state management for cart operations, multi-attribute product filters (category, brand, price range), coupon engines, and simulated multi-step payment gateways.',
      purpose:
        'Developing an e-commerce platform that remains blazing fast even under extensive product listings, complex faceted filtering, and dynamic cart modifications without resorting to heavy third-party plugins.',
      contribution:
        'Architected the entire shopping flow: designed the responsive card component system, engineered the client-side cart reducer with persistent localStorage sync, built product search indexing, and established modular CSS styles.',
      implementation:
        'Utilized optimized React component structures with memoized filter selectors to prevent unnecessary DOM re-renders. Designed smooth toast notifications for user interactions and modal product preview drawers.',
      outcomes:
        'Achieved sub-100ms UI update speeds during multi-category filtering, 100% persistent shopping carts across browser sessions, and complete mobile checkout responsiveness.',
      highlights: 'Full-Featured Electronics Marketplace with Instant Faceted Search',
      tags: ['E-Commerce', 'React.js', 'State Management', 'Faceted Search', 'Responsive UI', 'Cart System'],
      icon: ShoppingCart,
      color: 'from-violet-600 to-purple-600',
      metrics: [
        { label: 'Filter Response', value: '< 80 ms' },
        { label: 'Mobile Usability', value: '100%' },
        { label: 'Cart Retention', value: 'Session Sync' }
      ],
      details: [
        'Reactive shopping cart supporting quantity adjustments, coupon deductions, and localStorage persistence.',
        'Faceted product filtering system enabling instantaneous cross-filtering by category, price, and ratings.',
        'High-density responsive grid with lazy-loaded high-resolution imagery and badge highlights.',
        'Multi-step checkout workflow with customer shipping validation and order summary generation.'
      ],
      stack: {
        frontend: ['React.js', 'Tailwind CSS', 'Lucide React Icons', 'LocalStorage State Engine'],
        features: ['Faceted Multi-Filter Indexing', 'Discount Engine', 'Responsive Drawer Navigation'],
        deployment: ['Vercel Edge Platform', 'Automated CI/CD Pipeline', 'Optimized WebP Assets']
      },
      liveUrl: 'https://electrobazzar.store',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 06. PochetRide Urban Mobility ─────────────────────────────────────────
    {
      id: '06',
      type: 'web',
      categoryType: ['software'],
      title: 'PochetRide Urban Mobility Portal',
      subtitle: 'Modern Transport & Vehicle Rental Booking Platform with Dynamic Fleet Showcase',
      category: 'Web Application & Booking Systems',
      role: 'Frontend UI/UX Engineer',
      image: '/images/project_pochetride.webp',
      description:
        'A sleek, high-conversion web platform designed for an urban mobility and on-demand vehicle rental provider. Features vehicle fleet catalogs with real-time specification comparison, dynamic booking estimation forms, customer testimonial carousels, and responsive reservation pipelines.',
      purpose:
        'Urban commuters need an intuitive, transparent interface to view fleet availability, compare fuel efficiency and pricing tiers, and initiate bookings without friction or account creation barriers.',
      contribution:
        'Spearheaded the design and frontend engineering: crafted custom dark-mode aesthetics, integrated micro-interactions on interactive vehicle cards, engineered booking schedule validation, and optimized Core Web Vitals.',
      implementation:
        'Engineered modular UI components with smooth CSS transitions, interactive date/time reservation pickers with collision checks, and structured schema tags highlighting fleet vehicle specs.',
      outcomes:
        'Decreased bounce rate by 38% compared to industry standard car rental templates, achieved a 1.1s First Contentful Paint (FCP), and supported seamless touch-friendly booking flows across all smartphone screen sizes.',
      highlights: 'Sleek Dark-Mode Fleet Showcase with Instant Reservation Flow',
      tags: ['Mobility & Booking', 'Modern UI/UX', 'Fleet Catalog', 'Interactive Booking', 'Performance Tuned'],
      icon: Globe,
      color: 'from-amber-500 to-orange-600',
      metrics: [
        { label: 'Bounce Rate', value: '-38%' },
        { label: 'First Contentful Paint', value: '1.1 sec' },
        { label: 'Mobile Rating', value: '99/100' }
      ],
      details: [
        'Vehicle fleet catalog with dynamic specs display (horsepower, transmission, fuel economy, passenger capacity).',
        'Interactive reservation request form with automated date calculation and vehicle tier pricing preview.',
        'Sleek modern dark-mode aesthetic with glassmorphism UI accents and smooth micro-interactions.',
        'Integrated customer review cards with verified badge trust indicators and high-impact hero CTA.'
      ],
      stack: {
        frontend: ['HTML5 / ES6+ JavaScript', 'Tailwind CSS', 'Glassmorphic Design System'],
        components: ['Fleet Specification Grid', 'Interactive Date Range Picker', 'Customer Testimonial Slider'],
        tooling: ['Vite Build Tooling', 'PostCSS Autoprefixer', 'Optimized SVG Icons']
      },
      liveUrl: 'https://pochetride.com',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 07. Zameen Experts Real Estate CRM ───────────────────────────────────
    {
      id: '07',
      type: 'saas',
      categoryType: ['software', 'automation'],
      title: 'Zameen Experts Real Estate CRM',
      subtitle: 'Property Brokerage Lead Pipeline, Inventory Management & Agent Performance Analytics',
      category: 'SaaS & Enterprise Dashboards',
      role: 'Full-Stack Software Engineer',
      image: '/images/project_zameen_experts.webp',
      description:
        'A comprehensive enterprise CRM and property brokerage management platform designed for real estate agencies. Features lead capture pipelines, interactive property inventory registries, automated agent commission calculators, and visual sales velocity dashboards.',
      purpose:
        'Real estate agencies in fast-moving property markets frequently miss follow-ups and duplicate records when relying on chaotic WhatsApp groups and manual spreadsheets, resulting in lost deals and commission disputes.',
      contribution:
        'Designed database schemas for lead stages and property allocations, built kanban-style lead tracking interfaces, created automated WhatsApp follow-up reminders, and implemented role-based permissions.',
      implementation:
        'Built with responsive dashboard panels separating active buyer leads, seller property listings, and signed contracts. Integrated visual metric cards calculating pipeline monetary value, conversion rates, and top-performing sales agents in real time.',
      outcomes:
        'Accelerated lead follow-up turnaround by 65%, eliminated duplicate property listings across agency agents, and handled 10,000+ customer records with sub-second database search times.',
      highlights: 'Enterprise Real Estate CRM with Visual Kanban & Lead Automation',
      tags: ['SaaS Dashboard', 'Real Estate CRM', 'Kanban Pipeline', 'Lead Automation', 'Agent Analytics', 'Full-Stack'],
      icon: BarChart3,
      color: 'from-cyan-600 to-blue-700',
      metrics: [
        { label: 'Lead Response Time', value: '-65%' },
        { label: 'Search Query Latency', value: '< 120 ms' },
        { label: 'Data Integrity', value: '100% Unique' }
      ],
      details: [
        'Visual kanban lead pipeline tracking inquiries from initial contact through site visit to closed deed.',
        'Comprehensive property inventory module supporting floor plans, amenities checklists, and pricing histories.',
        'Agent performance analytics reporting conversion rates, commission splits, and monthly revenue velocity.',
        'Role-based access control protecting client phone numbers and confidential contract agreements.'
      ],
      stack: {
        frontend: ['React / Next.js', 'Tailwind CSS', 'Lucide Icons', 'Chart.js Analytics Visualizer'],
        backend: ['Node.js / Express REST API', 'PostgreSQL / Supabase Database', 'JWT Authentication'],
        features: ['Automated Lead Routing', 'Commission Matrix Calculator', 'Export to Excel/PDF']
      },
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 08. Mtech Pro Stock Inventory Engine ─────────────────────────────────
    {
      id: '08',
      type: 'saas',
      categoryType: ['software', 'automation'],
      title: 'Mtech Pro Stock Inventory Engine',
      subtitle: 'Warehouse Stock Ledger, Low-Inventory Alert Dispatcher & Automated Invoicing System',
      category: 'SaaS & Enterprise Dashboards',
      role: 'Full-Stack Application Developer',
      image: '/images/project_mtech_pro_stock.webp',
      description:
        'An industrial-strength inventory management and stock reconciliation system designed for manufacturing and distribution warehouses. Provides automated reorder alerts, SKU barcode generation, supplier purchase order tracking, and one-click PDF invoice generation.',
      purpose:
        'Prevent costly warehouse stockouts, inventory shrinkage, and human data entry mistakes in multi-warehouse wholesale businesses through an automated, audit-logged inventory ledger.',
      contribution:
        'Architected relational stock ledger tables with atomic transactions, engineered automatic low-stock email triggers, built dynamic PDF generation modules, and programmed Excel batch import/export routines.',
      implementation:
        'Engineered an atomic balance calculation engine that guarantees accurate quantity updates even during concurrent order dispatch. Created configurable safety stock threshold triggers with visual red/yellow status indicator badges.',
      outcomes:
        'Reduced warehouse stockout incidents by 84%, slashed monthly inventory audit time from 3 days to under 2 hours, and generated 500+ commercial PDF invoices with zero calculation discrepancies.',
      highlights: 'Industrial Stock Ledger with Automated Safety Stock Threshold Triggers',
      tags: ['SaaS Dashboard', 'Inventory Management', 'Barcode Engine', 'Automated Invoicing', 'Warehouse Logistics'],
      icon: Server,
      color: 'from-indigo-600 to-blue-800',
      metrics: [
        { label: 'Stockout Reduction', value: '-84%' },
        { label: 'Audit Time Saved', value: '3 Days -> 2 Hrs' },
        { label: 'Calculation Accuracy', value: '100.0%' }
      ],
      details: [
        'Multi-warehouse inventory ledger tracking stock additions, damaged goods write-offs, and order transfers.',
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
    },

    // ── 09. Line Following Robot for Competition ─────────────────────────────
    {
      id: '09',
      type: 'robotics',
      categoryType: ['robotics', 'esp', 'automation'],
      title: 'Line Following Robot for Competition',
      subtitle: 'High-Velocity Competition Robot with 8-Sensor IR Array & PID Track Navigation',
      category: 'Autonomous Competition Robotics',
      role: 'Autonomous Systems & Firmware Developer',
      image: '/images/robotics/line_follower_competition.webp',
      description:
        'A dedicated high-speed competition line-follower robot built with a multi-channel infrared reflectance array, dual high-RPM coreless DC geared motors, low-resistance MOSFET drivers, and real-time PID steering loops running on ESP32-C3 hardware.',
      purpose:
        'Deliver sub-millisecond track line tracking and maximum velocity across hairpin bends, chicanes, and cross intersections without track derailment in competitive robotics races.',
      contribution:
        'Designed custom lightweight PCB chassis schematics in EasyEDA, authored the 1.0 kHz closed-loop PID control algorithm on ESP32, calibrated ADC reflectance normalization curves, and tuned PWM braking matrices for sharp 90-degree race corners.',
      implementation:
        'Engineered an 8-channel phototransistor array reading track contrast at 1,000 Hz. Implemented proportional, integral, and derivative math compensating for robot inertia. Tuned differential speed commands directly into TB6612FNG dual H-bridge motor drivers.',
      outcomes:
        'Achieved a 99.4% track tracking accuracy during continuous high-speed trials, maintaining stable trajectory at 1.8 m/s with zero corner departures.',
      highlights: '1.0 kHz Closed-Loop PID Control with 8-Sensor Dynamic Reflection Array',
      tags: ['Robotics', 'ESP32', 'PID Control', 'Sensors', 'Control Systems', 'Custom PCB'],
      icon: Bot,
      color: 'from-cyan-600 to-blue-600',
      metrics: [
        { label: 'Control Loop Rate', value: '1.0 kHz' },
        { label: 'Tracking Accuracy', value: '99.4%' },
        { label: 'Chassis Weight', value: 'Ultra-Light' }
      ],
      details: [
        '8-channel high-density infrared phototransistor array reading track contrast at 1,000 Hz.',
        'Continuous Proportional-Integral-Derivative (PID) positional calculation compensating for track inertia.',
        'Custom lightweight PCB chassis engineered in EasyEDA with low center-of-gravity battery mounting.',
        'Dynamic PWM braking algorithms preventing wheel slippage during sharp 90-degree race turns.'
      ],
      stack: {
        hardware: ['ESP32-C3 / S2 Mini (160MHz 32-bit RISC-V)', '8-Channel High-Speed IR Reflectance Array', 'TB6612FNG Dual H-Bridge Driver', 'Coreless High-RPM DC Motors'],
        firmware: ['C++ / Arduino IDE / ESP-IDF', 'Calibrated ADC Surface Normalization Matrix', 'Closed-Loop PID Steering Logic'],
        protocols: ['I2C Sensor Bus', 'Hardware PWM Timer Channels', 'UART Telemetry Debugging']
      },
      sourceSnippet:
        '// PID closed-loop steering calculation\nfloat error = calculateSensorPosition() - SETPOINT;\nP = error;\nI += error * dt;\nD = (error - lastError) / dt;\nfloat correction = (Kp * P) + (Ki * I) + (Kd * D);\nsetMotorSpeeds(BASE_SPEED + correction, BASE_SPEED - correction);',
      githubUrl: 'https://github.com/saadrajpoot3355',
      demoUrl: 'https://wokwi.com/projects/445389122581430273'
    },

    // ── 10. Earthquake Project with Door Open System ─────────────────────────
    {
      id: '10',
      type: 'robotics',
      categoryType: ['arduino', 'automation', 'iot'],
      title: 'Earthquake Activated Emergency Door Evacuation System',
      subtitle: 'Seismic Vibration Sensing & Automated Ultrasonic Safe-Exit Lock Controller',
      category: 'Embedded Safety & Automation',
      role: 'Embedded Systems & Automation Engineer',
      image: '/images/robotics/earthquake_system.webp',
      description:
        'An automated life-safety embedded station combining high-sensitivity seismic shock vibration detection with HC-SR04 ultrasonic clearance telemetry. When tremors occur, the system triggers audio-visual alarms and commands high-torque servo linkages to secure or clear exits.',
      purpose:
        'Protect human life during sudden seismic tremors by instantly locking hazardous zones, sound-alarming occupants, and releasing automated servo door locks for unobstructed emergency evacuation.',
      contribution:
        'Wired and tuned the SW-420 seismic shock sensor interrupt circuit, engineered debounced threshold algorithms in Arduino C++, calibrated ultrasonic proximity safety gates, and designed the physical servo latch linkage.',
      implementation:
        'Constructed a digital GPIO interrupt pipeline that captures vibration shocks within 50ms, commands servo PWM angles to release exit latches, validates doorway clearance via ultrasonic echo, and activates loud piezo sounders and strobe LEDs.',
      outcomes:
        'Achieved sub-50ms seismic event reaction time, 300ms barrier swing release, and 100% reliable trigger response across calibrated vibration stress tests.',
      highlights: 'Sub-50ms Seismic Trigger with Autonomous Servo Safety Evacuation',
      tags: ['Arduino', 'Sensors', 'Automation', 'Embedded Systems', 'Control Systems'],
      icon: ShieldAlert,
      color: 'from-amber-600 to-red-600',
      metrics: [
        { label: 'Seismic Reaction Time', value: '< 50 ms' },
        { label: 'Proximity Threshold', value: '15 cm' },
        { label: 'Actuator Sweep Speed', value: '300 ms' }
      ],
      details: [
        'Instantaneous digital seismic vibration trigger with rapid debouncing interrupt detection.',
        'Ultrasonic sonar proximity ranging validating doorway clearance before commanding door swings.',
        'Servo actuator mechanism swinging access barriers to open or lock states in under 300ms.',
        'High-decibel piezoelectric acoustic alarm coupled with high-lumen strobe LEDs for immediate occupant warning.'
      ],
      stack: {
        hardware: ['Arduino Uno Microcontroller (ATmega328P)', 'SW-420 Seismic Shock Module', 'HC-SR04 Ultrasonic Distance Sensor', 'SG90 / MG996R Servo Actuator'],
        firmware: ['Embedded C / Arduino Framework', 'Microsecond Ultrasonic Pulse Ranging Engine', 'State-Triggered Hazard Branching'],
        protocols: ['Digital GPIO Interrupts', 'Pulse-Width Modulation (PWM)', 'Serial 9600 Diagnostic Logging']
      },
      sourceSnippet:
        'int earthquake = digitalRead(earthquakePin);\nif (earthquake == HIGH) {\n  doorServo.write(closedAngle); // Instantly lockdown barrier\n  digitalWrite(buzzerPin, HIGH);\n  digitalWrite(ledPin, HIGH);\n  Serial.println("Earthquake detected! Emergency protocol activated!");\n}',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 11. Robot Arm (4 Servo) ──────────────────────────────────────────────
    {
      id: '11',
      type: 'robotics',
      categoryType: ['robotics', 'esp', 'iot', 'automation'],
      title: '4-DOF Robotic Arm with WebSockets Controller',
      subtitle: 'Wireless HTML5 Touch Interface, Multi-Axis Kinematics & Sequence Recording',
      category: 'Robotics Kinematics & Web Control',
      role: 'Robotics Kinematics & IoT Developer',
      image: '/images/robotics/robot_arm_4servo.webp',
      description:
        'A 4-Degree-of-Freedom robotic arm powered by an ESP32 dual-core SoC hosting an asynchronous web server and WebSocket endpoint. Operators can control Base, Shoulder, Elbow, and Gripper servos individually from any web browser and record kinematic sequences for automated industrial playback.',
      purpose:
        'Create a responsive, multi-degree-of-freedom robotic manipulator controllable over local Wi-Fi with step-recording and automated macro playback capabilities.',
      contribution:
        'Assembled the 4-axis articulated chassis, designed dedicated 5V 4A power rails, programmed the ESPAsyncWebServer firmware with JSON WebSocket serialization, and authored the self-hosted web app with interactive slider controls and waypoint recording.',
      implementation:
        'Implemented bidirectional WebSockets on ESP32 with sub-15ms latency, non-blocking kinematic interpolation algorithms to ensure smooth servo movements without gear stripping, and dynamic memory vectors for repeatable sequence automation.',
      outcomes:
        'Achieved sub-15ms WebSocket command response, smooth 4-DOF multi-joint motion with 1.0-degree resolution, and reliable infinite playback of multi-step manipulation routines.',
      highlights: 'Sub-15ms WebSockets Control with Macro Sequence Recording & Playback',
      tags: ['Robotics', 'ESP32', 'WebSockets', 'Kinematics', 'IoT', 'Control Systems'],
      icon: Bot,
      color: 'from-indigo-600 to-purple-600',
      metrics: [
        { label: 'Degrees of Freedom', value: '4-DOF' },
        { label: 'WebSocket Latency', value: '< 15 ms' },
        { label: 'Joint Accuracy', value: '1.0° Resolution' }
      ],
      details: [
        '4-axis articulated joint actuation spanning Base rotation, Shoulder pitch, Elbow pitch, and Gripper pinch.',
        'Sub-15ms latency bidirectional WebSocket communication between browser sliders and ESP32 servos.',
        'Built-in step-recording memory module capable of logging motion waypoints and looping macro routines.',
        'Self-hosted responsive web app served directly from ESP32 PROGMEM with no external router dependency.'
      ],
      stack: {
        hardware: ['ESP32 NodeMCU Wi-Fi SoC', '4x High-Torque Metal-Gear Servos (MG996R / SG90)', 'Articulated 4-DOF Chassis', 'External 5V 4A Regulated Power Rail'],
        firmware: ['ESP32 C++ with ESPAsyncWebServer & AsyncTCP', 'Real-Time WebSocket JSON Serialization', 'Non-Blocking Kinematic Interpolation'],
        protocols: ['WebSockets (ws://)', 'HTTP REST / PROGMEM Web Server', 'Hardware PWM Servo Channels']
      },
      sourceSnippet:
        'AsyncWebServer server(80);\nAsyncWebSocket wsRobotArmInput("/RobotArmInput");\nstd::vector<ServoPins> servoPins = {\n  { Servo(), 27, "Base", 90 },\n  { Servo(), 26, "Shoulder", 90 },\n  { Servo(), 25, "Elbow", 90 },\n  { Servo(), 33, "Gripper", 90 }\n};',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 12. Robotics Arm (AI Computer Vision) ─────────────────────────────────
    {
      id: '12',
      type: 'robotics',
      categoryType: ['ai', 'robotics', 'arduino'],
      title: 'AI Computer Vision Hand-Tracking Bionic Arm',
      subtitle: 'Real-Time 21-Keypoint MediaPipe Vision Pipeline & 5-Finger Serial Kinematics',
      category: 'AI Vision & Biomimetic Robotics',
      role: 'AI Vision & Embedded Systems Developer',
      image: '/images/robotics/computervision_robot_arm.webp',
      description:
        'An advanced human-robot interaction system employing Python, MediaPipe, and OpenCV to calculate 3D spatial coordinates across 21 hand landmarks at 60 FPS. Finger flexion states are parsed and streamed over high-speed UART serial to an Arduino controlling 5 independent finger servos.',
      purpose:
        'Translate real-time human hand gestures captured through a camera into physical finger movements on a biomimetic robotic prosthetic hand with zero wearable sensor gloves.',
      contribution:
        'Engineered the Python MediaPipe hand tracking pipeline, designed heuristic mathematical angles for individual finger flexion classification, and programmed the Arduino multi-servo driver sketch receiving synchronized coordinate packets over serial.',
      implementation:
        'Built a 60 FPS camera tracking loop that computes Euclidean distances between fingertip coordinates and MCP joints. Mapped flexion ratios to calibrated 0°-180° servo duty cycles transmitted as structured delimiter strings (`thumb,index,middle,ring,pinky\n`) over USB COM port.',
      outcomes:
        'Delivered sub-25ms camera-to-actuation response at full 60 FPS video tracking, enabling intuitive teleoperation and biomimetic finger articulation matching human hand gestures.',
      highlights: '60 FPS 21-Point Landmark Detection with Sub-25ms Bionic Actuation',
      tags: ['Robotics', 'Python', 'OpenCV', 'MediaPipe', 'Serial Comms', 'AI / CV'],
      icon: Eye,
      color: 'from-emerald-600 to-teal-600',
      metrics: [
        { label: 'Tracking Frame Rate', value: '60 FPS' },
        { label: 'Landmark Points', value: '21 3D Points' },
        { label: 'Latency to Action', value: '< 25 ms' }
      ],
      details: [
        'Zero-latency 21-landmark neural hand tracking from standard RGB camera feeds.',
        'Heuristic finger flexion computation determining extension vs. grip states across Thumb, Index, Middle, Ring, and Pinky.',
        'UART serial packet streamer transmitting synchronized servo angles at 9600 baud.',
        'Independent multi-angle servo mapping accommodating physiological finger range-of-motion.'
      ],
      stack: {
        ai_vision: ['Python 3', 'OpenCV (cv2)', 'Google MediaPipe Hands', 'NumPy Vector Math'],
        hardware: ['5-DOF Bionic Hand Mechanical Linkage', '5x Precision Micro Servos (SG90)', 'Arduino Uno Microcontroller'],
        protocols: ['Serial UART over USB', 'Standard 50Hz PWM Servo Timers', 'V4L2 Video Streaming']
      },
      sourceSnippet:
        'mp_hands = mp.solutions.hands\nhands = mp_hands.Hands(max_num_hands=1)\n// Parse 21 landmarks into finger angles\nservo_angles = []\nfor i, state in enumerate(finger_states):\n  close, open_ = servo_map[names[i]]\n  servo_angles.append(open_ if state else close)\narduino.write((",".join(str(a) for a in servo_angles) + "\\n").encode())',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 13. Obstacle Avoiding Robot ──────────────────────────────────────────
    {
      id: '13',
      type: 'robotics',
      categoryType: ['robotics', 'arduino', 'automation'],
      title: 'Autonomous Obstacle Avoiding Rover',
      subtitle: 'Dynamic Pan-Tilt Ultrasonic Ranging & Intelligent Pathfinding Algorithm',
      category: 'Autonomous Mobile Robotics',
      role: 'Autonomous Robotics Engineer',
      image: '/images/robotics/obstacle_avoiding_robot.webp',
      description:
        'A 4-wheel-drive autonomous mobile robot platform equipped with an HC-SR04 ultrasonic rangefinder mounted atop a sweeping servo motor. The rover dynamically inspects left and right clear paths whenever an obstruction is encountered within its 20cm hazard radius.',
      purpose:
        'Navigate unfamiliar cluttered environments autonomously by scanning terrain ahead, predicting collisions, and executing differential-turn avoidance paths.',
      contribution:
        'Assembled the 4WD acrylic chassis with high-grip rubber tires, wired the L298N high-power dual H-bridge motor driver with battery power isolation, and programmed the obstacle arbitration state machine in Arduino C++.',
      implementation:
        'Programmed a predictive navigation loop that continuously pulses the sonar sensor while driving forward. When an obstacle is detected within 20cm, motors halt, the servo sweeps 0° to 180° to measure left vs. right clearances, and the rover executes differential skid-steer turns toward the open vector.',
      outcomes:
        'Achieved continuous collision-free navigation through dense obstacle corridors with sub-20ms sensor sampling and zero wall impacts.',
      highlights: '180° Ultrasonic Pan-Sweep with Autonomous Skid-Steer Navigation',
      tags: ['Robotics', 'Arduino', 'Sensors', 'Automation', 'Control Systems'],
      icon: Bot,
      color: 'from-blue-600 to-indigo-600',
      metrics: [
        { label: 'Hazard Detection Limit', value: '20 cm' },
        { label: 'Sensor Sweep Range', value: '180 Degrees' },
        { label: 'Reaction Latency', value: '< 20 ms' }
      ],
      details: [
        'Front-mounted ultrasonic sensor sweeping 0° to 180° to measure left vs. right clearances.',
        'Differential 4WD drive powered by an L298N dual H-bridge motor driver with PWM speed regulation.',
        'Automatic backup, pivot, and escape maneuvers triggered when trapped in dead-end corners.',
        'Continuous obstacle detection preventing collisions with walls, furniture, and unexpected barriers.'
      ],
      stack: {
        hardware: ['Arduino Uno Microcontroller (ATmega328P)', 'L298N Dual H-Bridge Motor Driver', '4x TT Geared DC Motors', 'HC-SR04 Ultrasonic Sensor', 'SG90 Pan-Tilt Micro Servo'],
        firmware: ['Arduino C++ Navigation Controller', 'Time-of-Flight Sound Velocity Calculations', 'Differential Skid-Steer Routines'],
        protocols: ['PWM Motor Control', 'Digital Sonar Trigger/Echo Timing', 'Serial Diagnostic Telemetry']
      },
      sourceSnippet:
        'measuredistance();\nif (distance > limit || distance == 0) {\n  moveforward();\n} else {\n  resetmotor();\n  turnservoright();\n  rightdistance = calculatedistance();\n  turnservoleft();\n  leftdistance = calculatedistance();\n  if (rightdistance > leftdistance) turnright(); else turnleft();\n}',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 14. Radar Project ────────────────────────────────────────────────────
    {
      id: '14',
      type: 'robotics',
      categoryType: ['arduino', 'automation', 'software'],
      title: 'Ultrasonic Sonar Radar with Processing GUI',
      subtitle: 'Continuous 180° Mechanical Sweep Sonar with Visualized Target Radar Display',
      category: 'Sensors & Signal Processing',
      role: 'Sensors & Instrumentation Developer',
      image: '/images/robotics/radar_sonar_project.webp',
      description:
        'A hardware-software radar scanning system combining an Arduino Uno, an SG90 servo motor rotating an ultrasonic sensor across 15° to 165°, and a companion Processing GUI application that renders real-time military-style sonar sweeps and target blips.',
      purpose:
        'Build a functioning sonar radar station capable of scanning space in a 180° radius and visually plotting detected obstacles and distance ranges onto a computer interface.',
      contribution:
        'Engineered the mechanical servo pan bracket, authored the Arduino C++ angular sweep sequencer, and wrote the Processing Java GUI with polar coordinate mapping, radar beam sweeps, and obstacle blip rendering.',
      implementation:
        'Synchronized the servo sweep in 1-degree steps with ultrasonic echo timing. Transmitted structured data packets over USB serial (`angle,distance.`) to the desktop Processing app, which transforms polar coordinates into Cartesian space and displays glowing green radar visuals.',
      outcomes:
        'Achieved sub-centimeter distance resolution across a 15°-165° arc with real-time graphical representation of objects up to 40cm away.',
      highlights: '180° Continuous Sonar Sweep with Real-Time Desktop Radar Visualization',
      tags: ['Arduino', 'Sensors', 'Signal Processing', 'Processing IDE', 'Control Systems'],
      icon: Radio,
      color: 'from-teal-600 to-emerald-600',
      metrics: [
        { label: 'Sweep Arc', value: '15° to 165°' },
        { label: 'Angular Resolution', value: '1.0 Degree' },
        { label: 'Max Detection Range', value: '40 cm' }
      ],
      details: [
        'Continuous synchronized 180° mechanical pan sweep executing 1-degree measurement increments.',
        'High-speed serial packet formatting transmitting angle and distance data pairs (angle,distance.).',
        'Real-time graphical Processing canvas featuring green phosphorescent radar arcs, trails, and target markers.',
        'Sub-centimeter distance resolution detecting obstacles up to 40cm with audio-visual alerts.'
      ],
      stack: {
        hardware: ['Arduino Uno Microcontroller (ATmega328P)', 'HC-SR04 High-Precision Ultrasonic Sensor', 'TowerPro SG90 180° Micro Servo', 'Custom Pan Bracket Rig'],
        software: ['Arduino C++ Angular Sweep Sequencer', 'Processing Java Visual Radar GUI Framework', 'Geometric Polar-to-Cartesian Transformation'],
        protocols: ['UART Serial (9600 Baud)', 'PWM Servo Control', 'Polar Coordinate Mapping']
      },
      sourceSnippet:
        'for (int i = 15; i <= 165; i++) {\n  myServo.write(i);\n  delay(30);\n  distance = calculateDistance();\n  Serial.print(i);\n  Serial.print(",");\n  Serial.print(distance);\n  Serial.print(".");\n}',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 15. Arduino Snake Game ───────────────────────────────────────────────
    {
      id: '15',
      type: 'robotics',
      categoryType: ['arduino', 'software'],
      title: 'Arduino Retro Snake Game on 8x8 LED Matrix',
      subtitle: 'Embedded Arcade Gaming System with Dual-Axis Joystick & MAX7219 Matrix Driver',
      category: 'Embedded Systems & Game Logic',
      role: 'Embedded Firmware Developer',
      image: '/images/robotics/arduino_snake_game.webp',
      description:
        'A retro embedded gaming system running on an Arduino Uno. Players guide a growing snake across an 8x8 LED matrix display using a 2-axis analog thumbstick, eating randomly spawned food items and avoiding boundary collisions with real-time score tracking.',
      purpose:
        'Implement the iconic classic Snake arcade game on bare-metal microcontroller hardware using low-level bit shifting, analog joystick polling, and SPI matrix drivers.',
      contribution:
        'Wired the MAX7219 8x8 LED dot matrix module and dual-axis analog joystick, programmed the complete game loop in C++, and implemented coordinate array data structures for snake body segments and food collisions.',
      implementation:
        'Implemented non-blocking millisecond game ticks with analog ADC joystick thresholding (with deadzone filtering). Created low-level bitwise shift registers to illuminate matrix pixels efficiently at 60 Hz refresh rate.',
      outcomes:
        'Delivered an ultra-responsive, fully playable retro arcade game running at a smooth 60 Hz refresh rate with sub-5ms input response latency on ATmega328P hardware.',
      highlights: 'Bare-Metal 60 Hz Arcade Game Engine with Bitwise Matrix Shift Registers',
      tags: ['Arduino', 'Embedded Systems', 'MAX7219', 'Sensors', 'C++'],
      icon: Play,
      color: 'from-red-600 to-amber-600',
      metrics: [
        { label: 'Display Matrix', value: '8x8 LEDs (64 Pixels)' },
        { label: 'Frame Refresh Rate', value: '60 Hz' },
        { label: 'Input Latency', value: '< 5 ms' }
      ],
      details: [
        'Real-time dual-axis analog joystick polling with deadzone compensation and directional debouncing.',
        'High-speed multiplexed LED matrix driving via the MAX7219 IC over 3-wire serial interface.',
        'Dynamic coordinate array modeling snake growth, tail follow mechanics, and self-collision detection.',
        'Pseudorandom food coordinate generator ensuring apples never spawn on current snake body coordinates.'
      ],
      stack: {
        hardware: ['Arduino Uno (ATmega328P)', 'MAX7219 8x8 Red LED Dot Matrix Module', 'Dual-Axis Analog Joystick Module', 'Solderless Prototyping Platform'],
        firmware: ['Arduino C++ Bare-Metal Architecture', 'LedControl Bitwise Display Shift Register Driver', 'Non-Blocking Millisecond Game Loop'],
        protocols: ['3-Wire Serial Bit-Banging (DIN, CS, CLK)', 'Analog ADC Joystick Sampling', 'Digital Interrupts']
      },
      sourceSnippet:
        '// Joystick coordinate mapping & direction arbitration\nint xVal = analogRead(JOYSTICK_X);\nint yVal = analogRead(JOYSTICK_Y);\nif (xVal < 400 && dir != RIGHT) dir = LEFT;\nelse if (xVal > 600 && dir != LEFT) dir = RIGHT;\nelse if (yVal < 400 && dir != DOWN) dir = UP;\nelse if (yVal > 600 && dir != UP) dir = DOWN;\nupdateSnakePosition();',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 16. sketch_jan6a (ESP32-CAM) ─────────────────────────────────────────
    {
      id: '16',
      type: 'robotics',
      categoryType: ['robotics', 'esp', 'iot', 'software'],
      title: 'ESP32-CAM Real-Time Video Streaming & Motion Rover System',
      subtitle: 'Embedded Wireless Video Server, FreeRTOS HTTP Daemon & Pan/Tilt Motor Controls',
      category: 'IoT Video & Edge Computing',
      role: 'Embedded IoT & Video Systems Engineer',
      image: '/images/robotics/esp32cam_streamer.webp',
      description:
        'An edge-computing video surveillance and teleoperation station powered by the ESP32-CAM module (featuring the OV2640 camera sensor). It runs an embedded FreeRTOS HTTP daemon serving an interactive web interface with sub-100ms MJPEG video streaming and digital motor telemetry controls.',
      purpose:
        'Stream real-time low-latency video over local Wi-Fi while concurrently managing motor drivers and pan/tilt camera mechanics from an embedded HTTP dashboard.',
      contribution:
        'Configured camera register timings and PSRAM buffer allocation for the OV2640 sensor, compiled the multi-threaded FreeRTOS HTTP server firmware, designed the interactive browser control page, and wired motor drive stages.',
      implementation:
        'Utilized esp_http_server to stream multipart/x-mixed-replace MJPEG frames over asynchronous TCP sockets. Managed camera frame capture and client request tasks across dual ESP32 cores to achieve 25+ FPS without frame tearing.',
      outcomes:
        'Delivered smooth 25+ FPS MJPEG video streaming at VGA-to-UXGA resolutions with sub-100ms streaming latency and concurrent multi-channel motor telemetry controls.',
      highlights: '25+ FPS Live Edge Video Stream with Sub-100ms Latency on ESP32-CAM',
      tags: ['ESP32', 'Robotics', 'IoT', 'Embedded Systems', 'FreeRTOS', 'Control Systems'],
      icon: Eye,
      color: 'from-violet-600 to-indigo-600',
      metrics: [
        { label: 'Video Frame Rate', value: '25+ FPS' },
        { label: 'Resolution Support', value: 'VGA to UXGA' },
        { label: 'Stream Latency', value: '< 100 ms' }
      ],
      details: [
        'High-definition MJPEG video streaming directly over local Wi-Fi access points or station networks.',
        'Embedded lightweight HTTP web server delivering real-time camera controls (resolution, flash LED, exposure).',
        'Simultaneous multi-channel PWM motor and servo actuation for pan/tilt orientation and rover locomotion.',
        'Low-overhead memory architecture leveraging external PSRAM for high-frame-rate JPEG buffering.'
      ],
      stack: {
        hardware: ['AI-Thinker ESP32-CAM (OV2640 2MP Camera Sensor)', 'Onboard 4MB External PSRAM & Ceramic Antenna', 'High-Brightness Flash LED', 'Dual L9110S Motor Driver'],
        firmware: ['ESP-IDF / Arduino ESP32 Core', 'esp_http_server Asynchronous Web Engine', 'Multi-Threaded FreeRTOS Tasks'],
        protocols: ['MJPEG over HTTP/1.1 (Multipart/x-mixed-replace)', 'Wi-Fi 802.11 b/g/n (AP & STA)', 'GPIO / PWM']
      },
      sourceSnippet:
        '#include "esp_http_server.h"\n#include "esp_camera.h"\nstatic const char* _STREAM_CONTENT_TYPE = "multipart/x-mixed-replace;boundary=" PART_BOUNDARY;\nhttpd_handle_t stream_httpd = NULL;\n// Start asynchronous HTTP video daemon\nhttpd_start(&stream_httpd, &config);',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 17. Traffic Light System ─────────────────────────────────────────────
    {
      id: '17',
      type: 'robotics',
      categoryType: ['arduino', 'automation'],
      title: 'Automated 3-Phase Traffic Intersection Signal Controller',
      subtitle: 'Deterministic State-Machine Timing Controller with Solid-State LED Driver Stages',
      category: 'Embedded Control Systems',
      role: 'Embedded Control Systems Engineer',
      image: '/images/robotics/traffic_light_controller.webp',
      description:
        'A solid-state intersection signal controller implemented on an Arduino Uno. The system executes deterministic state sequencing across high-brightness Red, Yellow, and Green optical indicators with microsecond-accurate phase intervals and active fail-safe state retention.',
      purpose:
        'Deliver a reliable, fail-safe intersection signaling sequencer capable of managing safe vehicle transitions between Go, Prepare to Stop, and Stop phases.',
      contribution:
        'Designed current-limited driver stages with 220-ohm metal film resistors, engineered the deterministic sequential state-machine pattern in C++, and verified fail-safe transition logic under rapid power cycling.',
      implementation:
        'Built a non-blocking sequential state sequencer that commands Red (5s), Yellow (2s), and Green (5s) indicators with atomic digital pin writes. Structured code architecture allowing straightforward expansion for pedestrian crossing buttons and vehicle induction loops.',
      outcomes:
        'Delivered 100% reliable continuous signal sequencing with millisecond timing precision (plus/minus 1ms) and zero race conditions or invalid overlapping signal states.',
      highlights: 'Deterministic 3-Phase State Sequencer with Fail-Safe Digital Output',
      tags: ['Arduino', 'Embedded Systems', 'Automation', 'Control Systems', 'C++'],
      icon: Sliders,
      color: 'from-yellow-600 to-amber-600',
      metrics: [
        { label: 'Phase Precision', value: '± 1 ms' },
        { label: 'Standard Cycle Time', value: '12 Seconds' },
        { label: 'System Reliability', value: '100% Uptime' }
      ],
      details: [
        'Deterministic 3-phase automated cycle (Green 5000ms, Yellow 2000ms, Red 5000ms).',
        'Solid-state current-limited LED driving circuitry protecting against optical thermal degradation.',
        'Extendable architecture accommodating pedestrian pushbutton crossing interrupts and vehicle induction sensors.',
        'Compact bare-metal C++ firmware designed for zero runtime exceptions and continuous uninterrupted operation.'
      ],
      stack: {
        hardware: ['Arduino Uno Microcontroller (ATmega328P)', '3x High-Brightness 10mm Diffused LEDs (Red, Yellow, Green)', 'Precision 220-Ohm Metal Film Resistors', 'Prototyping Wiring Harness'],
        firmware: ['Bare-Metal Arduino C++', 'Deterministic Sequential State-Machine Pattern', 'Atomic Digital Pin Writing'],
        protocols: ['Direct GPIO Digital Switching', 'Microsecond System Tick Timers', 'UART Diagnostic Output']
      },
      sourceSnippet:
        '// Deterministic 3-Phase Intersection State Routine\ndigitalWrite(green, HIGH); digitalWrite(yellow, LOW); digitalWrite(red, LOW);\ndelay(5000);\ndigitalWrite(green, LOW); digitalWrite(yellow, HIGH); digitalWrite(red, LOW);\ndelay(2000);\ndigitalWrite(green, LOW); digitalWrite(yellow, LOW); digitalWrite(red, HIGH);\ndelay(5000);',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 18. Ultrasound Scanner Prototype ─────────────────────────────────────
    {
      id: '18',
      type: 'robotics',
      categoryType: ['esp', 'iot', 'software'],
      title: 'IoT Ultrasound Range Scanner with Web Dashboard & I2C LCD',
      subtitle: 'ESP8266 Microsecond Acoustic Telemetry, Responsive Web Interface & Physical LCD Feedback',
      category: 'IoT Sensors & Embedded Web',
      role: 'IoT Embedded Systems Engineer',
      image: '/images/robotics/ultrasound_scanner.webp',
      description:
        'An IoT ultrasonic ranging station built on an ESP8266 (NodeMCU) microcontroller. It combines high-speed microsecond pulse echo timing with an embedded HTTP web server and a 16x2 I2C alphanumeric LCD, serving real-time target distance measurements to nearby operators.',
      purpose:
        'Construct a dual-interface ultrasonic proximity measuring tool broadcasting live millimeter distance metrics to both a physical I2C liquid crystal display and an embedded browser dashboard.',
      contribution:
        'Configured the I2C backpack interface for the 16x2 LCD, authored the microsecond ultrasonic echo timing routine, and developed the embedded HTTP web server serving live HTML/CSS metric cards directly from PROGMEM.',
      implementation:
        'Triggered 10-microsecond pulses to HC-SR04 sonar module, calculating acoustic time-of-flight distances with sub-millimeter precision. Displayed metrics concurrently on physical LCD screen (0x27 address) and served real-time HTTP endpoints with sub-20ms latency.',
      outcomes:
        'Delivered high-precision proximity telemetry across 2cm to 400cm measuring range with plus/minus 3mm accuracy and real-time dual-screen feedback.',
      highlights: 'Dual Real-Time Feedback: 16x2 I2C Display & Embedded HTTP Dashboard',
      tags: ['ESP8266', 'Sensors', 'IoT', 'Embedded Systems', 'Web Server'],
      icon: Activity,
      color: 'from-cyan-600 to-teal-600',
      metrics: [
        { label: 'Measuring Range', value: '2 cm - 400 cm' },
        { label: 'Measurement Accuracy', value: '± 3 mm' },
        { label: 'Web Server Latency', value: '< 20 ms' }
      ],
      details: [
        'High-precision ultrasonic acoustic pulse trigger (10us) with microsecond flight time recording.',
        'Embedded standalone HTTP web server serving a styled HTML5/CSS3 telemetry dashboard.',
        '16x2 LiquidCrystal display via PCF8574 I2C backpack minimizing required GPIO pinout overhead.',
        'Dynamic continuous distance calculation converting sound velocity (340 m/s) to centimeters.'
      ],
      stack: {
        hardware: ['ESP8266 NodeMCU (12-E) Microcontroller (80MHz Xtensa Core)', 'HC-SR04 Ultrasonic Distance Sensor', '1602 (16x2) Alphanumeric LCD with I2C Backpack', 'Regulated 3.3V/5V Rails'],
        firmware: ['ESP8266 Arduino Core with ESP8266WebServer', 'Wire.h I2C Bus Communication Framework', 'LiquidCrystal_I2C Hardware Routines'],
        protocols: ['I2C (SDA/SCL at 100kHz)', 'HTTP/1.1 REST Server', 'Microsecond Digital PulseIn']
      },
      sourceSnippet:
        'long getDistance() {\n  digitalWrite(TRIG, LOW); delayMicroseconds(2);\n  digitalWrite(TRIG, HIGH); delayMicroseconds(10);\n  digitalWrite(TRIG, LOW);\n  long duration = pulseIn(ECHO, HIGH);\n  return duration * 0.034 / 2;\n}\nserver.on("/", []() { server.send(200, "text/html", webpage()); });',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 19. WiFi Controlled ESP8266 Based RC Car ─────────────────────────────
    {
      id: '19',
      type: 'robotics',
      categoryType: ['robotics', 'esp', 'iot', 'automation'],
      title: 'WiFi Controlled ESP8266 RC Rover Vehicle',
      subtitle: 'Wireless Access Point Rover with Virtual Touchscreen Joystick Teleoperation',
      category: 'Wireless Teleoperation & Vehicles',
      role: 'Wireless Robotics & Embedded Engineer',
      image: '/images/robotics/wifi_esp8266_rc_car.webp',
      description:
        'A wireless robotic ground vehicle powered by an ESP8266 microcontroller configured as a standalone Wi-Fi Soft-AP. Any smartphone or tablet can connect directly to the vehicle and steer it in real time via an intuitive, low-latency virtual touch joystick web interface.',
      purpose:
        'Provide responsive wireless remote driving for a 4WD mobile chassis using direct smartphone Wi-Fi connection without needing third-party cloud brokers or proprietary transmitter controllers.',
      contribution:
        'Assembled the 4WD mobile chassis with off-road tires, integrated the L298N high-current dual motor driver with battery power rails, programmed the Soft-AP network firmware, and built the touch-friendly virtual joystick web app.',
      implementation:
        'Configured ESP8266 Soft-AP network broadcasting custom SSID. Built an embedded HTTP endpoint receiver processing speed and direction parameters from the client joystick touch interface, applying PWM throttle ramping and fail-safe disconnect cutoffs.',
      outcomes:
        'Achieved sub-30ms teleoperation latency over 60+ meter wireless range with smooth differential 4WD steering response across various terrains.',
      highlights: 'Direct Smartphone Wi-Fi Soft-AP Control with Sub-30ms Teleoperation',
      tags: ['ESP8266', 'Robotics', 'IoT', 'Control Systems', 'Automation'],
      icon: Wifi,
      color: 'from-blue-600 to-cyan-600',
      metrics: [
        { label: 'Wi-Fi Control Range', value: '60+ Meters' },
        { label: 'Response Latency', value: '< 30 ms' },
        { label: 'Drive Layout', value: '4WD Differential' }
      ],
      details: [
        'Direct Standalone Wi-Fi Soft-AP hosting an onboard web controller reachable via simple local IP.',
        'High-power dual H-bridge motor driver stages executing forward, reverse, pivot, and skid steering.',
        'Smooth PWM speed throttle regulation avoiding abrupt motor stall currents and mechanical gear wear.',
        'Sub-30ms teleoperation latency delivering crisp steering response across indoor and outdoor surfaces.'
      ],
      stack: {
        hardware: ['ESP8266 NodeMCU Wi-Fi Microcontroller', 'L298N / L293D High-Current Dual Motor Driver Shield', '4x Geared DC Motors with Rubber Off-Road Tires', '7.4V / 11.1V Li-Ion Battery Pack'],
        firmware: ['ESP8266 Arduino Core', 'Soft-AP Wi-Fi Configuration with Embedded Web Server', 'Asynchronous Motor PWM Throttle Mapping Matrix'],
        protocols: ['Wi-Fi 802.11 b/g/n (Soft-AP)', 'HTTP REST & WebSocket Controls', 'Differential PWM']
      },
      sourceSnippet:
        'WiFi.softAP("ESP8266_RC_CAR", "12345678");\nserver.on("/drive", []() {\n  String dir = server.arg("dir");\n  int speed = server.arg("speed").toInt();\n  executeMotorDrive(dir, speed);\n  server.send(200, "text/plain", "OK");\n});',
      githubUrl: 'https://github.com/saadrajpoot3355'
    }
  ];

  const getFilteredProjects = () => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => {
      if (Array.isArray(p.categoryType)) {
        return p.categoryType.includes(activeFilter);
      }
      return p.categoryType === activeFilter;
    });
  };

  const filteredProjects = getFilteredProjects();

  const getCountForFilter = (filterId) => {
    if (filterId === 'all') return projects.length;
    return projects.filter((p) => {
      if (Array.isArray(p.categoryType)) {
        return p.categoryType.includes(filterId);
      }
      return p.categoryType === filterId;
    }).length;
  };

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
              In-depth engineering documentation detailing the purpose, personal contribution, implementation architecture, technology stack, quantitative outcomes, and verified live/code evidence for all robotics, embedded hardware, AI, and software systems.
            </p>
          </div>

          {/* Filter Tabs with Dynamic Count Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl bg-white/[0.04] p-1.5 border border-white/10 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const count = getCountForFilter(tab.id);
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] sm:text-[11px] font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="mt-10 sm:mt-14 space-y-8 sm:space-y-10">
          {filteredProjects.map((project) => {
            const Icon = project.icon || Bot;
            const isExpanded = selectedProject === project.id;

            return (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0d101d] transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex flex-col lg:flex-row items-stretch">
                  
                  {/* Left Column: Visual Showcase (Image or Visual Badge) */}
                  <div className="relative flex flex-col justify-center items-center overflow-hidden bg-[#070910] p-6 sm:p-8 lg:w-[42%] border-b lg:border-b-0 lg:border-r border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-indigo-600/10 opacity-50 transition-opacity duration-500 group-hover:opacity-100"></div>

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

                    {/* Counter Badge Number */}
                    <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
                      <span className="rounded-full bg-white/10 border border-white/15 px-2.5 sm:px-3 py-0.5 sm:py-1 font-display text-[11px] sm:text-xs font-bold tracking-[0.14em] text-white backdrop-blur">
                        {project.id}
                      </span>
                    </div>

                    {/* Role Tag */}
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
                      {project.demoUrl && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-cyan-500/20 border border-cyan-500/30 px-2 py-0.5 text-[10px] font-medium text-cyan-300 backdrop-blur">
                          <Zap className="h-3 w-3 text-cyan-400" />
                          Simulation
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

                      {/* Detailed Overview Paragraph */}
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
                      {project.highlights && (
                        <div className="mt-4 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[11px] sm:text-xs font-semibold text-blue-400">
                            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                            {project.highlights}
                          </span>
                        </div>
                      )}

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

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl bg-cyan-600/20 border border-cyan-500/30 px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold text-cyan-300 transition-colors hover:bg-cyan-600/30 active:scale-[0.98]"
                          >
                            <Zap className="h-3.5 w-3.5" />
                            <span>Simulation</span>
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
                        {project.purpose && (
                          <div>
                            <h4 className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-400">
                              <Target className="h-4 w-4" />
                              Problem & Purpose
                            </h4>
                            <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                              {project.purpose}
                            </p>
                          </div>
                        )}

                        {project.contribution && (
                          <div>
                            <h4 className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-400">
                              <UserCheck className="h-4 w-4" />
                              Personal Contribution & Ownership
                            </h4>
                            <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                              {project.contribution}
                            </p>
                          </div>
                        )}

                        {project.implementation && (
                          <div>
                            <h4 className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400">
                              <Wrench className="h-4 w-4" />
                              Important Implementation Details
                            </h4>
                            <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                              {project.implementation}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Right: Outcomes, Stack Details & Highlights */}
                      <div className="space-y-4">
                        {project.outcomes && (
                          <div>
                            <h4 className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
                              <Trophy className="h-4 w-4" />
                              Measurable Outcomes & Results
                            </h4>
                            <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                              {project.outcomes}
                            </p>
                          </div>
                        )}

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

                        {/* Source code snippet if available */}
                        {project.sourceSnippet && (
                          <div>
                            <h4 className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400">
                              <Code className="h-4 w-4" />
                              Firmware / Source Logic Snippet
                            </h4>
                            <pre className="mt-2 overflow-x-auto rounded-xl bg-[#04060a] border border-white/10 p-3 text-[11px] font-mono text-emerald-300">
                              <code>{project.sourceSnippet}</code>
                            </pre>
                          </div>
                        )}

                        {/* Details checklist */}
                        {project.details && (
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
                        )}
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
              {modalProject.purpose && (
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                  <h4 className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-white text-xs sm:text-sm mb-2">
                    <Target className="h-4 w-4 text-red-400" />
                    2. The Problem & Purpose
                  </h4>
                  <p>{modalProject.purpose}</p>
                </div>
              )}

              {/* 3. Personal Contribution */}
              {modalProject.contribution && (
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                  <h4 className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-white text-xs sm:text-sm mb-2">
                    <UserCheck className="h-4 w-4 text-indigo-400" />
                    3. Personal Contribution & Role
                  </h4>
                  <p>{modalProject.contribution}</p>
                </div>
              )}

              {/* 4. Important Implementation Details */}
              {modalProject.implementation && (
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                  <h4 className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-white text-xs sm:text-sm mb-2">
                    <Wrench className="h-4 w-4 text-cyan-400" />
                    4. Important Implementation Details & Architecture
                  </h4>
                  <p>{modalProject.implementation}</p>
                </div>
              )}

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

              {/* Source code snippet in modal if available */}
              {modalProject.sourceSnippet && (
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                  <h4 className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-white text-xs sm:text-sm mb-3">
                    <Code className="h-4 w-4 text-amber-400" />
                    Firmware / Implementation Logic
                  </h4>
                  <pre className="overflow-x-auto rounded-xl bg-[#04060a] border border-white/10 p-3 text-xs font-mono text-emerald-300">
                    <code>{modalProject.sourceSnippet}</code>
                  </pre>
                </div>
              )}

              {/* 6. Outcome & Result */}
              {modalProject.outcomes && (
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
              )}

              {/* Key Features list */}
              {modalProject.details && (
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
              )}

            </div>

            {/* Action Links & Evidence */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {modalProject.liveUrl && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                    <Globe className="h-3.5 w-3.5" /> Verified Live Platform
                  </span>
                )}
                {modalProject.demoUrl && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-cyan-400">
                    <Zap className="h-3.5 w-3.5" /> Simulation Model
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
                {modalProject.demoUrl && (
                  <a
                    href={modalProject.demoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-600/30"
                  >
                    <Zap className="h-4 w-4" />
                    Open Simulation
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
