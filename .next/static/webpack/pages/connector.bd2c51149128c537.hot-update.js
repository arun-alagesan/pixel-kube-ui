"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/connector",{

/***/ "./components/features/GoogleLogin/LoginButton.tsx":
/*!*********************************************************!*\
  !*** ./components/features/GoogleLogin/LoginButton.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GoogleLoginButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-oauth/google */ \"./node_modules/@react-oauth/google/dist/index.esm.js\");\n\n\n\nconst clientId = \"531686912380-bt5qnls2h1vi4omu0c4ti2fmhdi0f1ib.apps.googleusercontent.com\";\nfunction GoogleLoginButton() {\n    const onSuccess = (res)=>{\n        console.log(res.profileobj);\n    };\n    const onFailure = (res)=>{\n        console.log(res);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_oauth_google__WEBPACK_IMPORTED_MODULE_1__.GoogleOAuthProvider, {\n            clientId: clientId,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_oauth_google__WEBPACK_IMPORTED_MODULE_1__.GoogleLogin, {\n                onSuccess: (credentialResponse)=>{\n                    console.log(credentialResponse);\n                },\n                onError: ()=>{\n                    console.log(\"Login Failed\");\n                },\n                size: \"large\"\n            }, void 0, false, {\n                fileName: \"D:\\\\pixel\\\\React Code\\\\pixelKube\\\\components\\\\features\\\\GoogleLogin\\\\LoginButton.tsx\",\n                lineNumber: 20,\n                columnNumber: 8\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\pixel\\\\React Code\\\\pixelKube\\\\components\\\\features\\\\GoogleLogin\\\\LoginButton.tsx\",\n            lineNumber: 19,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = GoogleLoginButton;\nvar _c;\n$RefreshReg$(_c, \"GoogleLoginButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZlYXR1cmVzL0dvb2dsZUxvZ2luL0xvZ2luQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBa0Q7QUFDUTtBQUcxRCxNQUFNRSxXQUFXO0FBRUYsU0FBU0Msb0JBQW9CO0lBR3hDLE1BQU1DLFlBQVksQ0FBQ0MsTUFBYTtRQUM1QkMsUUFBUUMsR0FBRyxDQUFDRixJQUFJRyxVQUFVO0lBQzlCO0lBQ0EsTUFBTUMsWUFBWSxDQUFDSixNQUFhO1FBQzVCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hCO0lBRUEscUJBQ0E7a0JBQ0EsNEVBQUNKLG9FQUFtQkE7WUFBQ0MsVUFBVUE7c0JBQzVCLDRFQUFDRiw0REFBV0E7Z0JBQ1BJLFdBQVdNLENBQUFBLHFCQUFzQjtvQkFDN0JKLFFBQVFDLEdBQUcsQ0FBQ0c7Z0JBQ2hCO2dCQUNBQyxTQUFTLElBQU07b0JBQ1hMLFFBQVFDLEdBQUcsQ0FBQztnQkFDaEI7Z0JBQ0FLLE1BQUs7Ozs7Ozs7Ozs7OztBQUlqQixDQUFDO0tBeEJ1QlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlcy9Hb29nbGVMb2dpbi9Mb2dpbkJ1dHRvbi50c3g/M2M5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ0ByZWFjdC1vYXV0aC9nb29nbGUnO1xyXG5pbXBvcnQgeyBHb29nbGVPQXV0aFByb3ZpZGVyIH0gZnJvbSAnQHJlYWN0LW9hdXRoL2dvb2dsZSc7XHJcblxyXG5cclxuY29uc3QgY2xpZW50SWQgPSBcIjUzMTY4NjkxMjM4MC1idDVxbmxzMmgxdmk0b211MGM0dGkyZm1oZGkwZjFpYi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHb29nbGVMb2dpbkJ1dHRvbigpIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBvblN1Y2Nlc3MgPSAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMucHJvZmlsZW9iailcclxuICAgIH1cclxuICAgIGNvbnN0IG9uRmFpbHVyZSA9IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgIDxHb29nbGVPQXV0aFByb3ZpZGVyIGNsaWVudElkPXtjbGllbnRJZH0+XHJcbiAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgb25TdWNjZXNzPXtjcmVkZW50aWFsUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3JlZGVudGlhbFJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25FcnJvcj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIEZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIC8+XHJcbiAgICA8L0dvb2dsZU9BdXRoUHJvdmlkZXI+XHJcbiAgICA8Lz4pXHJcbn0iXSwibmFtZXMiOlsiR29vZ2xlTG9naW4iLCJHb29nbGVPQXV0aFByb3ZpZGVyIiwiY2xpZW50SWQiLCJHb29nbGVMb2dpbkJ1dHRvbiIsIm9uU3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlb2JqIiwib25GYWlsdXJlIiwiY3JlZGVudGlhbFJlc3BvbnNlIiwib25FcnJvciIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/features/GoogleLogin/LoginButton.tsx\n"));

/***/ })

});