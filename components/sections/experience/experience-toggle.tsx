"use client";

import { useRef, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ExperienceId, ExperienceOption } from "@/data/experience";
import { cn } from "@/lib/cn";

interface ExperienceToggleProps {
  options: readonly ExperienceOption[];
  value: ExperienceId;
  onChange: (id: ExperienceId) => void;
}

export function ExperienceToggle({ options, value, onChange }: ExperienceToggleProps) {
  const reduceMotion = useReducedMotion();
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const move = (index: number) => {
    const next = (index + options.length) % options.length;
    onChange(options[next].id);
    refs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") move(index + 1);
    else if (e.key === "ArrowLeft") move(index - 1);
    else if (e.key === "Home") move(0);
    else if (e.key === "End") move(options.length - 1);
    else return;
    e.preventDefault();
  };

  return (
    <div
      role="tablist"
      aria-label="Pilih tujuan hunian"
      className="grid w-full max-w-2xl grid-cols-2 border border-champagne/30 bg-charcoal p-1"
    >
      {options.map((option, i) => {
        const selected = option.id === value;
        return (
          <button
            key={option.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`tab-${option.id}`}
            aria-selected={selected}
            aria-controls={`panel-${option.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(option.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              "relative flex min-h-12 items-center justify-center px-2 py-2 text-center transition-colors duration-300 sm:min-h-14 sm:px-4",
              selected ? "text-obsidian" : "text-ivory/80 hover:text-champagne",
            )}
          >
            {selected ? (
              <motion.span
                layoutId="experience-indicator"
                aria-hidden
                className="absolute inset-0 bg-champagne"
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38 }}
              />
            ) : null}
            <span className="relative text-[9px] font-semibold uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.12em]">
              {option.tabLabel} Apartemen ({option.tabBrand})
            </span>
          </button>
        );
      })}
    </div>
  );
}
