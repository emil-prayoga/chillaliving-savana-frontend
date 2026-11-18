"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { CONTACT_HREF, NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/cn";

const SCROLL_THRESHOLD = 40;

export function Navbar() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > SCROLL_THRESHOLD));

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      data-solid={solid}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-obsidian/0 backdrop-blur-[0px]",
        "transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500 ease-out motion-reduce:transition-none",
        "data-[solid=true]:border-ivory/10 data-[solid=true]:bg-obsidian/95 data-[solid=true]:backdrop-blur-md",
        "data-[solid=true]:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.5)]",
      )}
    >
      <div className="mx-auto flex h-20 max-w-content items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#beranda" aria-label="ChillaLiving × Savana Group, kembali ke beranda" className="flex flex-col justify-center whitespace-nowrap">
          <span className="flex items-center gap-2 font-serif text-lg font-medium leading-none tracking-tight text-white sm:text-2xl lg:text-xl xl:text-3xl">
            ChillaLiving
            <span aria-hidden className="text-lg font-light italic text-champagne sm:text-2xl">×</span>
            Savana Group
          </span>
          <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.26em] text-champagne sm:text-[10px]">
            Hunian &amp; Investasi Terpadu
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-x-5 lg:flex xl:gap-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-ivory/80 transition-colors duration-200 hover:text-champagne xl:text-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ButtonLink href={CONTACT_HREF} size="sm">
              Hubungi Kami
            </ButtonLink>
          </div>
          <button
            type="button"
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((v) => !v)}
            className="-mr-2 inline-flex size-11 items-center justify-center text-ivory transition-colors hover:text-champagne lg:hidden"
          >
            {menuOpen ? <X aria-hidden size={24} strokeWidth={1.5} /> : <Menu aria-hidden size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="menu-mobile"
            aria-label="Menu navigasi"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
            className="border-t border-ivory/10 bg-obsidian px-4 pb-8 pt-3 sm:px-6 lg:hidden"
          >
            <ul className="mx-auto max-w-content">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-xs font-medium uppercase tracking-[0.16em] text-ivory/80 transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mx-auto mt-4 max-w-content">
              <ButtonLink href={CONTACT_HREF} onClick={() => setMenuOpen(false)} className="w-full">
                Hubungi Kami
              </ButtonLink>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
