import { useState } from "react";
import { faq, contact, brand } from "../data/siteData";
import {
  colors,
  mono,
  section,
  sectionLabel,
  sectionTitle,
  sectionIntro,
} from "../theme";

const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  `Halo ${brand.name}, saya punya pertanyaan seputar pembuatan website.`
)}`;

export default function Faq() {
  // Satu pertanyaan terbuka dalam satu waktu; yang pertama terbuka di awal.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" style={section} data-reveal-stagger>
      <p style={sectionLabel}>07 / FAQ</p>
      <h2 style={sectionTitle}>Pertanyaan yang sering diajukan</h2>
      <p style={sectionIntro}>
        Hal-hal yang biasanya ditanyakan sebelum mulai proyek. Tidak menemukan
        jawabannya?{" "}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="work-link"
          style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          Tanya langsung via WhatsApp
        </a>
        .
      </p>

      <div
        style={{
          border: `1px solid ${colors.border}`,
          borderRadius: "14px",
          overflow: "hidden",
          background: colors.surface,
        }}
      >
        {faq.map((item, i) => {
          const isOpen = openIndex === i;
          const id = `faq-${i}`;

          return (
            <div
              key={item.question}
              className={isOpen ? "faq-item is-open" : "faq-item"}
              style={{
                borderTop: i === 0 ? "none" : `1px solid ${colors.border}`,
              }}
            >
              <h3 style={{ margin: 0 }}>
                <button
                  id={`${id}-button`}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel`}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="faq-question"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    width: "100%",
                    padding: "1.25rem 1.5rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                  }}
                >
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: "11px",
                      color: colors.textDim,
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="faq-title"
                    style={{
                      flex: 1,
                      fontSize: "14px",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.question}
                  </span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
              </h3>

              <div
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-button`}
                className="faq-panel"
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      fontSize: "13px",
                      color: colors.textMuted,
                      lineHeight: 1.8,
                      maxWidth: "640px",
                      padding: "0 1.5rem 1.4rem calc(1.5rem + 30px)",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
