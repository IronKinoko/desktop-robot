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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ahooks */ \"../node_modules/.pnpm/ahooks@3.7.4_react@18.2.0/node_modules/ahooks/es/index.js\");\n\nvar _s = $RefreshSig$();\n\nconst keys = [\n    ...new Array(12).fill(0).map((_, i)=>\"f\".concat(i + 1)),\n    \"enter\",\n    \"escape\",\n    \"tab\"\n];\nfunction Home() {\n    _s();\n    const [remote, setRemote] = (0,ahooks__WEBPACK_IMPORTED_MODULE_1__.useLocalStorageState)(\"remote\", {\n        defaultValue: \"http://kamiya.local:4444\"\n    });\n    const tap = async (key)=>{\n        try {\n            const url = new URL(\"/api/tap\", remote);\n            url.searchParams.set(\"key\", key);\n            const res = await fetch(url, {\n                method: \"POST\"\n            }).then((r)=>r.json());\n            if (!res.ok) alert(res.message);\n        } catch (error) {\n            alert(error.message);\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"p-4 block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"remote\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"border w-full shadow rounded px-2 py-1\",\n                        placeholder: \"remote url\",\n                        value: remote,\n                        onChange: (e)=>setRemote(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"keyboard grid grid-cols-3 gap-4 p-4\",\n                children: keys.map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white text-center shadow rounded px-4 py-2 active:bg-sky-50\",\n                        onClick: ()=>tap(key),\n                        children: key\n                    }, key, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ZXJ2KD82b8yvTCGrM/tzPpolrJc=\", false, function() {\n    return [\n        ahooks__WEBPACK_IMPORTED_MODULE_1__.useLocalStorageState\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QztBQUM3QyxNQUFNQyxPQUFPO09BQUksSUFBSUMsTUFBTSxJQUFJQyxJQUFJLENBQUMsR0FBR0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLElBQU0sSUFBVSxPQUFOQSxJQUFJO0lBQU07SUFBUztJQUFVO0NBQU07QUFFN0UsU0FBU0MsT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULDREQUFvQkEsQ0FBQyxVQUFVO1FBQ3pEVSxjQUFjO0lBQ2hCO0lBRUEsTUFBTUMsTUFBTSxPQUFPQyxNQUFnQjtRQUNqQyxJQUFJO1lBQ0YsTUFBTUMsTUFBTSxJQUFJQyxJQUFJLFlBQVlOO1lBQ2hDSyxJQUFJRSxZQUFZLENBQUNDLEdBQUcsQ0FBQyxPQUFPSjtZQUM1QixNQUFNSyxNQUFNLE1BQU1DLE1BQU1MLEtBQUs7Z0JBQUVNLFFBQVE7WUFBTyxHQUFHQyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsSUFBSTtZQUNuRSxJQUFJLENBQUNMLElBQUlNLEVBQUUsRUFBRUMsTUFBTVAsSUFBSVEsT0FBTztRQUNoQyxFQUFFLE9BQU9DLE9BQU87WUFDZEYsTUFBTUUsTUFBTUQsT0FBTztZQUNuQkUsUUFBUUQsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7Z0JBQU1DLFdBQVU7O2tDQUNmLDhEQUFDQztrQ0FBSTs7Ozs7O2tDQUNMLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEgsV0FBVTt3QkFDVkksYUFBWTt3QkFDWkMsT0FBTzNCO3dCQUNQNEIsVUFBVSxDQUFDQyxJQUFNNUIsVUFBVTRCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUc3Qyw4REFBQ0o7Z0JBQUlELFdBQVU7MEJBQ1o3QixLQUFLRyxHQUFHLENBQUMsQ0FBQ1Esb0JBQ1QsOERBQUNtQjt3QkFFQ0QsV0FBVTt3QkFDVlMsU0FBUyxJQUFNNUIsSUFBSUM7a0NBRWxCQTt1QkFKSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakIsQ0FBQztHQXpDdUJMOztRQUNNUCx3REFBb0JBOzs7S0FEMUJPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSB9IGZyb20gJ2Fob29rcydcbmNvbnN0IGtleXMgPSBbLi4ubmV3IEFycmF5KDEyKS5maWxsKDApLm1hcCgoXywgaSkgPT4gYGYke2kgKyAxfWApLCAnZW50ZXInLCAnZXNjYXBlJywgJ3RhYiddXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtyZW1vdGUsIHNldFJlbW90ZV0gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSgncmVtb3RlJywge1xuICAgIGRlZmF1bHRWYWx1ZTogJ2h0dHA6Ly9rYW1peWEubG9jYWw6NDQ0NCcsXG4gIH0pXG5cbiAgY29uc3QgdGFwID0gYXN5bmMgKGtleTogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoJy9hcGkvdGFwJywgcmVtb3RlKVxuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2tleScsIGtleSlcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJyB9KS50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgIGlmICghcmVzLm9rKSBhbGVydChyZXMubWVzc2FnZSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicC00IGJsb2NrXCI+XG4gICAgICAgIDxkaXY+cmVtb3RlPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgdy1mdWxsIHNoYWRvdyByb3VuZGVkIHB4LTIgcHktMVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJyZW1vdGUgdXJsXCJcbiAgICAgICAgICB2YWx1ZT17cmVtb3RlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVtb3RlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleWJvYXJkIGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTQgcC00XCI+XG4gICAgICAgIHtrZXlzLm1hcCgoa2V5KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWNlbnRlciBzaGFkb3cgcm91bmRlZCBweC00IHB5LTIgYWN0aXZlOmJnLXNreS01MFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0YXAoa2V5KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7a2V5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwia2V5cyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiSG9tZSIsInJlbW90ZSIsInNldFJlbW90ZSIsImRlZmF1bHRWYWx1ZSIsInRhcCIsImtleSIsInVybCIsIlVSTCIsInNlYXJjaFBhcmFtcyIsInNldCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInIiLCJqc29uIiwib2siLCJhbGVydCIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJtYWluIiwibGFiZWwiLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});