exports.id = 854;
exports.ids = [854];
exports.modules = {

/***/ 321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ BaseLayout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Navigation.js




const Navigation = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
  children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/",
    children: "home"
  }), " |", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/about",
    children: "about"
  }), " |", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/work",
    children: "works"
  }), " |", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/books",
    children: "books"
  }), " |", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/techblog",
    children: "techincal documentation"
  })]
});

/* harmony default export */ var components_Navigation = (Navigation);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/BaseLayout.js






const Layout = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "jsx-2237438854",
  children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
    children: /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|Catamaran|Roboto+Condensed",
      className: "jsx-2237438854"
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(components_Navigation, {}), props.children, /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "2237438854",
    children: ["*.jsx-2237438854{width:960px;margin:0 auto;font-family:'Catamaran',sans-serif;}"]
  })]
});

/* harmony default export */ var BaseLayout = (Layout);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;