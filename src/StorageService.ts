import CryptoService from "./CryptoService.js";
import NodeStorage from "./NodeStorage.js";

class StorageService  {
  #crs;
  s;
  constructor(cryptKey: string) {
   
    this.#crs = new CryptoService(cryptKey);
    this.s =
      typeof window != "undefined" ? window.localStorage : new NodeStorage();
  }
  /**
   * ADD A CRYPTED ITEM
   * @param {key} key
   * @param {data} data
   * @returns undefined
   */
  setItem(key: string, data: any) {
    const cdata = this.#crs.encrypt(data);
    this.s.setItem(key, JSON.stringify(cdata));
  }
  /**
   * GET ITEM
   * @param {key} key
   * @returns decrypted data
   */
  getItem(key: string) {
    const item = this.s.getItem(key);
    if (item) {
      const data = JSON.parse(item);
      return this.#crs.decrypt(data);
    }
    return null;
  }
  /**
   * REMOVE ITEM
   * @param {key} key
   * @returns undefined
   */
  removeItem(key: string) {
    this.s.removeItem(key);
  }
  clear() {
    this.s.clear();
  }
}

export default StorageService;
