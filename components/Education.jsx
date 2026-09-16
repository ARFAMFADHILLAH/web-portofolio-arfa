"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/app/i18n";

function SchoolLogo({ logo, initials, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="absolute -left-13 md:-left-17 top-0.75 w-11 h-11 z-10">
      {failed || !logo ? (
        <div className="w-full h-full rounded-full flex items-center justify-center bg-linear-to-br from-accent to-accent-soft text-white font-mono text-xs tracking-wider shadow-lg shadow-accent/30">
          {initials}
        </div>
      ) : (
        <div className="w-full h-full rounded-full overflow-hidden border border-border bg-(--glass-bg) flex items-center justify-center shadow-lg shadow-black/20">
          <Image
            src={logo}
            alt={alt}
            fill
            sizes="44px"
            className="object-cover"
            onError={() => setFailed(true)}
          />
        </div>
      )}
    </div>
  );
}

export default function Education() {
  const { t } = useLocale();
  const items = t.education.items;
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="education" className="px-6 md:px-20 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-5 mb-16">
          <h2 className="section-title font-serif font-normal tracking-tight whitespace-normal md:whitespace-nowrap">
            {t.education.title1}{" "}
            <em className="italic text-accent">{t.education.title2}</em>
          </h2>
          <div className="flex-1 h-px bg-border min-w-5" />
        </div>

        <div className="timeline-wrapper relative pl-17 md:pl-24 max-w-3xl">
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            const hasDetail = item.points.length > 0;
            return (
              <Reveal key={item.period} delay={i * 0.08}>
                <div
                  className={`relative pb-4 ${i === items.length - 1 ? "pb-2" : "pb-6"}`}
                >
                  <SchoolLogo
                    logo={item.logo}
                    initials={item.initials}
                    alt={item.school}
                  />
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-label={`${item.school} — ${item.degree}`}
                    className={`group text-left w-full rounded-2xl p-6 transition-all duration-300 ${
                      isOpen ? "glass glass-card" : "hover:bg-(--glass-bg)"
                    }`}
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span>
                        <span className="block font-mono text-sm text-accent tracking-wide uppercase mb-2">
                          {item.period}
                        </span>
                        <span className="block text-[22px] font-normal tracking-tight mb-1">
                          {item.degree}
                        </span>
                        <span className="block font-mono text-[15px] text-muted">
                          {item.school}
                        </span>
                      </span>
                      {hasDetail && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className={`text-muted shrink-0 mt-1 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      )}
                    </span>
                    <span
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                      style={{ opacity: isOpen ? 1 : 0 }}
                    >
                      <span className="overflow-hidden">
                        <span className="block pt-5">
                          {hasDetail && (
                            <ul className="space-y-2.5 list-disc pl-5">
                              {item.points.map((point) => (
                                <li
                                  key={point}
                                  className="text-[17px] text-muted font-light leading-[1.85]"
                                >
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                        </span>
                      </span>
                    </span>
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}