import { process } from "../data/siteData";
import {
  colors,
  mono,
  section,
  sectionLabel,
  sectionTitle,
  sectionIntro,
} from "../theme";

export default function Process() {
  return (
    <section id="process" style={section}>
      <p style={sectionLabel}>04 / Proses</p>
      <h2 style={sectionTitle}>Cara kami bekerja</h2>
      <p style={sectionIntro}>
        Empat tahap yang sama untuk setiap proyek — supaya Anda selalu tahu
        posisi pekerjaan ada di mana.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1px",
          border: `1px solid ${colors.border}`,
          borderRadius: "14px",
          overflow: "hidden",
          background: colors.border,
        }}
      >
        {process.map((item) => (
          <div
            key={item.step}
            style={{
              padding: "1.6rem",
              background: colors.surface,
            }}
          >
            <span
              style={{
                fontFamily: mono,
                fontSize: "22px",
                fontWeight: 400,
                color: colors.border,
                display: "block",
                marginBottom: "14px",
              }}
            >
              {item.step}
            </span>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: colors.text,
                marginBottom: "8px",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: colors.textMuted,
                lineHeight: 1.7,
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
