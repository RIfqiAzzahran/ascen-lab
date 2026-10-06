import Logo from "./Logo";
import { brand, contact } from "../data/siteData";
import { colors, mono } from "../theme";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${colors.border}` }}>
      <div
        data-reveal-stagger
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
            contact.github && {
              href: `https://${contact.github}`,
              label: "GitHub",
              external: true,
            },
            contact.linkedin && {
              href: `https://${contact.linkedin}`,
              label: "LinkedIn",
              external: true,
            },
            { href: `mailto:${contact.email}`, label: "Email" },
            {
              href: `https://wa.me/${contact.whatsapp}`,
              label: "WhatsApp",
              external: true,
            },
          ]
            .filter(Boolean)
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="footer-link"
                style={{ fontSize: "12px", textDecoration: "none" }}
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
          ©{new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}
