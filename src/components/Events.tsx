'use client';

import { useReveal, useRevealList } from '@/hooks/useReveal';

const EVENTS = [
  { tag: 'SESSION',  date: '2025.03.15', title: '10기 OT — 킥오프',       desc: '파트별 소개와 6개월 로드맵을 공유하는 첫 오리엔테이션.', color: '#4D8EFF' },
  { tag: 'WORKSHOP', date: '2025.04.05', title: '스프린트 디자인 워크숍', desc: '2시간 안에 서비스를 구체화하는 PM × Design 합동 세션.',   color: '#4DC9C9' },
  { tag: 'DEMO DAY', date: '2025.06.28', title: '9기 최종 데모데이',       desc: '6개월 결과물을 발표하는 최종 발표회. 외부 심사 포함.',    color: '#FFD84D' },
];

export default function Events() {
  const [sectionRef] = useReveal<HTMLElement>();
  const [cardsRef, cardsVisible] = useRevealList<HTMLDivElement>(3, 0.05);

  return (
    <section id="events" ref={sectionRef}
      style={{ position: 'relative', zIndex: 2, padding: 'clamp(72px,10vw,120px) clamp(16px,4vw,56px)' }}>

      <div style={{ fontFamily: 'var(--sans)', fontSize: 10, color: 'var(--cyan)', letterSpacing: '0.1em', marginBottom: 16, opacity: .7 }}>03 — EVENTS</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, letterSpacing: '-0.025em', color: '#fff', lineHeight: 1.2 }}>최근 활동</h2>
        <a href="#" style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--cyan)', textDecoration: 'none', letterSpacing: '0.06em', opacity: .7, transition: 'opacity .2s,transform .2s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '.7'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
        >전체 보기 →</a>
      </div>

      <div ref={cardsRef} style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
        gap: 1, background: 'rgba(0,175,236,0.04)', borderRadius: 10, overflow: 'hidden',
        border: '1px solid rgba(0,175,236,0.1)', backdropFilter: 'blur(2px)',
      }}>
        {EVENTS.map((ev, i) => {
          const rgb = ev.color.slice(1).match(/.{2}/g)!.map(x => parseInt(x, 16)).join(',');
          return (
            <div key={i} style={{
              background: 'rgba(8,11,28,0.45)', backdropFilter: 'blur(28px) saturate(1.8)',
              WebkitBackdropFilter: 'blur(28px) saturate(1.8)',
              padding: 'clamp(20px,3vw,32px)', display: 'flex', flexDirection: 'column', gap: 16,
              cursor: 'pointer', transition: 'background .2s,transform .25s,box-shadow .25s,opacity .6s',
              position: 'relative', overflow: 'hidden',
              opacity: cardsVisible.includes(i) ? 1 : 0,
              transform: cardsVisible.includes(i) ? 'none' : `translateY(${30 + i * 8}px)`,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--bg2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(8,11,28,0.45)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}>
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 2, background: ev.color, opacity: .8 }} />
              <div style={{ position: 'absolute', top: 0, right: 0, left: 0, height: '100%', background: `radial-gradient(ellipse at top left,rgba(${rgb},.04) 0%,transparent 60%)`, pointerEvents: 'none' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 500, color: ev.color, letterSpacing: '0.1em', background: `rgba(${rgb},.1)`, borderRadius: 3, padding: '3px 8px' }}>{ev.tag}</span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: 10, color: 'var(--dim)', letterSpacing: '0.04em' }}>{ev.date}</span>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 8, lineHeight: 1.3, letterSpacing: '-0.015em' }}>{ev.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.7 }}>{ev.desc}</p>
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--cyan)', opacity: .6, letterSpacing: '0.04em' }}>자세히 보기 →</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
