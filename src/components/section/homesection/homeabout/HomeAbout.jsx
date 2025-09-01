"use client";
import React, { useMemo } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

// Modern, "new gen" animated name with glassmorphism, neon glow, and fluid gradient
const NAME = "VENKATA RAMA VAMSI";

// Gradient color palette for the name
const GRADIENTS = [
  "linear-gradient(90deg, #a78bfa 0%, #60a5fa 100%)",
  "linear-gradient(90deg, #6366f1 0%, #3b82f6 100%)",
  "linear-gradient(90deg, #818cf8 0%, #2563eb 100%)",
  "linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)",
  "linear-gradient(90deg, #3b82f6 0%, #818cf8 100%)",
  "linear-gradient(90deg, #2563eb 0%, #6366f1 100%)",
];

// Modern font stack for a "next-gen" look
const MODERN_FONT = `"Space Grotesk", "Inter", "Montserrat", "Poppins", "Segoe UI", "Arial", sans-serif`;

const AnimatedName = () => {
  // Precompute animation delays and gradient backgrounds
  const letters = useMemo(() => {
    return NAME.split("").map((char, i) => {
      // Each letter gets a different gradient and animation delay
      const gradient = GRADIENTS[i % GRADIENTS.length];
      const delay = 0.07 * i;
      return {
        char,
        gradient,
        delay,
        key: i,
      };
    });
  }, []);

  return (
    <span className="relative inline-flex items-center justify-center gap-1 select-none sm:gap-2">
      {/* Glassy, blurred, glowing background blob */}
      <span className="z-0 absolute pointer-events-none -inset-4 sm:-inset-6">
        <span className="block w-full h-full bg-gradient-to-tr from-blue-500/30 via-violet-400/20 to-pink-400/30 rounded-3xl blur-2xl opacity-80 animate-blobfloat"></span>
      </span>
      {letters.map(({ char, gradient, delay, key }) => (
        <span
          key={key}
          className="z-10 relative inline-block animated-letter"
          style={{
            // Modern font, bold, wide, uppercase, neon shadow
            fontFamily: MODERN_FONT,
            fontWeight: 900,
            // Responsive font size: smaller on mobile, larger on bigger screens
            fontSize: "clamp(1.3rem, 7vw, 4.5rem)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter:
              "drop-shadow(0 0 12px #a78bfa88) drop-shadow(0 2px 24px #60a5fa55)",
            // Animation
            opacity: 0,
            transform: "translateY(40px) scale(0.85) rotate(-8deg)",
            animation: `letterIn 0.85s cubic-bezier(.6,1.5,.5,1) forwards, neonPulse 2.5s ${
              delay + 0.7
            }s infinite alternate`,
            animationDelay: `${delay}s, ${delay + 0.7}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <style jsx>{`
        @keyframes letterIn {
          0% {
            opacity: 0;
            filter: blur(8px) brightness(1.5);
            transform: translateY(40px) scale(0.85) rotate(-8deg);
          }
          60% {
            opacity: 1;
            filter: blur(1.5px) brightness(1.1);
            transform: translateY(-8px) scale(1.05) rotate(2deg);
          }
          100% {
            opacity: 1;
            filter: blur(0) brightness(1);
            transform: none;
          }
        }
        @keyframes neonPulse {
          0% {
            filter: drop-shadow(0 0 12px #a78bfa88)
              drop-shadow(0 2px 24px #60a5fa55);
          }
          100% {
            filter: drop-shadow(0 0 24px #60a5fa)
              drop-shadow(0 4px 32px #a78bfa99);
          }
        }
        @keyframes blobfloat {
          0%,
          100% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) scale(1.08) rotate(3deg);
          }
        }
        /* Responsive font size for .animated-letter */
        @media (max-width: 640px) {
          .animated-letter {
            font-size: 2rem !important;
          }
        }
        @media (max-width: 400px) {
          .animated-letter {
            font-size: 1.3rem !important;
          }
        }
      `}</style>
      {/* Google Fonts for Space Grotesk */}
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&display=swap"
        rel="stylesheet"
      />
    </span>
  );
};

const HomeAbout = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="flex flex-col items-center justify-center px-4 py-16 min-h-[100vh] w-full bg-black bg-opacity-80">
        <h1 className="mb-4 font-extrabold text-white text-center text-2xl sm:text-4xl">
          <AnimatedName />
        </h1>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default HomeAbout;
