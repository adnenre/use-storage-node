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
var _CryptoService_cryptKey;
import CryptoJS from "crypto-js";
class CryptoService {
    constructor(cryptKey) {
        _CryptoService_cryptKey.set(this, void 0);
        __classPrivateFieldSet(this, _CryptoService_cryptKey, cryptKey, "f");
    }
    /**
     * ENCRYPT DATA
     * @param {DATA} - string
     * @returns encrypted string
     */
    encrypt(data) {
        return CryptoJS.AES.encrypt(JSON.stringify(data), __classPrivateFieldGet(this, _CryptoService_cryptKey, "f")).toString();
    }
    /**
    * DECRYPT DATA
    * @param {DATA} - encrypted string
    * @returns decrypted string
    */
    decrypt(data) {
        const bytes = CryptoJS.AES.decrypt(data, __classPrivateFieldGet(this, _CryptoService_cryptKey, "f"));
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    }
}
_CryptoService_cryptKey = new WeakMap();
export default CryptoService;
