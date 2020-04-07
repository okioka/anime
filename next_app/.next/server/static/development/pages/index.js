module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Anime; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/styles.scss */ "./public/styles.scss");
/* harmony import */ var _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/okioka/dev/anime/next_app/components/App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // ページ全体

class Anime extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: [],
      coursList: [],
      checked: false
    };
    this.check = this.check.bind(this);
    this.animeSearch = this.animeSearch.bind(this);
    this.getNowCours = this.getNowCours.bind(this);
  }

  componentDidMount() {
    // 現在放送中のデータを最初に表示する
    this.animeSearch(this.getNowCours());
    this.setDateList();
  } // アニメ検索
  // coursはYYYY/Xの形式で渡される


  animeSearch(cours) {
    const url = "http://api.moemoe.tokyo/anime/v1/master/" + cours + "?ogp=1";
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url).then(res => {
      this.setState({
        anime: res.data
      }); // 聖地のみなら0件チェック
      // 絞り込みが無い状態は0件がありえないので実装しない

      if (this.state.checked) {
        this.cityEnptyCheck(res.data);
      }
    }).catch(error => {
      alert("データの表示ができません");
      console.log("データ表示NG");
      console.log(error);
    });
  } // 聖地のみ絞りこむチェックボックスの状態を変更する


  check() {
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


  cityEnptyCheck(data) {
    const isCityEmpty = data.every(anime => {
      return anime.city_name === "";
    });

    if (isCityEmpty) {
      alert("データは0件です");
    }
  } // 月から放送クールを求める


  getCours(month) {
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


  getSeason(cours) {
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


  getNowCours() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const now = year + '/' + this.getCours(month);
    return now;
  } // 検索フォームに表示するリストボックス用の値を設定する。
  // 2014年冬から放送中の放送クールまで


  setDateList() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const cours = this.getCours(month);
    let coursList = [];

    for (var i = year; i >= 2014; i--) {
      if (i === year) {
        for (var j = cours; j >= 1; j--) {
          const cours = i + '/' + j;
          const season = i + '年 ' + this.getSeason(j);
          coursList.push({
            season: season,
            cours: cours
          });
        }
      } else {
        for (var j = 4; j >= 1; j--) {
          const cours = i + '/' + j;
          const season = i + '年 ' + this.getSeason(j);
          coursList.push({
            season: season,
            cours: cours
          });
        }
      }
    }

    this.setState({
      coursList: coursList
    });
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }
    }, __jsx(Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }
    }), __jsx(AnimeForm, {
      search: cours => this.animeSearch(cours),
      check: this.check,
      coursList: this.state.coursList,
      now: this.getNowCours,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }
    })), __jsx(AnimeList, {
      anime: this.state.anime,
      checked: this.state.checked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }
    }));
  }

} // ヘッダー部

class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 7
      }
    }, "\u30A2\u30CB\u30E1\u691C\u7D22");
  }

} // 検索フォーム


class AnimeForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      cours: ""
    };
    this.handleChange = this.handleChange.bind(this);
  } // リストボックスを変更せずに検索ボタンをクリックすると
  // 404エラーになってしまう
  // ここで現在放送中の放送クールを初期値として設定


  componentDidMount() {
    const now = this.props.now();
    this.setState({
      cours: now
    });
  } // リストボックスクリック時に呼ばれる


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    // リストボックス内のデータ
    const coursNodes = this.props.coursList.map(list => {
      return __jsx("option", {
        value: list.cours,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 9
        }
      }, list.season);
    });
    return __jsx("div", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.form,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.move,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }
    }, __jsx("select", {
      name: "cours",
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }
    }, coursNodes)), __jsx("button", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
      onClick: () => this.props.search(this.state.cours),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }
    }, "\u691C\u7D22"), __jsx("input", {
      type: "checkbox",
      id: "city_chk",
      onClick: this.props.check,
      onLoad: this.props.check,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }
    }), __jsx("label", {
      htmlFor: "city_chk",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }
    }, "\u8056\u5730\u304C\u3042\u308B\u30A2\u30CB\u30E1\u306E\u307F"));
  }

}

class AnimeList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    // アニメデータ
    const animeNodes = this.props.anime.map(anime => {
      // 聖地のみ出力するか判定する部分  
      if (this.props.checked) {
        if (`${anime.city_name}`) {
          return __jsx(AnimeData, {
            key: anime.id,
            title: anime.title,
            url: anime.public_url,
            img: anime.ogp.og_image,
            city: anime.city_name,
            twitter: anime.twitter_account,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205,
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
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 11
          }
        });
      }
    });
    return __jsx("div", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 7
      }
    }, animeNodes);
  }

}

class AnimeData extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    // 作品タイトル+聖地名でGoogle検索するURL
    const searchURL = `https://www.google.com/search?q=${this.props.title}+${this.props.city}`; // 公式TwitterアカウントのURL

    const twitterURL = `https://twitter.com/${this.props.twitter}`; // 聖地が無ければ聖地データは入れない

    let city = `${this.props.city}`.replace(/\|/g, '');

    if (city === "") {
      city = "";
    } else {
      city = "聖地 : " + city;
    } // 画像のURLはテスト用


    return __jsx("div", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_imgframe + ' ' + _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box_1x1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: this.props.url,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 11
      }
    }, __jsx("img", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_img,
      src: this.props.img,
      onError: e => e.target.src = 'http://design-ec.com/d/e_others_50/m_e_others_500.png',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 13
      }
    }))), __jsx("div", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_textbox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: searchURL,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_titletext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 13
      }
    }, this.props.title), __jsx("div", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_overviewtext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 13
      }
    }, city)), __jsx("a", {
      href: twitterURL,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card_overviewtext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 13
      }
    }, "twitter : @", this.props.twitter))));
  }

}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App.js */ "./components/App.js");
/* harmony import */ var _public_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/styles.scss */ "./public/styles.scss");
/* harmony import */ var _public_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/okioka/dev/anime/next_app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx(_components_App_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./public/styles.scss":
/*!****************************!*\
  !*** ./public/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"box_1x1": "_2Pj1GZJE7wQqLTHGLvTC7u",
	"btn": "_1RbNIs_HgTnRl-JAQG5qpq",
	"card": "_22y42FMTNzR8PH_YBZPAWm",
	"card_img": "PA3tiqrT9K12P1K-Bd7tO",
	"card_imgframe": "_2_R9OA2uA53ZfxxqoWeLC",
	"card_textbox": "fcaxQIehnnnrsLghYsSsH",
	"card_titletext": "_3rza6q6IThvZg4z28kX2Rn",
	"card_overviewtext": "_2AXv1dn4SAbimpwB4d2IVD",
	"form": "_6U07Wl-kMK7Xz1OluPuV3",
	"header": "_1nReRm93trfXGQvryAN51J",
	"list": "_1rUHImVfnkmOw-kIN3GXzG",
	"move": "_1MvAwrXMJJliRHdhfPfFFD",
	"tile": "_3VKNzMsu4hrBJPgWANBB_3"
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/okioka/dev/anime/next_app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map