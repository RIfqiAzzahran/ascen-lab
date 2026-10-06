import { useState } from "react";
import { contact, brand } from "../data/siteData";
import { colors, mono, section, sectionLabel, sectionTitle } from "../theme";

const LINKS = [
  {
    key: "email",
    href: `mailto:${contact.email}`,
    label: contact.email,
    icon: "✉",
  },
  {
    key: "whatsapp",
    href: `https://wa.me/${contact.whatsapp}`,
    label: `${contact.whatsappLabel} (WhatsApp)`,
    icon: "✆",
    external: true,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Proyek baru dari ${form.name}`;
    const body = [
      `Nama    : ${form.name}`,
      `Email   : ${form.email}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const handleWhatsApp = () => {
    if (!form.name || !form.message) return;
    const text = [
      `Halo ${brand.name}, saya ${form.name}.`,
      "",
      form.message,
      "",
      form.email ? `Email saya: ${form.email}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const inputStyle = {
    width: "100%",
    padding: "11px 14px",
    fontSize: "14px",
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    fontFamily: "inherit",
    color: colors.text,
    background: colors.surface,
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={section} data-reveal-stagger>
      <p style={sectionLabel}>08 / Kontak</p>
      <h2 style={sectionTitle}>Punya sesuatu untuk dibangun?</h2>

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
          <p
            style={{
              fontSize: "15px",
              color: colors.textMuted,
              lineHeight: 1.85,
              marginBottom: "2rem",
              maxWidth: "400px",
            }}
          >
            Ceritakan idenya — sekasar apa pun bentuknya. Kami balas dalam 1×24
            jam dengan pertanyaan lanjutan atau ajakan ngobrol singkat.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="contact-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontFamily: mono,
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                <span
                  className="contact-icon"
                  style={{
                    fontSize: "11px",
                    width: "24px",
                    height: "24px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "6px",
                    color: colors.accent,
                    flexShrink: 0,
                  }}
                >
                  {link.icon}
                </span>
                <span className="contact-label">{link.label}</span>
              </a>
            ))}
          </div>

          <p
            style={{
              fontFamily: mono,
              fontSize: "11px",
              color: colors.textDim,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginTop: "2rem",
            }}
          >
            {brand.location}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <input
            type="text"
            placeholder="Nama Anda"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = colors.accent)}
            onBlur={(e) => (e.target.style.borderColor = colors.border)}
          />
          <input
            type="email"
            placeholder="Email Anda"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = colors.accent)}
            onBlur={(e) => (e.target.style.borderColor = colors.border)}
          />
          <textarea
            placeholder="Ceritakan proyek Anda..."
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
            onFocus={(e) => (e.target.style.borderColor = colors.accent)}
            onBlur={(e) => (e.target.style.borderColor = colors.border)}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <button
              type="submit"
              style={{
                padding: "11px 22px",
                fontSize: "13px",
                fontWeight: 500,
                background: sent ? colors.green : colors.text,
                color: colors.bg,
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 0.3s, opacity 0.15s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {sent ? "Email dibuka ✓" : "Kirim lewat email"}
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              style={{
                padding: "11px 22px",
                fontSize: "13px",
                fontWeight: 500,
                background: "transparent",
                color: colors.text,
                border: `1px solid ${colors.border}`,
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "border-color 0.2s, opacity 0.15s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.borderColor = colors.accent)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.borderColor = colors.border)
              }
            >
              Kirim lewat WhatsApp
            </button>
          </div>

          <p
            style={{
              fontFamily: mono,
              fontSize: "11px",
              color: colors.textDim,
              lineHeight: 1.7,
            }}
          >
            Tombol di atas membuka aplikasi email / WhatsApp Anda dengan pesan
            yang sudah terisi — tinggal tekan kirim.
          </p>
        </form>
      </div>
    </section>
  );
}
