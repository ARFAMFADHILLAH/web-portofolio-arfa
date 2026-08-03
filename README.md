# Portofolio Arfa Muhammad Fadhillah

Portofolio pribadi berbasis web dengan gaya **glassmorphism**, palet **biru & putih**, serta dukungan **mode gelap & terang**.

Dibangun dengan **Next.js 15** + **Tailwind CSS v4** + **React 19**.

## Fitur

- 🪟 Desain glassmorphism (glass ring, inner highlight, blur)
- 🌗 Mode gelap / terang dengan toggle, tersimpan di `localStorage`
- 🎨 Palet identitas biru & putih
- 📱 Responsif (desktop, tablet, mobile) — menu hamburger di layar kecil
- 💻 Custom cursor, animasi reveal saat scroll, skill bar animasi
- 🔤 Font Cormorant Garamond & DM Mono via `next/font`

## Daftar Isi Halaman

- **Hero** — pengantar + foto + statistik (tahun, proyek, klien)
- **Tentang Saya** — deskripsi + keahlian teknis
- **Karya Terpilih** — galeri proyek
- **Perjalanan Karir** — timeline pengalaman
- **Kontak** — email & sosial media

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

> ⚠️ Jangan jalankan `npm run dev` dan `npm run build` secara bersamaan — keduanya memakai folder `.next` yang sama dan bisa merusak cache (error `Cannot find module './139.js'`). Selalu jalankan satu saja.

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
│   ├── page.jsx         # Halaman utama
│   └── globals.css      # Tema, variabel CSS, glass effect
├── components/          # Background, Navbar, Hero, About, dst.
├── public/img/          # Asset gambar
└── tmp-old/             # Versi lama (HTML/CSS/JS)
```

---

© 2026 Arfa Muhammad Fadhillah. Dibuat dengan teliti.