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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SLIDES = [\n    {\n        copyTop: \"We are in business to\",\n        copyBottom: \"help you do business.\"\n    },\n    {\n        copyTop: \"Human insight.\",\n        copyBottom: \"Advanced analytics.\"\n    },\n    {\n        copyTop: \"Choose the card\",\n        copyBottom: \"that works for you.\"\n    },\n    {\n        copyTop: \"You may qualify for\",\n        copyBottom: \"an upgrade.\"\n    },\n    {\n        copyTop: \"Up to 4.70%\",\n        copyBottom: \"Annual Percentage Yield.\"\n    }\n];\nfunction Home() {\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [slideUp, setSlideUp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    // const slideUpHandler = () => {\n    //   setTimeout(() => {\n    //     setSlideUp(true);\n    //   }, 100);\n    // };\n    // const goToSlide = (slideIndex) => {\n    //   setSlideUp(false);\n    //   setCurrentSlide(slideIndex);\n    //   slideUpHandler();\n    // };\n    // const autoTimerSlide = () => {\n    //   // setSlideUp(false);\n    //   if (currentSlide === SLIDES.length - 1) {\n    //     // slideUpHandler();\n    //     setCurrentSlide(0);\n    //     return () => {};\n    //   }\n    //   // slideUpHandler();\n    //   setCurrentSlide(currentSlide + 1);\n    //   return () => {};\n    // };\n    // setInterval(autoTimerSlide, 2000);\n    function resetTimeout() {\n        if (timeoutRef.current) {\n            setSlideUp(false);\n            clearTimeout(timeoutRef.current);\n        }\n        setSlideUp(true);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        resetTimeout();\n        timeoutRef.current = setTimeout(()=>{\n            setCurrentSlide(currentSlide === SLIDES.length - 1 ? 0 : currentSlide + 1);\n        }, 2500);\n        return ()=>{\n            resetTimeout();\n        };\n    }, [\n        currentSlide\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Bank App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wrapper\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                            className: \"header\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"header__wrap\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/\",\n                                            className: \"logo\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"pagination\",\n                                            children: SLIDES.map((_, slideIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: currentSlide === slideIndex ? \"active\" : null,\n                                                    onClick: ()=>setCurrentSlide(slideIndex)\n                                                }, slideIndex, false, {\n                                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 19\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"slider\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"slide\",\n                                        style: {\n                                            backgroundImage: \"url(/banner-\".concat(currentSlide, \".jpg)\")\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"overflow-hidden\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: slideUp ? \"slide-up\" : null,\n                                                        children: SLIDES[currentSlide].copyTop\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"overflow-hidden\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: slideUp ? \"slide-up slide-up-delay-1\" : null,\n                                                        children: SLIDES[currentSlide].copyBottom\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                        lineNumber: 103,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"login\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Good morning\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Sign on to manage your accounts.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"inputs\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Username\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 119,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"Sign in\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"options\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"\",\n                                            children: \"Forgot username\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"|\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 124,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"\",\n                                            children: \"password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 125,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"5xofFTKIUZ56yUzpJxr72DwRUm4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsOEJBQThCLElBQUk7a0VBRXRETixNQUFNLENBQUNJLGFBQWEsQ0FBQ0YsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQVE1Qyw4REFBQ2dDOzRCQUFRWixXQUFVOzs4Q0FDakIsOERBQUNhOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNiO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ2U7NENBQU1DLE1BQUs7NENBQU9DLGFBQVk7Ozs7OztzREFDL0IsOERBQUNGOzRDQUFNQyxNQUFLOzRDQUFPQyxhQUFZOzs7Ozs7c0RBQy9CLDhEQUFDQztzREFBTzs7Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDakI7b0NBQUlELFdBQVU7O3NEQUNiLDhEQUFDRzs0Q0FBRUwsTUFBSztzREFBRzs7Ozs7O3NEQUNYLDhEQUFDTTtzREFBSzs7Ozs7O3NEQUNOLDhEQUFDRDs0Q0FBRUwsTUFBSztzREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QixDQUFDO0dBeEh1QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU0xJREVTID0gW1xuICB7IGNvcHlUb3A6ICdXZSBhcmUgaW4gYnVzaW5lc3MgdG8nLCBjb3B5Qm90dG9tOiAnaGVscCB5b3UgZG8gYnVzaW5lc3MuJyB9LFxuICB7IGNvcHlUb3A6ICdIdW1hbiBpbnNpZ2h0LicsIGNvcHlCb3R0b206ICdBZHZhbmNlZCBhbmFseXRpY3MuJyB9LFxuICB7IGNvcHlUb3A6ICdDaG9vc2UgdGhlIGNhcmQnLCBjb3B5Qm90dG9tOiAndGhhdCB3b3JrcyBmb3IgeW91LicgfSxcbiAgeyBjb3B5VG9wOiAnWW91IG1heSBxdWFsaWZ5IGZvcicsIGNvcHlCb3R0b206ICdhbiB1cGdyYWRlLicgfSxcbiAgeyBjb3B5VG9wOiAnVXAgdG8gNC43MCUnLCBjb3B5Qm90dG9tOiAnQW5udWFsIFBlcmNlbnRhZ2UgWWllbGQuJyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2xpZGVVcCwgc2V0U2xpZGVVcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gY29uc3Qgc2xpZGVVcEhhbmRsZXIgPSAoKSA9PiB7XG4gIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICBzZXRTbGlkZVVwKHRydWUpO1xuICAvLyAgIH0sIDEwMCk7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgZ29Ub1NsaWRlID0gKHNsaWRlSW5kZXgpID0+IHtcbiAgLy8gICBzZXRTbGlkZVVwKGZhbHNlKTtcbiAgLy8gICBzZXRDdXJyZW50U2xpZGUoc2xpZGVJbmRleCk7XG4gIC8vICAgc2xpZGVVcEhhbmRsZXIoKTtcbiAgLy8gfTtcblxuICAvLyBjb25zdCBhdXRvVGltZXJTbGlkZSA9ICgpID0+IHtcbiAgLy8gICAvLyBzZXRTbGlkZVVwKGZhbHNlKTtcbiAgLy8gICBpZiAoY3VycmVudFNsaWRlID09PSBTTElERVMubGVuZ3RoIC0gMSkge1xuICAvLyAgICAgLy8gc2xpZGVVcEhhbmRsZXIoKTtcbiAgLy8gICAgIHNldEN1cnJlbnRTbGlkZSgwKTtcbiAgLy8gICAgIHJldHVybiAoKSA9PiB7fTtcbiAgLy8gICB9XG4gIC8vICAgLy8gc2xpZGVVcEhhbmRsZXIoKTtcbiAgLy8gICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlICsgMSk7XG4gIC8vICAgcmV0dXJuICgpID0+IHt9O1xuICAvLyB9O1xuXG4gIC8vIHNldEludGVydmFsKGF1dG9UaW1lclNsaWRlLCAyMDAwKTtcblxuICBmdW5jdGlvbiByZXNldFRpbWVvdXQoKSB7XG4gICAgaWYgKHRpbWVvdXRSZWYuY3VycmVudCkge1xuICAgICAgc2V0U2xpZGVVcChmYWxzZSk7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICB9XG4gICAgc2V0U2xpZGVVcCh0cnVlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVzZXRUaW1lb3V0KCk7XG4gICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9PT0gU0xJREVTLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudFNsaWRlICsgMVxuICAgICAgKTtcbiAgICB9LCAyNTAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXNldFRpbWVvdXQoKTtcbiAgICB9O1xuICB9LCBbY3VycmVudFNsaWRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CYW5rIEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwJyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uc3ZnJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcl9fd3JhcCc+XG4gICAgICAgICAgICAgIDxhIGhyZWY9Jy8nIGNsYXNzTmFtZT0nbG9nbyc+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uJz5cbiAgICAgICAgICAgICAgICB7U0xJREVTLm1hcCgoXywgc2xpZGVJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAga2V5PXtzbGlkZUluZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnRTbGlkZSA9PT0gc2xpZGVJbmRleCA/ICdhY3RpdmUnIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFNsaWRlKHNsaWRlSW5kZXgpfVxuICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXInPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZSdcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9iYW5uZXItJHtjdXJyZW50U2xpZGV9LmpwZylgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzbGlkZVVwID8gJ3NsaWRlLXVwJyA6IG51bGx9PlxuICAgICAgICAgICAgICAgICAgICAgIHtTTElERVNbY3VycmVudFNsaWRlXS5jb3B5VG9wfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2xpZGVVcCA/ICdzbGlkZS11cCBzbGlkZS11cC1kZWxheS0xJyA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7U0xJREVTW2N1cnJlbnRTbGlkZV0uY29weUJvdHRvbX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbG9naW4nPlxuICAgICAgICAgICAgPGgyPkdvb2QgbW9ybmluZzwvaDI+XG4gICAgICAgICAgICA8cD5TaWduIG9uIHRvIG1hbmFnZSB5b3VyIGFjY291bnRzLjwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dHMnPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyAvPlxuICAgICAgICAgICAgICA8YnV0dG9uPlNpZ24gaW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J29wdGlvbnMnPlxuICAgICAgICAgICAgICA8YSBocmVmPScnPkZvcmdvdCB1c2VybmFtZTwvYT5cbiAgICAgICAgICAgICAgPHNwYW4+fDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nJz5wYXNzd29yZDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiU0xJREVTIiwiY29weVRvcCIsImNvcHlCb3R0b20iLCJIb21lIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVVcCIsInNldFNsaWRlVXAiLCJ0aW1lb3V0UmVmIiwicmVzZXRUaW1lb3V0IiwiY3VycmVudCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImhlYWRlciIsImEiLCJzcGFuIiwibWFwIiwiXyIsInNsaWRlSW5kZXgiLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoMSIsInNlY3Rpb24iLCJoMiIsInAiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});