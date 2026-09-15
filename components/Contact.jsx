"use client";

import { useLocale } from "@/app/i18n";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arfamuhammadfadhillah",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ARFAMFADHILLAH",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/arfaamhmmd_/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@arfa.php",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { t } = useLocale();

  return (
    <section id="contact" className="px-6 md:px-20 py-20 md:py-32 text-center scroll-mt-20">
      <div className="font-mono text-sm tracking-[0.15em] text-accent uppercase mb-7">
        {t.contact.kicker}
      </div>
      <h2 className="contact-title font-serif font-normal tracking-tight leading-[1.1] mb-7">
        {t.contact.title1}
        <br />
        {t.contact.title2}{" "}
        <em className="italic text-accent">{t.contact.title3}</em>
      </h2>
      <p className="text-lg text-muted font-light leading-[1.8] max-w-md mx-auto mb-14">
        {t.contact.desc}
      </p>

      <div className="flex justify-center flex-col md:flex-row items-center gap-3 md:gap-4 max-w-md mx-auto mb-14">
        <a
          href="mailto:arfamuhammadfadhillah3@gmail.com"
          className="inline-flex items-center justify-center gap-3 font-mono text-sm tracking-wide uppercase w-full md:w-auto text-white bg-gradient-to-r from-accent to-accent-soft px-10 py-4 rounded-full shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-accent/50 transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16v16H4z" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
          {t.contact.cta}
        </a>
        <a
          href="/cv/cv-arfa.pdf"
          download={t.cv.name}
          className="inline-flex items-center justify-center gap-3 font-mono text-sm tracking-wide uppercase w-full md:w-auto text-cream glass glass-card rounded-full px-10 py-4 hover:text-accent transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" />
            <path d="M12 15V3" />
          </svg>
          {t.contact.downloadCv}
        </a>
      </div>

      <div className="flex justify-center gap-9 flex-wrap">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 font-mono text-sm tracking-wide uppercase text-muted hover:text-accent transition-colors"
          >
            {social.icon}
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}