"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { EncryptedText } from "@/components/ui/encrypted-text";
import Character from "@/components/ui/Character";
import "@/app/globals.css";

/*
  Responsive notes:
  - Use Tailwind's responsive classes (sm:, md:, lg:, xl:)
  - Font sizes and headings scale down on smaller screens
  - Padding and spacing adjust for different widths
  - Character illustration is hidden on small screens, properly positioned and sized on wider
  - Subtitle/max-w scales for mobile reading
*/

const HomeAbout = () => {
  return (
    <div className="relative w-full min-h-[100vh] text-white bg-[#141414] sm:min-h-screen">
      {/* Add background beams absolutely behind everything */}
      <div
        className="z-0 absolute inset-0 h-[100vh] sm:h-full"
        style={{ minHeight: "100dvh", height: "100dvh" }}
      >
        <BackgroundBeamsWithCollision />
      </div>

      <div className="z-10 relative flex flex-col justify-center items-start px-4 w-full min-h-screen sm:px-8 md:px-12">
        {/* Name */}
        <h1 className="mb-2 font-extrabold leading-[1] text-[36px] text-[88px] sm:text-[56px] md:mb-0 lg:text-[110px] xl:text-[120px]">
          R.V
        </h1>
        <div className="inline-block">
          <h1 className="font-extrabold leading-[1] text-[36px] sm:text-[56px] md:text-[88px] lg:text-[110px] xl:text-[120px]">
            RAMA VAMSI
          </h1>
        </div>

        {/* Subtitle - now using EncryptedText */}
        <div className="mt-6 max-w-[95vw] max-w-[900px] text-[15px] font-medium leading-7 text-[17px] leading-8 text-[20px] sm:max-w-[680px] md:mt-10">
          <EncryptedText
            text="I AM A WEB DEVELOPER AND DESIGNER | PYTHON PROGRAMMING | REACT DEVELOPER | NEXT.JS DEVELOPER |"
            className=""
            revealedClassName=""
            encryptedClassName="text-violet-400"
            revealDelayMs={25}
            flipDelayMs={50}
          />
        </div>
      </div>

      {/* Character Illustration adapts responsively */}
      <div
        className={`
          z-20 absolute pointer-events-none
          hidden md:block
          top-2/3 md:top-1/2
          right-1 sm:right-12 md:right-[100px] lg:right-[180px] xl:right-[250px]
          transform -translate-y-1/2
          max-w-[130px] sm:max-w-[170px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[330px]
        `}
        style={{}}
      >
        <Character />
        {/* <RetroComputer /> */}
      </div>
    </div>
  );
};

export default HomeAbout;
