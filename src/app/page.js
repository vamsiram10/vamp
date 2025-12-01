"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import HomeAbout from "@/components/section/homesection/homeabout/HomeAbout";
import Projects from "@/components/section/projectssection/Projects";
import Character from "@/components/ui/Character";
import DigitalClock from "@/components/ui/DigitalClock";
import LoaderGallery from "@/components/ui/LoaderGallery";
import HomeSecond from "@/components/section/homesection/homeabout/HomeSecond";
import CustomCursor from "@/components/ui/CustomCursor";
import HomeMe from "@/components/section/homesection/homeabout/HomeMe";
// import HomeThird from "@/components/section/homesection/homeabout/HomeThird";
// import HomeFourth from "@/components/section/homesection/homeabout/HomeFourth";

export default function Home() {
  // Create a ref to store the Lenis instance
  const lenisRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // only run on client

    // Hide the scroll bar on the right side
    // Set overflow: hidden on both html and body to remove scrollbar
    const html = document.documentElement;
    const body = document.body;
    const originalHtmlOverflow = html.style.overflow;
    const originalBodyOverflow = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    // Instantiate Lenis and attach it to the ref
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      // Reset overflow styles to original
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
    };
  }, []);

  return (
    <main>
      {/* Provide the Lenis instance for debugging or further prop drilling if needed */}
      <CustomCursor />
      <HomeAbout />
      <HomeMe />
      {/* <Projects /> */}
      {/* <Character /> */}
      {/* <HomeThird /> */}
      <HomeSecond />
      {/* <HomeFourth /> */}
    </main>
  );
}
