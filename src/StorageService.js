var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StorageService_crs;
import CryptoService from "./CryptoService.js";
import NodeStorage from "./NodeStorage.js";
class StorageService {
    constructor(storageKey) {
        _StorageService_crs.set(this, void 0);
        __classPrivateFieldSet(this, _StorageService_crs, new CryptoService(storageKey), "f");
        this.s =
            typeof window != "undefined" ? window.localStorage : new NodeStorage();
    }
    /**
     * ADD A CRYPTED ITEM
     * @param {key} key
     * @param {data} data
     * @returns undefined
     */
    setItem(key, data) {
        const cdata = __classPrivateFieldGet(this, _StorageService_crs, "f").encrypt(data);
        this.s.setItem(key, JSON.stringify(cdata));
    }
    /**
     * GET ITEM
     * @param {key} key
     * @returns decrypted data
     */
    getItem(key) {
        const item = this.s.getItem(key);
        if (item) {
            const data = JSON.parse(item);
            return __classPrivateFieldGet(this, _StorageService_crs, "f").decrypt(data);
        }
        return null;
    }
    /**
     * REMOVE ITEM
     * @param {key} key
     * @returns undefined
     */
    removeItem(key) {
        this.s.removeItem(key);
    }
    clear() {
        this.s.clear();
    }
}
_StorageService_crs = new WeakMap();
export default StorageService;
