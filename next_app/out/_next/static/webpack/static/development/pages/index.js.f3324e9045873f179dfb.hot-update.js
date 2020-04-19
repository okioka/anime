webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Anime.js":
/*!*****************************!*\
  !*** ./components/Anime.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Anime; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header.js */ "./components/Header.js");
/* harmony import */ var _AnimeForm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnimeForm.js */ "./components/AnimeForm.js");
/* harmony import */ var _AnimeList_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AnimeList.js */ "./components/AnimeList.js");
/* harmony import */ var _public_styles_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/styles.scss */ "./public/styles.scss");
/* harmony import */ var _public_styles_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_styles_scss__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "/Users/okioka/dev/anime/next_app/components/Anime.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






 // ページ全体

var Anime = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Anime, _React$Component);

  var _super = _createSuper(Anime);

  function Anime(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Anime);

    _this = _super.call(this, props);
    _this.state = {
      anime: [],
      coursList: [],
      checked: false
    };
    _this.check = _this.check.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.animeSearch = _this.animeSearch.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.getNowCours = _this.getNowCours.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Anime, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 現在放送中のデータを最初に表示する
      this.animeSearch(this.getNowCours());
      this.setDateList();
    } // アニメ検索
    // coursはYYYY/Xの形式で渡される

  }, {
    key: "animeSearch",
    value: function animeSearch(cours) {
      var _this2 = this;

      var url = "https://api.moemoe.tokyo/anime/v1/master/" + cours + "?ogp=1";
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(url).then(function (res) {
        _this2.setState({
          anime: res.data
        }); // 聖地のみなら0件チェック
        // 絞り込みが無い状態は0件がありえないので実装しない


        if (_this2.state.checked) {
          _this2.cityEnptyCheck(res.data);
        }
      })["catch"](function (error) {
        alert("データの表示ができません");
        console.log("データ表示NG");
        console.log(error);
      });
    } // 聖地のみ絞りこむチェックボックスの状態を変更する

  }, {
    key: "check",
    value: function check() {
      if (this.state.checked) {
        this.setState({
          checked: false
        });
      } else {
        this.setState({
          checked: true
        });
        this.cityEnptyCheck(this.state.anime);
      }
    } // 聖地データが0件かチェック

  }, {
    key: "cityEnptyCheck",
    value: function cityEnptyCheck(data) {
      var isCityEmpty = data.every(function (anime) {
        return anime.city_name === "";
      });

      if (isCityEmpty) {
        alert("データは0件です");
      }
    } // 月から放送クールを求める

  }, {
    key: "getCours",
    value: function getCours(month) {
      if (month <= 3) {
        return 1;
      } else if (month <= 6) {
        return 2;
      } else if (month <= 9) {
        return 3;
      } else if (month <= 12) {
        return 4;
      }
    } // 放送クールから季節を求める

  }, {
    key: "getSeason",
    value: function getSeason(cours) {
      if (cours === 1) {
        return '冬';
      } else if (cours === 2) {
        return '春';
      } else if (cours === 3) {
        return '夏';
      } else if (cours === 4) {
        return '秋';
      }
    } // 現在放送中の放送クールをYYYY/Xの形式で求める

  }, {
    key: "getNowCours",
    value: function getNowCours() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var now = year + '/' + this.getCours(month);
      return now;
    } // 検索フォームに表示するリストボックス用の値を設定する。
    // 2014年冬から放送中の放送クールまで

  }, {
    key: "setDateList",
    value: function setDateList() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var cours = this.getCours(month);
      var coursList = [];

      for (var i = year; i >= 2014; i--) {
        if (i === year) {
          for (var j = cours; j >= 1; j--) {
            var _cours = i + '/' + j;

            var season = i + '年 ' + this.getSeason(j);
            coursList.push({
              season: season,
              cours: _cours
            });
          }
        } else {
          for (var j = 4; j >= 1; j--) {
            var _cours2 = i + '/' + j;

            var _season = i + '年 ' + this.getSeason(j);

            coursList.push({
              season: _season,
              cours: _cours2
            });
          }
        }
      }

      this.setState({
        coursList: coursList
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_11___default.a.header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 9
        }
      }, __jsx(_Header_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }
      }), __jsx(_AnimeForm_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        search: function search(cours) {
          return _this3.animeSearch(cours);
        },
        check: this.check,
        coursList: this.state.coursList,
        now: this.getNowCours,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }
      })), __jsx(_AnimeList_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        anime: this.state.anime,
        checked: this.state.checked,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Anime;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



var AnimeData = /*#__PURE__*/function (_React$Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AnimeData, _React$Component2);

  var _super2 = _createSuper(AnimeData);

  function AnimeData() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimeData);

    return _super2.apply(this, arguments);
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
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_11___default.a.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_11___default.a.card_imgframe + ' ' + _public_styles_scss__WEBPACK_IMPORTED_MODULE_11___default.a.box_1x1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 9
        }
      }, __jsx("a", {
        href: this.props.url,
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }
      }, __jsx("img", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_11___default.a.card_img,
        src: this.props.img,
        onError: function onError(e) {
          return e.target.src = 'http://design-ec.com/d/e_others_50/m_e_others_500.png';
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }
      }))), __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_11___default.a.card_textbox,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
        }
      }, __jsx("a", {
        href: searchURL,
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_11___default.a.card_titletext,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }
      }, this.props.title), __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_11___default.a.card_overviewtext,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 13
        }
      }, city)), __jsx("a", {
        href: twitterURL,
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_11___default.a.card_overviewtext,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }
      }, "twitter : @", this.props.twitter))));
    }
  }]);

  return AnimeData;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

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
            return __jsx(AnimeData, {
              key: anime.id,
              title: anime.title,
              url: anime.public_url,
              img: anime.ogp.og_image,
              city: anime.city_name,
              twitter: anime.twitter_account,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 13
              }
            });
          }
        } else {
          return __jsx(AnimeData, {
            key: anime.id,
            title: anime.title,
            url: anime.public_url,
            img: anime.ogp.og_image,
            city: anime.city_name,
            twitter: anime.twitter_account,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16,
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
          lineNumber: 22,
          columnNumber: 7
        }
      }, animeNodes);
    }
  }]);

  return AnimeList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.f3324e9045873f179dfb.hot-update.js.map