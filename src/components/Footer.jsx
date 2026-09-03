import Logo from "./Logo";
import { brand, contact } from "../data/siteData";
import { colors, mono } from "../theme";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${colors.border}` }}>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "2.5rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo size={22} />

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { href: `https://${contact.github}`, label: "GitHub" },
            { href: `https://${contact.linkedin}`, label: "LinkedIn" },
            { href: `mailto:${contact.email}`, label: "Email" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "12px",
                color: colors.textMuted,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = colors.text)}
              onMouseOut={(e) => (e.currentTarget.style.color = colors.textMuted)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p
          style={{
            fontFamily: mono,
            fontSize: "11px",
            color: colors.textDim,
            letterSpacing: "0.05em",
          }}
        >
          © {brand.founded}–{new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}
