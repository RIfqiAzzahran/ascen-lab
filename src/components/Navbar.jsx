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
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section aktif = section yang sedang melewati garis tengah layar.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    document.querySelectorAll("main section[id]").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Menu HP: tutup dengan Escape, atau otomatis saat layar dilebarkan.
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth > 720 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const solid = scrolled || menuOpen;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: solid ? colors.navBg : "transparent",
        backdropFilter: solid ? "blur(12px)" : "none",
        WebkitBackdropFilter: solid ? "blur(12px)" : "none",
        borderBottom: `1px solid ${solid ? colors.border : "transparent"}`,
        transition: "background 0.3s, border-color 0.3s",
        padding: "0 clamp(1rem, 4vw, 2rem)",
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
                className={active === link.id ? "nav-link is-active" : "nav-link"}
                aria-current={active === link.id ? "true" : undefined}
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
          className="nav-cta"
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

        <button
          className="nav-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        >
          <span className={menuOpen ? "burger is-open" : "burger"} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Menu HP — panel di bawah navbar */}
      <div
        id="mobile-menu"
        className={menuOpen ? "mobile-menu is-open" : "mobile-menu"}
        inert={menuOpen ? undefined : ""}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {LINKS.map((link, i) => (
            <li key={link.id} style={{ "--i": i }}>
              <button
                onClick={() => scrollTo(link.id)}
                className={
                  active === link.id ? "mobile-link is-active" : "mobile-link"
                }
                aria-current={active === link.id ? "true" : undefined}
              >
                <span style={{ fontFamily: mono, fontSize: "11px", color: colors.textDim }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => scrollTo("contact")}
          style={{
            width: "100%",
            marginTop: "1rem",
            fontFamily: mono,
            fontSize: "12px",
            letterSpacing: "0.08em",
            padding: "13px 14px",
            background: colors.text,
            color: colors.bg,
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          MULAI PROYEK →
        </button>
      </div>
    </nav>
  );
}
