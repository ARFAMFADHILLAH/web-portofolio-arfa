"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { useLocale } from "@/app/i18n";

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

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
      <a href="#hero" className="font-mono text-sm text-accent tracking-widest uppercase">
        AMF / Portfolio
      </a>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setLocale(locale === "id" ? "en" : "id")}
          aria-label={t.nav.langToggle}
          className="glass rounded-full px-3 py-1.5 font-mono text-xs tracking-widest uppercase flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          <span className={locale === "id" ? "text-accent" : "text-muted"}>ID</span>
          <span className="text-border">/</span>
          <span className={locale === "en" ? "text-accent" : "text-muted"}>EN</span>
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
}