import React from "react";
import { Vortex } from "@/components/ui/vortex";

export function VortexDemo() {
  return (
    <div className="overflow-hidden mx-auto w-[calc(100%-4rem)] h-[30rem] rounded-md">
      <Vortex backgroundColor="black" className="w-full h-full" />
    </div>
  );
}
export default VortexDemo;
