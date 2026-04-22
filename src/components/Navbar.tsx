'use client';

import { useState, useEffect } from 'react';
import { goTo } from '@/lib/utils';

const NAV = [
  { l: 'Members',  id: 'members'  },
  { l: 'Events',   id: 'events'   },
  { l: 'Projects', id: 'projects' },
  { l: 'Awards',   id: 'awards'   },
  { l: 'Q&A',      id: 'qa'       },
  { l: '모집안내', id: 'apply'    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 64, display: 'flex', alignItems: 'center',
      padding: '0 clamp(16px,4vw,56px)', justifyContent: 'space-between',
      background: scrolled ? 'rgba(7,9,15,0.55)' : 'transparent',
      backdropFilter: scrolled ? 'blur(32px) saturate(1.8)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(32px) saturate(1.8)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'rgba(0,175,236,0.15)' : 'transparent'}`,
      transition: 'all .3s',
    }}>
      {/* Logo */}
      <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div className="logo-cube" style={{
          width: 36, height: 36,
          background: 'linear-gradient(145deg,#0D2A6B 0%,#001A50 100%)',
          border: '1px solid rgba(0,175,236,0.5)', borderRadius: 7,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 24px rgba(0,175,236,0.35),inset 0 1px 0 rgba(0,175,236,0.2)',
          animation: 'neon-pulse 3s ease-in-out infinite', flexShrink: 0,
        }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 500, color: 'var(--cyan)', letterSpacing: '0.06em', animation: 'flicker 9s infinite' }}>UMC</span>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, color: '#fff', letterSpacing: '0.04em' }}>
            INHA <span style={{ color: 'var(--cyan)' }}>UMC</span>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 8.5, color: 'var(--dim)', letterSpacing: '0.1em' }}>v10.0.0 · INHA UNIV</div>
        </div>
      </a>

      {/* Desktop nav */}
      <div className="desk" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {NAV.slice(0, -1).map(n => (
          <a key={n.id} href={`#${n.id}`} onClick={e => { e.preventDefault(); goTo(n.id); }}
            style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mid)', padding: '6px 12px', borderRadius: 5, textDecoration: 'none', transition: 'all .18s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--mid)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >{n.l}</a>
        ))}
        <a href="#apply" onClick={e => { e.preventDefault(); goTo('apply'); }}
          style={{ marginLeft: 12, fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 500, color: 'var(--bg)', background: 'var(--cyan)', padding: '8px 18px', borderRadius: 6, textDecoration: 'none', transition: 'all .2s', boxShadow: '0 0 20px rgba(0,175,236,0.25)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 36px rgba(0,175,236,0.6)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,175,236,0.25)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
        >모집안내</a>
      </div>

      {/* Mobile hamburger */}
      <button className="mob" onClick={() => setOpen(!open)}
        style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
        {[22, 14, 22].map((w, i) => (
          <span key={i} style={{ display: 'block', width: w, height: 1.5, background: 'var(--mid)', borderRadius: 2 }} />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: 'rgba(7,9,15,0.97)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid var(--line2)', padding: '16px clamp(16px,4vw,56px) 24px',
        }}>
          {NAV.map(n => (
            <a key={n.id} href={`#${n.id}`} onClick={e => { e.preventDefault(); goTo(n.id); setOpen(false); }}
              style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 15, color: 'var(--mid)', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid var(--line)' }}
            >{n.l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
