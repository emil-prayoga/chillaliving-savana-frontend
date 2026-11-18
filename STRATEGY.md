# PRODUCT STRATEGY & DESIGN SYSTEM
## ChillaLiving × Savana Group

## 1. Latar Belakang Produk

ChillaLiving dan Savana Group memiliki fokus layanan yang saling melengkapi dalam sektor properti.

ChillaLiving menyediakan pilihan penyewaan apartemen dengan durasi harian, transit, dan bulanan. Sementara itu, Savana Group berfokus pada kepemilikan apartemen dan investasi properti.

Landing page ini dirancang sebagai satu destinasi digital yang mengakomodasi kedua kebutuhan tersebut. Pengunjung dapat memahami layanan yang tersedia, mengeksplorasi informasi properti, dan diarahkan menuju tindakan yang sesuai dengan tujuan mereka.

## 2. Target Audiens

Perancangan antarmuka mempertimbangkan tiga kelompok audiens utama:

**Tenaga Medis**

Membutuhkan hunian yang nyaman dan fleksibel untuk menunjang aktivitas profesional dengan jadwal kerja yang dinamis.

**Eksekutif dan Profesional**

Mengutamakan efisiensi, kenyamanan, kredibilitas informasi, serta pengalaman digital yang profesional.

**Investor dan Calon Pemilik Properti**

Membutuhkan informasi yang jelas untuk memahami pilihan kepemilikan properti sebelum mengambil keputusan.

## 3. Strategi Produk dan Pengalaman Pengguna

Pendekatan utama yang digunakan adalah dual conversion journey, yaitu menyediakan dua jalur konversi dalam satu landing page.

**Jalur Penyewaan — ChillaLiving**

Pengunjung diarahkan untuk mengenali pilihan penyewaan, memahami informasi hunian, dan melanjutkan ke proses konsultasi atau pencarian unit.

**Jalur Kepemilikan — Savana Group**

Pengunjung diarahkan untuk memahami layanan kepemilikan apartemen, memperoleh informasi yang relevan, dan melanjutkan ke konsultasi.

Kedua jalur tersebut menggunakan satu identitas desain yang konsisten, tetapi tetap memiliki konteks layanan dan ajakan bertindak yang berbeda.

## 4. Design System

### 4.1 Konsep Visual

Konsep desain yang digunakan adalah **Cinematic Luxury / Dark Luxury**.

Pendekatan ini menggabungkan fotografi arsitektur, komposisi editorial, tipografi elegan, dan penggunaan warna gelap untuk membangun pengalaman visual yang premium.

Karakter desain yang ingin dibangun meliputi:

- Profesional dan kredibel.
- Elegan tanpa dekorasi berlebihan.
- Modern dan berorientasi pada kenyamanan.
- Memiliki hierarki informasi yang jelas.
- Mengutamakan keterbacaan dan kemudahan navigasi.

### 4.2 Palet Warna

| Nama Warna | Kode | Penggunaan |
|---|---|---|
| Deep Obsidian | #171A18 | Background utama |
| Charcoal | #242824 | Permukaan dan section gelap |
| Dark Forest | #343B35 | Variasi permukaan |
| Champagne Bronze | #B49A72 | Aksen dan elemen interaktif |
| Warm Ivory | #E8E2D7 | Teks dan elemen terang |
| Pure White | #FFFFFF | Teks utama |
| Muted Gray | #A6A69F | Teks sekunder |

**Alasan Pemilihan Warna**

Deep Obsidian dan Charcoal digunakan sebagai warna dasar untuk membangun kesan elegan sekaligus memberikan kontras yang kuat terhadap elemen konten.

Champagne Bronze berfungsi sebagai aksen visual untuk menonjolkan elemen penting tanpa membuat tampilan terlalu dekoratif.

Warm Ivory dan Pure White digunakan untuk menjaga keterbacaan, sedangkan Muted Gray digunakan pada informasi pendukung.

### 4.3 Tipografi

| Jenis | Font Family | Ukuran | Weight |
|---|---|---|---|
| Display Heading | Cormorant Garamond | 44–72 px, responsif | 400 |
| Section Heading | Cormorant Garamond | 30–48 px, responsif | 400 |
| Panel Heading | Cormorant Garamond | 24–30 px, responsif | 400 |
| Body | DM Sans | 12–16 px, responsif | 300–400 |
| Caption | DM Sans | 8–12 px | 400–600 |
| Navigation | DM Sans | 11–12 px | 500 |
| Button | DM Sans | 12 px | 500–600 |

Cormorant Garamond regular digunakan pada heading agar terasa editorial dan tenang; ukuran heading membesar bertahap mengikuti lebar layar. DM Sans menjadi pasangan sans-serif untuk deskripsi, navigasi, label, dan tombol. Ukuran teks antarmuka dibuat ringkas agar hierarki visual tetap berpusat pada fotografi dan judul, sementara bobot reguler menjaga tampilan tetap ringan dan mudah dibaca.

