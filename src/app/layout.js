"use client";

import "./globals.css";
import Navbar from "@/components/common/navbar/Navbar";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { useEffect, useState } from "react";

function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {loading ? (
          <div
            style={{
              position: "fixed",
              inset: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 9999,
              background: "#000",
            }}
          >
            <ParticleCanvas />
          </div>
        ) : (
          <>
            <header>
              <Navbar />
            </header>
            {children}
          </>
        )}
      </body>
    </html>
  );
}

export default RootLayout;
