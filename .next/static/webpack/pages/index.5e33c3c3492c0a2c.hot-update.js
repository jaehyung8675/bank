"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SLIDES = [\n    {\n        copyTop: \"We are in business to\",\n        copyBottom: \"help you do business.\"\n    },\n    {\n        copyTop: \"Human insight.\",\n        copyBottom: \"Advanced analytics.\"\n    },\n    {\n        copyTop: \"Choose the card\",\n        copyBottom: \"that works for you.\"\n    },\n    {\n        copyTop: \"You may qualify for\",\n        copyBottom: \"an upgrade.\"\n    },\n    {\n        copyTop: \"Up to 4.70%\",\n        copyBottom: \"Annual Percentage Yield.\"\n    }\n];\nfunction Home() {\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [slideUp, setSlideUp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    // const slideUpHandler = () => {\n    //   setTimeout(() => {\n    //     setSlideUp(true);\n    //   }, 100);\n    // };\n    // const goToSlide = (slideIndex) => {\n    //   setSlideUp(false);\n    //   setCurrentSlide(slideIndex);\n    //   slideUpHandler();\n    // };\n    // const autoTimerSlide = () => {\n    //   // setSlideUp(false);\n    //   if (currentSlide === SLIDES.length - 1) {\n    //     // slideUpHandler();\n    //     setCurrentSlide(0);\n    //     return () => {};\n    //   }\n    //   // slideUpHandler();\n    //   setCurrentSlide(currentSlide + 1);\n    //   return () => {};\n    // };\n    // setInterval(autoTimerSlide, 2000);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // setSlideUp(true);\n        setTimeout(()=>setCurrentSlide(currentSlide === SLIDES.length - 1 ? 0 : currentSlide + 1), 5000);\n        return ()=>{};\n    }, [\n        currentSlide\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Bank App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wrapper\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                            className: \"header\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"header__wrap\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/\",\n                                            className: \"logo\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"pagination\",\n                                            children: SLIDES.map((_, slideIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: currentSlide === slideIndex ? \"active\" : null,\n                                                    onClick: ()=>goToSlide(slideIndex)\n                                                }, slideIndex, false, {\n                                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"slider\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"slide\",\n                                        style: {\n                                            backgroundImage: \"url(/banner-\".concat(currentSlide, \".jpg)\")\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"overflow-hidden\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: slideUp ? \"slide-up\" : null,\n                                                        children: SLIDES[currentSlide].copyTop\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"overflow-hidden\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: slideUp ? \"slide-up slide-up-delay-1\" : null,\n                                                        children: SLIDES[currentSlide].copyBottom\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"login\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Good morning\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Sign on to manage your accounts.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"inputs\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Username\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"Sign in\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 112,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"options\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"\",\n                                            children: \"Forgot username\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 115,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"|\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"\",\n                                            children: \"password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 117,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"5xofFTKIUZ56yUzpJxr72DwRUm4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTs7Ozs7OzhDQUNILDhEQUFDZDtvQ0FBSUQsV0FBVTs7c0RBQ2IsOERBQUNnQjs0Q0FBTUMsTUFBSzs0Q0FBT0MsYUFBWTs7Ozs7O3NEQUMvQiw4REFBQ0Y7NENBQU1DLE1BQUs7NENBQU9DLGFBQVk7Ozs7OztzREFDL0IsOERBQUNDO3NEQUFPOzs7Ozs7Ozs7Ozs7OENBRVYsOERBQUNsQjtvQ0FBSUQsV0FBVTs7c0RBQ2IsOERBQUNHOzRDQUFFTCxNQUFLO3NEQUFHOzs7Ozs7c0RBQ1gsOERBQUNNO3NEQUFLOzs7Ozs7c0RBQ04sOERBQUNEOzRDQUFFTCxNQUFLO3NEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pCLENBQUM7R0FoSHVCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNMSURFUyA9IFtcbiAgeyBjb3B5VG9wOiAnV2UgYXJlIGluIGJ1c2luZXNzIHRvJywgY29weUJvdHRvbTogJ2hlbHAgeW91IGRvIGJ1c2luZXNzLicgfSxcbiAgeyBjb3B5VG9wOiAnSHVtYW4gaW5zaWdodC4nLCBjb3B5Qm90dG9tOiAnQWR2YW5jZWQgYW5hbHl0aWNzLicgfSxcbiAgeyBjb3B5VG9wOiAnQ2hvb3NlIHRoZSBjYXJkJywgY29weUJvdHRvbTogJ3RoYXQgd29ya3MgZm9yIHlvdS4nIH0sXG4gIHsgY29weVRvcDogJ1lvdSBtYXkgcXVhbGlmeSBmb3InLCBjb3B5Qm90dG9tOiAnYW4gdXBncmFkZS4nIH0sXG4gIHsgY29weVRvcDogJ1VwIHRvIDQuNzAlJywgY29weUJvdHRvbTogJ0FubnVhbCBQZXJjZW50YWdlIFlpZWxkLicgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NsaWRlVXAsIHNldFNsaWRlVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIGNvbnN0IHNsaWRlVXBIYW5kbGVyID0gKCkgPT4ge1xuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgc2V0U2xpZGVVcCh0cnVlKTtcbiAgLy8gICB9LCAxMDApO1xuICAvLyB9O1xuXG4gIC8vIGNvbnN0IGdvVG9TbGlkZSA9IChzbGlkZUluZGV4KSA9PiB7XG4gIC8vICAgc2V0U2xpZGVVcChmYWxzZSk7XG4gIC8vICAgc2V0Q3VycmVudFNsaWRlKHNsaWRlSW5kZXgpO1xuICAvLyAgIHNsaWRlVXBIYW5kbGVyKCk7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgYXV0b1RpbWVyU2xpZGUgPSAoKSA9PiB7XG4gIC8vICAgLy8gc2V0U2xpZGVVcChmYWxzZSk7XG4gIC8vICAgaWYgKGN1cnJlbnRTbGlkZSA9PT0gU0xJREVTLmxlbmd0aCAtIDEpIHtcbiAgLy8gICAgIC8vIHNsaWRlVXBIYW5kbGVyKCk7XG4gIC8vICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XG4gIC8vICAgICByZXR1cm4gKCkgPT4ge307XG4gIC8vICAgfVxuICAvLyAgIC8vIHNsaWRlVXBIYW5kbGVyKCk7XG4gIC8vICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpO1xuICAvLyAgIHJldHVybiAoKSA9PiB7fTtcbiAgLy8gfTtcblxuICAvLyBzZXRJbnRlcnZhbChhdXRvVGltZXJTbGlkZSwgMjAwMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzZXRTbGlkZVVwKHRydWUpO1xuXG4gICAgc2V0VGltZW91dChcbiAgICAgICgpID0+XG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPT09IFNMSURFUy5sZW5ndGggLSAxID8gMCA6IGN1cnJlbnRTbGlkZSArIDFcbiAgICAgICAgKSxcbiAgICAgIDUwMDBcbiAgICApO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW2N1cnJlbnRTbGlkZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmFuayBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLnN2ZycgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfX3dyYXAnPlxuICAgICAgICAgICAgICA8YSBocmVmPScvJyBjbGFzc05hbWU9J2xvZ28nPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnaW5hdGlvbic+XG4gICAgICAgICAgICAgICAge1NMSURFUy5tYXAoKF8sIHNsaWRlSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGtleT17c2xpZGVJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50U2xpZGUgPT09IHNsaWRlSW5kZXggPyAnYWN0aXZlJyA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvVG9TbGlkZShzbGlkZUluZGV4KX1cbiAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyJz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGUnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgvYmFubmVyLSR7Y3VycmVudFNsaWRlfS5qcGcpYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c2xpZGVVcCA/ICdzbGlkZS11cCcgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICB7U0xJREVTW2N1cnJlbnRTbGlkZV0uY29weVRvcH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NsaWRlVXAgPyAnc2xpZGUtdXAgc2xpZGUtdXAtZGVsYXktMScgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge1NMSURFU1tjdXJyZW50U2xpZGVdLmNvcHlCb3R0b219XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2xvZ2luJz5cbiAgICAgICAgICAgIDxoMj5Hb29kIG1vcm5pbmc8L2gyPlxuICAgICAgICAgICAgPHA+U2lnbiBvbiB0byBtYW5hZ2UgeW91ciBhY2NvdW50cy48L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXRzJz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdQYXNzd29yZCcgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcHRpb25zJz5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nJz5Gb3Jnb3QgdXNlcm5hbWU8L2E+XG4gICAgICAgICAgICAgIDxzcGFuPnw8L3NwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9Jyc+cGFzc3dvcmQ8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlNMSURFUyIsImNvcHlUb3AiLCJjb3B5Qm90dG9tIiwiSG9tZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlVXAiLCJzZXRTbGlkZVVwIiwidGltZW91dFJlZiIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImhlYWRlciIsImEiLCJzcGFuIiwibWFwIiwiXyIsInNsaWRlSW5kZXgiLCJvbkNsaWNrIiwiZ29Ub1NsaWRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoMSIsInNlY3Rpb24iLCJoMiIsInAiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});