// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Rapyd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Rapyd = /*#__PURE__*/function () {
  function Rapyd() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var init = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Rapyd);

    _defineProperty(this, "props", void 0);

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

var _default = Rapyd;
exports.default = _default;
},{}],"html/html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  mainContent: function mainContent(initValue) {
    return "\n        <div class=\"px-4 py-10\">\n          ".concat(this.toolTip(), "\n          <div class=\"flex flex-row-reverse\">\n            <div id=\"").concat(this.target, "_display\" class=\"flex-1 ml-4\"></div>\n              <div id=\"").concat(this.target, "_wrapper\" class=\"flex-1 relative flex text-xs border border-gray-800 rounded overflow-hidden shadow leading-loose\">\n                <div id=\"").concat(this.target, "_numbers\" class=\"p-2 text-center bg-gray-100 border-r-2 border-blue-400 bg-gray-800 text-white\">\n              </div>\n\n              <textarea id=\"").concat(this.target, "_editor\" class=\"flex-1 p-2 outline-none resize-none\">").concat(initValue, "</textarea>\n            </div>\n          </div>\n        </div>\n      ");
  },
  toolTip: function toolTip() {
    return "\n        <div class=\"mb-4 flex space-x-2\">\n          <div id=\"heading-dropdown\" class=\"relative\">\n            <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow toggle\" data-toggle=\"toggleHeading\">H</button>\n            <div class=\"hidden absolute z-20 p-4 bg-white flex flex-col space-y-4 mt-2 shadow border border-gray-300 rounded\" id=\"toggleHeading\">\n              <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ".concat(this.target, "_tooltip toggle\" data-toggle=\"toggleHeading\" data-tag=\"h1\" @click=\"show=false\">H1</button>\n              <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip toggle\" data-toggle=\"toggleHeading\" data-tag=\"h2\" @click=\"show=false\">H2</button>\n              <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip toggle\" data-toggle=\"toggleHeading\" data-tag=\"h3\" @click=\"show=false\">H3</button>\n            </div>\n          </div>\n          <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip\" data-tag=\"p\">p</button>\n          <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip\" data-tag=\"a\" data-class=\"text-blue-600\">a</button>\n          <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip\" data-tag=\"div\">div</button>\n          <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip\" data-tag=\"div\" data-class=\"flex\">flex</button>\n          <button class=\"border border-gray-600 py-1 px-3 text-sm rounded shadow ").concat(this.target, "_tooltip\" data-tag=\"button\" data-class=\"py-1 px-4 shadow rounded\">Button</button>\n        </div>\n      ");
  }
};
exports.default = _default;
},{}],"helpers/tooltip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  tooltip: function tooltip() {
    this.tooltipHandleBind();
  },
  tooltipHandleBind: function tooltipHandleBind() {
    var _this = this;

    var tooltips = document.querySelectorAll(".".concat(this.target, "_tooltip"));
    tooltips.forEach(function (el) {
      return el.addEventListener("click", function (e) {
        _this.tooltipHandleTag(e.target.dataset.tag, e.target.dataset.class);
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
};
exports.default = _default;
},{}],"Editor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Rapyd2 = _interopRequireDefault(require("./Rapyd"));

var _html = _interopRequireDefault(require("./html/html"));

var _tooltip = _interopRequireDefault(require("./helpers/tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Editor = /*#__PURE__*/function (_Rapyd) {
  _inherits(Editor, _Rapyd);

  var _super = _createSuper(Editor);

  function Editor(target) {
    var _this;

    _classCallCheck(this, Editor);

    _this = _super.call(this, {}, _objectSpread(_objectSpread({}, _html.default), _tooltip.default));

    _defineProperty(_assertThisInitialized(_this), "target", void 0);

    _defineProperty(_assertThisInitialized(_this), "editor", null);

    _defineProperty(_assertThisInitialized(_this), "initValue", "");

    _this.target = target;

    _this.init();

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

      if (content.length < 40) {
        content.length = 40;
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
      var initValue = document.getElementById(this.target).dataset.value;
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
}(_Rapyd2.default);

var _default = Editor;
exports.default = _default;
},{"./Rapyd":"Rapyd.js","./html/html":"html/html.js","./helpers/tooltip":"helpers/tooltip.js"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50015" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","Editor.js"], null)
//# sourceMappingURL=/Editor.js.map