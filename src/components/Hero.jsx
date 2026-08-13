import React, { useState } from 'react';
import { Sparkles, ArrowRight, Download, MapPin, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  const [transformStyle, setTransformStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)',
    transition: 'transform 0.5s ease-out',
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (-y / (rect.height / 2)) * 18;
    const rotateY = (x / (rect.width / 2)) * 18;
    const translateX = (x / (rect.width / 2)) * 70;
    const translateY = (y / (rect.height / 2)) * 45;

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 30px) scale(1.08)`,
      transition: 'transform 0.05s linear',
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)',
      transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
    });
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#080808] cursor-crosshair"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(59,130,246,0.12),transparent_70%)]"></div>

      {/* Main Hero Content */}
      <div className="relative flex flex-1 flex-col items-center justify-center pt-20 pb-6 px-4 z-10 max-w-7xl mx-auto w-full">
        
        {/* Top Eyebrow Badge */}
        <p className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md mb-4 sm:mb-6">
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          Robotics · Embedded Systems · Web Dev
        </p>

        {/* Display Headline + Avatar */}
        <div className="relative flex w-full flex-col items-center justify-center pt-2 sm:pt-4 pb-2 my-auto select-none">
          <h1 className="sr-only">Muhammad Saad Atique — Robotics Specialist & Web Developer</h1>
          
          {/* Main Giant Headline - Fully Visible at Top */}
          <div className="flex flex-col items-center justify-center text-center font-['Kanit'] font-black leading-[0.9] tracking-tight uppercase">
            <span className="text-[13vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] text-slate-400">
              Hi i'm
            </span>
            <span className="text-[10vw] sm:text-[7.5vw] md:text-[6.5vw] lg:text-[5.8vw] text-white">
              Muhammad Saad Atique
            </span>
          </div>

          {/* Interactive Avatar - Moves across screen with cursor */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center p-2">
            <img 
              src="/images/avatar_cutout.png" 
              alt="Muhammad Saad Atique" 
              style={transformStyle}
              className="h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(59,130,246,0.4)] pointer-events-none"
            />
          </div>
        </div>

      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-20 border-t border-white/10 bg-[#080808]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-md">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
              Robotics Specialist & Web Developer
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/80">
              Designing intelligent robotics, microcontrollers, embedded firmware, & custom web applications.
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-white/50">
              <MapPin className="h-3.5 w-3.5 text-blue-400" />
              Okara, Pakistan (Serving International Clients)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#080a11] transition-transform hover:-translate-y-0.5 shadow-lg shadow-white/10"
            >
              Explore My Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get in Touch
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

