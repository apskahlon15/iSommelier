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

/***/ "(app-pages-browser)/./app/src/components/Navbar.js":
/*!**************************************!*\
  !*** ./app/src/components/Navbar.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSearch = (e)=>{\n        e.preventDefault();\n        console.log(\"Search Query:\", searchQuery);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-blue-800 p-6 shadow-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex items-center transition-all\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-shrink-0 transition-transform duration-500 ease-in-out hover:scale-105\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"/iSomillier-logo.png\",\n                        alt: \"iSommelier Logo\",\n                        width: 110,\n                        height: 110\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-grow flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-full max-w-lg ml-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSearch,\n                            className: \"relative flex items-center transition-all duration-300 ease-in-out\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"w-full h-12 p-4 pr-20 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-md text-black transition-transform duration-300 ease-in-out hover:scale-105\",\n                                    placeholder: \"Search for wines, regions, or varietals...\",\n                                    value: searchQuery,\n                                    onChange: (e)=>setSearchQuery(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"absolute right-1 top-1/2 transform -translate-y-1/2 bg- text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-transform duration-300 ease-in-out hover:scale-110\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-12 items-center flex-shrink-0 transition-all duration-300 ease-in-out\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex space-x-12 text-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"transition-transform duration-300 hover:scale-110\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/\",\n                                        className: \"text-gray-200 hover:text-white\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"transition-transform duration-300 hover:scale-110\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/about\",\n                                        className: \"text-gray-200 hover:text-white\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"transition-transform duration-300 hover:scale-110\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/wishlist\",\n                                        className: \"text-gray-200 hover:text-white flex items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"ml-2\",\n                                            children: \"Wishlist\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/login\",\n                                    className: \"text-gray-200 hover:text-white flex items-center transition-transform duration-300 hover:scale-110\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-2\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/signup\",\n                                    className: \"text-gray-200 hover:text-white flex items-center transition-transform duration-300 hover:scale-110\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-2\",\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\arman\\\\Desktop\\\\iSommelier\\\\iSommelier\\\\app\\\\src\\\\components\\\\Navbar.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"4/Qdl0R3tQNJqUS4eMrvY/uMU/4=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDK0I7QUFDRjtBQUNJO0FBRWpDLE1BQU1HLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdILCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1JLGVBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJOO0lBQy9CO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUViLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ1osa0RBQUtBO3dCQUNKYyxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFROzs7Ozs7Ozs7Ozs4QkFLWiw4REFBQ0o7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDTTs0QkFDQ0MsVUFBVWI7NEJBQ1ZNLFdBQVU7OzhDQUVWLDhEQUFDUTtvQ0FDQ0MsTUFBSztvQ0FDTFQsV0FBVTtvQ0FDVlUsYUFBWTtvQ0FDWkMsT0FBT25CO29DQUNQb0IsVUFBVSxDQUFDakIsSUFBTUYsZUFBZUUsRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzhDQUVoRCw4REFBQ0c7b0NBQ0NMLE1BQUs7b0NBQ0xULFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUVAsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ2U7NEJBQUdmLFdBQVU7OzhDQUNaLDhEQUFDZ0I7b0NBQUdoQixXQUFVOzhDQUNaLDRFQUFDWCxpREFBSUE7d0NBQUM0QixNQUFLO3dDQUFJakIsV0FBVTtrREFBaUM7Ozs7Ozs7Ozs7OzhDQUk1RCw4REFBQ2dCO29DQUFHaEIsV0FBVTs4Q0FDWiw0RUFBQ1gsaURBQUlBO3dDQUFDNEIsTUFBSzt3Q0FBU2pCLFdBQVU7a0RBQWlDOzs7Ozs7Ozs7Ozs4Q0FJakUsOERBQUNnQjtvQ0FBR2hCLFdBQVU7OENBQ1osNEVBQUNYLGlEQUFJQTt3Q0FDSDRCLE1BQUs7d0NBQ0xqQixXQUFVO2tEQUVWLDRFQUFDa0I7NENBQUtsQixXQUFVO3NEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUk3Qiw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDWCxpREFBSUE7b0NBQ0g0QixNQUFLO29DQUNMakIsV0FBVTs4Q0FFViw0RUFBQ2tCO3dDQUFLbEIsV0FBVTtrREFBTzs7Ozs7Ozs7Ozs7OENBRXpCLDhEQUFDWCxpREFBSUE7b0NBQ0g0QixNQUFLO29DQUNMakIsV0FBVTs4Q0FFViw0RUFBQ2tCO3dDQUFLbEIsV0FBVTtrREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztHQXJGTVQ7S0FBQUE7QUF1Rk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NyYy9jb21wb25lbnRzL05hdmJhci5qcz9kOGJlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNlYXJjaCBRdWVyeTpcIiwgc2VhcmNoUXVlcnkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWJsdWUtODAwIHAtNiBzaGFkb3ctbGdcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLWFsbFwiPlxyXG4gICAgICAgIHsvKiBMb2dvICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgaG92ZXI6c2NhbGUtMTA1XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2lTb21pbGxpZXItbG9nby5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJpU29tbWVsaWVyIExvZ29cIlxyXG4gICAgICAgICAgICB3aWR0aD17MTEwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezExMH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBDZW50ZXJlZCBDb250ZW50ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC13LWxnIG1sLThcIj5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEyIHAtNCBwci0yMCByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBiZy13aGl0ZSBzaGFkb3ctbWQgdGV4dC1ibGFjayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciB3aW5lcywgcmVnaW9ucywgb3IgdmFyaWV0YWxzLi4uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0xIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctIHRleHQtd2hpdGUgcHgtNiBweS0yIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ibHVlLTcwMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6c2NhbGUtMTEwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBOYXZpZ2F0aW9uIExpbmtzIGFuZCBBdXRoZW50aWNhdGlvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xMiBpdGVtcy1jZW50ZXIgZmxleC1zaHJpbmstMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMTIgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTExMFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTExMFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTExMFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL3dpc2hsaXN0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPldpc2hsaXN0PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNlwiPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvbG9naW5cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTEwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5Mb2dpbjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvc2lnbnVwXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwIGhvdmVyOnRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTExMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+U2lnbiBVcDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZVN0YXRlIiwiTmF2YmFyIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImhhbmRsZVNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInVsIiwibGkiLCJocmVmIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/src/components/Navbar.js\n"));

/***/ })

});