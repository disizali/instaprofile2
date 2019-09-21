webpackHotUpdate("static\\development\\pages\\navy.js",{

/***/ "./pages/navy.js":
/*!***********************!*\
  !*** ./pages/navy.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "D:\\Projects\\NodeJs\\daliran\\pages\\navy.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var navies = [{
  id: 1,
  number: 737,
  name: "Boeing"
}, {
  id: 2,
  number: 320,
  name: "Airbus"
}];

var Navy =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Navy, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Navy, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://localhost:3000/api/news");

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                return _context.abrupt("return", {
                  data: data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Navy(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Navy);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Navy).call(this, props));
    _this.state = {
      selected: navies[0]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Navy, [{
    key: "changeAirPlane",
    value: function changeAirPlane(e) {
      var selected = navies[e.target.id.replace("navy-", "") - 1];
      this.setState({
        selected: selected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selected = this.state.selected;
      console.log(selected);
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        page: "full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "rtl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/".concat(selected.name.toLowerCase()).concat(selected.number, ".png"),
        className: "navy-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: "4",
        className: "text-right rtl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\u0628\u0648\u0626\u06CC\u0646\u06AF 737"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u0628\u0648\u0626\u06CC\u0646\u06AF 737 \u0645\u0639\u0631\u0648\u0641 \u0628\u0647 \u0628\u0686\u0647\u200C\u0628\u0648\u0626\u06CC\u0646\u06AF\u060C \u06CC\u06A9 \u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC \u0645\u0633\u0627\u0641\u0631\u0628\u0631\u06CC \u0628\u0627\u0631\u06CC\u06A9\u200C\u067E\u06CC\u06A9\u0631 \u0648 \u062A\u06A9\u200C\u0631\u0627\u0647\u0631\u0648 \u0633\u0627\u062E\u062A\u0647 \u0634\u0631\u06A9\u062A \u0628\u0648\u0626\u06CC\u0646\u06AF \u0622\u0645\u0631\u06CC\u06A9\u0627 \u0627\u0633\u062A. \u0637\u0631\u0627\u062D\u06CC \u0627\u06CC\u0646 \u0647\u0648\u0627\u067E\u06CC\u0645\u0627 \u0627\u0632 11 \u0645\u06CC 1964 \u0622\u063A\u0627\u0632 \u0634\u062F \u0648 \u0646\u062E\u0633\u062A\u06CC\u0646\u200C\u0628\u0627\u0631 \u062F\u0631 9 \u0622\u0648\u0631\u06CC\u0644 1967 \u0628\u0647 \u067E\u0631\u0648\u0627\u0632 \u062F\u0631\u0622\u0645\u062F.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("div", {
        className: "changer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("button", {
        className: selected.id == 1 ? "active" : "deactive",
        id: "navy-1",
        onClick: this.changeAirPlane.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "1")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("button", {
        className: selected.id == 2 ? "active" : "deactive",
        id: "navy-2",
        onClick: this.changeAirPlane.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "2"))))))));
    }
  }]);

  return Navy;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navy);

/***/ })

})
//# sourceMappingURL=navy.js.62f2ae58dc3dabff2997.hot-update.js.map