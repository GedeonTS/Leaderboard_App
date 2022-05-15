"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_generator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _modules_wrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);




document.querySelector('title').innerText = 'Leaderboard';

(0,_modules_wrapper_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
const userName = document.querySelector('.name');
const userScore = document.querySelector('.score');
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', () => {
  const player = { user: userName.value, score: userScore.value };
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2icO0AI1TEzSpK5Ba06T/scores/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(player),
  }).then((res) => {
    if (res.ok) {
      userName.value = '';
      userScore.value = '';
      return res.json();
    }
    throw new Error('Empty request');
  });
});

async function digest() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2icO0AI1TEzSpK5Ba06T/scores/');
  response.json().then((expected) => {
    const results = expected.result;
    (0,_modules_generator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(results);
  });
}

digest();

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  digest();
  location.reload();
});


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Limelight&family=Patrick+Hand&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-bg: #1f1f38;\n  --color-bg-variant: #2c2c6c;\n  --color-primary: rgb(96, 90, 182);\n  --color-primary-variant: rgba(77, 181, 255, 0.4);\n  --color-white: rgb(248, 248, 248);\n}\n\nbody {\n  background-color: rgb(193, 213, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  font-family: \"Patrick Hand\", cursive;\n}\n\n.container {\n  background-color: var(--color-bg-variant);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  color: var(--color-white);\n  margin-top: 5%;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  border-radius: 2rem;\n  border: solid 1.4rem var(--color-primary);\n}\n\n.wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: row-reverse;\n  height: 100%;\n  justify-content: space-around;\n}\n\n.output-section {\n  width: 48%;\n  height: 80%;\n  justify-content: center;\n  margin-bottom: 3%;\n}\n\n.input-section {\n  width: 48%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  padding-left: 1%;\n  padding-right: 1%;\n}\n\n.content {\n  border: solid 4px rgb(228, 225, 225);\n  border-radius: 15px;\n  margin-left: 3%;\n  overflow-y: scroll;\n  max-height: 50vh;\n}\n\n.content:hover {\n  box-shadow: 0.11rem 0.11rem 0.21rem 0.21rem var(--color-primary);\n}\n\n.content-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.white {\n  background-color: rgb(228, 225, 225);\n  color: var(--color-bg-variant);\n  padding: 3%;\n}\n\n.grey {\n  background-color: var(--color-primary);\n  padding: 3%;\n}\n\n.refresh {\n  width: 80px;\n  height: 25px;\n  border: none;\n  border-radius: 4px;\n  font-family: \"Limelight\", cursive;\n  background-color: rgb(228, 225, 225);\n}\n\n.trophy {\n  width: 4rem;\n  height: 4rem;\n  align-self: center;\n}\n\n.img {\n  width: 10%;\n  margin-left: 2%;\n  border: solid 1px var(--color-white);\n  border-radius: 50%;\n  margin-top: 3%;\n  align-self: center;\n}\n\n.header {\n  display: flex;\n  flex-direction: row;\n  height: 20%;\n}\n\nhr {\n  width: 90%;\n  margin-top: -4%;\n  margin-bottom: 8%;\n}\n\n.Board {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\nh1 {\n  font-size: 2.6rem;\n  padding: 0;\n  margin: 0;\n  margin-top: 5%;\n  margin-left: 5%;\n}\n\ninput {\n  border: solid 4px var(--color-white);\n  border-radius: 3px;\n  margin-bottom: 3%;\n  margin-left: 6%;\n  margin-right: 6%;\n  height: 20px;\n  font-size: 1em;\n}\n\n.submit {\n  width: 88%;\n  align-self: center;\n  border: none;\n  background-color: var(--color-primary);\n  color: var(--color-white);\n  height: 2em;\n  border-radius: 3%;\n  font-size: 1.2rem;\n  font-family: \"Limelight\", cursive;\n}\n\n.submit:hover {\n  background-color: rgba(255, 0, 0, 0.808);\n}\n\n.submit:active {\n  color: rgba(255, 0, 0, 0.808);\n}\n\n.refresh:hover {\n  color: var(--color-white);\n  background-color: rgba(255, 0, 0, 0.808);\n}\n\n.add {\n  margin-left: 10%;\n}\n\n.itemId {\n  display: flex;\n  flex-direction: row;\n  align-self: center;\n}\n\n/* ========For small devices========= */\n\n@media screen and (max-width: 1000px) {\n  .wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    align-items: center;\n  }\n\n  .output-section {\n    width: 90%;\n    min-height: 80%;\n    justify-content: center;\n  }\n\n  .input-section {\n    width: 90%;\n    height: 80%;\n    display: flex;\n    flex-direction: column;\n    justify-items: end;\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .output-section:hover {\n    width: 50%;\n    transition: all ease 0.6s;\n  }\n\n  .input-section:hover {\n    width: 50%;\n    transition: all ease 0.6s;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  h1 {\n    font-size: 1.3rem;\n  }\n\n  h2 {\n    font-size: 0.8rem;\n  }\n\n  .trophy {\n    width: 2rem;\n    height: 2rem;\n    align-self: center;\n  }\n\n  .container {\n    background-color: var(--color-bg-variant);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    color: var(--color-white);\n    margin-top: 5%;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    min-height: 80vh;\n    border-radius: 10px;\n    border: solid 0.6rem var(--color-primary);\n  }\n\n  .refresh {\n    width: 3.3rem;\n    height: 1.4rem;\n    border: none;\n    font-size: 0.64rem;\n    border-radius: 0.3rem;\n    font-family: \"Limelight\", cursive;\n    background-color: rgb(228, 225, 225);\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31ad3d590bab72640a0c.png";

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_trophy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


const generator = (partcipants) => {
  partcipants.forEach((a) => {
    let back;
    if (partcipants.indexOf(a) % 2 !== 0) {
      back = 'grey';
    } else {
      back = 'white';
    }
    const content = document.getElementById('content');
    content.innerHTML += `<div class="Board ${back}" id=${partcipants.indexOf(a)}><div class="itemId"><img src=${_images_trophy_png__WEBPACK_IMPORTED_MODULE_0__} class="img"><div class="itemId">${a.user} :</div></div class="itemId"><div class="itemId">  ${a.score}</div class="itemId"></div>`;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generator);

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "804bd77319685483e3ba.png";

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_scoreIcone_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


const Wrapper = () => {
  document.body.innerHTML = `<section id="container" class="container">
    <div class="header"><h1>Leaderboard</h1><img class="trophy" src="${_images_scoreIcone_png__WEBPACK_IMPORTED_MODULE_0__}"></div>
    <section class="wrapper">
    <section class="input-section"><h2 class="add">Add your score</h2><input type="text" placeholder="your name" class="name">
    <input type="number" placeholder="your score" class="score"><button type="submit" class="submit">submit</button></section>
    <section class="output-section"><div class="content-header"><h2>Recent Scores</h2><button class="refresh" id="refresh">Refresh</button></div><hr><div id="content" class="content"></div></h2></section>

    </section></section>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d41a333880f92334acb.png";

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);