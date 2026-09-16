"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/app/i18n";

const icons = {
  home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  about: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  projects: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  experience: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  contact: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
};

export default function BottomNav() {
  const { t } = useLocale();
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const sections = [
      { id: "hero", href: "#hero" },
      { id: "about", href: "#about" },
      { id: "projects", href: "#projects" },
      { id: "experience", href: "#experience" },
      { id: "contact", href: "#contact" },
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = sections.find((s) => s.id === entry.target.id);
            if (found) setActive(found.href);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const items = [
    { href: "#hero", label: t.nav.home, icon: icons.home },
    { href: "#about", label: t.nav.about, icon: icons.about },
    { href: "#projects", label: t.nav.projects, icon: icons.projects },
    { href: "#experience", label: t.nav.experience, icon: icons.experience },
    { href: "#contact", label: t.nav.contact, icon: icons.contact },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-90 flex justify-center px-4 pb-[env(safe-area-inset-bottom)]">
      <div className="glass-strong rounded-t-2xl md:rounded-full md:bottom-4 w-full max-w-md md:max-w-3xl flex items-center justify-between gap-0.5 md:gap-1 px-2 py-2.5 md:px-2.5 md:mb-4 shadow-2xl shadow-black/30">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-label={item.label}
            className={`flex flex-col items-center gap-0.5 md:gap-1 px-2 md:px-3 py-1.5 md:py-1.5 rounded-full transition-colors whitespace-nowrap ${
              active === item.href
                ? "text-accent bg-accent/10"
                : "text-muted hover:text-cream"
            }`}
          >
            <span className="block">{item.icon}</span>
            <span className="block font-mono text-[9px] md:text-[10px] tracking-wide md:tracking-wider uppercase">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}