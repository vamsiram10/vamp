(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vamp/src/app/contactme/layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
"use client";
;
;
function ContactLayout(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactLenis"], {
        root: true,
        options: {
            smoothWheel: true,
            lerp: 0.1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-[100vh] w-screen overflow-x-hidden bg-black",
            children: children
        }, void 0, false, {
            fileName: "[project]/vamp/src/app/contactme/layout.js",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vamp/src/app/contactme/layout.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = ContactLayout;
const __TURBOPACK__default__export__ = ContactLayout;
var _c;
__turbopack_context__.k.register(_c, "ContactLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vamp/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/vamp/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// package.json
__turbopack_context__.s([
    "default",
    ()=>Lenis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
var version = "1.3.10";
// packages/core/src/maths.ts
function clamp(min, input, max) {
    return Math.max(min, Math.min(input, max));
}
function lerp(x, y, t) {
    return (1 - t) * x + t * y;
}
function damp(x, y, lambda, deltaTime) {
    return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
}
function modulo(n, d) {
    return (n % d + d) % d;
}
// packages/core/src/animate.ts
var Animate = class {
    /**
   * Advance the animation by the given delta time
   *
   * @param deltaTime - The time in seconds to advance the animation
   */ advance(deltaTime) {
        var _this_onUpdate, _this;
        if (!this.isRunning) return;
        let completed = false;
        if (this.duration && this.easing) {
            this.currentTime += deltaTime;
            const linearProgress = clamp(0, this.currentTime / this.duration, 1);
            completed = linearProgress >= 1;
            const easedProgress = completed ? 1 : this.easing(linearProgress);
            this.value = this.from + (this.to - this.from) * easedProgress;
        } else if (this.lerp) {
            this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
            if (Math.round(this.value) === this.to) {
                this.value = this.to;
                completed = true;
            }
        } else {
            this.value = this.to;
            completed = true;
        }
        if (completed) {
            this.stop();
        }
        (_this_onUpdate = (_this = this).onUpdate) === null || _this_onUpdate === void 0 ? void 0 : _this_onUpdate.call(_this, this.value, completed);
    }
    /** Stop the animation */ stop() {
        this.isRunning = false;
    }
    /**
   * Set up the animation from a starting value to an ending value
   * with optional parameters for lerping, duration, easing, and onUpdate callback
   *
   * @param from - The starting value
   * @param to - The ending value
   * @param options - Options for the animation
   */ fromTo(from, to, param) {
        let { lerp: lerp2, duration, easing, onStart, onUpdate } = param;
        this.from = this.value = from;
        this.to = to;
        this.lerp = lerp2;
        this.duration = duration;
        this.easing = easing;
        this.currentTime = 0;
        this.isRunning = true;
        onStart === null || onStart === void 0 ? void 0 : onStart();
        this.onUpdate = onUpdate;
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isRunning", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "value", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "from", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "to", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "currentTime", 0);
        // These are instanciated in the fromTo method
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lerp", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "duration", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "easing", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onUpdate", void 0);
    }
};
// packages/core/src/debounce.ts
function debounce(callback, delay) {
    let timer;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            timer = void 0;
            callback.apply(context, args);
        }, delay);
    };
}
// packages/core/src/dimensions.ts
var Dimensions = class {
    destroy() {
        var _this_wrapperResizeObserver, _this_contentResizeObserver;
        (_this_wrapperResizeObserver = this.wrapperResizeObserver) === null || _this_wrapperResizeObserver === void 0 ? void 0 : _this_wrapperResizeObserver.disconnect();
        (_this_contentResizeObserver = this.contentResizeObserver) === null || _this_contentResizeObserver === void 0 ? void 0 : _this_contentResizeObserver.disconnect();
        if (this.wrapper === window && this.debouncedResize) {
            window.removeEventListener("resize", this.debouncedResize, false);
        }
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        };
    }
    constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "width", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "height", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "scrollHeight", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "scrollWidth", 0);
        // These are instanciated in the constructor as they need information from the options
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "debouncedResize", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "wrapperResizeObserver", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "contentResizeObserver", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "resize", ()=>{
            this.onWrapperResize();
            this.onContentResize();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWrapperResize", ()=>{
            if (this.wrapper instanceof Window) {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
            } else {
                this.width = this.wrapper.clientWidth;
                this.height = this.wrapper.clientHeight;
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onContentResize", ()=>{
            if (this.wrapper instanceof Window) {
                this.scrollHeight = this.content.scrollHeight;
                this.scrollWidth = this.content.scrollWidth;
            } else {
                this.scrollHeight = this.wrapper.scrollHeight;
                this.scrollWidth = this.wrapper.scrollWidth;
            }
        });
        this.wrapper = wrapper;
        this.content = content;
        if (autoResize) {
            this.debouncedResize = debounce(this.resize, debounceValue);
            if (this.wrapper instanceof Window) {
                window.addEventListener("resize", this.debouncedResize, false);
            } else {
                this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
                this.wrapperResizeObserver.observe(this.wrapper);
            }
            this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
            this.contentResizeObserver.observe(this.content);
        }
        this.resize();
    }
};
// packages/core/src/emitter.ts
var Emitter = class {
    /**
   * Emit an event with the given data
   * @param event Event name
   * @param args Data to pass to the event handlers
   */ emit(event) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        let callbacks = this.events[event] || [];
        for(let i = 0, length = callbacks.length; i < length; i++){
            var _callbacks_i;
            (_callbacks_i = callbacks[i]) === null || _callbacks_i === void 0 ? void 0 : _callbacks_i.call(callbacks, ...args);
        }
    }
    /**
   * Add a callback to the event
   * @param event Event name
   * @param cb Callback function
   * @returns Unsubscribe function
   */ on(event, cb) {
        var _this_events_event;
        ((_this_events_event = this.events[event]) === null || _this_events_event === void 0 ? void 0 : _this_events_event.push(cb)) || (this.events[event] = [
            cb
        ]);
        return ()=>{
            var _this_events_event;
            this.events[event] = (_this_events_event = this.events[event]) === null || _this_events_event === void 0 ? void 0 : _this_events_event.filter((i)=>cb !== i);
        };
    }
    /**
   * Remove a callback from the event
   * @param event Event name
   * @param callback Callback function
   */ off(event, callback) {
        var _this_events_event;
        this.events[event] = (_this_events_event = this.events[event]) === null || _this_events_event === void 0 ? void 0 : _this_events_event.filter((i)=>callback !== i);
    }
    /**
   * Remove all event listeners and clean up
   */ destroy() {
        this.events = {};
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "events", {});
    }
};
// packages/core/src/virtual-scroll.ts
var LINE_HEIGHT = 100 / 6;
var listenerOptions = {
    passive: false
};
var VirtualScroll = class {
    /**
   * Add an event listener for the given event and callback
   *
   * @param event Event name
   * @param callback Callback function
   */ on(event, callback) {
        return this.emitter.on(event, callback);
    }
    /** Remove all event listeners and clean up */ destroy() {
        this.emitter.destroy();
        window.removeEventListener("resize", this.onWindowResize, false);
        this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
        this.element.removeEventListener("touchstart", this.onTouchStart, listenerOptions);
        this.element.removeEventListener("touchmove", this.onTouchMove, listenerOptions);
        this.element.removeEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
    constructor(element, options = {
        wheelMultiplier: 1,
        touchMultiplier: 1
    }){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "touchStart", {
            x: 0,
            y: 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lastDelta", {
            x: 0,
            y: 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "window", {
            width: 0,
            height: 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "emitter", new Emitter());
        /**
   * Event handler for 'touchstart' event
   *
   * @param event Touch event
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchStart", (event)=>{
            const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
            this.touchStart.x = clientX;
            this.touchStart.y = clientY;
            this.lastDelta = {
                x: 0,
                y: 0
            };
            this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event
            });
        });
        /** Event handler for 'touchmove' event */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchMove", (event)=>{
            const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
            const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
            const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = clientX;
            this.touchStart.y = clientY;
            this.lastDelta = {
                x: deltaX,
                y: deltaY
            };
            this.emitter.emit("scroll", {
                deltaX,
                deltaY,
                event
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchEnd", (event)=>{
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event
            });
        });
        /** Event handler for 'wheel' event */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWheel", (event)=>{
            let { deltaX, deltaY, deltaMode } = event;
            const multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.width : 1;
            const multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.height : 1;
            deltaX *= multiplierX;
            deltaY *= multiplierY;
            deltaX *= this.options.wheelMultiplier;
            deltaY *= this.options.wheelMultiplier;
            this.emitter.emit("scroll", {
                deltaX,
                deltaY,
                event
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWindowResize", ()=>{
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        });
        this.element = element;
        this.options = options;
        window.addEventListener("resize", this.onWindowResize, false);
        this.onWindowResize();
        this.element.addEventListener("wheel", this.onWheel, listenerOptions);
        this.element.addEventListener("touchstart", this.onTouchStart, listenerOptions);
        this.element.addEventListener("touchmove", this.onTouchMove, listenerOptions);
        this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
};
// packages/core/src/lenis.ts
var defaultEasing = (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t));
var Lenis = class {
    /**
   * Destroy the lenis instance, remove all event listeners and clean up the class name
   */ destroy() {
        this.emitter.destroy();
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false);
        this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
            capture: true
        });
        this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, false);
        if (this.options.anchors && this.options.wrapper === window) {
            this.options.wrapper.removeEventListener("click", this.onClick, false);
        }
        this.virtualScroll.destroy();
        this.dimensions.destroy();
        this.cleanUpClassName();
        if (this.__rafID) {
            cancelAnimationFrame(this.__rafID);
        }
    }
    on(event, callback) {
        return this.emitter.on(event, callback);
    }
    off(event, callback) {
        return this.emitter.off(event, callback);
    }
    setScroll(scroll) {
        if (this.isHorizontal) {
            this.options.wrapper.scrollTo({
                left: scroll,
                behavior: "instant"
            });
        } else {
            this.options.wrapper.scrollTo({
                top: scroll,
                behavior: "instant"
            });
        }
    }
    /**
   * Force lenis to recalculate the dimensions
   */ resize() {
        this.dimensions.resize();
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.emit();
    }
    emit() {
        this.emitter.emit("scroll", this);
    }
    reset() {
        this.isLocked = false;
        this.isScrolling = false;
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.lastVelocity = this.velocity = 0;
        this.animate.stop();
    }
    /**
   * Start lenis scroll after it has been stopped
   */ start() {
        if (!this.isStopped) return;
        if (this.options.autoToggle) {
            this.rootElement.style.removeProperty("overflow");
            return;
        }
        this.internalStart();
    }
    internalStart() {
        if (!this.isStopped) return;
        this.reset();
        this.isStopped = false;
        this.emit();
    }
    /**
   * Stop lenis scroll
   */ stop() {
        if (this.isStopped) return;
        if (this.options.autoToggle) {
            this.rootElement.style.setProperty("overflow", "clip");
            return;
        }
        this.internalStop();
    }
    internalStop() {
        if (this.isStopped) return;
        this.reset();
        this.isStopped = true;
        this.emit();
    }
    /**
   * Scroll to a target value
   *
   * @param target The target value to scroll to
   * @param options The options for the scroll
   *
   * @example
   * lenis.scrollTo(100, {
   *   offset: 100,
   *   duration: 1,
   *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
   *   lerp: 0.1,
   *   onStart: () => {
   *     console.log('onStart')
   *   },
   *   onComplete: () => {
   *     console.log('onComplete')
   *   },
   * })
   */ scrollTo(target) {
        let { offset = 0, immediate = false, lock = false, duration = this.options.duration, easing = this.options.easing, lerp: lerp2 = this.options.lerp, onStart, onComplete, force = false, // scroll even if stopped
        programmatic = true, // called from outside of the class
        userData } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if ((this.isStopped || this.isLocked) && !force) return;
        if (typeof target === "string" && [
            "top",
            "left",
            "start"
        ].includes(target)) {
            target = 0;
        } else if (typeof target === "string" && [
            "bottom",
            "right",
            "end"
        ].includes(target)) {
            target = this.limit;
        } else {
            let node;
            if (typeof target === "string") {
                node = document.querySelector(target);
            } else if (target instanceof HTMLElement && (target === null || target === void 0 ? void 0 : target.nodeType)) {
                node = target;
            }
            if (node) {
                if (this.options.wrapper !== window) {
                    const wrapperRect = this.rootElement.getBoundingClientRect();
                    offset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
                }
                const rect = node.getBoundingClientRect();
                target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
            }
        }
        if (typeof target !== "number") return;
        target += offset;
        target = Math.round(target);
        if (this.options.infinite) {
            if (programmatic) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const distance = target - this.animatedScroll;
                if (distance > this.limit / 2) {
                    target = target - this.limit;
                } else if (distance < -this.limit / 2) {
                    target = target + this.limit;
                }
            }
        } else {
            target = clamp(0, target, this.limit);
        }
        if (target === this.targetScroll) {
            onStart === null || onStart === void 0 ? void 0 : onStart(this);
            onComplete === null || onComplete === void 0 ? void 0 : onComplete(this);
            return;
        }
        this.userData = userData !== null && userData !== void 0 ? userData : {};
        if (immediate) {
            this.animatedScroll = this.targetScroll = target;
            this.setScroll(this.scroll);
            this.reset();
            this.preventNextNativeScrollEvent();
            this.emit();
            onComplete === null || onComplete === void 0 ? void 0 : onComplete(this);
            this.userData = {};
            requestAnimationFrame(()=>{
                this.dispatchScrollendEvent();
            });
            return;
        }
        if (!programmatic) {
            this.targetScroll = target;
        }
        if (typeof duration === "number" && typeof easing !== "function") {
            easing = defaultEasing;
        } else if (typeof easing === "function" && typeof duration !== "number") {
            duration = 1;
        }
        this.animate.fromTo(this.animatedScroll, target, {
            duration,
            easing,
            lerp: lerp2,
            onStart: ()=>{
                if (lock) this.isLocked = true;
                this.isScrolling = "smooth";
                onStart === null || onStart === void 0 ? void 0 : onStart(this);
            },
            onUpdate: (value, completed)=>{
                this.isScrolling = "smooth";
                this.lastVelocity = this.velocity;
                this.velocity = value - this.animatedScroll;
                this.direction = Math.sign(this.velocity);
                this.animatedScroll = value;
                this.setScroll(this.scroll);
                if (programmatic) {
                    this.targetScroll = value;
                }
                if (!completed) this.emit();
                if (completed) {
                    this.reset();
                    this.emit();
                    onComplete === null || onComplete === void 0 ? void 0 : onComplete(this);
                    this.userData = {};
                    requestAnimationFrame(()=>{
                        this.dispatchScrollendEvent();
                    });
                    this.preventNextNativeScrollEvent();
                }
            }
        });
    }
    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = true;
        requestAnimationFrame(()=>{
            this._preventNextNativeScrollEvent = false;
        });
    }
    checkNestedScroll(node, param) {
        let { deltaX, deltaY } = param;
        var _node;
        const time = Date.now();
        var __lenis;
        const cache = (__lenis = (_node = node)._lenis) !== null && __lenis !== void 0 ? __lenis : _node._lenis = {};
        let hasOverflowX, hasOverflowY, isScrollableX, isScrollableY, scrollWidth, scrollHeight, clientWidth, clientHeight;
        const gestureOrientation = this.options.gestureOrientation;
        var _cache_time;
        if (time - ((_cache_time = cache.time) !== null && _cache_time !== void 0 ? _cache_time : 0) > 2e3) {
            cache.time = Date.now();
            const computedStyle = window.getComputedStyle(node);
            cache.computedStyle = computedStyle;
            const overflowXString = computedStyle.overflowX;
            const overflowYString = computedStyle.overflowY;
            hasOverflowX = [
                "auto",
                "overlay",
                "scroll"
            ].includes(overflowXString);
            hasOverflowY = [
                "auto",
                "overlay",
                "scroll"
            ].includes(overflowYString);
            cache.hasOverflowX = hasOverflowX;
            cache.hasOverflowY = hasOverflowY;
            if (!hasOverflowX && !hasOverflowY) return false;
            if (gestureOrientation === "vertical" && !hasOverflowY) return false;
            if (gestureOrientation === "horizontal" && !hasOverflowX) return false;
            scrollWidth = node.scrollWidth;
            scrollHeight = node.scrollHeight;
            clientWidth = node.clientWidth;
            clientHeight = node.clientHeight;
            isScrollableX = scrollWidth > clientWidth;
            isScrollableY = scrollHeight > clientHeight;
            cache.isScrollableX = isScrollableX;
            cache.isScrollableY = isScrollableY;
            cache.scrollWidth = scrollWidth;
            cache.scrollHeight = scrollHeight;
            cache.clientWidth = clientWidth;
            cache.clientHeight = clientHeight;
        } else {
            isScrollableX = cache.isScrollableX;
            isScrollableY = cache.isScrollableY;
            hasOverflowX = cache.hasOverflowX;
            hasOverflowY = cache.hasOverflowY;
            scrollWidth = cache.scrollWidth;
            scrollHeight = cache.scrollHeight;
            clientWidth = cache.clientWidth;
            clientHeight = cache.clientHeight;
        }
        if (!hasOverflowX && !hasOverflowY || !isScrollableX && !isScrollableY) {
            return false;
        }
        if (gestureOrientation === "vertical" && (!hasOverflowY || !isScrollableY)) return false;
        if (gestureOrientation === "horizontal" && (!hasOverflowX || !isScrollableX)) return false;
        let orientation;
        if (gestureOrientation === "horizontal") {
            orientation = "x";
        } else if (gestureOrientation === "vertical") {
            orientation = "y";
        } else {
            const isScrollingX = deltaX !== 0;
            const isScrollingY = deltaY !== 0;
            if (isScrollingX && hasOverflowX && isScrollableX) {
                orientation = "x";
            }
            if (isScrollingY && hasOverflowY && isScrollableY) {
                orientation = "y";
            }
        }
        if (!orientation) return false;
        let scroll, maxScroll, delta, hasOverflow, isScrollable;
        if (orientation === "x") {
            scroll = node.scrollLeft;
            maxScroll = scrollWidth - clientWidth;
            delta = deltaX;
            hasOverflow = hasOverflowX;
            isScrollable = isScrollableX;
        } else if (orientation === "y") {
            scroll = node.scrollTop;
            maxScroll = scrollHeight - clientHeight;
            delta = deltaY;
            hasOverflow = hasOverflowY;
            isScrollable = isScrollableY;
        } else {
            return false;
        }
        const willScroll = delta > 0 ? scroll < maxScroll : scroll > 0;
        return willScroll && hasOverflow && isScrollable;
    }
    /**
   * The root element on which lenis is instanced
   */ get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    /**
   * The limit which is the maximum scroll value
   */ get limit() {
        if (this.options.__experimental__naiveDimensions) {
            if (this.isHorizontal) {
                return this.rootElement.scrollWidth - this.rootElement.clientWidth;
            } else {
                return this.rootElement.scrollHeight - this.rootElement.clientHeight;
            }
        } else {
            return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
    }
    /**
   * Whether or not the scroll is horizontal
   */ get isHorizontal() {
        return this.options.orientation === "horizontal";
    }
    /**
   * The actual scroll value
   */ get actualScroll() {
        const wrapper = this.options.wrapper;
        var _wrapper_scrollX, _wrapper_scrollY;
        return this.isHorizontal ? (_wrapper_scrollX = wrapper.scrollX) !== null && _wrapper_scrollX !== void 0 ? _wrapper_scrollX : wrapper.scrollLeft : (_wrapper_scrollY = wrapper.scrollY) !== null && _wrapper_scrollY !== void 0 ? _wrapper_scrollY : wrapper.scrollTop;
    }
    /**
   * The current scroll value
   */ get scroll() {
        return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    /**
   * The progress of the scroll relative to the limit
   */ get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    /**
   * Current scroll state
   */ get isScrolling() {
        return this._isScrolling;
    }
    set isScrolling(value) {
        if (this._isScrolling !== value) {
            this._isScrolling = value;
            this.updateClassName();
        }
    }
    /**
   * Check if lenis is stopped
   */ get isStopped() {
        return this._isStopped;
    }
    set isStopped(value) {
        if (this._isStopped !== value) {
            this._isStopped = value;
            this.updateClassName();
        }
    }
    /**
   * Check if lenis is locked
   */ get isLocked() {
        return this._isLocked;
    }
    set isLocked(value) {
        if (this._isLocked !== value) {
            this._isLocked = value;
            this.updateClassName();
        }
    }
    /**
   * Check if lenis is smooth scrolling
   */ get isSmooth() {
        return this.isScrolling === "smooth";
    }
    /**
   * The class name applied to the wrapper element
   */ get className() {
        let className = "lenis";
        if (this.options.autoToggle) className += " lenis-autoToggle";
        if (this.isStopped) className += " lenis-stopped";
        if (this.isLocked) className += " lenis-locked";
        if (this.isScrolling) className += " lenis-scrolling";
        if (this.isScrolling === "smooth") className += " lenis-smooth";
        return className;
    }
    updateClassName() {
        this.cleanUpClassName();
        this.rootElement.className = "".concat(this.rootElement.className, " ").concat(this.className).trim();
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
    constructor({ wrapper = window, content = document.documentElement, eventsTarget = wrapper, smoothWheel = true, syncTouch = false, syncTouchLerp = 0.075, touchInertiaExponent = 1.7, duration, // in seconds
    easing, lerp: lerp2 = 0.1, infinite = false, orientation = "vertical", // vertical, horizontal
    gestureOrientation = orientation === "horizontal" ? "both" : "vertical", // vertical, horizontal, both
    touchMultiplier = 1, wheelMultiplier = 1, autoResize = true, prevent, virtualScroll, overscroll = true, autoRaf = false, anchors = false, autoToggle = false, // https://caniuse.com/?search=transition-behavior
    allowNestedScroll = false, __experimental__naiveDimensions = false } = {}){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isScrolling", false);
        // true when scroll is animating
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isStopped", false);
        // true if user should not be able to scroll - enable/disable programmatically
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isLocked", false);
        // same as isStopped but enabled/disabled when scroll reaches target
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_preventNextNativeScrollEvent", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_resetVelocityTimeout", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "__rafID", null);
        /**
   * Whether or not the user is touching the screen
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isTouching", void 0);
        /**
   * The time in ms since the lenis instance was created
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "time", 0);
        /**
   * User data that will be forwarded through the scroll event
   *
   * @example
   * lenis.scrollTo(100, {
   *   userData: {
   *     foo: 'bar'
   *   }
   * })
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "userData", {});
        /**
   * The last velocity of the scroll
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lastVelocity", 0);
        /**
   * The current velocity of the scroll
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "velocity", 0);
        /**
   * The direction of the scroll
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "direction", 0);
        /**
   * The options passed to the lenis instance
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "options", void 0);
        /**
   * The target scroll value
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "targetScroll", void 0);
        /**
   * The animated scroll value
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "animatedScroll", void 0);
        // These are instanciated here as they don't need information from the options
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "animate", new Animate());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "emitter", new Emitter());
        // These are instanciated in the constructor as they need information from the options
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "dimensions", void 0);
        // This is not private because it's used in the Snap class
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "virtualScroll", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onScrollEnd", (e)=>{
            if (!(e instanceof CustomEvent)) {
                if (this.isScrolling === "smooth" || this.isScrolling === false) {
                    e.stopPropagation();
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "dispatchScrollendEvent", ()=>{
            this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                bubbles: this.options.wrapper === window,
                // cancelable: false,
                detail: {
                    lenisScrollEnd: true
                }
            }));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTransitionEnd", (event)=>{
            if (event.propertyName.includes("overflow")) {
                const property = this.isHorizontal ? "overflow-x" : "overflow-y";
                const overflow = getComputedStyle(this.rootElement)[property];
                if ([
                    "hidden",
                    "clip"
                ].includes(overflow)) {
                    this.internalStop();
                } else {
                    this.internalStart();
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onClick", (event)=>{
            const path = event.composedPath();
            const anchor = path.find((node)=>{
                var _node_getAttribute, _node_getAttribute1, _node_getAttribute2;
                return node instanceof HTMLAnchorElement && (((_node_getAttribute = node.getAttribute("href")) === null || _node_getAttribute === void 0 ? void 0 : _node_getAttribute.startsWith("#")) || ((_node_getAttribute1 = node.getAttribute("href")) === null || _node_getAttribute1 === void 0 ? void 0 : _node_getAttribute1.startsWith("/#")) || ((_node_getAttribute2 = node.getAttribute("href")) === null || _node_getAttribute2 === void 0 ? void 0 : _node_getAttribute2.startsWith("./#")));
            });
            if (anchor) {
                const id = anchor.getAttribute("href");
                if (id) {
                    const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
                    let target = "#".concat(id.split("#")[1]);
                    if ([
                        "#",
                        "/#",
                        "./#",
                        "#top",
                        "/#top",
                        "./#top"
                    ].includes(id)) {
                        target = 0;
                    }
                    this.scrollTo(target, options);
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onPointerDown", (event)=>{
            if (event.button === 1) {
                this.reset();
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onVirtualScroll", (data)=>{
            if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false) return;
            const { deltaX, deltaY, event } = data;
            this.emitter.emit("virtual-scroll", {
                deltaX,
                deltaY,
                event
            });
            if (event.ctrlKey) return;
            if (event.lenisStopPropagation) return;
            const isTouch = event.type.includes("touch");
            const isWheel = event.type.includes("wheel");
            this.isTouching = event.type === "touchstart" || event.type === "touchmove";
            const isClickOrTap = deltaX === 0 && deltaY === 0;
            const isTapToStop = this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked;
            if (isTapToStop) {
                this.reset();
                return;
            }
            const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
            if (isClickOrTap || isUnknownGesture) {
                return;
            }
            let composedPath = event.composedPath();
            composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
            const prevent = this.options.prevent;
            if (!!composedPath.find((node)=>{
                var _node_hasAttribute, _node_hasAttribute1, _node_hasAttribute2;
                return node instanceof HTMLElement && (typeof prevent === "function" && (prevent === null || prevent === void 0 ? void 0 : prevent(node)) || ((_node_hasAttribute = node.hasAttribute) === null || _node_hasAttribute === void 0 ? void 0 : _node_hasAttribute.call(node, "data-lenis-prevent")) || isTouch && ((_node_hasAttribute1 = node.hasAttribute) === null || _node_hasAttribute1 === void 0 ? void 0 : _node_hasAttribute1.call(node, "data-lenis-prevent-touch")) || isWheel && ((_node_hasAttribute2 = node.hasAttribute) === null || _node_hasAttribute2 === void 0 ? void 0 : _node_hasAttribute2.call(node, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.checkNestedScroll(node, {
                    deltaX,
                    deltaY
                }));
            })) return;
            if (this.isStopped || this.isLocked) {
                if (event.cancelable) {
                    event.preventDefault();
                }
                return;
            }
            const isSmooth = this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel;
            if (!isSmooth) {
                this.isScrolling = "native";
                this.animate.stop();
                event.lenisStopPropagation = true;
                return;
            }
            let delta = deltaY;
            if (this.options.gestureOrientation === "both") {
                delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
            } else if (this.options.gestureOrientation === "horizontal") {
                delta = deltaX;
            }
            if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
                event.lenisStopPropagation = true;
            }
            if (event.cancelable) {
                event.preventDefault();
            }
            const isSyncTouch = isTouch && this.options.syncTouch;
            const isTouchEnd = isTouch && event.type === "touchend";
            const hasTouchInertia = isTouchEnd;
            if (hasTouchInertia) {
                delta = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent);
            }
            this.scrollTo(this.targetScroll + delta, {
                programmatic: false,
                ...isSyncTouch ? {
                    lerp: hasTouchInertia ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onNativeScroll", ()=>{
            if (this._resetVelocityTimeout !== null) {
                clearTimeout(this._resetVelocityTimeout);
                this._resetVelocityTimeout = null;
            }
            if (this._preventNextNativeScrollEvent) {
                this._preventNextNativeScrollEvent = false;
                return;
            }
            if (this.isScrolling === false || this.isScrolling === "native") {
                const lastScroll = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll;
                this.lastVelocity = this.velocity;
                this.velocity = this.animatedScroll - lastScroll;
                this.direction = Math.sign(this.animatedScroll - lastScroll);
                if (!this.isStopped) {
                    this.isScrolling = "native";
                }
                this.emit();
                if (this.velocity !== 0) {
                    this._resetVelocityTimeout = setTimeout(()=>{
                        this.lastVelocity = this.velocity;
                        this.velocity = 0;
                        this.isScrolling = false;
                        this.emit();
                    }, 400);
                }
            }
        });
        /**
   * RequestAnimationFrame for lenis
   *
   * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "raf", (time)=>{
            const deltaTime = time - (this.time || time);
            this.time = time;
            this.animate.advance(deltaTime * 1e-3);
            if (this.options.autoRaf) {
                this.__rafID = requestAnimationFrame(this.raf);
            }
        });
        window.lenisVersion = version;
        if (!wrapper || wrapper === document.documentElement) {
            wrapper = window;
        }
        if (typeof duration === "number" && typeof easing !== "function") {
            easing = defaultEasing;
        } else if (typeof easing === "function" && typeof duration !== "number") {
            duration = 1;
        }
        this.options = {
            wrapper,
            content,
            eventsTarget,
            smoothWheel,
            syncTouch,
            syncTouchLerp,
            touchInertiaExponent,
            duration,
            easing,
            lerp: lerp2,
            infinite,
            gestureOrientation,
            orientation,
            touchMultiplier,
            wheelMultiplier,
            autoResize,
            prevent,
            virtualScroll,
            overscroll,
            autoRaf,
            anchors,
            autoToggle,
            allowNestedScroll,
            __experimental__naiveDimensions
        };
        this.dimensions = new Dimensions(wrapper, content, {
            autoResize
        });
        this.updateClassName();
        this.targetScroll = this.animatedScroll = this.actualScroll;
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false);
        this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: true
        });
        if (this.options.anchors && this.options.wrapper === window) {
            this.options.wrapper.addEventListener("click", this.onClick, false);
        }
        this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, false);
        this.virtualScroll = new VirtualScroll(eventsTarget, {
            touchMultiplier,
            wheelMultiplier
        });
        this.virtualScroll.on("scroll", this.onVirtualScroll);
        if (this.options.autoToggle) {
            this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
                passive: true
            });
        }
        if (this.options.autoRaf) {
            this.__rafID = requestAnimationFrame(this.raf);
        }
    }
};
;
 //# sourceMappingURL=lenis.mjs.map
}),
"[project]/vamp/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lenis",
    ()=>ReactLenis,
    "LenisContext",
    ()=>LenisContext,
    "ReactLenis",
    ()=>ReactLenis,
    "default",
    ()=>ReactLenis,
    "useLenis",
    ()=>useLenis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
// packages/react/src/provider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// packages/react/src/provider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vamp/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
var Store = class {
    set(state) {
        this.state = state;
        for (let listener of this.listeners){
            listener(this.state);
        }
    }
    subscribe(listener) {
        this.listeners = [
            ...this.listeners,
            listener
        ];
        return ()=>{
            this.listeners = this.listeners.filter((l)=>l !== listener);
        };
    }
    get() {
        return this.state;
    }
    constructor(state){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "listeners", []);
        this.state = state;
    }
};
function useStore(store) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(store.get());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStore.useEffect": ()=>{
            return store.subscribe({
                "useStore.useEffect": (state2)=>setState(state2)
            }["useStore.useEffect"]);
        }
    }["useStore.useEffect"], [
        store
    ]);
    return state;
}
;
var LenisContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
var rootLenisContextStore = new Store(null);
var ReactLenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { children, root = false, options = {}, autoRaf = true, ...props } = param;
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [lenis, setLenis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "ReactLenis.useImperativeHandle": ()=>({
                wrapper: wrapperRef.current,
                content: contentRef.current,
                lenis
            })
    }["ReactLenis.useImperativeHandle"], [
        lenis
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReactLenis.useEffect2": ()=>{
            var _options_autoRaf;
            const lenis2 = new __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                ...options,
                ...wrapperRef.current && contentRef.current && {
                    wrapper: wrapperRef.current,
                    content: contentRef.current
                },
                autoRaf: (_options_autoRaf = options === null || options === void 0 ? void 0 : options.autoRaf) !== null && _options_autoRaf !== void 0 ? _options_autoRaf : autoRaf
            });
            setLenis(lenis2);
            return ({
                "ReactLenis.useEffect2": ()=>{
                    lenis2.destroy();
                    setLenis(void 0);
                }
            })["ReactLenis.useEffect2"];
        }
    }["ReactLenis.useEffect2"], [
        root,
        JSON.stringify({
            ...options,
            wrapper: null,
            content: null
        })
    ]);
    const callbacksRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const addCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReactLenis.useCallback[addCallback]": (callback, priority)=>{
            callbacksRefs.current.push({
                callback,
                priority
            });
            callbacksRefs.current.sort({
                "ReactLenis.useCallback[addCallback]": (a, b)=>a.priority - b.priority
            }["ReactLenis.useCallback[addCallback]"]);
        }
    }["ReactLenis.useCallback[addCallback]"], []);
    const removeCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReactLenis.useCallback[removeCallback]": (callback)=>{
            callbacksRefs.current = callbacksRefs.current.filter({
                "ReactLenis.useCallback[removeCallback]": (cb)=>cb.callback !== callback
            }["ReactLenis.useCallback[removeCallback]"]);
        }
    }["ReactLenis.useCallback[removeCallback]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReactLenis.useEffect2": ()=>{
            if (root && lenis) {
                rootLenisContextStore.set({
                    lenis,
                    addCallback,
                    removeCallback
                });
                return ({
                    "ReactLenis.useEffect2": ()=>rootLenisContextStore.set(null)
                })["ReactLenis.useEffect2"];
            }
        }
    }["ReactLenis.useEffect2"], [
        root,
        lenis,
        addCallback,
        removeCallback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReactLenis.useEffect2": ()=>{
            if (!lenis) return;
            const onScroll = {
                "ReactLenis.useEffect2.onScroll": (data)=>{
                    for(let i = 0; i < callbacksRefs.current.length; i++){
                        var _callbacksRefs_current_i;
                        (_callbacksRefs_current_i = callbacksRefs.current[i]) === null || _callbacksRefs_current_i === void 0 ? void 0 : _callbacksRefs_current_i.callback(data);
                    }
                }
            }["ReactLenis.useEffect2.onScroll"];
            lenis.on("scroll", onScroll);
            return ({
                "ReactLenis.useEffect2": ()=>{
                    lenis.off("scroll", onScroll);
                }
            })["ReactLenis.useEffect2"];
        }
    }["ReactLenis.useEffect2"], [
        lenis
    ]);
    if (!children) return null;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LenisContext.Provider, {
        value: {
            lenis,
            addCallback,
            removeCallback
        },
        children: root && root !== "asChild" ? children : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: wrapperRef,
            ...props,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ref: contentRef,
                children
            })
        })
    });
});
;
var fallbackContext = {};
function useLenis(callback) {
    let deps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], priority = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    const localContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LenisContext);
    const rootContext = useStore(rootLenisContextStore);
    var _ref;
    const currentContext = (_ref = localContext !== null && localContext !== void 0 ? localContext : rootContext) !== null && _ref !== void 0 ? _ref : fallbackContext;
    const { lenis, addCallback, removeCallback } = currentContext;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vamp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLenis.useEffect3": ()=>{
            if (!callback || !addCallback || !removeCallback || !lenis) return;
            addCallback(callback, priority);
            callback(lenis);
            return ({
                "useLenis.useEffect3": ()=>{
                    removeCallback(callback);
                }
            })["useLenis.useEffect3"];
        }
    }["useLenis.useEffect3"], [
        lenis,
        addCallback,
        removeCallback,
        priority,
        ...deps
    ]);
    return lenis;
}
;
 //# sourceMappingURL=lenis-react.mjs.map
}),
]);

//# sourceMappingURL=vamp_124d2ad6._.js.map