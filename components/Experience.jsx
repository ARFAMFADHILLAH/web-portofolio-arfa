import Reveal from "@/components/Reveal";

const experiences = [
  {
    period: "Des 2025 — Sekarang",
    role: "IT Support Specialist",
    company: "PT. RADIUS ALLKINDO ELECTRIC",
    points: [],
  },
  {
    period: "Sep 2019 — Sekarang",
    role: "Founder & Web Developer",
    company: "Rizqy Utama Store",
    points: [],
  },
  {
    period: "Mei 2025 — Agu 2025",
    role: "SEO Writer - Magang",
    company: "GroPerti",
    points: [
      "Crafted High-Quality SEO Content: Wrote and optimized articles following SEO best practices to enhance website rankings, focusing on targeted keyword usage.",
      "Conducted In-Depth Keyword Research: Performed keyword research to identify high-value and relevant terms, driving organic traffic to the company's website.",
      "Collaborated with the Marketing Team: Partnered with the marketing and design teams to ensure content alignment with overall marketing strategies and brand identity.",
    ],
  },
  {
    period: "Okt 2024 — Mar 2025",
    role: "Web Developer - Magang",
    company: "PT. BUMI MATARITAMA",
    points: [
      "Developing and optimizing the company's website based on SEO (Search Engine Optimization) best practices.",
      "Analyzing SEO performance to improve website visibility.",
      "Writing SEO-friendly articles using the Blogger platform.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-5 mb-16">
          <h2 className="section-title font-serif font-normal tracking-tight whitespace-normal md:whitespace-nowrap">
            Perjalanan <em className="italic text-accent">Karir</em>
          </h2>
          <div className="flex-1 h-px bg-border min-w-[20px]" />
        </div>

        <div className="timeline-wrapper relative pl-12 md:pl-16 max-w-3xl">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role + exp.period} delay={i * 0.08}>
              <div
                className={`relative ${i === experiences.length - 1 ? "pb-2" : "pb-14"}`}
              >
                <span className="timeline-dot absolute -left-[52px] md:-left-[68px] top-[7px] w-2 h-2 rounded-full bg-accent border-2 border-bg" />
                <div className="font-mono text-sm text-accent tracking-wide uppercase mb-2">
                  {exp.period}
                </div>
                <div className="text-[22px] font-normal tracking-tight mb-1">
                  {exp.role}
                </div>
                <div className="font-mono text-[15px] text-muted mb-3">
                  {exp.company}
                </div>
                {exp.points.length > 0 && (
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}