import React from 'react';
import { Linkedin, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080a11] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
        
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Muhammad Saad Atique (Saad Rajpoot)
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Robotics Specialist · Embedded Developer · Web Developer
          </p>
        </div>

        <p className="text-xs text-slate-400 flex items-center gap-1">
          © {new Date().getFullYear()} Saad Rajpoot. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
