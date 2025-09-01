"use client";

import HomeAbout from "@/components/section/homesection/homeabout/HomeAbout";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <ReactLenis root options={{ smoothWheel: true, lerp: 0.1 }}>
      <main>
        {/* Home page content goes here */}
        <HomeAbout />
      </main>
    </ReactLenis>
  );
}
