// Nilai sebenarnya ada di src/index.css (:root & [data-theme="light"]),
// jadi semua inline style otomatis ikut berganti saat tema diganti.
export const colors = {
  bg: "var(--bg)",
  surface: "var(--surface)",
  surfaceHover: "var(--surface-hover)",
  border: "var(--border)",
  borderHover: "var(--border-hover)",
  text: "var(--text)",
  textMuted: "var(--text-muted)",
  textDim: "var(--text-dim)",
  accent: "var(--accent)",
  accentSoft: "var(--accent-soft)",
  green: "var(--green)",
  navBg: "var(--nav-bg)",
};

export const mono =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";

export const section = {
  padding: "96px 2rem",
  maxWidth: "1000px",
  margin: "0 auto",
};

export const sectionLabel = {
  fontFamily: mono,
  fontSize: "11px",
  color: colors.accent,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  marginBottom: "1rem",
};

export const sectionTitle = {
  fontSize: "clamp(24px, 3.4vw, 32px)",
  fontWeight: 500,
  letterSpacing: "-0.03em",
  color: colors.text,
  marginBottom: "0.75rem",
};

export const sectionIntro = {
  fontSize: "14px",
  color: colors.textMuted,
  lineHeight: 1.8,
  maxWidth: "480px",
  marginBottom: "3rem",
};

export const card = {
  background: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: "14px",
};
