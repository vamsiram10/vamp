"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import HomeAbout from "@/components/section/homesection/homeabout/HomeAbout";
import Projects from "@/components/section/projectssection/Projects";
import Character from "@/components/ui/Character";
import DigitalClock from "@/components/ui/DigitalClock";
import LoaderGallery from "@/components/ui/LoaderGallery";
import HomeSecond from "@/components/section/homesection/homeabout/HomeSecond";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return; // only run on client

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main>
      <HomeAbout />
      {/* <Projects /> */}
      {/* <Character /> */}
      <HomeSecond />
    </main>
  );
}
