"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { HERO_INTERVAL_MS, HERO_SLIDES } from "@/data/hero-slides";
import { SECTION_ID } from "@/data/site";
import { useSlideshow } from "@/hooks/use-slideshow";
import { HeroSlideshow } from "./hero-slideshow";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export function HeroSection() {
  const reduceMotion = useReducedMotion() ?? false;
  const { current, previous } = useSlideshow(HERO_SLIDES.length, HERO_INTERVAL_MS, !reduceMotion);

  return (
    <section
      id={SECTION_ID.hero}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[92svh] flex-col overflow-hidden bg-obsidian lg:min-h-svh"
    >
      <HeroSlideshow slides={HERO_SLIDES} current={current} previous={previous} reduceMotion={reduceMotion} />

      <motion.div
        variants={container}
        initial={reduceMotion ? "show" : "hidden"}
        animate="show"
        className="relative z-20 mx-auto flex w-full max-w-content flex-1 flex-col items-center justify-center px-4 pb-10 pt-32 text-center sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl">
          <motion.p
            variants={fadeUp}
            className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-champagne sm:text-xs"
          >
            Satu Alamat Arsitektural, Dua Filosofi Menghuni
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="font-serif text-[2.75rem] font-normal leading-[1.02] tracking-tight text-white [text-shadow:0_2px_30px_rgb(0_0_0/0.45)] sm:text-6xl lg:text-7xl"
          >
            Ruang Hidup yang <em className="bg-[linear-gradient(105deg,#f4eee3_0%,#d8c5a2_48%,#b49a72_100%)] bg-clip-text font-normal text-transparent">Tepat</em>, untuk Setiap{" "}
            <em className="bg-[linear-gradient(105deg,#f4eee3_0%,#d8c5a2_48%,#b49a72_100%)] bg-clip-text font-normal text-transparent">Tujuan</em>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-ivory/90 sm:text-base"
          >
            Temukan kenyamanan hunian premium melalui pilihan sewa fleksibel atau kepemilikan apartemen dalam satu
            destinasi.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-2"
          >
            <div className="flex flex-col items-start gap-2">
             <span className="text-[9px] tracking-[0.2em]">CHILLALIVING · HOSPITALITY</span>
            <ButtonLink
              href={`#${SECTION_ID.experience}`}
              className="min-h-16 flex-col items-start gap-1 px-5 py-3 text-left"
            >
              <span className="flex items-center gap-2">JELAJAHI OPSI SEWA — HARIAN & BULANAN<ArrowRight size={14} /></span>
            </ButtonLink>
            </div>
            <div className="flex flex-col items-start gap-2">
            <span className="text-[9px] tracking-[0.2em]">SAVANA GROUP · INVESTASI & KEPEMILIKAN</span>
            <ButtonLink
              href={`#${SECTION_ID.experience}`}
              variant="outline"
              className="min-h-16 flex-col items-start gap-1 px-5 py-3 text-left"
            >
              <span className="flex items-center gap-2">PELUANG KEPEMILIKAN & STRATA TITLE<ArrowUpRight size={14} /></span>
            </ButtonLink>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-20 mx-auto mb-6 grid w-[calc(100%-2rem)] max-w-content grid-cols-2 items-center border border-ivory/10 bg-obsidian/75 px-4 py-3 sm:mb-8 sm:grid-cols-5 sm:px-6 sm:py-4">
        <div className="col-span-2 grid gap-1 text-[10px] leading-snug text-ivory/80 sm:col-span-3 lg:flex lg:items-center lg:gap-3 lg:text-[11px]">
          <span className="whitespace-nowrap">Kawasan Medis &amp; Finansial Terpadu</span>
          <span className="hidden text-champagne lg:inline">•</span>
          <span className="whitespace-nowrap">Private Residence &amp; Hospitality Concierge</span>
          <span className="hidden text-champagne lg:inline">•</span>
          <span className="whitespace-nowrap">Arsitektur Biophilic &amp; Akustik 42 dB</span>
        </div>
        <p className="flex items-center border-l border-ivory/10 py-2 pl-3 text-[9px] font-semibold leading-tight tracking-[0.12em] text-champagne sm:py-0 sm:pl-4 sm:text-[9px]">KOORDINAT DISTRIK UTAMA</p>
        <p className="flex items-center border-l border-ivory/10 py-2 pl-3 text-[9px] font-semibold leading-tight tracking-[0.12em] text-white sm:py-0 sm:pl-4 sm:text-[9px]">STRATA TITLE RESMI</p>
      </div>
    </section>
  );
}
