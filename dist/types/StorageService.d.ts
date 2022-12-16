import NodeStorage from "./NodeStorage.js";
declare class StorageService {
    #private;
    s: NodeStorage | Storage;
    constructor(cryptKey: string);
    /**
     * ADD A CRYPTED ITEM
     * @param {key} key
     * @param {data} data
     * @returns undefined
     */
    setItem(key: string, data: any): void;
    /**
     * GET ITEM
     * @param {key} key
     * @returns decrypted data
     */
    getItem(key: string): any;
    /**
     * REMOVE ITEM
     * @param {key} key
     * @returns undefined
     */
    removeItem(key: string): void;
    clear(): void;
}
export default StorageService;
//# sourceMappingURL=StorageService.d.ts.map