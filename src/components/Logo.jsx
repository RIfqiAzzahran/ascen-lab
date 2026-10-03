import { colors, mono } from "../theme";

export default function Logo({ size = 26, withText = true }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="0.75"
          y="0.75"
          width="30.5"
          height="30.5"
          rx="8.25"
          style={{ fill: colors.surface, stroke: colors.borderHover }}
          strokeWidth="1.5"
        />
        <path
          d="M8 21L16 10L24 21"
          style={{ stroke: colors.accent }}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 24L16 18.5L20 24"
          style={{ stroke: colors.textDim }}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {withText && (
        <span
          style={{
            fontFamily: mono,
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.14em",
            color: colors.text,
          }}
        >
          ASCEN LABS
        </span>
      )}
    </span>
  );
}
