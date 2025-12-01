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
          // On mobile, force height: 100vh; on desktop let min-h-screen (from className) remain primary
          height: "100vh",
        }}
      >
        {/* Left side: Retro computer */}
        <div
          className="z-10 flex items-center mr-0 mb-0 mr-8 w-full w-1/2 md:items-start"
          style={{ minWidth: 200, maxWidth: 350 }}
        >
          <RetroComputer />
        </div>

        {/* Main content, right side */}
        <div className="z-10 flex flex-col justify-center w-full md:w-1/2">
          <h2
            className="mb-3 text-5xl font-bold"
            style={{ position: "relative" }}
          >
            ABOUT ME
          </h2>
          <p
            className="text-lg text-neutral-700 text-justify dark:text-neutral-300"
            style={{ position: "relative", textAlign: "justify" }}
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
