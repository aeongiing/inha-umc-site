'use client';

import { useState, useEffect } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface CounterProps { target: number; duration?: number; }

export default function Counter({ target, duration = 1600 }: CounterProps) {
  const [val, setVal] = useState(0);
  const [ref, visible] = useReveal<HTMLSpanElement>();

  useEffect(() => {
    if (!visible) return;
    const step = Math.ceil(target / (duration / 16));
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(cur);
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [visible, target, duration]);

  return <span ref={ref}>{val}</span>;
}
