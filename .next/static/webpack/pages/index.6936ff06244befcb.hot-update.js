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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SLIDES = [\n    {\n        copyTop: \"We are in business to\",\n        copyBottom: \"help you do business.\"\n    },\n    {\n        copyTop: \"Human insight.\",\n        copyBottom: \"Advanced analytics.\"\n    },\n    {\n        copyTop: \"Choose the card\",\n        copyBottom: \"that works for you.\"\n    },\n    {\n        copyTop: \"You may qualify for\",\n        copyBottom: \"an upgrade.\"\n    },\n    {\n        copyTop: \"Up to 4.70%\",\n        copyBottom: \"Annual Percentage Yield.\"\n    }\n];\nfunction Home() {\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [slideUp, setSlideUp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    // const slideUpHandler = () => {\n    //   setTimeout(() => {\n    //     setSlideUp(true);\n    //   }, 100);\n    // };\n    // const goToSlide = (slideIndex) => {\n    //   setSlideUp(false);\n    //   setCurrentSlide(slideIndex);\n    //   slideUpHandler();\n    // };\n    // const autoTimerSlide = () => {\n    //   // setSlideUp(false);\n    //   if (currentSlide === SLIDES.length - 1) {\n    //     // slideUpHandler();\n    //     setCurrentSlide(0);\n    //     return () => {};\n    //   }\n    //   // slideUpHandler();\n    //   setCurrentSlide(currentSlide + 1);\n    //   return () => {};\n    // };\n    // setInterval(autoTimerSlide, 2000);\n    function resetTimeout() {\n        if (timeoutRef.current) {\n            clearTimeout(timeoutRef.current);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        resetTimeout();\n        timeoutRef.current = setTimeout(()=>{\n            setCurrentSlide(currentSlide === SLIDES.length - 1 ? 0 : currentSlide + 1);\n        }, 2500);\n        return ()=>{\n            resetTimeout();\n        };\n    }, [\n        currentSlide\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Bank App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wrapper\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                            className: \"header\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"header__wrap\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/\",\n                                            className: \"logo\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"pagination\",\n                                            children: SLIDES.map((_, slideIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: currentSlide === slideIndex ? \"active\" : null,\n                                                    onClick: ()=>setCurrentSlide(slideIndex)\n                                                }, slideIndex, false, {\n                                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 19\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"slider\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"slide\",\n                                        style: {\n                                            backgroundImage: \"url(/banner-\".concat(currentSlide, \".jpg)\")\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"overflow-hidden\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: currentSlide ? \"slide-up\" : null,\n                                                        children: SLIDES[currentSlide].copyTop\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"overflow-hidden\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: currentSlide ? \"slide-up slide-up-delay-1\" : null,\n                                                        children: SLIDES[currentSlide].copyBottom\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                        lineNumber: 101,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"login\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Good morning\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Sign on to manage your accounts.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"inputs\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Username\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 119,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"Sign in\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"options\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"\",\n                                            children: \"Forgot username\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"|\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 124,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"\",\n                                            children: \"password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                            lineNumber: 125,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jaykim/Desktop/Projects/bank/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"5xofFTKIUZ56yUzpJxr72DwRUm4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxDQUFDRixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBUTVDLDhEQUFDZ0M7NEJBQVFaLFdBQVU7OzhDQUNqQiw4REFBQ2E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0M7OENBQUU7Ozs7Ozs4Q0FDSCw4REFBQ2I7b0NBQUlELFdBQVU7O3NEQUNiLDhEQUFDZTs0Q0FBTUMsTUFBSzs0Q0FBT0MsYUFBWTs7Ozs7O3NEQUMvQiw4REFBQ0Y7NENBQU1DLE1BQUs7NENBQU9DLGFBQVk7Ozs7OztzREFDL0IsOERBQUNDO3NEQUFPOzs7Ozs7Ozs7Ozs7OENBRVYsOERBQUNqQjtvQ0FBSUQsV0FBVTs7c0RBQ2IsOERBQUNHOzRDQUFFTCxNQUFLO3NEQUFHOzs7Ozs7c0RBQ1gsOERBQUNNO3NEQUFLOzs7Ozs7c0RBQ04sOERBQUNEOzRDQUFFTCxNQUFLO3NEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pCLENBQUM7R0F4SHVCakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTTElERVMgPSBbXG4gIHsgY29weVRvcDogJ1dlIGFyZSBpbiBidXNpbmVzcyB0bycsIGNvcHlCb3R0b206ICdoZWxwIHlvdSBkbyBidXNpbmVzcy4nIH0sXG4gIHsgY29weVRvcDogJ0h1bWFuIGluc2lnaHQuJywgY29weUJvdHRvbTogJ0FkdmFuY2VkIGFuYWx5dGljcy4nIH0sXG4gIHsgY29weVRvcDogJ0Nob29zZSB0aGUgY2FyZCcsIGNvcHlCb3R0b206ICd0aGF0IHdvcmtzIGZvciB5b3UuJyB9LFxuICB7IGNvcHlUb3A6ICdZb3UgbWF5IHF1YWxpZnkgZm9yJywgY29weUJvdHRvbTogJ2FuIHVwZ3JhZGUuJyB9LFxuICB7IGNvcHlUb3A6ICdVcCB0byA0LjcwJScsIGNvcHlCb3R0b206ICdBbm51YWwgUGVyY2VudGFnZSBZaWVsZC4nIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzbGlkZVVwLCBzZXRTbGlkZVVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdGltZW91dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAvLyBjb25zdCBzbGlkZVVwSGFuZGxlciA9ICgpID0+IHtcbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgIHNldFNsaWRlVXAodHJ1ZSk7XG4gIC8vICAgfSwgMTAwKTtcbiAgLy8gfTtcblxuICAvLyBjb25zdCBnb1RvU2xpZGUgPSAoc2xpZGVJbmRleCkgPT4ge1xuICAvLyAgIHNldFNsaWRlVXAoZmFsc2UpO1xuICAvLyAgIHNldEN1cnJlbnRTbGlkZShzbGlkZUluZGV4KTtcbiAgLy8gICBzbGlkZVVwSGFuZGxlcigpO1xuICAvLyB9O1xuXG4gIC8vIGNvbnN0IGF1dG9UaW1lclNsaWRlID0gKCkgPT4ge1xuICAvLyAgIC8vIHNldFNsaWRlVXAoZmFsc2UpO1xuICAvLyAgIGlmIChjdXJyZW50U2xpZGUgPT09IFNMSURFUy5sZW5ndGggLSAxKSB7XG4gIC8vICAgICAvLyBzbGlkZVVwSGFuZGxlcigpO1xuICAvLyAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xuICAvLyAgICAgcmV0dXJuICgpID0+IHt9O1xuICAvLyAgIH1cbiAgLy8gICAvLyBzbGlkZVVwSGFuZGxlcigpO1xuICAvLyAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgKyAxKTtcbiAgLy8gICByZXR1cm4gKCkgPT4ge307XG4gIC8vIH07XG5cbiAgLy8gc2V0SW50ZXJ2YWwoYXV0b1RpbWVyU2xpZGUsIDIwMDApO1xuXG4gIGZ1bmN0aW9uIHJlc2V0VGltZW91dCgpIHtcbiAgICBpZiAodGltZW91dFJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlc2V0VGltZW91dCgpO1xuICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKFxuICAgICAgICBjdXJyZW50U2xpZGUgPT09IFNMSURFUy5sZW5ndGggLSAxID8gMCA6IGN1cnJlbnRTbGlkZSArIDFcbiAgICAgICk7XG4gICAgfSwgMjUwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVzZXRUaW1lb3V0KCk7XG4gICAgfTtcbiAgfSwgW2N1cnJlbnRTbGlkZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmFuayBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLnN2ZycgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfX3dyYXAnPlxuICAgICAgICAgICAgICA8YSBocmVmPScvJyBjbGFzc05hbWU9J2xvZ28nPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnaW5hdGlvbic+XG4gICAgICAgICAgICAgICAge1NMSURFUy5tYXAoKF8sIHNsaWRlSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGtleT17c2xpZGVJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50U2xpZGUgPT09IHNsaWRlSW5kZXggPyAnYWN0aXZlJyA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZUluZGV4KX1cbiAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyJz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGUnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgvYmFubmVyLSR7Y3VycmVudFNsaWRlfS5qcGcpYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3VycmVudFNsaWRlID8gJ3NsaWRlLXVwJyA6IG51bGx9PlxuICAgICAgICAgICAgICAgICAgICAgIHtTTElERVNbY3VycmVudFNsaWRlXS5jb3B5VG9wfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPyAnc2xpZGUtdXAgc2xpZGUtdXAtZGVsYXktMScgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge1NMSURFU1tjdXJyZW50U2xpZGVdLmNvcHlCb3R0b219XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2xvZ2luJz5cbiAgICAgICAgICAgIDxoMj5Hb29kIG1vcm5pbmc8L2gyPlxuICAgICAgICAgICAgPHA+U2lnbiBvbiB0byBtYW5hZ2UgeW91ciBhY2NvdW50cy48L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXRzJz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdQYXNzd29yZCcgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcHRpb25zJz5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nJz5Gb3Jnb3QgdXNlcm5hbWU8L2E+XG4gICAgICAgICAgICAgIDxzcGFuPnw8L3NwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9Jyc+cGFzc3dvcmQ8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlNMSURFUyIsImNvcHlUb3AiLCJjb3B5Qm90dG9tIiwiSG9tZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlVXAiLCJzZXRTbGlkZVVwIiwidGltZW91dFJlZiIsInJlc2V0VGltZW91dCIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoZWFkZXIiLCJhIiwic3BhbiIsIm1hcCIsIl8iLCJzbGlkZUluZGV4Iiwib25DbGljayIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaDEiLCJzZWN0aW9uIiwiaDIiLCJwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});