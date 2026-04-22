'use client';

import { useState, useEffect } from 'react';

export function useTyping(strings: string[], speed = 50) {
  const [idx, setIdx]     = useState(0);
  const [chars, setChars] = useState(0);
  const [del, setDel]     = useState(false);

  useEffect(() => {
    const s = strings[idx];
    if (!del && chars < s.length) {
      const t = setTimeout(() => setChars(c => c + 1), speed + Math.random() * 25);
      return () => clearTimeout(t);
    }
    if (!del && chars === s.length) {
      const t = setTimeout(() => setDel(true), 2400);
      return () => clearTimeout(t);
    }
    if (del && chars > 0) {
      const t = setTimeout(() => setChars(c => c - 1), speed * .4);
      return () => clearTimeout(t);
    }
    if (del && chars === 0) {
      setDel(false);
      setIdx(i => (i + 1) % strings.length);
    }
  }, [chars, del, idx, strings, speed]);

  return strings[idx].slice(0, chars);
}
