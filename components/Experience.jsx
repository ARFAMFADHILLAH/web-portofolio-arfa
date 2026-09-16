"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/app/i18n";

function CompanyLogo({ logo, initials, alt }) {
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

export default function Experience() {
  const { t } = useLocale();
  const experiences = t.experience.items;
  const [openIdx, setOpenIdx] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 6);
  const hasMore = experiences.length > 6;

  return (
    <section id="experience" className="px-6 md:px-20 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-5 mb-10">
          <h2 className="section-title font-serif font-normal tracking-tight whitespace-normal md:whitespace-nowrap">
            {t.experience.title1}{" "}
            <em className="italic text-accent">{t.experience.title2}</em>
          </h2>
          <div className="flex-1 h-px bg-border min-w-5" />
        </div>

        <div className="timeline-wrapper relative pl-17 md:pl-24 max-w-3xl">
          {visibleExperiences.map((exp, i) => {
            const isOpen = openIdx === i;
            const hasDetail = exp.points.length > 0;
            return (
              <Reveal key={`${exp.company} — ${exp.period}`} delay={i * 0.08}>
                <div
                  className={`relative pb-4 ${i === experiences.length - 1 ? "pb-2" : "pb-6"}`}
                >
                  <CompanyLogo
                    logo={exp.logo}
                    initials={exp.initials}
                    alt={exp.company}
                  />
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-label={`${t.experience.detail} — ${exp.role}`}
                    className={`group text-left w-full rounded-2xl p-6 transition-all duration-300 ${
                      isOpen
                        ? "glass glass-card"
                        : "hover:bg-(--glass-bg)"
                    }`}
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span>
                        <span className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-sm text-accent tracking-wide uppercase">
                            {exp.period}
                          </span>
                          {exp.tipe && (
                            <span className="font-mono text-[10px] tracking-widest uppercase text-accent/80 border border-accent/30 rounded-full px-2.5 py-1">
                              {exp.tipe}
                            </span>
                          )}
                        </span>
                        <span className="block text-[22px] font-normal tracking-tight mb-1">
                          {exp.role}
                        </span>
                        <span className="block font-mono text-[15px] text-muted">
                          {exp.company}
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
                              {exp.points.map((point) => (
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

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 font-mono text-sm tracking-wide uppercase text-cream glass glass-card rounded-full px-8 py-3.5"
            >
              {showAll
                ? t.experience.showLess
                : `${t.experience.showAll} (${experiences.length})`}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}