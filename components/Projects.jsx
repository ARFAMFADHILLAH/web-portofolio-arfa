"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/app/i18n";
import { projects } from "@/data/projects";

function ProjectImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="relative w-full aspect-[16/10] flex items-center justify-center bg-[var(--glass-bg)]">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted/50"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-[0.6s]"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="px-6 md:px-20 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-5 mb-16">
          <h2 className="section-title font-serif font-normal tracking-tight whitespace-normal md:whitespace-nowrap">
            {t.projects.title1}{" "}
            <em className="italic text-accent">{t.projects.title2}</em>
          </h2>
          <div className="flex-1 h-px bg-border min-w-[20px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.num} delay={(i % 3) * 0.08}>
              <div className="project-card glass glass-card rounded-3xl flex flex-col min-h-[240px] hover:-translate-y-1.5 group overflow-hidden">
                <div className="border-b border-border">
                  <ProjectImage
                    src={`/img/projects/${project.slug}.png`}
                    alt={project.title}
                  />
                </div>
                <div className="p-9 flex flex-col flex-1">
                  <span className="font-mono text-[13px] text-accent/70 tracking-[0.15em] mb-5">
                    {project.num}
                  </span>
                  <h3 className="text-2xl font-normal tracking-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="font-mono text-base text-muted leading-[1.75] mb-7 flex-1">
                    {t.projects.descs[i]}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-3 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-sm tracking-wide text-muted border border-border rounded-full px-3.5 py-1 group-hover:border-accent/40 group-hover:text-accent/80 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-sm tracking-wide uppercase text-accent hover:gap-3 transition-all"
                      >
                        {t.projects.visit}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}