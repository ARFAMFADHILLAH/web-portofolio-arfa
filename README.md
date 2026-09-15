# Portofolio Arfa Muhammad Fadhillah

Portofolio pribadi berbasis web dengan gaya **glassmorphism**, palet **biru & putih**, dukungan **mode gelap / terang**, dan **dua bahasa (Indonesia / English)**.

Dibangun dengan **Next.js 15** + **Tailwind CSS v4** + **React 19**.

## Fitur

- 🪟 Desain glassmorphism (glass ring, inner highlight, blur)
- 🌗 Mode gelap / terang, tersimpan di `localStorage`
- 🌐 Dua bahasa (ID / EN) via toggle di navbar, preferensi disimpan di `localStorage`
- 🧭 Bottom navigation (desktop + mobile) dengan scrollspy aktif
- 🧰 Tools marquee bergerak terus-menerus, berhenti saat hover
- 📁 Karya dengan galeri foto (gambar dari `public/img/projects/`)
- 📄 CV modal preview + tombol download (`public/cv/cv-arfa.pdf`)
- 💻 Custom cursor, animasi reveal saat scroll, skill bar animasi
- 🔤 Font Cormorant Garamond & DM Mono via `next/font`

## Daftar Isi Halaman

- **Hero** — pengantar + foto + statistik (tahun, proyek, klien) + tombol CV
- **Tentang Saya** — deskripsi + keahlian teknis
- **Tools & Teknologi** — marquee per bidang (web, mobile, cyber security)
- **Karya Terpilih** — galeri proyek + tautan
- **Perjalanan Karir** — timeline pengalaman dengan logo perusahaan
- **Kontak** — email, CV, & sosial media

## Cara Menjalankan

```bash
npm install        # install dependency
npm run dev        # jalankan mode development  → http://localhost:3000
```

### Production

```bash
npm run build      # build produksi
npm run start      # jalankan server produksi
```

### Lint

```bash
npm run lint       # ESLint (eslint.config.mjs)
```

## Asset yang Disediakan Pengguna

| Path | Isi |
|---|---|
| `public/img/projects/<slug>.png` | Foto karya (slug: `car-management-radius`, `kasirku`, `cymbal-track-app`, `perpustakaan-40`, `employee-salary-management`, `bumata`) |
| `public/img/logos/<nama>.png` | Logo perusahaan Experience (`radius-allkindo`, `rizqy-utama`, `groperti`, `bumataritama`) |
| `public/cv/cv-arfa.pdf` | File CV untuk tombol download |

> Asset yang belum ada otomatis memakai fallback (placeholder / inisial), jadi situs tetap bisa dijalankan tanpa asset.

## Teknologi

| Teknologi | Kegunaan |
|---|---|
| Next.js 15 (App Router) | Framework, routing, SSR/CSR |
| Tailwind CSS v4 | Styling & utility pertama |
| React 19 | Komponen UI |
| next/font | Font Cormorant Garamond & DM Mono |

## Struktur Direktori

```
├── app/
│   ├── layout.jsx       # Root layout, font, metadata
│   ├── page.jsx         # Halaman utama (bungkus LocaleProvider)
│   ├── i18n.jsx         # LocaleProvider + useLocale
│   ├── icon.svg         # Favicon
│   └── globals.css      # Tema, variabel CSS, glass effect
├── components/          # Navbar, BottomNav, Hero, Tools, Projects, dst.
├── data/                # translations.js, projects.js
└── public/              # img/, cv/
```

---

© 2026 Arfa Muhammad Fadhillah. Dibuat dengan teliti.