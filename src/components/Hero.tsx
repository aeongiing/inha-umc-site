'use client';

import { useState, useEffect } from 'react';
import { useTyping } from '@/hooks/useTyping';
import { goTo } from '@/lib/utils';

const PHRASES = [
  '앱을 만들고 싶다면.',
  '개발자로 성장하고 싶다면.',
  '실제 서비스를 런칭하고 싶다면.',
  '팀으로 일하는 법을 배우고 싶다면.',
];

interface HeroProps { recruiting: boolean; }

export default function Hero({ recruiting }: HeroProps) {
  const typed = useTyping(PHRASES, 48);
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(80px,10vh,120px) clamp(16px,4vw,56px) 80px', zIndex: 2,
    }}>
      {/* System status HUD */}
      <div style={{
        position: 'absolute', top: 84, left: 'clamp(16px,4vw,56px)',
        display: 'flex', flexDirection: 'column', gap: 4,
        opacity: visible ? 0.5 : 0, transition: 'opacity 1s .9s', pointerEvents: 'none', zIndex: 4,
      }}>
        {[{ s: 'SYS', v: 'ONLINE' }, { s: 'NET', v: 'ACTIVE' }, { s: 'GEN', v: '10TH' }].map(x => (
          <div key={x.s} style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#3DBA6B', boxShadow: '0 0 8px #3DBA6B', animation: 'warn-blink 3s infinite' }} />
            <span style={{ color: 'var(--dim)' }}>{x.s}</span>
            <span style={{ color: 'var(--cyan)', opacity: .7 }}>{x.v}</span>
          </div>
        ))}
      </div>

      {/* Decorative lines */}
      {[.28, .55, .82].map((y, i) => (
        <div key={i} style={{
          position: 'absolute', left: 0, right: 0, top: `${y * 100}%`, height: 1,
          background: 'linear-gradient(to right,transparent,rgba(0,175,236,0.07) 30%,rgba(0,175,236,0.07) 70%,transparent)',
          pointerEvents: 'none',
        }} />
      ))}
      <div style={{
        position: 'absolute', right: 'clamp(16px,8vw,120px)', top: 0, bottom: 0, width: 1,
        background: 'linear-gradient(to bottom,transparent,rgba(0,175,236,0.06) 30%,rgba(0,175,236,0.06) 70%,transparent)',
        pointerEvents: 'none',
      }} />

      {/* Main content */}
      <div style={{
        maxWidth: 900, position: 'relative', zIndex: 3,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: 'all 1s cubic-bezier(.16,1,.3,1)',
      }}>
        {recruiting ? (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,91,172,0.12)', border: '1px solid rgba(0,175,236,0.2)', borderRadius: 24, padding: '6px 14px', marginBottom: 32 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#3DBA6B', boxShadow: '0 0 10px #3DBA6B,0 0 20px #3DBA6B' }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: '#8AB4E8', letterSpacing: '0.08em' }}>10TH GENERATION — RECRUITING NOW</span>
          </div>
        ) : (
          <div className="badge-off" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(60,60,80,0.18)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: '6px 14px', marginBottom: 32 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--dim)' }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--mid)', letterSpacing: '0.08em' }}>10TH GENERATION — 모집 준비 중</span>
          </div>
        )}

        <h1 style={{ lineHeight: .9, marginBottom: 36, letterSpacing: '-0.04em', color: '#fff' }}>
          <span className="glitch rgb-hover" data-text="INHA" style={{ display: 'block', fontSize: 'clamp(64px,12vw,148px)', fontWeight: 900 }}>INHA</span>
          <span style={{ display: 'flex', alignItems: 'flex-end', gap: '0.1em' }}>
            <span className="glitch" data-text="UMC" style={{ display: 'block', fontSize: 'clamp(64px,12vw,148px)', fontWeight: 900, color: 'transparent', WebkitTextStroke: '1.5px var(--cyan)', textShadow: '0 0 60px rgba(0,175,236,0.25),0 0 120px rgba(0,175,236,0.1)' }}>UMC</span>
            <span style={{ display: 'block', fontSize: 'clamp(18px,3vw,40px)', fontWeight: 300, fontFamily: 'var(--mono)', color: 'var(--mid)', letterSpacing: '-0.01em', paddingBottom: '0.14em' }}>// 10th</span>
          </span>
        </h1>

        <div style={{ marginBottom: 44, minHeight: 28 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(13px,1.8vw,17px)', color: 'var(--mid)' }}>→&nbsp;</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(13px,1.8vw,17px)', color: 'var(--text)' }}>{typed}</span>
          <span className="cursor" />
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          {recruiting ? (
            <a href="#apply" onClick={e => { e.preventDefault(); goTo('apply'); }} className="cta-pulse"
              style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, color: 'var(--bg)', background: 'var(--cyan)', padding: '13px 28px', borderRadius: 7, textDecoration: 'none', transition: 'all .2s', boxShadow: '0 0 28px rgba(0,175,236,0.4)', display: 'inline-block' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(0,175,236,0.7)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(0,175,236,0.4)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
            >10기 모집안내 →</a>
          ) : (
            <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--mid)', padding: '13px 28px', borderRadius: 7, border: '1px dashed rgba(255,255,255,0.1)', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--dim)', display: 'inline-block' }} />
              모집 일정 공개 예정
            </div>
          )}
          <a href="#about" onClick={e => { e.preventDefault(); goTo('about'); }}
            style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--mid)', padding: '13px 28px', borderRadius: 7, textDecoration: 'none', border: '1px solid var(--line2)', transition: 'all .2s', display: 'inline-block' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--mid)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >동아리 소개</a>
        </div>
      </div>

      {/* Coordinates */}
      <div style={{
        position: 'absolute', bottom: 36, right: 'clamp(16px,4vw,56px)',
        fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--dim)',
        opacity: visible ? 1 : 0, transition: 'opacity 1s .6s',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4,
      }}>
        <div>37.4502° N</div>
        <div>126.6503° E</div>
        <div style={{ color: 'var(--cyan)', opacity: .5 }}>INHA UNIV, KR</div>
      </div>

      {/* Ticker */}
      <div style={{ position: 'absolute', bottom: 60, left: 0, right: 0, borderTop: '1px solid rgba(0,175,236,0.07)', overflow: 'hidden', pointerEvents: 'none', zIndex: 4 }}>
        <div className="ticker-inner" style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(0,175,236,0.3)', letterSpacing: '0.14em', padding: '5px 0' }}>
          {'INHA UMC · 10TH GENERATION · PM · DESIGN · WEB · ANDROID · IOS · SPRING · NODE · UNIVERSITY MAKEUS CHALLENGE · INHA UNIV · 인하대학교 앱 개발 동아리 · '.repeat(2)}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 36, left: 'clamp(16px,4vw,56px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        opacity: visible ? 0.5 : 0, transition: 'opacity 1s .7s',
      }}>
        <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom,transparent,var(--cyan))' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', color: 'var(--mid)', writingMode: 'vertical-rl' }}>SCROLL</span>
      </div>
    </section>
  );
}
