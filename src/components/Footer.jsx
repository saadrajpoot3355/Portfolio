import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080a11] py-8 sm:py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 sm:gap-6 sm:flex-row text-center sm:text-left">
        
        <div>
          <p className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
            Muhammad Saad Atique (Saad Rajpoot)
          </p>
          <p className="mt-1 text-[11px] sm:text-xs text-slate-400">
            Robotics Specialist · Embedded Developer · Web Developer
          </p>
        </div>

        <p className="text-[11px] sm:text-xs text-slate-400 flex items-center gap-1">
          © {new Date().getFullYear()} Saad Rajpoot. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/saadrajpoot3355"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub Profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
