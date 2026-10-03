import { pricing, contact, brand } from "../data/siteData";
import {
  colors,
  mono,
  section,
  sectionLabel,
  sectionTitle,
  sectionIntro,
} from "../theme";

const whatsappLink = (planName) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    `Halo ${brand.name}, saya tertarik dengan paket ${planName}. Boleh diskusi lebih lanjut?`
  )}`;

export default function Pricing() {
  const { trust, plans } = pricing;

  return (
    <section id="pricing" style={section} data-reveal-stagger>
      <p style={sectionLabel}>05 / Harga</p>
      <h2 style={sectionTitle}>Investasi yang jelas sejak awal</h2>
      <p style={sectionIntro}>
        Tanpa biaya tersembunyi. Pilih paket landing page dengan harga pasti,
        atau ceritakan kebutuhan Anda untuk web app yang dibangun khusus.
      </p>

      {/* Bukti kepercayaan */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "1.5rem 2rem",
          padding: "1.5rem 1.6rem",
          marginBottom: "14px",
          background: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: "14px",
        }}
      >
        <div style={{ flexShrink: 0 }}>
          <span
            style={{
              display: "block",
              fontSize: "40px",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: colors.accent,
            }}
          >
            {trust.value}
          </span>
          <span
            style={{
              fontFamily: mono,
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: colors.textDim,
            }}
          >
            {trust.label}
          </span>
        </div>

        <div style={{ flex: "1 1 320px" }}>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: colors.text,
              letterSpacing: "-0.01em",
              marginBottom: "6px",
            }}
          >
            {trust.headline}
          </p>
          <p
            style={{
              fontSize: "13px",
              color: colors.textMuted,
              lineHeight: 1.75,
              marginBottom: "12px",
            }}
          >
            {trust.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {trust.clients.map((client) => (
              <span
                key={client}
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
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Paket */}
      <div
        data-reveal-stagger
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "14px",
        }}
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={plan.featured ? "plan-card featured" : "plan-card"}
            style={{
              display: "flex",
              flexDirection: "column",
              background: colors.surface,
              borderRadius: "14px",
              padding: "1.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <h3
                className="plan-name"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                {plan.name}
              </h3>
              {plan.badge && (
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "4px 8px",
                    color: colors.accent,
                    background: colors.accentSoft,
                    borderRadius: "100px",
                  }}
                >
                  {plan.badge}
                </span>
              )}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "8px",
                marginBottom: "14px",
              }}
            >
              <span
                className="plan-price"
                style={{
                  fontSize: "36px",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {plan.price}
              </span>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: "11px",
                  color: colors.textDim,
                }}
              >
                / {plan.priceNote}
              </span>
            </div>

            <p
              style={{
                fontSize: "13px",
                color: colors.textMuted,
                lineHeight: 1.75,
                marginBottom: "20px",
              }}
            >
              {plan.description}
            </p>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "18px",
                borderTop: `1px solid ${colors.border}`,
                marginBottom: "24px",
                flex: 1,
              }}
            >
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  style={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "13px",
                    color: colors.textMuted,
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ color: colors.accent, flexShrink: 0 }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(plan.name)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                padding: "11px 20px",
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
                borderRadius: "8px",
                background: plan.featured ? colors.text : "transparent",
                color: plan.featured ? colors.bg : colors.text,
                border: plan.featured ? "none" : `1px solid ${colors.border}`,
                transition: "opacity 0.15s, border-color 0.2s",
              }}
              onMouseOver={(e) => {
                if (plan.featured) e.currentTarget.style.opacity = "0.85";
                else e.currentTarget.style.borderColor = colors.accent;
              }}
              onMouseOut={(e) => {
                if (plan.featured) e.currentTarget.style.opacity = "1";
                else e.currentTarget.style.borderColor = colors.border;
              }}
            >
              {plan.cta} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
