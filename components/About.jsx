"use client";

import Reveal from "@/components/Reveal";
import SkillBar from "@/components/SkillBar";
import { useLocale } from "@/app/i18n";

function SectionHeading({ title }) {
  return (
    <div className="flex items-center gap-5 mb-16">
      <h2 className="section-title font-serif font-normal tracking-tight whitespace-normal md:whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border min-w-[20px]" />
    </div>
  );
}

export default function About() {
  const { t } = useLocale();
  const skills = [
    ["UI/UX Design", 92],
    ["Frontend", 88],
    ["Backend", 80],
    ["Figma / Prototyping", 95],
    ["Writing & Content", 75],
  ];

  return (
    <section id="about" className="px-6 md:px-20 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={
            <>
              {t.about.title1}{" "}
              <em className="italic text-accent">{t.about.title2}</em>
            </>
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          <div className="space-y-5">
            <Reveal>
              <p className="glass rounded-3xl p-8 md:p-10 text-lg text-muted font-light leading-[1.95]">
                {t.about.nameLead}{" "}
                <strong className="text-cream font-normal">
                  {t.cv.name}
                </strong>
                {t.about.nameTail}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="glass rounded-3xl p-8 md:p-10 text-lg text-muted font-light leading-[1.95]">
                {t.about.experienceLead}{" "}
                <strong className="text-cream font-normal">
                  {t.about.experienceStrong}
                </strong>
                {t.about.experienceTail}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="glass rounded-3xl p-8 md:p-10 text-lg text-muted font-light leading-[1.95]">
                {t.about.hobbies}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="skills-delay">
            <div className="glass glass-card rounded-3xl p-8 md:p-10">
              <h3 className="font-mono text-sm tracking-[0.15em] text-accent uppercase mb-8">
                {t.about.skillsTitle}
              </h3>
              <div className="space-y-6">
                {skills.map(([label, width]) => (
                  <SkillBar key={label} label={label} width={width} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}