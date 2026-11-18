import { ExperienceSection } from "@/components/sections/experience/experience-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <a
        href="#konten"
        className="sr-only z-60 bg-champagne px-4 py-2 text-sm font-semibold text-obsidian focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="konten" tabIndex={-1} className="outline-none">
        <HeroSection />
        <ExperienceSection />
      </main>
    </>
  );
}
