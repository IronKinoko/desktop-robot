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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ahooks */ \"../node_modules/.pnpm/ahooks@3.7.4_react@18.2.0/node_modules/ahooks/es/index.js\");\n\nvar _s = $RefreshSig$();\n\nconst modifierKeys = [\n    \"ctrl\",\n    \"shift\",\n    \"alt\",\n    \"meta\"\n];\nconst keys = [\n    ...new Array(12).fill(0).map((_, i)=>\"f\".concat(i + 1)),\n    \"enter\",\n    \"escape\",\n    \"tab\"\n];\nfunction Home() {\n    _s();\n    const [remote, setRemote] = (0,ahooks__WEBPACK_IMPORTED_MODULE_1__.useLocalStorageState)(\"remote\", {\n        defaultValue: \"http://kamiya.local:4444\"\n    });\n    const [modifier, modifierAction] = (0,ahooks__WEBPACK_IMPORTED_MODULE_1__.useSet)([]);\n    const tap = async (key)=>{\n        try {\n            const url = new URL(\"/api/tap\", remote);\n            url.searchParams.set(\"key\", key);\n            const res = await fetch(url, {\n                method: \"POST\"\n            }).then((r)=>r.json());\n            if (!res.ok) alert(res.message);\n        } catch (error) {\n            alert(error.message);\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"p-4 block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"remote\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"border w-full shadow rounded px-2 py-1\",\n                        placeholder: \"remote url\",\n                        value: remote,\n                        onChange: (e)=>setRemote(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 gap-4 p-4\",\n                children: modifierKeys.map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white text-center shadow rounded py-2 active:bg-sky-50\",\n                        onClick: ()=>{\n                            if (modifier.has(key)) modifierAction.remove(key);\n                            else modifierAction.add(key);\n                        }\n                    }, key, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 gap-4 p-4\",\n                children: keys.map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white text-center shadow rounded py-2 active:bg-sky-50\",\n                        onClick: ()=>tap(key),\n                        children: key\n                    }, key, false, {\n                        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zl/Documents/Github/desktop-robot/web/src/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"FPOoUHq5+jcosfq3bipIbYds7iE=\", false, function() {\n    return [\n        ahooks__WEBPACK_IMPORTED_MODULE_1__.useLocalStorageState,\n        ahooks__WEBPACK_IMPORTED_MODULE_1__.useSet\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxRDtBQUVyRCxNQUFNRSxlQUFlO0lBQUM7SUFBUTtJQUFTO0lBQU87Q0FBTztBQUNyRCxNQUFNQyxPQUFPO09BQUksSUFBSUMsTUFBTSxJQUFJQyxJQUFJLENBQUMsR0FBR0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLElBQU0sSUFBVSxPQUFOQSxJQUFJO0lBQU07SUFBUztJQUFVO0NBQU07QUFFN0UsU0FBU0MsT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdYLDREQUFvQkEsQ0FBQyxVQUFVO1FBQ3pEWSxjQUFjO0lBQ2hCO0lBRUEsTUFBTSxDQUFDQyxVQUFVQyxlQUFlLEdBQUdiLDhDQUFNQSxDQUFTLEVBQUU7SUFFcEQsTUFBTWMsTUFBTSxPQUFPQyxNQUFnQjtRQUNqQyxJQUFJO1lBQ0YsTUFBTUMsTUFBTSxJQUFJQyxJQUFJLFlBQVlSO1lBQ2hDTyxJQUFJRSxZQUFZLENBQUNDLEdBQUcsQ0FBQyxPQUFPSjtZQUM1QixNQUFNSyxNQUFNLE1BQU1DLE1BQU1MLEtBQUs7Z0JBQUVNLFFBQVE7WUFBTyxHQUFHQyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsSUFBSTtZQUNuRSxJQUFJLENBQUNMLElBQUlNLEVBQUUsRUFBRUMsTUFBTVAsSUFBSVEsT0FBTztRQUNoQyxFQUFFLE9BQU9DLE9BQU87WUFDZEYsTUFBTUUsTUFBTUQsT0FBTztZQUNuQkUsUUFBUUQsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7Z0JBQU1DLFdBQVU7O2tDQUNmLDhEQUFDQztrQ0FBSTs7Ozs7O2tDQUNMLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEgsV0FBVTt3QkFDVkksYUFBWTt3QkFDWkMsT0FBTzdCO3dCQUNQOEIsVUFBVSxDQUFDQyxJQUFNOUIsVUFBVThCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUc3Qyw4REFBQ0o7Z0JBQUlELFdBQVU7MEJBQ1poQyxhQUFhSSxHQUFHLENBQUMsQ0FBQ1Usb0JBQ2pCLDhEQUFDbUI7d0JBRUNELFdBQVU7d0JBQ1ZTLFNBQVMsSUFBTTs0QkFDYixJQUFJOUIsU0FBUytCLEdBQUcsQ0FBQzVCLE1BQU1GLGVBQWUrQixNQUFNLENBQUM3QjtpQ0FDeENGLGVBQWVnQyxHQUFHLENBQUM5Qjt3QkFDMUI7dUJBTEtBOzs7Ozs7Ozs7OzBCQVNYLDhEQUFDbUI7Z0JBQUlELFdBQVU7MEJBQ1ovQixLQUFLRyxHQUFHLENBQUMsQ0FBQ1Usb0JBQ1QsOERBQUNtQjt3QkFFQ0QsV0FBVTt3QkFDVlMsU0FBUyxJQUFNNUIsSUFBSUM7a0NBRWxCQTt1QkFKSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakIsQ0FBQztHQXZEdUJQOztRQUNNVCx3REFBb0JBO1FBSWJDLDBDQUFNQTs7O0tBTG5CUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlU3RhdGUsIHVzZVNldCB9IGZyb20gJ2Fob29rcydcblxuY29uc3QgbW9kaWZpZXJLZXlzID0gWydjdHJsJywgJ3NoaWZ0JywgJ2FsdCcsICdtZXRhJ11cbmNvbnN0IGtleXMgPSBbLi4ubmV3IEFycmF5KDEyKS5maWxsKDApLm1hcCgoXywgaSkgPT4gYGYke2kgKyAxfWApLCAnZW50ZXInLCAnZXNjYXBlJywgJ3RhYiddXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtyZW1vdGUsIHNldFJlbW90ZV0gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSgncmVtb3RlJywge1xuICAgIGRlZmF1bHRWYWx1ZTogJ2h0dHA6Ly9rYW1peWEubG9jYWw6NDQ0NCcsXG4gIH0pXG5cbiAgY29uc3QgW21vZGlmaWVyLCBtb2RpZmllckFjdGlvbl0gPSB1c2VTZXQ8c3RyaW5nPihbXSlcblxuICBjb25zdCB0YXAgPSBhc3luYyAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCgnL2FwaS90YXAnLCByZW1vdGUpXG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgna2V5Jywga2V5KVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgaWYgKCFyZXMub2spIGFsZXJ0KHJlcy5tZXNzYWdlKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKVxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwLTQgYmxvY2tcIj5cbiAgICAgICAgPGRpdj5yZW1vdGU8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LWZ1bGwgc2hhZG93IHJvdW5kZWQgcHgtMiBweS0xXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlbW90ZSB1cmxcIlxuICAgICAgICAgIHZhbHVlPXtyZW1vdGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZW1vdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNCBwLTRcIj5cbiAgICAgICAge21vZGlmaWVyS2V5cy5tYXAoKGtleSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1jZW50ZXIgc2hhZG93IHJvdW5kZWQgcHktMiBhY3RpdmU6Ymctc2t5LTUwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG1vZGlmaWVyLmhhcyhrZXkpKSBtb2RpZmllckFjdGlvbi5yZW1vdmUoa2V5KVxuICAgICAgICAgICAgICBlbHNlIG1vZGlmaWVyQWN0aW9uLmFkZChrZXkpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNCBwLTRcIj5cbiAgICAgICAge2tleXMubWFwKChrZXkpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtY2VudGVyIHNoYWRvdyByb3VuZGVkIHB5LTIgYWN0aXZlOmJnLXNreS01MFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0YXAoa2V5KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7a2V5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwidXNlU2V0IiwibW9kaWZpZXJLZXlzIiwia2V5cyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiSG9tZSIsInJlbW90ZSIsInNldFJlbW90ZSIsImRlZmF1bHRWYWx1ZSIsIm1vZGlmaWVyIiwibW9kaWZpZXJBY3Rpb24iLCJ0YXAiLCJrZXkiLCJ1cmwiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyIiwianNvbiIsIm9rIiwiYWxlcnQiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibWFpbiIsImxhYmVsIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJoYXMiLCJyZW1vdmUiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});