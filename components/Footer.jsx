export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-20 py-9 flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="font-mono text-sm text-muted tracking-wide">
        © 2026 Arfa Muhammad Fadhillah. Dibuat dengan teliti.
      </span>
      <a
        href="#hero"
        className="font-mono text-sm tracking-wide uppercase text-muted hover:text-accent transition-colors"
      >
        Kembali ke atas &uarr;
      </a>
    </footer>
  );
}