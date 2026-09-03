export const colors = {
  bg: "#08090a",
  surface: "#0e1013",
  surfaceHover: "#131619",
  border: "#1c1f24",
  borderHover: "#2e333b",
  text: "#f2f3f5",
  textMuted: "#9aa1a9",
  textDim: "#6b7280",
  accent: "#7c9eff",
  accentSoft: "rgba(124, 158, 255, 0.12)",
  green: "#22c55e",
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
