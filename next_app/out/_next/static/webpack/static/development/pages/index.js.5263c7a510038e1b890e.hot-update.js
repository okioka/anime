webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AnimeData.js":
/*!*********************************!*\
  !*** ./components/AnimeData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimeData; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/styles.scss */ "./public/styles.scss");
/* harmony import */ var _public_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_styles_scss__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/okioka/dev/anime/next_app/components/AnimeData.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var AnimeData = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AnimeData, _React$Component);

  var _super = _createSuper(AnimeData);

  function AnimeData() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimeData);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimeData, [{
    key: "render",
    value: function render() {
      // 作品タイトル+聖地名でGoogle検索するURL
      var searchURL = "https://www.google.com/search?q=".concat(this.props.title, "+").concat(this.props.city); // 公式TwitterアカウントのURL

      var twitterURL = "https://twitter.com/".concat(this.props.twitter); // 聖地が無ければ聖地データは入れない

      var city = "".concat(this.props.city).replace(/\|/g, ''); // 聖地にパイプが入っていることがるので除去する

      city = city.replace('|', '');

      if (city === "") {
        city = "";
      } else {
        city = "聖地 : " + city;
      } // 画像のURLはテスト用


      return __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.card_imgframe + ' ' + _public_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.box_1x1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }, __jsx("a", {
        href: this.props.url,
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }
      }, __jsx("img", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.card_img,
        src: this.props.img,
        onError: function onError(e) {
          return e.target.src = 'http://design-ec.com/d/e_others_50/m_e_others_500.png';
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }))), __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.card_textbox,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }
      }, __jsx("a", {
        href: searchURL,
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.card_titletext,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, this.props.title), __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.card_overviewtext,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, city)), __jsx("a", {
        href: twitterURL,
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.card_overviewtext,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, "twitter : @", this.props.twitter))));
    }
  }]);

  return AnimeData;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/AnimeList.js":
/*!*********************************!*\
  !*** ./components/AnimeList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimeList; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/styles.scss */ "./public/styles.scss");
/* harmony import */ var _public_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AnimeData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnimeData */ "./components/AnimeData.js");





var _jsxFileName = "/Users/okioka/dev/anime/next_app/components/AnimeList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var AnimeList = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AnimeList, _React$Component);

  var _super = _createSuper(AnimeList);

  function AnimeList() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimeList);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimeList, [{
    key: "render",
    value: function render() {
      var _this = this;

      // アニメデータ
      var animeNodes = this.props.anime.map(function (anime) {
        // 聖地のみ出力するか判定する部分
        if (_this.props.checked) {
          if ("".concat(anime.city_name)) {
            return __jsx(_AnimeData__WEBPACK_IMPORTED_MODULE_7__["default"], {
              key: anime.id,
              title: anime.title,
              url: anime.public_url,
              img: anime.ogp.og_image,
              city: anime.city_name,
              twitter: anime.twitter_account,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 13
              }
            });
          }
        } else {
          return __jsx(_AnimeData__WEBPACK_IMPORTED_MODULE_7__["default"], {
            key: anime.id,
            title: anime.title,
            url: anime.public_url,
            img: anime.ogp.og_image,
            city: anime.city_name,
            twitter: anime.twitter_account,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 11
            }
          });
        }
      });
      return __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tile,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }
      }, animeNodes);
    }
  }]);

  return AnimeList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.5263c7a510038e1b890e.hot-update.js.map