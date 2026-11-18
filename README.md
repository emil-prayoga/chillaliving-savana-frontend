# ChillaLiving × Savana Group — Frontend Assignment

Landing page properti premium yang mengintegrasikan layanan penyewaan apartemen ChillaLiving dan kepemilikan properti Savana Group dalam satu pengalaman digital.

## Deskripsi Proyek

Proyek ini dikembangkan sebagai bagian dari proses seleksi Frontend Engineer WPU Community.

ChillaLiving menyediakan layanan penyewaan apartemen dengan pilihan durasi harian, transit, dan bulanan. Sementara itu, Savana Group berfokus pada kepemilikan apartemen dan investasi properti.

Tujuan proyek ini adalah merancang landing page yang mampu mengakomodasi kedua kebutuhan tersebut melalui pengalaman pengguna yang intuitif, tampilan premium, dan pendekatan yang berorientasi pada konversi.

Konsep visual yang digunakan adalah **Cinematic Luxury / Dark Luxury**, dengan penekanan pada fotografi arsitektur, tipografi elegan, komposisi visual, dan animasi yang halus.

## Ruang Lingkup Implementasi

Implementasi frontend berfokus pada tiga bagian utama:

| Bagian | Deskripsi |
|---|---|
| Navbar | Navigasi responsif dengan tampilan transparan dan perubahan tampilan saat scrolling |
| Hero Section | Area utama dengan background arsitektur apartemen dan transisi gambar sinematik |
| Section Sewa/Beli | Pemilihan layanan interaktif antara ChillaLiving dan Savana Group |

Seluruh section lainnya disajikan dalam desain Figma sebagai rancangan landing page secara menyeluruh.

## Fitur Utama

- Navigasi responsif untuk desktop dan perangkat mobile.
- Hero section dengan pergantian gambar dan animasi zoom halus.
- Transisi navbar berdasarkan posisi scrolling.
- Pemilihan layanan penyewaan dan kepemilikan apartemen secara interaktif.
- Tampilan responsif pada berbagai ukuran layar.
- Animasi antarelemen yang mendukung pengalaman pengguna.

## Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| Next.js | Framework pengembangan aplikasi berbasis React |
| TypeScript | Menjaga konsistensi tipe data dan mengurangi kesalahan kode |
| Tailwind CSS | Mengelola styling dan responsivitas antarmuka |
| Framer Motion | Membuat animasi dan transisi antarelemen |
| Lucide React | Menyediakan ikon antarmuka |

### Alasan Pemilihan Teknologi

Next.js digunakan karena menyediakan struktur pengembangan berbasis komponen dan mendukung optimasi performa aplikasi web.

TypeScript membantu menjaga konsistensi kode melalui sistem tipe data yang lebih terstruktur. Tailwind CSS mempermudah penerapan desain responsif dan menjaga konsistensi styling.

Framer Motion digunakan untuk menghadirkan animasi yang halus dan interaktif, khususnya pada hero section, navbar, dan pemilihan layanan.

## Tantangan Selama Pengerjaan

Bagian ini menjelaskan tantangan yang dihadapi selama proses pengembangan, antara lain:

- Menjaga kesesuaian antara desain Figma dan implementasi frontend.
- Membangun pengalaman hero yang sinematik tanpa mengabaikan keterbacaan konten.
- Mengoptimalkan animasi agar tetap berjalan dengan baik pada berbagai perangkat.
- Membedakan alur kebutuhan pengguna yang ingin menyewa dan membeli apartemen.

## Hal yang Dipelajari

- Menerjemahkan rancangan UI/UX menjadi komponen frontend yang terstruktur.
- Memahami hubungan antara strategi produk dan pengalaman pengguna.
- Menerapkan desain responsif menggunakan Tailwind CSS.
- Mengembangkan interaksi dan animasi menggunakan Framer Motion.
- Mempertimbangkan keseimbangan antara kualitas visual, aksesibilitas, dan performa.

## Struktur Proyek

```text
chillaliving-savana-frontend/
├── public/
├── src/
│   ├── app/
│   └── components/
│       ├── layout/
│       ├── sections/
│       └── ui/
├── package.json
└── README.md
```

*Struktur dapat disesuaikan dengan implementasi akhir.*

## Cara Menjalankan Proyek

### Persyaratan

- Node.js (disarankan versi LTS).
- npm.

### Instalasi

Clone repository:

```bash
git clone <repository-url>
cd chillaliving-savana-frontend
```

Instal seluruh dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka alamat berikut melalui browser:

http://localhost:3000

### Build Produksi

```bash
npm run build
```

## Dokumentasi Desain

Dokumentasi strategi produk, design system, dan struktur keseluruhan landing page tersedia melalui:

- **Product Strategy & Design System:** [STRATEGY.md](./STRATEGY.md)
- **Desain Figma:** [Masukkan tautan Figma]

## Informasi Assignment

**Proyek:** ChillaLiving × Savana Group  
**Peran:** Kandidat Frontend Engineer  
**Komunitas:** WPU Community  
**Teknologi:** Next.js, TypeScript, Tailwind CSS, dan Framer Motion

---

Dikembangkan sebagai bagian dari proses seleksi Frontend Engineer WPU Community.