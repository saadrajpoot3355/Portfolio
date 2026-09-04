import React, { useState } from 'react';
import {
  Cpu,
  Bot,
  Wifi,
  Eye,
  Radio,
  Sliders,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
  Sparkles,
  X,
  ArrowUpRight,
  Layers,
  Activity,
  CheckCircle2,
  Terminal,
  Zap,
  Play
} from 'lucide-react';

export default function Robotics() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);
  const [modalProject, setModalProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'rovers', label: 'Autonomous & Rovers' },
    { id: 'arms', label: 'Robotic Arms & CV' },
    { id: 'iot', label: 'Microcontrollers & IoT' },
    { id: 'sensors', label: 'Sensors & Signal Processing' }
  ];

  const roboticsProjects = [
    // ── 01. Line Following Robot for Competition ─────────────────────────────
    {
      id: 'rob-01',
      number: '01',
      categoryType: 'rovers',
      title: 'Line Following Robot for Competition',
      subtitle: 'High-Velocity Competition Robot with 8-Sensor IR Array & PID Track Navigation',
      category: 'Autonomous Competition Robotics',
      tags: ['Robotics', 'ESP32', 'PID Control', 'Sensors', 'Control Systems', 'Custom PCB'],
      image: '/images/robotics/line_follower_competition.webp',
      objective:
        'Deliver sub-millisecond track line tracking and maximum velocity across hairpin bends, chicanes, and cross intersections without track derailment in competitive robotics races.',
      description:
        'A dedicated high-speed competition line-follower robot built with a multi-channel infrared reflectance array, dual high-RPM coreless DC geared motors, low-resistance MOSFET drivers, and real-time PID steering loops running on ESP32-C3 hardware.',
      keyFunctionality: [
        '8-channel high-density infrared phototransistor array reading track contrast at 1,000 Hz.',
        'Continuous Proportional-Integral-Derivative (PID) positional calculation compensating for track inertia.',
        'Custom lightweight PCB chassis engineered in EasyEDA with low center-of-gravity battery mounting.',
        'Dynamic PWM braking algorithms preventing wheel slippage during sharp 90-degree race turns.'
      ],
      hardware: [
        'ESP32-C3 / S2 Mini Microcontroller (160MHz 32-bit RISC-V)',
        '8-Channel High-Speed IR Reflectance Array',
        'TB6612FNG Dual H-Bridge Motor Driver',
        'High-RPM Precision Coreless DC Motors with Encoders',
        'Custom EasyEDA 2-Layer PCB Chassis & LiPo Power Regulators'
      ],
      firmware: [
        'C++ / Arduino IDE / ESP-IDF',
        'Calibrated ADC Surface Normalization Matrix',
        'Closed-Loop Proportional-Integral-Derivative (PID) Steering Logic',
        'Sub-1ms Interrupt-Driven Sensor Sampling Routines'
      ],
      protocols: ['I2C Sensor Bus', 'Hardware PWM Timer Channels', 'UART Telemetry Debugging'],
      metrics: [
        { label: 'Control Loop Rate', value: '1.0 kHz' },
        { label: 'Track Tracking Accuracy', value: '99.4%' },
        { label: 'Chassis Weight', value: 'Ultra-Light' }
      ],
      sourceSnippet:
        '// PID closed-loop steering calculation\nfloat error = calculateSensorPosition() - SETPOINT;\nP = error;\nI += error * dt;\nD = (error - lastError) / dt;\nfloat correction = (Kp * P) + (Ki * I) + (Kd * D);\nsetMotorSpeeds(BASE_SPEED + correction, BASE_SPEED - correction);',
      status: 'Competition Verified',
      githubUrl: 'https://github.com/saadrajpoot3355',
      demoUrl: 'https://wokwi.com/projects/445389122581430273'
    },

    // ── 02. Earthquake Project with Door Open System ─────────────────────────
    {
      id: 'rob-02',
      number: '02',
      categoryType: 'sensors',
      title: 'Earthquake Activated Emergency Door Evacuation System',
      subtitle: 'Seismic Vibration Sensing & Automated Ultrasonic Safe-Exit Lock Controller',
      category: 'Embedded Safety & Automation',
      tags: ['Arduino', 'Sensors', 'Automation', 'Embedded Systems', 'Control Systems'],
      image: '/images/robotics/earthquake_system.webp',
      objective:
        'Protect human life during sudden seismic tremors by instantly locking hazardous zones, sound-alarming occupants, and releasing automated servo door locks for unobstructed emergency evacuation.',
      description:
        'An automated life-safety embedded station combining high-sensitivity seismic shock vibration detection with HC-SR04 ultrasonic clearance telemetry. When tremors occur, the system triggers audio-visual alarms and commands high-torque servo linkages to secure or clear exits.',
      keyFunctionality: [
        'Instantaneous digital seismic vibration trigger with rapid debouncing interrupt detection.',
        'Ultrasonic sonar proximity ranging validating doorway clearance before commanding door swings.',
        'Servo actuator mechanism swinging access barriers to open or lock states in under 300ms.',
        'High-decibel piezoelectric acoustic alarm coupled with high-lumen strobe LEDs for immediate occupant warning.'
      ],
      hardware: [
        'Arduino Uno Microcontroller (ATmega328P)',
        'Seismic Shock / Vibration Sensor Module (SW-420)',
        'HC-SR04 Ultrasonic Distance Sensor',
        'TowerPro SG90 / MG996R Servo Actuator',
        'Active Piezo Buzzer & High-Lumen Emergency Warning LEDs'
      ],
      firmware: [
        'Embedded C / Arduino Framework',
        'Microsecond Ultrasonic Pulse Ranging Engine',
        'State-Triggered Seismic Hazard Threshold Branching',
        'Servo PWM Position Angle Controllers (0° Closed, 90° Open)'
      ],
      protocols: ['Digital GPIO Interrupts', 'Pulse-Width Modulation (PWM)', 'Serial 9600 Diagnostic Logging'],
      metrics: [
        { label: 'Seismic Reaction Time', value: '< 50 ms' },
        { label: 'Proximity Threshold', value: '15 cm' },
        { label: 'Actuator Sweep Speed', value: '300 ms' }
      ],
      sourceSnippet:
        'int earthquake = digitalRead(earthquakePin);\nif (earthquake == HIGH) {\n  doorServo.write(closedAngle); // Instantly lockdown barrier\n  digitalWrite(buzzerPin, HIGH);\n  digitalWrite(ledPin, HIGH);\n  Serial.println("Earthquake detected! Emergency protocol activated!");\n}',
      status: 'Functional Hardware Prototype',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 03. Robot Arm (4 Servo) ──────────────────────────────────────────────
    {
      id: 'rob-03',
      number: '03',
      categoryType: 'arms',
      title: '4-DOF Robotic Arm with WebSockets Controller',
      subtitle: 'Wireless HTML5 Touch Interface, Multi-Axis Kinematics & Sequence Recording',
      category: 'Robotics Kinematics & Web Control',
      tags: ['Robotics', 'ESP32', 'WebSockets', 'Kinematics', 'IoT', 'Control Systems'],
      image: '/images/robotics/robot_arm_4servo.webp',
      objective:
        'Create a responsive, multi-degree-of-freedom robotic manipulator controllable over local Wi-Fi with step-recording and automated macro playback capabilities.',
      description:
        'A 4-Degree-of-Freedom robotic arm powered by an ESP32 dual-core SoC hosting an asynchronous web server and WebSocket endpoint. Operators can control Base, Shoulder, Elbow, and Gripper servos individually from any web browser and record kinematic sequences for automated industrial playback.',
      keyFunctionality: [
        '4-axis articulated joint actuation spanning Base rotation, Shoulder pitch, Elbow pitch, and Gripper pinch.',
        'Sub-15ms latency bidirectional WebSocket communication between browser sliders and ESP32 servos.',
        'Built-in step-recording memory module capable of logging motion waypoints and looping macro routines.',
        'Self-hosted responsive web app served directly from ESP32 PROGMEM with no external router dependency.'
      ],
      hardware: [
        'ESP32 NodeMCU Wi-Fi Development Board',
        '4x High-Torque Metal-Gear Servos (MG996R / SG90)',
        'Articulated 4-DOF Acrylic/Aluminum Mechanical Arm Chassis',
        'External 5V 4A Regulated Servo Power Rail with Common Ground'
      ],
      firmware: [
        'ESP32 C++ with ESPAsyncWebServer & AsyncTCP Libraries',
        'Real-Time WebSocket Binary/JSON Message Serialization',
        'Non-Blocking Kinematic Interpolation & Ramp Curves',
        'Vector-Based Recorded Step Memory Stack'
      ],
      protocols: ['WebSockets (ws://)', 'HTTP REST / PROGMEM Web Server', 'Hardware PWM Servo Channels'],
      metrics: [
        { label: 'Degrees of Freedom', value: '4-DOF' },
        { label: 'WebSocket Latency', value: '< 15 ms' },
        { label: 'Joint Accuracy', value: '1.0° Resolution' }
      ],
      sourceSnippet:
        'AsyncWebServer server(80);\nAsyncWebSocket wsRobotArmInput("/RobotArmInput");\nstd::vector<ServoPins> servoPins = {\n  { Servo(), 27, "Base", 90 },\n  { Servo(), 26, "Shoulder", 90 },\n  { Servo(), 25, "Elbow", 90 },\n  { Servo(), 33, "Gripper", 90 }\n};',
      status: 'Fully Operational Rig',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 04. Robotics Arm (AI Computer Vision) ─────────────────────────────────
    {
      id: 'rob-04',
      number: '04',
      categoryType: 'arms',
      title: 'AI Computer Vision Hand-Tracking Bionic Arm',
      subtitle: 'Real-Time 21-Keypoint MediaPipe Vision Pipeline & 5-Finger Serial Kinematics',
      category: 'AI Vision & Biomimetic Robotics',
      tags: ['Robotics', 'Python', 'OpenCV', 'MediaPipe', 'Serial Comms', 'AI / CV'],
      image: '/images/robotics/computervision_robot_arm.webp',
      objective:
        'Translate real-time human hand gestures captured through a camera into physical finger movements on a biomimetic robotic prosthetic hand with zero wearable sensor gloves.',
      description:
        'An advanced human-robot interaction system employing Python, MediaPipe, and OpenCV to calculate 3D spatial coordinates across 21 hand landmarks at 60 FPS. Finger flexion states are parsed and streamed over high-speed UART serial to an Arduino controlling 5 independent finger servos.',
      keyFunctionality: [
        'Zero-latency 21-landmark neural hand tracking from standard RGB camera feeds.',
        'Heuristic finger flexion computation determining extension vs. grip states across Thumb, Index, Middle, Ring, and Pinky.',
        'UART serial packet streamer transmitting synchronized servo angles at 9600 baud.',
        'Independent multi-angle servo mapping accommodating physiological finger range-of-motion.'
      ],
      hardware: [
        '5-Degree-of-Freedom 3D Printed Robotic Hand & Tendon Linkages',
        '5x Precision Micro Servos (SG90)',
        'Arduino Uno Microcontroller (Serial Receiver & PWM Driver)',
        'HD Optical Camera / Laptop Webcam'
      ],
      firmware: [
        'Python 3 with OpenCV (cv2) & Google MediaPipe Hands',
        'Sub-20ms Serial Telemetry Dispatch Pipeline',
        'Arduino C++ Multi-Servo Angle Interpolation Engine'
      ],
      protocols: ['Serial UART over USB', 'Standard 50Hz PWM Servo Timers', 'V4L2 Video Streaming'],
      metrics: [
        { label: 'Tracking Frame Rate', value: '60 FPS' },
        { label: 'Landmark Points', value: '21 3D Points' },
        { label: 'Latency to Action', value: '< 25 ms' }
      ],
      sourceSnippet:
        'mp_hands = mp.solutions.hands\nhands = mp_hands.Hands(max_num_hands=1)\n# Parse 21 landmarks into finger angles\nservo_angles = []\nfor i, state in enumerate(finger_states):\n  close, open_ = servo_map[names[i]]\n  servo_angles.append(open_ if state else close)\narduino.write((",".join(str(a) for a in servo_angles) + "\\n").encode())',
      status: 'Active AI Hardware Link',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 05. Obstacle Avoiding Robot ──────────────────────────────────────────
    {
      id: 'rob-05',
      number: '05',
      categoryType: 'rovers',
      title: 'Autonomous Obstacle Avoiding Rover',
      subtitle: 'Dynamic Pan-Tilt Ultrasonic Ranging & Intelligent Pathfinding Algorithm',
      category: 'Autonomous Mobile Robotics',
      tags: ['Robotics', 'Arduino', 'Sensors', 'Automation', 'Control Systems'],
      image: '/images/robotics/obstacle_avoiding_robot.webp',
      objective:
        'Navigate unfamiliar cluttered environments autonomously by scanning terrain ahead, predicting collisions, and executing differential-turn avoidance paths.',
      description:
        'A 4-wheel-drive autonomous mobile robot platform equipped with an HC-SR04 ultrasonic rangefinder mounted atop a sweeping servo motor. The rover dynamically inspects left and right clear paths whenever an obstruction is encountered within its 20cm hazard radius.',
      keyFunctionality: [
        'Front-mounted ultrasonic sensor sweeping 0° to 180° to measure left vs. right clearances.',
        'Differential 4WD drive powered by an L298N dual H-bridge motor driver with PWM speed regulation.',
        'Automatic backup, pivot, and escape maneuvers triggered when trapped in dead-end corners.',
        'Continuous obstacle detection preventing collisions with walls, furniture, and unexpected barriers.'
      ],
      hardware: [
        'Arduino Uno Microcontroller (ATmega328P)',
        'L298N Dual H-Bridge High-Power Motor Driver',
        '4x TT Geared DC Motors with High-Grip Rubber Tires',
        'HC-SR04 Ultrasonic Distance Sensor',
        'TowerPro SG90 Pan-Tilt Micro Servo',
        'Dual 18650 Li-Ion Rechargeable Battery Rail'
      ],
      firmware: [
        'Arduino C++ Finite State Navigation Controller',
        'Time-of-Flight Sound Velocity Distance Calculations',
        'Differential Skid-Steer Speed and Direction Routines',
        'Dynamic Sensor Look-Ahead Logic'
      ],
      protocols: ['PWM Motor Control', 'Digital Sonar Trigger/Echo Timing', 'Serial Diagnostic Telemetry'],
      metrics: [
        { label: 'Hazard Detection Limit', value: '20 cm' },
        { label: 'Sensor Sweep Range', value: '180 Degrees' },
        { label: 'Reaction Latency', value: '< 20 ms' }
      ],
      sourceSnippet:
        'measuredistance();\nif (distance > limit || distance == 0) {\n  moveforward();\n} else {\n  resetmotor();\n  turnservoright();\n  rightdistance = calculatedistance();\n  turnservoleft();\n  leftdistance = calculatedistance();\n  if (rightdistance > leftdistance) turnright(); else turnleft();\n}',
      status: 'Operational Rover',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 06. Radar Project ────────────────────────────────────────────────────
    {
      id: 'rob-06',
      number: '06',
      categoryType: 'sensors',
      title: 'Ultrasonic Sonar Radar with Processing GUI',
      subtitle: 'Continuous 180° Mechanical Sweep Sonar with Visualized Target Radar Display',
      category: 'Sensors & Signal Processing',
      tags: ['Arduino', 'Sensors', 'Signal Processing', 'Processing IDE', 'Control Systems'],
      image: '/images/robotics/radar_sonar_project.webp',
      objective:
        'Build a functioning sonar radar station capable of scanning space in a 180° radius and visually plotting detected obstacles and distance ranges onto a computer interface.',
      description:
        'A hardware-software radar scanning system combining an Arduino Uno, an SG90 servo motor rotating an ultrasonic sensor across 15° to 165°, and a companion Processing GUI application that renders real-time military-style sonar sweeps and target blips.',
      keyFunctionality: [
        'Continuous synchronized 180° mechanical pan sweep executing 1-degree measurement increments.',
        'High-speed serial packet formatting transmitting angle and distance data pairs (`angle,distance.`).',
        'Real-time graphical Processing canvas featuring green phosphorescent radar arcs, trails, and target markers.',
        'Sub-centimeter distance resolution detecting obstacles up to 40cm with audio-visual alerts.'
      ],
      hardware: [
        'Arduino Uno Microcontroller (ATmega328P)',
        'HC-SR04 High-Precision Ultrasonic Sensor',
        'TowerPro SG90 180° Micro Servo Motor',
        'Custom Pan Bracket Rig & USB Serial Communications Cable'
      ],
      firmware: [
        'Arduino C++ Angular Sweep Sequencer',
        'Processing Java Visual Radar GUI Framework',
        'Serial Port Buffer Parsing with Delimiter Stream Decoding',
        'Geometric Polar-to-Cartesian Coordinate Transformation'
      ],
      protocols: ['UART Serial (9600 Baud)', 'PWM Servo Control', 'Polar Coordinate Mapping'],
      metrics: [
        { label: 'Sweep Arc', value: '15° to 165°' },
        { label: 'Angular Resolution', value: '1.0 Degree' },
        { label: 'Max Detection Range', value: '40 cm' }
      ],
      sourceSnippet:
        'for (int i = 15; i <= 165; i++) {\n  myServo.write(i);\n  delay(30);\n  distance = calculateDistance();\n  Serial.print(i);\n  Serial.print(",");\n  Serial.print(distance);\n  Serial.print(".");\n}',
      status: 'Active Demonstration System',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 07. Arduino Snake Game ───────────────────────────────────────────────
    {
      id: 'rob-07',
      number: '07',
      categoryType: 'iot',
      title: 'Arduino Retro Snake Game on 8x8 LED Matrix',
      subtitle: 'Embedded Arcade Gaming System with Dual-Axis Joystick & MAX7219 Matrix Driver',
      category: 'Embedded Systems & Game Logic',
      tags: ['Arduino', 'Embedded Systems', 'MAX7219', 'Sensors', 'C++'],
      image: '/images/robotics/arduino_snake_game.webp',
      objective:
        'Implement the iconic classic Snake arcade game on bare-metal microcontroller hardware using low-level bit shifting, analog joystick polling, and SPI matrix drivers.',
      description:
        'A retro embedded gaming system running on an Arduino Uno. Players guide a growing snake across an 8x8 LED matrix display using a 2-axis analog thumbstick, eating randomly spawned food items and avoiding boundary collisions with real-time score tracking.',
      keyFunctionality: [
        'Real-time dual-axis analog joystick polling with deadzone compensation and directional debouncing.',
        'High-speed multiplexed LED matrix driving via the MAX7219 IC over 3-wire serial interface.',
        'Dynamic coordinate array modeling snake growth, tail follow mechanics, and self-collision detection.',
        'Pseudorandom food coordinate generator ensuring apples never spawn on current snake body coordinates.'
      ],
      hardware: [
        'Arduino Uno Microcontroller (ATmega328P)',
        'MAX7219 8x8 Red LED Dot Matrix Module',
        'Dual-Axis Analog Joystick Module with Push Button',
        'Solderless Breadboard & Regulated 5V Power Rails'
      ],
      firmware: [
        'Arduino C++ Bare-Metal Architecture',
        'LedControl / Custom Bitwise Display Shift Register Driver',
        'Non-Blocking Game Loop Timing (Millisecond Ticks)',
        'Kinematic Vector Direction Machine'
      ],
      protocols: ['3-Wire Serial Bit-Banging (DIN, CS, CLK)', 'Analog ADC Joystick Sampling', 'Digital Interrupts'],
      metrics: [
        { label: 'Display Matrix', value: '8x8 LEDs (64 Pixels)' },
        { label: 'Frame Refresh Rate', value: '60 Hz' },
        { label: 'Input Latency', value: '< 5 ms' }
      ],
      sourceSnippet:
        '// Joystick coordinate mapping & direction arbitration\nint xVal = analogRead(JOYSTICK_X);\nint yVal = analogRead(JOYSTICK_Y);\nif (xVal < 400 && dir != RIGHT) dir = LEFT;\nelse if (xVal > 600 && dir != LEFT) dir = RIGHT;\nelse if (yVal < 400 && dir != DOWN) dir = UP;\nelse if (yVal > 600 && dir != UP) dir = DOWN;\nupdateSnakePosition();',
      status: 'Fully Playable System',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 08. Arduino/ESP32 Project (sketch_jan6a / ESP32-CAM) ──────────────────
    {
      id: 'rob-08',
      number: '08',
      categoryType: 'iot',
      title: 'ESP32-CAM Real-Time Video Streaming & Motion Rover System',
      subtitle: 'Embedded Wireless Video Server, FreeRTOS HTTP Daemon & Pan/Tilt Motor Controls',
      category: 'IoT Video & Edge Computing',
      tags: ['ESP32', 'Robotics', 'IoT', 'Embedded Systems', 'FreeRTOS', 'Control Systems'],
      image: '/images/robotics/esp32cam_streamer.webp',
      objective:
        'Stream real-time low-latency video over local Wi-Fi while concurrently managing motor drivers and pan/tilt camera mechanics from an embedded HTTP dashboard.',
      description:
        'An edge-computing video surveillance and teleoperation station powered by the ESP32-CAM module (featuring the OV2640 camera sensor). It runs an embedded FreeRTOS HTTP daemon serving an interactive web interface with sub-100ms MJPEG video streaming and digital motor telemetry controls.',
      keyFunctionality: [
        'High-definition MJPEG video streaming directly over local Wi-Fi access points or station networks.',
        'Embedded lightweight HTTP web server delivering real-time camera controls (resolution, flash LED, exposure).',
        'Simultaneous multi-channel PWM motor and servo actuation for pan/tilt orientation and rover locomotion.',
        'Low-overhead memory architecture leveraging external PSRAM for high-frame-rate JPEG buffering.'
      ],
      hardware: [
        'AI-Thinker ESP32-CAM Board with OV2640 2MP Camera Sensor',
        'Onboard 4MB External PSRAM & Wi-Fi Ceramic Antenna',
        'High-Brightness Flash LED & Status Indicators',
        'Dual L9110S / L298N Motor Driver Interface Stages'
      ],
      firmware: [
        'ESP-IDF / Arduino ESP32 Core',
        'esp_http_server Asynchronous Web Server Engine',
        'Multi-Threaded FreeRTOS Camera Capture and Network Tasks',
        'Hardware PWM LED & Motor Inversion Pinouts'
      ],
      protocols: ['MJPEG over HTTP/1.1 (Multipart/x-mixed-replace)', 'Wi-Fi 802.11 b/g/n (AP & STA)', 'GPIO / PWM'],
      metrics: [
        { label: 'Video Frame Rate', value: '25+ FPS' },
        { label: 'Resolution Support', value: 'VGA to UXGA' },
        { label: 'Stream Latency', value: '< 100 ms' }
      ],
      sourceSnippet:
        '#include "esp_http_server.h"\n#include "esp_camera.h"\nstatic const char* _STREAM_CONTENT_TYPE = "multipart/x-mixed-replace;boundary=" PART_BOUNDARY;\nhttpd_handle_t stream_httpd = NULL;\n// Start asynchronous HTTP video daemon\nhttpd_start(&stream_httpd, &config);',
      status: 'Functional Stream Rig',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 09. Ultrasound Scanner Prototype ─────────────────────────────────────
    {
      id: 'rob-09',
      number: '09',
      categoryType: 'sensors',
      title: 'IoT Ultrasound Range Scanner with Web Dashboard & I2C LCD',
      subtitle: 'ESP8266 Microsecond Acoustic Telemetry, Responsive Web Interface & Physical LCD Feedback',
      category: 'IoT Sensors & Embedded Web',
      tags: ['ESP8266', 'Sensors', 'IoT', 'Embedded Systems', 'Web Server'],
      image: '/images/robotics/ultrasound_scanner.webp',
      objective:
        'Construct a dual-interface ultrasonic proximity measuring tool broadcasting live millimeter distance metrics to both a physical I2C liquid crystal display and an embedded browser dashboard.',
      description:
        'An IoT ultrasonic ranging station built on an ESP8266 (NodeMCU) microcontroller. It combines high-speed microsecond pulse echo timing with an embedded HTTP web server and a 16x2 I2C alphanumeric LCD, serving real-time target distance measurements to nearby operators.',
      keyFunctionality: [
        'High-precision ultrasonic acoustic pulse trigger (10us) with microsecond flight time recording.',
        'Embedded standalone HTTP web server serving a styled HTML5/CSS3 telemetry dashboard.',
        '16x2 LiquidCrystal display via PCF8574 I2C backpack minimizing required GPIO pinout overhead.',
        'Dynamic continuous distance calculation converting sound velocity ($340 m/s$) to centimeters.'
      ],
      hardware: [
        'ESP8266 NodeMCU (12-E) Microcontroller (80MHz Xtensa Core)',
        'HC-SR04 Ultrasonic Distance Sensor',
        '1602 (16x2) Alphanumeric LCD Display with I2C Backpack (0x27)',
        'Breadboard & Regulated 3.3V/5V Power Rail'
      ],
      firmware: [
        'ESP8266 Arduino Core with ESP8266WebServer Library',
        'Wire.h I2C Bus Communication Framework',
        'LiquidCrystal_I2C Hardware Driver Routines',
        'Single-File PROGMEM Web Dashboard Interface'
      ],
      protocols: ['I2C (SDA/SCL at 100kHz)', 'HTTP/1.1 REST Server', 'Microsecond Digital PulseIn'],
      metrics: [
        { label: 'Measuring Range', value: '2 cm - 400 cm' },
        { label: 'Measurement Accuracy', value: '± 3 mm' },
        { label: 'Web Server Latency', value: '< 20 ms' }
      ],
      sourceSnippet:
        'long getDistance() {\n  digitalWrite(TRIG, LOW); delayMicroseconds(2);\n  digitalWrite(TRIG, HIGH); delayMicroseconds(10);\n  digitalWrite(TRIG, LOW);\n  long duration = pulseIn(ECHO, HIGH);\n  return duration * 0.034 / 2;\n}\nserver.on("/", []() { server.send(200, "text/html", webpage()); });',
      status: 'Live IoT Instrument',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 10. WiFi Controlled ESP8266 Based RC Car ─────────────────────────────
    {
      id: 'rob-10',
      number: '10',
      categoryType: 'rovers',
      title: 'WiFi Controlled ESP8266 RC Rover Vehicle',
      subtitle: 'Wireless Access Point Rover with Virtual Touchscreen Joystick Teleoperation',
      category: 'Wireless Teleoperation & Vehicles',
      tags: ['ESP8266', 'Robotics', 'IoT', 'Control Systems', 'Automation'],
      image: '/images/robotics/wifi_esp8266_rc_car.webp',
      objective:
        'Provide responsive wireless remote driving for a 4WD mobile chassis using direct smartphone Wi-Fi connection without needing third-party cloud brokers or proprietary transmitter controllers.',
      description:
        'A wireless robotic ground vehicle powered by an ESP8266 microcontroller configured as a standalone Wi-Fi Soft-AP. Any smartphone or tablet can connect directly to the vehicle and steer it in real time via an intuitive, low-latency virtual touch joystick web interface.',
      keyFunctionality: [
        'Direct Standalone Wi-Fi Soft-AP hosting an onboard web controller reachable via simple local IP.',
        'High-power dual H-bridge motor driver stages executing forward, reverse, pivot, and skid steering.',
        'Smooth PWM speed throttle regulation avoiding abrupt motor stall currents and mechanical gear wear.',
        'Sub-30ms teleoperation latency delivering crisp steering response across indoor and outdoor surfaces.'
      ],
      hardware: [
        'ESP8266 NodeMCU Wi-Fi Microcontroller',
        'L298N / L293D High-Current Dual Motor Driver Shield',
        '4x Geared DC Motors with Rubber Off-Road Tires',
        '7.4V / 11.1V Rechargeable Li-Ion Battery Pack with Power Isolation'
      ],
      firmware: [
        'ESP8266 Arduino Core',
        'Soft-AP Wi-Fi Configuration with Embedded Web Server',
        'Asynchronous Motor PWM Throttle Mapping Matrix',
        'Fail-Safe Disconnect Motor Cut-Off Timer'
      ],
      protocols: ['Wi-Fi 802.11 b/g/n (Soft-AP)', 'HTTP REST & WebSocket Controls', 'Differential PWM'],
      metrics: [
        { label: 'Wi-Fi Control Range', value: '60+ Meters' },
        { label: 'Response Latency', value: '< 30 ms' },
        { label: 'Drive Layout', value: '4WD Differential' }
      ],
      sourceSnippet:
        'WiFi.softAP("ESP8266_RC_CAR", "12345678");\nserver.on("/drive", []() {\n  String dir = server.arg("dir");\n  int speed = server.arg("speed").toInt();\n  executeMotorDrive(dir, speed);\n  server.send(200, "text/plain", "OK");\n});',
      status: 'Tested Hardware Rover',
      githubUrl: 'https://github.com/saadrajpoot3355'
    },

    // ── 11. Traffic Light System ─────────────────────────────────────────────
    {
      id: 'rob-11',
      number: '11',
      categoryType: 'sensors',
      title: 'Automated 3-Phase Traffic Intersection Signal Controller',
      subtitle: 'Deterministic State-Machine Timing Controller with Solid-State LED Driver Stages',
      category: 'Embedded Control Systems',
      tags: ['Arduino', 'Embedded Systems', 'Automation', 'Control Systems', 'C++'],
      image: '/images/robotics/traffic_light_controller.webp',
      objective:
        'Deliver a reliable, fail-safe intersection signaling sequencer capable of managing safe vehicle transitions between Go, Prepare to Stop, and Stop phases.',
      description:
        'A solid-state intersection signal controller implemented on an Arduino Uno. The system executes deterministic state sequencing across high-brightness Red, Yellow, and Green optical indicators with microsecond-accurate phase intervals and active fail-safe state retention.',
      keyFunctionality: [
        'Deterministic 3-phase automated cycle (Green 5000ms, Yellow 2000ms, Red 5000ms).',
        'Solid-state current-limited LED driving circuitry protecting against optical thermal degradation.',
        'Extendable architecture accommodating pedestrian pushbutton crossing interrupts and vehicle induction sensors.',
        'Compact bare-metal C++ firmware designed for zero runtime exceptions and continuous uninterrupted operation.'
      ],
      hardware: [
        'Arduino Uno Microcontroller (ATmega328P)',
        '3x High-Brightness 10mm Diffused LEDs (Red, Yellow, Green)',
        'Precision 220-Ohm Metal Film Current Limiting Resistors',
        'Prototyping Breadboard & Solid-Core Wiring Harness'
      ],
      firmware: [
        'Bare-Metal Arduino C++',
        'Deterministic Sequential State-Machine Pattern',
        'Atomic Digital Pin State Writing',
        'Fail-Safe Transition Logic'
      ],
      protocols: ['Direct GPIO Digital Switching', 'Microsecond System Tick Timers', 'UART Diagnostic Output'],
      metrics: [
        { label: 'Phase Precision', value: '± 1 ms' },
        { label: 'Standard Cycle Time', value: '12 Seconds' },
        { label: 'System Reliability', value: '100% Uptime' }
      ],
      sourceSnippet:
        '// Deterministic 3-Phase Intersection State Routine\ndigitalWrite(green, HIGH); digitalWrite(yellow, LOW); digitalWrite(red, LOW);\ndelay(5000);\ndigitalWrite(green, LOW); digitalWrite(yellow, HIGH); digitalWrite(red, LOW);\ndelay(2000);\ndigitalWrite(green, LOW); digitalWrite(yellow, LOW); digitalWrite(red, HIGH);\ndelay(5000);',
      status: 'Active Timing Platform',
      githubUrl: 'https://github.com/saadrajpoot3355'
    }
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? roboticsProjects
      : roboticsProjects.filter((p) => p.categoryType === activeCategory);

  return (
    <section
      id="robotics"
      className="border-b border-white/10 bg-[#080a11] py-12 sm:py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-eyebrow">
              <Bot className="h-4 w-4 text-blue-400" />
              Robotics & Embedded Systems
            </p>
            <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Autonomous Systems & Hardware Engineering
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-300">
              Demonstrated practical experience across 11 physical hardware, microcontroller, robotics, sensor
              fusion, and computer vision projects built with Arduino, ESP32, ESP8266, and C/C++.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl bg-white/[0.04] p-1.5 border border-white/10 backdrop-blur-md">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`rounded-xl px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
                  activeCategory === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProject === project.id;

            return (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c0e17] transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.25)]"
              >
                <div>
                  {/* Card Media Header */}
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

                    {/* Gradient Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-transparent to-black/40"></div>

                    {/* Number Badge & Category */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                      <span className="rounded-full bg-black/60 border border-white/20 px-2.5 py-0.5 font-display text-[11px] font-bold text-white backdrop-blur">
                        #{project.number}
                      </span>
                      <span className="rounded-full bg-blue-600/80 border border-blue-400/30 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                        {project.category}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300 backdrop-blur">
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                        {project.status}
                      </span>
                    </div>

                    {/* Metrics Bar at bottom of media */}
                    <div className="absolute bottom-3 inset-x-3 z-10 grid grid-cols-3 gap-1.5 rounded-xl bg-black/60 border border-white/10 p-2 backdrop-blur-md">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <p className="font-display text-[11px] sm:text-xs font-bold text-white truncate">
                            {m.value}
                          </p>
                          <p className="text-[9px] sm:text-[10px] text-slate-300 truncate">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-7">
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-blue-300/90">{project.subtitle}</p>

                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-300 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Objective Box */}
                    <div className="mt-4 rounded-xl bg-white/[0.02] border border-white/5 p-3 text-xs leading-relaxed text-slate-300">
                      <span className="font-semibold text-blue-300">Engineering Objective: </span>
                      {project.objective}
                    </div>

                    {/* Hardware & Tech Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="badge text-[10px] sm:text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Technical Breakdown Specs Area */}
                    {isExpanded && (
                      <div className="mt-5 space-y-4 rounded-2xl bg-black/40 border border-white/10 p-4 sm:p-5 text-xs animate-fadeIn">
                        {/* Key Functionality */}
                        <div>
                          <p className="font-display text-[11px] font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                            <Activity className="h-3.5 w-3.5" /> Key Functionality
                          </p>
                          <ul className="space-y-1.5 text-slate-300">
                            {project.keyFunctionality.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-blue-400 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Hardware Architecture */}
                        <div>
                          <p className="font-display text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                            <Cpu className="h-3.5 w-3.5" /> Hardware & Circuit Components
                          </p>
                          <ul className="space-y-1.5 text-slate-300">
                            {project.hardware.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-emerald-400 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Firmware & Control Logic */}
                        <div>
                          <p className="font-display text-[11px] font-bold uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-1.5">
                            <Terminal className="h-3.5 w-3.5" /> Firmware & Control Logic
                          </p>
                          <ul className="space-y-1.5 text-slate-300">
                            {project.firmware.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-purple-400 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Communication Protocols */}
                        <div>
                          <p className="font-display text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                            <Wifi className="h-3.5 w-3.5" /> Protocols & Buses
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.protocols.map((p, idx) => (
                              <span
                                key={idx}
                                className="rounded-md bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-[10px] font-medium text-amber-300"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Code Snippet */}
                        {project.sourceSnippet && (
                          <div className="mt-3">
                            <p className="font-display text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                              Source Code Excerpt ({project.tags[1] || 'Firmware'})
                            </p>
                            <pre className="overflow-x-auto rounded-lg bg-[#05070e] p-3 font-mono text-[11px] text-blue-200 border border-white/5">
                              <code>{project.sourceSnippet}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-7 pt-0 border-t border-white/5 mt-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setModalProject(project)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2 text-xs sm:text-[13px] font-semibold text-white hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all active:scale-[0.98]"
                    >
                      <span>More Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>

                    <button
                      onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-blue-300 transition-colors px-2 py-2"
                    >
                      <span>{isExpanded ? 'Hide Specs' : 'Quick Specs'}</span>
                      {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 rounded-xl bg-emerald-600/20 border border-emerald-500/30 px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-600/30 transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Simulation</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} Source Code`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Detailed Engineering Case Study Modal */}
      {modalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto"
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-white/15 bg-[#0c0e17] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setModalProject(null)}
              aria-label="Close Case Study"
              className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-600 px-3 py-0.5 text-xs font-bold text-white">
                Case Study #{modalProject.number}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {modalProject.category}
              </span>
            </div>

            <h2 className="mt-3 font-display text-xl sm:text-3xl font-black text-white">
              {modalProject.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-blue-300">{modalProject.subtitle}</p>

            <div className="mt-5 rounded-2xl overflow-hidden border border-white/10">
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-auto max-h-[340px] object-cover"
              />
            </div>

            <div className="mt-6 space-y-5 text-xs sm:text-sm text-slate-300">
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2">
                  System Overview & Objective
                </h3>
                <p className="leading-relaxed">{modalProject.description}</p>
                <p className="mt-2 text-blue-300 font-medium">
                  <strong>Engineering Goal: </strong> {modalProject.objective}
                </p>
              </div>

              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2">
                  Hardware Architecture & Modules
                </h3>
                <ul className="space-y-1.5 list-disc list-inside">
                  {modalProject.hardware.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2">
                  Firmware & Algorithm Implementation
                </h3>
                <ul className="space-y-1.5 list-disc list-inside">
                  {modalProject.firmware.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {modalProject.sourceSnippet && (
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2">
                    Firmware Implementation Excerpt
                  </h3>
                  <pre className="overflow-x-auto rounded-xl bg-[#05070e] p-4 font-mono text-xs text-blue-200 border border-white/10">
                    <code>{modalProject.sourceSnippet}</code>
                  </pre>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {modalProject.tags.map((tag) => (
                  <span key={tag} className="badge text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {modalProject.demoUrl && (
                  <a
                    href={modalProject.demoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>View Simulation</span>
                  </a>
                )}
                {modalProject.githubUrl && (
                  <a
                    href={modalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>GitHub Repository</span>
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
