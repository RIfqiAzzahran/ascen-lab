import { useState, useEffect } from "react";
import { brand } from "../data/siteData";
import { colors, mono } from "../theme";

const LINES = brand.headline;

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showDot, setShowDot] = useState(false);
  const [showRest, setShowRest] = useState(false);
  const [restStep, setRestStep] = useState(0);

  useEffect(() => {
    if (lineIndex === 0) {
      if (charIndex <= LINES[0].length) {
        const delay = charIndex === 0 ? 500 : 70;
        const t = setTimeout(() => {
          setLine1(LINES[0].slice(0, charIndex));
          setCharIndex((c) => c + 1);
        }, delay);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setLineIndex(1);
        setCharIndex(0);
      }, 180);
      return () => clearTimeout(t);
    }

    if (lineIndex === 1) {
      if (charIndex <= LINES[1].length) {
        const t = setTimeout(() => {
          setLine2(LINES[1].slice(0, charIndex));
          setCharIndex((c) => c + 1);
        }, 70);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setShowCursor(false);
        setShowDot(true);
        setTimeout(() => setShowRest(true), 250);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex]);

  useEffect(() => {
    if (!showRest) return;
    const t = setInterval(() => setRestStep((s) => s + 1), 180);
    return () => clearInterval(t);
  }, [showRest]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const fadeStyle = (step) => ({
    opacity: restStep >= step ? 1 : 0,
    transform: restStep >= step ? "translateY(0)" : "translateY(8px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  });

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="grid-backdrop" />

      <div
        style={{
          position: "relative",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "160px 2rem 120px",
        }}
      >
        {/* Status pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 12px",
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: "100px",
            marginBottom: "36px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: colors.green,
              boxShadow: `0 0 0 3px rgba(34, 197, 94, 0.15)`,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "11px",
              color: colors.textMuted,
              letterSpacing: "0.03em",
            }}
          >
            {brand.status}
          </span>
        </div>

        {/* Typewriter heading */}
        <h1
          style={{
            fontSize: "clamp(38px, 7vw, 68px)",
            fontWeight: 400,
            letterSpacing: "-0.045em",
            lineHeight: 1.04,
            color: colors.text,
            marginBottom: "20px",
            minHeight: "2.2em",
          }}
        >
          {line1}
          {lineIndex >= 1 && (
            <>
              <br />
              {line2}
            </>
          )}
          {showCursor && (
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "0.85em",
                background: colors.accent,
                marginLeft: "4px",
                verticalAlign: "middle",
                animation: "blink 0.9s step-end infinite",
              }}
            />
          )}
          <em
            style={{
              fontStyle: "normal",
              color: colors.accent,
              opacity: showDot ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            .
          </em>
        </h1>

        {/* Studio line */}
        <p
          style={{
            fontFamily: mono,
            fontSize: "12px",
            color: colors.textDim,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "24px",
            ...fadeStyle(1),
          }}
        >
          {brand.tagline} · {brand.location}
        </p>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "15px",
            color: colors.textMuted,
            maxWidth: "460px",
            lineHeight: 1.85,
            marginBottom: "40px",
            ...fadeStyle(2),
          }}
        >
          {brand.subheadline}
        </p>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            ...fadeStyle(3),
          }}
        >
          <button
            onClick={() => scrollTo("work")}
            style={{
              fontSize: "13px",
              padding: "11px 20px",
              background: colors.text,
              color: colors.bg,
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: 500,
              transition: "opacity 0.15s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.82")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Lihat karya kami
          </button>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              fontSize: "13px",
              padding: "11px 20px",
              background: "transparent",
              color: colors.textMuted,
              border: `1px solid ${colors.border}`,
              borderRadius: "8px",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = colors.borderHover;
              e.currentTarget.style.color = colors.text;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = colors.border;
              e.currentTarget.style.color = colors.textMuted;
            }}
          >
            Diskusikan proyek
          </button>
        </div>
      </div>
    </section>
  );
}
