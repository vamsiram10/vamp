"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Projects from "@/components/section/projectssection/Projects";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const mainContainer = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current;
      const totalScrollHeight = window.innerHeight * 3;
      const position = [14, 38, 62, 86];
      const rotations = [-15, -7.5, 7.5, 15];

      ScrollTrigger.create({
        trigger: mainContainer.current.querySelector(".HomeEventSec"),
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
      });

      // spread Cards
      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `${position[index]}%`,
          rotation: `${rotations[index]}`,
          ease: "none",
          scrollTrigger: {
            trigger: mainContainer.current.querySelector(".HomeEventSec"),
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            scrub: 0.5,
            id: `spread-${index}`,
          },
        });
      });

      // spread cards flip/rotate
      cards.forEach((card, index) => {
        const frontEl = card.querySelector(".flipCardFront");
        const backEl = card.querySelector(".flipCardBack");

        const staggerOffset = index * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: mainContainer.current.querySelector(".HomeEventSec"),
          start: "top top",
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotations[index] * (1 - animationProgress);

              gsap.to(frontEl, {
                rotateY: frontRotation,
                ease: "power1.out",
              });
              gsap.to(backEl, {
                rotateY: backRotation,
                ease: "power1.out",
              });

              gsap.to(card, {
                xPercent: -50,
                yPercent: -50,
                rotate: cardRotation,
                ease: "power1.out",
              });
            }
          },
        });
      });
    },
    { scope: mainContainer }
  );

  useEffect(() => {
    // Hide scrollbars on body for this page
    const originalOverflow = document.body.style.overflow;
    const originalOverflowX = document.body.style.overflowX;
    const originalOverflowY = document.body.style.overflowY;
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      // Restore original overflow styles
      document.body.style.overflow = originalOverflow;
      document.body.style.overflowX = originalOverflowX;
      document.body.style.overflowY = originalOverflowY;
    };
  }, []);

  return (
    <main
      ref={mainContainer}
      className="relative min-h-screen w-screen overflow-x-hidden overflow-y-hidden"
      style={{ overflow: "hidden" }}
    >
      <Projects ref={cardRefs} />
    </main>
  );
}
