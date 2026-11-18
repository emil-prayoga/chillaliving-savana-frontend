"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_FADE_SECONDS, type HeroSlide } from "@/data/hero-slides";
import { cn } from "@/lib/cn";

interface HeroSlideshowProps {
  slides: readonly HeroSlide[];
  current: number;
  previous: number | null;
  reduceMotion: boolean;
}

export function HeroSlideshow({ slides, current, previous, reduceMotion }: HeroSlideshowProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-obsidian">
      {slides.map((slide, i) => {
        const isCurrent = i === current;
        const isPrevious = i === previous;
        return (
          <motion.div
            key={slide.src}
            initial={false}
            animate={{ opacity: isCurrent || isPrevious ? 1 : 0 }}
            transition={{ duration: isCurrent && !reduceMotion ? HERO_FADE_SECONDS : 0, ease: "easeInOut" }}
            style={{ zIndex: isCurrent ? 2 : isPrevious ? 1 : 0 }}
            className="absolute inset-0"
          >
            <div className={cn("absolute inset-0", (isCurrent || isPrevious) && "hero-zoom")}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        );
      })}
      {/* Overlay gelap agar teks tetap terbaca di semua slide, memudar ke Deep Obsidian di bawah. */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/20 bg-linear-to-b from-obsidian/60 via-obsidian/45 via-45% to-obsidian" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/20 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(23_26_24/0.7)_100%)]" />
    </div>
  );
}
