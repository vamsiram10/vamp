"use client";
import React, { useMemo } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const NAME = "VENKATA RAMA VAMSI";

// Deterministic pseudo-random function based on index
function pseudoRandom(i) {
  // Simple LCG: X_{n+1} = (a * X_n + c) % m
  // Constants from Numerical Recipes
  const a = 1664525;
  const c = 1013904223;
  const m = 2 ** 32;
  let seed = i + 12345;
  return ((a * seed + c) % m) / m;
}

// Example: cycle through a gradient of colors for each letter
const NAME_COLORS = [
  "#a78bfa", // violet-400
  "#6366f1", // violet-500
  "#818cf8", // indigo-400 (bluish-violet)
  "#60a5fa", // blue-400
  "#3b82f6", // blue-500
  "#2563eb", // blue-600
  "#6366f1", // violet-500
  "#818cf8", // indigo-400
  "#60a5fa", // blue-400
  "#3b82f6", // blue-500
  "#a78bfa", // violet-400
  "#6366f1", // violet-500
  "#818cf8", // indigo-400
  "#60a5fa", // blue-400
  "#3b82f6", // blue-500
  "#2563eb", // blue-600
  "#a78bfa", // violet-400
  "#6366f1", // violet-500
  "#818cf8", // indigo-400
  "#60a5fa", // blue-400
  "#3b82f6", // blue-500
];

const AnimatedName = () => {
  // Precompute animation directions, delays, and colors deterministically
  const letters = useMemo(() => {
    const directions = [
      { x: 0, y: -60 }, // from top
      { x: 0, y: 60 }, // from bottom
      { x: -60, y: 0 }, // from left
      { x: 60, y: 0 }, // from right
    ];
    return NAME.split("").map((char, i) => {
      const dir = directions[i % directions.length];
      // Use deterministic pseudo-random for delay
      const delay = 0.08 * i + pseudoRandom(i) * 0.05;
      // Pick color from NAME_COLORS array, cycling if needed
      const color = NAME_COLORS[i % NAME_COLORS.length];
      return {
        char,
        dir,
        delay,
        key: i,
        color,
      };
    });
  }, []);

  return (
    <span className="relative inline-block">
      {letters.map(({ char, dir, delay, key, color }) => (
        <span
          key={key}
          className="inline-block"
          style={{
            opacity: 0,
            transform: `translate(${dir.x}px, ${dir.y}px) scale(0.8)`,
            animation: `nameIn 0.7s cubic-bezier(.6,1.5,.5,1) forwards`,
            animationDelay: `${delay}s`,
            color: color,
            textShadow: `0 2px 16px ${color}55`,
            fontWeight: 800,
            fontSize: "inherit",
            letterSpacing: "0.05em",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <style jsx>{`
        @keyframes nameIn {
          0% {
            opacity: 0;
            transform: var(--from-transform, translateY(40px) scale(0.8));
            filter: blur(4px);
          }
          60% {
            opacity: 1;
            filter: blur(0.5px);
          }
          100% {
            opacity: 1;
            transform: none;
            filter: none;
          }
        }
      `}</style>
    </span>
  );
};

const HomeAbout = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="flex flex-col items-center justify-center px-4 py-16 min-h-[100vh] w-full bg-black bg-opacity-80">
        <h1 className="mb-4 text-2xl font-extrabold text-white text-center sm:text-5xl">
          <AnimatedName />
        </h1>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default HomeAbout;
