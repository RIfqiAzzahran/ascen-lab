import { useEffect, useRef } from "react";
import Thumbnail from "./Thumbnail";
import { contact, brand } from "../data/siteData";
import { colors, mono } from "../theme";

const headingStyle = {
  fontFamily: mono,
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: colors.accent,
  marginBottom: "12px",
};

const whatsappLink = (projectName) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    `Halo ${brand.name}, saya baru membaca studi kasus ${projectName}. Saya ingin membuat proyek serupa.`
  )}`;

/**
 * Studi kasus proyek dalam <dialog> bawaan browser — fokus, tombol Escape,
 * dan backdrop sudah ditangani browser. `project` null = tertutup.
 */
export default function CaseStudy({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  const handleClose = () => {
    document.body.style.overflow = "";
    onClose();
  };

  // Klik di backdrop (di luar kotak konten) menutup dialog.
  const handleClick = (e) => {
    if (e.target === dialogRef.current) dialogRef.current.close();
  };

  const cs = project?.caseStudy;

  return (
    <dialog
      ref={dialogRef}
      className="case-dialog"
      onClose={handleClose}
      onClick={handleClick}
      aria-labelledby="case-title"
    >
      {cs && (
        <div className="case-body">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "16px",
              marginBottom: "1.25rem",
            }}
          >
            <div>
              <p style={{ ...headingStyle, marginBottom: "8px" }}>
                Studi kasus · {project.year}
              </p>
              <h2
                id="case-title"
                style={{
                  fontSize: "clamp(20px, 3vw, 26px)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  color: colors.text,
                }}
              >
                {project.name}
              </h2>
            </div>
            <button
              className="case-close"
              onClick={() => dialogRef.current.close()}
              aria-label="Tutup studi kasus"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <Thumbnail src={project.image} name={project.name} />

          {/* Ringkasan */}
          <dl className="case-meta">
            {[
              ["Klien", cs.client],
              ["Durasi", cs.duration],
              ["Lingkup", cs.scope],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <h3 style={headingStyle}>Tantangan</h3>
          <p
            style={{
              fontSize: "14px",
              color: colors.textMuted,
              lineHeight: 1.85,
              marginBottom: "2rem",
            }}
          >
            {cs.challenge}
          </p>

          <h3 style={headingStyle}>Solusi</h3>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "2rem",
            }}
          >
            {cs.solution.map((point) => (
              <li
                key={point}
                style={{
                  display: "flex",
                  gap: "10px",
                  fontSize: "14px",
                  color: colors.textMuted,
                  lineHeight: 1.7,
                }}
              >
                <span aria-hidden="true" style={{ color: colors.accent }}>
                  →
                </span>
                {point}
              </li>
            ))}
          </ul>

          <h3 style={headingStyle}>Hasil</h3>
          <div className="case-results">
            {cs.results.map((r) => (
              <div key={r.label}>
                <span
                  style={{
                    display: "block",
                    fontSize: "28px",
                    fontWeight: 500,
                    letterSpacing: "-0.04em",
                    color: colors.text,
                    marginBottom: "4px",
                  }}
                >
                  {r.value}
                </span>
                <span style={{ fontSize: "12px", color: colors.textMuted }}>
                  {r.label}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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
            <a
              href={whatsappLink(project.name)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 16px",
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
                borderRadius: "8px",
                background: colors.text,
                color: colors.bg,
              }}
            >
              Buat proyek serupa →
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}
