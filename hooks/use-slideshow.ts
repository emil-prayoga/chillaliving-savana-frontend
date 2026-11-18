"use client";

import { useCallback, useEffect, useState } from "react";

interface SlideshowState {
  current: number;
  /** Slide sebelumnya dipertahankan di bawah slide aktif agar crossfade tidak menembus ke background. */
  previous: number | null;
}

export function useSlideshow(length: number, intervalMs: number, autoplay: boolean) {
  const [state, setState] = useState<SlideshowState>({ current: 0, previous: null });
  const { current } = state;

  const goTo = useCallback((index: number) => {
    setState((s) => (index === s.current ? s : { current: index, previous: s.current }));
  }, []);

  // Timer dijadwalkan ulang setiap slide berubah, termasuk saat pengguna memilih slide manual.
  useEffect(() => {
    if (!autoplay || length < 2) return;
    const id = window.setTimeout(() => goTo((current + 1) % length), intervalMs);
    return () => window.clearTimeout(id);
  }, [autoplay, length, intervalMs, current, goTo]);

  return { current: state.current, previous: state.previous, goTo };
}
