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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ahooks */ \"../node_modules/.pnpm/ahooks@3.7.4_react@18.2.0/node_modules/ahooks/es/index.js\");\n\nvar _s = $RefreshSig$();\n\nconst keys = [\n    \"enter\",\n    \"esc\"\n];\nfunction Home() {\n    _s();\n    const [remote, setRemote] = (0,ahooks__WEBPACK_IMPORTED_MODULE_1__.useLocalStorageState)(\"remote\", {\n        defaultValue: \"http://kamiya.local:4444\"\n    });\n    const tap = async (key)=>{\n        try {\n            const url = new URL(\"/api/tap\", remote);\n            const res = await fetch(url, {\n                body: JSON.stringify({\n                    key\n                })\n            });\n        } catch (error) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"p-4 block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"remote\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"border w-full shadow rounded px-2 py-1\",\n                        placeholder: \"remote url\",\n                        value: remote,\n                        onChange: (e)=>setRemote(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"keyboard grid grid-cols-3 gap-4 p-4\",\n                children: keys.map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white text-center shadow rounded px-4 py-2 active:bg-sky-50\",\n                        onClick: ()=>tap(key),\n                        children: key\n                    }, key, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ZXJ2KD82b8yvTCGrM/tzPpolrJc=\", false, function() {\n    return [\n        ahooks__WEBPACK_IMPORTED_MODULE_1__.useLocalStorageState\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QztBQUM3QyxNQUFNQyxPQUFPO0lBQUM7SUFBUztDQUFNO0FBRWQsU0FBU0MsT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLDREQUFvQkEsQ0FBQyxVQUFVO1FBQ3pESyxjQUFjO0lBQ2hCO0lBRUEsTUFBTUMsTUFBTSxPQUFPQyxNQUFnQjtRQUNqQyxJQUFJO1lBQ0YsTUFBTUMsTUFBTSxJQUFJQyxJQUFJLFlBQVlOO1lBQ2hDLE1BQU1PLE1BQU0sTUFBTUMsTUFBTUgsS0FBSztnQkFBRUksTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUDtnQkFBSTtZQUFHO1FBQy9ELEVBQUUsT0FBT1EsT0FBTyxDQUFDO0lBQ25CO0lBQ0EscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQU1DLFdBQVU7O2tDQUNmLDhEQUFDQztrQ0FBSTs7Ozs7O2tDQUNMLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEgsV0FBVTt3QkFDVkksYUFBWTt3QkFDWkMsT0FBT3BCO3dCQUNQcUIsVUFBVSxDQUFDQyxJQUFNckIsVUFBVXFCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUc3Qyw4REFBQ0o7Z0JBQUlELFdBQVU7MEJBQ1pqQixLQUFLMEIsR0FBRyxDQUFDLENBQUNwQixvQkFDVCw4REFBQ1k7d0JBRUNELFdBQVU7d0JBQ1ZVLFNBQVMsSUFBTXRCLElBQUlDO2tDQUVsQkE7dUJBSklBOzs7Ozs7Ozs7Ozs7Ozs7O0FBVWpCLENBQUM7R0FwQ3VCTDs7UUFDTUYsd0RBQW9CQTs7O0tBRDFCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlU3RhdGUgfSBmcm9tICdhaG9va3MnXG5jb25zdCBrZXlzID0gWydlbnRlcicsICdlc2MnXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcmVtb3RlLCBzZXRSZW1vdGVdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoJ3JlbW90ZScsIHtcbiAgICBkZWZhdWx0VmFsdWU6ICdodHRwOi8va2FtaXlhLmxvY2FsOjQ0NDQnLFxuICB9KVxuXG4gIGNvbnN0IHRhcCA9IGFzeW5jIChrZXk6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKCcvYXBpL3RhcCcsIHJlbW90ZSlcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGtleSB9KSB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicC00IGJsb2NrXCI+XG4gICAgICAgIDxkaXY+cmVtb3RlPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgdy1mdWxsIHNoYWRvdyByb3VuZGVkIHB4LTIgcHktMVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJyZW1vdGUgdXJsXCJcbiAgICAgICAgICB2YWx1ZT17cmVtb3RlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVtb3RlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleWJvYXJkIGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTQgcC00XCI+XG4gICAgICAgIHtrZXlzLm1hcCgoa2V5KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWNlbnRlciBzaGFkb3cgcm91bmRlZCBweC00IHB5LTIgYWN0aXZlOmJnLXNreS01MFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0YXAoa2V5KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7a2V5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwia2V5cyIsIkhvbWUiLCJyZW1vdGUiLCJzZXRSZW1vdGUiLCJkZWZhdWx0VmFsdWUiLCJ0YXAiLCJrZXkiLCJ1cmwiLCJVUkwiLCJyZXMiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJtYWluIiwibGFiZWwiLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibWFwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});