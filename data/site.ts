/** ID section. Section yang belum dibuat (koleksi, lokasi, fasilitas, faq, kontak) menjadi target anchor. */
export const SECTION_ID = {
  hero: "beranda",
  experience: "pengalaman",
} as const;

/** Ganti nilai ini (mis. ke WhatsApp/form) saat tujuan konsultasi sudah ditentukan. */
export const CONTACT_HREF = "#kontak";
export const RENT_OPTIONS_HREF = "#koleksi";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#pengalaman" },
  { label: "Pilihan Hunian", href: "#koleksi" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Konsultasi", href: "#faq" },
];
