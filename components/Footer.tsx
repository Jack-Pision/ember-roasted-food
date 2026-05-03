'use client';

import Link from 'next/link';

// SVG Icons for social links
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B2018] text-[#F5F0E8]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        {/* Top Section - Logo & Nav */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-[var(--font-playfair)] text-[28px] font-bold tracking-tight"
            >
              EMBER
            </Link>
            <p className="font-[var(--font-fraunces)] italic text-[14px] text-[#F5F0E8]/50">
              Daily menu. Fresh fire. No shortcuts.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="text-[12px] font-medium tracking-[0.18em] uppercase text-[#F5F0E8]/70 hover:text-[#C8602A] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-[12px] font-medium tracking-[0.18em] uppercase text-[#F5F0E8]/70 hover:text-[#C8602A] transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/story"
              className="text-[12px] font-medium tracking-[0.18em] uppercase text-[#F5F0E8]/70 hover:text-[#C8602A] transition-colors"
            >
              Story
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-10 h-[1px] bg-[#F5F0E8]/10" />

        {/* Bottom Section - Credits & Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-[12px] text-[#F5F0E8]/40 tracking-[0.08em]">
            &copy; {currentYear} EMBER. All rights reserved.
          </p>

          {/* Developer Credit */}
          <div className="flex items-center gap-3">
            <span className="text-[12px] text-[#F5F0E8]/40">Built by</span>
            <span className="text-[13px] font-medium text-[#F5F0E8]/70">Jack Pision</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jack-pision-201764377"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#F5F0E8]/20 flex items-center justify-center text-[#F5F0E8]/60 hover:text-[#C8602A] hover:border-[#C8602A]/40 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Jack-Pision"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#F5F0E8]/20 flex items-center justify-center text-[#F5F0E8]/60 hover:text-[#C8602A] hover:border-[#C8602A]/40 transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://x.com/Jack_pision"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#F5F0E8]/20 flex items-center justify-center text-[#F5F0E8]/60 hover:text-[#C8602A] hover:border-[#C8602A]/40 transition-all"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
