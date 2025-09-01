import Image from "next/image";
import { forwardRef } from "react";
import { GrProjects } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";

// Now accepts a "title" prop to show the project/event name on the card front
const HomeEventCard = forwardRef(
  ({ id, frontSrc, frontAlt, backText, skills, title }, ref) => {
    return (
      <div className="HomeEventCard" id={id} ref={ref}>
        <div className="cardWrapper">
          <div className="flipCardInner">
            <div className="flipCardFront">
              <div className="flipCardFrontInner shine-overlay">
                <div className="flipCardFrontBorder">
                  <div className="absolute left-2 top-2">
                    <GrProjects color="skyblue" />
                  </div>
                  <div className="shine" />
                  <div className="rightCornerImage">
                    <GrProjects color="skyblue" />
                  </div>
                  <div className="middleLogo">
                    <div style={{ marginLeft: "15px" }}>
                      <GoProjectSymlink size={100} />
                    </div>
                  </div>
                  {/* Show the title at the top center of the card front */}
                  {title && (
                    <div
                      style={{
                        position: "absolute",
                        top: "20%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        textShadow: "0 2px 8px #000, 0 0 2px #38bdf8",
                        zIndex: 10,
                        width: "90%",
                        textAlign: "center",
                        letterSpacing: "0.02em",
                        lineHeight: 1.2,
                        pointerEvents: "none",
                      }}
                    >
                      {title}
                    </div>
                  )}
                  {/* Skills removed */}
                </div>
              </div>
            </div>
            <div className="flipCardBack">
              <div className="flipCardBackInner">
                <div
                  className="flipCardBackImage"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {/* <Image
                    // src={"/shrine.jpg"}
                    // alt="shrine"
                    fill
                    style={{ objectFit: "cover" }}
                  /> */}
                  {/* Add unique content for each card using the backText prop */}
                  <div
                    style={{
                      position: "absolute",
                      top: "80px",

                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textAlign: "center",
                      padding: "1rem",
                      background: "rgba(0,0,0,0.4)",
                      zIndex: 2,
                    }}
                  >
                    {backText}
                  </div>
                  {/* Pentagon Skills Graph */}
                  {skills && skills.length === 5 && (
                    <svg
                      width="180"
                      height="180"
                      viewBox="0 0 180 180"
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 3,
                      }}
                    >
                      {/* Pentagon outline */}
                      <polygon
                        points={Array.from({ length: 5 })
                          .map((_, i) => {
                            const angle = ((Math.PI * 2) / 5) * i - Math.PI / 2;
                            const r = 70;
                            const x = 90 + r * Math.cos(angle);
                            const y = 90 + r * Math.sin(angle);
                            return `${x},${y}`;
                          })
                          .join(" ")}
                        fill="rgba(255,255,255,0.07)"
                        stroke="#fff"
                        strokeWidth="2"
                      />
                      {/* Skills area */}
                      <polygon
                        points={skills
                          .map((skill, i) => {
                            const percent = Math.max(
                              0,
                              Math.min(
                                1,
                                parseInt(
                                  skill.value.split(":")[1]?.trim() || "0",
                                  10
                                ) / 100
                              )
                            );
                            const angle = ((Math.PI * 2) / 5) * i - Math.PI / 2;
                            const r = 70 * percent;
                            const x = 90 + r * Math.cos(angle);
                            const y = 90 + r * Math.sin(angle);
                            return `${x},${y}`;
                          })
                          .join(" ")}
                        fill="rgba(0, 153, 255, 0.35)"
                        stroke="#09f"
                        strokeWidth="2"
                      />
                      {/* Skill points and labels */}
                      {skills.map((skill, i) => {
                        const percent = Math.max(
                          0,
                          Math.min(
                            1,
                            parseInt(
                              skill.value.split(":")[1]?.trim() || "0",
                              10
                            ) / 100
                          )
                        );
                        const angle = ((Math.PI * 2) / 5) * i - Math.PI / 2;
                        const r = 70;
                        const x = 90 + r * Math.cos(angle);
                        const y = 90 + r * Math.sin(angle);

                        // For label placement, move a bit further out
                        const labelR = 85;
                        const labelX = 90 + labelR * Math.cos(angle);
                        const labelY = 90 + labelR * Math.sin(angle);

                        // For percentage placement, move a bit inside
                        const percentR = 55;
                        const percentX = 90 + percentR * Math.cos(angle);
                        const percentY = 90 + percentR * Math.sin(angle);

                        // Use a unique key by combining skill name and index
                        return (
                          <g key={`${skill.name}-${i}`}>
                            {/* Vertex dot */}
                            <circle
                              cx={x}
                              cy={y}
                              r="5"
                              fill="#09f"
                              stroke="#fff"
                              strokeWidth="2"
                            />
                            {/* Skill name */}
                            <text
                              x={labelX}
                              y={labelY}
                              textAnchor="middle"
                              alignmentBaseline="middle"
                              fontSize="0.75rem"
                              fill="#fff"
                              style={{
                                fontWeight: "bold",
                                textShadow: "0 1px 2px #000",
                                pointerEvents: "none",
                              }}
                            >
                              {skill.name}
                            </text>
                            {/* Percentage */}
                            <text
                              x={percentX}
                              y={percentY}
                              textAnchor="middle"
                              alignmentBaseline="middle"
                              fontSize="0.8rem"
                              fill="#09f"
                              style={{
                                fontWeight: "bold",
                                textShadow: "0 1px 2px #000",
                                pointerEvents: "none",
                              }}
                            >
                              {skill.value.split(":")[1]?.trim() || "0"}%
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  )}
                </div>
                <div className="flipCardBackOverlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default HomeEventCard;
