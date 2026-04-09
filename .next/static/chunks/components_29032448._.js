(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/cursor-spotlight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorSpotlight",
    ()=>CursorSpotlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CursorSpotlight() {
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorSpotlight.useEffect": ()=>{
            const handleMouseMove = {
                "CursorSpotlight.useEffect.handleMouseMove": (e)=>{
                    setPosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                    setIsVisible(true);
                }
            }["CursorSpotlight.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "CursorSpotlight.useEffect.handleMouseLeave": ()=>{
                    setIsVisible(false);
                }
            }["CursorSpotlight.useEffect.handleMouseLeave"];
            window.addEventListener("mousemove", handleMouseMove);
            document.body.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "CursorSpotlight.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    document.body.removeEventListener("mouseleave", handleMouseLeave);
                }
            })["CursorSpotlight.useEffect"];
        }
    }["CursorSpotlight.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-0 z-30 transition-opacity duration-300",
        style: {
            opacity: isVisible ? 1 : 0,
            background: "radial-gradient(600px circle at ".concat(position.x, "px ").concat(position.y, "px, rgba(29, 78, 116, 0.15), transparent 80%)")
        }
    }, void 0, false, {
        fileName: "[project]/components/cursor-spotlight.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(CursorSpotlight, "ZZIbm6CHwP+suGVTVRHezoFOmO0=");
_c = CursorSpotlight;
var _c;
__turbopack_context__.k.register(_c, "CursorSpotlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const navItems = [
    {
        id: "about",
        label: "ABOUT"
    },
    {
        id: "experience",
        label: "EXPERIENCE"
    },
    {
        id: "projects",
        label: "PROJECTS"
    }
];
function Navigation() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("about");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Navigation.useEffect": (entries)=>{
                    entries.forEach({
                        "Navigation.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setActiveSection(entry.target.id);
                            }
                        }
                    }["Navigation.useEffect"]);
                }
            }["Navigation.useEffect"], {
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0
            });
            navItems.forEach({
                "Navigation.useEffect": (param)=>{
                    let { id } = param;
                    const element = document.getElementById(id);
                    if (element) observer.observe(element);
                }
            }["Navigation.useEffect"]);
            return ({
                "Navigation.useEffect": ()=>observer.disconnect()
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    const handleClick = (id)=>{
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "hidden lg:flex flex-col gap-4",
        children: navItems.map((param)=>{
            let { id, label } = param;
            const isActive = activeSection === id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handleClick(id),
                className: "group flex items-center gap-4 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-px transition-all duration-300 ".concat(isActive ? "w-16 bg-foreground" : "w-8 bg-muted group-hover:w-16 group-hover:bg-foreground")
                    }, void 0, false, {
                        fileName: "[project]/components/navigation.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold tracking-widest transition-colors duration-300 ".concat(isActive ? "text-foreground" : "text-muted group-hover:text-foreground"),
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/navigation.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this)
                ]
            }, id, true, {
                fileName: "[project]/components/navigation.tsx",
                lineNumber: 49,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/navigation.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Navigation, "U4Yery5aM8PJM30E65U5a2vXA6I=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_29032448._.js.map