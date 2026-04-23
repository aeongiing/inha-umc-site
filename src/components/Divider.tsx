export default function Divider({ label }: { label: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '0 clamp(16px,4vw,56px)', position: 'relative', zIndex: 2,
    }}>
      <span style={{ fontFamily: 'var(--sans)', fontSize: 10, color: 'var(--cyan)', letterSpacing: '0.1em', whiteSpace: 'nowrap', opacity: .7 }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
    </div>
  );
}
