webpackHotUpdate("styles",{

/***/ "./public/styles.scss":
/*!****************************!*\
  !*** ./public/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"box_1x1":"_2Pj1GZJE7wQqLTHGLvTC7u","btn":"_1RbNIs_HgTnRl-JAQG5qpq","card":"_22y42FMTNzR8PH_YBZPAWm","card_img":"PA3tiqrT9K12P1K-Bd7tO","card_imgframe":"_2_R9OA2uA53ZfxxqoWeLC","card_textbox":"fcaxQIehnnnrsLghYsSsH","card_titletext":"_3rza6q6IThvZg4z28kX2Rn","card_overviewtext":"_2AXv1dn4SAbimpwB4d2IVD","form":"_6U07Wl-kMK7Xz1OluPuV3","header":"_1nReRm93trfXGQvryAN51J","list":"_1rUHImVfnkmOw-kIN3GXzG","move":"_1MvAwrXMJJliRHdhfPfFFD","tile":"_3VKNzMsu4hrBJPgWANBB_3"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1586351177148");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.ac06b1b25a43ba36a617.hot-update.js.map