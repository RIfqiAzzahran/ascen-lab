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
    <section id="services" style={section} data-reveal-stagger>
      <p style={sectionLabel}>02 / Layanan</p>
      <h2 style={sectionTitle}>Yang kami kerjakan</h2>
      <p style={sectionIntro}>
        Empat bidang yang kami tangani sendiri dari awal sampai rilis — bisa
        diambil satu-satu, atau sekaligus sebagai satu produk utuh.
      </p>

      <div
        data-reveal-stagger
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "14px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            style={{ borderRadius: "14px", padding: "1.6rem" }}
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
              className="service-title"
              style={{
                fontSize: "16px",
                fontWeight: 500,
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
                  className="service-tag"
                  style={{
                    fontFamily: mono,
                    fontSize: "11px",
                    padding: "4px 8px",
                    background: colors.bg,
                    borderRadius: "5px",
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
