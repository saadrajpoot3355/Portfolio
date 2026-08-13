import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sparkles, Send } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080a11]/85 backdrop-blur-md border-b border-white/10 py-3' 
        : 'bg-transparent border-b border-transparent py-4'
    }`}>
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a href="#" className="font-display text-sm sm:text-base font-black uppercase tracking-[0.18em] text-white flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300"></span>
          Saad Rajpoot
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors text-white/70 hover:text-white hover:bg-white/5"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-4 py-2 text-[13px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-600/40"
          >
            Get in Touch
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Download className="h-3.5 w-3.5" />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden hover:bg-white/10"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0a0c14]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl transition-all">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Send className="h-4 w-4" /> Get in Touch
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
