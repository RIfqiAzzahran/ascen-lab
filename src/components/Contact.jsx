import { useState } from "react";
import { contact, brand } from "../data/siteData";
import { colors, mono, section, sectionLabel, sectionTitle } from "../theme";

const LINKS = [
  { key: "email", href: `mailto:${contact.email}`, label: contact.email, icon: "✉" },
  { key: "github", href: `https://${contact.github}`, label: contact.github, icon: "↗" },
  { key: "github2", href: `https://${contact.github2}`, label: contact.github2, icon: "↗" },
  { key: "linkedin", href: `https://${contact.linkedin}`, label: contact.linkedin, icon: "in" },
  { key: "linkedin2", href: `https://${contact.linkedin2}`, label: contact.linkedin2, icon: "in" },
  { key: "phone", href: `tel:${contact.phone.replace(/\s/g, "")}`, label: contact.phone, icon: "☎" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hubungkan ke layanan email pilihan Anda di sini (EmailJS, Formspree, dll).
    console.log("Form submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
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
    <section id="contact" style={section}>
      <p style={sectionLabel}>05 / Kontak</p>
      <h2 style={sectionTitle}>Punya sesuatu untuk dibangun?</h2>

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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontFamily: mono,
                  fontSize: "13px",
                  color: colors.textMuted,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = colors.text)}
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = colors.textMuted)
                }
              >
                <span
                  style={{
                    fontSize: "11px",
                    width: "24px",
                    height: "24px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${colors.border}`,
                    borderRadius: "6px",
                    color: colors.accent,
                    flexShrink: 0,
                  }}
                >
                  {link.icon}
                </span>
                {link.label}
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
          <button
            type="submit"
            style={{
              alignSelf: "flex-start",
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
            {sent ? "Terkirim ✓" : "Kirim pesan"}
          </button>
        </form>
      </div>
    </section>
  );
}
