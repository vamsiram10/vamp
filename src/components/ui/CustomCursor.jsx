"use client";
import { useEffect, useState } from "react";

// Pure React logo SVG in violet color
function ReactSymbol({ size = 32 }) {
  // Violet shade
  const violet = "#8b5cf6";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      style={{
        display: "block",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <circle cx="20" cy="20" r="3.2" fill={violet} />
      <g stroke={violet} strokeWidth="2" fill="none">
        <ellipse rx="16" ry="6.6" cx="20" cy="20" transform="rotate(0 20 20)" />
        <ellipse
          rx="16"
          ry="6.6"
          cx="20"
          cy="20"
          transform="rotate(60 20 20)"
        />
        <ellipse
          rx="16"
          ry="6.6"
          cx="20"
          cy="20"
          transform="rotate(120 20 20)"
        />
      </g>
    </svg>
  );
}

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Hide the default cursor for the document body
    const originalCursor = document.body.style.cursor;
    document.body.style.cursor = "none";
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = originalCursor;
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        width: 38,
        height: 38,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactSymbol size={34} />
    </div>
  );
}
