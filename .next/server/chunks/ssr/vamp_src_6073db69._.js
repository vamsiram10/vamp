module.exports = [
"[project]/vamp/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(inputs));
}
}),
"[project]/vamp/src/components/ui/background-beams-with-collision.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundBeamsWithCollision",
    ()=>BackgroundBeamsWithCollision,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const BackgroundBeamsWithCollision = ({ children, className })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const parentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const beams = [
        {
            initialX: 10,
            translateX: 10,
            duration: 7,
            repeatDelay: 3,
            delay: 2
        },
        {
            initialX: 100,
            translateX: 100,
            duration: 7,
            repeatDelay: 7,
            className: "h-6"
        },
        {
            initialX: 200,
            translateX: 200,
            duration: 6,
            repeatDelay: 5,
            delay: 1,
            className: "h-8"
        },
        {
            initialX: 300,
            translateX: 300,
            duration: 8,
            repeatDelay: 6,
            delay: 2,
            className: "h-10"
        },
        {
            initialX: 400,
            translateX: 400,
            duration: 5,
            repeatDelay: 14,
            delay: 4
        },
        {
            initialX: 500,
            translateX: 500,
            duration: 9,
            repeatDelay: 8,
            delay: 3,
            className: "h-12"
        },
        {
            initialX: 600,
            translateX: 600,
            duration: 3,
            repeatDelay: 3,
            delay: 4
        },
        {
            initialX: 700,
            translateX: 700,
            duration: 10,
            repeatDelay: 7,
            delay: 2,
            className: "h-16"
        },
        {
            initialX: 800,
            translateX: 800,
            duration: 11,
            repeatDelay: 2,
            className: "h-20"
        },
        {
            initialX: 850,
            translateX: 850,
            duration: 7,
            repeatDelay: 4,
            delay: 2,
            className: "h-10"
        },
        {
            initialX: 900,
            translateX: 900,
            duration: 8,
            repeatDelay: 3,
            delay: 1,
            className: "h-10"
        },
        {
            initialX: 950,
            translateX: 950,
            duration: 5,
            repeatDelay: 2,
            delay: 2,
            className: "h-8"
        },
        {
            initialX: 1000,
            translateX: 1000,
            duration: 4,
            repeatDelay: 2,
            className: "h-12"
        },
        {
            initialX: 1050,
            translateX: 1050,
            duration: 6,
            repeatDelay: 3,
            delay: 1,
            className: "h-14"
        },
        {
            initialX: 1100,
            translateX: 1100,
            duration: 7,
            repeatDelay: 5,
            delay: 3,
            className: "h-16"
        },
        {
            initialX: 1150,
            translateX: 1150,
            duration: 6,
            repeatDelay: 3,
            delay: 1,
            className: "h-8"
        },
        {
            initialX: 1200,
            translateX: 1200,
            duration: 6,
            repeatDelay: 4,
            delay: 2,
            className: "h-6"
        },
        {
            initialX: 1250,
            translateX: 1250,
            duration: 8,
            repeatDelay: 5,
            delay: 2,
            className: "h-10"
        },
        {
            initialX: 1300,
            translateX: 1300,
            duration: 9,
            repeatDelay: 6,
            delay: 2,
            className: "h-14"
        },
        {
            initialX: 1350,
            translateX: 1350,
            duration: 7,
            repeatDelay: 4,
            delay: 3,
            className: "h-12"
        },
        {
            initialX: 1400,
            translateX: 1400,
            duration: 10,
            repeatDelay: 7,
            delay: 4,
            className: "h-12"
        },
        {
            initialX: 1450,
            translateX: 1450,
            duration: 8,
            repeatDelay: 5,
            delay: 2,
            className: "h-16"
        },
        {
            initialX: 1500,
            translateX: 1500,
            duration: 12,
            repeatDelay: 8,
            delay: 5,
            className: "h-20"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: parentRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-180 sm:h-[51rem] md:h-[51rem] lg:h-[60rem] xl:h-[51rem] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden", // h-screen if you want bigger
        className),
        children: [
            beams.map((beam)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CollisionMechanism, {
                    beamOptions: beam,
                    containerRef: containerRef,
                    parentRef: parentRef
                }, beam.initialX + "beam-idx", false, {
                    fileName: "[project]/vamp/src/components/ui/background-beams-with-collision.jsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "absolute bottom-0 inset-x-0 w-full bg-neutral-100 pointer-events-none",
                style: {
                    boxShadow: "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                }
            }, void 0, false, {
                fileName: "[project]/vamp/src/components/ui/background-beams-with-collision.jsx",
                lineNumber: 210,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/vamp/src/components/ui/background-beams-with-collision.jsx",
        lineNumber: 193,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const CollisionMechanism = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ parentRef, containerRef, beamOptions = {} }, ref)=>{
    const beamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [collision, setCollision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        detected: false,
        coordinates: null
    });
    const [beamKey, setBeamKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkCollision = ()=>{
            if (beamRef.current && containerRef.current && parentRef.current && !cycleCollisionDetected) {
                const beamRect = beamRef.current.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                const parentRect = parentRef.current.getBoundingClientRect();
                if (beamRect.bottom >= containerRect.top) {
                    const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
                    const relativeY = beamRect.bottom - parentRect.top;
                    setCollision({
                        detected: true,
                        coordinates: {
                            x: relativeX,
                            y: relativeY
                        }
                    });
                    setCycleCollisionDetected(true);
                }
            }
        };
        const animationInterval = setInterval(checkCollision, 50);
        return ()=>clearInterval(animationInterval);
    }, [
        cycleCollisionDetected,
        containerRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (collision.detected && collision.coordinates) {
            setTimeout(()=>{
                setCollision({
                    detected: false,
                    coordinates: null
                });
                setCycleCollisionDetected(false);
            }, 2000);
            setTimeout(()=>{
                setBeamKey((prevKey)=>prevKey + 1);
            }, 2000);
        }
    }, [
        collision
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: beamRef,
                animate: "animate",
                initial: {
                    translateY: beamOptions.initialY || "-200px",
                    translateX: beamOptions.initialX || "0px",
                    rotate: beamOptions.rotate || 0
                },
                variants: {
                    animate: {
                        translateY: beamOptions.translateY || "1800px",
                        translateX: beamOptions.translateX || "0px",
                        rotate: beamOptions.rotate || 0
                    }
                },
                transition: {
                    duration: beamOptions.duration || 8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    delay: beamOptions.delay || 0,
                    repeatDelay: beamOptions.repeatDelay || 0
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent", beamOptions.className)
            }, beamKey, false, {
                fileName: "[project]/vamp/src/components/ui/background-beams-with-collision.jsx",
                lineNumber: 281,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: collision.detected && collision.coordinates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Explosion, {
                    className: "",
                    style: {
                        left: `${collision.coordinates.x}px`,
                        top: `${collision.coordinates.y}px`,
                        transform: "translate(-50%, -50%)"
                    }
                }, `${collision.coordinates.x}-${collision.coordinates.y}`, false, {
                    fileName: "[project]/vamp/src/components/ui/background-beams-with-collision.jsx",
                    lineNumber: 312,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vamp/src/components/ui/background-beams-with-collision.jsx",
                lineNumber: 310,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
});
CollisionMechanism.displayName = "CollisionMechanism";
const Explosion = ({ ...props })=>{
    const spans = Array.from({
        length: 20
    }, (_, index)=>({
            id: index,
            initialX: 0,
            initialY: 0,
            directionX: Math.floor(Math.random() * 80 - 40),
            directionY: Math.floor(Math.random() * -50 - 10)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute z-50 h-2 w-2", props.className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: 1.5,
                    ease: "easeOut"
                },
                className: "absolute top-0 m-auto h-2 w-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full blur-sm -inset-x-10"
            }, void 0, false, {
                fileName: "[project]/vamp/src/components/ui/background-beams-with-collision.jsx",
                lineNumber: 341,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            spans.map((span)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: span.initialX,
                        y: span.initialY,
                        opacity: 1
                    },
                    animate: {
                        x: span.directionX,
                        y: span.directionY,
                        opacity: 0
                    },
                    transition: {
                        duration: Math.random() * 1.5 + 0.5,
                        ease: "easeOut"
                    },
                    className: "absolute h-1 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"
                }, span.id, false, {
                    fileName: "[project]/vamp/src/components/ui/background-beams-with-collision.jsx",
                    lineNumber: 349,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/vamp/src/components/ui/background-beams-with-collision.jsx",
        lineNumber: 340,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BackgroundBeamsWithCollision;
}),
"[project]/vamp/src/components/section/homesection/homeabout/HomeAbout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$components$2f$ui$2f$background$2d$beams$2d$with$2d$collision$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/src/components/ui/background-beams-with-collision.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Modern, "new gen" animated name with glassmorphism, neon glow, and fluid gradient
const NAME = "VENKATA RAMA VAMSI";
// Gradient color palette for the name
const GRADIENTS = [
    "linear-gradient(90deg, #a78bfa 0%, #60a5fa 100%)",
    "linear-gradient(90deg, #6366f1 0%, #3b82f6 100%)",
    "linear-gradient(90deg, #818cf8 0%, #2563eb 100%)",
    "linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)",
    "linear-gradient(90deg, #3b82f6 0%, #818cf8 100%)",
    "linear-gradient(90deg, #2563eb 0%, #6366f1 100%)"
];
// Modern font stack for a "next-gen" look
const MODERN_FONT = `"Space Grotesk", "Inter", "Montserrat", "Poppins", "Segoe UI", "Arial", sans-serif`;
const AnimatedName = ()=>{
    // Precompute animation delays and gradient backgrounds
    const letters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return NAME.split("").map((char, i)=>{
            // Each letter gets a different gradient and animation delay
            const gradient = GRADIENTS[i % GRADIENTS.length];
            const delay = 0.07 * i;
            return {
                char,
                gradient,
                delay,
                key: i
            };
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "jsx-ba0f540b0d2c8f3d" + " " + "relative inline-flex items-center justify-center gap-1 select-none sm:gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "jsx-ba0f540b0d2c8f3d" + " " + "z-0 absolute pointer-events-none -inset-4 sm:-inset-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "jsx-ba0f540b0d2c8f3d" + " " + "block w-full h-full bg-gradient-to-tr from-blue-500/30 via-violet-400/20 to-pink-400/30 rounded-3xl blur-2xl opacity-80 animate-blobfloat"
                }, void 0, false, {
                    fileName: "[project]/vamp/src/components/section/homesection/homeabout/HomeAbout.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vamp/src/components/section/homesection/homeabout/HomeAbout.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            letters.map(({ char, gradient, delay, key })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        // Modern font, bold, wide, uppercase, neon shadow
                        fontFamily: MODERN_FONT,
                        fontWeight: 900,
                        // Responsive font size: smaller on mobile, larger on bigger screens
                        fontSize: "clamp(1.3rem, 7vw, 4.5rem)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        background: gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter: "drop-shadow(0 0 12px #a78bfa88) drop-shadow(0 2px 24px #60a5fa55)",
                        // Animation
                        opacity: 0,
                        transform: "translateY(40px) scale(0.85) rotate(-8deg)",
                        animation: `letterIn 0.85s cubic-bezier(.6,1.5,.5,1) forwards, neonPulse 2.5s ${delay + 0.7}s infinite alternate`,
                        animationDelay: `${delay}s, ${delay + 0.7}s`
                    },
                    className: "jsx-ba0f540b0d2c8f3d" + " " + "z-10 relative inline-block animated-letter",
                    children: char === " " ? "\u00A0" : char
                }, key, false, {
                    fileName: "[project]/vamp/src/components/section/homesection/homeabout/HomeAbout.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "ba0f540b0d2c8f3d",
                children: "@keyframes letterIn{0%{opacity:0;filter:blur(8px)brightness(1.5);transform:translateY(40px)scale(.85)rotate(-8deg)}60%{opacity:1;filter:blur(1.5px)brightness(1.1);transform:translateY(-8px)scale(1.05)rotate(2deg)}to{opacity:1;filter:blur()brightness();transform:none}}@keyframes neonPulse{0%{filter:drop-shadow(0 0 12px #a78bfa88)drop-shadow(0 2px 24px #60a5fa55)}to{filter:drop-shadow(0 0 24px #60a5fa)drop-shadow(0 4px 32px #a78bfa99)}}@keyframes blobfloat{0%,to{transform:translateY(0)scale(1)rotate(0)}50%{transform:translateY(-18px)scale(1.08)rotate(3deg)}}@media (width<=640px){.animated-letter.jsx-ba0f540b0d2c8f3d{font-size:2rem!important}}@media (width<=400px){.animated-letter.jsx-ba0f540b0d2c8f3d{font-size:1.3rem!important}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&display=swap",
                rel: "stylesheet",
                className: "jsx-ba0f540b0d2c8f3d"
            }, void 0, false, {
                fileName: "[project]/vamp/src/components/section/homesection/homeabout/HomeAbout.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/vamp/src/components/section/homesection/homeabout/HomeAbout.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const HomeAbout = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$components$2f$ui$2f$background$2d$beams$2d$with$2d$collision$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackgroundBeamsWithCollision"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col items-center justify-center px-4 py-16 min-h-[100vh] w-full bg-black bg-opacity-80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-4 font-extrabold text-white text-center text-2xl sm:text-4xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedName, {}, void 0, false, {
                    fileName: "[project]/vamp/src/components/section/homesection/homeabout/HomeAbout.jsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vamp/src/components/section/homesection/homeabout/HomeAbout.jsx",
                lineNumber: 135,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/vamp/src/components/section/homesection/homeabout/HomeAbout.jsx",
            lineNumber: 134,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vamp/src/components/section/homesection/homeabout/HomeAbout.jsx",
        lineNumber: 133,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HomeAbout;
}),
"[project]/vamp/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$components$2f$section$2f$homesection$2f$homeabout$2f$HomeAbout$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/src/components/section/homesection/homeabout/HomeAbout.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Home() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return; // only run on client
        //TURBOPACK unreachable
        ;
        const lenis = undefined;
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$src$2f$components$2f$section$2f$homesection$2f$homeabout$2f$HomeAbout$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/vamp/src/app/page.js",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vamp/src/app/page.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=vamp_src_6073db69._.js.map