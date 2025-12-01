import React from "react";

// Utility `cn` merges Tailwind and conditional class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * GlowyDivider - a single glowing line, no vertical height/padding.
 * @param {Object} props
 * @param {boolean} [props.showBuckle=false]
 * @param {'top'|'bottom'} [props.direction='bottom']
 */
export default function GlowyDivider({
  showBuckle = false,
  direction = "bottom",
}) {
  // Glowing gradient for the line "light"
  // Optionally flip gradient direction for top/bottom
  // Decreased light color and alpha in gradient
  const gradientLight =
    direction === "bottom"
      ? "bg-gradient-to-r from-transparent via-purple-300/40 to-transparent"
      : "bg-gradient-to-l from-transparent via-purple-300/40 to-transparent";

  return (
    <div className="relative w-full" style={{ minHeight: 0, height: 0 }}>
      {/* The single glowy line */}
      <div
        className={cn(
          "absolute left-0 w-full h-[2px] pointer-events-none", // decreased thickness for less light
          gradientLight,
          "blur-[2px]" // decreased blur to reduce glow
        )}
        style={{
          top: 0,
          boxShadow:
            "0 0 12px 2px rgba(168,85,247,0.22), 0 0 4px 0 rgba(255,255,255,0.11)", // less intense glow
          zIndex: 1, // So the glow appears above content
        }}
        aria-hidden="true"
      ></div>
      <div
        className={cn(
          "absolute left-0 w-full h-[1px] pointer-events-none", // thinner crisp line
          gradientLight
        )}
        style={{
          top: 0,
          zIndex: 2, // Crisp actual line
        }}
        aria-hidden="true"
      ></div>
      {showBuckle && (
        <div className="absolute left-1/2 top-0 flex items-center justify-center pointer-events-none -translate-x-1/2 -translate-y-1/2">
          <div className="h-1 w-8 bg-purple-300/40 rounded-xl blur-[1.5px] shadow-[0_0_8px_3px_rgba(168,85,247,0.25)]" />{" "}
          {/* dimmer and smaller */}
          <div className="absolute h-[2.5px] w-8 bg-purple-400/80 rounded-xl" />
        </div>
      )}
    </div>
  );
}
