import React, { useRef } from 'react';
import { Sparkles, ArrowRight, Download, MapPin, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const imgRef = useRef(null);
  const rafId = useRef(null);

  const handleMouseMove = (e) => {
    // Disable 3D tilt on mobile/touch screens or if element ref is missing
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    if (!imgRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / (rect.height / 2)) * 14;
    const rotateY = (x / (rect.width / 2)) * 14;
    const translateX = (x / (rect.width / 2)) * 40;
    const translateY = (y / (rect.height / 2)) * 30;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (imgRef.current) {
        imgRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 20px) scale(1.05)`;
        imgRef.current.style.transition = 'transform 0.05s linear';
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    if (imgRef.current) {
      imgRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)';
      imgRef.current.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#080808] pt-16 sm:pt-20"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(59,130,246,0.14),transparent_75%)]"></div>

      {/* Main Hero Content */}
      <div className="relative flex flex-1 flex-col items-center justify-center pt-6 sm:pt-10 pb-8 px-4 z-10 max-w-7xl mx-auto w-full">

        {/* Top Eyebrow Badge */}
        <p className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-white/90 backdrop-blur-md mb-3 sm:mb-6 text-center max-w-[95%]">
          <Sparkles className="h-3.5 w-3.5 text-blue-400 shrink-0" />
          <span>Robotics · Embedded Systems · Web Development</span>
        </p>

        {/* Display Headline + Avatar */}
        <div className="relative flex w-full flex-col items-center justify-center py-2 my-auto select-none overflow-hidden">
          <h1 className="sr-only">Muhammad Saad Atique — Robotics Intermediate & Web Developer</h1>

          {/* Main Giant Headline - Single Line Name */}
          <div className="flex flex-col items-center justify-center text-center font-display font-black leading-[0.95] tracking-tight uppercase px-2 w-full">
            <span className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-400">
              Hi i'm
            </span>
            <span className="mt-1.5 text-[5.2vw] sm:text-5xl md:text-6xl lg:text-7xl text-white whitespace-nowrap tracking-tight">
              Muhammad Saad Atique
            </span>
          </div>

          {/* Interactive Avatar */}
          <div className="mt-4 sm:mt-8 flex items-center justify-center p-2">
            <img
              ref={imgRef}
              src="/images/avatar_cutout.png"
              alt="Muhammad Saad Atique"
              loading="eager"
              decoding="async"
              className="h-[180px] xs:h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(59,130,246,0.35)] pointer-events-none will-change-transform"
            />
          </div>
        </div>

      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-20 border-t border-white/10 bg-[#080808]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          {/* Text Summary */}
          <div className="max-w-xl text-center lg:text-left">
            <p className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Robotics Intermediate & Web Developer
            </p>
            <p className="mt-1 text-xs sm:text-sm leading-relaxed text-white/80">
              Designing intelligent robotics, microcontrollers, embedded firmware, & custom web applications.
            </p>
            <p className="mt-1 flex items-center justify-center lg:justify-start gap-1.5 text-xs text-white/50">
              <MapPin className="h-3.5 w-3.5 text-blue-400 shrink-0" />
              <span>Okara, Pakistan (Serving International Clients)</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#080a11] transition-transform active:scale-95 hover:-translate-y-0.5 shadow-lg shadow-white/10"
              >
                Explore My Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10 active:scale-95 text-center"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center justify-center gap-2.5 w-full sm:w-auto">
              <a
                href="/Muhammad_Saad_Atique_CV.pdf"
                download="Muhammad_Saad_Atique_CV.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-full border border-white/25 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10 active:scale-95"
              >
                <Download className="h-4 w-4 shrink-0" />
                Download CV
              </a>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://github.com/saadrajpoot3355"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub Profile"
                  className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 active:scale-95"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-saad-atique-104636232/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn Profile"
                  className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 active:scale-95"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
