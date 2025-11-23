"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { EncryptedText } from "@/components/ui/encrypted-text";
import Character from "@/components/ui/Character";
import "@/app/globals.css";

const HomeAbout = () => {
  return (
    <div className="relative w-full min-h-screen text-white bg-[#141414]">
      {/* Add background beams absolutely behind everything */}
      <div className="z-0 absolute inset-0">
        <BackgroundBeamsWithCollision />
      </div>
      <div className="z-10 relative flex flex-col justify-center px-12 w-full min-h-screen">
        {/* Name */}
        <h1 className="text-[120px] font-extrabold leading-[120px]">
          <EncryptedText
            text="R.V"
            revealedClassName=""
            encryptedClassName="text-violet-400"
            revealDelayMs={30}
            flipDelayMs={48}
          />
        </h1>
        {/* Using Cover for the heading */}
        <div className="inline-block">
          {/* FIX: Remove invalid usage of <Cover> which is not imported nor defined */}
          <h1 className="text-[120px] font-extrabold leading-[120px]">
            <EncryptedText
              text="RAMA VAMSI"
              revealedClassName=""
              encryptedClassName="text-violet-400"
              revealDelayMs={30}
              flipDelayMs={48}
            />
          </h1>
        </div>

        {/* Subtitle - now using EncryptedText */}
        <div className="mt-10 max-w-[900px] text-[20px] font-medium leading-8">
          <EncryptedText
            text="I AM A WEB DEVELOPER AND DESIGNER | PYTHON PROGRAMMING | REACT DEVELOPER | NEXT.JS DEVELOPER | NODE.JS DEVELOPER |"
            className=""
            revealedClassName=""
            encryptedClassName="text-violet-400"
            revealDelayMs={25}
            flipDelayMs={50}
          />
        </div>
      </div>
      {/* Character Illustration at the bottom right for visual interest */}
      <div
        style={{ right: 250 }}
        className="z-20 absolute top-1/2 hidden pointer-events-none md:block"
      >
        <Character />
      </div>
    </div>
  );
};

export default HomeAbout;
