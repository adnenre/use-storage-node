declare class CryptoService {
    #private;
    constructor(cryptKey: string);
    /**
     * ENCRYPT DATA
     * @param {DATA} - string
     * @returns encrypted string
     */
    encrypt(data: any): string;
    /**
    * DECRYPT DATA
    * @param {DATA} - encrypted string
    * @returns decrypted string
    */
    decrypt(data: string): any;
}
export default CryptoService;
//# sourceMappingURL=CryptoService.d.ts.map