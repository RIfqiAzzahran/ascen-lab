import { useState } from "react";
import { colors, mono } from "../theme";

const initialsOf = (name) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

/**
 * Gambar proyek. Kalau `src` kosong atau gagal dimuat, tampil placeholder
 * bergaris dengan inisial nama proyek — jadi layout tidak pernah bolong.
 */
export default function Thumbnail({ src, name }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  const frame = {
    position: "relative",
    aspectRatio: "16 / 10",
    borderRadius: "10px",
    overflow: "hidden",
    border: `1px solid ${colors.border}`,
    background: colors.bg,
  };

  if (showPlaceholder) {
    return (
      <div
        style={{
          ...frame,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          backgroundImage: `repeating-linear-gradient(45deg, ${colors.border} 0 1px, transparent 1px 10px)`,
        }}
        role="img"
        aria-label={`Pratinjau ${name} belum tersedia`}
      >
        <span
          style={{
            fontFamily: mono,
            fontSize: "20px",
            letterSpacing: "0.1em",
            color: colors.textMuted,
          }}
        >
          {initialsOf(name)}
        </span>
        <span
          style={{
            fontFamily: mono,
            fontSize: "9px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: colors.textDim,
          }}
        >
          Pratinjau segera
        </span>
      </div>
    );
  }

  return (
    <div style={frame}>
      <img
        src={src}
        alt={`Pratinjau proyek ${name}`}
        loading="lazy"
        onError={() => setFailed(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
