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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GoogleLoginButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-oauth/google */ \"./node_modules/@react-oauth/google/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\nconst clientId = \"531686912380-bt5qnls2h1vi4omu0c4ti2fmhdi0f1ib.apps.googleusercontent.com\";\nfunction GoogleLoginButton() {\n    _s();\n    const login = (0,_react_oauth_google__WEBPACK_IMPORTED_MODULE_1__.useGoogleLogin)({\n        onSuccess: (codeResponse)=>console.log(codeResponse)\n    });\n    const onSuccess = (res)=>{\n        console.log(res.profileobj);\n    };\n    const onFailure = (res)=>{\n        console.log(res);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>login(),\n            children: \"Sign in With Google\"\n        }, void 0, false, {\n            fileName: \"D:\\\\pixel\\\\React Code\\\\pixelKube\\\\components\\\\features\\\\GoogleLogin\\\\LoginButton.tsx\",\n            lineNumber: 20,\n            columnNumber: 8\n        }, this)\n    }, void 0, false);\n}\n_s(GoogleLoginButton, \"zY/v83cBMrwD3I51qGaOiRFUBvU=\", false, function() {\n    return [\n        _react_oauth_google__WEBPACK_IMPORTED_MODULE_1__.useGoogleLogin\n    ];\n});\n_c = GoogleLoginButton;\nvar _c;\n$RefreshReg$(_c, \"GoogleLoginButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZlYXR1cmVzL0dvb2dsZUxvZ2luL0xvZ2luQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXVGO0FBR3ZGLE1BQU1DLFdBQVc7QUFFRixTQUFTQyxvQkFBb0I7O0lBQ3hDLE1BQU1DLFFBQVFILG1FQUFjQSxDQUFDO1FBQ3pCSSxXQUFXQyxDQUFBQSxlQUFnQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUN6QztJQUVGLE1BQU1ELFlBQVksQ0FBQ0ksTUFBYTtRQUM1QkYsUUFBUUMsR0FBRyxDQUFDQyxJQUFJQyxVQUFVO0lBQzlCO0lBQ0EsTUFBTUMsWUFBWSxDQUFDRixNQUFhO1FBQzVCRixRQUFRQyxHQUFHLENBQUNDO0lBQ2hCO0lBRUEscUJBQ0E7a0JBQ0csNEVBQUNHO1lBQU9DLFNBQVMsSUFBTVQ7c0JBQVM7Ozs7Ozs7QUFJdkMsQ0FBQztHQWxCdUJEOztRQUNORiwrREFBY0E7OztLQURSRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ZlYXR1cmVzL0dvb2dsZUxvZ2luL0xvZ2luQnV0dG9uLnRzeD8zYzk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZUxvZ2luLCB1c2VHb29nbGVMb2dpbiwgR29vZ2xlT0F1dGhQcm92aWRlciB9IGZyb20gJ0ByZWFjdC1vYXV0aC9nb29nbGUnO1xyXG5cclxuXHJcbmNvbnN0IGNsaWVudElkID0gXCI1MzE2ODY5MTIzODAtYnQ1cW5sczJoMXZpNG9tdTBjNHRpMmZtaGRpMGYxaWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR29vZ2xlTG9naW5CdXR0b24oKSB7XHJcbiAgICBjb25zdCBsb2dpbiA9IHVzZUdvb2dsZUxvZ2luKHtcclxuICAgICAgICBvblN1Y2Nlc3M6IGNvZGVSZXNwb25zZSA9PiBjb25zb2xlLmxvZyhjb2RlUmVzcG9uc2UpLFxyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3Qgb25TdWNjZXNzID0gKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnByb2ZpbGVvYmopXHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkZhaWx1cmUgPSAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvZ2luKCl9PiBcclxuICAgICAgICAgICAgU2lnbiBpbiBXaXRoIEdvb2dsZVxyXG4gICAgICAgPC9idXR0b24+XHJcbiAgICA8Lz4pXHJcbn0iXSwibmFtZXMiOlsidXNlR29vZ2xlTG9naW4iLCJjbGllbnRJZCIsIkdvb2dsZUxvZ2luQnV0dG9uIiwibG9naW4iLCJvblN1Y2Nlc3MiLCJjb2RlUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwicmVzIiwicHJvZmlsZW9iaiIsIm9uRmFpbHVyZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/features/GoogleLogin/LoginButton.tsx\n"));

/***/ })

});