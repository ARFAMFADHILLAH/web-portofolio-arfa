"use client";

import { useEffect } from "react";
import { useLocale } from "@/app/i18n";

export default function CVModal({ open, onClose }) {
  const { t } = useLocale();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative glass-strong rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 md:p-12 shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 mb-8">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            {t.cv.title}
          </p>
          <button
            onClick={onClose}
            aria-label={t.cv.close}
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted hover:text-accent transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <h3 className="font-serif text-3xl font-normal tracking-tight mb-1">
          {t.cv.name}
        </h3>
        <p className="font-mono text-sm text-accent tracking-wide uppercase mb-6">
          {t.cv.role}
        </p>

        <p className="text-lg text-muted font-light leading-[1.85] mb-8">
          {t.cv.summary}
        </p>

        <div className="mb-10">
          {t.experience.items.map((exp) => (
            <div key={exp.role + exp.period} className="border-l-2 border-border pl-5 pb-6 last:pb-0">
              <div className="font-mono text-xs text-accent tracking-wide uppercase mb-1">
                {exp.period}
              </div>
              <div className="text-[17px] font-normal tracking-tight">
                {exp.role}
              </div>
              <div className="font-mono text-[13px] text-muted">
                {exp.company}
              </div>
            </div>
          ))}
        </div>

        <a
          href="/cv/cv-arfa.pdf"
          download={t.cv.name}
          className="inline-flex items-center gap-3 font-mono text-sm tracking-wide uppercase text-white bg-gradient-to-r from-accent to-accent-soft px-8 py-3.5 rounded-full shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-accent/50 transition-all"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" />
            <path d="M12 15V3" />
          </svg>
          {t.cv.download}
        </a>
      </div>
    </div>
  );
}