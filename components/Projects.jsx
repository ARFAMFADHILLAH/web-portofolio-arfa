import Reveal from "@/components/Reveal";

const projects = [
  {
    num: "001",
    title: "Car Management Radius",
    desc: "Aplikasi manajemen kendaraan untuk perusahaan radius dengan antarmuka sederhana dan aksesibel.",
    tags: ["MySQL", "Tailwind", "PHP"],
  },
  {
    num: "002",
    title: "Kasirku",
    desc: "Aplikasi kasir untuk UMKM dengan antarmuka sederhana dan aksesibel.",
    tags: ["PHP", "Bootstrap", "MySQL"],
  },
  {
    num: "003",
    title: "Cymbal Track App",
    desc: "Aplikasi web untuk memantau dan menganalisis data cymbal dengan visualisasi yang informatif.",
    tags: ["Google Firebase", "Google Cloud", "JavaScript"],
  },
  {
    num: "004",
    title: "Perpustakaan 40",
    desc: "Aplikasi berbasis website untuk mengelola peminjaman dan pengembalian buku dengan tampilan mewah dan elegan.",
    tags: ["MySQL", "PHP", "Bootstrap"],
  },
  {
    num: "005",
    title: "Employee Salary Management",
    desc: "Program untuk mengelola data gaji karyawan dengan tampilan mewah dan elegan.",
    tags: ["JAVA", "NetBeans"],
  },
  {
    num: "006",
    title: "bumata.co.id",
    desc: "Website resmi untuk company profile PT. BUMI MATARITAMA dengan tampilan mewah dan elegan.",
    tags: ["PHP", "WordPress", "Hosting"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-5 mb-16">
          <h2 className="section-title font-serif font-normal tracking-tight whitespace-normal md:whitespace-nowrap">
            Karya <em className="italic text-accent">Terpilih</em>
          </h2>
          <div className="flex-1 h-px bg-border min-w-[20px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.num} delay={(i % 3) * 0.08}>
              <div className="project-card glass glass-card rounded-3xl p-9 flex flex-col min-h-[240px] hover:-translate-y-1.5 group">
                <span className="font-mono text-[13px] text-accent/70 tracking-[0.15em] mb-5">
                  {project.num}
                </span>
                <h3 className="text-2xl font-normal tracking-tight mb-3">
                  {project.title}
                </h3>
                <p className="font-mono text-base text-muted leading-[1.75] mb-7 flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-sm tracking-wide text-muted border border-border rounded-full px-3.5 py-1 group-hover:border-accent/40 group-hover:text-accent/80 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}