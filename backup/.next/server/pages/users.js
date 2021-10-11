/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/users";
exports.ids = ["pages/users"];
exports.modules = {

/***/ "./components/user.js":
/*!****************************!*\
  !*** ./components/user.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/Users/macbookpro/Development/Next/next-crash-course/components/user.js\";\n\nfunction User({\n  user\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: user.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: user.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS8uL2NvbXBvbmVudHMvdXNlci5qcz9jMGE0Il0sIm5hbWVzIjpbIlVzZXIiLCJ1c2VyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBd0I7QUFFcEIsc0JBQU87QUFBQSw0QkFFSDtBQUFBLGdCQUFJQSxJQUFJLENBQUNDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZHLGVBR0g7QUFBQSxnQkFBSUQsSUFBSSxDQUFDRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRztBQUFBLGtCQUFQO0FBT0g7O0FBRUQsK0RBQWVILElBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBVc2VyKHsgdXNlciB9KSB7XG5cbiAgICByZXR1cm4gPD5cblxuICAgICAgICA8cD57dXNlci50aXRsZX08L3A+XG4gICAgICAgIDxwPnt1c2VyLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8Lz5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user.js\n");

/***/ }),

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/user */ \"./components/user.js\");\n\n\nvar _jsxFileName = \"/Users/macbookpro/Development/Next/next-crash-course/pages/users.js\";\n\n\nfunction UserList({\n  users\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"List of users\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 15\n    }, this), users.map(user => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_user__WEBPACK_IMPORTED_MODULE_1__.default, {\n          user: user\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 25\n        }, this)\n      }, user.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 21\n      }, this);\n    })]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserList);\nasync function getStaticProps() {\n  const response = await fetch('http://localhost:8080/api/tutorials'); //const response = await fetch('https://jsonplaceholder.typicode.com/users')\n\n  const data = await response.json();\n  console.log(data);\n  return {\n    props: {\n      users: data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS8uL3BhZ2VzL3VzZXJzLmpzPzM2MWEiXSwibmFtZXMiOlsiVXNlckxpc3QiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJpZCIsImdldFN0YXRpY1Byb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBR0EsU0FBU0EsUUFBVCxDQUFrQjtBQUFFQztBQUFGLENBQWxCLEVBQTZCO0FBRXpCLHNCQUFPO0FBQUEsaUNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSCxFQUlDQSxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBSSxJQUFJO0FBQ2QsMEJBQ0k7QUFBQSwrQkFDSSw4REFBQyxxREFBRDtBQUFNLGNBQUksRUFBRUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBVUEsSUFBSSxDQUFDQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUtILEtBTkQsQ0FKRDtBQUFBLGtCQUFQO0FBb0JIOztBQUVELCtEQUFlSixRQUFmO0FBRU8sZUFBZUssY0FBZixHQUFnQztBQUVuQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHFDQUFELENBQTVCLENBRm1DLENBR25DOztBQUVBLFFBQU1DLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFFQSxTQUFPO0FBQ0hJLFNBQUssRUFBRTtBQUNIWCxXQUFLLEVBQUVPO0FBREo7QUFESixHQUFQO0FBTUgiLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXJcIlxuXG5cbmZ1bmN0aW9uIFVzZXJMaXN0KHsgdXNlcnMgfSkge1xuXG4gICAgcmV0dXJuIDw+IDxoMT5MaXN0IG9mIHVzZXJzPC9oMT5cblxuICAgICAgICB7XG5cbiAgICAgICAgICAgIHVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dXNlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApXG5cblxuXG4gICAgICAgIH1cblxuICAgIDwvPlxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckxpc3RcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS90dXRvcmlhbHMnKVxuICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdXNlcnM6IGRhdGFcbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/users.js"));
module.exports = __webpack_exports__;

})();