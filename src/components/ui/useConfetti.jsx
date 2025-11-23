import React from "react";
import { useConfetti } from "./useConfetti"; // adjust path if needed

/**
 * Example Confetti Demo
 * This replicates the <template>... code provided in Vue, adapted for React.
 */
export default function ConfettiDemo() {
  const { confetti } = useConfetti();

  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
    });
  };

  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <button
        type="button"
        onClick={handleClick}
        className="px-6 py-2 text-white bg-blue-600 rounded shadow hover:bg-blue-700 transition"
      >
        Run basic cannon
      </button>
    </main>
  );
}

// The hook implementation remains the same as previous:
import CanvasConfetti from "canvas-confetti";

/**
 * @typedef {Object} ConfettiOptions
 * @property {number} [particleCount]
 * @property {number} [angle]
 * @property {number} [spread]
 * @property {number} [startVelocity]
 * @property {number} [decay]
 * @property {number} [gravity]
 * @property {number} [drift]
 * @property {boolean} [flat]
 * @property {number} [ticks]
 * @property {{x: number, y: number}} [origin]
 * @property {string[]} [colors]
 * @property {Array<'square'|'circle'|string>} [shapes]
 * @property {number} [zIndex]
 * @property {boolean} [disableForReducedMotion]
 * @property {boolean} [useWorker]
 * @property {boolean} [resize]
 * @property {HTMLCanvasElement|null} [canvas]
 * @property {number} [scalar]
 */

/**
 * Fire confetti with custom options.
 * @param {ConfettiOptions} options
 */
const confetti = (options) => {
  if (
    options.disableForReducedMotion &&
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion)").matches
  ) {
    return;
  }

  const confettiInstance = options.canvas
    ? CanvasConfetti.create(options.canvas, {
        resize: options.resize !== undefined ? options.resize : true,
        useWorker: options.useWorker !== undefined ? options.useWorker : true,
      })
    : CanvasConfetti;

  confettiInstance({
    ...options,
  });
};

confetti.shapeFromPath = (options) => {
  return CanvasConfetti.shapeFromPath({ ...options });
};

confetti.shapeFromText = (options) => {
  return CanvasConfetti.shapeFromText({ ...options });
};

const useConfetti = () => {
  return {
    confetti,
  };
};

export { useConfetti };
