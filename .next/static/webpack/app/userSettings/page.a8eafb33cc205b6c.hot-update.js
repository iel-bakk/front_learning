"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/userSettings/page",{

/***/ "(app-pages-browser)/./app/userSettings/userSettings.tsx":
/*!*******************************************!*\
  !*** ./app/userSettings/userSettings.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ \"(app-pages-browser)/./app/userSettings/Card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction UserSettings() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const fetchInfo = ()=>{\n        return fetch(\"http://localhost:5000/Chat/userSettings\", {\n            method: \"GET\",\n            credentials: \"include\"\n        }).then((res)=>res.json()).then((d)=>{\n            console.log(data);\n            setData(d);\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchInfo();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full w-full flex flex-row items-center justify-around\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\1337\\\\OneDrive\\\\Desktop\\\\ft_transcendence\\\\front_learning\\\\app\\\\userSettings\\\\userSettings.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\1337\\\\OneDrive\\\\Desktop\\\\ft_transcendence\\\\front_learning\\\\app\\\\userSettings\\\\userSettings.tsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\1337\\\\OneDrive\\\\Desktop\\\\ft_transcendence\\\\front_learning\\\\app\\\\userSettings\\\\userSettings.tsx\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\1337\\\\OneDrive\\\\Desktop\\\\ft_transcendence\\\\front_learning\\\\app\\\\userSettings\\\\userSettings.tsx\",\n        lineNumber: 34,\n        columnNumber: 13\n    }, this);\n}\n_s(UserSettings, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = UserSettings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserSettings);\nvar _c;\n$RefreshReg$(_c, \"UserSettings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91c2VyU2V0dGluZ3MvdXNlclNldHRpbmdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzBCO0FBQ3lCO0FBU25ELFNBQVNJOztJQUNMLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBcUIsRUFBRTtJQUV2RCxNQUFNSSxZQUFZO1FBQ2QsT0FBT0MsTUFBTSwyQ0FBMkM7WUFDcERDLFFBQVM7WUFDVEMsYUFBYztRQUNsQixHQUNTQyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHO1lBRUhDLFFBQVFDLEdBQUcsQ0FBQ1g7WUFDWkMsUUFBUVE7UUFDWixHQUFHRyxLQUFLLENBQUMsQ0FBQ0M7WUFDTkgsUUFBUUcsS0FBSyxDQUFDLFVBQVVBO1FBQzVCO0lBQ1I7SUFFQWhCLGdEQUFTQSxDQUFDO1FBQ05LO0lBQ0osR0FBRyxFQUFFO0lBQ1QscUJBQ1EsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDcEIsNkNBQUlBOzs7OzswQkFDTCw4REFBQ0EsNkNBQUlBOzs7OzswQkFDTCw4REFBQ0EsNkNBQUlBOzs7Ozs7Ozs7OztBQUdyQjtHQTVCU0k7S0FBQUE7QUE4QlQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VzZXJTZXR0aW5ncy91c2VyU2V0dGluZ3MudHN4P2QzYmEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgdXNlclNldHRpbmdzRGF0YSA9IHtcbiAgICBpbnZpdGF0aW9ucyA6IHN0cmluZ1tdO1xuICAgIGZyaWVuZHMgICAgIDogc3RyaW5nW107XG4gICAgYmFuZFVzZXJzICAgOiBzdHJpbmdbXTtcbn07XG5cblxuZnVuY3Rpb24gVXNlclNldHRpbmdzKCkge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPHVzZXJTZXR0aW5nc0RhdGFbXT4oW10pO1xuICAgIFxuICAgIGNvbnN0IGZldGNoSW5mbyA9ICgpID0+IHsgXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9DaGF0L3VzZXJTZXR0aW5nc1wiLCB7XG4gICAgICAgICAgICBtZXRob2QgOiBcIkdFVFwiLFxuICAgICAgICAgICAgY3JlZGVudGlhbHMgOiAnaW5jbHVkZSdcbiAgICAgICAgfSkgXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSkgXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQpID0+IFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoZClcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBmZXRjaEluZm8oKTtcbiAgICAgICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkLz5cbiAgICAgICAgICAgICAgICA8Q2FyZC8+XG4gICAgICAgICAgICAgICAgPENhcmQvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNldHRpbmdzOyJdLCJuYW1lcyI6WyJDYXJkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJTZXR0aW5ncyIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hJbmZvIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/userSettings/userSettings.tsx\n"));

/***/ })

});