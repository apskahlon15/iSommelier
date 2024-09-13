"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/src/components/landing.js":
/*!***************************************!*\
  !*** ./app/src/components/landing.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Landing() {\n    _s();\n    // State to manage wishlist items\n    const [wishlist, setWishlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Function to handle click event\n    const handleWishlistClick = (wineName)=>{\n        setWishlist((prevWishlist)=>{\n            // Check if wine is already in the wishlist\n            if (prevWishlist.includes(wineName)) {\n                // Remove from wishlist\n                return prevWishlist.filter((item)=>item !== wineName);\n            } else {\n                // Add to wishlist\n                return [\n                    ...prevWishlist,\n                    wineName\n                ];\n            }\n        });\n    };\n    // Array of wines\n    const wines = [\n        {\n            src: \"/red.webp\",\n            alt: \"Wine 1\",\n            name: \"Wine Name 1\"\n        },\n        {\n            src: \"/red2.webp\",\n            alt: \"Wine 2\",\n            name: \"Wine Name 2\"\n        },\n        {\n            src: \"/wine3.webp\",\n            alt: \"Wine 3\",\n            name: \"Wine Name 3\"\n        },\n        {\n            src: \"/wine4.webp\",\n            alt: \"Wine 4\",\n            name: \"Wine Name 4\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"relative flex-grow flex flex-col items-center text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-full h-[50vh] overflow-hidden mb-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/wines.jpeg\" // Replace with your image path\n                                ,\n                                alt: \"Wine\",\n                                layout: \"fill\" // Makes the image cover the container\n                                ,\n                                objectFit: \"cover\" // Ensures the image covers the container without distortion\n                                ,\n                                quality: 100,\n                                className: \"absolute inset-0\" // Positions the image absolutely within the container\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl font-bold mb-4\",\n                                        children: \"Discover the Perfect Wine\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg mb-8 max-w-md\",\n                                        children: \"Explore our curated wine selections and find the best choices for every occasion.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/app/src/pages/login.js\",\n                                        className: \"bg-[#f1f2f6] text-[#004e89] px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#e0e2e7] transition duration-300\",\n                                        children: \"Compare\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex flex-nowrap justify-center gap-8 py-8 px-4 mb-8 overflow-x-auto\",\n                        children: [\n                            \" \",\n                            wines.map((wine, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative flex flex-col items-center gap-2 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/6 transition-transform transform hover:scale-105\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative w-full h-60 sm:h-72 md:h-80 lg:h-72 border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    src: wine.src,\n                                                    alt: wine.alt,\n                                                    layout: \"intrinsic\",\n                                                    width: 280,\n                                                    height: 210,\n                                                    objectFit: \"cover\",\n                                                    className: \"rounded-lg\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"absolute top-2 right-2 cursor-pointer\",\n                                                    onClick: ()=>handleWishlistClick(wine.name),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                        src: wishlist.includes(wine.name) ? \"/heart-2.png\" : \"/heart.png\",\n                                                        alt: \"Heart Icon\",\n                                                        width: 24,\n                                                        height: 24,\n                                                        className: \"transform hover:scale-125 transition-transform duration-200\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-base font-semibold text-black\",\n                                            children: wine.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"w-full py-4 text-white text-center\",\n                style: {\n                    backgroundColor: \"#03045e\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"\\xa9 \",\n                        new Date().getFullYear(),\n                        \" iSommelier. All rights reserved.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\landing.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"bd1ENNmbK9i7jQ4JfB0/gO107W0=\");\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zcmMvY29tcG9uZW50cy9sYW5kaW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ1Q7QUFDRjtBQUVkLFNBQVNJOztJQUN0QixpQ0FBaUM7SUFDakMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsaUNBQWlDO0lBQ2pDLE1BQU1NLHNCQUFzQixDQUFDQztRQUMzQkYsWUFBWSxDQUFDRztZQUNYLDJDQUEyQztZQUMzQyxJQUFJQSxhQUFhQyxRQUFRLENBQUNGLFdBQVc7Z0JBQ25DLHVCQUF1QjtnQkFDdkIsT0FBT0MsYUFBYUUsTUFBTSxDQUFDLENBQUNDLE9BQVNBLFNBQVNKO1lBQ2hELE9BQU87Z0JBQ0wsa0JBQWtCO2dCQUNsQixPQUFPO3VCQUFJQztvQkFBY0Q7aUJBQVM7WUFDcEM7UUFDRjtJQUNGO0lBRUEsaUJBQWlCO0lBQ2pCLE1BQU1LLFFBQVE7UUFDWjtZQUFFQyxLQUFLO1lBQWFDLEtBQUs7WUFBVUMsTUFBTTtRQUFjO1FBQ3ZEO1lBQUVGLEtBQUs7WUFBY0MsS0FBSztZQUFVQyxNQUFNO1FBQWM7UUFDeEQ7WUFBRUYsS0FBSztZQUFlQyxLQUFLO1lBQVVDLE1BQU07UUFBYztRQUN6RDtZQUFFRixLQUFLO1lBQWVDLEtBQUs7WUFBVUMsTUFBTTtRQUFjO0tBQzFEO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDQztnQkFBS0QsV0FBVTs7a0NBQ2QsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQ2hCLGtEQUFLQTtnQ0FDSlksS0FBSSxjQUFjLCtCQUErQjs7Z0NBQ2pEQyxLQUFJO2dDQUNKSyxRQUFPLE9BQU8sc0NBQXNDOztnQ0FDcERDLFdBQVUsUUFBUSw0REFBNEQ7O2dDQUM5RUMsU0FBUztnQ0FDVEosV0FBVSxtQkFBbUIsc0RBQXNEOzs7Ozs7MENBR3JGLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNLO3dDQUFHTCxXQUFVO2tEQUEwQjs7Ozs7O2tEQUd4Qyw4REFBQ007d0NBQUVOLFdBQVU7a0RBQXdCOzs7Ozs7a0RBSXJDLDhEQUFDZixpREFBSUE7d0NBQ0hzQixNQUFLO3dDQUNMUCxXQUFVO2tEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT0wsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFDWjs0QkFFQUwsTUFBTWEsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ1g7b0NBRUNDLFdBQVU7O3NEQUVWLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNoQixrREFBS0E7b0RBQ0pZLEtBQUthLEtBQUtiLEdBQUc7b0RBQ2JDLEtBQUtZLEtBQUtaLEdBQUc7b0RBQ2JLLFFBQU87b0RBQ1BTLE9BQU87b0RBQ1BDLFFBQVE7b0RBQ1JULFdBQVU7b0RBQ1ZILFdBQVU7Ozs7Ozs4REFHWiw4REFBQ0Q7b0RBQ0NDLFdBQVU7b0RBQ1ZhLFNBQVMsSUFBTXhCLG9CQUFvQm9CLEtBQUtYLElBQUk7OERBRTVDLDRFQUFDZCxrREFBS0E7d0RBQ0pZLEtBQ0VULFNBQVNLLFFBQVEsQ0FBQ2lCLEtBQUtYLElBQUksSUFDdkIsaUJBQ0E7d0RBRU5ELEtBQUk7d0RBQ0pjLE9BQU87d0RBQ1BDLFFBQVE7d0RBQ1JaLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUloQiw4REFBQ007NENBQUVOLFdBQVU7c0RBQXNDUyxLQUFLWCxJQUFJOzs7Ozs7O21DQS9CdkRZOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFzQ2IsOERBQUNJO2dCQUNDZCxXQUFVO2dCQUNWZSxPQUFPO29CQUFFQyxpQkFBaUI7Z0JBQVU7MEJBRXBDLDRFQUFDVjs7d0JBQUU7d0JBQ08sSUFBSVcsT0FBT0MsV0FBVzt3QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNDO0dBaEh3QmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zcmMvY29tcG9uZW50cy9sYW5kaW5nLmpzP2UzY2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZygpIHtcclxuICAvLyBTdGF0ZSB0byBtYW5hZ2Ugd2lzaGxpc3QgaXRlbXNcclxuICBjb25zdCBbd2lzaGxpc3QsIHNldFdpc2hsaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGNsaWNrIGV2ZW50XHJcbiAgY29uc3QgaGFuZGxlV2lzaGxpc3RDbGljayA9ICh3aW5lTmFtZSkgPT4ge1xyXG4gICAgc2V0V2lzaGxpc3QoKHByZXZXaXNobGlzdCkgPT4ge1xyXG4gICAgICAvLyBDaGVjayBpZiB3aW5lIGlzIGFscmVhZHkgaW4gdGhlIHdpc2hsaXN0XHJcbiAgICAgIGlmIChwcmV2V2lzaGxpc3QuaW5jbHVkZXMod2luZU5hbWUpKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gd2lzaGxpc3RcclxuICAgICAgICByZXR1cm4gcHJldldpc2hsaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gd2luZU5hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEFkZCB0byB3aXNobGlzdFxyXG4gICAgICAgIHJldHVybiBbLi4ucHJldldpc2hsaXN0LCB3aW5lTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEFycmF5IG9mIHdpbmVzXHJcbiAgY29uc3Qgd2luZXMgPSBbXHJcbiAgICB7IHNyYzogXCIvcmVkLndlYnBcIiwgYWx0OiBcIldpbmUgMVwiLCBuYW1lOiBcIldpbmUgTmFtZSAxXCIgfSxcclxuICAgIHsgc3JjOiBcIi9yZWQyLndlYnBcIiwgYWx0OiBcIldpbmUgMlwiLCBuYW1lOiBcIldpbmUgTmFtZSAyXCIgfSxcclxuICAgIHsgc3JjOiBcIi93aW5lMy53ZWJwXCIsIGFsdDogXCJXaW5lIDNcIiwgbmFtZTogXCJXaW5lIE5hbWUgM1wiIH0sXHJcbiAgICB7IHNyYzogXCIvd2luZTQud2VicFwiLCBhbHQ6IFwiV2luZSA0XCIsIG5hbWU6IFwiV2luZSBOYW1lIDRcIiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIHsvKiBNYWluIENvbnRlbnQgKi99XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtZ3JvdyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtWzUwdmhdIG92ZXJmbG93LWhpZGRlbiBtYi0xMlwiPlxyXG4gICAgICAgICAgey8qIFdpbmUgSW1hZ2UgKi99XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL3dpbmVzLmpwZWdcIiAvLyBSZXBsYWNlIHdpdGggeW91ciBpbWFnZSBwYXRoXHJcbiAgICAgICAgICAgIGFsdD1cIldpbmVcIlxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCIgLy8gTWFrZXMgdGhlIGltYWdlIGNvdmVyIHRoZSBjb250YWluZXJcclxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIiAvLyBFbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGNvbnRhaW5lciB3aXRob3V0IGRpc3RvcnRpb25cclxuICAgICAgICAgICAgcXVhbGl0eT17MTAwfSAvLyBTZXQgaW1hZ2UgcXVhbGl0eSB0byB0aGUgaGlnaGVzdFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCIgLy8gUG9zaXRpb25zIHRoZSBpbWFnZSBhYnNvbHV0ZWx5IHdpdGhpbiB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIE92ZXJsYXkgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS02MCB0ZXh0LXdoaXRlIHAtNlwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5cclxuICAgICAgICAgICAgICBEaXNjb3ZlciB0aGUgUGVyZmVjdCBXaW5lXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItOCBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAgICAgIEV4cGxvcmUgb3VyIGN1cmF0ZWQgd2luZSBzZWxlY3Rpb25zIGFuZCBmaW5kIHRoZSBiZXN0IGNob2ljZXMgZm9yXHJcbiAgICAgICAgICAgICAgZXZlcnkgb2NjYXNpb24uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2FwcC9zcmMvcGFnZXMvbG9naW4uanNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjZjFmMmY2XSB0ZXh0LVsjMDA0ZTg5XSBweC02IHB5LTMgcm91bmRlZC14bCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctWyNlMGUyZTddIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbXBhcmVcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBJbWFnZXMgUm93ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1ub3dyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTggcHktOCBweC00IG1iLTggb3ZlcmZsb3cteC1hdXRvXCI+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICB7LyogSW5jcmVhc2VkIGdhcCBoZXJlICovfVxyXG4gICAgICAgICAge3dpbmVzLm1hcCgod2luZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTIgdy0xLzQgc206dy0xLzUgbWQ6dy0xLzYgbGc6dy0xLzYgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLTYwIHNtOmgtNzIgbWQ6aC04MCBsZzpoLTcyIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17d2luZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17d2luZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImludHJpbnNpY1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyODB9IC8vIEFkanVzdCB3aWR0aCB0byBtYWtlIGltYWdlIHNtYWxsZXJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMTB9IC8vIEFkanVzdCBoZWlnaHQgdG8gbWFpbnRhaW4gYXNwZWN0IHJhdGlvXHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgey8qIEhlYXJ0IEljb24gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVXaXNobGlzdENsaWNrKHdpbmUubmFtZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aXNobGlzdC5pbmNsdWRlcyh3aW5lLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIvaGVhcnQtMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2hlYXJ0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSAvLyBUb2dnbGUgaWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkhlYXJ0IEljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNH0gLy8gQWRqdXN0IHdpZHRoIGFzIG5lZWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9IC8vIEFkanVzdCBoZWlnaHQgYXMgbmVlZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEyNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1ibGFja1wiPnt3aW5lLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICB7LyogRm9vdGVyICovfVxyXG4gICAgICA8Zm9vdGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwMzA0NWVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gaVNvbW1lbGllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsIkxhbmRpbmciLCJ3aXNobGlzdCIsInNldFdpc2hsaXN0IiwiaGFuZGxlV2lzaGxpc3RDbGljayIsIndpbmVOYW1lIiwicHJldldpc2hsaXN0IiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpdGVtIiwid2luZXMiLCJzcmMiLCJhbHQiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImxheW91dCIsIm9iamVjdEZpdCIsInF1YWxpdHkiLCJoMiIsInAiLCJocmVmIiwibWFwIiwid2luZSIsImluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJvbkNsaWNrIiwiZm9vdGVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/src/components/landing.js\n"));

/***/ })

});