"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n// export const config = {\n//   unstable_runtimeJS: false,\n// };\nconst BlogError = (props)=>{\n    const { statusCode , message  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: statusCode && `Error - ${statusCode} ${message}`\n    }, void 0, false, {\n        fileName: \"/Users/shuta13/Projects/shuta13/appearance-none/apps/website/pages/_error.tsx\",\n        lineNumber: 13,\n        columnNumber: 10\n    }, undefined);\n};\nBlogError.getInitialProps = ({ res , err  })=>{\n    if (res) return {\n        statusCode: res.statusCode,\n        message: \"Sorry, something wrong\"\n    };\n    else if (err) return {\n        statusCode: err.statusCode,\n        message: err.message\n    };\n    else return {\n        statusCode: 400,\n        message: \"Bad request\"\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogError);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZXJyb3IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSwwQkFBMEI7QUFDMUIsK0JBQStCO0FBQy9CLEtBQUs7QUFFTCxNQUFNQSxZQUE2QixDQUFDQyxRQUFVO0lBQzVDLE1BQU0sRUFBRUMsV0FBVSxFQUFFQyxRQUFPLEVBQUUsR0FBR0Y7SUFDaEMscUJBQU8sOERBQUNHO2tCQUFHRixjQUFjLENBQUMsUUFBUSxFQUFFQSxXQUFXLENBQUMsRUFBRUMsUUFBUSxDQUFDOzs7Ozs7QUFDN0Q7QUFFQUgsVUFBVUssZUFBZSxHQUFHLENBQUMsRUFBRUMsSUFBRyxFQUFFQyxJQUFHLEVBQUUsR0FBSztJQUM1QyxJQUFJRCxLQUNGLE9BQU87UUFBRUosWUFBWUksSUFBSUosVUFBVTtRQUFFQyxTQUFTO0lBQXlCO1NBQ3BFLElBQUlJLEtBQUssT0FBTztRQUFFTCxZQUFZSyxJQUFJTCxVQUFVO1FBQUVDLFNBQVNJLElBQUlKLE9BQU87SUFBQztTQUNuRSxPQUFPO1FBQUVELFlBQVk7UUFBS0MsU0FBUztJQUFjO0FBQ3hEO0FBRUEsaUVBQWVILFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vcGFnZXMvX2Vycm9yLnRzeD8yNjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmludGVyZmFjZSBQcm9wcyB7XG4gIHN0YXR1c0NvZGU6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG4vLyBleHBvcnQgY29uc3QgY29uZmlnID0ge1xuLy8gICB1bnN0YWJsZV9ydW50aW1lSlM6IGZhbHNlLFxuLy8gfTtcblxuY29uc3QgQmxvZ0Vycm9yOiBOZXh0UGFnZTxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzdGF0dXNDb2RlLCBtZXNzYWdlIH0gPSBwcm9wcztcbiAgcmV0dXJuIDxwPntzdGF0dXNDb2RlICYmIGBFcnJvciAtICR7c3RhdHVzQ29kZX0gJHttZXNzYWdlfWB9PC9wPjtcbn07XG5cbkJsb2dFcnJvci5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIGVyciB9KSA9PiB7XG4gIGlmIChyZXMpXG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZTogcmVzLnN0YXR1c0NvZGUsIG1lc3NhZ2U6ICdTb3JyeSwgc29tZXRoaW5nIHdyb25nJyB9O1xuICBlbHNlIGlmIChlcnIpIHJldHVybiB7IHN0YXR1c0NvZGU6IGVyci5zdGF0dXNDb2RlLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9O1xuICBlbHNlIHJldHVybiB7IHN0YXR1c0NvZGU6IDQwMCwgbWVzc2FnZTogJ0JhZCByZXF1ZXN0JyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0Vycm9yO1xuIl0sIm5hbWVzIjpbIkJsb2dFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJwIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_error.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_error.tsx"));
module.exports = __webpack_exports__;

})();