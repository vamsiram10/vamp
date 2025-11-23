import React from "react";

// Utility `cn` merges Tailwind and conditional class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * GlowyDivider Component
 * @param {Object} props
 * @param {boolean} [props.showBuckle=false]
 * @param {'top'|'bottom'} [props.direction='bottom']
 */
export default function GlowyDivider({
  showBuckle = false,
  direction = "bottom",
}) {
  // Figure radial background based on direction, dark/light mode
  // Tailwind won't apply theme()/custom CSS vars here, but we do our best for this context
  const gradientLight =
    direction === "bottom"
      ? "top-1/2 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(23,23,23,0.05),transparent)] dark:bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.08),transparent)]"
      : "-top-1/2 bg-[radial-gradient(35%_128px_at_50%_100%,rgba(23,23,23,0.05),transparent)] dark:bg-[radial-gradient(35%_128px_at_50%_100%,rgba(255,255,255,0.08),transparent)]";

  return (
    <div className="relative py-32 w-full">
      <div
        className={cn(
          "absolute left-0 h-full w-full pointer-events-none transition-all duration-300",
          gradientLight
        )}
        aria-hidden="true"
      ></div>
      {/* the line */}
      <div className="absolute inset-x-12 top-1/2 h-px bg-gradient-to-r from-transparent via-neutral-950/30 to-transparent -translate-y-1/2 dark:via-white/30" />
      {showBuckle && (
        <div className="absolute left-1/2 top-0 p-1.5 bg-neutral-950 rounded-full -translate-x-1/2 -translate-y-1/2 dark:bg-white/10">
          <div className="h-1.5 w-8 bg-neutral-950/90 rounded-lg dark:bg-white"></div>
        </div>
      )}
    </div>
  );
}
