import { services } from "../data/siteData";
import {
  colors,
  mono,
  section,
  sectionLabel,
  sectionTitle,
  sectionIntro,
} from "../theme";

export default function Services() {
  return (
    <section id="services" style={section}>
      <p style={sectionLabel}>02 / Layanan</p>
      <h2 style={sectionTitle}>Yang kami kerjakan</h2>
      <p style={sectionIntro}>
        Empat bidang yang kami tangani sendiri dari awal sampai rilis — bisa
        diambil satu-satu, atau sekaligus sebagai satu produk utuh.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "14px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              background: colors.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: "14px",
              padding: "1.6rem",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = colors.borderHover;
              e.currentTarget.style.background = colors.surfaceHover;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = colors.border;
              e.currentTarget.style.background = colors.surface;
            }}
          >
            <span
              style={{
                fontFamily: mono,
                fontSize: "11px",
                color: colors.accent,
                letterSpacing: "0.1em",
              }}
            >
              {service.id}
            </span>

            <h3
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: colors.text,
                margin: "12px 0 8px",
                letterSpacing: "-0.01em",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                fontSize: "13px",
                color: colors.textMuted,
                lineHeight: 1.75,
                marginBottom: "16px",
              }}
            >
              {service.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: mono,
                    fontSize: "11px",
                    padding: "4px 8px",
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: "5px",
                    color: colors.textMuted,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
