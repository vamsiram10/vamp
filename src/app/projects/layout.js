"use client";
import Lenis from "@studio-freight/lenis";

function ProjectsLayout({ children }) {
  return (
    <ReactLenis root>
      <main className="min-h-[100vh] w-screen overflow-x-hidden bg-black">
        {children}
      </main>
    </ReactLenis>
  );
}

export default ProjectsLayout;
