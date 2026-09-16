"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLocale } from "@/app/i18n";
import { toolIcons } from "@/data/tools";

function ToolChip({ name }) {
  const icon = toolIcons[name];
  const [hideIcon, setHideIcon] = useState(false);

  return (
    <span className="marquee-item glass glass-card rounded-full font-mono text-sm text-cream whitespace-nowrap">
      {icon && !hideIcon && (
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
          className="w-5 h-5 shrink-0"
          onError={() => setHideIcon(true)}
        />
      )}
      <span>{name}</span>
    </span>
  );
}

function MarqueeRow({ label, items, reverse }) {
  return (
    <div className="space-y-4">
      <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase pl-2">
        {label}
      </h3>
      <div className={`marquee ${reverse ? "marquee-reverse" : ""}`}>
        <div className="marquee-track">
          {[...items, ...items].map((item, i) => (
            <ToolChip key={`${item}-${i}`} name={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Tools() {
  const { t } = useLocale();

  return (
    <section id="tools" className="px-6 md:px-20 py-20 md:py-28 overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-5 mb-16">
          <h2 className="section-title font-serif font-normal tracking-tight whitespace-normal md:whitespace-nowrap">
            {t.tools.title1}{" "}
            <em className="italic text-accent">{t.tools.title2}</em>
          </h2>
          <div className="flex-1 h-px bg-border min-w-5" />
        </div>

        <Reveal>
          <div className="space-y-10">
            {t.tools.rows.map((row, i) => (
              <MarqueeRow
                key={row.label}
                label={row.label}
                items={row.items}
                reverse={i % 2 === 1}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}