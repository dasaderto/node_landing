/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/wowjs/dist/wow.js":
/*!****************************************!*\
  !*** ./node_modules/wowjs/dist/wow.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() {\n  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,\n    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },\n    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\n  Util = (function() {\n    function Util() {}\n\n    Util.prototype.extend = function(custom, defaults) {\n      var key, value;\n      for (key in defaults) {\n        value = defaults[key];\n        if (custom[key] == null) {\n          custom[key] = value;\n        }\n      }\n      return custom;\n    };\n\n    Util.prototype.isMobile = function(agent) {\n      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);\n    };\n\n    Util.prototype.createEvent = function(event, bubble, cancel, detail) {\n      var customEvent;\n      if (bubble == null) {\n        bubble = false;\n      }\n      if (cancel == null) {\n        cancel = false;\n      }\n      if (detail == null) {\n        detail = null;\n      }\n      if (document.createEvent != null) {\n        customEvent = document.createEvent('CustomEvent');\n        customEvent.initCustomEvent(event, bubble, cancel, detail);\n      } else if (document.createEventObject != null) {\n        customEvent = document.createEventObject();\n        customEvent.eventType = event;\n      } else {\n        customEvent.eventName = event;\n      }\n      return customEvent;\n    };\n\n    Util.prototype.emitEvent = function(elem, event) {\n      if (elem.dispatchEvent != null) {\n        return elem.dispatchEvent(event);\n      } else if (event in (elem != null)) {\n        return elem[event]();\n      } else if ((\"on\" + event) in (elem != null)) {\n        return elem[\"on\" + event]();\n      }\n    };\n\n    Util.prototype.addEvent = function(elem, event, fn) {\n      if (elem.addEventListener != null) {\n        return elem.addEventListener(event, fn, false);\n      } else if (elem.attachEvent != null) {\n        return elem.attachEvent(\"on\" + event, fn);\n      } else {\n        return elem[event] = fn;\n      }\n    };\n\n    Util.prototype.removeEvent = function(elem, event, fn) {\n      if (elem.removeEventListener != null) {\n        return elem.removeEventListener(event, fn, false);\n      } else if (elem.detachEvent != null) {\n        return elem.detachEvent(\"on\" + event, fn);\n      } else {\n        return delete elem[event];\n      }\n    };\n\n    Util.prototype.innerHeight = function() {\n      if ('innerHeight' in window) {\n        return window.innerHeight;\n      } else {\n        return document.documentElement.clientHeight;\n      }\n    };\n\n    return Util;\n\n  })();\n\n  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {\n    function WeakMap() {\n      this.keys = [];\n      this.values = [];\n    }\n\n    WeakMap.prototype.get = function(key) {\n      var i, item, j, len, ref;\n      ref = this.keys;\n      for (i = j = 0, len = ref.length; j < len; i = ++j) {\n        item = ref[i];\n        if (item === key) {\n          return this.values[i];\n        }\n      }\n    };\n\n    WeakMap.prototype.set = function(key, value) {\n      var i, item, j, len, ref;\n      ref = this.keys;\n      for (i = j = 0, len = ref.length; j < len; i = ++j) {\n        item = ref[i];\n        if (item === key) {\n          this.values[i] = value;\n          return;\n        }\n      }\n      this.keys.push(key);\n      return this.values.push(value);\n    };\n\n    return WeakMap;\n\n  })());\n\n  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {\n    function MutationObserver() {\n      if (typeof console !== \"undefined\" && console !== null) {\n        console.warn('MutationObserver is not supported by your browser.');\n      }\n      if (typeof console !== \"undefined\" && console !== null) {\n        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');\n      }\n    }\n\n    MutationObserver.notSupported = true;\n\n    MutationObserver.prototype.observe = function() {};\n\n    return MutationObserver;\n\n  })());\n\n  getComputedStyle = this.getComputedStyle || function(el, pseudo) {\n    this.getPropertyValue = function(prop) {\n      var ref;\n      if (prop === 'float') {\n        prop = 'styleFloat';\n      }\n      if (getComputedStyleRX.test(prop)) {\n        prop.replace(getComputedStyleRX, function(_, _char) {\n          return _char.toUpperCase();\n        });\n      }\n      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;\n    };\n    return this;\n  };\n\n  getComputedStyleRX = /(\\-([a-z]){1})/g;\n\n  this.WOW = (function() {\n    WOW.prototype.defaults = {\n      boxClass: 'wow',\n      animateClass: 'animated',\n      offset: 0,\n      mobile: true,\n      live: true,\n      callback: null,\n      scrollContainer: null\n    };\n\n    function WOW(options) {\n      if (options == null) {\n        options = {};\n      }\n      this.scrollCallback = bind(this.scrollCallback, this);\n      this.scrollHandler = bind(this.scrollHandler, this);\n      this.resetAnimation = bind(this.resetAnimation, this);\n      this.start = bind(this.start, this);\n      this.scrolled = true;\n      this.config = this.util().extend(options, this.defaults);\n      if (options.scrollContainer != null) {\n        this.config.scrollContainer = document.querySelector(options.scrollContainer);\n      }\n      this.animationNameCache = new WeakMap();\n      this.wowEvent = this.util().createEvent(this.config.boxClass);\n    }\n\n    WOW.prototype.init = function() {\n      var ref;\n      this.element = window.document.documentElement;\n      if ((ref = document.readyState) === \"interactive\" || ref === \"complete\") {\n        this.start();\n      } else {\n        this.util().addEvent(document, 'DOMContentLoaded', this.start);\n      }\n      return this.finished = [];\n    };\n\n    WOW.prototype.start = function() {\n      var box, j, len, ref;\n      this.stopped = false;\n      this.boxes = (function() {\n        var j, len, ref, results;\n        ref = this.element.querySelectorAll(\".\" + this.config.boxClass);\n        results = [];\n        for (j = 0, len = ref.length; j < len; j++) {\n          box = ref[j];\n          results.push(box);\n        }\n        return results;\n      }).call(this);\n      this.all = (function() {\n        var j, len, ref, results;\n        ref = this.boxes;\n        results = [];\n        for (j = 0, len = ref.length; j < len; j++) {\n          box = ref[j];\n          results.push(box);\n        }\n        return results;\n      }).call(this);\n      if (this.boxes.length) {\n        if (this.disabled()) {\n          this.resetStyle();\n        } else {\n          ref = this.boxes;\n          for (j = 0, len = ref.length; j < len; j++) {\n            box = ref[j];\n            this.applyStyle(box, true);\n          }\n        }\n      }\n      if (!this.disabled()) {\n        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);\n        this.util().addEvent(window, 'resize', this.scrollHandler);\n        this.interval = setInterval(this.scrollCallback, 50);\n      }\n      if (this.config.live) {\n        return new MutationObserver((function(_this) {\n          return function(records) {\n            var k, len1, node, record, results;\n            results = [];\n            for (k = 0, len1 = records.length; k < len1; k++) {\n              record = records[k];\n              results.push((function() {\n                var l, len2, ref1, results1;\n                ref1 = record.addedNodes || [];\n                results1 = [];\n                for (l = 0, len2 = ref1.length; l < len2; l++) {\n                  node = ref1[l];\n                  results1.push(this.doSync(node));\n                }\n                return results1;\n              }).call(_this));\n            }\n            return results;\n          };\n        })(this)).observe(document.body, {\n          childList: true,\n          subtree: true\n        });\n      }\n    };\n\n    WOW.prototype.stop = function() {\n      this.stopped = true;\n      this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);\n      this.util().removeEvent(window, 'resize', this.scrollHandler);\n      if (this.interval != null) {\n        return clearInterval(this.interval);\n      }\n    };\n\n    WOW.prototype.sync = function(element) {\n      if (MutationObserver.notSupported) {\n        return this.doSync(this.element);\n      }\n    };\n\n    WOW.prototype.doSync = function(element) {\n      var box, j, len, ref, results;\n      if (element == null) {\n        element = this.element;\n      }\n      if (element.nodeType !== 1) {\n        return;\n      }\n      element = element.parentNode || element;\n      ref = element.querySelectorAll(\".\" + this.config.boxClass);\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        box = ref[j];\n        if (indexOf.call(this.all, box) < 0) {\n          this.boxes.push(box);\n          this.all.push(box);\n          if (this.stopped || this.disabled()) {\n            this.resetStyle();\n          } else {\n            this.applyStyle(box, true);\n          }\n          results.push(this.scrolled = true);\n        } else {\n          results.push(void 0);\n        }\n      }\n      return results;\n    };\n\n    WOW.prototype.show = function(box) {\n      this.applyStyle(box);\n      box.className = box.className + \" \" + this.config.animateClass;\n      if (this.config.callback != null) {\n        this.config.callback(box);\n      }\n      this.util().emitEvent(box, this.wowEvent);\n      this.util().addEvent(box, 'animationend', this.resetAnimation);\n      this.util().addEvent(box, 'oanimationend', this.resetAnimation);\n      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);\n      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);\n      return box;\n    };\n\n    WOW.prototype.applyStyle = function(box, hidden) {\n      var delay, duration, iteration;\n      duration = box.getAttribute('data-wow-duration');\n      delay = box.getAttribute('data-wow-delay');\n      iteration = box.getAttribute('data-wow-iteration');\n      return this.animate((function(_this) {\n        return function() {\n          return _this.customStyle(box, hidden, duration, delay, iteration);\n        };\n      })(this));\n    };\n\n    WOW.prototype.animate = (function() {\n      if ('requestAnimationFrame' in window) {\n        return function(callback) {\n          return window.requestAnimationFrame(callback);\n        };\n      } else {\n        return function(callback) {\n          return callback();\n        };\n      }\n    })();\n\n    WOW.prototype.resetStyle = function() {\n      var box, j, len, ref, results;\n      ref = this.boxes;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        box = ref[j];\n        results.push(box.style.visibility = 'visible');\n      }\n      return results;\n    };\n\n    WOW.prototype.resetAnimation = function(event) {\n      var target;\n      if (event.type.toLowerCase().indexOf('animationend') >= 0) {\n        target = event.target || event.srcElement;\n        return target.className = target.className.replace(this.config.animateClass, '').trim();\n      }\n    };\n\n    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {\n      if (hidden) {\n        this.cacheAnimationName(box);\n      }\n      box.style.visibility = hidden ? 'hidden' : 'visible';\n      if (duration) {\n        this.vendorSet(box.style, {\n          animationDuration: duration\n        });\n      }\n      if (delay) {\n        this.vendorSet(box.style, {\n          animationDelay: delay\n        });\n      }\n      if (iteration) {\n        this.vendorSet(box.style, {\n          animationIterationCount: iteration\n        });\n      }\n      this.vendorSet(box.style, {\n        animationName: hidden ? 'none' : this.cachedAnimationName(box)\n      });\n      return box;\n    };\n\n    WOW.prototype.vendors = [\"moz\", \"webkit\"];\n\n    WOW.prototype.vendorSet = function(elem, properties) {\n      var name, results, value, vendor;\n      results = [];\n      for (name in properties) {\n        value = properties[name];\n        elem[\"\" + name] = value;\n        results.push((function() {\n          var j, len, ref, results1;\n          ref = this.vendors;\n          results1 = [];\n          for (j = 0, len = ref.length; j < len; j++) {\n            vendor = ref[j];\n            results1.push(elem[\"\" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);\n          }\n          return results1;\n        }).call(this));\n      }\n      return results;\n    };\n\n    WOW.prototype.vendorCSS = function(elem, property) {\n      var j, len, ref, result, style, vendor;\n      style = getComputedStyle(elem);\n      result = style.getPropertyCSSValue(property);\n      ref = this.vendors;\n      for (j = 0, len = ref.length; j < len; j++) {\n        vendor = ref[j];\n        result = result || style.getPropertyCSSValue(\"-\" + vendor + \"-\" + property);\n      }\n      return result;\n    };\n\n    WOW.prototype.animationName = function(box) {\n      var animationName, error;\n      try {\n        animationName = this.vendorCSS(box, 'animation-name').cssText;\n      } catch (error) {\n        animationName = getComputedStyle(box).getPropertyValue('animation-name');\n      }\n      if (animationName === 'none') {\n        return '';\n      } else {\n        return animationName;\n      }\n    };\n\n    WOW.prototype.cacheAnimationName = function(box) {\n      return this.animationNameCache.set(box, this.animationName(box));\n    };\n\n    WOW.prototype.cachedAnimationName = function(box) {\n      return this.animationNameCache.get(box);\n    };\n\n    WOW.prototype.scrollHandler = function() {\n      return this.scrolled = true;\n    };\n\n    WOW.prototype.scrollCallback = function() {\n      var box;\n      if (this.scrolled) {\n        this.scrolled = false;\n        this.boxes = (function() {\n          var j, len, ref, results;\n          ref = this.boxes;\n          results = [];\n          for (j = 0, len = ref.length; j < len; j++) {\n            box = ref[j];\n            if (!(box)) {\n              continue;\n            }\n            if (this.isVisible(box)) {\n              this.show(box);\n              continue;\n            }\n            results.push(box);\n          }\n          return results;\n        }).call(this);\n        if (!(this.boxes.length || this.config.live)) {\n          return this.stop();\n        }\n      }\n    };\n\n    WOW.prototype.offsetTop = function(element) {\n      var top;\n      while (element.offsetTop === void 0) {\n        element = element.parentNode;\n      }\n      top = element.offsetTop;\n      while (element = element.offsetParent) {\n        top += element.offsetTop;\n      }\n      return top;\n    };\n\n    WOW.prototype.isVisible = function(box) {\n      var bottom, offset, top, viewBottom, viewTop;\n      offset = box.getAttribute('data-wow-offset') || this.config.offset;\n      viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;\n      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;\n      top = this.offsetTop(box);\n      bottom = top + box.clientHeight;\n      return top <= viewBottom && bottom >= viewTop;\n    };\n\n    WOW.prototype.util = function() {\n      return this._util != null ? this._util : this._util = new Util();\n    };\n\n    WOW.prototype.disabled = function() {\n      return !this.config.mobile && this.util().isMobile(navigator.userAgent);\n    };\n\n    return WOW;\n\n  })();\n\n}).call(this);\n\n\n//# sourceURL=webpack:///./node_modules/wowjs/dist/wow.js?");

/***/ }),

