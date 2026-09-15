"use client";

import Image from "next/image";
import { useLocale } from "@/app/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="hero"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_420px] items-center gap-16 lg:gap-14 px-6 md:px-20 py-20 md:py-24 overflow-hidden scroll-mt-20"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center order-2 lg:order-1">
        <div className="anim-fade-up-1 flex items-center gap-3 font-mono text-sm text-accent tracking-wide uppercase mb-7">
          <span className="inline-block w-6 h-px bg-accent" />
          {t.hero.badge}
        </div>
        <h1 className="hero-name anim-fade-up-2 font-serif font-normal leading-[1.1] tracking-tight">
          Arfa Muhammad
          <em className="block text-accent italic">Fadhillah</em>
        </h1>
        <div className="anim-fade-up-3 w-14 h-px bg-border my-7" />
        <p className="anim-fade-up-4 font-mono text-base text-muted tracking-wide mb-5">
          {t.hero.role}
        </p>
        <p className="anim-fade-up-5 text-lg text-muted font-light leading-[1.85] max-w-md">
          {t.hero.tagline}
        </p>
        <div className="anim-fade-up-6 flex flex-col md:flex-row md:flex-wrap items-stretch gap-3 md:gap-4 mt-12 max-w-md">
          <a
            href="#projects"
            className="flex items-center justify-center font-mono text-sm tracking-wide uppercase text-center text-white bg-gradient-to-r from-accent to-accent-soft px-9 py-4 rounded-full shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-accent/50 transition-all"
          >
            {t.hero.primary}
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center font-mono text-sm tracking-wide uppercase text-center text-cream glass glass-card rounded-full px-9 py-4 hover:text-accent transition-colors"
          >
            {t.hero.secondary}
          </a>
        </div>
      </div>

      {/* Photo */}
      <div className="anim-fade-in-photo flex justify-center items-center relative z-10 order-1 lg:order-2">
        <div className="relative w-[240px] h-[300px] sm:w-[300px] sm:h-[380px] lg:w-[340px] lg:h-[420px] flex-shrink-0">
          <div className="absolute -inset-4 rounded-[32px] bg-[var(--accent-dim)] opacity-60 blur-2xl" />
          <div className="glass-strong rounded-3xl w-full h-full overflow-hidden relative shadow-2xl shadow-black/40">
            <Image
              src="/img/arfa.jpeg"
              alt="Arfa Muhammad Fadhillah"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 340px"
              className="object-cover contrast-[1.05] brightness-[0.92] hover:scale-105 transition-transform duration-[0.6s]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>

          <div className="glass-strong rounded-2xl px-4 sm:px-6 py-3 sm:py-4 pb-4 sm:pb-4 lg:pb-0 flex gap-2 sm:gap-6 justify-between absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-10">
            {[
              ["3+", t.hero.years],
              ["40+", t.hero.projects],
              ["10", t.hero.clients],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <span className="block font-serif font-normal text-xl sm:text-2xl text-accent leading-none">
                  {num}
                </span>
                <span className="block font-mono text-[11px] sm:text-[13px] tracking-wide text-muted uppercase mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}