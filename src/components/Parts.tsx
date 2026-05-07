'use client';

import { useState } from 'react';
import { useReveal, useRevealList } from '@/hooks/useReveal';

const PARTS = [
  { id: 'pm',      label: 'PM',      stack: 'Figma / Notion / 서비스 기획', color: '#FFD84D' },
  { id: 'design',  label: 'Design',  stack: 'Figma / Prototyping',          color: '#FF4D91' },
  { id: 'web',     label: 'Web',     stack: 'React / Vue / TS',              color: '#4D8EFF' },
  { id: 'android', label: 'Android', stack: 'Kotlin / Compose',              color: '#4CC97A' },
  { id: 'ios',     label: 'iOS',     stack: 'Swift / SwiftUI',               color: '#A87FFF' },
  { id: 'spring',  label: 'Spring',  stack: 'Java / Spring Boot',            color: '#FF8C4B' },
  { id: 'node',    label: 'Node',    stack: 'NestJS / Express',              color: '#4DC9C9' },
];

function hexToRgb(hex: string) {
  return hex.slice(1).match(/.{2}/g)!.map(x => parseInt(x, 16)).join(',');
}

export default function Parts() {
  const [sectionRef, visible]   = useReveal<HTMLElement>();
  const [listRef, listVisible]  = useRevealList<HTMLDivElement>(7, 0.05);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="parts" ref={sectionRef}
      style={{ position: 'relative', zIndex: 2, padding: 'clamp(72px,10vw,120px) clamp(16px,4vw,56px)' }}>

      <div style={{ animation: visible ? 'slide-left .6s both' : 'none', fontFamily: 'var(--sans)', fontSize: 10, color: 'var(--cyan)', letterSpacing: '0.1em', marginBottom: 16, opacity: .7 }}>02 — PARTS</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 40, animation: visible ? 'scan-in .7s .1s both' : 'none' }}>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, letterSpacing: '-0.025em', color: '#fff', lineHeight: 1.2 }}>7가지 파트</h2>
        <div style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--mid)', minHeight: 20, transition: 'color .2s' }}>
          {selected
            ? <span style={{ color: 'var(--cyan)' }}>→ {PARTS.find(p => p.id === selected)?.stack}</span>
            : <span>파트를 선택하세요</span>
          }
        </div>
      </div>

      <div ref={listRef} style={{ borderTop: '1px solid rgba(0,175,236,0.1)' }}>
        {PARTS.map((p, i) => (
          <div key={p.id}
            onMouseEnter={() => setSelected(p.id)}
            onMouseLeave={() => setSelected(null)}
            style={{
              display: 'flex', alignItems: 'center',
              padding: 'clamp(14px,2vw,20px) 0',
              borderBottom: '1px solid rgba(0,175,236,0.07)',
              cursor: 'default', transition: 'background .2s,color .2s,opacity .5s,transform .5s',
              background: selected === p.id ? 'rgba(255,255,255,0.02)' : 'transparent',
              opacity: listVisible.includes(i) ? 1 : 0,
              transform: listVisible.includes(i) ? 'none' : i % 2 === 0 ? 'translateX(-24px)' : 'translateX(24px)',
            }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 10, color: 'var(--dim)', width: 28, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
            <div style={{
              width: selected === p.id ? 12 : 7, height: selected === p.id ? 12 : 7,
              borderRadius: '50%', background: p.color, flexShrink: 0, marginRight: 16,
              transition: 'all .25s cubic-bezier(.16,1,.3,1)',
              boxShadow: selected === p.id ? `0 0 16px ${p.color},0 0 32px ${p.color}60` : 'none',
            }} />
            <span style={{
              fontWeight: 700, fontSize: 'clamp(18px,2.5vw,28px)', letterSpacing: '-0.02em',
              color: selected === p.id ? '#fff' : 'var(--mid)',
              transition: 'color .18s,text-shadow .2s', flex: 1,
              textShadow: selected === p.id ? `0 0 20px ${p.color}60` : 'none',
            }}>{p.label}</span>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--cyan)',
              opacity: selected === p.id ? 1 : 0,
              transform: selected === p.id ? 'none' : 'translateX(8px)',
              transition: 'all .2s',
              background: selected === p.id ? `rgba(${hexToRgb(p.color)},0.1)` : 'transparent',
              border: `1px solid ${selected === p.id ? p.color + '60' : 'transparent'}`,
              borderRadius: 4, padding: '3px 10px',
              boxShadow: selected === p.id ? `0 0 12px ${p.color}40` : 'none',
            }}>{p.stack}</div>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 14, marginLeft: 16, color: selected === p.id ? 'var(--cyan)' : 'transparent', transition: 'all .2s' }}>→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
