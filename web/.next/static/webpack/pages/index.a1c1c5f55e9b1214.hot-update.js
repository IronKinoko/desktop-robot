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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ahooks */ \"../node_modules/.pnpm/ahooks@3.7.4_react@18.2.0/node_modules/ahooks/es/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst modifierKeys = [\n    \"control\",\n    \"shift\",\n    \"alt\",\n    \"command\"\n];\nconst keysGroup = [\n    [\n        \"enter\",\n        \"escape\",\n        \"tab\"\n    ],\n    new Array(12).fill(0).map((_, i)=>\"f\".concat(i + 1))\n];\nfunction Home() {\n    _s();\n    const [remote, setRemote] = (0,ahooks__WEBPACK_IMPORTED_MODULE_2__.useLocalStorageState)(\"remote\", {\n        defaultValue: \"http://kamiya.local:4444\"\n    });\n    const [modifier, modifierAction] = (0,ahooks__WEBPACK_IMPORTED_MODULE_2__.useSet)([]);\n    const tap = async (key)=>{\n        if (!key) return;\n        try {\n            const url = new URL(\"/api/tap\", remote);\n            url.searchParams.set(\"key\", key);\n            modifier.forEach((key)=>url.searchParams.append(\"modifier\", key));\n            const res = await fetch(url, {\n                method: \"POST\"\n            }).then((r)=>r.json());\n            if (!res.ok) alert(res.message);\n        } catch (error) {\n            alert(error.message);\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"p-4 block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"remote\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"border w-full shadow rounded px-2 py-1\",\n                        placeholder: \"remote url\",\n                        value: remote,\n                        onChange: (e)=>setRemote(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"keyboard\",\n                children: modifierKeys.map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"key\", {\n                            active: modifier.has(key)\n                        }),\n                        onClick: ()=>{\n                            if (modifier.has(key)) modifierAction.remove(key);\n                            else modifierAction.add(key);\n                        },\n                        children: key\n                    }, key, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            keysGroup.map((keys, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"keyboard\",\n                    children: keys.map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"key\",\n                            onClick: ()=>tap(key),\n                            children: key\n                        }, key, false, {\n                            fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this))\n                }, idx, false, {\n                    fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"keyboard\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"key\",\n                    value: \"\",\n                    placeholder: \"custom\",\n                    onKeyDown: (e)=>{\n                        const key = e.key;\n                        tap(key);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"FPOoUHq5+jcosfq3bipIbYds7iE=\", false, function() {\n    return [\n        ahooks__WEBPACK_IMPORTED_MODULE_2__.useLocalStorageState,\n        ahooks__WEBPACK_IMPORTED_MODULE_2__.useSet\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUQ7QUFDOUI7QUFFdkIsTUFBTUcsZUFBZTtJQUFDO0lBQVc7SUFBUztJQUFPO0NBQVU7QUFDM0QsTUFBTUMsWUFBWTtJQUFDO1FBQUM7UUFBUztRQUFVO0tBQU07SUFBRSxJQUFJQyxNQUFNLElBQUlDLElBQUksQ0FBQyxHQUFHQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTSxJQUFVLE9BQU5BLElBQUk7Q0FBSztBQUVqRixTQUFTQyxPQUFPOztJQUM3QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1osNERBQW9CQSxDQUFDLFVBQVU7UUFDekRhLGNBQWM7SUFDaEI7SUFFQSxNQUFNLENBQUNDLFVBQVVDLGVBQWUsR0FBR2QsOENBQU1BLENBQVMsRUFBRTtJQUVwRCxNQUFNZSxNQUFNLE9BQU9DLE1BQWdCO1FBQ2pDLElBQUksQ0FBQ0EsS0FBSztRQUNWLElBQUk7WUFDRixNQUFNQyxNQUFNLElBQUlDLElBQUksWUFBWVI7WUFDaENPLElBQUlFLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLE9BQU9KO1lBQzVCSCxTQUFTUSxPQUFPLENBQUMsQ0FBQ0wsTUFBUUMsSUFBSUUsWUFBWSxDQUFDRyxNQUFNLENBQUMsWUFBWU47WUFDOUQsTUFBTU8sTUFBTSxNQUFNQyxNQUFNUCxLQUFLO2dCQUFFUSxRQUFRO1lBQU8sR0FBR0MsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLElBQUk7WUFDbkUsSUFBSSxDQUFDTCxJQUFJTSxFQUFFLEVBQUVDLE1BQU1QLElBQUlRLE9BQU87UUFDaEMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RGLE1BQU1FLE1BQU1ELE9BQU87WUFDbkJFLFFBQVFELEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUNBLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDO2dCQUFNQyxXQUFVOztrQ0FDZiw4REFBQ0M7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xILFdBQVU7d0JBQ1ZJLGFBQVk7d0JBQ1pDLE9BQU8vQjt3QkFDUGdDLFVBQVUsQ0FBQ0MsSUFBTWhDLFVBQVVnQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzswQkFHN0MsOERBQUNKO2dCQUFJRCxXQUFVOzBCQUNabEMsYUFBYUksR0FBRyxDQUFDLENBQUNVLG9CQUNqQiw4REFBQ3FCO3dCQUVDRCxXQUFXbkMsZ0RBQUlBLENBQUMsT0FBTzs0QkFBRTRDLFFBQVFoQyxTQUFTaUMsR0FBRyxDQUFDOUI7d0JBQUs7d0JBQ25EK0IsU0FBUyxJQUFNOzRCQUNiLElBQUlsQyxTQUFTaUMsR0FBRyxDQUFDOUIsTUFBTUYsZUFBZWtDLE1BQU0sQ0FBQ2hDO2lDQUN4Q0YsZUFBZW1DLEdBQUcsQ0FBQ2pDO3dCQUMxQjtrQ0FFQ0E7dUJBUElBOzs7Ozs7Ozs7O1lBV1ZiLFVBQVVHLEdBQUcsQ0FBQyxDQUFDNEMsTUFBTUMsb0JBQ3BCLDhEQUFDZDtvQkFBY0QsV0FBVTs4QkFDdEJjLEtBQUs1QyxHQUFHLENBQUMsQ0FBQ1Usb0JBQ1QsOERBQUNxQjs0QkFBY0QsV0FBVTs0QkFBTVcsU0FBUyxJQUFNaEMsSUFBSUM7c0NBQy9DQTsyQkFET0E7Ozs7O21CQUZKbUM7Ozs7OzBCQVNaLDhEQUFDZDtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQ0NDLE1BQUs7b0JBQ0xILFdBQVU7b0JBQ1ZLLE9BQU07b0JBQ05ELGFBQVk7b0JBQ1pZLFdBQVcsQ0FBQ1QsSUFBTTt3QkFDaEIsTUFBTTNCLE1BQU0yQixFQUFFM0IsR0FBRzt3QkFDakJELElBQUlDO29CQUNOOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWLENBQUM7R0F0RXVCUDs7UUFDTVYsd0RBQW9CQTtRQUliQywwQ0FBTUE7OztLQUxuQlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZVN0YXRlLCB1c2VTZXQgfSBmcm9tICdhaG9va3MnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5jb25zdCBtb2RpZmllcktleXMgPSBbJ2NvbnRyb2wnLCAnc2hpZnQnLCAnYWx0JywgJ2NvbW1hbmQnXVxuY29uc3Qga2V5c0dyb3VwID0gW1snZW50ZXInLCAnZXNjYXBlJywgJ3RhYiddLCBuZXcgQXJyYXkoMTIpLmZpbGwoMCkubWFwKChfLCBpKSA9PiBgZiR7aSArIDF9YCldXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtyZW1vdGUsIHNldFJlbW90ZV0gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSgncmVtb3RlJywge1xuICAgIGRlZmF1bHRWYWx1ZTogJ2h0dHA6Ly9rYW1peWEubG9jYWw6NDQ0NCcsXG4gIH0pXG5cbiAgY29uc3QgW21vZGlmaWVyLCBtb2RpZmllckFjdGlvbl0gPSB1c2VTZXQ8c3RyaW5nPihbXSlcblxuICBjb25zdCB0YXAgPSBhc3luYyAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIWtleSkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoJy9hcGkvdGFwJywgcmVtb3RlKVxuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2tleScsIGtleSlcbiAgICAgIG1vZGlmaWVyLmZvckVhY2goKGtleSkgPT4gdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ21vZGlmaWVyJywga2V5KSlcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJyB9KS50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgIGlmICghcmVzLm9rKSBhbGVydChyZXMubWVzc2FnZSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicC00IGJsb2NrXCI+XG4gICAgICAgIDxkaXY+cmVtb3RlPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgdy1mdWxsIHNoYWRvdyByb3VuZGVkIHB4LTIgcHktMVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJyZW1vdGUgdXJsXCJcbiAgICAgICAgICB2YWx1ZT17cmVtb3RlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVtb3RlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleWJvYXJkXCI+XG4gICAgICAgIHttb2RpZmllcktleXMubWFwKChrZXkpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgna2V5JywgeyBhY3RpdmU6IG1vZGlmaWVyLmhhcyhrZXkpIH0pfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAobW9kaWZpZXIuaGFzKGtleSkpIG1vZGlmaWVyQWN0aW9uLnJlbW92ZShrZXkpXG4gICAgICAgICAgICAgIGVsc2UgbW9kaWZpZXJBY3Rpb24uYWRkKGtleSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2tleX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtrZXlzR3JvdXAubWFwKChrZXlzLCBpZHgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwia2V5Ym9hcmRcIj5cbiAgICAgICAgICB7a2V5cy5tYXAoKGtleSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwia2V5XCIgb25DbGljaz17KCkgPT4gdGFwKGtleSl9PlxuICAgICAgICAgICAgICB7a2V5fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5Ym9hcmRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImtleVwiXG4gICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY3VzdG9tXCJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlLmtleVxuICAgICAgICAgICAgdGFwKGtleSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlTG9jYWxTdG9yYWdlU3RhdGUiLCJ1c2VTZXQiLCJjbHN4IiwibW9kaWZpZXJLZXlzIiwia2V5c0dyb3VwIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJIb21lIiwicmVtb3RlIiwic2V0UmVtb3RlIiwiZGVmYXVsdFZhbHVlIiwibW9kaWZpZXIiLCJtb2RpZmllckFjdGlvbiIsInRhcCIsImtleSIsInVybCIsIlVSTCIsInNlYXJjaFBhcmFtcyIsInNldCIsImZvckVhY2giLCJhcHBlbmQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyIiwianNvbiIsIm9rIiwiYWxlcnQiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibWFpbiIsImxhYmVsIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImFjdGl2ZSIsImhhcyIsIm9uQ2xpY2siLCJyZW1vdmUiLCJhZGQiLCJrZXlzIiwiaWR4Iiwib25LZXlEb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});