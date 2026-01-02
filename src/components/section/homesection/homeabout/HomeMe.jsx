"use client";
import React from "react";
import RetroComputer from "@/components/ui/RetroComputer";
import GlowyDivider from "@/components/ui/GlowyDivider";

// Utility hook to check if screen is desktop size (min-width: 1024px)
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(() => {
    if (typeof window === "undefined") return true; // SSR fallback
    return window.innerWidth >= 1024;
  });

  React.useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}

export default function HomeMe() {
  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    // Show only the requested message for mobile/non-desktop, as plain text (not inside an animation or box)
    return (
      <section
        className="flex flex-col items-center justify-center min-h-screen bg-black"
        style={{ width: "100%" }}
      >
        <p className="max-w-sm text-lg text-neutral-300 text-center">
          For a better experience,
          <br />
          please open this section on a desktop.
        </p>
      </section>
    );
  }

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
          className="z-10 flex items-center justify-center justify-start ml-40 mb-4 mr-8 w-full w-1/2 md:items-start"
          style={{
            minWidth: 0,
            maxWidth: 350,
            // On mobile, adjust size & centering by keeping it flexible
          }}
        >
          <RetroComputer />
        </div>

        {/* Main content, right side */}
        <div className="z-10 flex flex-col justify-center items-center px-4 ml-4 ml-8 w-full w-1/2 text-center text-left md:items-start">
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
              width: "100%",
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
