import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_420px] items-center gap-14 px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center">
        <div className="anim-fade-up-1 flex items-center gap-3 font-mono text-sm text-accent tracking-wide uppercase mb-7">
          <span className="inline-block w-6 h-px bg-accent" />
          Tersedia untuk Proyek Baru
        </div>
        <h1 className="hero-name anim-fade-up-2 font-serif font-normal leading-[1.1] tracking-tight">
          Arfa Muhammad
          <em className="block text-accent italic">Fadhillah</em>
        </h1>
        <div className="anim-fade-up-3 w-14 h-px bg-border my-7" />
        <p className="anim-fade-up-4 font-mono text-base text-muted tracking-wide mb-5">
          Software Engineer
        </p>
        <p className="anim-fade-up-5 text-lg text-muted font-light leading-[1.85] max-w-md">
          Merancang pengalaman digital yang bermakna — di antara estetika dan
          fungsionalitas yang berdampak nyata.
        </p>
        <div className="anim-fade-up-6 flex flex-wrap gap-4 mt-12">
          <a
            href="#projects"
            className="font-mono text-sm tracking-wide uppercase text-white bg-gradient-to-r from-accent to-accent-soft px-9 py-4 rounded-full shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-accent/50 transition-all"
          >
            Lihat Karya
          </a>
          <a
            href="#contact"
            className="font-mono text-sm tracking-wide uppercase text-cream glass glass-card rounded-full px-9 py-4 hover:text-accent transition-colors"
          >
            Hubungi Saya
          </a>
        </div>
      </div>

      {/* Photo */}
      <div className="anim-fade-in-photo hidden lg:flex justify-center items-center relative z-10">
        <div className="relative w-[340px] h-[420px] flex-shrink-0">
          <div className="absolute -inset-4 rounded-[32px] bg-[var(--accent-dim)] opacity-60 blur-2xl" />
          <div className="glass-strong rounded-3xl w-full h-full overflow-hidden relative shadow-2xl shadow-black/40">
            <Image
              src="/img/arfa.jpeg"
              alt="Arfa Muhammad Fadhillah"
              fill
              sizes="340px"
              className="object-cover contrast-[1.05] brightness-[0.92] hover:scale-105 transition-transform duration-[0.6s]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>

          <div className="glass-strong rounded-2xl px-6 py-4 flex gap-6 justify-between absolute inset-x-4 bottom-4 -translate-x-2 z-10">
            {[
              ["3+", "Tahun"],
              ["40+", "Proyek"],
              ["10", "Klien"],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <span className="block font-serif font-normal text-2xl text-accent leading-none">
                  {num}
                </span>
                <span className="block font-mono text-[13px] tracking-wide text-muted uppercase mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}