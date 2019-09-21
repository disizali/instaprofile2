webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Splash.js":
/*!******************************!*\
  !*** ./components/Splash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "D:\\Projects\\NodeJs\\daliran\\components\\Splash.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var Splash =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Splash, _React$Component);

  function Splash(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Splash);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Splash).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Splash, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var splash = document.getElementById("splash");
      splash.addEventListener("mousemove", function (e) {
        var airplane = document.getElementById("splash-airplane");
        var valueXairplane = e.clientX * -1 / 12;
        var valueYairplane = e.clientY * -1 / 12;
        airplane.style.transform = "translate3d(".concat(valueXairplane, "px,").concat(valueYairplane, "px,0)");
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "splash",
        id: "splash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/airplane.png",
        className: "w-lg-75 w-md-100 splash-airplane",
        id: "splash-airplane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), __jsx("div", {
        className: "cloud-1 one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx("div", {
        className: "cloud-1 two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx("div", {
        className: "cloud-1 three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx("div", {
        className: "cloud-1 four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("div", {
        className: "cloud-2 one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), __jsx("div", {
        className: "cloud-2 two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx("div", {
        className: "cloud-2 three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), __jsx("div", {
        className: "cloud-2 four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx("div", {
        className: "cloud-3 one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx("div", {
        className: "cloud-3 two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), __jsx("div", {
        className: "cloud-3 three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("div", {
        "class": "splash-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })));
    }
  }]);

  return Splash;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Splash);

/***/ })

})
//# sourceMappingURL=index.js.f489e8afec93f05fd45f.hot-update.js.map