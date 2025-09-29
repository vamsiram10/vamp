module.exports = [
"[project]/vamp/src/components/ui/vortex.jsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// import { cn } from "@/lib/utils";
// import React, { useEffect, useRef } from "react";
// import { createNoise3D } from "simplex-noise";
// import { motion } from "framer-motion";
// export const Vortex = (props) => {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const animationFrameId = useRef();
//   const particleCount = props.particleCount || 700;
//   const particlePropCount = 9;
//   const particlePropsLength = particleCount * particlePropCount;
//   const rangeY = props.rangeY || 100;
//   const baseTTL = 50;
//   const rangeTTL = 150;
//   const baseSpeed = props.baseSpeed || 0.0;
//   const rangeSpeed = props.rangeSpeed || 1.5;
//   const baseRadius = props.baseRadius || 1;
//   const rangeRadius = props.rangeRadius || 2;
//   const baseHue = props.baseHue || 220;
//   const rangeHue = 100;
//   const noiseSteps = 3;
//   const xOff = 0.00125;
//   const yOff = 0.00125;
//   const zOff = 0.0005;
//   const backgroundColor = props.backgroundColor || "#000000";
//   let tick = 0;
//   const noise3D = createNoise3D();
//   let particleProps = new Float32Array(particlePropsLength);
//   let center = [0, 0];
//   const HALF_PI = 0.5 * Math.PI;
//   const TAU = 2 * Math.PI;
//   const TO_RAD = Math.PI / 180;
//   const rand = (n) => n * Math.random();
//   const randRange = (n) => n - rand(2 * n);
//   const fadeInOut = (t, m) => {
//     let hm = 0.5 * m;
//     return Math.abs(((t + hm) % m) - hm) / hm;
//   };
//   const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;
//   const setup = () => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (canvas && container) {
//       const ctx = canvas.getContext("2d");
//       if (ctx) {
//         resize(canvas, ctx);
//         initParticles();
//         draw(canvas, ctx);
//       }
//     }
//   };
//   const initParticles = () => {
//     tick = 0;
//     // simplex = new SimplexNoise();
//     particleProps = new Float32Array(particlePropsLength);
//     for (let i = 0; i < particlePropsLength; i += particlePropCount) {
//       initParticle(i);
//     }
//   };
//   const initParticle = (i) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     let x, y, vx, vy, life, ttl, speed, radius, hue;
//     x = rand(canvas.width);
//     y = center[1] + randRange(rangeY);
//     vx = 0;
//     vy = 0;
//     life = 0;
//     ttl = baseTTL + rand(rangeTTL);
//     speed = baseSpeed + rand(rangeSpeed);
//     radius = baseRadius + rand(rangeRadius);
//     hue = baseHue + rand(rangeHue);
//     particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
//   };
//   const draw = (canvas, ctx) => {
//     tick++;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = backgroundColor;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     drawParticles(ctx);
//     renderGlow(canvas, ctx);
//     renderToScreen(canvas, ctx);
//     animationFrameId.current = window.requestAnimationFrame(() =>
//       draw(canvas, ctx)
//     );
//   };
//   const drawParticles = (ctx) => {
//     for (let i = 0; i < particlePropsLength; i += particlePropCount) {
//       updateParticle(i, ctx);
//     }
//   };
//   const updateParticle = (i, ctx) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     let i2 = 1 + i,
//       i3 = 2 + i,
//       i4 = 3 + i,
//       i5 = 4 + i,
//       i6 = 5 + i,
//       i7 = 6 + i,
//       i8 = 7 + i,
//       i9 = 8 + i;
//     let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;
//     x = particleProps[i];
//     y = particleProps[i2];
//     n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
//     vx = lerp(particleProps[i3], Math.cos(n), 0.5);
//     vy = lerp(particleProps[i4], Math.sin(n), 0.5);
//     life = particleProps[i5];
//     ttl = particleProps[i6];
//     speed = particleProps[i7];
//     x2 = x + vx * speed;
//     y2 = y + vy * speed;
//     radius = particleProps[i8];
//     hue = particleProps[i9];
//     drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);
//     life++;
//     particleProps[i] = x2;
//     particleProps[i2] = y2;
//     particleProps[i3] = vx;
//     particleProps[i4] = vy;
//     particleProps[i5] = life;
//     (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
//   };
//   const drawParticle = (x, y, x2, y2, life, ttl, radius, hue, ctx) => {
//     ctx.save();
//     ctx.lineCap = "round";
//     ctx.lineWidth = radius;
//     ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x2, y2);
//     ctx.stroke();
//     ctx.closePath();
//     ctx.restore();
//   };
//   const checkBounds = (x, y, canvas) => {
//     return x > canvas.width || x < 0 || y > canvas.height || y < 0;
//   };
//   const resize = (canvas, ctx) => {
//     const { innerWidth, innerHeight } = window;
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;
//     center[0] = 0.5 * canvas.width;
//     center[1] = 0.5 * canvas.height;
//   };
//   const renderGlow = (canvas, ctx) => {
//     ctx.save();
//     ctx.filter = "blur(8px) brightness(200%)";
//     ctx.globalCompositeOperation = "lighter";
//     ctx.drawImage(canvas, 0, 0);
//     ctx.restore();
//     ctx.save();
//     ctx.filter = "blur(4px) brightness(200%)";
//     ctx.globalCompositeOperation = "lighter";
//     ctx.drawImage(canvas, 0, 0);
//     ctx.restore();
//   };
//   const renderToScreen = (canvas, ctx) => {
//     ctx.save();
//     ctx.globalCompositeOperation = "lighter";
//     ctx.drawImage(canvas, 0, 0);
//     ctx.restore();
//   };
//   const handleResize = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");
//     if (canvas && ctx) {
//       resize(canvas, ctx);
//     }
//   };
//   useEffect(() => {
//     setup();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, []);
//   return (
//     <div className={cn("relative h-full w-full", props.containerClassName)}>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         ref={containerRef}
//         className="z-0 absolute inset-0 flex items-center justify-center h-full w-full bg-transparent"
//       >
//         <canvas ref={canvasRef}></canvas>
//       </motion.div>
//       <div className={cn("relative z-10", props.className)}>
//         {props.children}
//       </div>
//     </div>
//   );
// };
}),
"[project]/vamp/src/snippets/vortex/VortexDemo.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VortexDemo",
    ()=>VortexDemo,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$components$2f$ui$2f$vortex$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/src/components/ui/vortex.jsx [app-ssr] (ecmascript)");