/***/ "./public/css/nav.css":
/*!****************************!*\
  !*** ./public/css/nav.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./public/css/nav.css?");

/***/ }),

/***/ "./public/css/pepper.css":
/*!*******************************!*\
  !*** ./public/css/pepper.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./public/css/pepper.css?");

/***/ }),

/***/ "./public/css/preloader.css":
/*!**********************************!*\
  !*** ./public/css/preloader.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./public/css/preloader.css?");

/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./public/css/style.css?");

/***/ }),

/***/ "./public/css/styles.js":
/*!******************************!*\
  !*** ./public/css/styles.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./public/css/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pepper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pepper.css */ \"./public/css/pepper.css\");\n/* harmony import */ var _pepper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pepper_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _preloader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preloader.css */ \"./public/css/preloader.css\");\n/* harmony import */ var _preloader_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_preloader_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav.css */ \"./public/css/nav.css\");\n/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nav_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./public/css/styles.js?");

/***/ }),

/***/ "./public/js/script.js":
/*!*****************************!*\
  !*** ./public/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wowjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wowjs */ \"./node_modules/wowjs/dist/wow.js\");\n/* harmony import */ var wowjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wowjs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst styles = __webpack_require__(/*! ../css/styles.js */ \"./public/css/styles.js\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  'use strict';\n\n  var slider = Peppermint(document.getElementById('peppermint'));\n  let prev = document.querySelector('.prev'),\n      next = document.querySelector('.next');\n  prev.addEventListener('click', function () {\n    slider.next();\n  });\n  next.addEventListener('click', function () {\n    slider.prev();\n  });\n  slider.start();\n\n  window.onresize = function (event) {\n    slider.recalcWidth();\n  };\n\n  const wow = new wowjs__WEBPACK_IMPORTED_MODULE_0___default.a.WOW({});\n  wow.init(); //nav\n\n  let btn = document.querySelector(\".menu-icon\");\n  let collapse = document.querySelector('.nav__collapse');\n  let menu = document.querySelector(\".menu-icon\");\n  let lines = menu.querySelectorAll(\".line\");\n  btn.addEventListener('click', function () {\n    if (collapse.classList.contains(\"show\")) {\n      collapse.classList.remove(\"show\");\n      collapse.style.maxHeight = null;\n      lines[0].style.width = \"30px\";\n      lines[1].style.width = \"15px\";\n      lines[2].style.width = \"20px\";\n    } else {\n      collapse.classList.add(\"show\");\n      collapse.style.maxHeight = collapse.scrollHeight + \"px\";\n      menu.children[0].style.width = \"30px\";\n      menu.children[1].style.width = \"30px\";\n      menu.children[2].style.width = \"30px\";\n    }\n  });\n});\n\n//# sourceURL=webpack:///./public/js/script.js?");

/***/ })

/******/ });