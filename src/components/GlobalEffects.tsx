'use client';

import { useEffect } from 'react';

export default function GlobalEffects() {
  useEffect(() => {
    const dot = document.getElementById('cur-dot');
    const ring = document.getElementById('cur-ring');
    const scrollBar = document.getElementById('scroll-bar');
    if (!dot || !ring || !scrollBar) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    };
    document.addEventListener('mousemove', onMove);

    let raf: number;
    const animRing = () => {
      rx += (mx - rx) * .12;
      ry += (my - ry) * .12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      raf = requestAnimationFrame(animRing);
    };
    animRing();

    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      scrollBar.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
