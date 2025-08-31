module.exports = [
"[project]/vamp/node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    outline: {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    },
    filled: {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        stroke: "none"
    }
};
;
 //# sourceMappingURL=defaultAttributes.mjs.map
}),
"[project]/vamp/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createReactComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs [app-rsc] (ecmascript)");
;
;
const createReactComponent = (type, iconName, iconNamePascal, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, stroke = 2, title, className, children, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])("svg", {
            ref,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"][type],
            width: size,
            height: size,
            className: [
                `tabler-icon`,
                `tabler-icon-${iconName}`,
                className
            ].join(" "),
            ...type === "filled" ? {
                fill: color
            } : {
                strokeWidth: stroke,
                stroke: color
            },
            ...rest
        }, [
            title && (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])("title", {
                key: "svg-title"
            }, title),
            ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
            ...Array.isArray(children) ? children : [
                children
            ]
        ]));
    Component.displayName = `${iconNamePascal}`;
    return Component;
};
;
 //# sourceMappingURL=createReactComponent.mjs.map
}),
"[project]/vamp/node_modules/@tabler/icons-react/dist/esm/icons/IconMail.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconMail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M3 7l9 6l9 -6",
            "key": "svg-1"
        }
    ]
];
const IconMail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("outline", "mail", "Mail", __iconNode);
;
 //# sourceMappingURL=IconMail.mjs.map
}),
"[project]/vamp/node_modules/@tabler/icons-react/dist/esm/icons/IconMail.mjs [app-rsc] (ecmascript) <export default as IconMail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconMail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/@tabler/icons-react/dist/esm/icons/IconMail.mjs [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=15bfa_%40tabler_icons-react_dist_esm_8ae8e9d9._.js.map