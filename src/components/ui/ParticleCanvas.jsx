import React, { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const colors = ["#d9ffff", "#b2eae2", "#fef65b", "#ff41ff", "#8f533f"];

    // ----------------------
    // Event Listeners
    // ----------------------
    function onMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function onResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
      // Update loading text overlay position if present
      if (textRef.current) {
        textRef.current.style.left = `${window.innerWidth / 2}px`;
        textRef.current.style.top = `${window.innerHeight / 2}px`;
      }
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    // ----------------------
    // Utility Functions
    // ----------------------
    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    // ----------------------
    // Particle Object
    // ----------------------
    function Particle(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.radians = Math.random() * Math.PI * 2;
      this.velocity = 0.09; // Increased from 0.05 to 0.15 for more speed
      this.distanceFromCenter = randomIntFromRange(50, 120);
      this.lastMouse = { x: x, y: y };

      this.update = () => {
        const lastPoint = { x: this.x, y: this.y };

        // movement
        this.radians += this.velocity;

        // drag effect
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

        // circular movement
        this.x =
          this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y =
          this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

        this.draw(lastPoint);
      };

      this.draw = (lastPoint) => {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
      };
    }

    // ----------------------
    // Initialize
    // ----------------------
    let particles;
    function init() {
      particles = [];

      for (let i = 0; i < 100; i++) {
        const radius = Math.random() * 2 + 1;
        particles.push(
          new Particle(
            canvas.width / 2,
            canvas.height / 2,
            radius,
            randomColor(colors)
          )
        );
      }
    }

    // ----------------------
    // Animation Loop
    // ----------------------
    function animate() {
      requestAnimationFrame(animate);
      c.fillStyle = "rgba(0,0,0,0.05)";
      c.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => particle.update());
    }

    init();
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Text styles for loading overlay
  // Inline styles keep the overlay centered regardless of stacking context.
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          margin: 0,
          padding: 0,
          width: "100vw",
          height: "100vh",
        }}
      />
      <div
        ref={textRef}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          color: "#FFF",
          fontSize: "2.3rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          userSelect: "none",
          pointerEvents: "none",
          textAlign: "center",
          textShadow: "0 2px 8px #000, 0 0px 32px #3cd6e2",
        }}
      >
        Loading
      </div>
    </div>
  );
}
