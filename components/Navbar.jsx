"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "Tentang" },
  { href: "#projects", label: "Proyek" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-5 md:px-20 py-5 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="font-mono text-sm text-accent tracking-widest uppercase">
        AMF / Portfolio
      </div>
      <div className="flex items-center gap-3 md:gap-8">
        <ul className="hidden md:flex gap-10 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link-item relative font-mono text-sm tracking-wide text-muted hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        <button
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
          className="md:hidden w-10 h-10 glass rounded-full flex items-center justify-center text-cream"
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-[72px] right-5 left-5 glass-strong rounded-2xl p-3 flex flex-col z-[110]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 font-mono text-base text-muted hover:text-accent hover:bg-[var(--glass-bg)] rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}