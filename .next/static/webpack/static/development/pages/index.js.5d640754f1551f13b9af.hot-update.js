webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Vision.js":
/*!******************************!*\
  !*** ./components/Vision.js ***!
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "D:\\Projects\\NodeJs\\daliran\\components\\Vision.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Vision =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Vision, _React$Component);

  function Vision(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vision);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vision).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vision, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", function () {
        var height = document.documentElement.clientHeight;
        var value = window.pageYOffset / height;
        value = value <= 1 ? value : 1;
        var airplane = document.getElementById("vision-airplane");
        var translateValue = Math.pow(value, 2) * 60;

        if (document.documentElement.clientWidth <= 991) {
          translateValue = Math.pow(value, 2) * 40;
        }

        airplane.style.transform = "translate3d(".concat(translateValue, "%,").concat(translateValue, "%,0)");
      });
    }
  }, {
    key: "component",
    value: function component() {}
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "vision",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        className: "vision-gradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx("img", {
        src: "/static/images/vision-airplane.png",
        className: "vision-airplane",
        id: "vision-airplane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        className: "vision-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        className: "col-12 col-md-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/vision.jpg",
        className: "img-thumbnail shadow-lg vision-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        className: "col-12 col-md-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "\u0686\u0634\u0645 \u0627\u0646\u062F\u0627\u0632 \u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC\u06CC \u062F\u0644\u06CC\u0631\u0627\u0646"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "\u0637\u0628\u0642 \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u06CC\u0632\u06CC \u0635\u0648\u0631\u062A \u06AF\u0631\u0641\u062A\u0647 \u060C \u0634\u0631\u06A9\u062A \u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC\u06CC \u062F\u0644\u06CC\u0631\u0627\u0646 \u0628\u0647 \u0627\u0631\u0627\u0626\u0647 \u062E\u062F\u0645\u0627\u062A \u062C\u0627\u0628\u0647 \u062C\u0627\u06CC\u06CC \u0645\u0633\u0627\u0641\u0631 \u060C \u0628\u0627\u0631 \u0648 \u067E\u0633\u062A \u0628\u0635\u0648\u0631\u062A \u0686\u0627\u0631\u062A\u0631\u06CC \u0628\u06CC\u0646 \u0627\u0644\u0645\u0644\u0644\u06CC \u0637\u0628\u0642 \u0636\u0648\u0627\u0628\u0637 \u062A\u0639\u0631\u06CC\u0641 \u0648 \u062A\u0639\u06CC\u06CC\u0646 \u0634\u062F\u0647 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646\u06AF\u0648\u0646\u0647 \u067E\u0631\u0648\u0627\u0632\u0647\u0627 \u062A\u0648\u0633\u0637 \u0633\u0627\u0632\u0645\u0627\u0646 \u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC\u06CC \u06A9\u0634\u0648\u0631\u06CC \u062F\u0631 \u0645\u0642\u06CC\u0627\u0633 \u0647\u0627\u06CC \u062F\u0627\u062E\u0644\u06CC \u0648 \u0628\u06CC\u0646 \u0627\u0644\u0645\u0644\u0644\u06CC \u0645\u0628\u0627\u062F\u0631\u062A \u062E\u0648\u0627\u0647\u062F \u0646\u0645\u0648\u062F ."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "\u0628\u0627 \u0639\u0646\u0627\u06CC\u062A \u0628\u0647 \u0627\u06CC\u0646\u06A9\u0647 \u0634\u0631\u06A9\u062A \u0647\u0627\u06CC \u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC\u06CC \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u0635\u0646\u0639\u062A \u060C \u062C\u0645\u0644\u06AF\u06CC \u0628\u0635\u0648\u0631\u062A FULL AOC \u0641\u0639\u0627\u0644\u06CC\u062A \u0645\u06CC \u0646\u0645\u0627\u06CC\u0646\u062F \u060C \u0645\u0648\u0636\u0648\u0639 \u0641\u0639\u0627\u0644\u06CC\u062A \u0627\u06CC\u0646 \u0634\u0631\u06A9\u062A \u0645\u062F\u0644 \u062C\u062F\u06CC\u062F\u06CC \u0627\u0632 \u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631 \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F \u06A9\u0647 \u0628\u0627 \u0639\u0646\u0627\u06CC\u062A \u0628\u0647 \u067E\u062A\u0627\u0646\u0633\u06CC\u0644 \u0647\u0627\u06CC \u0627\u06CC\u0646 \u0634\u0631\u06A9\u062A \u0627\u0632 \u0644\u062D\u0627\u0638 \u0645\u0627\u0644\u06CC \u060C \u0633\u0627\u0628\u0642\u0647 \u0686\u0646\u062F\u06CC\u0646 \u0633\u0627\u0644\u0647 \u0627\u0639\u0636\u0627\u06CC \u06A9\u0644\u06CC\u062F\u06CC \u0627\u06CC\u0646 \u0634\u0631\u06A9\u062A \u062F\u0631 \u0641\u0639\u0627\u0644\u06CC\u062A \u0647\u0627\u06CC \u0686\u0627\u0631\u062A\u0631\u06CC \u0648 \u0628\u0631\u062E\u0648\u0631\u062F\u0627\u0631\u06CC \u0627\u0632 \u0639\u0645\u062F\u0647 \u062A\u0631\u06CC\u0646 \u0632\u06CC\u0631\u0633\u0627\u062E\u062A \u0628\u0633\u062A\u0647 \u0647\u0627\u06CC \u0645\u0633\u0627\u0641\u0631\u062A\u06CC \u0627\u0641\u0642 \u0631\u0648\u0634\u0646\u06CC \u067E\u06CC\u0634 \u0631\u0648\u06CC \u0627\u06CC\u0646 \u0634\u0631\u06A9\u062A \u0628\u0648\u062F\u0647 \u0648 \u0627\u06CC\u0646 \u0627\u0645\u0631 \u0648\u062C\u0647 \u062A\u0645\u0627\u06CC\u0632 \u0622\u0634\u06A9\u0627\u0631 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u0637\u0631\u062D \u0634\u062F\u0647 \u0628\u0627 \u0641\u0639\u0627\u0644\u06CC\u062A \u0647\u0627\u06CC \u062C\u0627\u0631\u06CC \u0635\u0646\u0639\u062A \u0645\u06CC \u0628\u0627\u0634\u062F .")))));
    }
  }]);

  return Vision;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Vision);

/***/ })

})
//# sourceMappingURL=index.js.5d640754f1551f13b9af.hot-update.js.map