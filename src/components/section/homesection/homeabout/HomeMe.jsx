"use client";
import React, { useEffect, useRef } from "react";
import { useConfetti } from "@/components/ui/useConfetti";
// SVGs for some popular logos (simple + lightweight, or use emoji fallback)
const icons = [
  {
    name: "React",
    svg: (
      <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="5" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="2" fill="none">
          <ellipse rx="16" ry="6.6" cx="20" cy="20" />
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
    ),
  },
  {
    name: "Java",
    svg: (
      <svg viewBox="0 0 40 44" width="36" height="44">
        <ellipse cx="20" cy="38" rx="15" ry="4" fill="#E76F00" opacity="0.14" />
        <path
          d="M24 37c3-1 8-3 7-7-1-3-12-2-13-7-1-5 13-7 11-12S12 6 13 21"
          stroke="#E76F00"
          strokeWidth="2"
          fill="none"
        />
        <ellipse cx="20" cy="22" rx="6" ry="9" fill="#5382A1" />
        <path
          d="M19 9c0-2 4-2 4 0"
          stroke="#E76F00"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 44 44" width="44" height="44">
        <rect x="5" y="9" width="32" height="14" rx="7" fill="#306998" />
        <rect x="7" y="21" width="32" height="14" rx="7" fill="#FFD43B" />
        <circle cx="14" cy="15" r="2.5" fill="#fff" />
        <circle cx="30" cy="29" r="2.5" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "GSAP",
    svg: (
      <svg viewBox="0 0 44 44" width="44" height="44">
        <rect x="7" y="7" width="30" height="30" rx="8" fill="#88CE02" />
        <text
          x="50%"
          y="56%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="17"
          fontWeight="bold"
          fill="#222"
        >
          GSAP
        </text>
      </svg>
    ),
  },
  {
    name: "HTML",
    svg: (
      <svg viewBox="0 0 44 44" width="44" height="44">
        <polygon points="9,4 35,4 32,41 22,44 12,41" fill="#E44D26" />
        <polygon points="22,8 31,8 30,31 22,34" fill="#F16529" />
        <text
          x="22"
          y="22"
          fill="white"
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          dy=".3em"
        >
          HTML
        </text>
      </svg>
    ),
  },
  {
    name: "CSS",
    svg: (
      <svg viewBox="0 0 44 44" width="44" height="44">
        <polygon points="9,4 35,4 32,41 22,44 12,41" fill="#1572B6" />
        <polygon points="22,8 31,8 30,31 22,34" fill="#33AADD" />
        <text
          x="22"
          y="22"
          fill="white"
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          dy=".3em"
        >
          CSS
        </text>
      </svg>
    ),
  },
  {
    name: "JS",
    svg: (
      <svg viewBox="0 0 44 44" width="44" height="44">
        <rect x="7" y="7" width="30" height="30" rx="6" fill="#F7DF1E" />
        <text
          x="50%"
          y="56%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#222"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "SQL",
    svg: (
      <svg viewBox="0 0 44 44" width="44" height="44">
        <ellipse cx="22" cy="15" rx="13" ry="7" fill="#4479A1" />
        <rect x="9" y="15" width="26" height="17" rx="6" fill="#44A5F2" />
        <text
          x="22"
          y="28"
          fill="white"
          textAnchor="middle"
          fontSize="15"
          fontWeight="bold"
          dy=".3em"
        >
          SQL
        </text>
      </svg>
    ),
  },
];

// Assign side fall directions: left, center, right.
// 0 = left-to-right diagonal, 1 = fall straight down, 2 = right-to-left diagonal.
function getRandomFallingIcons(count = 10) {
  // Reduced to 10
  const res = [];
  for (let i = 0; i < count; ++i) {
    const idx = Math.floor(Math.random() * icons.length);

    // Divide into 3: left, center, right. Use i % 3 for distribution.
    let left, direction;
    // For left-to-right, start at far left; for right-to-left, start at far right; else center.
    if (i % 3 === 0) {
      // LEFT
      left = `${Math.random() * 20 + 0}%`; // 0-20%
      direction = "left";
    } else if (i % 3 === 2) {
      // RIGHT
      left = `${Math.random() * 20 + 75}%`; // 75-95%
      direction = "right";
    } else {
      // CENTER
      left = `${Math.random() * 45 + 25}%`; // 25-70%
      direction = "center";
    }

    const delay = Math.random() * 3;
    const duration = 7 + Math.random() * 6;

    // Diagonal drift: more for side, minimal for center
    let drift;
    if (direction === "left") {
      drift = 60 + Math.random() * 40; // 60-100px to right
    } else if (direction === "right") {
      drift = -60 - Math.random() * 40; // -60 to -100px to left
    } else {
      drift = Math.random() * 40 - 20; // -20px to +20px (mostly vertical)
    }
    const scale = 0.68 + Math.random() * 0.8;

    res.push({
      ...icons[idx],
      key: i + "-" + idx + "-" + delay.toFixed(2),
      left,
      delay,
      duration,
      drift,
      scale,
      direction,
    });
  }
  return res;
}

const FALL_KEYFRAMES = `
@keyframes fallDownIcon {
  0% {
    transform: translateY(-60px) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  95% {
    opacity: 1;
    transform: translateY(91vh) translateX(var(--drift));
  }
  100% {
    opacity: 0.05;
    transform: translateY(110vh) translateX(var(--drift));
  }
}
`;

export default function HomeMe() {
  const iconsRef = useRef([]);

  // Regenerate icons on mount only
  useEffect(() => {
    // Insert our animation style only once
    if (!document.getElementById("fallDownStyle")) {
      const style = document.createElement("style");
      style.id = "fallDownStyle";
      style.innerHTML = FALL_KEYFRAMES;
      document.head.appendChild(style);
    }
    // No need to clean up - safe for SSR & no global pollution due to id guard
  }, []);

  // Keep falling icons persistent for session
  if (!iconsRef.current.length) {
    iconsRef.current = getRandomFallingIcons(10); // Reduced from 24 to 10
  }

  return (
    <section className="z-10 overflow-hidden relative flex flex-col justify-center mx-auto p-6 max-w-2xl min-h-screen">
      {/* Falling icons in the background */}
      <div
        aria-hidden="true"
        className="z-0 absolute left-0 top-5 w-full h-full pointer-events-none"
        style={{ overflow: "hidden" }}
      >
        {iconsRef.current.map((icon) => (
          <div
            key={icon.key}
            style={{
              position: "absolute",
              left: icon.left,
              top: 0,
              zIndex: 1,
              opacity: 0.75,
              animation: `fallDownIcon ${icon.duration}s linear ${icon.delay}s infinite`,
              filter: "drop-shadow(0 8px 24px #0007)",
              "--drift": `${icon.drift}px`,
              transform: `scale(${icon.scale})`,
              width: 44 * icon.scale,
              height: 44 * icon.scale,
              willChange: "transform, opacity",
              pointerEvents: "none",
            }}
            tabIndex={-1}
          >
            {icon.svg}
          </div>
        ))}
      </div>

      {/* Main content above icons */}
      <h2
        className="z-10 mb-4 text-3xl font-bold"
        style={{ position: "relative" }}
      >
        ABOUT ME
      </h2>
      <p
        className="z-10 text-lg text-neutral-700 dark:text-neutral-300"
        style={{ position: "relative" }}
      >
        Hello! I'm a passionate developer who loves building interactive user
        interfaces and seamless web experiences. I enjoy working with a variety
        of programming languages, including JavaScript, TypeScript, Python, and
        more. I love learning new technologies, collaborating on open-source
        projects, and tackling challenging problems. Welcome to my portfolio!
      </p>
      {/* Add glowy divider at the end of the page */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
        }}
      ></div>
    </section>
  );
}
