import React from "react";

const images = [
  "/images/excel.png",
  "/images/gsap.png",
  "/images/python.png",
  "/images/react.png",
  "/images/think.png",
  "/images/html.png",
  "/images/java.png",
  "/images/pp.png",
  "/images/sql.png",
];

const carouselFigureStyle = (idx, isMobile) => {
  const z = isMobile ? 155 : 288;
  const deg = idx * 40;
  return {
    transform: `rotateY(${deg}deg) translateZ(${z}px)`,
  };
};

export default function LoaderGallery() {
  const [isMobile, setIsMobile] = React.useState(() =>
    typeof window === "undefined" ? false : window.innerWidth <= 768
  );

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerWidth = 210;
  const containerHeight = 140;
  const figureWidth = 200;
  const figureHeight = 120;
  const figureLeft = 10;
  const figureTop = 10;

  const mobileContainerWidth = 140;
  const mobileContainerHeight = 80;
  const mobileFigureWidth = 115;
  const mobileFigureHeight = 70;
  const mobileFigureLeft = 6;
  const mobileFigureTop = 5;

  const headingFontSize = isMobile ? 19 : 28;
  const headingLineHeight = isMobile ? "23px" : "32px";
  const headingMarginBottom = isMobile ? "1.7rem" : "3.5rem";

  return (
    <div
      style={{
        minHeight: "60vh",
        background: "#000",
      }}
    >
      <h1
        className="mb-6 font-extrabold text-center uppercase"
        style={{
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
          fontSize: headingFontSize,
          lineHeight: headingLineHeight,
          marginBottom: headingMarginBottom,
        }}
      >
        SKILLS IN REAL-TIME I HAVE
      </h1>

      <div
        className="loader-gallery-container"
        style={{
          margin: "4% auto",
          width: isMobile ? mobileContainerWidth : containerWidth,
          height: isMobile ? mobileContainerHeight : containerHeight,
          position: "relative",
          perspective: "800px",
        }}
      >
        <div
          className="loader-gallery-carousel"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            transformStyle: "preserve-3d",
            animation: "loader-gallery-rotation 20s infinite linear",
          }}
        >
          {images.map((src, idx) => (
            <figure
              key={idx}
              style={{
                display: "block",
                position: "absolute",
                width: isMobile ? mobileFigureWidth : figureWidth,
                height: isMobile ? mobileFigureHeight : figureHeight,
                left: isMobile ? mobileFigureLeft : figureLeft,
                top: isMobile ? mobileFigureTop : figureTop,
                background: "transparent",
                overflow: "visible",
                ...carouselFigureStyle(idx, isMobile),
              }}
            >
              <div
                className="violet-gradient-border"
                style={{
                  width: "100%",
                  height: "100%",
                  padding: isMobile ? "1.5px" : "4px",
                  borderRadius: isMobile ? "10px" : "18px",
                  background: "black",
                  boxShadow: "0 0 12px #e040fb33",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={src}
                  alt={`gallery-${idx + 1}`}
                  style={{
                    WebkitFilter: "grayscale(1)",
                    filter: "grayscale(1)",
                    cursor: "pointer",
                    transition: "all .5s ease",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.WebkitFilter = "grayscale(0)";
                    e.currentTarget.style.filter = "grayscale(0)";
                    e.currentTarget.style.transform = "scale(1.2, 1.2)";
                    e.currentTarget.style.border = "none";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.WebkitFilter = "grayscale(1)";
                    e.currentTarget.style.filter = "grayscale(1)";
                    e.currentTarget.style.transform = "scale(1, 1)";
                    e.currentTarget.style.border = "none";
                  }}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Anaheim');
        .loader-gallery-container {
        }
        .loader-gallery-carousel:hover {
          animation-play-state: paused;
        }
        @keyframes loader-gallery-rotation {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        body {
          background-color: #000 !important;
          background-image: none !important;
        }
        .violet-gradient-border {
        }
        @media (max-width: 768px) {
          .loader-gallery-container {
            width: ${mobileContainerWidth}px !important;
            height: ${mobileContainerHeight}px !important;
            min-width: unset !important;
            min-height: unset !important;
          }
          .loader-gallery-carousel {
          }
          .loader-gallery-container h1,
          .loader-gallery-container .mb-6 {
            font-size: ${headingFontSize}px !important;
            line-height: ${headingLineHeight} !important;
            margin-bottom: ${headingMarginBottom} !important;
          }
        }
      `}</style>
    </div>
  );
}
