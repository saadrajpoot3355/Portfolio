import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';

// Inline SVG icons for platforms not in lucide-react
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const socials = [
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/muhammad-saad-atique-104636232', icon: Linkedin },
  { label: 'GitHub',    href: 'https://github.com/saadrajpoot3355', icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/roboticswithsaad', icon: InstagramIcon },
  { label: 'TikTok',   href: 'https://www.tiktok.com/@roboticswithsaad', icon: TikTokIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/roboticswithsaad', icon: FacebookIcon },
  { label: 'YouTube',  href: 'https://www.youtube.com/@robotics-with-saad', icon: YouTubeIcon },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const emailSubject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const emailBody = encodeURIComponent(
      `Hello Saad,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open user's email client addressed directly to saadrajpoot3355@gmail.com
    window.location.href = `mailto:saadrajpoot3355@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => setSubmitted(false), 6000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="border-b border-white/10 bg-[#0a0c14] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-start">
          
          {/* Contact Info Column */}
          <ScrollReveal direction="right">
            <div>
              <p className="section-eyebrow">Contact</p>
              <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                Let's Build Something Exceptional Together
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-300">
                Whether you need robotics solutions, custom microcontrollers, embedded firmware, web development services, or technical consultation, I'm here to bring your ideas to reality.
              </p>

              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-[#0c0e17] p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</p>
                    <a 
                      href="mailto:saadrajpoot3355@gmail.com" 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors truncate block"
                    >
                      saadrajpoot3355@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-[#0c0e17] p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">Okara, Pakistan (Remote Worldwide)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-[#0c0e17] p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                    <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Social Profiles</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {socials.map(({ label, href, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${label} Profile`}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-semibold text-blue-400 transition-all hover:bg-white/10 hover:text-white hover:border-white/30"
                        >
                          <Icon className="h-3 w-3 shrink-0" />
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form Column */}
          <ScrollReveal direction="left" delay={100}>
            <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c0e17] p-5 sm:p-8 lg:p-10 shadow-2xl">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">Send Me a Message</h3>
              <p className="mt-1 text-xs text-slate-400">Submitting will prepare an email directly to <span className="text-blue-400 font-semibold">saadrajpoot3355@gmail.com</span>.</p>

            {submitted && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-xs text-emerald-400 animate-fadeIn">
                <CheckCircle className="h-4 w-4 shrink-0" />
                Your email client has been launched with your message prepared for saadrajpoot3355@gmail.com!
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Muhammad Saad"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Robotics Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell me about your project scope, requirements, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 active:scale-[0.98]"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </div>
        </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
