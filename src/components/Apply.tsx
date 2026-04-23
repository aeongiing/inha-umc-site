'use client';

import { useReveal } from '@/hooks/useReveal';
import { goTo } from '@/lib/utils';

interface ApplyProps { recruiting: boolean; }

export default function Apply({ recruiting }: ApplyProps) {
  const [sectionRef, visible] = useReveal<HTMLElement>();

  return (
    <section id="apply" ref={sectionRef}
      style={{ position: 'relative', zIndex: 2, padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,56px) clamp(80px,12vw,140px)' }}>

      <div style={{
        background: 'rgba(5,8,20,0.35)', backdropFilter: 'blur(48px) saturate(2)',
        WebkitBackdropFilter: 'blur(48px) saturate(2)',
        border: '1px solid rgba(0,175,236,0.2)', borderRadius: 12, overflow: 'hidden',
        position: 'relative', boxShadow: '0 24px 80px rgba(0,0,0,0.4),inset 0 1px 0 rgba(0,175,236,0.1)',
      }}>
        <div style={{ height: 2, background: 'linear-gradient(to right,transparent,var(--cyan),transparent)', opacity: .7, boxShadow: '0 0 12px var(--cyan)' }} />

        <div style={{ padding: 'clamp(40px,6vw,72px)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '50%', background: 'radial-gradient(ellipse,rgba(0,175,236,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />

          <div style={{
            position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', textAlign: 'center', gap: 20,
            animation: visible ? 'pop-up .8s .1s both' : 'none',
          }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 10, color: recruiting ? 'var(--cyan)' : 'var(--mid)', letterSpacing: '0.14em', opacity: .8 }}>
              {recruiting ? '10기 모집 중 · 지금 바로 지원하세요' : '모집 준비 중 · 일정을 기다려 주세요'}
            </div>
            <h2 style={{ fontSize: 'clamp(28px,4.5vw,56px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.05 }}>같이<br />만들어볼까요?</h2>
            <p style={{ color: 'var(--mid)', fontSize: 15, maxWidth: 360, lineHeight: 1.75 }}>개발, 디자인, 기획 어느 파트든 환영합니다.</p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
              {recruiting ? (
                <button className="cta-pulse"
                  onClick={() => goTo('apply')}
                  style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: 'var(--bg)', background: 'var(--cyan)', padding: '14px 36px', borderRadius: 8, border: 'none', cursor: 'pointer', transition: 'all .2s', boxShadow: '0 0 28px rgba(0,175,236,0.3)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 56px rgba(0,175,236,0.6)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(0,175,236,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
                >10기 모집안내</button>
              ) : (
                <button style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--mid)', padding: '14px 36px', borderRadius: 8, border: '1px dashed rgba(255,255,255,0.12)', background: 'transparent', cursor: 'not-allowed', opacity: .7 }}>
                  모집 일정 공개 예정
                </button>
              )}
              <button
                style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--mid)', padding: '14px 36px', borderRadius: 8, border: '1px solid var(--line2)', background: 'transparent', cursor: 'pointer', transition: 'all .2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--mid)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >FAQ 보기</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
