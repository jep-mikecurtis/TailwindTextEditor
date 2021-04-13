/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Rapyd.js":
/*!*************************!*\
  !*** ./src/js/Rapyd.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rapyd = /*#__PURE__*/function () {
  function Rapyd() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var init = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Rapyd);

    this.props = props;

    for (name in methods) {
      this[name] = methods[name];
    }

    if (init) {
      this.init(init);
    }
  }

  _createClass(Rapyd, [{
    key: "init",
    value: function init(cb) {
      cb = cb.bind(this);
      cb();
    }
  }, {
    key: "renderText",
    value: function renderText(el, value) {
      document.querySelector(el).innerText = value;
    }
  }, {
    key: "renderHtml",
    value: function renderHtml(el, value) {
      document.querySelector(el).innerHTML = value;
    }
  }]);

  return Rapyd;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rapyd);

/***/ }),

/***/ "./src/js/helpers/tooltip.js":
/*!***********************************!*\
  !*** ./src/js/helpers/tooltip.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  tooltip: function tooltip() {
    this.tooltipHandleBind();
  },
  tooltipHandleBind: function tooltipHandleBind() {
    var _this = this;

    var tooltips = document.querySelectorAll(".".concat(this.target, "_tooltip"));
    tooltips.forEach(function (el) {
      return el.addEventListener("click", function (e) {
        _this.tooltipHandleTag(e.target.dataset.tag, e.target.dataset["class"]);
      });
    });
    var toggles = document.querySelectorAll(".toggle");
    toggles.forEach(function (el) {
      el.addEventListener("click", function (e) {
        return _this.tooltipToggle(e);
      });
    });
  },
  tooltipHandleTag: function tooltipHandleTag(tagTyp, tagClass) {
    var tag = "";

    if (tagClass) {
      var insertClass = "class='".concat(tagClass, "'");
      tag = "<".concat(tagTyp, " ").concat(insertClass, ">\n\n</").concat(tagTyp, ">");
    } else {
      tag = "<".concat(tagTyp, ">\n\n</").concat(tagTyp, ">");
    }

    if (this.editor.selectionStart || this.editor.selectionStart == "0") {
      var startPos = this.editor.selectionStart;
      var endPos = this.editor.selectionEnd;
      this.editor.value = this.editor.value.substring(0, startPos) + tag + this.editor.value.substring(endPos, this.editor.value.length);
    } else {
      this.editor.value += tag;
    }

    this.formatText();
  },
  tooltipToggle: function tooltipToggle(e) {
    var toggleEl = document.getElementById(e.target.dataset.toggle);
    return toggleEl.classList.contains("hidden") ? toggleEl.classList.remove("hidden") : toggleEl.classList.add("hidden");
  }
});

/***/ }),

