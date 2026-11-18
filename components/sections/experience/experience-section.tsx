"use client";

import { useState } from "react";
import { EXPERIENCE_OPTIONS, type ExperienceId } from "@/data/experience";
import { SECTION_ID } from "@/data/site";
import { ExperiencePanel } from "./experience-panel";
import { ExperienceToggle } from "./experience-toggle";

export function ExperienceSection() {
  const [selected, setSelected] = useState<ExperienceId>("sewa");

  return (
    <section
      id={SECTION_ID.experience}
      aria-labelledby="experience-heading"
      className="relative scroll-mt-20 border-t border-hairline bg-obsidian py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-champagne sm:text-[10px]">Dua Solusi Terpadu</span>
          <h2 id="experience-heading" className="font-serif text-3xl font-normal leading-tight text-balance text-white sm:text-4xl lg:text-5xl">
            Tentukan Pengalaman Menghuni Anda
          </h2>
          <p className="mx-auto max-w-xl text-xs font-light leading-relaxed text-muted sm:text-sm">
            Dua pendekatan yang disesuaikan dengan ritme hidup dan rencana Anda ke depan.
          </p>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <ExperienceToggle options={EXPERIENCE_OPTIONS} value={selected} onChange={setSelected} />
        </div>

        <div className="relative mt-8 border border-hairline bg-charcoal p-5 sm:mt-10 sm:p-7 lg:p-8">
          <div className="grid">
            {EXPERIENCE_OPTIONS.map((option) => (
              <ExperiencePanel key={option.id} option={option} active={option.id === selected} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
