import { useState, useEffect } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { colors, mono } from "../theme";

const LINKS = [
  { id: "about", label: "Studio" },
  { id: "services", label: "Layanan" },
  { id: "work", label: "Karya" },
  { id: "process", label: "Proses" },
  { id: "pricing", label: "Harga" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? colors.navBg : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? colors.border : "transparent"}`,
        transition: "background 0.3s, border-color 0.3s",
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        aria-label="ASCEN LABS — kembali ke atas"
      >
        <Logo />
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
        <ul
          className="nav-links"
          style={{
            display: "flex",
            gap: "1.75rem",
            listStyle: "none",
            margin: "0 0.75rem 0 0",
            padding: 0,
          }}
        >
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="nav-link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  padding: 0,
                  fontFamily: "inherit",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <button
          onClick={() => scrollTo("contact")}
          style={{
            fontFamily: mono,
            fontSize: "11px",
            letterSpacing: "0.08em",
            padding: "8px 14px",
            background: colors.text,
            color: colors.bg,
            border: "none",
            borderRadius: "7px",
            cursor: "pointer",
            fontWeight: 500,
            transition: "opacity 0.15s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.82")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          MULAI PROYEK
        </button>
      </div>
    </nav>
  );
}
