"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/app/i18n";

function CertificateImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className="relative w-full aspect-16/10 flex items-center justify-center bg-(--glass-bg)">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted/50"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M12 12v8" />
          <path d="M9 17h6" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-16/10 overflow-hidden">
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

export default function Certificates() {
  const { t } = useLocale();

  return (
    <section id="certificates" className="px-6 md:px-20 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-5 mb-16">
          <h2 className="section-title font-serif font-normal tracking-tight whitespace-normal md:whitespace-nowrap">
            {t.certificates.title1}{" "}
            <em className="italic text-accent">{t.certificates.title2}</em>
          </h2>
          <div className="flex-1 h-px bg-border min-w-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.certificates.items.map((item, i) => (
            <Reveal key={item.title + item.year} delay={(i % 3) * 0.08}>
              <div className="project-card glass glass-card rounded-3xl flex flex-col min-h-60 hover:-translate-y-1.5 group overflow-hidden">
                <div className="border-b border-border">
                  <CertificateImage src={item.image} alt={item.title} />
                </div>
                <div className="p-9 flex flex-col flex-1">
                  <span className="font-mono text-[13px] text-accent/70 tracking-[0.15em] mb-5">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-normal tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="font-mono text-base text-muted leading-[1.75] mb-7 flex-1">
                    {item.issuer}
                  </p>
                  {item.link && (
                    <div className="flex items-center justify-between flex-wrap gap-3 mt-auto">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-sm tracking-wide uppercase text-accent hover:gap-3 transition-all"
                      >
                        {t.certificates.credential}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}