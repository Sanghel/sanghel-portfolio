'use client';

interface Props {
  lang: 'en' | 'es';
}

export default function LangToggle({ lang }: Props) {
  const targetPath = lang === 'en' ? '/es' : '/';

  return (
    <a
      href={targetPath}
      aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(8px)',
        color: '#94a3b8',
        fontSize: '0.75rem',
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: '500',
        letterSpacing: '0.04em',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(168,85,247,0.4)';
        el.style.color = '#f1f5f9';
        el.style.background = 'rgba(124,58,237,0.12)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(255,255,255,0.1)';
        el.style.color = '#94a3b8';
        el.style.background = 'rgba(255,255,255,0.05)';
      }}
    >
      <span style={{ color: lang === 'en' ? '#f1f5f9' : '#475569' }}>EN</span>
      <span style={{ color: '#475569' }}>/</span>
      <span style={{ color: lang === 'es' ? '#f1f5f9' : '#475569' }}>ES</span>
    </a>
  );
}
