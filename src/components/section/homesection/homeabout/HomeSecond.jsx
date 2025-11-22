"use client";
import DigitalClock from "@/components/ui/DigitalClock";
import React from "react";

// The height: "100vh" style works, but if the DigitalClock (or its children)
// have internal heights or wrappers with their own heights/min-heights/flex layouts
// (as seen in digital-clock-gallery-wrapper with min-height: 800px),
// those styles can override or ignore the parent height.
// To ensure the height works, you may need to ensure both this wrapper and
// the children are using 100%/100vh and no overriding min/max heights
// or incompatible flex layouts.

const HomeSecond = () => {
  return <DigitalClock />;
};

export default HomeSecond;
