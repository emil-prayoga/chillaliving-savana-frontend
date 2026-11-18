import { CONTACT_HREF, RENT_OPTIONS_HREF } from "./site";

export type ExperienceId = "sewa" | "beli";

export interface ExperienceOption {
  id: ExperienceId;
  tabLabel: string;
  tabBrand: string;
  badge: string;
  title: string;
  description: string;
  features: readonly { title: string; description: string }[];
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: { src: string; alt: string };
}

export const EXPERIENCE_OPTIONS: readonly ExperienceOption[] = [
  {
    id: "sewa",
    tabLabel: "Sewa",
    tabBrand: "ChillaLiving",
    badge: "ChillaLiving Hospitality",
    title: "Kenyamanan Penuh Fleksibilitas, Sesuai Ritme Anda.",
    description:
      "Didesain khusus untuk para dokter residen, konsultan medis spesialis, ekspatriat, dan eksekutif yang menginginkan oase ketenangan hening tanpa ikatan komitmen jangka panjang.",
    features: [
      { title: "Sewa Harian Fleksibel", description: "Pilihan tepat untuk transit pasien, kunjungan spesialis, dan dinas intensif." },
      { title: "Residensi Bulanan", description: "Paket jangka menengah praktis bagi dokter residen dan profesional bisnis." },
      { title: "Fully Furnished Bintang 5", description: "Kasur berstandar ortopedik, kitchenette lengkap, dan interior Japandi hening." },
      { title: "Layanan Tata Graha Berkala", description: "Housekeeping terjadwal, linen hotel premium, dan concierge privat 24/7." },
    ],
    cta: { label: "Lihat Pilihan Sewa", href: RENT_OPTIONS_HREF },
    image: {
      src: "/images/image3.png",
      alt: "Interior apartemen Japandi dengan ruang keluarga bernuansa hangat",
    },
  },
  {
    id: "beli",
    tabLabel: "Beli",
    tabBrand: "Savana Group",
    badge: "Savana Group Development",
    title: "Kepemilikan Permanen, Bangun Nilai Generasional.",
    description:
      "Instrumen kepemilikan aset bernilai tinggi dengan sertifikasi Strata Title resmi, captive market medis stabil, serta apresiasi modal prima di episentrum kota.",
    features: [
      { title: "Sertifikat Strata Title Penuh", description: "Kepastian legalitas formal untuk kepemilikan jangka panjang atau agunan." },
      { title: "High Rental Yield Capture", description: "Permintaan sewa berkelanjutan dari tenaga medis, ekspatriat & eksekutif." },
      { title: "Horizon Penthouse Series", description: "Unit lantai puncak dengan akses lift privat dan panorama 270 derajat." },
      { title: "Passive Income Terintegrasi", description: "Kerja sama pengelolaan penyewaan hands-free melalui operator ChillaLiving." },
    ],
    cta: { label: "Konsultasi Kepemilikan", href: CONTACT_HREF },
    secondaryCta: { label: "Minta Brosur Portofolio", href: CONTACT_HREF },
    image: {
      src: "/images/image4.png",
      alt: "Interior Horizon Sky Penthouse dengan panorama kota",
    },
  },
];
