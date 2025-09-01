"use client";

import { ReactLenis } from "lenis/react";

function AboutLayout({ children }) {
  return (
    <ReactLenis root options={{ smoothWheel: true, lerp: 0.1 }}>
      <main className="min-h-[100vh] w-screen overflow-x-hidden bg-black">
        {children}
      </main>
    </ReactLenis>
  );
}

export default AboutLayout;
