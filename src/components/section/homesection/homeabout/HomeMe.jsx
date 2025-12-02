"use client";
import React from "react";
import RetroComputer from "@/components/ui/RetroComputer";
import GlowyDivider from "@/components/ui/GlowyDivider";

export default function HomeMe() {
  return (
    <>
      <section
        className="z-10 overflow-hidden relative flex flex-col justify-center items-center p-6 min-h-screen md:flex-row"
        style={{
          background: "#000",
          width: "100%",
        }}
      >
        {/* Left side: Retro computer */}
        <div
          className="z-10 flex items-center justify-center mb-4 w-full md:items-start justify-start mr-8 w-1/2"
          style={{
            minWidth: 0,
            maxWidth: 350,
            // On mobile, adjust size & centering by keeping it flexible
          }}
        >
          <RetroComputer />
        </div>

        {/* Main content, right side */}
        <div className="z-10 flex flex-col justify-center items-center w-full text-center md:items-start w-1/2 text-left">
          <h2
            className="mb-3 text-3xl font-bold md:text-5xl"
            style={{ position: "relative" }}
          >
            ABOUT ME
          </h2>
          <p
            className="text-base text-neutral-700 dark:text-neutral-300 md:text-lg"
            style={{
              position: "relative",
              textAlign: "justify",
              maxWidth: 540,
            }}
          >
            Hello! I'm a passionate developer who loves building interactive
            user interfaces and seamless web experiences. I enjoy working with a
            variety of programming languages including JavaScript, TypeScript,
            Python and more. I love learning new technologies, collaborating on
            open-source projects and tackling challenging problems. Welcome to
            my portfolio!
          </p>
        </div>

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
      {/* <GlowyDivider direction="bottom" /> */}
    </>
  );
}