;
;
;
function VortexDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden mx-auto w-[calc(100%-4rem)] h-[30rem] rounded-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$components$2f$ui$2f$vortex$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vortex"], {
            backgroundColor: "black",
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/vamp/src/snippets/vortex/VortexDemo.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vamp/src/snippets/vortex/VortexDemo.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = VortexDemo;
}),
"[project]/vamp/src/components/section/contactsection/ContactMe.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactMe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$snippets$2f$vortex$2f$VortexDemo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/src/snippets/vortex/VortexDemo.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const RADIUS = 150; // px, radius of the outer ring
const INNER_RADIUS = 100; // px, radius of the inner ring
const ICON_SIZE = 60; // px
function ContactMe() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-9f7ba6a0bb398059" + " " + "overflow-hidden relative flex flex-col items-center justify-center py-16 w-full min-h-[100vh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-9f7ba6a0bb398059" + " " + "z-0 absolute top-50 inset-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$snippets$2f$vortex$2f$VortexDemo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 2 * (RADIUS + ICON_SIZE),
                    height: 2 * (RADIUS + ICON_SIZE)
                },
                className: "jsx-9f7ba6a0bb398059" + " " + "z-10 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 2 * RADIUS,
                            height: 2 * RADIUS,
                            transform: "translate(-50%, -50%)",
                            borderRadius: "50%",
                            border: "4px solid transparent",
                            background: "none",
                            backgroundImage: "conic-gradient(from 0deg, #7c3aed, #38bdf8, #7c3aed 100%)",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                            boxShadow: "0 0 32px 0 #7c3aed44, 0 0 32px 0 #38bdf844",
                            zIndex: 1
                        },
                        className: "jsx-9f7ba6a0bb398059" + " " + "absolute left-1/2 top-1/2"
                    }, void 0, false, {
                        fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 2 * INNER_RADIUS,
                            height: 2 * INNER_RADIUS,
                            transform: "translate(-50%, -50%)",
                            borderRadius: "50%",
                            zIndex: 1,
                            background: "none",
                            // Use a conic-gradient border effect via mask
                            border: "3px solid transparent",
                            backgroundImage: "conic-gradient(from 0deg, #7c3aed, #38bdf8, #7c3aed 100%)",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                            boxShadow: "0 0 16px 0 #7c3aed44, 0 0 16px 0 #38bdf844"
                        },
                        className: "jsx-9f7ba6a0bb398059" + " " + "absolute left-1/2 top-1/2"
                    }, void 0, false, {
                        fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: "translate(-50%, -50%)",
                            zIndex: 2,
                            pointerEvents: "none"
                        },
                        className: "jsx-9f7ba6a0bb398059" + " " + "absolute left-1/2 top-1/2 flex flex-col items-center justify-center select-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-9f7ba6a0bb398059" + " " + "text-2xl font-bold text-blue-400 tracking-wide drop-shadow-lg md:text-3xl",
                            children: "Get in touch"
                        }, void 0, false, {
                            fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 2 * RADIUS,
                            height: 2 * RADIUS,
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                            pointerEvents: "none"
                        },
                        className: "jsx-9f7ba6a0bb398059" + " " + "absolute left-1/2 top-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animation: "orbit 7s linear infinite",
                                transformOrigin: "50% 50%"
                            },
                            className: "jsx-9f7ba6a0bb398059" + " " + "absolute left-0 top-0 w-full h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.linkedin.com/in/ramavamsi-16v",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        left: `calc(50% - ${ICON_SIZE / 2}px)`,
                                        top: `-${ICON_SIZE / 2}px`,
                                        pointerEvents: "auto"
                                    },
                                    className: "jsx-9f7ba6a0bb398059" + " " + "absolute",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9f7ba6a0bb398059" + " " + "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: ICON_SIZE,
                                                    height: ICON_SIZE
                                                },
                                                className: "jsx-9f7ba6a0bb398059" + " " + "flex items-center justify-center bg-white rounded-full border-blue-400 shadow-lg dark:bg-black border",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                                                    className: "text-blue-600 text-2xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-9f7ba6a0bb398059" + " " + "mt-1 text-xs text-blue-400 font-semibold",
                                                children: "LinkedIn"
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:vamsirama1622@gmail.com",
                                    style: {
                                        left: `calc(50% - ${ICON_SIZE / 2}px)`,
                                        top: `calc(100% - ${ICON_SIZE / 2}px)`,
                                        pointerEvents: "auto"
                                    },
                                    className: "jsx-9f7ba6a0bb398059" + " " + "absolute",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9f7ba6a0bb398059" + " " + "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: ICON_SIZE,
                                                    height: ICON_SIZE
                                                },
                                                className: "jsx-9f7ba6a0bb398059" + " " + "flex items-center justify-center bg-white rounded-full border-blue-400 shadow-lg dark:bg-black border",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                    className: "text-blue-400 text-2xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-9f7ba6a0bb398059" + " " + "mt-1 text-xs text-blue-400 font-semibold",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "9f7ba6a0bb398059",
                children: "@keyframes orbit{to{transform:rotate(360deg)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vamp/src/components/section/contactsection/ContactMe.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=vamp_src_6c44858c._.js.map