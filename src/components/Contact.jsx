import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare, CheckCircle, PhoneCall } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="border-b border-white/10 bg-[#0a0c14] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          
          {/* Contact Info Column */}
          <div>
            <p className="section-eyebrow">Contact</p>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let's Build Something Exceptional Together
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
              Whether you need robotics solutions, custom microcontrollers, embedded firmware, web development services, or technical consultation, I'm here to bring your ideas to reality.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0c0e17] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</p>
                  <a href="mailto:saadrajpoot@example.com" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                    Get in Touch via Email
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0c0e17] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-white">Okara, Pakistan (Remote Worldwide)</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0c0e17] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Social Networks</p>
                  <div className="mt-1 flex items-center gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:underline"
                    >
                      <Linkedin className="h-3.5 w-3.5" /> LinkedIn Profile
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:underline"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="rounded-3xl border border-white/10 bg-[#0c0e17] p-6 sm:p-10 shadow-2xl">
            <h3 className="font-display text-xl font-bold text-white">Send Me a Message</h3>
            <p className="mt-1 text-xs text-slate-400">Fill out the form below and I will respond within 24 hours.</p>

            {submitted && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-xs text-emerald-400 animate-fadeIn">
                <CheckCircle className="h-4 w-4 shrink-0" />
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Muhammad Saad"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Robotics Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell me about your project scope, requirements, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