/***/ "./src/js/html/html.js":
/*!*****************************!*\
  !*** ./src/js/html/html.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mainContent: function mainContent(initValue) {
    return "\n        <div class=\"px-4 py-10\">\n          ".concat(this.toolTip(), "\n          <div class=\"flex flex-row-reverse\">\n            <div id=\"").concat(this.target, "_display\" class=\"flex-1 ml-4\"></div>\n              <div id=\"").concat(this.target, "_wrapper\" class=\"flex-1 relative flex text-xs border border-gray-800 rounded overflow-hidden shadow leading-loose\">\n                <div id=\"").concat(this.target, "_numbers\" class=\"p-2 text-center bg-gray-100 border-r-2 border-blue-400 bg-gray-800 text-white\">\n              </div>\n\n              <textarea id=\"").concat(this.target, "_editor\" class=\"flex-1 p-2 outline-none resize-none\">").concat(initValue, "</textarea>\n            </div>\n          </div>\n        </div>\n      ");
  },
  toolTip: function toolTip() {
    return "\n        <div class=\"mb-4 flex space-x-2\">\n          <div id=\"heading-dropdown\" class=\"relative\">\n            <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow toggle\" data-toggle=\"toggleHeading\">H</button>\n            <div class=\"hidden absolute z-20 p-4 bg-white flex flex-col space-y-4 mt-2 shadow border border-gray-300 rounded\" id=\"toggleHeading\">\n              <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ".concat(this.target, "_tooltip toggle\" data-toggle=\"toggleHeading\" data-tag=\"h1\" @click=\"show=false\">H1</button>\n              <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip toggle\" data-toggle=\"toggleHeading\" data-tag=\"h2\" @click=\"show=false\">H2</button>\n              <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip toggle\" data-toggle=\"toggleHeading\" data-tag=\"h3\" @click=\"show=false\">H3</button>\n            </div>\n          </div>\n          <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip\" data-tag=\"p\">p</button>\n          <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip\" data-tag=\"a\" data-class=\"text-blue-600\">a</button>\n          <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip\" data-tag=\"div\">div</button>\n          <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip\" data-tag=\"div\" data-class=\"flex\">flex</button>\n          <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip\" data-tag=\"button\" data-class=\"py-1 px-4 shadow rounded\">Button</button>\n        </div>\n      ");
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/Editor.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rapyd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rapyd */ "./src/js/Rapyd.js");
/* harmony import */ var _html_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html/html */ "./src/js/html/html.js");
/* harmony import */ var _helpers_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/tooltip */ "./src/js/helpers/tooltip.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Editor = /*#__PURE__*/function (_Rapyd) {
  _inherits(Editor, _Rapyd);

  var _super = _createSuper(Editor);

  function Editor() {
    var _this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Editor);

    _this = _super.call(this, {}, _objectSpread(_objectSpread({}, _html_html__WEBPACK_IMPORTED_MODULE_1__.default), _helpers_tooltip__WEBPACK_IMPORTED_MODULE_2__.default));
    _this.target = target;
    _this.wrapper = document.getElementById(_this.target);
    _this.editor = null;
    _this.initValue = '';

    if (_this.wrapper) {
      _this.init();
    } else {
      console.error('Missing Editor Dom Element Cannot Initiate Class');
    }

    return _this;
  }

  _createClass(Editor, [{
    key: "allowTab",
    value: function allowTab() {
      this.editor.addEventListener("keydown", function (e) {
        if (e.key == "Tab") {
          e.preventDefault();
          var start = e.target.selectionStart;
          var end = e.target.selectionEnd;
          e.target.value = e.target.value.substring(0, start) + "\t" + e.target.value.substring(end);
          e.target.selectionStart = e.target.selectionEnd = start + 1;
        }
      }.bind(this));
    }
  }, {
    key: "handleTextarea",
    value: function handleTextarea() {
      this.editor.addEventListener("keyup", function (e) {
        this.keyBefore = e.target.value;
        this.content = e.target.value;
        this.setBody(this.content);
      }.bind(this));
    }
  }, {
    key: "calcNumbers",
    value: function calcNumbers() {
      var content = document.getElementById("".concat(this.target, "_editor")).value.split("\n");
      var newContent = [];

      if (content.length < this.startingLines) {
        content.length = this.startingLines;
      }

      for (var i = 0; i < content.length; i++) {
        newContent.push("<p>".concat(i + 1, "</p>"));
      }

      document.getElementById("".concat(this.target, "_numbers")).innerHTML = newContent.join("");
    }
  }, {
    key: "setBody",
    value: function setBody(value) {
      this.renderHtml("#".concat(this.target, "_display"), value);
      this.calcNumbers();
    }
  }, {
    key: "formatText",
    value: function formatText() {// let string = this.editor.value;
      // string = string.replace(/\n/g, '\n    ');
      // this.editor.value = string
    }
  }, {
    key: "init",
    value: function init() {
      var _this$wrapper$dataset, _this$wrapper$dataset2;

      this.startingLines = (_this$wrapper$dataset = this.wrapper.dataset.lines) !== null && _this$wrapper$dataset !== void 0 ? _this$wrapper$dataset : 20;
      var initValue = (_this$wrapper$dataset2 = this.wrapper.dataset.value) !== null && _this$wrapper$dataset2 !== void 0 ? _this$wrapper$dataset2 : '';
      this.renderHtml("#".concat(this.target), this.mainContent(initValue));
      this.calcNumbers();
      this.tooltip();
      this.editor = document.getElementById("".concat(this.target, "_editor"));
      this.allowTab();
      this.handleTextarea();
      this.setBody(this.editor.value);
    }
  }]);

  return Editor;
}(_Rapyd__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);
window.TwTextEditor = Editor;
})();

/******/ })()
;