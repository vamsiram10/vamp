(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/background-beams-with-collision.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundBeamsWithCollision",
    ()=>BackgroundBeamsWithCollision,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const BackgroundBeamsWithCollision = (param)=>{
    let { children, className } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const parentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: parentRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-180 sm:h-[51rem] md:h-[51rem] lg:h-[60rem] xl:h-[51rem] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden", // h-screen if you want bigger
        className),
        children: [
            beams.map((beam)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollisionMechanism, {
                    beamOptions: beam,
                    containerRef: containerRef,
                    parentRef: parentRef
                }, beam.initialX + "beam-idx", false, {
                    fileName: "[project]/src/components/ui/background-beams-with-collision.jsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "absolute bottom-0 inset-x-0 w-full bg-neutral-100 pointer-events-none",
                style: {
                    boxShadow: "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/background-beams-with-collision.jsx",
                lineNumber: 210,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/background-beams-with-collision.jsx",
        lineNumber: 193,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BackgroundBeamsWithCollision, "982kSb7Hl5hoY9c0zxeeonzgy2Q=");
_c = BackgroundBeamsWithCollision;
const CollisionMechanism = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_s1((param, ref)=>{
    let { parentRef, containerRef, beamOptions = {} } = param;
    _s1();
    const beamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [collision, setCollision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        detected: false,
        coordinates: null
    });
    const [beamKey, setBeamKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollisionMechanism.useEffect": ()=>{
            const checkCollision = {
                "CollisionMechanism.useEffect.checkCollision": ()=>{
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
                }
            }["CollisionMechanism.useEffect.checkCollision"];
            const animationInterval = setInterval(checkCollision, 50);
            return ({
                "CollisionMechanism.useEffect": ()=>clearInterval(animationInterval)
            })["CollisionMechanism.useEffect"];
        }
    }["CollisionMechanism.useEffect"], [
        cycleCollisionDetected,
        containerRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollisionMechanism.useEffect": ()=>{
            if (collision.detected && collision.coordinates) {
                setTimeout({
                    "CollisionMechanism.useEffect": ()=>{
                        setCollision({
                            detected: false,
                            coordinates: null
                        });
                        setCycleCollisionDetected(false);
                    }
                }["CollisionMechanism.useEffect"], 2000);
                setTimeout({
                    "CollisionMechanism.useEffect": ()=>{
                        setBeamKey({
                            "CollisionMechanism.useEffect": (prevKey)=>prevKey + 1
                        }["CollisionMechanism.useEffect"]);
                    }
                }["CollisionMechanism.useEffect"], 2000);
            }
        }
    }["CollisionMechanism.useEffect"], [
        collision
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent", beamOptions.className)
            }, beamKey, false, {
                fileName: "[project]/src/components/ui/background-beams-with-collision.jsx",
                lineNumber: 281,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: collision.detected && collision.coordinates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Explosion, {
                    className: "",
                    style: {
                        left: "".concat(collision.coordinates.x, "px"),
                        top: "".concat(collision.coordinates.y, "px"),
                        transform: "translate(-50%, -50%)"
                    }
                }, "".concat(collision.coordinates.x, "-").concat(collision.coordinates.y), false, {
                    fileName: "[project]/src/components/ui/background-beams-with-collision.jsx",
                    lineNumber: 312,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/background-beams-with-collision.jsx",
                lineNumber: 310,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
}, "epkSmnndaFcvodN6H7e7j91jyWQ="));
_c1 = CollisionMechanism;
CollisionMechanism.displayName = "CollisionMechanism";
const Explosion = (param)=>{
    let { ...props } = param;
    const spans = Array.from({
        length: 20
    }, (_, index)=>({
            id: index,
            initialX: 0,
            initialY: 0,
            directionX: Math.floor(Math.random() * 80 - 40),
            directionY: Math.floor(Math.random() * -50 - 10)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute z-50 h-2 w-2", props.className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                fileName: "[project]/src/components/ui/background-beams-with-collision.jsx",
                lineNumber: 341,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            spans.map((span)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
                    fileName: "[project]/src/components/ui/background-beams-with-collision.jsx",
                    lineNumber: 349,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/background-beams-with-collision.jsx",
        lineNumber: 340,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Explosion;
const __TURBOPACK__default__export__ = BackgroundBeamsWithCollision;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "BackgroundBeamsWithCollision");
__turbopack_context__.k.register(_c1, "CollisionMechanism");
__turbopack_context__.k.register(_c2, "Explosion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/encrypted-text.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EncryptedText",
    ()=>EncryptedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DEFAULT_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";
function generateRandomCharacter(charset) {
    const index = Math.floor(Math.random() * charset.length);
    return charset.charAt(index);
}
function generateGibberishPreservingSpaces(original, charset) {
    if (!original) return "";
    let result = "";
    for(let i = 0; i < original.length; i += 1){
        const ch = original[i];
        result += ch === " " ? " " : generateRandomCharacter(charset);
    }
    return result;
}
const EncryptedText = (param)=>{
    let { text, className, revealDelayMs = 100, charset = DEFAULT_CHARSET, flipDelayMs = 100, encryptedClassName, revealedClassName } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    const [revealCount, setRevealCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastFlipTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrambleCharsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(text ? generateGibberishPreservingSpaces(text, charset).split("") : []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EncryptedText.useEffect": ()=>{
            if (!isInView) return;
            // Reset state for a fresh animation whenever dependencies change
            const initial = text ? generateGibberishPreservingSpaces(text, charset) : "";
            scrambleCharsRef.current = initial.split("");
            startTimeRef.current = performance.now();
            lastFlipTimeRef.current = startTimeRef.current;
            setRevealCount(0);
            let isCancelled = false;
            const update = {
                "EncryptedText.useEffect.update": (now)=>{
                    if (isCancelled) return;
                    const elapsedMs = now - startTimeRef.current;
                    const totalLength = text.length;
                    const currentRevealCount = Math.min(totalLength, Math.floor(elapsedMs / Math.max(1, revealDelayMs)));
                    setRevealCount(currentRevealCount);
                    if (currentRevealCount >= totalLength) {
                        return;
                    }
                    // Re-randomize unrevealed scramble characters on an interval
                    const timeSinceLastFlip = now - lastFlipTimeRef.current;
                    if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
                        for(let index = 0; index < totalLength; index += 1){
                            if (index >= currentRevealCount) {
                                if (text[index] !== " ") {
                                    scrambleCharsRef.current[index] = generateRandomCharacter(charset);
                                } else {
                                    scrambleCharsRef.current[index] = " ";
                                }
                            }
                        }
                        lastFlipTimeRef.current = now;
                    }
                    animationFrameRef.current = requestAnimationFrame(update);
                }
            }["EncryptedText.useEffect.update"];
            animationFrameRef.current = requestAnimationFrame(update);
            return ({
                "EncryptedText.useEffect": ()=>{
                    isCancelled = true;
                    if (animationFrameRef.current !== null) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                }
            })["EncryptedText.useEffect"];
        }
    }["EncryptedText.useEffect"], [
        isInView,
        text,
        revealDelayMs,
        charset,
        flipDelayMs
    ]);
    if (!text) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        "aria-label": text,
        role: "text",
        children: text.split("").map((char, index)=>{
            const isRevealed = index < revealCount;
            var _scrambleCharsRef_current_index;
            const displayChar = isRevealed ? char : char === " " ? " " : (_scrambleCharsRef_current_index = scrambleCharsRef.current[index]) !== null && _scrambleCharsRef_current_index !== void 0 ? _scrambleCharsRef_current_index : generateRandomCharacter(charset);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isRevealed ? revealedClassName : encryptedClassName),
                children: displayChar
            }, index, false, {
                fileName: "[project]/src/components/ui/encrypted-text.jsx",
                lineNumber: 121,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/encrypted-text.jsx",
        lineNumber: 106,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EncryptedText, "tYxr0KcSQwP4DwD1BS+MO0hWad0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = EncryptedText;
var _c;
__turbopack_context__.k.register(_c, "EncryptedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Character.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Character
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function Character() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "\n        :root{\n    --floor-color: rgba(255,255,255,0.7);\n    --border-color:#111;\n    --skin-color:#f6c09b;\n    --border-var:1px solid #111;    \n    --cap-bright-color:#ed4742;\n    --cap-dark-color:#cf3d37;\n    --purple-ribbon:#92418e;\n    --cap-dark-yellow: #f6a63b;\n    --cap-bright-yellow:#fbc93c;\n    --cap-hair-color:#05243a;\n    --skin-dark-color:#ed927d;\n    --skin-bright-color:#f7bf9a;\n    --eye-color:#052438;\n    --eye-patch-color:#ed686a;\n    --hair-color:#05243a;\n    --shirt-bright-color:#3a6cb5;\n    --shirt-dark-color:#293a95;\n    --coat-dark-color:#672c65;\n    --coat-bright-color:#92418e;\n    --shoe-color:#05243a;\n    --button-color:#fff;\n    --grass-green1: #63c74d;\n    --grass-green2: #4ea03c;\n    --grass-green3: #9ada7a;\n}\n*\n{\n    /* border:var(--border-var); */\n}\nbody\n{\n    background:#f0f0f0;\n    font-family: 'Roboto',sans-serif;    \n}\n.credits\n{\nposition: absolute;\nleft:60%;\ntop:80%;\npadding-top:20px;\ncolor:#333;\ntext-align:center;\n}\n#heading\n{\n    text-align: center;\n    font-size: 1.5em;\n    font-weight: 100;\n    color:#333;\n    padding: 10px;\n}\n.color-container\n{\n   position:absolute;\n   left:5%;\n   top:0%;\n   height:100%;\n   width:500px;\n   overflow: auto;\n   box-shadow:0px 2px 30px rgba(0,0,0,0.2);\n  z-index:100;\n}\n.colors\n{\n    display: table;\n    height:100px;\n}\n.color{\n   \n    display: table-row;\n    height:50px;\n}\n.color__name,.color__code,.color__palette\n{\n    display: table-cell;\n    padding:10px;\n    vertical-align: middle;\n}\n.color__palette input[type=color]\n{\n    outline: none;\n    width:25px;\n    height:25px;\n    border-radius: 5px;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    -ms-border-radius: 5px;\n    -o-border-radius: 5px;\n}\n#color__code{\n    padding: 20px;\n    border:none;\n    background: #f0f0f0;\n}\n.centered\n{\n    position:absolute;\n    left:70%;\n    top:50%;\n    transform:translate(-50%,-50%);\n    -webkit-transform:translate(-50%,-50%);\n    -moz-transform:translate(-50%,-50%);\n    -ms-transform:translate(-50%,-50%);\n    -o-transform:translate(-50%,-50%);\n}\n.centered-horizontal\n{\n    position: absolute;\n    left:50%;\n    transform: translate(-50%,0%);\n    -webkit-transform: translate(-50%,0%);\n    -moz-transform: translate(-50%,0%);\n    -ms-transform: translate(-50%,0%);\n    -o-transform: translate(-50%,0%);\n}\n.container\n{\n    position:absolute;\n    width:600px;\n    height:400px;\n    /* border:var(--border-var); */\n}\n.floor\n{\n    top:84%;\n    width:200px;\n    height:5px;\n    /* border:var(--border-var); */\n    background: var(--floor-color,#cbdde7);\n    border-radius: 2px;\n    -webkit-border-radius: 2px;\n    -moz-border-radius: 2px;\n    -ms-border-radius: 2px;\n    -o-border-radius: 2px;\n    position: absolute;\n    left:50%;\n    transform: translate(-50%,0%);\n    z-index: 1;\n}\n\n.grass-group {\n    position: absolute;\n    top: 82%;\n    width: 300px;\n    /* increased from 240px to 300px to fit more grass */\n    height: 30px;\n    left: 50%;\n    transform: translate(-50%,0%);\n    display: flex;\n    justify-content: space-between;\n    pointer-events: none;\n    z-index: 2;\n}\n.grass-blade {\n    position: absolute;\n    bottom: 0;\n    width: 6px;\n    border-radius: 4px 4px 12px 12px;\n}\n/* Existing blades */\n.grass-blade1 {\n    height: 18px; left: 20px;\n    background: linear-gradient(160deg, var(--grass-green2) 70%, var(--grass-green1) 100%);\n    transform: rotate(-10deg) scaleX(1.1);\n    box-shadow: 2px 0 4px 0 rgba(76,175,80,0.2);\n}\n.grass-blade2 {\n    height: 13px; left: 33px;\n    background: linear-gradient(120deg, var(--grass-green3), var(--grass-green2) 85%);\n    transform: rotate(13deg) scaleX(.85);\n}\n.grass-blade3 {\n    height: 20px; left: 44px;\n    background: linear-gradient(170deg, var(--grass-green1) 40%, var(--grass-green3) 100%);\n    transform: rotate(-5deg) scaleX(0.87);\n}\n.grass-blade4 {\n    height: 24px; left: 180px;\n    background: linear-gradient(170deg, var(--grass-green2) 60%, var(--grass-green1) 100%);\n    transform: rotate(10deg) scaleX(1.12);\n}\n.grass-blade5 {\n    height: 15px; left: 196px;\n    background: linear-gradient(150deg, var(--grass-green3), var(--grass-green1) 85%);\n    transform: rotate(-7deg) scaleX(.75);\n}\n.grass-blade6 {\n    height: 17px; left: 206px;\n    background: linear-gradient(180deg, var(--grass-green1) 70%, var(--grass-green3) 100%);\n    transform: rotate(-14deg) scaleX(1.03);\n}\n/* More grass blades for variety */\n.grass-blade7 {\n    height: 10px; left: 60px;\n    background: linear-gradient(170deg, var(--grass-green2) 30%, var(--grass-green3) 100%);\n    transform: rotate(7deg) scaleX(0.5);\n}\n.grass-blade8 {\n    height: 13px; left: 75px;\n    background: linear-gradient(120deg, var(--grass-green1) 50%, var(--grass-green2) 100%);\n    transform: rotate(-12deg) scaleX(0.95);\n}\n.grass-blade9 {\n    height: 17px; left: 93px;\n    background: linear-gradient(180deg, var(--grass-green3) 60%, var(--grass-green1) 100%);\n    transform: rotate(2deg) scaleX(0.7);\n}\n.grass-blade10 {\n    height: 25px; left: 225px;\n    background: linear-gradient(140deg, var(--grass-green2) 60%, var(--grass-green3) 100%);\n    transform: rotate(-4deg) scaleX(1.06);\n}\n.grass-blade11 {\n    height: 14px; left: 247px;\n    background: linear-gradient(175deg, var(--grass-green1) 80%, var(--grass-green3) 100%);\n    transform: rotate(9deg) scaleX(0.77);\n}\n.grass-blade12 {\n    height: 21px; left: 265px;\n    background: linear-gradient(155deg, var(--grass-green2) 60%, var(--grass-green1) 100%);\n    transform: rotate(-15deg) scaleX(0.93);\n}\n\n.character\n{\n    top:10%;\n    width:150px;\n    height:65%;\n    /* border:var(--border-var); */\n    /* background: var(--secondary-color); */\n    z-index: 10;\n}\n.character__head\n{\n    top:0%;\n    width:100%;\n    height:60%;\n    z-index:5;\n    /* border:var(--border-var); */\n    /* background:var(--skin-color,#f6c09b); */\n}\n.character__body\n{\n    position: absolute;\n    top:60%;\n    width:70%;\n    height:50%;\n    /* border:var(--border-var); */\n    left:60%;\n    /* background:var(--body-color,#60295d); */\n    z-index:1;\n}\n.cap\n{\n    position:absolute;\n    top:0%;\n    left:50%;\n    width:100%;\n    height: 60%;\n    /* background:var(--cap-color,#d03e38); */\n    /* border: var(--border-var); */\n    transform:translate(-50%,0%);\n    -webkit-transform:translate(-50%,0%);\n    -moz-transform:translate(-50%,0%);\n    -ms-transform:translate(-50%,0%);\n    -o-transform:translate(-50%,0%);\n    z-index: 10;\n    /* Cap bob animation */\n    animation: cap-bob 10s ease-in-out infinite alternate;\n}\n\n@keyframes cap-bob {\n    0% {\n        transform: translate(-50%, 0%) rotate(-3deg) scale(1);\n    }\n    35% {\n        transform: translate(-50%, -2%) rotate(2deg) scale(1.04);\n    }\n    60% {\n        transform: translate(-50%, 2%) rotate(-2deg) scale(0.98);\n    }\n    100% {\n        transform: translate(-50%, 0%) rotate(2deg) scale(1);\n    }\n}\n\n.cap__top\n{\n    position: absolute;\n    top:0%;\n    left:0%;\n    height:80%;\n    border-top-left-radius: 25px;\n    border-top-right-radius: 25px;\n    /* Subtle top shimmer animation */\n    animation: cap-top-shimmer 2.8s linear infinite alternate;\n}\n\n@keyframes cap-top-shimmer {\n    0% {\n        filter: brightness(1) drop-shadow(0 0 0px #fff0);\n    }\n    60% {\n        filter: brightness(1.05) drop-shadow(0 2px 6px #fff3);\n    }\n    100% {\n        filter: brightness(1) drop-shadow(0 0 0px #fff0);\n    }\n}\n.top--dark\n{\n    width:100%;\n    background: var(--cap-dark-color,#cf3d37);\n\n}\n.top--bright\n{\n    width:60%;\n    background: var(--cap-bright-color,#ed4742);\n}\n.blueRibbon\n{\n    position:absolute;\n    left:70%;\n    top:70%;\n    width:30px;\n    height:10px;\n    background:var(--purple-ribbon,#92418e);\n    border-radius: 2px;\n    -webkit-border-radius: 2px;\n    -moz-border-radius: 2px;\n    -ms-border-radius: 2px;\n    -o-border-radius: 2px;\n}\n.cap__hair\n{\n    position:absolute;\n    left:50%;\n    top:60%;\n    transform:translate(-50%,-50%);\n    -webkit-transform:translate(-50%,-50%);\n    -moz-transform:translate(-50%,-50%);\n    -ms-transform:translate(-50%,-50%);\n    -o-transform:translate(-50%,-50%);\n    width:40px;\n    height:25px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    background:var(--cap-hair-color);\n}\n.cap__yellow\n{\n    position:absolute;\n    left:50%;\n    top:80%;\n    height:10%;\n    border-radius:2px;\n    -webkit-border-radius:2px;\n    -moz-border-radius:2px;\n    -ms-border-radius:2px;\n    -o-border-radius:2px;\n}\n.yellow--dark\n{\n    background: var(--cap-dark-yellow);\n    width:110%;\n    transform:translate(-50%,0%);\n    -webkit-transform:translate(-50%,0%);\n    -moz-transform:translate(-50%,0%);\n    -ms-transform:translate(-50%,0%);\n    -o-transform:translate(-50%,0%);\n}\n.yellow--bright\n{\n    left:-5%;\n    background: var(--cap-bright-yellow);\n    width:65%;\n}\n.cap__bottom\n{\n    position: absolute;\n    top:90%;\n    height:20%;\n}\n.bottom--bright{\n    left:-10%;\n    width:80%;\n    border-radius: 10px;\n    -webkit-border-radius: 10px;\n    -moz-border-radius: 10px;\n    -ms-border-radius: 10px;\n    -o-border-radius: 10px;\n    background: var(--cap-bright-color,#ed4742);\n}\n.bottom--dark\n{\n    left:-5%;\n    width:150%;\n    background: var(--cap-dark-color,#cf3d37); \n}\n.character__face\n{\n    position: absolute;\n    top:60%;\n    left:5%;\n    height:50%;\n    background: var(--skin-dark-color);\n    width:90%;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    z-index: 5;\n}\n.character__face--light\n{\n    position:absolute;\n    left:0%;\n    top:20%;\n    height:50%;\n    width:75%;\n    background:var(--skin-bright-color);\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n    z-index: 5;\n}\n\n.eye--left,\n.eye--right {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n    -webkit-border-radius: 100%;\n    -moz-border-radius: 100%;\n    -ms-border-radius: 100%;\n    -o-border-radius: 100%;\n    background: var(--eye-color);\n    top: 50%;\n    transform: translate(0%, -50%);\n    -webkit-transform: translate(0%, -50%);\n    -moz-transform: translate(0%, -50%);\n    -ms-transform: translate(0%, -50%);\n    -o-transform: translate(0%, -50%);\n    /* Blinking animation */\n    animation: eye-blink 4s infinite;\n    /* Optional: desync eyes just a bit for realism */\n}\n\n@keyframes eye-blink {\n    0%, 92% {\n        height: 10px;\n    }\n    94% {\n        height: 2px;\n    }\n    96% {\n        height: 10px;\n    }\n    100% {\n        height: 10px;\n    }\n}\n\n.eye--left {\n    left: 15%;\n    animation-delay: 0s; /* Sync blink */\n}\n.eye--right{\n    left: 60%;\n    animation-delay: 0.15s; /* Slightly offset blink for realism */\n}\n\n/* Remove eye-patch styles \n.eye--right::before,\n.eye--right::after{\n    display: none;\n}\n*/\n\n.character__ear\n{\n    position: absolute;\n    width:20px;\n    height:20px;\n    top:75%;\n    background: var(--skin-bright-color);\n    z-index:10;\n}\n.ear--left{\n    left:-11%;\n    width:13px;/*Had to do for the layering problem*/\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    background: var(--skin-dark-color);\n}\n.ear--right\n{\n    left:90%;\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n}\n.character__hair\n{\n    position: absolute;\n    top:60%;\n    width:50px;\n    height:45%;\n    background: var(--hair-color);\n    z-index:3;\n}\n.hair--right\n{\n    left:75%;\n    z-index:6;\n}\n.hair--left\n{\n    left:-3%;\n}\n.character__shirt\n{\n    width:90%;\n    height:70%;\n    background: var(--shirt-dark-color);\n    border-radius:10px;\n    -webkit-border-radius:10px;\n    -moz-border-radius:10px;\n    -ms-border-radius:10px;\n    -o-border-radius:10px;\n}\n.character__shirt--bright\n{\n    position: absolute;\n    top:30%;\n    left:0%;\n    width:70%;\n    height:20px;\n    background: var(--shirt-bright-color);\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n.character__coat\n{\n    top:45%;\n    width:100%;\n    height:30%;\n    background:var(--coat-bright-color);\n   border-bottom-left-radius: 10px;\n   border-bottom-right-radius: 10px;\n}\n.character__coat--belt\n{\n    top:-10%;\n    height:10px;\n    width:105%;\n    background: var(--coat-bright-color);\n    border-radius:2px;\n    -webkit-border-radius:2px;\n    -moz-border-radius:2px;\n    -ms-border-radius:2px;\n    -o-border-radius:2px;\n    box-shadow: 0px 5px 0px var(--coat-dark-color);\n}\n.belt__button\n{\n    width: 8px;\n    height: 8px;\n    border-radius:100%;\n    -webkit-border-radius:100%;\n    -moz-border-radius:100%;\n    -ms-border-radius:100%;\n    -o-border-radius:100%;\n    background:var(--button-color,#fff);\n    \n}\n.button--right\n{\n    left:55%;\n}\n.button--left\n{\n    left:25%;\n}\n.belt__button::before{\n    position: absolute;\n    content:'';\n    height:400%;\n    top:0%;\n    width:10px;\n    transform: translate(0%,-100%);\n    -webkit-transform: translate(0%,-100%);\n    -moz-transform: translate(0%,-100%);\n    -ms-transform: translate(0%,-100%);\n    -o-transform: translate(0%,-100%);\n    background: var(--coat-bright-color);\n}\n.character__hand\n{\n    position:absolute;\n    top:15%;\n    height:80%;\n    width:50px;\n    border-top-right-radius: 20px;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    /* Add waving animation to both hands (will only be seen if .hand--right/.hand--left is present) */\n    /* Use transform-origin to create a waving/raise effect! */\n    /* We'll override specifics in .hand--right/.hand--left for separate animations */\n}\n.character__hand::after{\n    position: absolute;\n    content:'';\n    top:70%;\n    left:-10%;\n    width:90%;\n    height:10px;\n    background:inherit;\n    border-radius: 10px;\n    -webkit-border-radius: 10px;\n    -moz-border-radius: 10px;\n    -ms-border-radius: 10px;\n    -o-border-radius: 10px;\n}\n/* Right hand animation */\n.hand--right\n{\n    left:73%;\n    z-index: 20;\n    background: var(--skin-bright-color);\n    /* Let the right hand wave up and down slightly */\n    transform-origin: 25% 15%;\n    /* pivot close to left-top of the \"hand\" */\n    animation: hand-wave-right 40s cubic-bezier(.45,0,.65,1.1) infinite alternate;\n}\n@keyframes hand-wave-right {\n    0% { transform: rotate(-2deg); }\n    10% { transform: rotate(-4deg) translateY(-5px);}\n    30% { transform: rotate(9deg) translateY(-8px);}\n    55% { transform: rotate(-3deg) translateY(2px);}\n    75% { transform: rotate(8deg) translateY(-5px);}\n    100% { transform: rotate(-2deg);}\n}\n\n.hand--left\n{\n    left:-13%;\n    background: var(--skin-dark-color);\n    /* Left hand small-side sway, less dramatic than right */\n    transform-origin: 85% 15%;\n    animation: hand-sway-left 40s cubic-bezier(.48,0,.68,1.1) infinite alternate;\n}\n@keyframes hand-sway-left {\n    0%   { transform: rotate(2deg);}\n    32%  { transform: rotate(-7deg) translateY(-4px);}\n    50%  { transform: rotate(8deg) translateY(0);}\n    72%  { transform: rotate(-5deg) translateY(2px);}\n    100% { transform: rotate(2deg);}\n}\n\n.hand--right::before{\n    position:absolute;\n    content: '';\n    left:20%;\n    top:40%;\n    border-radius:10px;\n    -webkit-border-radius:10px;\n    -moz-border-radius:10px;\n    -ms-border-radius:10px;\n    -o-border-radius:10px;\n    width:60%;\n    height:10px;\n    background: var(--skin-dark-color);\n}\n.character__leg\n{\n    position:absolute;\n    top:65%;\n    height:45%;\n    width:30px;\n    background: var(--coat-bright-color);\n    transform: translate(-50%,0%);\n    -webkit-transform: translate(-50%,0%);\n    -moz-transform: translate(-50%,0%);\n    -ms-transform: translate(-50%,0%);\n    -o-transform: translate(-50%,0%);\n}\n.leg--left\n{\n    left:30%;\n}\n.leg--right\n{\n    left:70%;\n}\n.character__leg::before{\n    position: absolute;\n    content: '';\n    left:-10%;\n    top:65%;\n    width:100%;\n    height:15px;\n    border-top-right-radius: 20px;\n    border-top-left-radius: 20px;\n    background: var(--shoe-color);\n}\n.leg--left::after{\n    position: absolute;\n    content:'';\n    left:0%;\n    top:20%;\n    height: 20%;\n    width:100%;\n    background: var(--coat-dark-color);\n}\n      "
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Character.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container centered",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "floor centered-horizontal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Character.jsx",
                        lineNumber: 725,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grass-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 729,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 730,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 731,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 732,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 733,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 734,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 736,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 737,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 738,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 739,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade11"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 740,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 741,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Character.jsx",
                        lineNumber: 727,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "character centered-horizontal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "character__head centered-horizontal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "top--dark cap__top"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Character.jsx",
                                                lineNumber: 747,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "top--bright cap__top",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cap__hair"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Character.jsx",
                                                    lineNumber: 751,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Character.jsx",
                                                lineNumber: 750,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cap__yellow yellow--dark"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Character.jsx",
                                                lineNumber: 753,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cap__yellow yellow--bright"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Character.jsx",
                                                lineNumber: 754,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bottom--dark cap__bottom"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Character.jsx",
                                                lineNumber: 755,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bottom--bright cap__bottom"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Character.jsx",
                                                lineNumber: 756,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 746,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__hair hair--left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 758,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__hair hair--right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 759,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__face",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "character__face--light",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "character__eye eye--left"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Character.jsx",
                                                    lineNumber: 762,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "character__eye eye--right"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Character.jsx",
                                                    lineNumber: 763,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Character.jsx",
                                            lineNumber: 761,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 760,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__ear ear--left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 766,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__ear ear--right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 767,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 745,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "character__body centered-horizontal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__hand hand--left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 770,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__hand hand--right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 771,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__shirt centered-horizontal",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "character__shirt--bright"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Character.jsx",
                                            lineNumber: 773,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 772,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__coat centered-horizontal",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "character__coat--belt centered-horizontal",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "belt__button button--left centered-horizontal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Character.jsx",
                                                    lineNumber: 777,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "belt__button button--right centered-horizontal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Character.jsx",
                                                    lineNumber: 778,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Character.jsx",
                                            lineNumber: 776,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 775,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__leg leg--left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 781,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__leg leg--right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 782,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 769,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Character.jsx",
                        lineNumber: 744,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Character.jsx",
                lineNumber: 724,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Character;
var _c;
__turbopack_context__.k.register(_c, "Character");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/section/homesection/homeabout/HomeAbout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$background$2d$beams$2d$with$2d$collision$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/background-beams-with-collision.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$encrypted$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/encrypted-text.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Character$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Character.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const HomeAbout = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-screen text-white bg-[#141414]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-0 absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$background$2d$beams$2d$with$2d$collision$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackgroundBeamsWithCollision"], {}, void 0, false, {
                    fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 relative flex flex-col justify-center px-12 w-full min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[120px] font-extrabold leading-[120px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$encrypted$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedText"], {
                            text: "R.V",
                            revealedClassName: "",
                            encryptedClassName: "text-violet-400",
                            revealDelayMs: 30,
                            flipDelayMs: 48
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-[120px] font-extrabold leading-[120px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$encrypted$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedText"], {
                                text: "RAMA VAMSI",
                                revealedClassName: "",
                                encryptedClassName: "text-violet-400",
                                revealDelayMs: 30,
                                flipDelayMs: 48
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 max-w-[900px] text-[20px] font-medium leading-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$encrypted$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedText"], {
                            text: "I AM A WEB DEVELOPER AND DESIGNER | PYTHON PROGRAMMING | REACT DEVELOPER | NEXT.JS DEVELOPER | NODE.JS DEVELOPER |",
                            className: "",
                            revealedClassName: "",
                            encryptedClassName: "text-violet-400",
                            revealDelayMs: 25,
                            flipDelayMs: 50
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    right: 250
                },
                className: "z-20 absolute top-1/2 hidden pointer-events-none md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Character$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HomeAbout;
const __TURBOPACK__default__export__ = HomeAbout;
var _c;
__turbopack_context__.k.register(_c, "HomeAbout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/snippets/homeeventcard/HomeEventCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gr/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/go/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
// Now accepts a "title" prop to show the project/event name on the card front
const HomeEventCard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = (param, ref)=>{
    let { id, frontSrc, frontAlt, backText, skills, title } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "HomeEventCard",
        id: id,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cardWrapper",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flipCardInner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flipCardFront",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flipCardFrontInner shine-overlay",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flipCardFrontBorder",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-2 top-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrProjects"], {
                                            color: "skyblue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                            lineNumber: 17,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                        lineNumber: 16,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                        lineNumber: 19,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rightCornerImage",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrProjects"], {
                                            color: "skyblue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                            lineNumber: 21,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                        lineNumber: 20,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "middleLogo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginLeft: "15px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoProjectSymlink"], {
                                                size: 100
                                            }, void 0, false, {
                                                fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                                lineNumber: 25,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                            lineNumber: 24,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                        lineNumber: 23,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
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
                                            pointerEvents: "none"
                                        },
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                        lineNumber: 30,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                lineNumber: 15,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                            lineNumber: 14,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                        lineNumber: 13,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flipCardBack",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flipCardBackInner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flipCardBackImage",
                                    style: {
                                        position: "relative",
                                        width: "100%",
                                        height: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
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
                                                zIndex: 2
                                            },
                                            children: backText
                                        }, void 0, false, {
                                            fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        skills && skills.length === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "180",
                                            height: "180",
                                            viewBox: "0 0 180 180",
                                            style: {
                                                position: "absolute",
                                                top: "20px",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                zIndex: 3
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: Array.from({
                                                        length: 5
                                                    }).map((_, i)=>{
                                                        const angle = Math.PI * 2 / 5 * i - Math.PI / 2;
                                                        const r = 70;
                                                        const x = 90 + r * Math.cos(angle);
                                                        const y = 90 + r * Math.sin(angle);
                                                        return "".concat(x, ",").concat(y);
                                                    }).join(" "),
                                                    fill: "rgba(255,255,255,0.07)",
                                                    stroke: "#fff",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                                    lineNumber: 109,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: skills.map((skill, i)=>{
                                                        var _skill_value_split_;
                                                        const percent = Math.max(0, Math.min(1, parseInt(((_skill_value_split_ = skill.value.split(":")[1]) === null || _skill_value_split_ === void 0 ? void 0 : _skill_value_split_.trim()) || "0", 10) / 100));
                                                        const angle = Math.PI * 2 / 5 * i - Math.PI / 2;
                                                        const r = 70 * percent;
                                                        const x = 90 + r * Math.cos(angle);
                                                        const y = 90 + r * Math.sin(angle);
                                                        return "".concat(x, ",").concat(y);
                                                    }).join(" "),
                                                    fill: "rgba(0, 153, 255, 0.35)",
                                                    stroke: "#09f",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                skills.map((skill, i)=>{
                                                    var _skill_value_split_, _skill_value_split_1;
                                                    const percent = Math.max(0, Math.min(1, parseInt(((_skill_value_split_ = skill.value.split(":")[1]) === null || _skill_value_split_ === void 0 ? void 0 : _skill_value_split_.trim()) || "0", 10) / 100));
                                                    const angle = Math.PI * 2 / 5 * i - Math.PI / 2;
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
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: x,
                                                                cy: y,
                                                                r: "5",
                                                                fill: "#09f",
                                                                stroke: "#fff",
                                                                strokeWidth: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                                                lineNumber: 179,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: labelX,
                                                                y: labelY,
                                                                textAnchor: "middle",
                                                                alignmentBaseline: "middle",
                                                                fontSize: "0.75rem",
                                                                fill: "#fff",
                                                                style: {
                                                                    fontWeight: "bold",
                                                                    textShadow: "0 1px 2px #000",
                                                                    pointerEvents: "none"
                                                                },
                                                                children: skill.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                                                lineNumber: 188,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: percentX,
                                                                y: percentY,
                                                                textAnchor: "middle",
                                                                alignmentBaseline: "middle",
                                                                fontSize: "0.8rem",
                                                                fill: "#09f",
                                                                style: {
                                                                    fontWeight: "bold",
                                                                    textShadow: "0 1px 2px #000",
                                                                    pointerEvents: "none"
                                                                },
                                                                children: [
                                                                    ((_skill_value_split_1 = skill.value.split(":")[1]) === null || _skill_value_split_1 === void 0 ? void 0 : _skill_value_split_1.trim()) || "0",
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                                                lineNumber: 204,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, "".concat(skill.name, "-").concat(i), true, {
                                                        fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                                        lineNumber: 177,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                            lineNumber: 96,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flipCardBackOverlay"
                                }, void 0, false, {
                                    fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                    lineNumber: 225,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                lineNumber: 12,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
            lineNumber: 11,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = HomeEventCard;
const __TURBOPACK__default__export__ = HomeEventCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "HomeEventCard$forwardRef");
__turbopack_context__.k.register(_c1, "HomeEventCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/utils/animatedtitle/AnimatedTitle.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const AnimatedTitle = (param)=>{
    let { title, containerClass } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedTitle.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "AnimatedTitle.useEffect.ctx": ()=>{
                    const titleAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "100 bottom",
                            end: "center bottom",
                            toggleActions: "play none none reverse"
                        }
                    });
                    titleAnimation.to(".animated-word", {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                        ease: "power2.inOut",
                        stagger: 0.02
                    }, 0);
                }
            }["AnimatedTitle.useEffect.ctx"], containerRef);
            return ({
                "AnimatedTitle.useEffect": ()=>ctx.revert()
            })["AnimatedTitle.useEffect"]; // Clean up on unmount
        }
    }["AnimatedTitle.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("animated-title", containerClass),
        children: title.split("<br />").map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-center flex-wrap gap-2 px-10 max-w-full md:gap-3",
                children: line.split(" ").map((word, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animated-word",
                        dangerouslySetInnerHTML: {
                            __html: word
                        }
                    }, idx, false, {
                        fileName: "[project]/src/components/utils/animatedtitle/AnimatedTitle.jsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, index, false, {
                fileName: "[project]/src/components/utils/animatedtitle/AnimatedTitle.jsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/utils/animatedtitle/AnimatedTitle.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedTitle, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = AnimatedTitle;
const __TURBOPACK__default__export__ = AnimatedTitle;
var _c;
__turbopack_context__.k.register(_c, "AnimatedTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/section/projectssection/Projects.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cardProjects",
    ()=>cardProjects,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snippets$2f$homeeventcard$2f$HomeEventCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/snippets/homeeventcard/HomeEventCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$animatedtitle$2f$AnimatedTitle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/utils/animatedtitle/AnimatedTitle.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// Register GSAP plugins
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
// Each project now includes a pentagon graph data for skills used in that project
const cardProjects = [
    {
        title: "ShopEase E-commerce",
        description: "A mini e-commerce app using Java Servlets, JDBC, and MySQL with real-time cart updates.",
        details: "ShopEase is a streamlined e-commerce application built to showcase essential backend concepts. It features user login, manages shopping carts across sessions, and connects directly to a MySQL database using JDBC for handling products and orders. Through this project, I gained hands-on experience with server-side Java programming and database architecture.",
        image: "/shopease.jpeg",
        skills: [
            {
                name: "Java Servlets",
                value: "Java Servlets: 90"
            },
            {
                name: "JDBC",
                value: "JDBC: 85"
            },
            {
                name: "MySQL",
                value: "MySQL: 15"
            },
            {
                name: "JavaScript",
                value: "JavaScript: 70"
            },
            {
                name: "CSS",
                value: "HTML/CSS: 85"
            }
        ]
    },
    {
        title: "Avasa Foundation Website (NGO)",
        description: "Developed a modern, responsive website for Avasa Foundation using Next.js, React, and Tailwind CSS.",
        details: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "For the Avasa Foundation NGO website, I built a modern, responsive web application using React and the Next.js framework. The project leverages both JavaScript and TypeScript for robust, type-safe code. I utilized Tailwind CSS for rapid and consistent styling, ensuring a clean and accessible UI. Animations and interactive effects were implemented with GSAP to enhance user engagement. The site structure is built with semantic HTML, and the overall stack demonstrates my ability to integrate advanced frontend technologies for a real-world, impactful project. Visit:",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://avasafoundation.org",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-blue-400 underline hover:text-blue-600",
                    children: "avasafoundation.org"
                }, void 0, false, {
                    fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true),
        image: "/AVASA.jpg",
        live: "https://avasafoundation.org/",
        skills: [
            {
                name: "Next.js",
                value: "Next.js: 90"
            },
            {
                name: "React",
                value: "React: 90"
            },
            {
                name: "TypeScript",
                value: "TypeScript: 10"
            },
            {
                name: "Tailwind CSS",
                value: "Tailwind CSS: 85"
            },
            {
                name: "GSAP",
                value: "GSAP: 75"
            }
        ]
    },
    {
        title: "Terminal Automation",
        description: "A Python menu-driven tool for  automation: send emails, WhatsApp messages, scrape web data etc.",
        details: "Terminal Automation is a Python-based tool that streamlines common tasks through a simple command-line interface. It automates actions like sending emails, scheduling WhatsApp messages, scraping web data, and converting text to speech—all from the terminal. The project uses Python libraries and APIs to make repetitive workflows more efficient.\n\nChallenges & Solutions:\nAutomating WhatsApp Web was tricky due to frequent UI changes. I used Selenium WebDriver with XPATH selectors and explicit waits to make the automation more reliable.",
        image: "/soon.png",
        skills: [
            {
                name: "Python",
                value: "Python: 95"
            },
            {
                name: "API Integration",
                value: "API Integration: 81"
            },
            {
                name: "CLI Tools",
                value: "CLI Tools: 70"
            },
            {
                name: "Web Scraping",
                value: "Web Scraping: 70"
            },
            {
                name: "Automation",
                value: "Automation: 95"
            }
        ]
    },
    {
        title: "Hackathon : cognizant",
        description: "Participated in a 3-hour hackathon where strong core concepts were essential to quickly build a working solution.",
        details: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "I participated in the",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-blue-400",
                    children: "Snap Syntax"
                }, void 0, false, {
                    fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                " ",
                "hackathon, where I built a website as per the requirements using only HTML and CSS. This experience challenged me to quickly design and implement a functional and visually appealing site within a limited timeframe, relying solely on core web technologies.",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "visit: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://snap-cogni2047756.vercel.app",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-blue-400 underline hover:text-blue-600",
                            children: "CodeSprint Hackathon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true),
        image: "/4.jpg",
        skills: [
            {
                name: "HTML",
                value: "HTML: 80"
            },
            {
                name: "CSS",
                value: "CSS: 75"
            },
            {
                name: "CSS",
                value: "JavaScript: 85"
            },
            {
                name: "HTML & CSS",
                value: "HTML & CSS: 90"
            },
            {
                name: "HTML",
                value: "Teamwork: 90"
            }
        ]
    }
];
;
// Create an array of backText for each card using the project descriptions
const cardBackTexts = cardProjects.map((project)=>project.description);
const Projects = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((props, ref)=>{
    _s();
    const projectsContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const zoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Modal state
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalProject, setModalProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>{
            // Zoom animation trigger
            const zoom = zoomRef.current;
            if (zoom) {
                zoom.classList.add("animate-zoomOut");
                const timeout = setTimeout({
                    "Projects.useEffect.timeout": ()=>{
                        zoom.style.display = "none";
                    }
                }["Projects.useEffect.timeout"], 1500); // hides after animation
                return ({
                    "Projects.useEffect": ()=>clearTimeout(timeout)
                })["Projects.useEffect"];
            }
        }
    }["Projects.useEffect"], []);
    // Handler for card click
    const handleCardClick = (project)=>{
        setModalProject(project);
        setModalOpen(true);
    };
    // Handler for closing modal
    const handleCloseModal = (e)=>{
        // Only close if clicking on overlay or close button
        if (e.target.classList.contains("project-modal-overlay") || e.target.classList.contains("project-modal-close")) {
            setModalOpen(false);
            setModalProject(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-1c157147beeac4a5" + " " + "relative min-h-screen text-white bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "zoom",
                ref: zoomRef,
                className: "jsx-1c157147beeac4a5" + " " + "z-50 fixed inset-0 flex items-center justify-center bg-black zoom-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "jsx-1c157147beeac4a5" + " " + "m-0 text-[clamp(2.5rem,10vw,8rem)] leading-[1.1]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-1c157147beeac4a5" + " " + "inline-block tracking-[0.1em] break-words",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-1c157147beeac4a5" + " " + "text-rose-600",
                                children: "L"
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-1c157147beeac4a5" + " " + "text-orange-400",
                                children: "e"
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-1c157147beeac4a5" + " " + "text-yellow-400",
                                children: "t"
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-1c157147beeac4a5" + " " + "text-green-500",
                                children: "'"
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-1c157147beeac4a5" + " " + "text-blue-500",
                                children: "s"
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-1c157147beeac4a5" + " " + "text-purple-700",
                                children: " g"
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-1c157147beeac4a5" + " " + "text-pink-500",
                                children: "o"
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                lineNumber: 166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: projectsContainer,
                className: "jsx-1c157147beeac4a5" + " " + "HomeEventSec",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$animatedtitle$2f$AnimatedTitle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Events Overview",
                        containerClass: "mt-5 !text-black text-center"
                    }, void 0, false, {
                        fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    cardProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "inline-block"
                            },
                            onClick: ()=>handleCardClick(project),
                            tabIndex: 0,
                            role: "button",
                            "aria-label": "Show details for ".concat(project.title),
                            className: "jsx-1c157147beeac4a5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snippets$2f$homeeventcard$2f$HomeEventCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "card-".concat(index + 1),
                                frontSrc: "/img/amity_logo.png",
                                frontAlt: "Card Image",
                                backText: project.description,
                                title: project.title,
                                skills: project.skills,
                                ref: (el)=>{
                                    if (ref && typeof ref === "object" && ref.current) {
                                        ref.current[index] = el;
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                lineNumber: 186,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            modalOpen && modalProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleCloseModal,
                style: {
                    animation: "fadeIn 0.2s"
                },
                className: "jsx-1c157147beeac4a5" + " " + "z-[100] fixed inset-0 flex items-center justify-center project-modal-overlay bg-black bg-opacity-70",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        animation: "modalPop 0.25s",
                        maxWidth: "90vw",
                        maxHeight: "90vh",
                        overflowY: "auto"
                    },
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-1c157147beeac4a5" + " " + "relative project-modal-content p-6 max-w-lg w-full text-black bg-white rounded-lg shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCloseModal,
                            "aria-label": "Close",
                            style: {
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontWeight: "bold",
                                zIndex: 10
                            },
                            className: "jsx-1c157147beeac4a5" + " " + "absolute top-2 right-2 project-modal-close text-2xl text-gray-700 hover:text-black",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        modalProject.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: modalProject.image,
                            alt: modalProject.title,
                            style: {
                                maxHeight: "200px",
                                objectFit: "cover"
                            },
                            className: "jsx-1c157147beeac4a5" + " " + "object-cover mb-4 w-90 h-48 rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                            lineNumber: 248,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-1c157147beeac4a5" + " " + "mb-2 text-2xl font-bold",
                            children: modalProject.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-1c157147beeac4a5" + " " + "mb-3",
                            children: modalProject.details || modalProject.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                    lineNumber: 223,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/section/projectssection/Projects.jsx",
                lineNumber: 218,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "1c157147beeac4a5",
                children: "@keyframes zoomOut{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(12)}}.animate-zoomOut.jsx-1c157147beeac4a5{animation:3s forwards zoomOut}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes modalPop{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.project-modal-overlay.jsx-1c157147beeac4a5{animation:.2s fadeIn}.project-modal-content.jsx-1c157147beeac4a5{animation:.25s modalPop}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/section/projectssection/Projects.jsx",
        lineNumber: 164,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "K4r1jNzxpNk4kZUzYo/f0HsBIwk=")), "K4r1jNzxpNk4kZUzYo/f0HsBIwk=");
_c1 = Projects;
const __TURBOPACK__default__export__ = Projects;
var _c, _c1;
__turbopack_context__.k.register(_c, "Projects$forwardRef");
__turbopack_context__.k.register(_c1, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/LoaderGallery.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoaderGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
// List of images (use placeholder images)
const images = [
    "/excel.png",
    "/gsap.png",
    "/python.png",
    "/react.png",
    "/THINK.png",
    "/html.png",
    "/java.png",
    "/PP.PNG",
    "/SQL.PNG"
];
// Generates the CSS for the nth-child transforms (to place the figures around the carousel)
const carouselFigureStyle = (idx)=>{
    const deg = idx * 40;
    return {
        transform: "rotateY(".concat(deg, "deg) translateZ(288px)")
    };
};
function LoaderGallery() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "60vh",
            background: "#141414"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-6 text-[28px] font-extrabold leading-[32px] text-center uppercase",
                style: {
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                    marginBottom: "3.5rem"
                },
                children: "SKILLS IN REAL-TIME I HAVE"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loader-gallery-container",
                style: {
                    margin: "4% auto",
                    width: 210,
                    height: 140,
                    position: "relative",
                    perspective: "800px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader-gallery-carousel",
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        transformStyle: "preserve-3d",
                        animation: "loader-gallery-rotation 20s infinite linear"
                    },
                    children: images.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            style: {
                                display: "block",
                                position: "absolute",
                                width: 200,
                                height: 120,
                                left: 10,
                                top: 10,
                                background: "transparent",
                                overflow: "visible",
                                ...carouselFigureStyle(idx)
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "violet-gradient-border",
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    padding: "4px",
                                    borderRadius: "18px",
                                    background: "black",
                                    boxShadow: "0 0 15px #e040fb33",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: src,
                                    alt: "gallery-".concat(idx + 1),
                                    style: {
                                        WebkitFilter: "grayscale(1)",
                                        filter: "grayscale(1)",
                                        cursor: "pointer",
                                        transition: "all .5s ease",
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain"
                                    },
                                    // grayscale to color & scale effect on hover
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.WebkitFilter = "grayscale(0)";
                                        e.currentTarget.style.filter = "grayscale(0)";
                                        e.currentTarget.style.transform = "scale(1.2, 1.2)";
                                        e.currentTarget.style.border = "none"; // Explicitly ensure border is none on hover
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.WebkitFilter = "grayscale(1)";
                                        e.currentTarget.style.filter = "grayscale(1)";
                                        e.currentTarget.style.transform = "scale(1, 1)";
                                        e.currentTarget.style.border = "none"; // Explicitly ensure border is none on mouse out
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "\n        @import url('https://fonts.googleapis.com/css?family=Anaheim');\n\n        .loader-gallery-container {\n          /* margin, width, height, relative, perspective set inline */\n        }\n        .loader-gallery-carousel:hover {\n          animation-play-state: paused;\n        }\n        @keyframes loader-gallery-rotation {\n          from {\n            transform: rotateY(0deg);\n          }\n          to {\n            transform: rotateY(360deg);\n          }\n        }\n        body {\n          background-color: #141414 !important;\n          background-image: none !important;\n        }\n        .violet-gradient-border {\n          /* border and box-shadow set in inline style */\n        }\n      "
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/LoaderGallery.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = LoaderGallery;
var _c;
__turbopack_context__.k.register(_c, "LoaderGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/DigitalClock.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DigitalClock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LoaderGallery$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LoaderGallery.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const clockCSS = "\nbody {\n  background: #141414 !important;  \n}\n.digital-clock-gallery-wrapper {\n  background: #141414 !important;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  min-height: 800px;\n  background: #141414;\n  gap: 200px;\n  position: relative;\n  z-index: 1;\n}\n#perspective {\n  background: #141414 !important;\n  margin-left: 5rem;\n  height: 674px;\n  perspective-origin: 450px -50px;\n  perspective: 600px;\n  position: relative;\n  min-width: 600px;\n  max-width: 800px;\n  flex-shrink: 0;\n}\n#clock {\n  display: flex;\n  align-items: center;\n  transform: rotateY(24deg) rotateX(-3deg) translate3d(180px, 310px, -20px);\n}\n.digit {\n  display: inline-block;\n  margin: 0 11px 1px 16px;\n}\n.separator {\n  margin: 0 10px;\n}\n.digit.no-gap {\n  margin-right: 1 !important;\n  margin-left: 0 !important;\n}\n.separator.no-gap {\n  margin-right: 1 !important;\n  margin-left: 0 !important;\n}\n.cell {\n  display: inline-block;\n  width: 29px;\n  height: 29px;\n  opacity: 0.05;\n}\n.active {\n  background: linear-gradient(135deg, #8f00ff 0%, #e040fb 100%);\n  box-shadow: 0 0 15px #e040fb;\n  opacity: 10;\n  transition: opacity 0.5s;\n}\n/* Add a class for the text under the clock, matching the 3D angle */\n.clock-caption {\n  margin-top: 30px;\n  text-align: center;\n  color: #fff;\n  font-size: 2rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  transform: rotateY(24deg) rotateX(-3deg) translate3d(180px, 325px, -40px);\n  /* Perspective on the parent handles the 3D effect */\n  text-shadow: 0 4px 20px #8f00ff77, 0 1px 12px #000c;\n  user-select: none;\n  pointer-events: none;\n}\n";
const DIGIT_LAYOUT = [
    [
        {
            className: "active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"
        },
        {
            className: "active cell d0 d2 d3 d5 d6 d7 d8 d9"
        },
        {
            className: "active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"
        }
    ],
    [
        {
            className: "active cell d0 d4 d5 d6 d8 d9"
        },
        {
            className: "cell"
        },
        {
            className: "active cell d0 d1 d2 d3 d4 d7 d8 d9"
        }
    ],
    [
        {
            className: "active cell d0 d4 d5 d6 d8 d9"
        },
        {
            className: "cell"
        },
        {
            className: "active cell d0 d1 d2 d3 d4 d7 d8 d9"
        }
    ],
    [
        {
            className: "active cell d0 d2 d3 d4 d5 d6 d8 d9"
        },
        {
            className: "active cell d2 d3 d4 d5 d6 d8 d9"
        },
        {
            className: "active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"
        }
    ],
    [
        {
            className: "active cell d0 d2 d6 d8"
        },
        {
            className: "cell"
        },
        {
            className: "active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"
        }
    ],
    [
        {
            className: "active cell d0 d2 d6 d8"
        },
        {
            className: "cell"
        },
        {
            className: "active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"
        }
    ],
    [
        {
            className: "active cell d0 d2 d3 d5 d6 d8 d9"
        },
        {
            className: "active cell d0 d2 d3 d5 d6 d8 d9"
        },
        {
            className: "active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"
        }
    ]
];
const SEPARATOR_LAYOUT = [
    [
        {
            className: "cell"
        }
    ],
    [
        {
            className: "cell"
        }
    ],
    [
        {
            className: "active cell"
        }
    ],
    [
        {
            className: "cell"
        }
    ],
    [
        {
            className: "active cell"
        }
    ],
    [
        {
            className: "cell"
        }
    ],
    [
        {
            className: "cell"
        }
    ]
];
const digitIDs = [
    "h1",
    "h2",
    "sep",
    "m1",
    "m2",
    "sep",
    "s1",
    "s2"
];
const getDigitVal = (obj, id)=>{
    if (id === "h1") return obj.h1;
    if (id === "h2") return obj.h2;
    if (id === "m1") return obj.m1;
    if (id === "m2") return obj.m2;
    if (id === "s1") return obj.s1;
    if (id === "s2") return obj.s2;
    return null;
};
function DigitalClock() {
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        h1: 0,
        h2: 0,
        m1: 0,
        m2: 0,
        s1: 0,
        s2: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DigitalClock.useEffect": ()=>{
            const updateClock = {
                "DigitalClock.useEffect.updateClock": ()=>{
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
                        s2: s % 10
                    });
                }
            }["DigitalClock.useEffect.updateClock"];
            updateClock();
            const interval = setInterval(updateClock, 1000);
            return ({
                "DigitalClock.useEffect": ()=>clearInterval(interval)
            })["DigitalClock.useEffect"];
        }
    }["DigitalClock.useEffect"], []);
    function DigitRows(param) {
        let { digit } = param;
        return DIGIT_LAYOUT.map((row, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: row.map((cell, cellIdx)=>{
                    let classNames = cell.className || "";
                    if (classNames.indexOf("active") >= 0) {
                        const allowed = classNames.match(/d[0-9]/g) || [];
                        if (allowed.length > 0 && !allowed.includes("d".concat(digit))) {
                            classNames = classNames.replace(/\bactive\b/, "").replace(/\s+/, " ");
                        }
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: classNames.trim()
                    }, cellIdx, false, {
                        fileName: "[project]/src/components/ui/DigitalClock.jsx",
                        lineNumber: 184,
                        columnNumber: 18
                    }, this);
                })
            }, rowIdx, false, {
                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                lineNumber: 173,
                columnNumber: 7
            }, this));
    }
    function Separator() {
        return SEPARATOR_LAYOUT.map((row, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: row.map((cell, cellIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: cell.className
                    }, cellIdx, false, {
                        fileName: "[project]/src/components/ui/DigitalClock.jsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this))
            }, rowIdx, false, {
                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                lineNumber: 192,
                columnNumber: 7
            }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: clockCSS
            }, void 0, false, {
                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "digital-clock-gallery-wrapper",
                style: {
                    height: "60vh",
                    position: "relative",
                    zIndex: 1,
                    background: "#141414"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "perspective",
                        style: {
                            position: "relative",
                            zIndex: 2,
                            background: "#141414"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "clock",
                                children: digitIDs.map((id, idx, arr)=>{
                                    // Remove gap after the hour-minute separator
                                    // idx=2 is the first separator (: between hours and mins)
                                    // Remove margin-right for "h2" (idx=1) and margin-left/right for first "sep" (idx=2) and for min1 (idx=3)
                                    if (id === "sep" && idx === 2) {
                                        // This is the hour-minute separator
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "digit separator no-gap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                                lineNumber: 225,
                                                columnNumber: 21
                                            }, this)
                                        }, "sep-".concat(idx), false, {
                                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this);
                                    } else if (idx === 1 /* h2 */ ) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: id,
                                            className: "digit no-gap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DigitRows, {
                                                digit: getDigitVal(time, id)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this)
                                        }, id, false, {
                                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this);
                                    } else if (idx === 3 /* m1 */ ) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: id,
                                            className: "digit no-gap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DigitRows, {
                                                digit: getDigitVal(time, id)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, this)
                                        }, id, false, {
                                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this);
                                    } else if (id === "sep") {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "digit separator",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                                lineNumber: 245,
                                                columnNumber: 21
                                            }, this)
                                        }, "sep-".concat(idx), false, {
                                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this);
                                    } else {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: id,
                                            className: "digit",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DigitRows, {
                                                digit: getDigitVal(time, id)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                                lineNumber: 251,
                                                columnNumber: 21
                                            }, this)
                                        }, id, false, {
                                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                            lineNumber: 250,
                                            columnNumber: 19
                                        }, this);
                                    }
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clock-caption",
                                children: '"LEARNING DOESN’T PAUSE"'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/DigitalClock.jsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            marginTop: "15rem",
                            marginRight: "25rem",
                            zIndex: 3,
                            background: "#141414"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LoaderGallery$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/DigitalClock.jsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DigitalClock, "bwKeCLUmig15gCv3Bj5rtMLBFrU=");
_c = DigitalClock;
var _c;
__turbopack_context__.k.register(_c, "DigitalClock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/section/homesection/homeabout/HomeSecond.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DigitalClock$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/DigitalClock.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const HomeSecond = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            minHeight: "100vh",
            background: "#141414"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DigitalClock$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/section/homesection/homeabout/HomeSecond.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/section/homesection/homeabout/HomeSecond.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HomeSecond;
const __TURBOPACK__default__export__ = HomeSecond;
var _c;
__turbopack_context__.k.register(_c, "HomeSecond");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$section$2f$homesection$2f$homeabout$2f$HomeAbout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/section/homesection/homeabout/HomeAbout.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$section$2f$projectssection$2f$Projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/section/projectssection/Projects.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Character$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Character.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DigitalClock$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/DigitalClock.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LoaderGallery$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LoaderGallery.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$section$2f$homesection$2f$homeabout$2f$HomeSecond$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/section/homesection/homeabout/HomeSecond.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Home() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
             // only run on client
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "Home.useEffect": (t)=>t
                }["Home.useEffect"],
                smooth: true
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "Home.useEffect": ()=>lenis.destroy()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$section$2f$homesection$2f$homeabout$2f$HomeAbout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$section$2f$homesection$2f$homeabout$2f$HomeSecond$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_8dd6cfa0._.js.map