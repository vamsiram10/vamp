"use client";
import DigitalClock from "@/components/ui/DigitalClock";
import GlowyDivider from "@/components/ui/GlowyDivider";
import React, { useEffect, useState } from "react";

const HomeSecond = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check on first render
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            margin: "auto",
            textAlign: "center",
            padding: "0 24px",
            maxWidth: 380,
            fontSize: "1.12rem",
            fontWeight: "500",
            letterSpacing: 0.2,
            opacity: 0.82,
            zIndex: 10,
          }}
        >
          For a better experience,
          <br />
          please open this section on a{" "}
          <b style={{ color: "#e040fb" }}>desktop</b>.
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#000",
        position: "relative",
      }}
    >
      <DigitalClock />
      <GlowyDivider direction="bottom" />
      {/* <RetroComputer /> */}
    </div>
  );
};

export default HomeSecond;
