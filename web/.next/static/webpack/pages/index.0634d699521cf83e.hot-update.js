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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ahooks */ \"../node_modules/.pnpm/ahooks@3.7.4_react@18.2.0/node_modules/ahooks/es/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst modifierKeys = [\n    \"control\",\n    \"shift\",\n    \"alt\"\n];\nconst keysGroup = [\n    [\n        \"enter\",\n        \"escape\",\n        \"tab\"\n    ],\n    new Array(12).fill(0).map((_, i)=>\"f\".concat(i + 1))\n];\nfunction Home() {\n    _s();\n    const [remote, setRemote] = (0,ahooks__WEBPACK_IMPORTED_MODULE_2__.useLocalStorageState)(\"remote\", {\n        defaultValue: \"http://kamiya.local:4444\"\n    });\n    const [modifier, modifierAction] = (0,ahooks__WEBPACK_IMPORTED_MODULE_2__.useSet)([]);\n    const tap = async (key)=>{\n        try {\n            const url = new URL(\"/api/tap\", remote);\n            url.searchParams.set(\"key\", key);\n            modifier.forEach((key)=>url.searchParams.append(\"modifier\", key));\n            const res = await fetch(url, {\n                method: \"POST\"\n            }).then((r)=>r.json());\n            if (!res.ok) alert(res.message);\n        } catch (error) {\n            alert(error.message);\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"p-4 block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"remote\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"border w-full shadow rounded px-2 py-1\",\n                        placeholder: \"remote url\",\n                        value: remote,\n                        onChange: (e)=>setRemote(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"keyboard\",\n                children: modifierKeys.map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"key\", {\n                            active: modifier.has(key)\n                        }),\n                        onClick: ()=>{\n                            if (modifier.has(key)) modifierAction.remove(key);\n                            else modifierAction.add(key);\n                        },\n                        children: key\n                    }, key, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            keysGroup.map((keys, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"keyboard\",\n                    children: keys.map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"key\",\n                            onClick: ()=>tap(key),\n                            children: key\n                        }, key, false, {\n                            fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this))\n                }, idx, false, {\n                    fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"keyboard\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"key\",\n                    value: \"\",\n                    placeholder: \"custom\",\n                    onChange: (e)=>{\n                        const key = e.target.value;\n                        tap(key);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"FPOoUHq5+jcosfq3bipIbYds7iE=\", false, function() {\n    return [\n        ahooks__WEBPACK_IMPORTED_MODULE_2__.useLocalStorageState,\n        ahooks__WEBPACK_IMPORTED_MODULE_2__.useSet\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUQ7QUFDOUI7QUFFdkIsTUFBTUcsZUFBZTtJQUFDO0lBQVc7SUFBUztDQUFNO0FBQ2hELE1BQU1DLFlBQVk7SUFBQztRQUFDO1FBQVM7UUFBVTtLQUFNO0lBQUUsSUFBSUMsTUFBTSxJQUFJQyxJQUFJLENBQUMsR0FBR0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLElBQU0sSUFBVSxPQUFOQSxJQUFJO0NBQUs7QUFFakYsU0FBU0MsT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLDREQUFvQkEsQ0FBQyxVQUFVO1FBQ3pEYSxjQUFjO0lBQ2hCO0lBRUEsTUFBTSxDQUFDQyxVQUFVQyxlQUFlLEdBQUdkLDhDQUFNQSxDQUFTLEVBQUU7SUFFcEQsTUFBTWUsTUFBTSxPQUFPQyxNQUFnQjtRQUNqQyxJQUFJO1lBQ0YsTUFBTUMsTUFBTSxJQUFJQyxJQUFJLFlBQVlSO1lBQ2hDTyxJQUFJRSxZQUFZLENBQUNDLEdBQUcsQ0FBQyxPQUFPSjtZQUM1QkgsU0FBU1EsT0FBTyxDQUFDLENBQUNMLE1BQVFDLElBQUlFLFlBQVksQ0FBQ0csTUFBTSxDQUFDLFlBQVlOO1lBQzlELE1BQU1PLE1BQU0sTUFBTUMsTUFBTVAsS0FBSztnQkFBRVEsUUFBUTtZQUFPLEdBQUdDLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxJQUFJO1lBQ25FLElBQUksQ0FBQ0wsSUFBSU0sRUFBRSxFQUFFQyxNQUFNUCxJQUFJUSxPQUFPO1FBQ2hDLEVBQUUsT0FBT0MsT0FBTztZQUNkRixNQUFNRSxNQUFNRCxPQUFPO1lBQ25CRSxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDQztnQkFBTUMsV0FBVTs7a0NBQ2YsOERBQUNDO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMSCxXQUFVO3dCQUNWSSxhQUFZO3dCQUNaQyxPQUFPL0I7d0JBQ1BnQyxVQUFVLENBQUNDLElBQU1oQyxVQUFVZ0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7MEJBRzdDLDhEQUFDSjtnQkFBSUQsV0FBVTswQkFDWmxDLGFBQWFJLEdBQUcsQ0FBQyxDQUFDVSxvQkFDakIsOERBQUNxQjt3QkFFQ0QsV0FBV25DLGdEQUFJQSxDQUFDLE9BQU87NEJBQUU0QyxRQUFRaEMsU0FBU2lDLEdBQUcsQ0FBQzlCO3dCQUFLO3dCQUNuRCtCLFNBQVMsSUFBTTs0QkFDYixJQUFJbEMsU0FBU2lDLEdBQUcsQ0FBQzlCLE1BQU1GLGVBQWVrQyxNQUFNLENBQUNoQztpQ0FDeENGLGVBQWVtQyxHQUFHLENBQUNqQzt3QkFDMUI7a0NBRUNBO3VCQVBJQTs7Ozs7Ozs7OztZQVdWYixVQUFVRyxHQUFHLENBQUMsQ0FBQzRDLE1BQU1DLG9CQUNwQiw4REFBQ2Q7b0JBQWNELFdBQVU7OEJBQ3RCYyxLQUFLNUMsR0FBRyxDQUFDLENBQUNVLG9CQUNULDhEQUFDcUI7NEJBQWNELFdBQVU7NEJBQU1XLFNBQVMsSUFBTWhDLElBQUlDO3NDQUMvQ0E7MkJBRE9BOzs7OzttQkFGSm1DOzs7OzswQkFTWiw4REFBQ2Q7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNFO29CQUNDQyxNQUFLO29CQUNMSCxXQUFVO29CQUNWSyxPQUFNO29CQUNORCxhQUFZO29CQUNaRSxVQUFVLENBQUNDLElBQU07d0JBQ2YsTUFBTTNCLE1BQU0yQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzFCMUIsSUFBSUM7b0JBQ047Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQXJFdUJQOztRQUNNVix3REFBb0JBO1FBSWJDLDBDQUFNQTs7O0tBTG5CUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlU3RhdGUsIHVzZVNldCB9IGZyb20gJ2Fob29rcydcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5cbmNvbnN0IG1vZGlmaWVyS2V5cyA9IFsnY29udHJvbCcsICdzaGlmdCcsICdhbHQnXVxuY29uc3Qga2V5c0dyb3VwID0gW1snZW50ZXInLCAnZXNjYXBlJywgJ3RhYiddLCBuZXcgQXJyYXkoMTIpLmZpbGwoMCkubWFwKChfLCBpKSA9PiBgZiR7aSArIDF9YCldXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtyZW1vdGUsIHNldFJlbW90ZV0gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSgncmVtb3RlJywge1xuICAgIGRlZmF1bHRWYWx1ZTogJ2h0dHA6Ly9rYW1peWEubG9jYWw6NDQ0NCcsXG4gIH0pXG5cbiAgY29uc3QgW21vZGlmaWVyLCBtb2RpZmllckFjdGlvbl0gPSB1c2VTZXQ8c3RyaW5nPihbXSlcblxuICBjb25zdCB0YXAgPSBhc3luYyAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCgnL2FwaS90YXAnLCByZW1vdGUpXG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgna2V5Jywga2V5KVxuICAgICAgbW9kaWZpZXIuZm9yRWFjaCgoa2V5KSA9PiB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnbW9kaWZpZXInLCBrZXkpKVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgaWYgKCFyZXMub2spIGFsZXJ0KHJlcy5tZXNzYWdlKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKVxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwLTQgYmxvY2tcIj5cbiAgICAgICAgPGRpdj5yZW1vdGU8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LWZ1bGwgc2hhZG93IHJvdW5kZWQgcHgtMiBweS0xXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlbW90ZSB1cmxcIlxuICAgICAgICAgIHZhbHVlPXtyZW1vdGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZW1vdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5Ym9hcmRcIj5cbiAgICAgICAge21vZGlmaWVyS2V5cy5tYXAoKGtleSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdrZXknLCB7IGFjdGl2ZTogbW9kaWZpZXIuaGFzKGtleSkgfSl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChtb2RpZmllci5oYXMoa2V5KSkgbW9kaWZpZXJBY3Rpb24ucmVtb3ZlKGtleSlcbiAgICAgICAgICAgICAgZWxzZSBtb2RpZmllckFjdGlvbi5hZGQoa2V5KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7a2V5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2tleXNHcm91cC5tYXAoKGtleXMsIGlkeCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJrZXlib2FyZFwiPlxuICAgICAgICAgIHtrZXlzLm1hcCgoa2V5KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJrZXlcIiBvbkNsaWNrPXsoKSA9PiB0YXAoa2V5KX0+XG4gICAgICAgICAgICAgIHtrZXl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXlib2FyZFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwia2V5XCJcbiAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJjdXN0b21cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIHRhcChrZXkpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwidXNlU2V0IiwiY2xzeCIsIm1vZGlmaWVyS2V5cyIsImtleXNHcm91cCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiSG9tZSIsInJlbW90ZSIsInNldFJlbW90ZSIsImRlZmF1bHRWYWx1ZSIsIm1vZGlmaWVyIiwibW9kaWZpZXJBY3Rpb24iLCJ0YXAiLCJrZXkiLCJ1cmwiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJmb3JFYWNoIiwiYXBwZW5kIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwiciIsImpzb24iLCJvayIsImFsZXJ0IiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsIm1haW4iLCJsYWJlbCIsImNsYXNzTmFtZSIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJhY3RpdmUiLCJoYXMiLCJvbkNsaWNrIiwicmVtb3ZlIiwiYWRkIiwia2V5cyIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});