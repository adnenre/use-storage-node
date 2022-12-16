import CryptoJS from 'crypto-js';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var __classPrivateFieldSet$1 = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet$1 = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CryptoService_cryptKey;
var CryptoService = /*#__PURE__*/function () {
  function CryptoService(cryptKey) {
    _classCallCheck(this, CryptoService);
    _CryptoService_cryptKey.set(this, void 0);
    __classPrivateFieldSet$1(this, _CryptoService_cryptKey, cryptKey, "f");
  }
  /**
   * ENCRYPT DATA
   * @param {DATA} - string
   * @returns encrypted string
   */
  _createClass(CryptoService, [{
    key: "encrypt",
    value: function encrypt(data) {
      return CryptoJS.AES.encrypt(JSON.stringify(data), __classPrivateFieldGet$1(this, _CryptoService_cryptKey, "f")).toString();
    }
    /**
    * DECRYPT DATA
    * @param {DATA} - encrypted string
    * @returns decrypted string
    */
  }, {
    key: "decrypt",
    value: function decrypt(data) {
      var bytes = CryptoJS.AES.decrypt(data, __classPrivateFieldGet$1(this, _CryptoService_cryptKey, "f"));
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    }
  }]);
  return CryptoService;
}();
_CryptoService_cryptKey = new WeakMap();

var NodeStorage = /*#__PURE__*/function () {
  function NodeStorage() {
    _classCallCheck(this, NodeStorage);
    this.storage = {};
  }
  _createClass(NodeStorage, [{
    key: "setItem",
    value: function setItem(key, value) {
      this.storage[key] = value;
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return this.storage[key];
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      delete this.storage[key];
      return this.storage;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.storage = {};
    }
  }]);
  return NodeStorage;
}();

var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StorageService_crs;
var StorageService = /*#__PURE__*/function () {
  function StorageService(storageKey) {
    _classCallCheck(this, StorageService);
    _StorageService_crs.set(this, void 0);
    __classPrivateFieldSet(this, _StorageService_crs, new CryptoService(storageKey), "f");
    this.s = typeof window != "undefined" ? window.localStorage : new NodeStorage();
  }
  /**
   * ADD A CRYPTED ITEM
   * @param {key} key
   * @param {data} data
   * @returns undefined
   */
  _createClass(StorageService, [{
    key: "setItem",
    value: function setItem(key, data) {
      var cdata = __classPrivateFieldGet(this, _StorageService_crs, "f").encrypt(data);
      this.s.setItem(key, JSON.stringify(cdata));
    }
    /**
     * GET ITEM
     * @param {key} key
     * @returns decrypted data
     */
  }, {
    key: "getItem",
    value: function getItem(key) {
      var item = this.s.getItem(key);
      if (item) {
        var data = JSON.parse(item);
        return __classPrivateFieldGet(this, _StorageService_crs, "f").decrypt(data);
      }
      return null;
    }
    /**
     * REMOVE ITEM
     * @param {key} key
     * @returns undefined
     */
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      this.s.removeItem(key);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.s.clear();
    }
  }]);
  return StorageService;
}();
_StorageService_crs = new WeakMap();

var useStorage = function useStorage(cryptokey) {
  return new StorageService(cryptokey);
};

export { useStorage as default };
