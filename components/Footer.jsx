"use client";

import { useLocale } from "@/app/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border px-6 md:px-20 pt-9 pb-28 md:pb-32 flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="font-mono text-sm text-muted tracking-wide">
        {t.footer.crafted}
      </span>
      <a
        href="#hero"
        className="font-mono text-sm tracking-wide uppercase text-muted hover:text-accent transition-colors"
      >
        {t.footer.back} &uarr;
      </a>
    </footer>
  );
}