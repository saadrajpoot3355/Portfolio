import React, { useState, useMemo } from 'react';
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
  Target,
  UserCheck,
  Wrench,
  Trophy,
  Globe,
  CheckCircle2,
  Terminal,
  Activity,
  Radio,
  Sliders,
  Play
} from 'lucide-react';

export default function Projects() {
  const [activePrimaryFilter, setActivePrimaryFilter] = useState('all');
  const [activeSubFilter, setActiveSubFilter] = useState('all');
  const [modalProject, setModalProject] = useState(null);

  const primaryTabs = [
    { id: 'all', label: 'All Projects', count: 19 },
    { id: 'software', label: 'Software & Web', count: 5 },
    { id: 'robotics', label: 'Robotics & Embedded', count: 14 }
  ];

  const subCategoryFilters = {
    all: [
      { id: 'all', label: 'All Categories' },
      { id: 'web', label: 'Web & E-Commerce' },
      { id: 'saas', label: 'SaaS & Dashboards' },
      { id: 'combat', label: 'Combat & Rovers' },
      { id: 'arms', label: 'Robotic Arms & CV' },
      { id: 'iot', label: 'IoT & Biometrics' },
      { id: 'sensors', label: 'Sensors & Signal Processing' }
    ],
    software: [
      { id: 'all', label: 'All Software' },
      { id: 'web', label: 'Web & E-Commerce' },
      { id: 'saas', label: 'SaaS & Dashboards' }
    ],
    robotics: [
      { id: 'all', label: 'All Systems' },
      { id: 'combat', label: 'Combat & Rovers' },
      { id: 'arms', label: 'Robotic Arms & CV' },
      { id: 'iot', label: 'IoT & Biometrics' },
      { id: 'sensors', label: 'Sensors & Signal Processing' }
    ]
  };

  const allProjects = [
    {
      id: 'sw-01',
      number: '01',
      domain: 'software',
      subCategory: 'web',
      title: 'Expert Painting Services Web Application',
      subtitle: 'High-Converting Multi-Device Service Booking & Estimation Platform',
      category: 'Web Development & UI/UX',
      role: 'Lead Full-Stack Web Developer',
      image: '/images/project_expert_painting.webp',
      description: 'A responsive digital platform tailored for home painting contractors featuring interactive booking integration, service catalogs, instant price estimation calculators, and WhatsApp lead routing.',
      purpose: 'Home service contractors struggle with high bounce rates, low-quality inquiry leads, and lengthy quotation cycles when relying on generic static landing pages.',
      contribution: 'Architected and implemented the entire responsive web application from UI/UX design to production deployment, including the custom cost estimator and WhatsApp pipeline.',
      implementation: 'Engineered an interactive multi-step cost calculation wizard that calculates estimated paint volume, labor costs, and surface prep requirements in real time. Integrated structured Schema.org JSON-LD local business tags.',
      outcomes: 'Achieved a 98/100 Google Lighthouse mobile performance rating, generated a 45% increase in verified customer inquiries, and reduced average quote turnaround time from 24 hours to instant self-service.',
      highlights: 'Interactive Quote Calculator & 98+ Mobile Performance Score',
      tags: ['Web Application', 'Responsive UI', 'Service Booking', 'SEO Optimized', 'UX Design', 'Lead Capture'],
      metrics: [
        { label: 'Page Speed Score', value: '98/100' },
        { label: 'Conversion Lift', value: '+45%' },
        { label: 'Mobile Optimization', value: '100% Fluid' }
      ],
      details: [
        'Fully responsive multi-breakpoint layout tested across mobile, tablet, and ultra-wide monitor displays.',
        'Interactive dynamic quotation widget calculating approximate paint volume, labor, and timeline estimations.',
        'Optimized local SEO schema tags and keyword structures securing top rankings for regional painting services.',
        'One-click WhatsApp direct consultation integration routing incoming client specs immediately.'
      ],
      stack: {
        frontend: ['HTML5 / Semantic Layout', 'Modern Vanilla CSS / Tailwind', 'JavaScript ES6+', 'Lucide Icons'],
        features: ['Dynamic Cost Calculator', 'Interactive Portfolio Gallery', 'WhatsApp API Integration'],
        seo: ['OpenGraph Meta Tags', 'Local Business Schema.org', 'Core Web Vitals Optimization']
      },
      status: 'Live Platform',
      liveUrl: 'https://dubaiwallpaint.com'
    },
    {
      id: 'sw-02',
      number: '02',
      domain: 'software',
      subCategory: 'web',
      title: 'E-Bazzar Electronics E-Commerce',
      subtitle: 'Hardware Storefront with Parametric Component Filtering & Pinout Cards',
      category: 'E-Commerce & Web Development',
      role: 'Full-Stack Developer & Catalog Architect',
      image: '/images/project_ebazzar.webp',
      description: 'A full-featured electronic components storefront built for hardware engineers, makers, and DIY robotics creators featuring parametric product search, live inventory status, and datasheet references.',
      purpose: 'Electronics hobbyists waste hours finding matching components on generic sites lacking parametric filtering for voltage, communication bus, and pin counts.',
      contribution: 'Designed the hardware catalog taxonomy, built the client-side parametric filter engine, and developed responsive product specification modal cards.',
      implementation: 'Constructed sub-50ms multi-facet parametric search filtering over 500+ component SKUs by voltage and protocol. Implemented local storage cart persistence and dynamic subtotal calculations.',
      outcomes: 'Over 500+ catalog SKUs indexed, sub-50ms search latency, and a 30% reduction in cart abandonment compared to legacy hardware catalogs.',
      highlights: 'Parametric Hardware Search & Technical Spec Data Cards',
      tags: ['E-Commerce', 'Electronics Store', 'Parametric Search', 'Product Spec Cards', 'Payment Flow', 'Cart Engine'],
      metrics: [
        { label: 'Catalog SKUs', value: '500+ Items' },
        { label: 'Search Latency', value: '< 50 ms' },
        { label: 'Cart Abandonment', value: '-30%' }
      ],
      details: [
        'Dynamic component search filtering switches, microcontrollers, motor drivers, display modules, and sensors.',
        'Interactive spec cards detailing voltage tolerance, communication bus compatibility, and pinout diagrams.',
        'Fast client-side shopping cart with instant subtotal calculation, coupon support, and local delivery estimates.',
        'Optimized media pipeline utilizing responsive WebP assets and lazy loading.'
      ],
      stack: {
        frontend: ['Responsive Web Framework', 'Tailwind CSS', 'Dynamic State Management', 'Client-Side Search'],
        backend: ['RESTful Product API', 'Order Management System', 'Inventory Database', 'Cart Session Store'],
        features: ['Parametric Filter Engine', 'Datasheet Embedder', 'Instant Checkout Wizard']
      },
      status: 'Live Platform',
      liveUrl: 'https://electrobazzar.store'
    },
    {
      id: 'sw-03',
      number: '03',
      domain: 'software',
      subCategory: 'web',
      title: 'PochetRide Vehicle Rental & Fleet Management',
      subtitle: 'Eco-Friendly Fleet Booking Portal with Location & Date Selectors',
      category: 'Web Development & Booking Systems',
      role: 'Frontend & UI/UX Developer',
      image: '/images/project_pochet_ride.webp',
      description: 'A sleek vehicle rental booking portal featuring real-time vehicle availability filters, multi-branch pickup/dropoff selector, dynamic pricing rates, and instant reservation confirmation.',
      purpose: 'Modern travelers need a rapid, transparent vehicle reservation process without multi-page friction or hidden surcharges.',
      contribution: 'Engineered the client booking flow from ground up: designed the responsive user interface, implemented the date-range availability calculation engine, and integrated multi-branch selectors.',
      implementation: 'Built a 3-step booking wizard with intelligent date pickers, tiered duration discount algorithms, instant vehicle specs comparisons, and dynamic reservation summary generation.',
      outcomes: 'Reduced booking completion time to under 2 minutes, improved mobile reservation conversion rate by 40%, and achieved 95+ performance scores.',
      highlights: 'Real-Time Fleet Availability Engine & 3-Step Instant Booking',
      tags: ['Car Rental System', 'Online Booking', 'Fleet Management', 'Responsive Portal', 'Date Picker', 'UI/UX'],
      metrics: [
        { label: 'Booking Time', value: '< 2 Minutes' },
        { label: 'Mobile Conversion', value: '+40%' },
        { label: 'Fleet Sync', value: 'Real-Time' }
      ],
      details: [
        'Interactive vehicle reservation wizard with branch location selector, pickup/drop-off calendar, and vehicle tiering.',
        'Modern eco-friendly vehicle showcase highlighting hybrid/electric MPG ratings and passenger capacity.',
        'Mobile-first responsive UI built with touch-friendly controls and smooth animations.',
        'Automated booking confirmation generator with email/SMS itinerary summaries and calendar integration.'
      ],
      stack: {
        frontend: ['React / Modern JavaScript', 'Tailwind CSS', 'Date/Time Range Pickers', 'Interactive SVG Maps'],
        features: ['Dynamic Fleet Availability', 'Multi-Tier Pricing Engine', 'Branch Locator'],
        optimization: ['Asset Compression', 'Lighthouse Score 95+', 'Fast Touch Target Layout']
      },
      status: 'Live Platform',
      liveUrl: 'https://pochetride.com'
    },
    {
      id: 'sw-04',
      number: '04',
      domain: 'software',
      subCategory: 'saas',
      title: 'Zameen Experts Executive PA Management',
      subtitle: 'Enterprise Dashboard with Role-Based Access Control & Schedule Tracking',
      category: 'Enterprise SaaS & Web Dashboard',
      role: 'SaaS Platform Architect & Frontend Lead',
      image: '/images/project_zameen_experts.webp',
      description: 'An executive management dashboard system featuring CEO schedule tracking, meeting outcome recording, confidential expense approvals, and role-based access control.',
      purpose: 'Executive offices face communication bottlenecks between CEOs, PAs, and Admins when coordinating schedules and confidential approvals.',
      contribution: 'Architected the SaaS frontend and state management system: designed RBAC tiers, created the daily brief synthesizer, and built expense approval workflows.',
      implementation: 'Engineered a state machine managing 4 authorization levels (CEO, PA, HR, Admin). Built instantaneous role switching with client-side field masking for sensitive financial figures.',
      outcomes: 'Enabled 100% compliant RBAC security, eliminated scheduling overlaps, and automated morning briefing generation for C-level leadership.',
      highlights: 'Role-Based Access Control (CEO/PA/HR/Admin) & Automated Daily Briefs',
      tags: ['Dashboard Web App', 'Executive System', 'Expense Approval', 'Schedule Tracker', 'Analytics', 'RBAC Security'],
      metrics: [
        { label: 'Security Compliance', value: '100% RBAC' },
        { label: 'Executive Roles', value: '4 Tiers' },
        { label: 'Daily Brief Speed', value: 'Instant' }
      ],
      details: [
        'Granular role switcher allowing instant role-specific data authorization and UI filtering.',
        'Central command dashboard with real-time meeting counters and high-priority tasks.',
        'Automated executive daily brief generator synthesizing schedule highlights and pending decisions.',
        'Confidential expense approval pipeline with receipt attachment previews and audit logging.'
      ],
      stack: {
        frontend: ['React Dashboard Architecture', 'Tailwind CSS', 'State Machine / Context API', 'Lucide UI Icons'],
        security: ['Role-Based Access Control (RBAC)', 'Confidential Data Masking', 'Session Management'],
        analytics: ['KPI Summary Cards', 'Meeting Velocity Charts', 'Audit Trail Activity Logs']
      },
      status: 'Enterprise Deployed',
      githubUrl: 'https://github.com/saadrajpoot3355/-PA-Management-System'
    },
    {
      id: 'sw-05',
      number: '05',
      domain: 'software',
      subCategory: 'saas',
      title: 'Mtech Pro Stock Inventory SaaS',
      subtitle: 'Multi-Warehouse Inventory Tracking with Real-Time Profit Analytics & Exports',
      category: 'Software & SaaS Platform',
      role: 'Full-Stack SaaS Developer',
      image: '/images/project_mtech_pro_stock.webp',
      description: 'An all-in-one SaaS inventory and stock tracking platform featuring sales dashboards, automated low-stock alerts, financial reporting, and 1-click PDF/Excel export tools.',
      purpose: 'SMEs suffer financial leakages due to unrecorded stock shrinkage and manual errors in spreadsheets.',
      contribution: 'Developed real-time FIFO profit margin analyzers, client-side PDF/Excel report generators, and multi-warehouse data partitioning.',
      implementation: 'Implemented weighted-average cost computation algorithms. Integrated jsPDF and Excel table parsers allowing managers to generate audited inventory statements in 1 click.',
      outcomes: 'Attained 99.9% inventory tracking accuracy, instantaneous low-stock warning dispatch, and reduced financial auditing report generation time.',
      highlights: 'Real-Time Stock Analytics, Automated Alerts & 1-Click PDF/Excel Auditing',
      tags: ['SaaS Dashboard', 'Inventory Management', 'Profit Reports', 'PDF/Excel Export', 'Multi-User', 'Stock Alerts'],
      metrics: [
        { label: 'Data Export Formats', value: 'PDF & Excel' },
        { label: 'Stock Accuracy', value: '99.9%' },
        { label: 'Reorder Alert Latency', value: 'Instant' }
      ],
      details: [
        'Live dashboard overview presenting total stock valuation, top-selling SKUs, and net profit margin.',
        'Configurable low-stock threshold warning system with proactive reorder triggers.',
        'One-click PDF invoice and Excel spreadsheet generator for auditing and tax reconciliation.',
        'Multi-user role hierarchy separating warehouse staff from financial executives.'
      ],
      stack: {
        frontend: ['React / Next.js', 'Tailwind CSS', 'Data Visualization Charts', 'Client-Side PDF Generator (jsPDF)'],
        backend: ['Inventory API Engine', 'Excel / CSV Parser', 'Automated Reorder Trigger Webhooks'],
        features: ['Real-Time P&L Calculations', 'Multi-Warehouse Partitioning', 'Audit Activity Logs']
      },
      status: 'Production System',
      githubUrl: 'https://github.com/saadrajpoot3355/Mtech-Pro-Stock'
    },
    {
      id: 'rob-sumo-beast',
      number: '06',
      domain: 'robotics',
      subCategory: 'combat',
      title: 'Sumo Beast Combat Robot',
      subtitle: 'High-Torque 6WD Autonomous Combat Platform & Custom Wedge Blade',
      category: 'Combat Robotics & Hardware',
      role: 'Lead Robotics & Hardware Engineer',
      image: '/images/robot_sumo_beast.webp',
      objective: 'Engineer an unyielding autonomous 6WD combat vehicle with zero boundary-fault rates and maximum pushing power.',
      description: 'A heavyweight autonomous combat robot engineered for competitive sumo wrestling arenas. Built with a custom 6-wheel-drive chassis, high-response dual H-bridge motor drivers, and reinforced steel wedge armor.',
      purpose: 'Traditional sumo robots fail due to wheel slippage and motor reversal latency. This design maximizes torque and boundary sensing precision.',
      contribution: 'Designed the 6WD chassis, custom silicone treads, BTS7960 driver integration, and ESP32 sensor fusion logic.',
      implementation: 'Configured dual-core ESP32 FreeRTOS tasks to separate boundary detection from ultrasonic ranging, delivering sub-10ms directional inversion.',
      outcomes: 'Delivered 18+ kg-cm stall torque, 100% boundary safety record, and sub-10ms counter-maneuver reaction.',
      highlights: '6WD High-Torque Drivetrain with Sub-10ms Direction Inversion',
      tags: ['Autonomous Robotics', '6WD Drivetrain', 'ESP32', 'C/C++', 'Sensor Fusion', 'BTS7960 Drivers'],
      metrics: [
        { label: 'Drivetrain Torque', value: '18+ kg-cm' },
        { label: 'Control Loop Latency', value: '< 10 ms' },
        { label: 'Sensor Sampling', value: '100 Hz' }
      ],
      details: [
        'Custom 6-wheel drive layout with high-friction silicone tires for maximum traction.',
        '15-degree attack angle steel wedge blade to lift opponents.',
        '43A peak stall current handling via BTS7960 bridges.',
        'Real-time infrared and ultrasonic sensor fusion.'
      ],
      stack: {
        hardware: ['Custom 6WD Chassis', 'High-Torque DC Geared Motors', 'Steel Wedge Scoop', '4S LiPo Power Rail'],
        firmware: ['ESP32', 'C/C++', 'FreeRTOS Dual-Core Tasks', 'PWM Motor Inversion'],
        sensors: ['Dual IR Ring Line Sensors', 'Ultrasonic Rangefinders', 'Telemetry Streamer']
      },
      status: 'Tournament Ready',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-simba-2',
      number: '07',
      domain: 'robotics',
      subCategory: 'combat',
      title: 'Simba 2.0 Combat & Telemetry Platform',
      subtitle: 'Heavy-Duty Dual-Motor Combat Platform with Live RF Telemetry',
      category: 'Combat Robotics & RF Telemetry',
      role: 'Embedded Hardware Developer',
      image: '/images/robot_simba_2_grid.webp',
      objective: 'Eliminate electronic resets and inductive burnouts while broadcasting real-time diagnostics (current, voltage, thermals) to a remote operator.',
      description: 'A tactical dual-motor combat robot featuring reinforced chassis, high-capacity power delivery, and wireless RF telemetry for live system monitoring.',
      purpose: 'Combat robots frequently suffer from inductive back-EMF spikes and a lack of diagnostic visibility into battery/thermal health.',
      contribution: 'Engineered the multi-rail isolated power distribution board, flyback snubbing circuits, and bidirectional 2.4GHz RF firmware.',
      implementation: 'Designed an opto-isolated control barrier separating motor transients from logic rails. Integrated nRF24L01 transceivers for real-time telemetry.',
      outcomes: 'Zero controller resets during stall torture testing and active thermal monitoring with alert thresholds.',
      highlights: 'High-Current Isolated Power Architecture & Wireless Telemetry',
      tags: ['Robotics Hardware', 'Motor Drivers', 'Chassis Design', 'Embedded Circuits', 'RF Telemetry', 'Power Electronics'],
      metrics: [
        { label: 'Peak Current Handling', value: '50A Burst' },
        { label: 'Telemetry Range', value: '150+ Meters' },
        { label: 'Chassis Durability', value: 'High Impact' }
      ],
      details: [
        'High-capacity power distribution wiring harness.',
        'Multi-layer motor driver bridge with active cooling.',
        'Shock-absorbing electronics deck isolation.',
        'Real-time telemetry of battery, current, and thermal stats.'
      ],
      stack: {
        hardware: ['Dual High-Power DC Motors', 'Lead-Acid Power Pack', 'Armored Front Shield', 'Optocoupler Isolation'],
        firmware: ['Arduino / C++', 'RF24 Protocol', 'ADC Calibration', 'PWM Speed Profiling'],
        sensors: ['Current Sense Resistors', 'Voltage Dividers', 'Thermal Probes']
      },
      status: 'Active Field Rig',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-cloud-biometric',
      number: '08',
      domain: 'robotics',
      subCategory: 'iot',
      title: 'Cloud Biometric Attendance Hardware',
      subtitle: 'Optical Fingerprint Scanner with Real-Time Wi-Fi Cloud Sync & Offline Flash Cache',
      category: 'IoT & Embedded Systems',
      role: 'Embedded Firmware & IoT Architect',
      image: '/images/cloud_attendance_robot.webp',
      objective: 'Provide instant biometric identification with sub-500ms match latency and zero record loss using non-volatile flash caching.',
      description: 'An enterprise IoT biometric hardware engine combining optical fingerprint scanning with Wi-Fi cloud synchronization and offline template caching.',
      purpose: 'Traditional attendance systems are vulnerable to manual errors and network downtime. This system provides reliable, cloud-synced identification.',
      contribution: 'Wired ESP32 to UART fingerprint module, built circular flash memory logging, and integrated encrypted REST APIs.',
      implementation: 'Implemented 1:N fingerprint matching at the DSP level. Built an auto-failover buffer in NVS storing 1,000 logs for delayed upload upon network recovery.',
      outcomes: 'Sub-500ms verification latency, 99.9% data reliability, and seamless cloud sync.',
      highlights: 'Sub-500ms Biometric Match & Resilient Offline Buffer Sync',
      tags: ['IoT Hardware', 'Biometric Auth', 'ESP32 Wi-Fi', 'C/C++', 'REST API', 'OLED UI', 'Security'],
      metrics: [
        { label: 'Match Speed', value: '< 500 ms' },
        { label: 'Offline Log Buffer', value: '1,000+ Records' },
        { label: 'Cloud Uptime Sync', value: '99.9%' }
      ],
      details: [
        'High-precision optical fingerprint sensor.',
        'Circular flash offline buffering for network resilience.',
        '128x64 I2C OLED display for feedback.',
        'Encrypted JSON payload transmission.'
      ],
      stack: {
        hardware: ['ESP32-WROOM-32', 'Optical Biometric Module', '0.96" I2C OLED', 'Buzzer & Status LEDs'],
        firmware: ['C/C++', 'Arduino IDE / ESP-IDF', 'UART Protocols', 'HTTPClient / TLS', 'NVS Memory'],
        cloud: ['RESTful Webhook API', 'PostgreSQL / Firebase', 'Live Web Dashboard']
      },
      status: 'Enterprise Deployed',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-line-follower',
      number: '09',
      domain: 'robotics',
      subCategory: 'combat',
      title: 'Line Following Robot for Competition',
      subtitle: 'High-Velocity Competition Robot with 8-Sensor IR Array & PID Track Navigation',
      category: 'Autonomous Competition Robotics',
      role: 'Autonomous Systems Developer',
      image: '/images/robotics/line_follower_competition.webp',
      objective: 'Deliver sub-millisecond track following and maximum velocity across hairpin bends without track derailment.',
      description: 'A high-speed competition robot built with an 8-channel infrared reflectance array, coreless DC motors, and a real-time PID steering loop.',
      purpose: 'High processing rates prevent inertia derailment at sharp corners while maintaining peak forward velocity.',
      contribution: 'Designed a 2-layer PCB, calibrated the sensor matrix, and tuned the PID closed-loop control.',
      implementation: 'Sampled IR sensors at 1.0 kHz. Engineered float-precision PID routines that compensate for angular drift.',
      outcomes: '99.4% tracking accuracy at top sprint speeds.',
      highlights: '1.0 kHz Closed-Loop PID Steering & Custom Lightweight PCB',
      tags: ['Robotics', 'ESP32', 'PID Control', 'Sensors', 'Control Systems', 'Custom PCB'],
      metrics: [
        { label: 'Control Loop Rate', value: '1.0 kHz' },
        { label: 'Track Tracking Accuracy', value: '99.4%' },
        { label: 'Chassis Weight', value: 'Ultra-Light' }
      ],
      details: [
        '8-channel high-density infrared phototransistor array.',
        'Continuous PID positional calculation.',
        'Low center-of-gravity custom PCB chassis.',
        'Dynamic PWM braking algorithms.'
      ],
      stack: {
        hardware: ['ESP32-C3 / S2 Mini', '8-Channel IR Reflectance Array', 'TB6612FNG Driver', 'Coreless DC Motors'],
        firmware: ['C++ / Arduino IDE', 'Calibrated ADC Surface Matrix', 'PID Steering Logic', 'Interrupt Timers'],
        protocols: ['I2C Sensor Bus', 'Hardware PWM Timer Channels', 'UART Debugging']
      },
      status: 'Competition Verified',
      githubUrl: 'https://github.com/saadrajpoot3355',
      demoUrl: 'https://wokwi.com/projects/445389122581430273'
    },
    {
      id: 'rob-earthquake-door',
      number: '10',
      domain: 'robotics',
      subCategory: 'sensors',
      title: 'Earthquake Activated Emergency Door Evacuation System',
      subtitle: 'Seismic Vibration Sensing & Automated Ultrasonic Safe-Exit Lock Controller',
      category: 'Embedded Safety & Automation',
      role: 'Embedded Systems Developer',
      image: '/images/robotics/earthquake_system.webp',
      objective: 'Protect life during tremors by triggering alarms and releasing automated exit doors.',
      description: 'An automated safety station combining seismic vibration detection with HC-SR04 ultrasonic proximity checking to secure or clear exits.',
      purpose: 'Panic causes jammed exit doors during earthquakes. This system ensures escape routes are autonomous and ready.',
      contribution: 'Programmed interrupt-driven vibration detection and integrated the ultrasonic clearance verification.',
      implementation: 'Used an SW-420 seismic sensor connected to an external interrupt pin. Validated physical door clearance before commanding high-torque servos.',
      outcomes: 'Sub-50ms hazard reaction, 300ms barrier release, and reliable alarm triggering.',
      highlights: 'Sub-50ms Seismic Reaction & Automated Safe-Exit Lock Release',
      tags: ['Arduino', 'Sensors', 'Automation', 'Embedded Systems', 'Control Systems'],
      metrics: [
        { label: 'Seismic Reaction Time', value: '< 50 ms' },
        { label: 'Proximity Threshold', value: '15 cm' },
        { label: 'Actuator Sweep Speed', value: '300 ms' }
      ],
      details: [
        'Digital seismic vibration detection with rapid debouncing.',
        'Ultrasonic sonar proximity validation.',
        'High-torque servo door release.',
        'Acoustic alarm and LED strobe warning system.'
      ],
      stack: {
        hardware: ['Arduino Uno (ATmega328P)', 'SW-420 Vibration Sensor', 'HC-SR04 Ultrasonic Sensor', 'MG996R Servo'],
        firmware: ['Embedded C / Arduino', 'Microsecond Ranging Engine', 'State-Triggered Branching', 'Servo PWM'],
        protocols: ['Digital GPIO Interrupts', 'Pulse-Width Modulation', 'Serial 9600 Logging']
      },
      status: 'Functional Prototype',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-arm-4dof',
      number: '11',
      domain: 'robotics',
      subCategory: 'arms',
      title: '4-DOF Robotic Arm with WebSockets Controller',
      subtitle: 'Wireless HTML5 Touch Interface, Multi-Axis Kinematics & Sequence Recording',
      category: 'Robotics Kinematics & Web Control',
      role: 'Robotics Firmware & Web Controls Developer',
      image: '/images/robotics/robot_arm_4servo.webp',
      objective: 'Create a responsive, wireless robotic manipulator controllable over Wi-Fi with macro recording.',
      description: 'A 4-DOF arm powered by an ESP32 hosting an asynchronous WebSocket server for browser-based multi-axis control.',
      purpose: 'Traditional pendants are expensive. This allows zero-install control from any browser.',
      contribution: 'Architected the asynchronous WebSocket server, built the virtual joystick interface, and programmed the kinematic sequence logger.',
      implementation: 'Used ESPAsyncWebServer for <15ms latency. Engineered non-blocking kinematic interpolation to prevent servo jitter.',
      outcomes: 'Sub-15ms control loop latency and 1.0-degree positioning resolution.',
      highlights: 'Sub-15ms WebSocket Teleoperation & Kinematic Routine Recorder',
      tags: ['Robotics', 'ESP32', 'WebSockets', 'Kinematics', 'IoT', 'Control Systems'],
      metrics: [
        { label: 'Degrees of Freedom', value: '4-DOF' },
        { label: 'WebSocket Latency', value: '< 15 ms' },
        { label: 'Joint Accuracy', value: '1.0° Resolution' }
      ],
      details: [
        'Articulated Base, Shoulder, Elbow, and Gripper actuation.',
        'Bidirectional WebSocket communication.',
        'Macro step-recording memory module.',
        'Self-hosted responsive web app.'
      ],
      stack: {
        hardware: ['ESP32 NodeMCU Wi-Fi Board', '4x Metal-Gear Servos (MG996R)', 'Articulated Mechanical Arm Chassis'],
        firmware: ['ESP32 C++', 'ESPAsyncWebServer / AsyncTCP', 'Kinematic Interpolation', 'Step Memory Stack'],
        protocols: ['WebSockets (ws://)', 'HTTP REST / PROGMEM Server', 'Hardware PWM Servo Channels']
      },
      status: 'Fully Operational Rig',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-arm-computervision',
      number: '12',
      domain: 'robotics',
      subCategory: 'arms',
      title: 'AI Computer Vision Hand-Tracking Bionic Arm',
      subtitle: 'Real-Time 21-Keypoint MediaPipe Vision Pipeline & 5-Finger Serial Kinematics',
      category: 'AI Vision & Biomimetic Robotics',
      role: 'AI & Computer Vision Engineer',
      image: '/images/robotics/computervision_robot_arm.webp',
      objective: 'Translate human hand gestures to a robotic hand using markerless CV.',
      description: 'A system using Python, MediaPipe, and OpenCV to track 21 hand landmarks at 60 FPS, streaming finger states to an Arduino controlling 5 servos.',
      purpose: 'Sensor gloves are bulky and unreliable. Markerless tracking provides an intuitive, non-invasive teleoperation system.',
      contribution: 'Developed the MediaPipe landmark pipeline, geometric angle conversions, and Arduino serial parser.',
      implementation: 'Extracted spatial vectors from RGB video, calculated Euclidean distances, and mapped them to servo duty cycles via UART.',
      outcomes: 'Sub-25ms response, fluid 5-finger articulation, and accurate gesture imitation.',
      highlights: '60 FPS 21-Landmark Neural Hand Tracking & Sub-25ms Reaction',
      tags: ['Robotics', 'Python', 'OpenCV', 'MediaPipe', 'Serial Comms', 'AI / CV'],
      metrics: [
        { label: 'Tracking Frame Rate', value: '60 FPS' },
        { label: 'Landmark Points', value: '21 3D Points' },
        { label: 'Latency to Action', value: '< 25 ms' }
      ],
      details: [
        'Zero-latency 21-landmark neural tracking.',
        'Independent thumb, index, middle, ring, and pinky flexion.',
        'Synchronized servo angle streaming over USB UART.',
        'Biomimetic range-of-motion mapping.'
      ],
      stack: {
        hardware: ['5-DOF Biomimetic Hand Chassis', '5x Micro Servos (SG90)', 'Arduino Uno', 'HD Optical Camera'],
        software: ['Python 3', 'OpenCV (cv2)', 'Google MediaPipe Hands', 'PySerial'],
        firmware: ['Arduino C++', 'Multi-Servo PWM Interpolation Engine']
      },
      status: 'Active AI Hardware Link',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-obstacle-avoiding',
      number: '13',
      domain: 'robotics',
      subCategory: 'combat',
      title: 'Autonomous Obstacle Avoiding Rover',
      subtitle: 'Dynamic Pan-Tilt Ultrasonic Ranging & Intelligent Pathfinding Algorithm',
      category: 'Autonomous Mobile Robotics',
      role: 'Robotics Software & Hardware Builder',
      image: '/images/robotics/obstacle_avoiding_robot.webp',
      objective: 'Navigate cluttered environments autonomously by scanning and avoiding obstacles.',
      description: 'A 4WD rover with a servo-mounted ultrasonic sensor. It scans terrain, compares clearance, and executes turns.',
      purpose: 'Enable indoor exploration without getting stuck in corners or hitting barriers.',
      contribution: 'Wired the 4WD chassis, motor drivers, and programmed the look-ahead state machine.',
      implementation: 'Finite-state machine logic: stop at 20cm, pan servo 45°/135°, compare ranges, and pivot to open heading.',
      outcomes: 'Zero-collision navigation through cluttered courses.',
      highlights: '180° Pan-Tilt Sonar Sweeper & Finite State Pathfinding',
      tags: ['Robotics', 'Arduino', 'Sensors', 'Automation', 'Control Systems'],
      metrics: [
        { label: 'Hazard Detection Limit', value: '20 cm' },
        { label: 'Sensor Sweep Range', value: '180 Degrees' },
        { label: 'Reaction Latency', value: '< 20 ms' }
      ],
      details: [
        'Front-mounted 180-degree ultrasonic sweeper.',
        '4WD differential drive PWM speed control.',
        'Backup and pivot maneuver logic.',
        'Continuous object detection.'
      ],
      stack: {
        hardware: ['Arduino Uno', 'L298N Dual H-Bridge Driver', '4x TT Geared DC Motors', 'HC-SR04 Sonar', 'SG90 Servo'],
        firmware: ['Arduino C++', 'Time-of-Flight Ranging Calculations', 'Differential Skid-Steer Speed Routines'],
        protocols: ['PWM Motor Control', 'Digital Sonar Trigger/Echo Timing', 'Serial Diagnostics']
      },
      status: 'Operational Rover',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-sonar-radar',
      number: '14',
      domain: 'robotics',
      subCategory: 'sensors',
      title: 'Ultrasonic Sonar Radar with Processing GUI',
      subtitle: 'Continuous 180° Mechanical Sweep Sonar with Visualized Target Radar Display',
      category: 'Sensors & Signal Processing',
      role: 'Embedded Systems & GUI Developer',
      image: '/images/robotics/radar_sonar_project.webp',
      objective: 'Visualizing spatial acoustic echoes onto a real-time computer canvas.',
      description: 'A sweeping sonar system utilizing an Arduino and Processing GUI to render spatial target blips on a polar coordinate radar map.',
      purpose: 'Raw numerical ranges are non-intuitive. Visualization delivers immediate spatial intelligence.',
      contribution: 'Built the mechanical scanner and the Processing 4 GUI radar display.',
      implementation: 'Microcontroller rotates servo 1° per step, triggers sensor, and sends `(angle,distance.)` strings. Java app maps polar to Cartesian for rendering.',
      outcomes: 'Real-time 180° mapping at 1-degree resolution.',
      highlights: '180° Polar Sonar Scanner & Real-Time GUI Target Visualization',
      tags: ['Arduino', 'Sensors', 'Signal Processing', 'Processing IDE', 'Control Systems'],
      metrics: [
        { label: 'Sweep Arc', value: '15° to 165°' },
        { label: 'Angular Resolution', value: '1.0 Degree' },
        { label: 'Max Detection Range', value: '40 cm' }
      ],
      details: [
        'Continuous 180-degree pan sweep.',
        'Serial packet protocol for telemetry.',
        'Phosphorescent graphical radar rendering.',
        'Sub-centimeter target detection.'
      ],
      stack: {
        hardware: ['Arduino Uno', 'HC-SR04 Ultrasonic Sensor', 'TowerPro SG90 Servo', 'Custom Pan Bracket'],
        software: ['Processing Java GUI Framework', 'Serial Port Buffer Parser', 'Polar Coordinate Converter'],
        firmware: ['Arduino C++', 'Angular Sweep Sequencer', 'UART Formatter']
      },
      status: 'Active Demonstration System',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-snake-game',
      number: '15',
      domain: 'robotics',
      subCategory: 'iot',
      title: 'Arduino Retro Snake Game on 8x8 LED Matrix',
      subtitle: 'Embedded Arcade Gaming System with Dual-Axis Joystick & MAX7219 Matrix Driver',
      category: 'Embedded Systems & Game Logic',
      role: 'Firmware & Embedded Game Logic Developer',
      image: '/images/robotics/arduino_snake_game.webp',
      objective: 'Run Snake arcade game on bare-metal hardware with matrix multiplexing.',
      description: 'A classic Snake game on an 8x8 matrix with dual-axis joystick, featuring real-time score tracking.',
      purpose: 'Demonstrate display multiplexing and non-blocking game loops on constrained microcontrollers.',
      contribution: 'Programmed the MAX7219 driver, joystick polling, and snake coordinate arrays.',
      implementation: 'Non-blocking loop polls joystick, updates coordinate array, checks collisions, and renders bits to the matrix.',
      outcomes: 'Fluid 60Hz display, <5ms input latency, and full arcade logic.',
      highlights: 'Bare-Metal C++ Game Engine & 60 Hz MAX7219 Bitwise Driver',
      tags: ['Arduino', 'Embedded Systems', 'MAX7219', 'Sensors', 'C++'],
      metrics: [
        { label: 'Display Matrix', value: '8x8 LEDs (64 Pixels)' },
        { label: 'Frame Refresh Rate', value: '60 Hz' },
        { label: 'Input Latency', value: '< 5 ms' }
      ],
      details: [
        'Dual-axis analog joystick polling.',
        'MAX7219 3-wire serial driver.',
        'Coordinate-based snake growth management.',
        'Pseudorandom food spawn algorithm.'
      ],
      stack: {
        hardware: ['Arduino Uno (ATmega328P)', 'MAX7219 8x8 LED Matrix', 'Dual-Axis Analog Thumbstick'],
        firmware: ['Bare-Metal Arduino C++', 'LedControl Shift Register Driver', 'Non-Blocking Game Timers'],
        protocols: ['3-Wire Serial Bit-Banging (DIN, CS, CLK)', 'Analog ADC Joystick Sampling']
      },
      status: 'Fully Playable System',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-esp32-cam',
      number: '16',
      domain: 'robotics',
      subCategory: 'iot',
      title: 'ESP32-CAM Real-Time Video Streaming & Motion Rover System',
      subtitle: 'Embedded Wireless Video Server, FreeRTOS HTTP Daemon & Pan/Tilt Motor Controls',
      category: 'IoT Video & Edge Computing',
      role: 'Embedded IoT & Video Systems Engineer',
      image: '/images/robotics/esp32cam_streamer.webp',
      objective: 'Stream real-time video over Wi-Fi while controlling motors.',
      description: 'An edge-computing video station using ESP32-CAM to serve an interactive web interface with sub-100ms MJPEG streaming.',
      purpose: 'Lower cost and power consumption compared to Raspberry Pi surveillance systems.',
      contribution: 'Configured the OV2640 driver, multi-threaded FreeRTOS HTTP daemon, and motor PWM logic.',
      implementation: 'Streamed MJPEG at 25+ FPS. Used Core 0 for video acquisition and Core 1 for motor control.',
      outcomes: 'Sub-100ms streaming latency, UXGA resolution support.',
      highlights: '25+ FPS Low-Latency MJPEG Stream & FreeRTOS Dual-Core Architecture',
      tags: ['ESP32', 'Robotics', 'IoT', 'Embedded Systems', 'FreeRTOS', 'Control Systems'],
      metrics: [
        { label: 'Video Frame Rate', value: '25+ FPS' },
        { label: 'Resolution Support', value: 'VGA to UXGA' },
        { label: 'Stream Latency', value: '< 100 ms' }
      ],
      details: [
        'Low-latency MJPEG video streaming.',
        'Web controls for camera settings.',
        'Multi-channel PWM motor actuation.',
        'External PSRAM buffering.'
      ],
      stack: {
        hardware: ['AI-Thinker ESP32-CAM Board', 'OV2640 2MP Camera Sensor', '4MB PSRAM', 'L9110S Motor Driver'],
        firmware: ['ESP-IDF / Arduino Core', 'esp_http_server Asynchronous Engine', 'FreeRTOS Tasks', 'PWM Drivers'],
        protocols: ['MJPEG over HTTP/1.1', 'Wi-Fi 802.11 b/g/n (AP & STA)', 'GPIO / PWM Timers']
      },
      status: 'Functional Stream Rig',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-ultrasound-scanner',
      number: '17',
      domain: 'robotics',
      subCategory: 'sensors',
      title: 'IoT Ultrasound Range Scanner with Web Dashboard & I2C LCD',
      subtitle: 'ESP8266 Microsecond Acoustic Telemetry, Responsive Web Interface & Physical LCD Feedback',
      category: 'IoT Sensors & Embedded Web',
      role: 'IoT Firmware Developer',
      image: '/images/robotics/ultrasound_scanner.webp',
      objective: 'Construct a dual-interface proximity tool broadcasting to LCD and Web.',
      description: 'An IoT station using ESP8266 to measure distance and serve a web dashboard while displaying data on an I2C LCD.',
      purpose: 'Industrial tanks need both on-site readouts for staff and web dashboards for remote supervisors.',
      contribution: 'Built the I2C bus driver, HTML5 dashboard, and distance-timing routines.',
      implementation: 'Triggered 10-microsecond pulses, processed distance, and pushed updates via I2C to LCD and AJAX to web clients.',
      outcomes: '±3mm precision, sub-20ms web latency.',
      highlights: 'Dual I2C LCD Display & Real-Time Embedded Web Dashboard',
      tags: ['ESP8266', 'Sensors', 'IoT', 'Embedded Systems', 'Web Server'],
      metrics: [
        { label: 'Measuring Range', value: '2 cm - 400 cm' },
        { label: 'Measurement Accuracy', value: '± 3 mm' },
        { label: 'Web Server Latency', value: '< 20 ms' }
      ],
      details: [
        'High-precision pulse-echo timing.',
        'Responsive embedded HTML5 UI.',
        'I2C PCF8574 LCD integration.',
        'Continuous distance calculations.'
      ],
      stack: {
        hardware: ['ESP8266 NodeMCU', 'HC-SR04 Ultrasonic Distance Sensor', '16x2 I2C LCD Display', '3.3V/5V Rail'],
        firmware: ['ESP8266 Arduino Core', 'ESP8266WebServer Library', 'Wire.h / LiquidCrystal_I2C', 'PROGMEM UI'],
        protocols: ['I2C (SDA/SCL at 100kHz)', 'HTTP/1.1 REST Server', 'Microsecond Digital PulseIn']
      },
      status: 'Live IoT Instrument',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-esp8266-rc-car',
      number: '18',
      domain: 'robotics',
      subCategory: 'combat',
      title: 'WiFi Controlled ESP8266 RC Rover Vehicle',
      subtitle: 'Wireless Access Point Rover with Virtual Touchscreen Joystick Teleoperation',
      category: 'Wireless Teleoperation & Vehicles',
      role: 'Embedded Robotics Engineer',
      image: '/images/robotics/wifi_esp8266_rc_car.webp',
      objective: 'Provide wireless smartphone teleoperation for a rover using local Wi-Fi.',
      description: 'A mobile vehicle configured as a Wi-Fi Access Point, allowing any smartphone to control it via a web-based joystick interface.',
      purpose: 'Eliminate bulky physical transmitters by using mobile smartphones.',
      contribution: 'Designed the chassis, motor drivers, and hosted the virtual joystick app.',
      implementation: 'ESP8266 broadcast a dedicated SSID. Web requests from touch events mapped to differential PWM motor speeds.',
      outcomes: '60m control range, <30ms latency, and signal-loss failsafe.',
      highlights: 'Standalone Soft-AP Wi-Fi Controller & 60m Control Range',
      tags: ['ESP8266', 'Robotics', 'IoT', 'Control Systems', 'Automation'],
      metrics: [
        { label: 'Wi-Fi Control Range', value: '60+ Meters' },
        { label: 'Response Latency', value: '< 30 ms' },
        { label: 'Drive Layout', value: '4WD Differential' }
      ],
      details: [
        'Standalone Soft-AP web server.',
        'Dual H-bridge PWM motor controls.',
        'Differential skid-steering.',
        'Fail-safe auto-braking.'
      ],
      stack: {
        hardware: ['ESP8266 NodeMCU', 'L298N Dual Motor Driver', '4x DC Geared Motors', '7.4V Li-Ion Battery Pack'],
        firmware: ['ESP8266 Arduino Core', 'Soft-AP Wi-Fi Server', 'PWM Throttle Matrix', 'Fail-Safe Cut-Off'],
        protocols: ['Wi-Fi 802.11 b/g/n (Soft-AP)', 'HTTP REST & Touch WebSockets', 'Differential PWM']
      },
      status: 'Tested Hardware Rover',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },
    {
      id: 'rob-traffic-light',
      number: '19',
      domain: 'robotics',
      subCategory: 'sensors',
      title: 'Automated 3-Phase Traffic Intersection Signal Controller',
      subtitle: 'Deterministic State-Machine Timing Controller with Solid-State LED Driver Stages',
      category: 'Embedded Control Systems',
      role: 'Firmware & Control Systems Engineer',
      image: '/images/robotics/traffic_light_controller.webp',
      objective: 'Reliable, fail-safe signal sequencing for traffic transitions.',
      description: 'A solid-state intersection controller executing deterministic state sequences for Red, Yellow, and Green phases.',
      purpose: 'Systems must be fail-safe and deterministic to prevent contradictory light states.',
      contribution: 'Engineered the LED driver board and programmed a non-blocking state machine.',
      implementation: 'State machine iterates phases with microsecond-accurate timing registers and atomic pin logic.',
      outcomes: '100% reliable uptime with ±1ms precision.',
      highlights: 'Deterministic 3-Phase State Machine & ±1ms Phase Accuracy',
      tags: ['Arduino', 'Embedded Systems', 'Automation', 'Control Systems', 'C++'],
      metrics: [
        { label: 'Phase Precision', value: '± 1 ms' },
        { label: 'Standard Cycle Time', value: '12 Seconds' },
        { label: 'System Reliability', value: '100% Uptime' }
      ],
      details: [
        'Deterministic 3-phase cycle.',
        'Solid-state current-limited driver.',
        'Extendable for pedestrians/sensors.',
        'Bare-metal C++ reliability.'
      ],
      stack: {
        hardware: ['Arduino Uno (ATmega328P)', '3x 10mm Diffused LEDs', 'Metal Film Current Limiting Resistors'],
        firmware: ['Bare-Metal Arduino C++', 'Sequential State-Machine Pattern', 'Atomic Pin Writing'],
        protocols: ['Direct GPIO Digital Switching', 'Microsecond System Tick Timers', 'UART Diagnostic Output']
      },
      status: 'Active Timing Platform',
      githubUrl: 'https://github.com/saadrajpoot3355'
    }
  ];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      if (activePrimaryFilter === 'software' && project.domain !== 'software') return false;
      if (activePrimaryFilter === 'robotics' && project.domain !== 'robotics') return false;
      if (activeSubFilter !== 'all' && project.subCategory !== activeSubFilter) return false;
      return true;
    });
  }, [activePrimaryFilter, activeSubFilter]);

  const handlePrimaryFilterChange = (tabId) => {
    setActivePrimaryFilter(tabId);
    setActiveSubFilter('all');
  };

  return (
    <section id="projects" className="border-b border-white/10 bg-[#080a11] py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="section-eyebrow inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-400" />
            Projects & Engineering Portfolio
          </p>
          <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Featured Projects & Engineering Portfolio
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-300">
            Explore my work across software engineering, web development, AI, robotics, embedded systems, IoT,
            autonomous systems, and hardware engineering — with practical implementations, technical details, and
            project evidence.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-2xl bg-white/[0.04] p-1.5 border border-white/10 backdrop-blur-md">
            {primaryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handlePrimaryFilterChange(tab.id)}
                className={`rounded-xl px-4 py-2 text-xs sm:text-[13px] font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activePrimaryFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${activePrimaryFilter === tab.id ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1">
            {subCategoryFilters[activePrimaryFilter].map((subTab) => (
              <button
                key={subTab.id}
                onClick={() => setActiveSubFilter(subTab.id)}
                className={`rounded-xl px-3 py-1.5 text-xs sm:text-[12px] font-medium transition-all duration-200 border ${
                  activeSubFilter === subTab.id
                    ? 'border-blue-500/50 bg-blue-500/20 text-blue-300 shadow-sm'
                    : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {subTab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-slate-400 px-1 border-b border-white/5 pb-3">
          <span>
            Showing <strong className="text-white">{filteredProjects.length}</strong> of{' '}
            <strong className="text-white">{allProjects.length}</strong> total projects
          </span>
          <span className="hidden sm:inline text-[11px] text-slate-300">
            2-Column Responsive Portfolio Grid
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c0e17] transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.25)]"
            >
              <div>
                <div className="relative overflow-hidden bg-[#070912] aspect-[16/10] w-full border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="375"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-transparent to-black/40"></div>
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="rounded-full bg-black/60 border border-white/20 px-2.5 py-0.5 font-display text-[11px] font-bold text-white backdrop-blur">
                      #{project.number}
                    </span>
                    <span className="rounded-full bg-blue-600/80 border border-blue-400/30 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300 backdrop-blur">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      {project.status}
                    </span>
                  </div>
                  {project.metrics && (
                    <div className="absolute bottom-3 inset-x-3 z-10 grid grid-cols-3 gap-1.5 rounded-xl bg-black/60 border border-white/10 p-2 backdrop-blur-md">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <p className="font-display text-[11px] sm:text-xs font-bold text-white truncate">{m.value}</p>
                          <p className="text-[9px] sm:text-[10px] text-slate-300 truncate">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-5 sm:p-6 pb-2">
                  <h3 className="font-display text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-blue-300/90">{project.subtitle}</p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300 line-clamp-3">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span key={tag} className="badge text-[10px] sm:text-[11px]">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6 pt-3 border-t border-white/5 mt-3">
                <button
                  onClick={() => setModalProject(project)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs sm:text-[13px] font-semibold text-white hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all active:scale-[0.98]"
                >
                  <span>More Details</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 rounded-xl bg-emerald-600/20 border border-emerald-500/30 px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-600/30 transition-colors">
                      <Globe className="h-3 w-3 text-emerald-400" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 rounded-xl bg-emerald-600/20 border border-emerald-500/30 px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-600/30 transition-colors">
                      <ExternalLink className="h-3 w-3" />
                      <span>Simulation</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer noopener" aria-label={`${project.title} Source Code`} className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 text-slate-300 hover:bg-white/10 hover:text-white transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {modalProject && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto" onClick={() => setModalProject(null)}>
          <div className="relative w-full max-w-3xl rounded-3xl border border-white/15 bg-[#0c0e17] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto my-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalProject(null)} aria-label="Close Case Study" className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-600 px-3 py-0.5 text-xs font-bold text-white">Project #{modalProject.number}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{modalProject.category}</span>
              {modalProject.role && <span className="text-xs text-blue-300 font-medium">• {modalProject.role}</span>}
            </div>
            <h2 className="mt-3 font-display text-xl sm:text-3xl font-black text-white">{modalProject.title}</h2>
            <p className="mt-1 text-sm font-medium text-blue-300">{modalProject.subtitle}</p>
            <div className="mt-5 rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-[#070912]">
              <img src={modalProject.image} alt={modalProject.title} className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 space-y-5 text-xs sm:text-sm text-slate-300">
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-blue-400" /> System Overview & Engineering Goal
                </h3>
                <p className="leading-relaxed">{modalProject.description}</p>
                {modalProject.purpose && <p className="mt-2.5 text-slate-300 leading-relaxed"><strong className="text-white">Problem Addressed: </strong> {modalProject.purpose}</p>}
                {modalProject.objective && <p className="mt-2 text-blue-300 font-medium"><strong>Engineering Goal: </strong> {modalProject.objective}</p>}
              </div>
              {modalProject.contribution && (
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                    <UserCheck className="h-4 w-4 text-indigo-400" /> Personal Contribution & Role
                  </h3>
                  <p className="leading-relaxed">{modalProject.contribution}</p>
                </div>
              )}
              {modalProject.implementation && (
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                    <Wrench className="h-4 w-4 text-cyan-400" /> Architecture & Implementation Details
                  </h3>
                  <p className="leading-relaxed">{modalProject.implementation}</p>
                </div>
              )}
              {modalProject.details && (
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-emerald-400" /> Key Features & Technical Deliverables
                  </h3>
                  <ul className="space-y-1.5 list-disc list-inside">
                    {modalProject.details.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              )}
              {modalProject.hardware && (
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                    <Cpu className="h-4 w-4 text-emerald-400" /> Hardware Architecture & Circuit Components
                  </h3>
                  <ul className="space-y-1.5 list-disc list-inside">
                    {modalProject.hardware.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              )}
              {modalProject.stack && (
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                    <Layers className="h-4 w-4 text-blue-400" /> Technology & Component Stack
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(modalProject.stack).map(([cat, items]) => (
                      <div key={cat} className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase text-blue-400 capitalize">{cat}:</span>
                        {items.map((it) => <span key={it} className="rounded bg-white/10 px-2.5 py-0.5 text-xs text-slate-200">{it}</span>)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {modalProject.protocols && (
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                    <Wifi className="h-4 w-4 text-amber-400" /> Communication Protocols & Buses
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {modalProject.protocols.map((protocol, idx) => (
                      <span key={idx} className="rounded-md bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-[11px] font-medium text-amber-300">{protocol}</span>
                    ))}
                  </div>
                </div>
              )}
              {modalProject.sourceSnippet && (
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                    <Terminal className="h-4 w-4 text-purple-400" /> Implementation Excerpt
                  </h3>
                  <pre className="overflow-x-auto rounded-xl bg-[#05070e] p-4 font-mono text-xs text-blue-200 border border-white/10">
                    <code>{modalProject.sourceSnippet}</code>
                  </pre>
                </div>
              )}
              {modalProject.outcomes && (
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                    <Trophy className="h-4 w-4 text-yellow-400" /> Outcomes & Tangible Results
                  </h3>
                  <p className="leading-relaxed">{modalProject.outcomes}</p>
                </div>
              )}
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {modalProject.tags.map((tag) => <span key={tag} className="badge text-xs">{tag}</span>)}
              </div>
              <div className="flex items-center gap-2">
                {modalProject.liveUrl && (
                  <a href={modalProject.liveUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/30">
                    <Globe className="h-3.5 w-3.5" /> <span>Visit Live Demo</span>
                  </a>
                )}
                {modalProject.demoUrl && (
                  <a href={modalProject.demoUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors">
                    <ExternalLink className="h-3.5 w-3.5" /> <span>View Simulation</span>
                  </a>
                )}
                {modalProject.githubUrl && (
                  <a href={modalProject.githubUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors">
                    <Github className="h-3.5 w-3.5" /> <span>GitHub Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
