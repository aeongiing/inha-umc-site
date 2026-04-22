'use client';

import { useRef, useEffect } from 'react';

export default function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W: number, H: number, raf: number;

    type Particle = { x: number; y: number; vx: number; vy: number; r: number };
    let particles: Particle[];

    function resize() {
      W = canvas!.width  = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    }
    resize();

    particles = Array.from({ length: 160 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 1.5 + .5,
    }));

    let mx = -999, my = -999;
    canvas.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
    });

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,175,236,${.18 * (1 - d / 140)})`;
            ctx.lineWidth = .6;
            ctx.stroke();
          }
        }
        const dx = particles[i].x - mx;
        const dy = particles[i].y - my;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 80) { particles[i].vx += dx / d * .8; particles[i].vy += dy / d * .8; }
      }
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        p.vx *= .995; p.vy *= .995;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,175,236,0.6)';
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas ref={ref} style={{
      position: 'fixed', inset: 0, width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 0,
    }} />
  );
}
