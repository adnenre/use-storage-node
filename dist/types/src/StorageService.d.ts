declare class StorageService extends Storage {
    #private;
    constructor(storageKey: string);
    /**
     * ADD A CRYPTED ITEM
     * @param {key} key
     * @param {data} data
     * @returns undefined
     */
    setItem(key: string, data: string): void;
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