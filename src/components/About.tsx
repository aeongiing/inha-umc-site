'use client';

import { useReveal, useRevealList } from '@/hooks/useReveal';
import Counter from './Counter';

const STATS = [
  { k: 'GEN',     v: 10, suf: '',  label: '현재 기수'     },
  { k: 'TRACKS',  v: 7,  suf: '',  label: '파트 수'       },
  { k: 'MEMBERS', v: 50, suf: '+', label: '활동 인원'     },
  { k: 'SHIPPED', v: 20, suf: '+', label: '완성 프로젝트' },
];

const FEATURES = [
  { label: '실전 팀 프로젝트', desc: '6개월간 팀을 이뤄 직접 서비스를 만듭니다' },
  { label: '전국 네트워크',   desc: '전국 12개 학교 UMC와 연결됩니다'           },
  { label: '현직자 멘토링',   desc: '업계 선배들의 코드 리뷰와 커리어 조언'     },
  { label: '실제 배포',       desc: '앱스토어 출시를 목표로 개발합니다'         },
];

export default function About() {
  const [sectionRef, visible]       = useReveal<HTMLElement>();
  const [statsRef,   statsVisible]  = useRevealList<HTMLDivElement>(4);

  return (
    <section id="about" ref={sectionRef}
      style={{ padding: 'clamp(72px,10vw,120px) clamp(16px,4vw,56px)' }}>

      <div ref={statsRef} style={{
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
        borderTop: '1px solid rgba(0,175,236,0.15)', borderLeft: '1px solid rgba(0,175,236,0.15)',
        marginBottom: 72, background: 'rgba(0,175,236,0.02)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            padding: 'clamp(20px,3vw,36px) clamp(16px,2.5vw,28px)',
            borderRight: '1px solid rgba(0,175,236,0.12)', borderBottom: '1px solid rgba(0,175,236,0.12)',
            position: 'relative', cursor: 'default',
            transition: 'background .25s,box-shadow .25s,opacity .6s,transform .6s', overflow: 'hidden',
            opacity: statsVisible.includes(i) ? 1 : 0,
            transform: statsVisible.includes(i) ? 'none' : 'translateY(20px)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,175,236,0.04)'; (e.currentTarget as HTMLElement).style.boxShadow = 'inset 0 0 40px rgba(0,175,236,0.04)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--cyan)', letterSpacing: '0.12em', marginBottom: 10, opacity: .7 }}>{s.k}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 500, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 6, textShadow: '0 0 20px rgba(0,175,236,0.2)' }}>
              {visible ? <Counter target={s.v} /> : '0'}{s.suf}
            </div>
            <div style={{ fontSize: 12, color: 'var(--mid)', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(40px,6vw,96px)' }}>
        <div style={{ animation: visible ? 'slide-left .7s .1s both' : 'none' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--cyan)', letterSpacing: '0.1em', marginBottom: 20, opacity: .7 }}>01 — ABOUT</div>
          <h2 className="shimmer" style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: 20 }}>아이디어를 서비스로.</h2>
          <p style={{ color: 'var(--mid)', lineHeight: 1.85, fontSize: 14.5, marginBottom: 14 }}>UMC(University MakeUs Challenge)는 전국 대학생 개발자, 디자이너, 기획자가 모여 실제 앱 서비스를 만드는 연합 동아리입니다.</p>
          <p style={{ color: 'var(--mid)', lineHeight: 1.85, fontSize: 14.5 }}>6개월 동안 팀을 이뤄 기획부터 배포까지. 이론이 아니라 실전입니다.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--line)', animation: visible ? 'slide-right .7s .2s both' : 'none' }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid var(--line)', display: 'flex', gap: 16, alignItems: 'flex-start', cursor: 'default', transition: 'padding .2s,background .2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.paddingLeft = '12px'; el.style.background = 'rgba(0,175,236,0.05)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.paddingLeft = '0'; el.style.background = 'transparent'; }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--cyan)', marginTop: 2, flexShrink: 0, opacity: .6 }}>→</span>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text)', marginBottom: 3 }}>{f.label}</div>
                <div style={{ fontSize: 13, color: 'var(--mid)' }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
