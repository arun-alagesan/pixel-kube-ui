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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GoogleLoginButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-oauth/google */ \"./node_modules/@react-oauth/google/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\nconst clientId = \"531686912380-bt5qnls2h1vi4omu0c4ti2fmhdi0f1ib.apps.googleusercontent.com\";\nfunction GoogleLoginButton() {\n    _s();\n    const login = (0,_react_oauth_google__WEBPACK_IMPORTED_MODULE_1__.useGoogleLogin)({\n        onSuccess: (res)=>onSuccess(res),\n        //flow: 'auth-code',\n        scope: \"email profile https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid\"\n    });\n    const onSuccess = (res)=>{\n        console.log(res);\n    };\n    const onFailure = (res)=>{\n        console.log(res);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary w-full\",\n                onClick: ()=>login(),\n                children: \"Sign in with Google \"\n            }, void 0, false, {\n                fileName: \"D:\\\\pixel\\\\React Code\\\\pixelKube\\\\components\\\\features\\\\GoogleLogin\\\\LoginButton.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true);\n}\n_s(GoogleLoginButton, \"zY/v83cBMrwD3I51qGaOiRFUBvU=\", false, function() {\n    return [\n        _react_oauth_google__WEBPACK_IMPORTED_MODULE_1__.useGoogleLogin\n    ];\n});\n_c = GoogleLoginButton;\nvar _c;\n$RefreshReg$(_c, \"GoogleLoginButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZlYXR1cmVzL0dvb2dsZUxvZ2luL0xvZ2luQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWtFO0FBRWxFLE1BQU1DLFdBQ0o7QUFFYSxTQUFTQyxvQkFBb0I7O0lBQzFDLE1BQU1DLFFBQVFILG1FQUFjQSxDQUFDO1FBQzNCSSxXQUFXLENBQUNDLE1BQVFELFVBQVVDO1FBQzlCLG9CQUFvQjtRQUNwQkMsT0FBTztJQUNUO0lBRUEsTUFBTUYsWUFBWSxDQUFDQyxNQUFhO1FBQzlCRSxRQUFRQyxHQUFHLENBQUNIO0lBQ2Q7SUFDQSxNQUFNSSxZQUFZLENBQUNKLE1BQWE7UUFDOUJFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDZDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0s7Z0JBQU9DLFdBQVU7Z0JBQXlCQyxTQUFTLElBQU1UOzBCQUFTOzs7Ozs7WUFBNkI7OztBQUd0RyxDQUFDO0dBbkJ1QkQ7O1FBQ1JGLCtEQUFjQTs7O0tBRE5FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZmVhdHVyZXMvR29vZ2xlTG9naW4vTG9naW5CdXR0b24udHN4PzNjOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlTG9naW4sIHVzZUdvb2dsZUxvZ2luIH0gZnJvbSBcIkByZWFjdC1vYXV0aC9nb29nbGVcIjtcclxuXHJcbmNvbnN0IGNsaWVudElkID1cclxuICBcIjUzMTY4NjkxMjM4MC1idDVxbmxzMmgxdmk0b211MGM0dGkyZm1oZGkwZjFpYi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR29vZ2xlTG9naW5CdXR0b24oKSB7XHJcbiAgY29uc3QgbG9naW4gPSB1c2VHb29nbGVMb2dpbih7XHJcbiAgICBvblN1Y2Nlc3M6IChyZXMpID0+IG9uU3VjY2VzcyhyZXMpLFxyXG4gICAgLy9mbG93OiAnYXV0aC1jb2RlJyxcclxuICAgIHNjb3BlOiBcImVtYWlsIHByb2ZpbGUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jYWxlbmRhci5yZWFkb25seSBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLnByb2ZpbGUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5lbWFpbCBvcGVuaWRcIlxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvblN1Y2Nlc3MgPSAocmVzOiBhbnkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgfTtcclxuICBjb25zdCBvbkZhaWx1cmUgPSAocmVzOiBhbnkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHctZnVsbFwiIG9uQ2xpY2s9eygpID0+IGxvZ2luKCl9PlNpZ24gaW4gd2l0aCBHb29nbGUgPC9idXR0b24+O1xyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlR29vZ2xlTG9naW4iLCJjbGllbnRJZCIsIkdvb2dsZUxvZ2luQnV0dG9uIiwibG9naW4iLCJvblN1Y2Nlc3MiLCJyZXMiLCJzY29wZSIsImNvbnNvbGUiLCJsb2ciLCJvbkZhaWx1cmUiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/features/GoogleLogin/LoginButton.tsx\n"));

/***/ })

});