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

/**
 * Simple React hook that exposes the confetti function.
 * @returns {{ confetti: typeof confetti }}
 */
function useConfetti() {
  return {
    confetti,
  };
}

export { useConfetti };
