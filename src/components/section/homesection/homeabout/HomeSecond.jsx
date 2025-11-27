"use client";
import DigitalClock from "@/components/ui/DigitalClock";
import GlowyDivider from "@/components/ui/GlowyDivider";
import React from "react";

const HomeSecond = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#141414",
        position: "relative",
      }}
    >
      <GlowyDivider direction="top" />

      <DigitalClock />
    </div>
  );
};

export default HomeSecond;
