import React, { useEffect, useState } from "react";
import LoaderGallery from "./LoaderGallery";

// Update: Mat black background (no image, matte finish)
const clockCSS = `
body {
  background: #fff !important;
  
}
.digital-clock-gallery-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 800px;
  background: #141414;
  gap: 200px;
}
#perspective {
  background: #141414;
// background:white;
  height: 674px;
  
  perspective-origin: 450px -50px;
  perspective: 600px;
  position:relative;
  /* To prevent overflow from gallery & for spacing */
  min-width: 600px;
  max-width: 800px;
  flex-shrink: 0;
}
#clock {
  display: flex;
  align-items: center;
  transform: rotateY(24deg) rotateX(-3deg) translate3d(180px, 310px, -20px);
}
.digit {
  display: inline-block;
  margin: 0 11px 0 16px;
}
.separator {
  margin: 0 10px;
}
.cell {
  display: inline-block;
  width: 29px;
  height: 29px;
  opacity: 0.05;
}
.active {
  background: linear-gradient(135deg, #8f00ff 0%, #e040fb 100%);
  box-shadow: 0 0 15px #e040fb;
  opacity: 10;
  transition: opacity 0.5s;
}
/* Add a class for the text under the clock, matching the 3D angle */
.clock-caption {
  margin-top: 30px;
  text-align: center;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  transform: rotateY(24deg) rotateX(-3deg) translate3d(180px, 325px, -40px);
  /* Perspective on the parent handles the 3D effect */
  text-shadow: 0 4px 20px #8f00ff77, 0 1px 12px #000c;
  user-select: none;
  pointer-events: none;
}
`;

const DIGIT_LAYOUT = [
  [
    { className: "active cell d0 d2 d3 d4 d5 d6 d7 d8 d9" },
    { className: "active cell d0 d2 d3 d5 d6 d7 d8 d9" },
    { className: "active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9" },
  ],
  [
    { className: "active cell d0 d4 d5 d6 d8 d9" },
    { className: "cell" },
    { className: "active cell d0 d1 d2 d3 d4 d7 d8 d9" },
  ],
  [
    { className: "active cell d0 d4 d5 d6 d8 d9" },
    { className: "cell" },
    { className: "active cell d0 d1 d2 d3 d4 d7 d8 d9" },
  ],
  [
    { className: "active cell d0 d2 d3 d4 d5 d6 d8 d9" },
    { className: "active cell d2 d3 d4 d5 d6 d8 d9" },
    { className: "active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9" },
  ],
  [
    { className: "active cell d0 d2 d6 d8" },
    { className: "cell" },
    { className: "active cell d0 d1 d3 d4 d5 d6 d7 d8 d9" },
  ],
  [
    { className: "active cell d0 d2 d6 d8" },
    { className: "cell" },
    { className: "active cell d0 d1 d3 d4 d5 d6 d7 d8 d9" },
  ],
  [
    { className: "active cell d0 d2 d3 d5 d6 d8 d9" },
    { className: "active cell d0 d2 d3 d5 d6 d8 d9" },
    { className: "active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9" },
  ],
];

const SEPARATOR_LAYOUT = [
  [{ className: "cell" }],
  [{ className: "cell" }],
  [{ className: "active cell" }],
  [{ className: "cell" }],
  [{ className: "active cell" }],
  [{ className: "cell" }],
  [{ className: "cell" }],
];

const digitIDs = ["h1", "h2", "sep", "m1", "m2", "sep", "s1", "s2"];

const getDigitVal = (obj, id) => {
  if (id === "h1") return obj.h1;
  if (id === "h2") return obj.h2;
  if (id === "m1") return obj.m1;
  if (id === "m2") return obj.m2;
  if (id === "s1") return obj.s1;
  if (id === "s2") return obj.s2;
  return null;
};

export default function DigitalClock() {
  const [time, setTime] = useState({
    h1: 0,
    h2: 0,
    m1: 0,
    m2: 0,
    s1: 0,
    s2: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();

      setTime({
        h1: Math.floor(h / 10),
        h2: h % 10,
        m1: Math.floor(m / 10),
        m2: m % 10,
        s1: Math.floor(s / 10),
        s2: s % 10,
      });
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  function DigitRows({ digit }) {
    return DIGIT_LAYOUT.map((row, rowIdx) => (
      <div key={rowIdx}>
        {row.map((cell, cellIdx) => {
          let classNames = cell.className || "";
          if (classNames.indexOf("active") >= 0) {
            const allowed = classNames.match(/d[0-9]/g) || [];
            if (allowed.length > 0 && !allowed.includes(`d${digit}`)) {
              classNames = classNames
                .replace(/\bactive\b/, "")
                .replace(/\s+/, " ");
            }
          }
          return <div key={cellIdx} className={classNames.trim()} />;
        })}
      </div>
    ));
  }

  function Separator() {
    return SEPARATOR_LAYOUT.map((row, rowIdx) => (
      <div key={rowIdx}>
        {row.map((cell, cellIdx) => (
          <div key={cellIdx} className={cell.className} />
        ))}
      </div>
    ));
  }

  return (
    <>
      <style>{clockCSS}</style>
      <div className="digital-clock-gallery-wrapper" style={{ height: "60vh" }}>
        <div id="perspective">
          <div id="clock">
            {digitIDs.map((id, idx) =>
              id === "sep" ? (
                <div className="digit separator" key={`sep-${idx}`}>
                  <Separator />
                </div>
              ) : (
                <div id={id} className="digit" key={id}>
                  <DigitRows digit={getDigitVal(time, id)} />
                </div>
              )
            )}
          </div>
          {/* Caption text below the clock, with the same 3D transform */}
          <div className="clock-caption">"LEARNING DOESN’T PAUSE"</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "15rem",
            marginRight: "25rem",
          }}
        >
          <LoaderGallery />
        </div>
      </div>
    </>
  );
}