### 4.4 Spacing dan Grid

Sistem spacing menggunakan kelipatan 4 px untuk menjaga konsistensi jarak antarelemen.

| Token | Ukuran |
|---|---:|
| XS | 4 px |
| SM | 8 px |
| MD | 16 px |
| LG | 24 px |
| XL | 32 px |
| 2XL | 48 px |
| 3XL | 64 px |
| 4XL | 96 px |

Grid dan layout:

- Desktop: 12 kolom.
- Tablet: 8 kolom.
- Mobile: 4 kolom.
- Menggunakan container responsif dengan margin yang menyesuaikan ukuran layar.
- Mempertahankan whitespace untuk memberikan ruang visual yang proporsional.

### 4.5 Shadow dan Elevation

Shadow digunakan secara terbatas untuk membangun kedalaman antarelemen.

Contoh custom shadow:

- Soft Shadow: `0 4px 16px rgba(0,0,0,0.12)`
- Deep Shadow: `0 12px 32px rgba(0,0,0,0.24)`
- Bronze Glow: `0 0 20px rgba(180,154,114,0.12)`

Penggunaan shadow difokuskan pada elemen yang membutuhkan pemisahan visual, seperti navigasi, panel interaktif, dan tombol.

### 4.6 Komponen Antarmuka

Komponen utama meliputi:

- Navbar transparan dan navbar saat scrolling.
- Primary dan secondary button.
- Toggle Sewa/Beli.
- Property information card.
- Image gallery.
- FAQ accordion.
- CTA section.

Seluruh komponen mengikuti palet warna, tipografi, spacing, dan prinsip interaksi yang konsisten.

## 5. Struktur Halaman (Sections Breakdown)

Landing page dirancang dalam satu halaman dengan urutan sebagai berikut.

| Urutan | Section | Fungsi |
|---|---|---|
| 1 | Navbar | Menyediakan navigasi utama dan akses cepat ke layanan |
| 2 | Hero Section | Memperkenalkan produk, membangun kesan pertama, dan mengarahkan pengunjung |
| 3 | Sewa / Beli | Membantu pengunjung menentukan jalur layanan sesuai kebutuhannya |
| 4 | Koleksi Hunian | Memperkenalkan pilihan properti yang tersedia |
| 5 | Lokasi Strategis | Memberikan konteks lokasi dan kemudahan akses |
| 6 | Fasilitas | Menampilkan fasilitas dan fitur hunian berdasarkan data yang tersedia |
| 7 | Keunggulan | Menjelaskan nilai dan pembeda layanan |
| 8 | Proses Sewa dan Kepemilikan | Memberikan gambaran tahapan layanan |
| 9 | FAQ | Menjawab pertanyaan umum dan mengurangi keraguan |
| 10 | Final CTA dan Footer | Mengarahkan pengunjung ke tindakan lanjutan dan menyediakan informasi pendukung |

## 6. Customer Journey dan Conversion Strategy

Alur perjalanan pengguna dirancang untuk mempermudah pengunjung dalam mengambil keputusan.

**Tahap Awareness**

Pengunjung mengenali layanan melalui hero section yang memperkenalkan ChillaLiving dan Savana Group.

**Tahap Exploration**

Pengunjung memilih jalur Sewa atau Beli, kemudian mengeksplorasi informasi yang relevan dengan kebutuhannya.

**Tahap Consideration**

Pengunjung mempelajari koleksi hunian, lokasi, fasilitas, keunggulan, serta proses layanan.

**Tahap Conversion**

Pengunjung diarahkan melalui CTA yang sesuai, baik untuk menjelajahi pilihan sewa maupun melakukan konsultasi kepemilikan.

## 7. Referensi Desain

Referensi digunakan sebagai bahan pertimbangan dalam menentukan pendekatan visual, komposisi, tipografi, dan pengalaman pengguna.

Daftar sumber yang digunakan:

- [Google Stitch](https://stitch.google.com/projects/3113047757860531197)
- [Estatelux Theme](https://astro.build/themes/details/estatelux/)
- [Astragraphia](https://www.astragraphia.co.id/id/)

Referensi tersebut digunakan sebagai inspirasi, bukan untuk menyalin keseluruhan desain.

## 8. Dokumentasi Desain

**Figma:** https://www.figma.com/design/oEzHKCHpvHrciBKvJpIT5h/ChillaLiving-%C3%97-Savana-Landing-Page?node-id=20005-7063&t=ACBQyg2USauBP1rS-1

Dokumen Figma mencakup design system dan rancangan landing page desktop.

## 9. Penutup

Rancangan ini berupaya menggabungkan kebutuhan penyewaan dan kepemilikan properti dalam satu pengalaman digital yang konsisten.

Melalui pendekatan dual conversion journey dan design system Cinematic Luxury, landing page diharapkan dapat membangun persepsi profesional, menyampaikan informasi secara terstruktur, serta membantu pengunjung menemukan layanan yang sesuai dengan kebutuhannya.
