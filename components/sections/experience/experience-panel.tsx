"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import type { ExperienceOption } from "@/data/experience";
import { CONTACT_HREF } from "@/data/site";

interface ExperiencePanelProps {
  option: ExperienceOption;
  active: boolean;
}

/**
 * Semua panel ditumpuk di satu sel grid sehingga tinggi section stabil saat berpindah.
 * Panel tidak aktif disembunyikan dari pembaca layar dan keyboard (`inert`).
 */
export function ExperiencePanel({ option, active }: ExperiencePanelProps) {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 12;

  return (
    <motion.div
      role="tabpanel"
      id={`panel-${option.id}`}
      aria-labelledby={`tab-${option.id}`}
      aria-hidden={!active}
      inert={!active}
      initial={false}
      animate={
        active
          ? { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.18, ease: "easeOut" } }
          : { opacity: 0, y: offset, transition: { duration: reduceMotion ? 0 : 0.2, ease: "easeIn" } }
      }
      className="col-start-1 row-start-1 grid items-center gap-7 lg:grid-cols-12 lg:gap-8"
    >
      <div className="space-y-4 lg:col-span-6">
        <span className="inline-block border border-champagne/30 bg-forest px-3 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-champagne">
          {option.badge}
        </span>
        <h3 className="font-serif text-2xl font-normal leading-[1.08] text-white sm:text-3xl">{option.title}</h3>
        <p className="text-xs font-light leading-relaxed text-muted sm:text-sm">{option.description}</p>

        <ul className="grid gap-2.5 pt-1 sm:grid-cols-2">
          {option.features.map((feature) => (
            <li key={feature.title} className="border border-hairline bg-forest/70 p-3 sm:min-h-22.5 sm:p-3.5">
              <h4 className="text-[9px] font-medium uppercase leading-snug tracking-wider text-champagne sm:text-[10px]">{feature.title}</h4>
              <p className="mt-1.5 text-[10px] leading-relaxed text-muted sm:text-[11px]">{feature.description}</p>
            </li>
          ))}
        </ul>

        <div className={`flex gap-3 pt-2 ${option.id === "beli" ? "flex-col items-start" : "flex-col sm:flex-row"}`}>
          <ButtonLink href={option.cta.href} className="w-full sm:w-auto">
            {option.cta.label}
          </ButtonLink>
          {option.secondaryCta ? (
            <ButtonLink href={option.secondaryCta.href} variant="outline" className="w-full sm:w-auto">
              {option.secondaryCta.label}
            </ButtonLink>
          ) : option.id === "sewa" ? (
            <ButtonLink href={CONTACT_HREF} variant="outline" className="w-full sm:w-auto">
              Konsultasi Sewa Cepat
            </ButtonLink>
          ) : null}
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="group relative h-70 overflow-hidden border border-hairline sm:h-90 lg:h-97.5">
          <Image
            src={option.image.src}
            alt={option.image.alt}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
          />
          <div aria-hidden className="absolute inset-0 bg-linear-to-t from-obsidian/35 via-transparent to-transparent" />
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 border-t border-ivory/10 bg-obsidian/90 px-3 py-2.5 text-[9px] font-medium text-ivory sm:inset-x-4 sm:bottom-4 sm:px-4 sm:py-3">
            <span>{option.id === "sewa" ? "Interior Japandi Kontemplatif" : "Horizon Sky Penthouse"}</span>
            <span className="shrink-0 text-[8px] font-semibold tracking-[0.14em] text-champagne">{option.id === "sewa" ? "SIAP HUNI" : "STRATA TITLE"}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
