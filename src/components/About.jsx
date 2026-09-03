import { about, team } from "../data/siteData";
import {
  colors,
  mono,
  section,
  sectionLabel,
  sectionTitle,
} from "../theme";

export default function About() {
  return (
    <section id="about" style={section}>
      <p style={sectionLabel}>01 / Studio</p>
      <h2 style={sectionTitle}>Tim kecil, keputusan yang jelas</h2>

      <div
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

          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${colors.border}`,
            }}
          >
            <p
              style={{
                fontFamily: mono,
                fontSize: "11px",
                color: colors.textDim,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Orang di baliknya
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "12px",
              }}
            >
              {team.map((member) => (
                <div
                  key={member.name}
                  style={{
                    background: colors.surface,
                    border: `1px solid ${colors.border}`,
                    borderRadius: "12px",
                    padding: "1.1rem",
                    transition: "border-color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.borderColor = colors.borderHover)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.borderColor = colors.border)
                  }
                >
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      color: colors.accent,
                      width: "32px",
                      height: "32px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: colors.bg,
                      border: `1px solid ${colors.border}`,
                      borderRadius: "9px",
                      marginBottom: "12px",
                    }}
                  >
                    {member.initials}
                  </span>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: colors.text,
                      marginBottom: "4px",
                    }}
                  >
                    {member.name}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: colors.textMuted,
                      marginBottom: "4px",
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: colors.textDim,
                      lineHeight: 1.6,
                    }}
                  >
                    {member.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
              style={{
                padding: "1.15rem 1.35rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                borderTop: i > 0 ? `1px solid ${colors.border}` : "none",
              }}
            >
              <span style={{ fontSize: "13px", color: colors.textMuted }}>
                {stat.label}
              </span>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: "13px",
                  fontWeight: 500,
                  color: colors.text,
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
