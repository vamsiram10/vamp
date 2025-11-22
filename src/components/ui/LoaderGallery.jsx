import React from "react";

// List of images (use placeholder images)
const images = [
  "/excel.png",
  "/gsap.png",
  "/python.png",
  "/react.png",
  "/think.png",
  "/html.png",
  "/java.png",
  "/PP.PNG",
  "/SQL.PNG",
];

// Generates the CSS for the nth-child transforms (to place the figures around the carousel)
const carouselFigureStyle = (idx) => {
  const deg = idx * 40;
  return {
    transform: `rotateY(${deg}deg) translateZ(288px)`,
  };
};

export default function LoaderGallery() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#141414",
      }}
    >
      {/* Headed h1 */}
      <h1
        className="mb-6 text-[28px] font-extrabold leading-[32px] text-center uppercase"
        style={{ letterSpacing: "0.05em", whiteSpace: "nowrap" }}
      >
        SKILLS IN REAL-TIME I HAVE
      </h1>

      <div
        className="loader-gallery-container"
        style={{
          margin: "4% auto",
          width: 210,
          height: 140,
          position: "relative",
          perspective: "1000px",
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
                width: 186,
                height: 116,
                left: 10,
                top: 10,
                background: "black",
                overflow: "hidden",
                border: "solid 5px black",
                ...carouselFigureStyle(idx),
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
                  objectFit: "cover",
                }}
                // grayscale to color & scale effect on hover
                onMouseOver={(e) => {
                  e.currentTarget.style.WebkitFilter = "grayscale(0)";
                  e.currentTarget.style.filter = "grayscale(0)";
                  e.currentTarget.style.transform = "scale(1.2, 1.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.WebkitFilter = "grayscale(1)";
                  e.currentTarget.style.filter = "grayscale(1)";
                  e.currentTarget.style.transform = "scale(1, 1)";
                }}
              />
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Anaheim');

        .loader-gallery-container {
          /* margin, width, height, relative, perspective set inline */
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
          background-color: #141414 !important;
          background-image: none !important;
        }
      `}</style>
    </div>
  );
}
