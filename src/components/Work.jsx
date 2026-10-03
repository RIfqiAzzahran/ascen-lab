import Thumbnail from "./Thumbnail";
import { work } from "../data/siteData";
import {
  colors,
  mono,
  section,
  sectionLabel,
  sectionTitle,
  sectionIntro,
} from "../theme";

export default function Work() {
  return (
    <section id="work" style={section} data-reveal-stagger>
      <p style={sectionLabel}>03 / Karya</p>
      <h2 style={sectionTitle}>Proyek terpilih</h2>
      <p style={sectionIntro}>
        Sebagian kecil dari apa yang sudah kami rilis. Setiap proyek dikerjakan
        end-to-end, dari desain sampai produksi.
      </p>

      <div
        data-reveal-stagger
        style={{
          border: `1px solid ${colors.border}`,
          borderRadius: "14px",
          overflow: "hidden",
          background: colors.surface,
        }}
      >
        {work.map((project, i) => (
          <article
            key={project.name}
            className="work-item"
            data-reveal
            style={{
              padding: "1.75rem",
              borderTop: i > 0 ? `1px solid ${colors.border}` : "none",
            }}
          >
            <div className="work-row">
              <Thumbnail src={project.image} name={project.name} />

              <div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      className="work-title"
                      style={{
                        fontSize: "17px",
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {project.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: mono,
                        fontSize: "11px",
                        color: colors.accent,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: "11px",
                      color: colors.textDim,
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "13px",
                    color: colors.textMuted,
                    lineHeight: 1.75,
                    maxWidth: "560px",
                    marginBottom: "16px",
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {project.tags.map((tag) => (
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

                  <div style={{ display: "flex", gap: "16px" }}>
                    {[
                      { href: project.github, label: "GitHub" },
                      { href: project.live, label: "Live" },
                    ]
                      .filter((link) => link.href && link.href !== "#")
                      .map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="work-link"
                          style={{ fontSize: "12px", textDecoration: "none" }}
                        >
                          {link.label} ↗
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
