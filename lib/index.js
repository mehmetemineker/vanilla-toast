"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function () {
  var toastPosition = {
    TopLeft: "top-left",
    TopCenter: "top-center",
    TopRight: "top-right",
    BottomLeft: "bottom-left",
    BottomCenter: "bottom-center",
    BottomRight: "bottom-right"
  };
  var toastPositionIndex = [[toastPosition.TopLeft, toastPosition.TopCenter, toastPosition.TopRight], [toastPosition.BottomLeft, toastPosition.BottomCenter, toastPosition.BottomRight]];
  var svgs = {
    success: '<svg viewBox="0 0 426.667 426.667" width="18" height="18"><path d="M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.157 0 213.333 0zm-39.134 322.918l-93.935-93.931 31.309-31.309 62.626 62.622 140.894-140.898 31.309 31.309-172.203 172.207z" fill="#6ac259"></path></svg>',
    warn: '<svg viewBox="0 0 310.285 310.285" width=18 height=18> <path d="M264.845 45.441C235.542 16.139 196.583 0 155.142 0 113.702 0 74.743 16.139 45.44 45.441 16.138 74.743 0 113.703 0 155.144c0 41.439 16.138 80.399 45.44 109.701 29.303 29.303 68.262 45.44 109.702 45.44s80.399-16.138 109.702-45.44c29.303-29.302 45.44-68.262 45.44-109.701.001-41.441-16.137-80.401-45.439-109.703zm-132.673 3.895a12.587 12.587 0 0 1 9.119-3.873h28.04c3.482 0 6.72 1.403 9.114 3.888 2.395 2.485 3.643 5.804 3.514 9.284l-4.634 104.895c-.263 7.102-6.26 12.933-13.368 12.933H146.33c-7.112 0-13.099-5.839-13.345-12.945L128.64 58.594c-.121-3.48 1.133-6.773 3.532-9.258zm23.306 219.444c-16.266 0-28.532-12.844-28.532-29.876 0-17.223 12.122-30.211 28.196-30.211 16.602 0 28.196 12.423 28.196 30.211.001 17.591-11.456 29.876-27.86 29.876z" fill="#FFDA44" /> </svg>',
    info: '<svg viewBox="0 0 23.625 23.625" width=18 height=18> <path d="M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813S18.335 0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539s-.611-.814-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193z" fill="#006DF0" /> </svg>',
    error: '<svg viewBox="0 0 51.976 51.976" width=18 height=18> <path d="M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 0 1-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 1 1-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 1 1 2.828-2.828l7.425 7.425 7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 0 1 0 2.828z" fill="#D80027" /> </svg>'
  };

  var VTContainer = /*#__PURE__*/function (_HTMLElement) {
    _inherits(VTContainer, _HTMLElement);

    var _super = _createSuper(VTContainer);

    function VTContainer() {
      _classCallCheck(this, VTContainer);

      return _super.call(this);
    }

    return VTContainer;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  var VTRow = /*#__PURE__*/function (_HTMLElement2) {
    _inherits(VTRow, _HTMLElement2);

    var _super2 = _createSuper(VTRow);

    function VTRow() {
      _classCallCheck(this, VTRow);

      return _super2.call(this);
    }

    return VTRow;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  var VTCol = /*#__PURE__*/function (_HTMLElement3) {
    _inherits(VTCol, _HTMLElement3);

    var _super3 = _createSuper(VTCol);

    function VTCol(position) {
      var _this;

      _classCallCheck(this, VTCol);

      _this = _super3.call(this);
      _this.className = position;
      return _this;
    }

    return VTCol;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  var VTCard = /*#__PURE__*/function (_HTMLElement4) {
    _inherits(VTCard, _HTMLElement4);

    var _super4 = _createSuper(VTCard);

    function VTCard(options) {
      var _this2;

      _classCallCheck(this, VTCard);

      _this2 = _super4.call(this);
      _this2.focus = false;

      _this2.autoDestroy(options.duration);

      _this2.resolve = options.resolve;
      _this2.ypos = options.position.indexOf("top") > -1 ? "top" : "bottom";
      var textGroupDiv = document.createElement("div");
      textGroupDiv.className = "text-group";

      if (options.title) {
        textGroupDiv.innerHTML = "<h4>".concat(options.title, "</h4>");
      }

      textGroupDiv.innerHTML += "<p>".concat(options.message, "</p>");
      _this2.innerHTML += svgs[options.type];
      _this2.className = options.type;

      _this2.appendChild(textGroupDiv);

      _this2.addEventListener("click", function () {
        if (options.closable) {
          _this2.destroy();
        }
      });

      _this2.addEventListener("mouseover", function () {
        _this2.focus = options.focusable;
      });

      _this2.addEventListener("mouseout", function () {
        _this2.focus = false;

        _this2.autoDestroy(options.duration);
      });

      _this2.style.setProperty("margin-".concat(_this2.ypos), "-15px");

      _this2.style.setProperty("opacity", "0");

      setTimeout(function () {
        _this2.style.setProperty("margin-".concat(_this2.ypos), "15px");

        _this2.style.setProperty("opacity", "1");
      }, 50);
      return _this2;
    }

    _createClass(VTCard, [{
      key: "destroy",
      value: function destroy() {
        var _this3 = this;

        this.style.setProperty("margin-".concat(this.ypos), "-".concat(this.offsetHeight, "px"));
        this.style.setProperty("opacity", "0");
        setTimeout(function () {
          _this3.remove();

          _this3.resolve("ok");
        }, 500);
      }
    }, {
      key: "autoDestroy",
      value: function autoDestroy(duration) {
        var _this4 = this;

        if (duration !== 0) {
          setTimeout(function () {
            if (!_this4.focus) {
              _this4.destroy();
            }
          }, duration);
        }
      }
    }]);

    return VTCard;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  customElements.define("vt-container", VTContainer);
  customElements.define("vt-row", VTRow);
  customElements.define("vt-col", VTCol);
  customElements.define("vt-card", VTCard);
  var styles = "\n        vt-container {\n            position: fixed;\n            width: 100%;\n            height: 100vh;\n            top: 0;\n            left: 0;\n            z-index: 9999;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            pointer-events: none;\n        }\n\n        vt-row {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        vt-col {\n            flex: 1;\n            margin: 10px 20px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n\n        vt-col.top-left,\n        vt-col.bottom-left {\n            align-items: flex-start;\n        }\n\n        vt-col.top-right,\n        vt-col.bottom-right {\n            align-items: flex-end;\n        }\n\n        vt-card {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            padding: 12px 20px;\n            background-color: #fff;\n            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n            color: #000;\n            border-radius: 4px;\n            margin: 0px;\n            transition: 0.3s all ease-in-out;\n            pointer-events: all;\n            border-left: 3px solid #8b8b8b;\n            cursor: pointer;\n        }\n\n        vt-card.success {\n            border-left: 3px solid #6ec05f;\n        }\n\n        vt-card.warn {\n            border-left: 3px solid #fed953;\n        }\n\n        vt-card.info {\n            border-left: 3px solid #1271ec;\n        }\n\n        vt-card.error {\n            border-left: 3px solid #d60a2e;\n        }\n\n        vt-card .text-group {\n            margin-left: 15px;\n        }\n\n        vt-card h4 {\n            margin: 0;\n            margin-bottom: 10px;\n            font-size: 16px;\n            font-weight: 500;\n        }\n\n        vt-card p {\n            margin: 0;\n            font-size: 14px;\n        }\n    ";
  var styleSheet = document.createElement("style");
  styleSheet.innerText = styles.replace(/  |\r\n|\n|\r/gm, "");
  document.head.appendChild(styleSheet);
  var vtContainer = new VTContainer();

  for (var _i = 0, _arr = [0, 1]; _i < _arr.length; _i++) {
    var ri = _arr[_i];
    var row = new VTRow();

    for (var _i2 = 0, _arr2 = [0, 1, 2]; _i2 < _arr2.length; _i2++) {
      var ci = _arr2[_i2];
      var col = new VTCol(toastPositionIndex[ri][ci]);
      row.appendChild(col);
    }

    vtContainer.appendChild(row);
  }

  document.body.appendChild(vtContainer);
  window.vt = {
    options: {
      title: undefined,
      position: toastPosition.TopCenter,
      duration: 2000,
      closable: true,
      focusable: true
    },
    success: function success(message, options) {
      return show(message, options, "success");
    },
    info: function info(message, options) {
      return show(message, options, "info");
    },
    warn: function warn(message, options) {
      return show(message, options, "warn");
    },
    error: function error(message, options) {
      return show(message, options, "error");
    }
  };

  function show() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "My name is Toast, Vanilla Toast.";
    var options = arguments.length > 1 ? arguments[1] : undefined;
    var type = arguments.length > 2 ? arguments[2] : undefined;
    return new Promise(function (resolve) {
      options = _objectSpread(_objectSpread({}, window.vt.options), options);
      var col = document.getElementsByClassName(options.position)[0];
      var card = new VTCard(_objectSpread(_objectSpread({}, options), {
        message: message,
        type: type,
        resolve: resolve
      }));
      col.appendChild(card);
    });
  }
})();