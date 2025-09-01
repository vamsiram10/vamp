(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vamp/src/components/section/aboutsection/AboutMe.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
// Portal opening animation component
function PortalTransition(param) {
    let { onFinish } = param;
    _s();
    // Animation lasts 1.5s, then calls onFinish
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortalTransition.useEffect": ()=>{
            const timer = setTimeout({
                "PortalTransition.useEffect.timer": ()=>{
                    onFinish();
                }
            }["PortalTransition.useEffect.timer"], 1500);
            return ({
                "PortalTransition.useEffect": ()=>clearTimeout(timer)
            })["PortalTransition.useEffect"];
        }
    }["PortalTransition.useEffect"], [
        onFinish
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-7b1cf8e932707687" + " " + "z-[9999] fixed inset-0 flex items-center justify-center bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7b1cf8e932707687" + " " + "relative flex items-center justify-center w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7b1cf8e932707687" + " " + "absolute left-1/2 top-1/2 w-80 h-80 h-[28rem] portal-outer -translate-x-1/2 -translate-y-1/2 sm:w-[28rem]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7b1cf8e932707687" + " " + "portal-ring"
                        }, void 0, false, {
                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7b1cf8e932707687" + " " + "absolute left-1/2 top-1/2 w-60 h-60 h-96 portal-glow -translate-x-1/2 -translate-y-1/2 sm:w-96"
                    }, void 0, false, {
                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7b1cf8e932707687" + " " + "z-10 relative text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-7b1cf8e932707687" + " " + "text-3xl font-extrabold text-blue-300 drop-shadow-lg portal-text sm:text-5xl",
                            children: "Opening Portal..."
                        }, void 0, false, {
                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7b1cf8e932707687",
                children: ".portal-ring.jsx-7b1cf8e932707687{background:conic-gradient(#7c3aed,#38bdf8,#7c3aed 100%);border:8px solid transparent;border-radius:50%;width:100%;height:100%;animation:1.5s cubic-bezier(.6,1.5,.5,1) forwards portal-spin;box-shadow:0 0 64px 16px rgba(124,58,237,.333),0 0 32px rgba(56,189,248,.333)}.portal-glow.jsx-7b1cf8e932707687{filter:blur(32px);opacity:.7;background:radial-gradient(circle,rgba(56,189,248,.8) 0%,rgba(124,58,237,.267) 80%,transparent 100%);border-radius:50%;animation:1.2s cubic-bezier(.6,1.5,.5,1) forwards portal-glow-in}.portal-text.jsx-7b1cf8e932707687{opacity:0;animation:.8s cubic-bezier(.6,1.5,.5,1) .4s forwards portal-text-in}@keyframes portal-spin{0%{opacity:0;filter:blur(16px);transform:scale(.2)rotate(-180deg)}60%{opacity:1;filter:blur(2px)}to{opacity:1;filter:blur();transform:scale(1)rotate(0)}}@keyframes portal-glow-in{0%{opacity:0;transform:scale(.2)}to{opacity:.7;transform:scale(1)}}@keyframes portal-text-in{0%{opacity:0;filter:blur(4px);transform:translateY(40px)scale(.8)}60%{opacity:1;filter:blur(.5px)}to{opacity:1;filter:none;transform:none}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(PortalTransition, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PortalTransition;
const AboutMe = ()=>{
    _s1();
    const [showPortal, setShowPortal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Prevent scroll while portal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutMe.useEffect": ()=>{
            if (showPortal) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            return ({
                "AboutMe.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["AboutMe.useEffect"];
        }
    }["AboutMe.useEffect"], [
        showPortal
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showPortal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PortalTransition, {
                onFinish: ()=>setShowPortal(false)
            }, void 0, false, {
                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                lineNumber: 120,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
            !showPortal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative top-10 px-4 mx-auto py-12 max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-6 text-3xl font-bold text-center",
                                children: "A DEVELOPER'S JOURNEY."
                            }, void 0, false, {
                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto text-lg leading-relaxed text-white text-center",
                                children: "My journey as a developer has been shaped by a deep interest in front-end development and modern programming languages. I specialize in building interactive, user-focused web applications using React.js and the Next.js framework. My experience began with learning the fundamentals of JavaScript and CSS, which gave me a strong foundation in creating seamless digital experiences."
                            }, void 0, false, {
                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-6 text-lg leading-relaxed text-white text-center",
                                children: "As I advanced, I became passionate about leveraging the power of React to build dynamic interfaces and using Next.js to optimize performance and scalability. I enjoy architecting reusable components, managing state efficiently, and ensuring accessibility and responsiveness across devices. My projects often involve integrating APIs, handling server-side rendering, and deploying full-stack solutions with Next.js. I am always eager to learn new technologies and best practices in the ever-evolving front-end ecosystem. This website is a reflection of my skills and dedication to modern web development, and I look forward to expanding it further as I continue to grow as a React and Next.js developer."
                            }, void 0, false, {
                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative px-4 mx-auto py-12 max-w-3xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center mt-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "z-0 absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-300 to-blue-900 opacity-70 -translate-x-1/2 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        [
                                            {
                                                title: "Amity University Rajasthan",
                                                description: "Pursuing a Bachelor's in Computer Science, maintaining a CGPA of 9.05.",
                                                date: "2022 - 2026 (Expected)",
                                                location: "Jaipur",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6 text-yellow-400",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 173,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 166,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                badge: "Education"
                                            },
                                            {
                                                title: "Aaditya Junior College",
                                                description: "Completed Intermediate in Science with a final percentage of 98.4%.",
                                                date: "2019 - 2021",
                                                location: "Karimnagar, Telangana",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6 text-green-400",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M12 20l9-5-9-5-9 5 9 5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 196,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 189,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                badge: "Science"
                                            },
                                            {
                                                title: "Paramita Heritage School",
                                                description: "Graduated 10th class (MPC) with a perfect GPA of 10.",
                                                date: "2018 - 2019",
                                                location: "Karimnagar, Telangana",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6 text-pink-400",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M5 13l4 4L19 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 219,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                badge: "School"
                                            }
                                        ].map((item, idx, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "z-10 relative flex items-center mb-10 group transition-transform duration-300 hover:scale-[1.025] ".concat(idx === arr.length - 1 ? "mb-0" : ""),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pr-6 w-1/2 text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inline-flex items-center gap-2 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-block px-2 py-0.5 text-xs font-semibold text-blue-200 bg-blue-900/60 rounded-full shadow-md",
                                                                        children: item.badge
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                        lineNumber: 238,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-block",
                                                                        children: item.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                        lineNumber: 241,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 237,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-lg text-white drop-shadow-lg",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 243,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-gray-300 text-sm leading-relaxed",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 246,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center w-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "z-10 relative block w-6 h-6 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-700 rounded-full border-4 border-white shadow-2xl animate-pulse",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute inset-0 w-full h-full bg-blue-500 rounded-full opacity-30 blur-lg"
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 253,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 252,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 251,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pl-6 w-1/2 text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-300 font-semibold text-base tracking-wide",
                                                                children: item.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 258,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 mt-1 text-gray-400 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "inline-block w-4 h-4 text-blue-400",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        viewBox: "0 0 24 24",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                d: "M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                                lineNumber: 269,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                                lineNumber: 274,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                        lineNumber: 262,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    item.location
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 261,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 257,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, item.title, true, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 229,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-a0c230823b0ad3f7" + " " + "relative px-4 mx-auto py-16 max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-a0c230823b0ad3f7" + " " + "mb-10 text-4xl font-extrabold text-center text-blue-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-a0c230823b0ad3f7" + " " + "inline-block align-middle",
                                        children: "🚀"
                                    }, void 0, false, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Technical Skills"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a0c230823b0ad3f7" + " " + "grid grid-cols-1 gap-12 md:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a0c230823b0ad3f7" + " " + "overflow-hidden relative p-5 h-46 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-700/80 rounded-1xl border-blue-700/40 shadow-2xl transition-transform duration-300 group border hover:scale-105 hover:shadow-blue-500/40 sm:h-45",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "absolute opacity-40 transition-opacity duration-300 pointer-events-none -top-8 -right-8 group-hover:opacity-70",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "90",
                                                    height: "90",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    className: "jsx-a0c230823b0ad3f7",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10",
                                                            stroke: "#60a5fa",
                                                            strokeWidth: "2",
                                                            className: "jsx-a0c230823b0ad3f7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 300,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            stroke: "#60a5fa",
                                                            strokeWidth: "2",
                                                            d: "M12 2v20m10-10H2",
                                                            className: "jsx-a0c230823b0ad3f7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 307,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex items-center gap-3 mb-5 text-2xl font-bold text-blue-300 tracking-wide",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-a0c230823b0ad3f7" + " " + "inline-block w-3 h-3 bg-blue-400 rounded-full shadow-lg animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Programming Languages"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex flex-wrap gap-4 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a0c230823b0ad3f7" + " " + "flex flex-col items-center transition-transform duration-200 group-hover:scale-110",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full shadow-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 32 32",
                                                                    fill: "none",
                                                                    className: "jsx-a0c230823b0ad3f7",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M16 2L2 30h28L16 2z",
                                                                            fill: "#F7DF1E",
                                                                            className: "jsx-a0c230823b0ad3f7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                            lineNumber: 327,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                            x: "8",
                                                                            y: "23",
                                                                            fontSize: "12",
                                                                            fill: "#222",
                                                                            fontWeight: "bold",
                                                                            className: "jsx-a0c230823b0ad3f7",
                                                                            children: "J"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                            lineNumber: 328,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 320,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "mt-2 text-white font-medium",
                                                                children: "Java"
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 339,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a0c230823b0ad3f7" + " " + "flex flex-col items-center transition-transform duration-200 group-hover:scale-110",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-gradient-to-tr from-blue-400 to-blue-600 rounded-full shadow-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 32 32",
                                                                    fill: "none",
                                                                    className: "jsx-a0c230823b0ad3f7",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                            cx: "16",
                                                                            cy: "16",
                                                                            rx: "14",
                                                                            ry: "14",
                                                                            fill: "#3776AB",
                                                                            className: "jsx-a0c230823b0ad3f7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                            lineNumber: 349,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                            x: "7",
                                                                            y: "23",
                                                                            fontSize: "12",
                                                                            fill: "#fff",
                                                                            fontWeight: "bold",
                                                                            className: "jsx-a0c230823b0ad3f7",
                                                                            children: "Py"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                            lineNumber: 356,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 342,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "mt-2 text-white font-medium",
                                                                children: "Python"
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 367,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a0c230823b0ad3f7" + " " + "flex flex-col items-center transition-transform duration-200 group-hover:scale-110",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-gradient-to-tr from-green-400 to-green-600 rounded-full shadow-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 32 32",
                                                                    fill: "none",
                                                                    className: "jsx-a0c230823b0ad3f7",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                            x: "4",
                                                                            y: "4",
                                                                            width: "24",
                                                                            height: "24",
                                                                            rx: "6",
                                                                            fill: "#059669",
                                                                            className: "jsx-a0c230823b0ad3f7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                            lineNumber: 377,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                            x: "10",
                                                                            y: "23",
                                                                            fontSize: "12",
                                                                            fill: "#fff",
                                                                            fontWeight: "bold",
                                                                            className: "jsx-a0c230823b0ad3f7",
                                                                            children: "C"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                            lineNumber: 385,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                    lineNumber: 371,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 370,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "mt-2 text-white font-medium",
                                                                children: "C"
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 396,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a0c230823b0ad3f7" + " " + "overflow-hidden relative p-5 h-40 bg-gradient-to-br from-purple-900/80 via-purple-800/60 to-purple-700/80 rounded-1xl border-purple-700/40 shadow-2xl transition-transform duration-300 group border hover:scale-105 hover:shadow-purple-500/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "absolute opacity-40 transition-opacity duration-300 pointer-events-none -top-8 -right-8 group-hover:opacity-70",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "90",
                                                    height: "90",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    className: "jsx-a0c230823b0ad3f7",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                        cx: "12",
                                                        cy: "12",
                                                        rx: "10",
                                                        ry: "10",
                                                        stroke: "#a78bfa",
                                                        strokeWidth: "2",
                                                        className: "jsx-a0c230823b0ad3f7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 404,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 403,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 402,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex items-center gap-3 mb-5 text-2xl font-bold text-purple-300 tracking-wide",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-a0c230823b0ad3f7" + " " + "inline-block w-3 h-3 bg-purple-400 rounded-full shadow-lg animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 415,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Databases"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 414,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex flex-wrap gap-4 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a0c230823b0ad3f7" + " " + "flex flex-col items-center transition-transform duration-200 group-hover:scale-110",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-gradient-to-tr from-green-400 to-green-600 rounded-full shadow-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 32 32",
                                                                    fill: "none",
                                                                    className: "jsx-a0c230823b0ad3f7",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                            cx: "16",
                                                                            cy: "16",
                                                                            rx: "14",
                                                                            ry: "14",
                                                                            fill: "#34d399",
                                                                            className: "jsx-a0c230823b0ad3f7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                            lineNumber: 427,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                            x: "4",
                                                                            y: "23",
                                                                            fontSize: "12",
                                                                            fill: "#222",
                                                                            fontWeight: "bold",
                                                                            className: "jsx-a0c230823b0ad3f7",
                                                                            children: "MySQL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                            lineNumber: 434,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                    lineNumber: 421,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 420,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "mt-2 text-white font-medium",
                                                                children: "MySQL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 445,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 419,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a0c230823b0ad3f7" + " " + "flex flex-col items-center transition-transform duration-200 group-hover:scale-110",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full shadow-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 32 32",
                                                                    fill: "none",
                                                                    className: "jsx-a0c230823b0ad3f7",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                            cx: "16",
                                                                            cy: "16",
                                                                            rx: "14",
                                                                            ry: "14",
                                                                            fill: "#60a5fa",
                                                                            className: "jsx-a0c230823b0ad3f7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                            lineNumber: 455,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                            x: "7",
                                                                            y: "23",
                                                                            fontSize: "12",
                                                                            fill: "#fff",
                                                                            fontWeight: "bold",
                                                                            className: "jsx-a0c230823b0ad3f7",
                                                                            children: "SQL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                            lineNumber: 462,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 448,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "mt-2 text-white font-medium",
                                                                children: "SQL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 473,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 447,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a0c230823b0ad3f7" + " " + "overflow-hidden relative p-5 h-40 bg-gradient-to-br from-pink-900/80 via-pink-800/60 to-pink-700/80 rounded-1xl border-pink-700/40 shadow-2xl transition-transform duration-300 group border hover:scale-105 hover:shadow-pink-400/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "absolute opacity-40 transition-opacity duration-300 pointer-events-none -top-8 -right-8 group-hover:opacity-70",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "90",
                                                    height: "90",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    className: "jsx-a0c230823b0ad3f7",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "4",
                                                        y: "4",
                                                        width: "16",
                                                        height: "16",
                                                        rx: "4",
                                                        stroke: "#f472b6",
                                                        strokeWidth: "2",
                                                        className: "jsx-a0c230823b0ad3f7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 481,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 480,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 479,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex items-center gap-3 mb-5 text-2xl font-bold text-pink-300 tracking-wide",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-a0c230823b0ad3f7" + " " + "inline-block w-3 h-3 bg-pink-400 rounded-full shadow-lg animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 493,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Libraries & Frameworks"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 492,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex flex-wrap gap-4 mt-2",
                                                children: [
                                                    {
                                                        name: "Numpy",
                                                        color: "from-yellow-300 to-yellow-500",
                                                        icon: "🔢"
                                                    },
                                                    {
                                                        name: "Pandas",
                                                        color: "from-green-300 to-green-500",
                                                        icon: "🐼"
                                                    },
                                                    {
                                                        name: "React.js",
                                                        color: "from-blue-300 to-blue-500",
                                                        icon: "⚛️"
                                                    },
                                                    {
                                                        name: "Next.js",
                                                        color: "from-gray-300 to-gray-500",
                                                        icon: "⏭️"
                                                    }
                                                ].map((lib)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a0c230823b0ad3f7" + " " + "flex flex-col items-center transition-transform duration-200 group-hover:scale-110",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr ".concat(lib.color, " shadow-lg text-2xl"),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-a0c230823b0ad3f7" + " " + "text-xl",
                                                                    children: lib.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                    lineNumber: 526,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 523,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "mt-2 text-white font-medium",
                                                                children: lib.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 528,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, lib.name, true, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 519,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 496,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 478,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a0c230823b0ad3f7" + " " + "overflow-hidden relative p-5 h-40 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-700/80 rounded-1xl border-gray-700/40 shadow-2xl transition-transform duration-300 group border hover:scale-105 hover:shadow-gray-400/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "absolute opacity-40 transition-opacity duration-300 pointer-events-none -top-8 -right-8 group-hover:opacity-70",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "90",
                                                    height: "90",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    className: "jsx-a0c230823b0ad3f7",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        stroke: "#60a5fa",
                                                        strokeWidth: "2",
                                                        d: "M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9V7a5 5 0 1110 0v2",
                                                        className: "jsx-a0c230823b0ad3f7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 539,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 538,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 537,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex items-center gap-3 mb-5 text-2xl font-bold text-gray-300 tracking-wide",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-a0c230823b0ad3f7" + " " + "inline-block w-3 h-3 bg-gray-400 rounded-full shadow-lg animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 547,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Tools & Platforms"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 546,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a0c230823b0ad3f7" + " " + "flex flex-wrap gap-4 mt-2",
                                                children: [
                                                    {
                                                        name: "Git",
                                                        color: "from-orange-400 to-orange-600",
                                                        icon: "🐙"
                                                    },
                                                    {
                                                        name: "Hostinger",
                                                        color: "from-green-400 to-green-600",
                                                        icon: "🌐"
                                                    },
                                                    {
                                                        name: "VS Code",
                                                        color: "from-blue-400 to-blue-600",
                                                        icon: "💻"
                                                    },
                                                    {
                                                        name: "JN",
                                                        color: "from-purple-400 to-purple-600",
                                                        icon: "📒"
                                                    },
                                                    {
                                                        name: "Basics of AWS",
                                                        color: "from-gray-400 to-gray-600",
                                                        icon: "☁️"
                                                    }
                                                ].map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a0c230823b0ad3f7" + " " + "flex flex-col items-center transition-transform duration-200 group-hover:scale-110",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr ".concat(tool.color, " shadow-lg text-2xl"),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-a0c230823b0ad3f7" + " " + "text-xl",
                                                                    children: tool.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                    lineNumber: 585,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 582,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a0c230823b0ad3f7" + " " + "mt-2 text-white font-medium text-center",
                                                                children: tool.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                                lineNumber: 587,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, tool.name, true, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 578,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 550,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 536,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a0c230823b0ad3f7" + " " + "overflow-hidden absolute top-0 left-0 w-full h-full pointer-events-none -z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a0c230823b0ad3f7" + " " + "absolute left-1/4 top-0 w-72 h-72 bg-gradient-to-br from-blue-500/30 via-purple-400/20 to-pink-400/30 rounded-full blur-3xl animate-blob1"
                                    }, void 0, false, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 597,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a0c230823b0ad3f7" + " " + "absolute right-1/4 bottom-0 w-72 h-72 bg-gradient-to-br from-pink-400/30 via-yellow-300/20 to-blue-400/30 rounded-full blur-3xl animate-blob2"
                                    }, void 0, false, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 598,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                lineNumber: 596,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "a0c230823b0ad3f7",
                                children: "@keyframes gradient-x{0%,to{background-position:0%}50%{background-position:100%}}.animate-gradient-x.jsx-a0c230823b0ad3f7{background-size:200% 200%;animation:6s ease-in-out infinite gradient-x}@keyframes blob1{0%,to{transform:translateY(0)scale(1)}50%{transform:translateY(-30px)scale(1.1)}}.animate-blob1.jsx-a0c230823b0ad3f7{animation:8s ease-in-out infinite blob1}@keyframes blob2{0%,to{transform:translateY(0)scale(1)}50%{transform:translateY(30px)scale(1.1)}}.animate-blob2.jsx-a0c230823b0ad3f7{animation:10s ease-in-out infinite blob2}"
                            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative px-4 mx-auto py-16 max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-10 text-4xl font-extrabold text-center text-blue-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block align-middle",
                                        children: "🌐"
                                    }, void 0, false, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 642,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Online Presence"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                lineNumber: 641,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex flex-col items-center transition-transform duration-200 group hover:scale-110",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center justify-center mb-2 w-16 h-16 bg-gradient-to-tr from-gray-800 to-gray-600 rounded-full shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "36",
                                                    height: "36",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.42-.012 2.75 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z",
                                                        fill: "#fff"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                        lineNumber: 655,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 654,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 653,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-medium transition-colors group-hover:text-blue-400",
                                                children: "GitHub"
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 661,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 647,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex flex-col items-center transition-transform duration-200 group hover:scale-110",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center justify-center mb-2 w-16 h-16 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "36",
                                                    height: "36",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: "24",
                                                            height: "24",
                                                            rx: "4",
                                                            fill: "#2563eb"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 674,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7.75 8.5A1.25 1.25 0 1 1 7.75 6a1.25 1.25 0 0 1 0 2.5zm.13 2.25H6.12V18h1.76v-7.25zm3.13 0h-1.75V18h1.75v-3.5c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75V18h1.75v-3.75c0-2.07-1.68-3.75-3.75-3.75s-3.75 1.68-3.75 3.75V18h1.75v-7.25z",
                                                            fill: "#fff"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 675,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 673,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 672,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-medium transition-colors group-hover:text-blue-400",
                                                children: "LinkedIn"
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 681,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 666,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://leetcode.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex flex-col items-center transition-transform duration-200 group hover:scale-110",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center justify-center mb-2 w-16 h-16 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-full shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "36",
                                                    height: "36",
                                                    viewBox: "0 0 50 50",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M25 4C13.42 4 4 13.42 4 25s9.42 21 21 21 21-9.42 21-21S36.58 4 25 4zm0 38c-9.37 0-17-7.63-17-17S15.63 8 25 8s17 7.63 17 17-7.63 17-17 17z",
                                                            fill: "#fff"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 694,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M32.5 32.5l-10-10 10-10",
                                                            stroke: "#f59e0b",
                                                            strokeWidth: "3",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 698,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 693,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 692,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-medium transition-colors group-hover:text-yellow-400",
                                                children: "LeetCode"
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 707,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 686,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.hackerrank.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex flex-col items-center transition-transform duration-200 group hover:scale-110",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center justify-center mb-2 w-16 h-16 bg-gradient-to-tr from-green-500 to-green-700 rounded-full shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "36",
                                                    height: "36",
                                                    viewBox: "0 0 50 50",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "8",
                                                            y: "8",
                                                            width: "34",
                                                            height: "34",
                                                            rx: "8",
                                                            fill: "#10b981"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 720,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M20 16v18M30 16v18M16 20h18M16 30h18",
                                                            stroke: "#fff",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 728,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 719,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 718,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-medium transition-colors group-hover:text-green-300",
                                                children: "HackerRank"
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 736,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 712,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.codechef.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex flex-col items-center transition-transform duration-200 group hover:scale-110",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center justify-center mb-2 w-16 h-16 bg-gradient-to-tr from-gray-700 to-yellow-800 rounded-full shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "36",
                                                    height: "36",
                                                    viewBox: "0 0 50 50",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                            cx: "25",
                                                            cy: "25",
                                                            rx: "21",
                                                            ry: "21",
                                                            fill: "#fff"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 749,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M15 35c0-5 5-9 10-9s10 4 10 9",
                                                            stroke: "#a16207",
                                                            strokeWidth: "2",
                                                            fill: "none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 750,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                            cx: "20",
                                                            cy: "23",
                                                            rx: "2",
                                                            ry: "3",
                                                            fill: "#a16207"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 756,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                            cx: "30",
                                                            cy: "23",
                                                            rx: "2",
                                                            ry: "3",
                                                            fill: "#a16207"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 757,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "22",
                                                            y: "32",
                                                            width: "6",
                                                            height: "2",
                                                            rx: "1",
                                                            fill: "#a16207"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                            lineNumber: 758,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                    lineNumber: 748,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 747,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-medium transition-colors group-hover:text-yellow-400",
                                                children: "CodeChef"
                                            }, void 0, false, {
                                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                                lineNumber: 768,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                        lineNumber: 741,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                                lineNumber: 645,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vamp/src/components/section/aboutsection/AboutMe.jsx",
                        lineNumber: 640,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true);
};
_s1(AboutMe, "KuefwFbTf8J0feEpY+kOWMrnCPo=");
_c1 = AboutMe;
const __TURBOPACK__default__export__ = AboutMe;
var _c, _c1;
__turbopack_context__.k.register(_c, "PortalTransition");
__turbopack_context__.k.register(_c1, "AboutMe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=vamp_src_components_section_aboutsection_AboutMe_jsx_1b063734._.js.map