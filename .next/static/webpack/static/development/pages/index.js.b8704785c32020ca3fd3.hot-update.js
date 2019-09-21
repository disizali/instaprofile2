webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "D:\\Projects\\NodeJs\\daliran\\components\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var NavbarClass =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavbarClass, _React$Component);

  function NavbarClass(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarClass);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavbarClass).call(this, props));
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarClass, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        color: "white",
        light: true,
        expand: "md",
        className: "shadow bg-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavbarBrand"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/logo.png",
        width: "150",
        height: "90",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavbarToggler"], {
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        className: "ml-auto",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("div", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-home ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        className: "text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["UncontrolledDropdown"], {
        nav: true,
        inNavbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        nav: true,
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-info-circle ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
        right: true,
        className: "shadow rounded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/about/1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("a", {
        href: "/about/1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "\u0686\u0634\u0645 \u0627\u0646\u062F\u0627\u0632 \u0645\u062F\u06CC\u0631\u06CC\u062A"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/about/2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("a", {
        href: "/about/2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, " \u0686\u0627\u0631\u062A \u0633\u0627\u0632\u0645\u0627\u0646\u06CC"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        divider: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/about/3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("a", {
        href: "/about/3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "\u067E\u06CC\u0627\u0645 \u0645\u062F\u06CC\u0631\u0639\u0627\u0645\u0644"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["UncontrolledDropdown"], {
        nav: true,
        inNavbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        nav: true,
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-plane ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), "\u0646\u0627\u0648\u06AF\u0627\u0646 \u0647\u0648\u0627\u06CC\u06CC"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "\u0628\u0648\u0626\u06CC\u0646\u06AF 737"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "\u0627\u06CC\u0631\u0628\u0627\u0633 320"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("div", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-newspaper ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/magazine",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("a", {
        href: "/magazine",
        className: "text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "\u0645\u062C\u0644\u0647 \u06AF\u0631\u062F\u0634\u06AF\u0631\u06CC")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("div", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-rss ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx("i", {
        className: "fas fa-newspaper ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/magazine",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("a", {
        href: "/magazine",
        className: "text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "\u0645\u062C\u0644\u0647 \u06AF\u0631\u062F\u0634\u06AF\u0631\u06CC"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        href: "/news",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "\u0627\u062E\u0628\u0627\u0631"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        href: "/coorporate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-handshake ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "\u0647\u0645\u06A9\u0627\u0631\u06CC"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-phone ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627")))))));
    }
  }]);

  return NavbarClass;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavbarClass);

/***/ })

})
//# sourceMappingURL=index.js.b8704785c32020ca3fd3.hot-update.js.map