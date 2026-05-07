export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: 'clamp(24px,4vw,40px) clamp(16px,4vw,56px)', position: 'relative', zIndex: 2 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--dim)' }}>
          <span style={{ color: 'var(--cyan)', marginRight: 8 }}>INHA UMC</span>© 2025 · University MakeUs Challenge
        </div>
        <div style={{ fontFamily: 'var(--sans)', fontSize: 10, color: 'var(--dim)', letterSpacing: '0.06em' }}>INHA UNIV, KR · v10.0.0</div>
      </div>
    </footer>
  );
}
