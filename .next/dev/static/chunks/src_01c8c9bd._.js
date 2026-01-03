(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/snippets/vortex/VortexDemo.jsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// import React from "react";
// import { Vortex } from "@/components/ui/vortex";
// export function VortexDemo() {
//   return (
//     <div className="overflow-hidden mx-auto w-[calc(100%-4rem)] h-[30rem] rounded-md">
//       <Vortex backgroundColor="black" className="w-full h-full" />
//     </div>
//   );
// }
// export default VortexDemo;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/section/contactsection/ContactMe.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactMe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$snippets$2f$vortex$2f$VortexDemo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/snippets/vortex/VortexDemo.jsx [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-9f7ba6a0bb398059" + " " + "overflow-hidden relative flex flex-col items-center justify-center py-16 w-full min-h-[100vh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 2 * (RADIUS + ICON_SIZE),
                    height: 2 * (RADIUS + ICON_SIZE)
                },
                className: "jsx-9f7ba6a0bb398059" + " " + "z-10 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: "translate(-50%, -50%)",
                            zIndex: 2,
                            pointerEvents: "none"
                        },
                        className: "jsx-9f7ba6a0bb398059" + " " + "absolute left-1/2 top-1/2 flex flex-col items-center justify-center select-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-9f7ba6a0bb398059" + " " + "text-2xl font-bold text-blue-400 tracking-wide drop-shadow-lg md:text-3xl",
                            children: "Get in touch"
                        }, void 0, false, {
                            fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 2 * RADIUS,
                            height: 2 * RADIUS,
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                            pointerEvents: "none"
                        },
                        className: "jsx-9f7ba6a0bb398059" + " " + "absolute left-1/2 top-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animation: "orbit 7s linear infinite",
                                transformOrigin: "50% 50%"
                            },
                            className: "jsx-9f7ba6a0bb398059" + " " + "absolute left-0 top-0 w-full h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.linkedin.com/in/ramavamsi-16v",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        left: `calc(50% - ${ICON_SIZE / 2}px)`,
                                        top: `-${ICON_SIZE / 2}px`,
                                        pointerEvents: "auto"
                                    },
                                    className: "jsx-9f7ba6a0bb398059" + " " + "absolute",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9f7ba6a0bb398059" + " " + "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: ICON_SIZE,
                                                    height: ICON_SIZE
                                                },
                                                className: "jsx-9f7ba6a0bb398059" + " " + "flex items-center justify-center bg-white rounded-full border-blue-400 shadow-lg dark:bg-black border",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                                                    className: "text-blue-600 text-2xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-9f7ba6a0bb398059" + " " + "mt-1 text-xs text-blue-400 font-semibold",
                                                children: "LinkedIn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:vamsirama1622@gmail.com",
                                    style: {
                                        left: `calc(50% - ${ICON_SIZE / 2}px)`,
                                        top: `calc(100% - ${ICON_SIZE / 2}px)`,
                                        pointerEvents: "auto"
                                    },
                                    className: "jsx-9f7ba6a0bb398059" + " " + "absolute",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9f7ba6a0bb398059" + " " + "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: ICON_SIZE,
                                                    height: ICON_SIZE
                                                },
                                                className: "jsx-9f7ba6a0bb398059" + " " + "flex items-center justify-center bg-white rounded-full border-blue-400 shadow-lg dark:bg-black border",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                    className: "text-blue-400 text-2xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-9f7ba6a0bb398059" + " " + "mt-1 text-xs text-blue-400 font-semibold",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "9f7ba6a0bb398059",
                children: "@keyframes orbit{to{transform:rotate(360deg)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/section/contactsection/ContactMe.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = ContactMe;
var _c;
__turbopack_context__.k.register(_c, "ContactMe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_01c8c9bd._.js.map