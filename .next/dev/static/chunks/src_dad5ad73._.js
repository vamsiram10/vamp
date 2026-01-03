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
const BackgroundBeamsWithCollision = ({ children, className })=>{
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-250 sm:h-[51rem] md:h-[51rem] lg:h-[60rem] xl:h-[51rem] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden", // h-screen if you want bigger
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
const CollisionMechanism = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_s1(({ parentRef, containerRef, beamOptions = {} }, ref)=>{
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
                        left: `${collision.coordinates.x}px`,
                        top: `${collision.coordinates.y}px`,
                        transform: "translate(-50%, -50%)"
                    }
                }, `${collision.coordinates.x}-${collision.coordinates.y}`, false, {
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
const EncryptedText = ({ text, className, revealDelayMs = 100, charset = DEFAULT_CHARSET, flipDelayMs = 100, encryptedClassName, revealedClassName })=>{
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
            const displayChar = isRevealed ? char : char === " " ? " " : scrambleCharsRef.current[index] ?? generateRandomCharacter(charset);
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
                children: `
        :root{
    --floor-color: rgba(255,255,255,0.7);
    --border-color:#111;
    --skin-color:#f6c09b;
    --border-var:1px solid #111;    
    --cap-bright-color:#ed4742;
    --cap-dark-color:#cf3d37;
    --purple-ribbon:#92418e;
    --cap-dark-yellow: #f6a63b;
    --cap-bright-yellow:#fbc93c;
    --cap-hair-color:#05243a;
    --skin-dark-color:#ed927d;
    --skin-bright-color:#f7bf9a;
    --eye-color:#052438;
    --eye-patch-color:#ed686a;
    --hair-color:#05243a;
    --shirt-bright-color:#3a6cb5;
    --shirt-dark-color:#293a95;
    --coat-dark-color:#672c65;
    --coat-bright-color:#92418e;
    --shoe-color:#05243a;
    --button-color:#fff;
    --grass-green1: #63c74d;
    --grass-green2: #4ea03c;
    --grass-green3: #9ada7a;
}
*
{
}
body
{
    background:#f0f0f0;
    font-family: 'Roboto',sans-serif;    
}
.credits
{
position: absolute;
left:60%;
top:80%;
padding-top:20px;
color:#333;
text-align:center;
}
#heading
{
    text-align: center;
    font-size: 1.5em;
    font-weight: 100;
    color:#333;
    padding: 10px;
}
.color-container
{
   position:absolute;
   left:5%;
   top:0%;
   height:100%;
   width:500px;
   overflow: auto;
   box-shadow:0px 2px 30px rgba(0,0,0,0.2);
  z-index:100;
}
.colors
{
    display: table;
    height:100px;
}
.color{
   
    display: table-row;
    height:50px;
}
.color__name,.color__code,.color__palette
{
    display: table-cell;
    padding:10px;
    vertical-align: middle;
}
.color__palette input[type=color]
{
    outline: none;
    width:25px;
    height:25px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
}
#color__code{
    padding: 20px;
    border:none;
    background: #f0f0f0;
}
.centered
{
    position:absolute;
    left:70%;
    top:50%;
    transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    -o-transform:translate(-50%,-50%);
}
.centered-horizontal
{
    position: absolute;
    left:50%;
    transform: translate(-50%,0%);
    -webkit-transform: translate(-50%,0%);
    -moz-transform: translate(-50%,0%);
    -ms-transform: translate(-50%,0%);
    -o-transform: translate(-50%,0%);
}
.container
{
    position:absolute;
    width:600px;
    height:400px;
}
.floor
{
    top:84%;
    width:200px;
    height:5px;
    background: var(--floor-color,#cbdde7);
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
    position: absolute;
    left:50%;
    transform: translate(-50%,0%);
    z-index: 1;
}

.grass-group {
    position: absolute;
    top: 82%;
    width: 300px;
    height: 30px;
    left: 50%;
    transform: translate(-50%,0%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    z-index: 2;
}
.grass-blade {
    position: absolute;
    bottom: 0;
    width: 6px;
    border-radius: 4px 4px 12px 12px;
}
.grass-blade1 {
    height: 18px; left: 20px;
    background: linear-gradient(160deg, var(--grass-green2) 70%, var(--grass-green1) 100%);
    transform: rotate(-10deg) scaleX(1.1);
    box-shadow: 2px 0 4px 0 rgba(76,175,80,0.2);
}
.grass-blade2 {
    height: 13px; left: 33px;
    background: linear-gradient(120deg, var(--grass-green3), var(--grass-green2) 85%);
    transform: rotate(13deg) scaleX(.85);
}
.grass-blade3 {
    height: 20px; left: 44px;
    background: linear-gradient(170deg, var(--grass-green1) 40%, var(--grass-green3) 100%);
    transform: rotate(-5deg) scaleX(0.87);
}
.grass-blade4 {
    height: 24px; left: 180px;
    background: linear-gradient(170deg, var(--grass-green2) 60%, var(--grass-green1) 100%);
    transform: rotate(10deg) scaleX(1.12);
}
.grass-blade5 {
    height: 15px; left: 196px;
    background: linear-gradient(150deg, var(--grass-green3), var(--grass-green1) 85%);
    transform: rotate(-7deg) scaleX(.75);
}
.grass-blade6 {
    height: 17px; left: 206px;
    background: linear-gradient(180deg, var(--grass-green1) 70%, var(--grass-green3) 100%);
    transform: rotate(-14deg) scaleX(1.03);
}
.grass-blade7 {
    height: 10px; left: 60px;
    background: linear-gradient(170deg, var(--grass-green2) 30%, var(--grass-green3) 100%);
    transform: rotate(7deg) scaleX(0.5);
}
.grass-blade8 {
    height: 13px; left: 75px;
    background: linear-gradient(120deg, var(--grass-green1) 50%, var(--grass-green2) 100%);
    transform: rotate(-12deg) scaleX(0.95);
}
.grass-blade9 {
    height: 17px; left: 93px;
    background: linear-gradient(180deg, var(--grass-green3) 60%, var(--grass-green1) 100%);
    transform: rotate(2deg) scaleX(0.7);
}
.grass-blade10 {
    height: 25px; left: 225px;
    background: linear-gradient(140deg, var(--grass-green2) 60%, var(--grass-green3) 100%);
    transform: rotate(-4deg) scaleX(1.06);
}
.grass-blade11 {
    height: 14px; left: 247px;
    background: linear-gradient(175deg, var(--grass-green1) 80%, var(--grass-green3) 100%);
    transform: rotate(9deg) scaleX(0.77);
}
.grass-blade12 {
    height: 21px; left: 265px;
    background: linear-gradient(155deg, var(--grass-green2) 60%, var(--grass-green1) 100%);
    transform: rotate(-15deg) scaleX(0.93);
}

.character
{
    top:10%;
    width:150px;
    height:65%;
    z-index: 10;
}
.character__head
{
    top:0%;
    width:100%;
    height:60%;
    z-index:5;
}
.character__body
{
    position: absolute;
    top:60%;
    width:70%;
    height:50%;
    left:60%;
    z-index:1;
}
.cap
{
    position:absolute;
    top:0%;
    left:50%;
    width:100%;
    height: 60%;
    transform:translate(-50%,0%);
    -webkit-transform:translate(-50%,0%);
    -moz-transform:translate(-50%,0%);
    -ms-transform:translate(-50%,0%);
    -o-transform:translate(-50%,0%);
    z-index: 10;
    animation: cap-bob 10s ease-in-out infinite alternate;
}

@keyframes cap-bob {
    0% {
        transform: translate(-50%, 0%) rotate(-3deg) scale(1);
    }
    35% {
        transform: translate(-50%, -2%) rotate(2deg) scale(1.04);
    }
    60% {
        transform: translate(-50%, 2%) rotate(-2deg) scale(0.98);
    }
    100% {
        transform: translate(-50%, 0%) rotate(2deg) scale(1);
    }
}

.cap__top
{
    position: absolute;
    top:0%;
    left:0%;
    height:80%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    animation: cap-top-shimmer 2.8s linear infinite alternate;
}

@keyframes cap-top-shimmer {
    0% {
        filter: brightness(1) drop-shadow(0 0 0px #fff0);
    }
    60% {
        filter: brightness(1.05) drop-shadow(0 2px 6px #fff3);
    }
    100% {
        filter: brightness(1) drop-shadow(0 0 0px #fff0);
    }
}
.top--dark
{
    width:100%;
    background: var(--cap-dark-color,#cf3d37);

}
.top--bright
{
    width:60%;
    background: var(--cap-bright-color,#ed4742);
}
.blueRibbon
{
    position:absolute;
    left:70%;
    top:70%;
    width:30px;
    height:10px;
    background:var(--purple-ribbon,#92418e);
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
}
.cap__hair
{
    position:absolute;
    left:50%;
    top:60%;
    transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    -o-transform:translate(-50%,-50%);
    width:40px;
    height:25px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background:var(--cap-hair-color);
}
.cap__yellow
{
    position:absolute;
    left:50%;
    top:80%;
    height:10%;
    border-radius:2px;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    -ms-border-radius:2px;
    -o-border-radius:2px;
}
.yellow--dark
{
    background: var(--cap-dark-yellow);
    width:110%;
    transform:translate(-50%,0%);
    -webkit-transform:translate(-50%,0%);
    -moz-transform:translate(-50%,0%);
    -ms-transform:translate(-50%,0%);
    -o-transform:translate(-50%,0%);
}
.yellow--bright
{
    left:-5%;
    background: var(--cap-bright-yellow);
    width:65%;
}
.cap__bottom
{
    position: absolute;
    top:90%;
    height:20%;
}
.bottom--bright{
    left:-10%;
    width:80%;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    background: var(--cap-bright-color,#ed4742);
}
.bottom--dark
{
    left:-5%;
    width:150%;
    background: var(--cap-dark-color,#cf3d37); 
}
.character__face
{
    position: absolute;
    top:60%;
    left:5%;
    height:50%;
    background: var(--skin-dark-color);
    width:90%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 5;
}
.character__face--light
{
    position:absolute;
    left:0%;
    top:20%;
    height:50%;
    width:75%;
    background:var(--skin-bright-color);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 5;
}

.eye--left,
.eye--right {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    background: var(--eye-color);
    top: 50%;
    transform: translate(0%, -50%);
    -webkit-transform: translate(0%, -50%);
    -moz-transform: translate(0%, -50%);
    -ms-transform: translate(0%, -50%);
    -o-transform: translate(0%, -50%);
    animation: eye-blink 4s infinite;
}

@keyframes eye-blink {
    0%, 92% {
        height: 10px;
    }
    94% {
        height: 2px;
    }
    96% {
        height: 10px;
    }
    100% {
        height: 10px;
    }
}

.eye--left {
    left: 15%;
    animation-delay: 0s;
}
.eye--right{
    left: 60%;
    animation-delay: 0.15s;
}

.character__ear
{
    position: absolute;
    width:20px;
    height:20px;
    top:75%;
    background: var(--skin-bright-color);
    z-index:10;
}
.ear--left{
    left:-11%;
    width:13px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: var(--skin-dark-color);
}
.ear--right
{
    left:90%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
.character__hair
{
    position: absolute;
    top:60%;
    width:50px;
    height:45%;
    background: var(--hair-color);
    z-index:3;
}
.hair--right
{
    left:75%;
    z-index:6;
}
.hair--left
{
    left:-3%;
}
.character__shirt
{
    width:90%;
    height:70%;
    background: var(--shirt-dark-color);
    border-radius:10px;
    -webkit-border-radius:10px;
    -moz-border-radius:10px;
    -ms-border-radius:10px;
    -o-border-radius:10px;
}
.character__shirt--bright
{
    position: absolute;
    top:30%;
    left:0%;
    width:70%;
    height:20px;
    background: var(--shirt-bright-color);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.character__coat
{
    top:45%;
    width:100%;
    height:30%;
    background:var(--coat-bright-color);
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
}
.character__coat--belt
{
    top:-10%;
    height:10px;
    width:105%;
    background: var(--coat-bright-color);
    border-radius:2px;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    -ms-border-radius:2px;
    -o-border-radius:2px;
    box-shadow: 0px 5px 0px var(--coat-dark-color);
}
.belt__button
{
    width: 8px;
    height: 8px;
    border-radius:100%;
    -webkit-border-radius:100%;
    -moz-border-radius:100%;
    -ms-border-radius:100%;
    -o-border-radius:100%;
    background:var(--button-color,#fff);
    
}
.button--right
{
    left:55%;
}
.button--left
{
    left:25%;
}
.belt__button::before{
    position: absolute;
    content:'';
    height:400%;
    top:0%;
    width:10px;
    transform: translate(0%,-100%);
    -webkit-transform: translate(0%,-100%);
    -moz-transform: translate(0%,-100%);
    -ms-transform: translate(0%,-100%);
    -o-transform: translate(0%,-100%);
    background: var(--coat-bright-color);
}
.character__hand
{
    position:absolute;
    top:15%;
    height:80%;
    width:50px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.character__hand::after{
    position: absolute;
    content:'';
    top:70%;
    left:-10%;
    width:90%;
    height:10px;
    background:inherit;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
}
.hand--right
{
    left:73%;
    z-index: 20;
    background: var(--skin-bright-color);
    transform-origin: 25% 15%;
    animation: hand-wave-right 40s cubic-bezier(.45,0,.65,1.1) infinite alternate;
}
@keyframes hand-wave-right {
    0% { transform: rotate(-2deg); }
    10% { transform: rotate(-4deg) translateY(-5px);}
    30% { transform: rotate(9deg) translateY(-8px);}
    55% { transform: rotate(-3deg) translateY(2px);}
    75% { transform: rotate(8deg) translateY(-5px);}
    100% { transform: rotate(-2deg);}
}

.hand--left
{
    left:-13%;
    background: var(--skin-dark-color);
    transform-origin: 85% 15%;
    animation: hand-sway-left 40s cubic-bezier(.48,0,.68,1.1) infinite alternate;
}
@keyframes hand-sway-left {
    0%   { transform: rotate(2deg);}
    32%  { transform: rotate(-7deg) translateY(-4px);}
    50%  { transform: rotate(8deg) translateY(0);}
    72%  { transform: rotate(-5deg) translateY(2px);}
    100% { transform: rotate(2deg);}
}

.hand--right::before{
    position:absolute;
    content: '';
    left:20%;
    top:40%;
    border-radius:10px;
    -webkit-border-radius:10px;
    -moz-border-radius:10px;
    -ms-border-radius:10px;
    -o-border-radius:10px;
    width:60%;
    height:10px;
    background: var(--skin-dark-color);
}
.character__leg
{
    position:absolute;
    top:65%;
    height:45%;
    width:30px;
    background: var(--coat-bright-color);
    transform: translate(-50%,0%);
    -webkit-transform: translate(-50%,0%);
    -moz-transform: translate(-50%,0%);
    -ms-transform: translate(-50%,0%);
    -o-transform: translate(-50%,0%);
}
.leg--left
{
    left:30%;
}
.leg--right
{
    left:70%;
}
.character__leg::before{
    position: absolute;
    content: '';
    left:-10%;
    top:65%;
    width:100%;
    height:15px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background: var(--shoe-color);
}
.leg--left::after{
    position: absolute;
    content:'';
    left:0%;
    top:20%;
    height: 20%;
    width:100%;
    background: var(--coat-dark-color);
}
      `
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
                        lineNumber: 693,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grass-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 695,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 696,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 697,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 698,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 699,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 700,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 701,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 702,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 703,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 704,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade11"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 705,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grass-blade grass-blade12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 706,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Character.jsx",
                        lineNumber: 694,
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
                                                lineNumber: 711,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "top--bright cap__top",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cap__hair"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Character.jsx",
                                                    lineNumber: 713,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Character.jsx",
                                                lineNumber: 712,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cap__yellow yellow--dark"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Character.jsx",
                                                lineNumber: 715,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cap__yellow yellow--bright"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Character.jsx",
                                                lineNumber: 716,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bottom--dark cap__bottom"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Character.jsx",
                                                lineNumber: 717,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bottom--bright cap__bottom"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Character.jsx",
                                                lineNumber: 718,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 710,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__hair hair--left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 720,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__hair hair--right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 721,
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
                                                    lineNumber: 724,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "character__eye eye--right"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Character.jsx",
                                                    lineNumber: 725,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Character.jsx",
                                            lineNumber: 723,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 722,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__ear ear--left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 728,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__ear ear--right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 729,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 709,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "character__body centered-horizontal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__hand hand--left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 732,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__hand hand--right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 733,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__shirt centered-horizontal",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "character__shirt--bright"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Character.jsx",
                                            lineNumber: 735,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 734,
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
                                                    lineNumber: 739,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "belt__button button--right centered-horizontal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Character.jsx",
                                                    lineNumber: 740,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Character.jsx",
                                            lineNumber: 738,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 737,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__leg leg--left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 743,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "character__leg leg--right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Character.jsx",
                                        lineNumber: 744,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Character.jsx",
                                lineNumber: 731,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Character.jsx",
                        lineNumber: 708,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Character.jsx",
                lineNumber: 692,
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
/*
  Responsive notes:
  - Use Tailwind's responsive classes (sm:, md:, lg:, xl:)
  - Font sizes and headings scale down on smaller screens
  - Padding and spacing adjust for different widths
  - Character illustration is hidden on small screens, properly positioned and sized on wider
  - Subtitle/max-w scales for mobile reading
*/ const HomeAbout = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-[100vh] text-white bg-[#141414] sm:min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-0 absolute inset-0 h-[100vh] sm:h-full",
                style: {
                    minHeight: "100dvh",
                    height: "100dvh"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$background$2d$beams$2d$with$2d$collision$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackgroundBeamsWithCollision"], {}, void 0, false, {
                    fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 relative flex flex-col justify-center items-start px-4 w-full min-h-screen sm:px-8 md:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mb-2 font-extrabold leading-[1] text-[36px] text-[88px] sm:text-[56px] md:mb-0 lg:text-[110px] xl:text-[120px]",
                        children: "R.V"
                    }, void 0, false, {
                        fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-extrabold leading-[1] text-[36px] sm:text-[56px] md:text-[88px] lg:text-[110px] xl:text-[120px]",
                            children: "RAMA VAMSI"
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 max-w-[95vw] max-w-[900px] text-[15px] font-medium leading-7 text-[17px] leading-8 text-[20px] sm:max-w-[680px] md:mt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$encrypted$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedText"], {
                            text: "I AM A WEB DEVELOPER AND DESIGNER | PYTHON PROGRAMMER | REACT DEVELOPER | NEXT.JS DEVELOPER |",
                            className: "",
                            revealedClassName: "",
                            encryptedClassName: "text-violet-400",
                            revealDelayMs: 25,
                            flipDelayMs: 50
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          z-20 absolute pointer-events-none
          hidden md:block
          top-2/3 md:top-1/2
          right-1 sm:right-12 md:right-[100px] lg:right-[180px] xl:right-[250px]
          transform -translate-y-1/2
          max-w-[130px] sm:max-w-[170px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[330px]
        `,
                style: {},
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Character$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/section/homesection/homeabout/HomeAbout.jsx",
                    lineNumber: 64,
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
        lineNumber: 19,
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
const HomeEventCard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ id, frontSrc, frontAlt, backText, skills, title }, ref)=>{
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
                                                        return `${x},${y}`;
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
                                                        const percent = Math.max(0, Math.min(1, parseInt(skill.value.split(":")[1]?.trim() || "0", 10) / 100));
                                                        const angle = Math.PI * 2 / 5 * i - Math.PI / 2;
                                                        const r = 70 * percent;
                                                        const x = 90 + r * Math.cos(angle);
                                                        const y = 90 + r * Math.sin(angle);
                                                        return `${x},${y}`;
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
                                                    const percent = Math.max(0, Math.min(1, parseInt(skill.value.split(":")[1]?.trim() || "0", 10) / 100));
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
                                                                    skill.value.split(":")[1]?.trim() || "0",
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/snippets/homeeventcard/HomeEventCard.jsx",
                                                                lineNumber: 204,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, `${skill.name}-${i}`, true, {
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
const AnimatedTitle = ({ title, containerClass })=>{
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
                            "aria-label": `Show details for ${project.title}`,
                            className: "jsx-1c157147beeac4a5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snippets$2f$homeeventcard$2f$HomeEventCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: `card-${index + 1}`,
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
var _s = __turbopack_context__.k.signature();
;
const images = [
    "/images/excel.png",
    "/images/gsap.png",
    "/images/python.png",
    "/images/react.png",
    "/images/think.png",
    "/images/html.png",
    "/images/java.png",
    "/images/pp.png",
    "/images/sql.png"
];
const carouselFigureStyle = (idx, isMobile)=>{
    const z = isMobile ? 155 : 288;
    const deg = idx * 40;
    return {
        transform: `rotateY(${deg}deg) translateZ(${z}px)`
    };
};
function LoaderGallery() {
    _s();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "LoaderGallery.useState": ()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.innerWidth <= 768
    }["LoaderGallery.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "LoaderGallery.useEffect": ()=>{
            function handleResize() {
                setIsMobile(window.innerWidth <= 768);
            }
            window.addEventListener("resize", handleResize);
            return ({
                "LoaderGallery.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["LoaderGallery.useEffect"];
        }
    }["LoaderGallery.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "60vh",
            background: "#000"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-6 font-extrabold text-center uppercase",
                style: {
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                    fontSize: headingFontSize,
                    lineHeight: headingLineHeight,
                    marginBottom: headingMarginBottom
                },
                children: "SKILLS IN REAL-TIME I HAVE"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loader-gallery-container",
                style: {
                    margin: "4% auto",
                    width: isMobile ? mobileContainerWidth : containerWidth,
                    height: isMobile ? mobileContainerHeight : containerHeight,
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
                                width: isMobile ? mobileFigureWidth : figureWidth,
                                height: isMobile ? mobileFigureHeight : figureHeight,
                                left: isMobile ? mobileFigureLeft : figureLeft,
                                top: isMobile ? mobileFigureTop : figureTop,
                                background: "transparent",
                                overflow: "visible",
                                ...carouselFigureStyle(idx, isMobile)
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "violet-gradient-border",
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    padding: isMobile ? "1.5px" : "4px",
                                    borderRadius: isMobile ? "10px" : "18px",
                                    background: "black",
                                    boxShadow: "0 0 12px #e040fb33",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: src,
                                    alt: `gallery-${idx + 1}`,
                                    style: {
                                        WebkitFilter: "grayscale(1)",
                                        filter: "grayscale(1)",
                                        cursor: "pointer",
                                        transition: "all .5s ease",
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain"
                                    },
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.WebkitFilter = "grayscale(0)";
                                        e.currentTarget.style.filter = "grayscale(0)";
                                        e.currentTarget.style.transform = "scale(1.2, 1.2)";
                                        e.currentTarget.style.border = "none";
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.WebkitFilter = "grayscale(1)";
                                        e.currentTarget.style.filter = "grayscale(1)";
                                        e.currentTarget.style.transform = "scale(1, 1)";
                                        e.currentTarget.style.border = "none";
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LoaderGallery.jsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/LoaderGallery.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(LoaderGallery, "qQjlG+RZtiLJKCTcCTGFDcjqxXo=");
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
const clockCSS = `
body {
  background: #000 !important;
}
.digital-clock-gallery-wrapper {
  background: #000 !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 800px;
  background: #141414;
  gap: 200px;
  position: relative;
  z-index: 1;
}
#perspective {
  background: #000 !important;
  margin-left: 5rem;
  height: 674px;
  perspective-origin: 450px -50px;
  perspective: 600px;
  position: relative;
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
  margin: 0 11px 1px 16px;
}
.separator {
  margin: 0 10px;
}
.digit.no-gap {
  margin-right: 1 !important;
  margin-left: 0 !important;
}
.separator.no-gap {
  margin-right: 1 !important;
  margin-left: 0 !important;
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
.clock-caption {
  margin-top: 30px;
  text-align: center;
  color:;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  transform: rotateY(24deg) rotateX(-3deg) translate3d(180px, 325px, -40px);
  text-shadow: 0 4px 20px #8f00ff77, 0 1px 12px #000c;
  user-select: none;
  pointer-events: none;
}

@media (max-width: 768px) {
  .digital-clock-gallery-wrapper {
    flex-direction: column !important;
    gap: 0 !important;
    min-height: 500px;
    height: auto !important;
  }
  #perspective {
    margin-left: 0 !important;
    min-width: unset !important;
    max-width: 100vw !important;
    width: 100vw !important;
    height: auto !important;
    perspective-origin: center top !important;
    perspective: 400px !important;
  }
  #clock {
    transform: none !important;
    justify-content: center !important;
    margin-top: 1.5rem !important;
    scale: 0.6 !important;
  }
  .digit {
    margin: 0 4px 0.5px 5px !important;
  }
  .separator {
    margin: 0 3px !important;
  }
  .cell,
  .active.cell {
    width: 16px !important;
    height: 16px !important;
  }
  .clock-caption {
    transform: none !important;
    margin-top: 1.5rem !important;
    font-size: 1.2rem !important;
    text-shadow: 0 2px 12px #8f00ff77, 0 1px 8px #000c;
  }
  .loader-gallery-mobile {
    margin-top: 2.5rem !important;
    margin-right: 0 !important;
    justify-content: center !important;
    width: 100vw !important;
    background: #000 !important;
    margin-bottom: 2.5rem !important;
  }
}
`;
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
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DigitalClock.useEffect": ()=>{
            function checkMobile() {
                setIsMobile(window.innerWidth <= 768);
            }
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "DigitalClock.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["DigitalClock.useEffect"];
        }
    }["DigitalClock.useEffect"], []);
    function DigitRows({ digit }) {
        return DIGIT_LAYOUT.map((row, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: row.map((cell, cellIdx)=>{
                    let classNames = cell.className || "";
                    if (classNames.indexOf("active") >= 0) {
                        const allowed = classNames.match(/d[0-9]/g) || [];
                        if (allowed.length > 0 && !allowed.includes(`d${digit}`)) {
                            classNames = classNames.replace(/\bactive\b/, "").replace(/\s+/, " ");
                        }
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: classNames.trim()
                    }, cellIdx, false, {
                        fileName: "[project]/src/components/ui/DigitalClock.jsx",
                        lineNumber: 241,
                        columnNumber: 18
                    }, this);
                })
            }, rowIdx, false, {
                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                lineNumber: 230,
                columnNumber: 7
            }, this));
    }
    function Separator() {
        return SEPARATOR_LAYOUT.map((row, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: row.map((cell, cellIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: cell.className
                    }, cellIdx, false, {
                        fileName: "[project]/src/components/ui/DigitalClock.jsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this))
            }, rowIdx, false, {
                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                lineNumber: 249,
                columnNumber: 7
            }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: clockCSS
            }, void 0, false, {
                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "digital-clock-gallery-wrapper",
                style: {
                    height: "60vh",
                    position: "relative",
                    zIndex: 1,
                    background: "#000",
                    flexDirection: isMobile ? "column" : undefined,
                    gap: isMobile ? 0 : undefined,
                    minHeight: isMobile ? "500px" : undefined
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "perspective",
                        style: {
                            position: "relative",
                            zIndex: 2,
                            background: "#000",
                            marginLeft: isMobile ? 0 : undefined,
                            minWidth: isMobile ? undefined : "600px",
                            maxWidth: isMobile ? "100vw" : "800px",
                            width: isMobile ? "100vw" : undefined,
                            height: isMobile ? "auto" : "674px",
                            perspectiveOrigin: isMobile ? "center top" : "450px -50px",
                            perspective: isMobile ? "400px" : "600px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "clock",
                                style: {
                                    transform: isMobile ? "none" : "rotateY(24deg) rotateX(-3deg) translate3d(180px, 310px, -20px)",
                                    justifyContent: isMobile ? "center" : undefined,
                                    marginTop: isMobile ? "1.5rem" : undefined,
                                    scale: isMobile ? "4" : undefined
                                },
                                children: digitIDs.map((id, idx, arr)=>{
                                    if (id === "sep" && idx === 2) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "digit separator no-gap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                                lineNumber: 302,
                                                columnNumber: 21
                                            }, this)
                                        }, `sep-${idx}`, false, {
                                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                            lineNumber: 301,
                                            columnNumber: 19
                                        }, this);
                                    } else if (idx === 1) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: id,
                                            className: "digit no-gap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DigitRows, {
                                                digit: getDigitVal(time, id)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                                lineNumber: 308,
                                                columnNumber: 21
                                            }, this)
                                        }, id, false, {
                                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                            lineNumber: 307,
                                            columnNumber: 19
                                        }, this);
                                    } else if (idx === 3) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: id,
                                            className: "digit no-gap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DigitRows, {
                                                digit: getDigitVal(time, id)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                                lineNumber: 314,
                                                columnNumber: 21
                                            }, this)
                                        }, id, false, {
                                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this);
                                    } else if (id === "sep") {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "digit separator",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                                lineNumber: 320,
                                                columnNumber: 21
                                            }, this)
                                        }, `sep-${idx}`, false, {
                                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                            lineNumber: 319,
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
                                                lineNumber: 326,
                                                columnNumber: 21
                                            }, this)
                                        }, id, false, {
                                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                            lineNumber: 325,
                                            columnNumber: 19
                                        }, this);
                                    }
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clock-caption",
                                style: {
                                    transform: isMobile ? "none" : "rotateY(24deg) rotateX(-3deg) translate3d(180px, 325px, -40px)",
                                    marginTop: isMobile ? "1.5rem" : "30px",
                                    fontSize: isMobile ? "1.2rem" : "2rem",
                                    textShadow: isMobile ? "0 2px 12px #8f00ff77, 0 1px 8px #000c" : "0 4px 20px #8f00ff77, 0 1px 12px #000c"
                                },
                                children: '"LEARNING DOESN’T PAUSE"'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/DigitalClock.jsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loader-gallery-mobile",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            marginTop: "2.5rem",
                            marginRight: 0,
                            justifyContent: "center",
                            width: "100vw",
                            zIndex: 3,
                            background: "#000",
                            marginBottom: "2.5rem"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LoaderGallery$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                            lineNumber: 363,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/DigitalClock.jsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            marginTop: "15rem",
                            marginRight: "25rem",
                            zIndex: 3,
                            background: "#000"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LoaderGallery$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/DigitalClock.jsx",
                            lineNumber: 376,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/DigitalClock.jsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/DigitalClock.jsx",
                lineNumber: 260,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DigitalClock, "hOY5oKgH1mRkpUmviyDL2+iuAzY=");
_c = DigitalClock;
var _c;
__turbopack_context__.k.register(_c, "DigitalClock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/GlowyDivider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlowyDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
function GlowyDivider({ showBuckle = false, direction = "bottom" }) {
    const gradientLight = direction === "bottom" ? "bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" : "bg-gradient-to-l from-transparent via-purple-300/40 to-transparent";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        style: {
            minHeight: 0,
            height: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cn("absolute left-0 w-full h-[2px] pointer-events-none", gradientLight, "blur-[2px]"),
                style: {
                    top: 0,
                    boxShadow: "0 0 12px 2px rgba(168,85,247,0.22), 0 0 4px 0 rgba(255,255,255,0.11)",
                    zIndex: 1
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/GlowyDivider.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cn("absolute left-0 w-full h-[1px] pointer-events-none", gradientLight),
                style: {
                    top: 0,
                    zIndex: 2
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/GlowyDivider.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            showBuckle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-0 flex items-center justify-center pointer-events-none -translate-x-1/2 -translate-y-1/2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1 w-8 bg-purple-300/40 rounded-xl blur-[1.5px] shadow-[0_0_8px_3px_rgba(168,85,247,0.25)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/GlowyDivider.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute h-[2.5px] w-8 bg-purple-400/80 rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/GlowyDivider.jsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/GlowyDivider.jsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/GlowyDivider.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = GlowyDivider;
var _c;
__turbopack_context__.k.register(_c, "GlowyDivider");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GlowyDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/GlowyDivider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const HomeSecond = ()=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeSecond.useEffect": ()=>{
            // Check on first render
            const checkMobile = {
                "HomeSecond.useEffect.checkMobile": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        setIsMobile(window.innerWidth <= 768);
                    }
                }
            }["HomeSecond.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "HomeSecond.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["HomeSecond.useEffect"];
        }
    }["HomeSecond.useEffect"], []);
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                minHeight: "100vh",
                background: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontFamily: "sans-serif"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    margin: "auto",
                    textAlign: "center",
                    padding: "0 24px",
                    maxWidth: 380,
                    fontSize: "1.12rem",
                    fontWeight: "500",
                    letterSpacing: 0.2,
                    opacity: 0.82,
                    zIndex: 10
                },
                children: [
                    "For a better experience,",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/section/homesection/homeabout/HomeSecond.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "please open this section on a",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        style: {
                            color: "#e040fb"
                        },
                        children: "desktop"
                    }, void 0, false, {
                        fileName: "[project]/src/components/section/homesection/homeabout/HomeSecond.jsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/section/homesection/homeabout/HomeSecond.jsx",
                lineNumber: 36,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/section/homesection/homeabout/HomeSecond.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            minHeight: "100vh",
            background: "#000",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DigitalClock$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/section/homesection/homeabout/HomeSecond.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GlowyDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                direction: "bottom"
            }, void 0, false, {
                fileName: "[project]/src/components/section/homesection/homeabout/HomeSecond.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/section/homesection/homeabout/HomeSecond.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HomeSecond, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = HomeSecond;
const __TURBOPACK__default__export__ = HomeSecond;
var _c;
__turbopack_context__.k.register(_c, "HomeSecond");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CustomCursor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// Pure React logo SVG in violet color
function ReactSymbol({ size = 32 }) {
    // Violet shade
    const violet = "#8b5cf6";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 40 40",
        fill: "none",
        style: {
            display: "block",
            pointerEvents: "none",
            userSelect: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "20",
                cy: "20",
                r: "3.2",
                fill: violet
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CustomCursor.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: violet,
                strokeWidth: "2",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        rx: "16",
                        ry: "6.6",
                        cx: "20",
                        cy: "20",
                        transform: "rotate(0 20 20)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CustomCursor.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        rx: "16",
                        ry: "6.6",
                        cx: "20",
                        cy: "20",
                        transform: "rotate(60 20 20)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CustomCursor.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        rx: "16",
                        ry: "6.6",
                        cx: "20",
                        cy: "20",
                        transform: "rotate(120 20 20)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CustomCursor.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CustomCursor.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CustomCursor.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ReactSymbol;
function CustomCursor() {
    _s();
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Hide the default cursor for the document body
            const originalCursor = document.body.style.cursor;
            document.body.style.cursor = "none";
            const move = {
                "CustomCursor.useEffect.move": (e)=>setPos({
                        x: e.clientX,
                        y: e.clientY
                    })
            }["CustomCursor.useEffect.move"];
            window.addEventListener("mousemove", move);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", move);
                    document.body.style.cursor = originalCursor;
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: pos.y,
            left: pos.x,
            width: 38,
            height: 38,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactSymbol, {
            size: 34
        }, void 0, false, {
            fileName: "[project]/src/components/ui/CustomCursor.jsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/CustomCursor.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(CustomCursor, "CEZBNFl7D5unz7QADBFJF8EM04A=");
_c1 = CustomCursor;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactSymbol");
__turbopack_context__.k.register(_c1, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/RetroComputer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RetroComputer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Model({ position = [
    0,
    -1,
    0
], rotation = [
    0,
    4.8,
    0
], scale = 3 }) {
    _s();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/retro_computer/scene.gltf");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Model.useEffect": ()=>{
            scene.traverse({
                "Model.useEffect": (child)=>{
                    if (child.isMesh) {
                        if (Array.isArray(child.material)) {
                            child.material.forEach({
                                "Model.useEffect": (mat)=>{
                                    mat.side = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"];
                                    mat.needsUpdate = true;
                                    mat.depthWrite = true;
                                    mat.depthTest = true;
                                    mat.transparent = false;
                                }
                            }["Model.useEffect"]);
                        } else {
                            child.material.side = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"];
                            child.material.needsUpdate = true;
                            child.material.depthWrite = true;
                            child.material.depthTest = true;
                            child.material.transparent = false;
                        }
                    }
                }
            }["Model.useEffect"]);
        }
    }["Model.useEffect"], [
        scene
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        object: scene,
        scale: scale,
        position: position,
        rotation: rotation
    }, void 0, false, {
        fileName: "[project]/src/components/ui/RetroComputer.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Model, "N2zR9ZykRX406VVmLIXmzSJYw38=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"]
    ];
});
_c = Model;
function RetroComputer({ modelPosition = [
    0,
    -1,
    0
], modelRotation = [
    0,
    6.1,
    0
], modelScale = 3, cameraPosition = [
    0,
    5,
    18
], fov = 30 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "450px",
            width: "100%",
            maxWidth: "100vw"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 600px) {
          .retro-canvas-container {
            height: 400px !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ui/RetroComputer.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "retro-canvas-container",
                style: {
                    height: "100%",
                    width: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                    camera: {
                        position: cameraPosition,
                        fov
                    },
                    gl: {
                        antialias: true,
                        preserveDrawingBuffer: true,
                        alpha: false
                    },
                    style: {
                        background: "transparent",
                        height: "100%",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                            intensity: 0.2
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/RetroComputer.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                            position: [
                                2,
                                3,
                                3
                            ],
                            intensity: 1
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/RetroComputer.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Model, {
                            position: modelPosition,
                            rotation: modelRotation,
                            scale: modelScale
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/RetroComputer.jsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                            enableZoom: false,
                            makeDefault: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/RetroComputer.jsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/RetroComputer.jsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/RetroComputer.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/RetroComputer.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c1 = RetroComputer;
var _c, _c1;
__turbopack_context__.k.register(_c, "Model");
__turbopack_context__.k.register(_c1, "RetroComputer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/section/homesection/homeabout/HomeMe.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeMe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$RetroComputer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/RetroComputer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GlowyDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/GlowyDivider.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// Utility hook to check if screen is desktop size (min-width: 1024px)
function useIsDesktop() {
    _s();
    const [isDesktop, setIsDesktop] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "useIsDesktop.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
             // SSR fallback
            return window.innerWidth >= 1024;
        }
    }["useIsDesktop.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useIsDesktop.useEffect": ()=>{
            function handleResize() {
                setIsDesktop(window.innerWidth >= 1024);
            }
            window.addEventListener("resize", handleResize);
            return ({
                "useIsDesktop.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["useIsDesktop.useEffect"];
        }
    }["useIsDesktop.useEffect"], []);
    return isDesktop;
}
_s(useIsDesktop, "toMQJNTE5dbXUhI0gqT5luthnlo=");
function HomeMe() {
    _s1();
    const isDesktop = useIsDesktop();
    if (!isDesktop) {
        // Show only the requested message for mobile/non-desktop, as plain text (not inside an animation or box)
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col items-center justify-center min-h-screen bg-black",
            style: {
                width: "100%"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-sm text-lg text-neutral-300 text-center",
                children: [
                    "For a better experience,",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/section/homesection/homeabout/HomeMe.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    "please open this section on a desktop."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/section/homesection/homeabout/HomeMe.jsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/section/homesection/homeabout/HomeMe.jsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "z-10 overflow-hidden relative flex flex-col justify-center items-center p-6 min-h-screen md:flex-row",
            style: {
                background: "#000",
                width: "100%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "z-10 flex items-center justify-center justify-start ml-40 mb-4 mr-8 w-full w-1/2 md:items-start",
                    style: {
                        minWidth: 0,
                        maxWidth: 350
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$RetroComputer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/section/homesection/homeabout/HomeMe.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/section/homesection/homeabout/HomeMe.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "z-10 flex flex-col justify-center items-center px-4 ml-4 ml-8 w-full w-1/2 text-center text-left md:items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-3 text-3xl font-bold md:text-5xl",
                            style: {
                                position: "relative"
                            },
                            children: "ABOUT ME"
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/homesection/homeabout/HomeMe.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-neutral-700 dark:text-neutral-300 md:text-lg",
                            style: {
                                position: "relative",
                                textAlign: "justify",
                                maxWidth: 540,
                                width: "100%"
                            },
                            children: "Hello! I'm a passionate developer who loves building interactive user interfaces and seamless web experiences. I enjoy working with a variety of programming languages including JavaScript, TypeScript, Python and more. I love learning new technologies, collaborating on open-source projects and tackling challenging problems. Welcome to my portfolio!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/homesection/homeabout/HomeMe.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/section/homesection/homeabout/HomeMe.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100vh",
                        pointerEvents: "none"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/section/homesection/homeabout/HomeMe.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/section/homesection/homeabout/HomeMe.jsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s1(HomeMe, "LPvPO2c3CxR8xrtzm1E56phj+VA=", false, function() {
    return [
        useIsDesktop
    ];
});
_c = HomeMe;
var _c;
__turbopack_context__.k.register(_c, "HomeMe");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CustomCursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CustomCursor.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$section$2f$homesection$2f$homeabout$2f$HomeMe$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/section/homesection/homeabout/HomeMe.jsx [app-client] (ecmascript)");
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
;
;
function Home() {
    _s();
    // Create a ref to store the Lenis instance
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
             // only run on client
            // Hide the scroll bar on the right side
            // Set overflow: hidden on both html and body to remove scrollbar
            const html = document.documentElement;
            const body = document.body;
            const originalHtmlOverflow = html.style.overflow;
            const originalBodyOverflow = body.style.overflow;
            html.style.overflow = "hidden";
            body.style.overflow = "hidden";
            // Instantiate Lenis and attach it to the ref
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "Home.useEffect": (t)=>t
                }["Home.useEffect"],
                smooth: true
            });
            lenisRef.current = lenis;
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "Home.useEffect": ()=>{
                    lenis.destroy();
                    // Reset overflow styles to original
                    html.style.overflow = originalHtmlOverflow;
                    body.style.overflow = originalBodyOverflow;
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CustomCursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$section$2f$homesection$2f$homeabout$2f$HomeAbout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$section$2f$homesection$2f$homeabout$2f$HomeMe$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$section$2f$homesection$2f$homeabout$2f$HomeSecond$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(Home, "EGg8JqRqiLdZLNuaMV97MRehwwE=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_dad5ad73._.js.map