'use client';

import { useRef, useState, useEffect } from 'react';

export function useReveal<T extends HTMLElement = HTMLElement>(threshold = 0.07) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

export function useRevealList<T extends HTMLElement = HTMLElement>(count: number, threshold = 0.07) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Array.from({ length: count }, (_, i) =>
            setTimeout(() => setVisible(v => [...v, i]), i * 80)
          );
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [count, threshold]);

  return [ref, visible] as const;
}
