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



/***/ })

})
//# sourceMappingURL=index.js.5f808a4500cbf16feafd.hot-update.js.map