import { about } from "../data/siteData";
import {
  colors,
  mono,
  section,
  sectionLabel,
  sectionTitle,
} from "../theme";

export default function About() {
  return (
    <section id="about" style={section} data-reveal-stagger>
      <p style={sectionLabel}>01 / Studio</p>
      <h2 style={sectionTitle}>Tim kecil, keputusan yang jelas</h2>

      <div
        data-reveal-stagger
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          alignItems: "start",
          marginTop: "2.5rem",
        }}
      >
        <div>
          {about.paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: "15px",
                color: colors.textMuted,
                lineHeight: 1.85,
                marginBottom: "1.15rem",
              }}
            >
              {para}
            </p>
          ))}
        </div>

        <div
          style={{
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          {about.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-row"
              style={{
                padding: "1.15rem 1.35rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                borderTop: i > 0 ? `1px solid ${colors.border}` : "none",
              }}
            >
              <span className="stat-label" style={{ fontSize: "13px" }}>
                {stat.label}
              </span>
              <span
                className="stat-value"
                style={{
                  fontFamily: mono,
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
