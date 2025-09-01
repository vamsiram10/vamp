"use client";
import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const RADIUS = 150; // px, radius of the outer ring
const INNER_RADIUS = 100; // px, radius of the inner ring
const ICON_SIZE = 60; // px

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center justify-center py-16 w-full min-h-[100vh]">
      <div
        className="relative"
        style={{
          width: 2 * (RADIUS + ICON_SIZE),
          height: 2 * (RADIUS + ICON_SIZE),
        }}
      >
        {/* Outer ring */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: 2 * RADIUS,
            height: 2 * RADIUS,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: "4px solid #60a5fa", // blue-400
            boxShadow: "0 0 32px 0 #60a5fa44",
            zIndex: 1,
          }}
        ></div>
        {/* Inner ring */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: 2 * INNER_RADIUS,
            height: 2 * INNER_RADIUS,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: "3px solid #38bdf8", // blue-300
            boxShadow: "0 0 16px 0 #38bdf844",
            zIndex: 1,
          }}
        ></div>
        {/* Center text */}
        <div
          className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center select-none"
          style={{
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <span className="text-2xl font-bold text-blue-400 tracking-wide drop-shadow-lg md:text-3xl">
            Get in touch
          </span>
        </div>
        {/* Orbiting blocks */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: 2 * RADIUS,
            height: 2 * RADIUS,
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          {/* Orbit container for animation */}
          <div
            className="absolute left-0 top-0 w-full h-full"
            style={{
              animation: "orbit 7s linear infinite",
              transformOrigin: "50% 50%",
            }}
          >
            {/* LinkedIn block */}
            <a
              href="https://www.linkedin.com/in/ramavamsi-16v"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute"
              style={{
                left: `calc(50% - ${ICON_SIZE / 2}px)`,
                top: `-${ICON_SIZE / 2}px`,
                pointerEvents: "auto",
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center bg-white rounded-full border-blue-400 shadow-lg dark:bg-black border"
                  style={{ width: ICON_SIZE, height: ICON_SIZE }}
                >
                  <FaLinkedin className="text-blue-600 text-2xl" />
                </div>
                <span className="mt-1 text-xs text-blue-400 font-semibold">
                  LinkedIn
                </span>
              </div>
            </a>
            {/* Email block (180deg opposite) */}
            <a
              href="mailto:vamsirama1622@gmail.com"
              className="absolute"
              style={{
                left: `calc(50% - ${ICON_SIZE / 2}px)`,
                top: `calc(100% - ${ICON_SIZE / 2}px)`,
                pointerEvents: "auto",
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center bg-white rounded-full border-blue-400 shadow-lg dark:bg-black border"
                  style={{ width: ICON_SIZE, height: ICON_SIZE }}
                >
                  <FaEnvelope className="text-blue-400 text-2xl" />
                </div>
                <span className="mt-1 text-xs text-blue-400 font-semibold">
                  Email
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes orbit {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
