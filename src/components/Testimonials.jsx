import { clients } from "../data/siteData";
import {
  colors,
  mono,
  section,
  sectionLabel,
  sectionTitle,
  sectionIntro,
} from "../theme";

/**
 * Slider tak berujung: isi diulang `repeat` kali dalam satu grup supaya
 * selalu lebih lebar dari layar, lalu grup itu digandakan. Track digeser
 * tepat 50% (satu grup), jadi loop-nya mulus tanpa lompatan.
 */
function Marquee({ items, renderItem, direction, duration, repeat = 1 }) {
  const group = Array.from({ length: repeat }, () => items).flat();

  return (
    <div className="marquee">
      <div
        className={`marquee-track marquee-${direction}`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="marquee-group"
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {group.map((item, i) => renderItem(item, `${copy}-${i}`))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { logos, testimonials } = clients;
  const logoScale = (src) => logos.find((l) => l.src === src)?.scale ?? 1;

  return (
    <section id="clients" style={section} data-reveal-stagger>
      <p style={sectionLabel}>04 / Klien</p>
      <h2 style={sectionTitle}>Apa kata mereka</h2>
      <p style={sectionIntro}>
        Bisnis dan organisasi yang sudah mempercayakan produk digitalnya kepada
        kami.
      </p>

      {/* Dipercaya oleh — bergerak ke kanan */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p
          style={{
            fontFamily: mono,
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: colors.textDim,
            marginBottom: "1rem",
          }}
        >
          Dipercaya oleh
        </p>
        <Marquee
          items={logos}
          direction="right"
          duration={30}
          repeat={3}
          renderItem={(logo, key) => (
            <div key={key} className="logo-tile" title={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                style={{ transform: `scale(${logo.scale ?? 1})` }}
              />
            </div>
          )}
        />
      </div>

      {/* Testimoni — bergerak ke kiri */}
      <Marquee
        items={testimonials}
        direction="left"
        duration={45}
        repeat={2}
        renderItem={(t, key) => (
          <figure key={key} className="testimonial-card">
            <span
              aria-hidden="true"
              style={{
                fontSize: "40px",
                lineHeight: 0.6,
                color: colors.accent,
                fontFamily: "Georgia, serif",
                height: "18px",
              }}
            >
              “
            </span>
            <blockquote
              style={{
                fontSize: "14px",
                color: colors.textMuted,
                lineHeight: 1.75,
                flex: 1,
              }}
            >
              {t.quote}
            </blockquote>
            <figcaption
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                paddingTop: "16px",
                borderTop: `1px solid ${colors.border}`,
              }}
            >
              <span className="testimonial-avatar">
                <img
                  src={t.logo}
                  alt=""
                  loading="lazy"
                  style={{ transform: `scale(${logoScale(t.logo)})` }}
                />
              </span>
              <span style={{ minWidth: 0 }}>
                <span
                  className="testimonial-name"
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {t.name}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: mono,
                    fontSize: "11px",
                    color: colors.textDim,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {t.company}
                </span>
              </span>
            </figcaption>
          </figure>
        )}
      />
    </section>
  );
}
