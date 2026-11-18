export interface HeroSlide {
  src: string;
  alt: string;
}

export const HERO_SLIDES: readonly HeroSlide[] = [
  { src: "/images/image1.png", alt: "Apartemen modern dengan balkon dan taman saat senja" },
  { src: "/images/image2.png", alt: "Kolam renang apartemen dengan pemandangan matahari terbenam" },
  { src: "/images/image3.png", alt: "Interior ruang keluarga apartemen bernuansa hangat" },
];

export const HERO_INTERVAL_MS = 6000;
export const HERO_FADE_SECONDS = 1.6;
