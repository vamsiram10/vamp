import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="z-20 relative text-2xl font-bold text-center text-black font-sans tracking-tight dark:text-white md:text-4xl lg:text-7xl">
        What&apos;s cooler than Beams?{" "}
        <div className="relative inline-block mx-auto w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] py-4 text-transparent bg-clip-text bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative py-4 text-transparent bg-clip-text bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            <span className="">Exploding beams.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
export default BackgroundBeamsWithCollisionDemo;
