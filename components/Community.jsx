"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/app/i18n";

function CommunityLogo({ logo, initials, alt }) {
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

function CommunityList({ items }) {
  return (
    <div className="timeline-wrapper relative pl-17 md:pl-24 max-w-3xl">
      {items.map((item, i) => (
        <Reveal key={item.name + item.period} delay={i * 0.08}>
          <div
            className={`relative pb-4 ${
              i === items.length - 1 ? "pb-2" : "pb-6"
            }`}
          >
            <CommunityLogo
              logo={item.logo}
              initials={item.initials}
              alt={item.name}
            />
            <div className="group w-full rounded-2xl p-6 transition-all duration-300 hover:bg-(--glass-bg)">
              <span className="block font-mono text-sm text-accent tracking-wide uppercase mb-2">
                {item.period}
              </span>
              <span className="block text-[22px] font-normal tracking-tight mb-1">
                {item.role}
              </span>
              <span className="block font-mono text-[15px] text-muted">
                {item.name}
              </span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Community() {
  const { t } = useLocale();
  const organizations = t.organization;

  const heading = organizations
    ? `${t.community.title1} & ${organizations.title1}`
    : `${t.community.title1} ${t.community.title2 || ""}`.trim();

  return (
    <section id="community" className="px-6 md:px-20 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-5 mb-16">
          <h2 className="section-title font-serif font-normal tracking-tight whitespace-normal md:whitespace-nowrap">
            {heading}
          </h2>
          <div className="flex-1 h-px bg-border min-w-5" />
        </div>

        <div className="space-y-20">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="font-mono text-sm text-accent tracking-[0.15em] uppercase">
                {t.community.title1}
              </h3>
              <div className="flex-1 h-px bg-border" />
            </div>
            <CommunityList items={t.community.items} />
          </div>

          {organizations && (
            <div>
              <div className="flex items-center gap-4 mb-10">
                <h3 className="font-mono text-sm text-accent tracking-[0.15em] uppercase">
                  {organizations.title1}
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>
              <CommunityList items={organizations.items} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}